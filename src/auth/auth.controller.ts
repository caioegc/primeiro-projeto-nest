import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

export class LoginDto {
  email!: string;
  password!: string; 
}

@Controller('auth')
export class AuthController {   
    
    constructor(private readonly authService: AuthService) {}

    @Post()
    async fazerLogin(@Body() dadosDoLogin: LoginDto){
        return this.authService.sigIn(dadosDoLogin.email, dadosDoLogin.password);
    }
}
