# TARANIS — Implementación SEO V1

Esta versión mantiene el diseño visual original y modifica la arquitectura, metadatos y contenido para que el sitio tenga una base real de posicionamiento orgánico.

## Cambios implementados

1. `lang="es"` y mensajes 404/error en español.
2. Metadatos centralizados en `src/lib/seo.ts`.
3. Titles y descriptions específicos por intención de búsqueda.
4. Canonical, Open Graph, Twitter Card y `robots` por página.
5. Imagen social 1200x630 en `public/og/taranis-social.png`.
6. Schema.org: `WebSite`, `Brand`, `SoftwareApplication`, `BreadcrumbList` y `Article` donde corresponde.
7. `/recursos` deja de mostrar tarjetas “Próximamente” y pasa a tener tres recursos indexables reales.
8. Nuevas páginas:
   - `/recursos/sistema-alerta-temprana-inundaciones`
   - `/recursos/prediccion-hidrologica`
   - `/recursos/inteligencia-artificial-inundaciones`
9. `/soluciones` pasa a enlazar páginas específicas:
   - `/soluciones/administraciones-publicas`
   - `/soluciones/proteccion-civil`
   - `/soluciones/organismos-de-cuenca`
   - `/soluciones/infraestructuras`
10. `/producto` incorpora contenido propio sobre la plataforma para reducir duplicidad con la home.
11. `/tecnologia` incorpora contenido propio sobre fuentes, modelización, IA y territorio.
12. Las tarjetas de soluciones de la home ahora son enlaces reales.
13. El footer utiliza textos de enlace descriptivos en lugar de repetir “Explorar”.
14. Se elimina el selector EN hasta que exista una versión inglesa real.
15. Se eliminan placeholders visuales de clientes/partners/certificaciones y se sustituyen por capacidades verificables.
16. `sitemap.xml` incluye todas las nuevas URLs.
17. `robots.txt` se genera desde el dominio real de la petición y permite bloquear staging mediante `VITE_ALLOW_INDEXING=false`.
18. Los enlaces sociales del footer sólo aparecen cuando se configuran URLs reales.

## Configuración antes de producción

Crea `.env` a partir de `.env.example` y define:

```env
VITE_SITE_URL=https://TU-DOMINIO-REAL
VITE_ALLOW_INDEXING=true
```

Si publicas una versión de staging o preview:

```env
VITE_ALLOW_INDEXING=false
```

Esto evita que una URL de pruebas compita con el dominio principal.

## Pendientes que requieren información real

No se han inventado estos datos y deben completarse antes del lanzamiento definitivo:

- Aviso legal.
- Política de privacidad.
- Política de cookies y consentimiento, si corresponde.
- Identidad jurídica exacta que opera TARANIS.
- Dirección/contacto legal.
- URLs oficiales de LinkedIn, YouTube y X.
- Logos de programas, clientes, socios, certificaciones o proyectos autorizados.
- Capturas reales de la plataforma que sustituyan o complementen los mockups.
- Conexión real del formulario de solicitud de demostración con Supabase/CRM/email.
- Enlace institucional desde la página de TARANIS en INDEPRO hacia el dominio oficial de TARANIS y viceversa, cuando el dominio sea definitivo.

## Siguiente fase recomendada

La siguiente iteración debería centrarse en contenido demostrable: casos de estudio, capturas reales, metodología, gráficos de validación, autores/revisores técnicos y recursos adicionales basados en preguntas reales de administraciones, protección civil y organismos de cuenca.
