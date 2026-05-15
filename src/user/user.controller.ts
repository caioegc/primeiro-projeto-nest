import { Prisma } from './../generated/prisma/client';
import { Controller, Body, Post } from '@nestjs/common';
import { User as UserModel } from '../generated/prisma/client';
import {UserService} from './user.service'


@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}

@Post('signup')
  async signupUser(
    @Body() userData: Prisma.UserCreateInput,
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

}

