import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { MongooseModule } from '@nestjs/mongoose';
import { File, FileSchema } from './schemas/file.schema';

@Module({
  controllers: [FilesController],
  providers: [FilesService],
  imports: [
    MongooseModule.forFeature([{ name: File.name, schema: FileSchema }]),
  ],
})
export class FilesModule {}
