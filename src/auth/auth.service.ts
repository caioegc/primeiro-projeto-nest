import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../generated/prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService){}

    async sigIn(email: string, senhaDigitada: string): Promise<Omit<User, 'password'>>{

        const user = await this.userService.getUser({email: email})

        if(!user){
            throw new UnauthorizedException('E-mail ou senha inválidos.');
        }

        const isMatch = await bcrypt.compare(senhaDigitada, user.password)
        
        if(!isMatch){
            throw new UnauthorizedException('E-mail ou senha inválidos.');
        }

        const { password, ...usuarioSemSenha } = user;

        return usuarioSemSenha;

    }
}
