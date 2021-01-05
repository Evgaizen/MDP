import { Body, Controller, Get, Post, ValidationPipe, Request, UseGuards, Put, Delete, Param } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateCredentialDTO, UpdateCredentialDTO } from 'src/models/credential.dto';
import { CredentialsService } from './credentials.service';

@Controller('credentials')
export class CredentialsController {
    constructor(private credentialService: CredentialsService) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    add(@Body(ValidationPipe) credentials: CreateCredentialDTO, @Request() req) {
        return this.credentialService.create(credentials, req.user.id)
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    getAll(@Request() req) {
        return this.credentialService.findAllByUserId(req.user.id)
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    remove(@Param('id') id: string, @Request() req) {
        return this.credentialService.removeByIdAndUserId(id, req.user.id)
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    update(@Param('id') id: string, @Request() req , @Body(ValidationPipe) credentials: UpdateCredentialDTO ) {
        return this.credentialService.updateByIdAndUserId(id, req.user.id, credentials)
    }
}
