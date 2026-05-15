import { Injectable } from '@nestjs/common';
import { Prisma, User } from '../generated/prisma/client';
import { PrismaService } from '../database/prisma.service';
import * as bcrypt from 'bcrypt';
import { UserWhereUniqueInput } from '../generated/prisma/models';

@Injectable()
export class UserService {

    constructor(private readonly prisma: PrismaService){}

    async getUser(userUniqueInput: UserWhereUniqueInput

    ): Promise <User | null>{

    return this.prisma.user.findUnique({
    where: userUniqueInput
    });
    }

    async getAll(): Promise<User[]>{
        return this.prisma.user.findMany();
    }


    async createUser(data: Prisma.UserCreateInput){

            const hash = await bcrypt.hash(data.password, 10);

            return this.prisma.user.create({
                data:{...data, password: hash},
    });
}

    async updateUser(
    filtro: Prisma.UserWhereUniqueInput,
    dadosNovos: Prisma.UserUpdateInput
  ): Promise<User> {
    
    return this.prisma.user.update({
      data: dadosNovos,
      where: filtro,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}

