/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthService } from '../auth/auth.service'; // Import AuthService if it's provided within this module
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [UserService, AuthService,JwtService], // Make sure AuthService is provided here if it's part of this module
  controllers: [UserController]
})
export class UserModule {}