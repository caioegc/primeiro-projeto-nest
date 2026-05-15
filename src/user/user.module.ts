import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ConfigModule } from '@nestjs/config';
import { UserService } from './user.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule, ConfigModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
