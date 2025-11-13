# Depósito V3 - Frontend

Tercera versión del frontend del sistema de depósito de medias.

## Características

- ✅ Login con autenticación JWT
- ✅ Sistema de roles (admin, deposito)
- ✅ Rutas protegidas basadas en roles
- ✅ Redux Toolkit para manejo de estado
- ✅ Diseño responsive
- ✅ Arquitectura escalable siguiendo Clean Code

## Tecnologías

- React 18
- TypeScript
- Vite
- Redux Toolkit
- React Router
- Axios

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── ProtectedRoute.tsx
│   └── RoleRedirect.tsx
├── config/              # Configuración
│   └── api.config.ts
├── pages/               # Páginas de la aplicación
│   ├── Login/
│   ├── Dashboard/
│   ├── Deposito/
│   └── Unauthorized/
├── services/            # Servicios API
│   ├── api.service.ts
│   └── auth.service.ts
├── store/               # Redux store
│   ├── slices/
│   │   └── auth.slice.ts
│   ├── hooks.ts
│   └── store.ts
├── types/               # TypeScript types
│   └── auth.types.ts
├── App.tsx
└── main.tsx
```

## Configuración del Backend

El backend está configurado en `src/config/api.config.ts`:

```typescript
export const API_BASE_URL = 'https://derwill-deposito-backend.onrender.com';
```

## Roles y Permisos

- **admin**: Acceso completo al sistema (ruta `/dashboard`)
- **deposito**: Acceso restringido a funcionalidades de depósito (ruta `/deposito`)

## Autenticación

El sistema utiliza JWT para la autenticación. El token se almacena en `localStorage` y se incluye automáticamente en las peticiones al backend mediante interceptores de Axios.
