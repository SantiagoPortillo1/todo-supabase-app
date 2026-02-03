// Punto de entrada de la aplicacion
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitamos CORS para permitir requests desde el frontend (Localmente)
  app.enableCors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], // puertos mas comunes 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();