import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService)
  const PORT =configService.get('PORT')
  console.log("PORT::", PORT)
  await app.listen(PORT);
}
bootstrap();
