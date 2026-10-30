# Cómo probar TARANIS SEO V1 en VS Code

## 1. Abrir el proyecto

Abre esta carpeta como proyecto en VS Code.

## 2. Instalar dependencias

```bash
npm install
```

## 3. Crear el archivo de entorno local

Copia `.env.example` a `.env.local`.

Para desarrollo local deja:

```env
VITE_SITE_URL=http://localhost:3000
VITE_ALLOW_INDEXING=false
```

Si Vite utiliza otro puerto, cambia `VITE_SITE_URL` al puerto real.

## 4. Iniciar el proyecto

```bash
npm run dev
```

TanStack Router regenerará `src/routeTree.gen.ts` a partir de los archivos de `src/routes`.

## 5. Revisar estas páginas

- `/`
- `/producto`
- `/soluciones`
- `/soluciones/administraciones-publicas`
- `/soluciones/proteccion-civil`
- `/soluciones/organismos-de-cuenca`
- `/soluciones/infraestructuras`
- `/tecnologia`
- `/recursos`
- `/recursos/sistema-alerta-temprana-inundaciones`
- `/recursos/prediccion-hidrologica`
- `/recursos/inteligencia-artificial-inundaciones`
- `/empresa`
- `/contacto`
- `/sitemap.xml`
- `/robots.txt`

## 6. Antes de producción

Configura el dominio real:

```env
VITE_SITE_URL=https://DOMINIO-REAL-DE-TARANIS
VITE_ALLOW_INDEXING=true
```

Añade también las redes oficiales si deseas mostrarlas:

```env
VITE_LINKEDIN_URL=
VITE_YOUTUBE_URL=
VITE_X_URL=
```

## Nota de validación

El ZIP original no incluía `node_modules`. En el entorno donde se preparó esta versión no fue posible completar `npm install`, por lo que no se pudo ejecutar el build final de Vite. La estructura y sintaxis fueron revisadas, y `routeTree.gen.ts` se dejó alineado con las nuevas rutas, pero el primer paso en tu equipo debe ser ejecutar `npm install` y `npm run dev` para que TanStack regenere el árbol con las versiones exactas instaladas en tu proyecto.
