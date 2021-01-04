import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { AuthPayload } from "src/models/user.dto";
import { User } from "src/users/schemas/user.schema";
import { UsersService } from "src/users/users.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private usersService: UsersService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Token'),
            secretOrKey: 'secret'
        })
    }

    async validate({username}: AuthPayload): Promise<User> {
        const user = await this.usersService.findOne(username)
        if(!user) {
            throw new UnauthorizedException()
        }
        return user
    }
}