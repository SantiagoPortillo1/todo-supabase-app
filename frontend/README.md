# 📋 Lista de Tareas con React + TypeScript + Vite

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

Una aplicación de lista de tareas moderna y responsiva construida con React, TypeScript y Vite. Esta aplicación te permite gestionar tus tareas diarias de manera eficiente.

## 🚀 Características

- ✅ Agregar nuevas tareas
- ✅ Marcar tareas como completadas
- ✅ Eliminar tareas
- 📱 Diseño responsivo
- 🌓 Soporte para modo oscuro
- ⚡ Carga rápida con Vite

## 🛠️ Tecnologías utilizadas

- **Frontend:**
  - React 18
  - TypeScript
  - Vite
  - Axios para peticiones HTTP
  - CSS moderno con variables personalizadas

## 🚀 Cómo comenzar

### Requisitos previos

- Node.js 16 o superior
- npm o yarn

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/todo-app.git
   cd todo-app/frontend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```
   VITE_API_URL=http://localhost:3000
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   ```

5. Abre tu navegador en [http://localhost:5173](http://localhost:5173)

## 📦 Scripts disponibles

- `dev` - Inicia el servidor de desarrollo
- `build` - Compila la aplicación para producción
- `preview` - Previsualiza la compilación de producción
- `lint` - Ejecuta el linter

## 🎨 Estructura del proyecto

```
frontend/
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── hooks/          # Custom Hooks
│   ├── types/          # Definiciones de tipos TypeScript
│   ├── utils/          # Utilidades y helpers
│   ├── App.tsx         # Componente principal
│   └── main.tsx        # Punto de entrada de la aplicación
├── public/             # Archivos estáticos
└── index.html          # Plantilla HTML principal
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, lee las [pautas de contribución](CONTRIBUTING.md) antes de enviar un pull request.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.

