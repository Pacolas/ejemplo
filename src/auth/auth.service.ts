/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import constants from '../shared/security/constants';
import { User } from '../user/user/user';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
   constructor(
       private usersService: UserService,
       private jwtService: JwtService
   ) {}

   async validateUser(username: string, password: string): Promise<any> {
       const user: User = await this.usersService.findOne(username);
       if (user && user.password === password) {
           const { password, ...result } = user;
           return result;
       }
       return null;
   }
   async login(req: any) {
    const payload = { name: req.user.username, sub: req.user.id };
    return {
        token: this.jwtService.sign(payload, { privateKey: constants.JWT_SECRET }),
    };
}
}

/* archivo: src/auth/auth.service.ts */