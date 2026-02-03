<div align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
  <h1>Todo-Supabase Backend</h1>
  
  <p>
    <img src="https://img.shields.io/badge/status-active-success.svg" alt="Status">
    <img src="https://img.shields.io/badge/version-0.0.1-blue.svg" alt="Version">
    <a href="https://github.com/SantiagoPortillo1/todo-supabase-app/blob/develop/LICENSE">
      <img src="https://img.shields.io/badge/license-UNLICENSED-blue.svg" alt="License">
    </a>
  </p>
</div>

## 🚀 Descripción

Backend para la aplicación de gestión de tareas (Todo App) construido con NestJS y Supabase. Este servicio proporciona una API RESTful para gestionar tareas y usuarios de manera segura y escalable.

## 🛠️ Tecnologías

- **Framework**: NestJS v11
- **Base de Datos**: Supabase (PostgreSQL)
- **Autenticación**: Supabase Auth
- **Lenguaje**: TypeScript
- **Pruebas**: Jest
- **Formateo**: Prettier & ESLint

## 📦 Características

- **API RESTful** para gestión de tareas
- **Autenticación** con JWT a través de Supabase
- **Validación** de datos de entrada
- **Arquitectura modular** siguiendo las mejores prácticas de NestJS
- **Variables de entorno** para configuración
- **Documentación** de la API (pendiente)

## 🚀 Empezando

### Requisitos Previos

- Node.js (v16 o superior)
- npm (v9 o superior) o yarn
- Cuenta de [Supabase](https://supabase.com/)
- Variables de entorno configuradas (ver `.env.example`)

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/SantiagoPortillo1/todo-supabase-app.git
   cd todo-supabase-app/backend
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn
   ```

3. **Configuración de variables de entorno**
   ```bash
   cp .env.example .env
   # Editar el archivo .env con tus credenciales de Supabase
   ```

### Ejecución

- **Modo desarrollo** (con recarga en caliente)
  ```bash
  npm run start:dev
  ```

- **Modo producción**
  ```bash
  npm run build
  npm run start:prod
  ```

- **Linting**
  ```bash
  npm run lint
  ```

## 🧪 Pruebas

```bash
# Ejecutar pruebas unitarias
$ npm test

# Ejecutar pruebas e2e
$ npm run test:e2e

# Generar cobertura de pruebas
$ npm run test:cov
```

## 📁 Estructura del Proyecto

```
src/
├── main.ts              # Punto de entrada de la aplicación
├── app.module.ts        # Módulo raíz
├── app.controller.ts    # Controlador raíz
├── app.service.ts       # Servicio raíz
├── supabase/           # Módulo de configuración de Supabase
└── tasks/              # Módulo de tareas
    ├── dto/            # Objetos de transferencia de datos
    ├── interfaces/      # Interfaces TypeScript
    ├── tasks.controller.ts  # Controlador de tareas
    ├── tasks.module.ts     # Módulo de tareas
    └── tasks.service.ts    # Lógica de negocio de tareas
```

## 🔒 Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
# Puerto de la aplicación
PORT=3000

# Configuración de Supabase
SUPABASE_URL=your-supabase-url
SUPABASE_KEY=your-supabase-key
SUPABASE_JWT_SECRET=your-jwt-secret

# Entorno
NODE_ENV=development
```

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, lee nuestras [pautas de contribución](CONTRIBUTING.md) antes de enviar un pull request.

## 📄 Licencia

Este proyecto está bajo la licencia UNLICENSED. Ver el archivo [LICENSE](LICENSE) para más detalles.

