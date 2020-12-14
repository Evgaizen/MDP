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
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
  constructor(private filesService: FilesService) {}

  @Get()
  getAll() {
    return this.filesService.findAll();
  }

  @Post('upload')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(
    FileInterceptor('file', {
      dest: './src/files/upload',
    }),
  )
  async uploadFile(@UploadedFile() file) {
    return await this.filesService.create(file);
  }

  @Delete(':id')
  async remove(@Param() id: string) {
    return await this.filesService.remove(id);
  }
}
