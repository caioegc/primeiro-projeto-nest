import { Prisma } from './../generated/prisma/client';
import { Controller, Body, Post, Get, Put, Param, NotFoundException, Delete } from '@nestjs/common';
import { User as UserModel } from '../generated/prisma/client';
import {UserService} from './user.service'



@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}

@Post()
  async signupUser(
    @Body() userData: Prisma.UserCreateInput,
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Get(':id')
  async getUser(@Param('id') id: string 
): Promise<UserModel>{
    const userId = await this.userService.getUser({id: Number(id)});

    if (!userId) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return userId;

  }

  @Get()
  async findAll(): Promise<UserModel[]>{

    const user = await this.userService.getAll();
    return user;
  }


  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() userData: Prisma.UserUpdateInput): 
    Promise<UserModel>{
        return this.userService.updateUser({id: Number(id)}, userData)
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise <UserModel>{
    return this.userService.deleteUser({id: Number(id)})
  }


}
