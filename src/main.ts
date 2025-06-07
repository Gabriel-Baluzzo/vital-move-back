/* eslint-disable prettier/prettier */
// src/main.ts (en tu proyecto NestJS - backend)
/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ CORRECCIÓN: Configuración explícita de CORS
  app.enableCors({
    origin: process.env.FRONTEND_URL, // Lee del .env (http://localhost:3000)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP que permites
    credentials: true, // Importante: Permite el envío de cookies/encabezados de autorización
  });

  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();