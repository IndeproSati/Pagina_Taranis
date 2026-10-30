# Ticket 01 — Internacionalización ES / EN / PT-BR

Implementación realizada para TARANIS.

## Incluye
- Idiomas: Español (`es`), Inglés (`en`) y Portugués de Brasil (`pt-BR`).
- Selector de idioma en navegación responsive.
- Persistencia del idioma mediante la URL y almacenamiento local.
- Rutas localizadas para páginas principales, soluciones y recursos.
- Traducción de interfaz y contenido editorial mediante una capa centralizada de i18n.
- `html lang` dinámico.
- SEO localizado: title, description, canonical, OpenGraph y Twitter metadata.
- `hreflang` para ES, EN, PT-BR y `x-default`.
- Sitemap multidioma.
- Breadcrumbs y datos estructurados adaptados al idioma.
- Conservación de las rutas españolas existentes.

## Validación realizada
- `npx tsc --noEmit`: OK.
- `npm run lint`: 0 errores; solo warnings de Fast Refresh.
- `npm run build`: no ejecutable en el entorno de entrega debido a que el `node_modules` original contiene dependencias binarias de otra plataforma y falta `@rolldown/binding-linux-x64-gnu`.

## Para probar en el equipo de desarrollo
1. Eliminar `node_modules` si procede.
2. Ejecutar `npm install` (o `npm ci`).
3. Ejecutar `npm run dev`.
4. Probar, entre otras:
   - `/es`
   - `/en`
   - `/pt-br`
   - `/es/producto`
   - `/en/product`
   - `/pt-br/produto`
   - `/en/solutions/civil-protection`
   - `/pt-br/recursos/previsao-hidrologica`
5. Ejecutar `npm run build` antes del despliegue.
