import { IsString, MinLength } from 'class-validator'

export class UserDTO {
    @IsString()
    @MinLength(4)
    username: string

    @IsString()
    @MinLength(4)
    password: string
}

export interface AuthPayload {
    username: string
}