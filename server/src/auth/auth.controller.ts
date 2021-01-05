import { Body, Controller, Get, Post, UseGuards, ValidationPipe, Request } from '@nestjs/common';
import { UserDTO } from 'src/models/user.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('users')
export class AuthController {
    constructor(private authService: AuthService) {}


    @Post()
    register(@Body(ValidationPipe) credentials: UserDTO) {
        return this.authService.register(credentials)
    }

    @Post('login')
    login(@Body(ValidationPipe) credentials: UserDTO) {
        return this.authService.login(credentials)
    }

    @Get()
    getUsers() {
        return this.authService.getAll()
    }

    @Get('me')
    @UseGuards(JwtAuthGuard)
    getProfile(@Request() req) {
        return req.user
    }
}
