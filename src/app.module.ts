import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { PrismaService } from './database/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth/auth.service';


@Module({
  imports: [AuthModule, UserModule, DatabaseModule, ConfigModule.forRoot()],
  controllers: [UserController],
  providers: [UserService, PrismaService, AuthService],
})
export class AppModule {}
