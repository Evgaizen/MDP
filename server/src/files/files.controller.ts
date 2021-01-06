import {
  Controller,
  Get,
  UploadedFile,
  UseInterceptors,
  Post,
  Delete,
  Param,
  HttpCode,
  HttpStatus,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
  constructor(private filesService: FilesService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getAll(@Request() req) {
    return this.filesService.findAllByUserId(req.user.id);
  }

  @Post('upload')
  @HttpCode(HttpStatus.CREATED)
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
    FileInterceptor('file', {
      dest: './src/files/upload',
    }),
  )
  async uploadFile(@UploadedFile() file, @Request() req) {
    return await this.filesService.create(file, req.user.id);
  }

  @Delete(':id')
  async remove(@Param() id: string) {
    return await this.filesService.remove(id);
  }

  @Post('check')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(
    FileInterceptor('file', {
      dest: './src/files/upload',
    }),
  )
  async checkFile(@UploadedFile() file, @Query('md5') md5: string) {
    return await this.filesService.check({ file, md5 });
  }
}
