import { IsString, ValidateIf } from 'class-validator'

export class CreateCredentialDTO {
    @IsString()
    service: string

    @IsString()
    username: string

    @IsString()
    password: string
}

export class UpdateCredentialDTO {
    @ValidateIf(isEmpty)
    @IsString()
    service: string

    @ValidateIf(isEmpty)
    @IsString()
    username: string

    @ValidateIf(isEmpty)
    @IsString()
    password: string
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0
}
