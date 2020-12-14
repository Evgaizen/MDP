import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:adminpassword@cluster0.1ivdp.mongodb.net/pomodapam?retryWrites=true&w=majority',
    ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../client/dist'),
      exclude: ['/api*'],
    }),
    FilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
