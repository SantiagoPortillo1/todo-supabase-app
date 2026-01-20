//Servicio que contiene la lógica de negocio inyectado en el controlador
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
