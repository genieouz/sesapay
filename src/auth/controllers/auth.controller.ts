import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from '~/auth/services/auth.service';
import { LoginInput } from '~/auth/dto/login.input';
import { Session } from '~/auth/dto/session.entity';
import { RegisterInput } from '~/auth/dto/register.input';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    signup(@Body() user: RegisterInput): Promise<Session> {
        return this.authService.signup(user);
    }

    @Post('login')
    signin(@Body() credentials: LoginInput): Promise<Session> {
        return this.authService.signin(credentials);
    }
}
