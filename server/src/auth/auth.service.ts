import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/models/user.dto';
import { UsersService } from 'src/users/users.service'

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}


    async register(creditinals: UserDTO) {
        try {
            const user = await this.usersService.create(creditinals)
            const payload = { username: user.username }
            const token = this.jwtService.sign(payload)
            return { user: { ...user.toJSON(), token} }
        } catch (err) {
            throw new InternalServerErrorException(err)
        }
    }

    async login({username, password}: UserDTO) {
        try {
            const user = await this.usersService.findOne(username)
            const isValid = await this.usersService.comparePassword(password, user)
            if (!isValid) {
                throw new UnauthorizedException('Invalid creditinals')
            }
            const payload = { username: user.username }
            const token = this.jwtService.sign(payload)
            return { user: { ...user.toJSON(), token} }
        } catch (err) {
            throw new UnauthorizedException('Invalid creditinals')
        }
    }

    async getAll() {
        return await this.usersService.findAll()
    }
}
