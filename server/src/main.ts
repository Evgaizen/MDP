import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.enableCors()
  app.use(bodyParser.json({ limit: '1024mb' }));
  app.use(bodyParser.urlencoded({ limit: '1024mb', extended: true }));

  await app.listen(3000);
}
bootstrap();
