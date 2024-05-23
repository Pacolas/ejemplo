/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MuseumService } from './museum.service';
import { MuseumController } from './museum.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MuseumEntity } from './museum.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([MuseumEntity])
  ],
  providers: [MuseumService],
  controllers: [MuseumController]
})
export class MuseumModule {}
