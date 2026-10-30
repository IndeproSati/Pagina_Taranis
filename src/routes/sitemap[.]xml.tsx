import { createFileRoute } from "@tanstack/react-router";
import { resources } from "@/content/resources";
import { solutions } from "@/content/solutions";
import { htmlLang, pathForLocale, SUPPORTED_LOCALES } from "@/i18n/config";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const canonicalPaths = [
          "/",
          "/producto",
          "/soluciones",
          ...solutions.map((solution) => `/soluciones/${solution.slug}`),
          "/tecnologia",
          "/recursos",
          ...resources.map((resource) => `/recursos/${resource.slug}`),
          "/empresa",
          "/contacto",
        ];

        const entries = canonicalPaths.flatMap((canonicalPath) =>
          SUPPORTED_LOCALES.map((locale) => {
            const path = pathForLocale(canonicalPath, locale);
            const alternates = SUPPORTED_LOCALES.map(
              (alternateLocale) =>
                `<xhtml:link rel="alternate" hreflang="${htmlLang[alternateLocale]}" href="${origin}${pathForLocale(canonicalPath, alternateLocale)}" />`,
            ).join("");
            return `<url><loc>${origin}${path}</loc>${alternates}<xhtml:link rel="alternate" hreflang="x-default" href="${origin}${pathForLocale(canonicalPath, "es")}" /></url>`;
          }),
        );

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n  ${entries.join("\n  ")}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
