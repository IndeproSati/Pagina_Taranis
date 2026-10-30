import {
  getActiveLocale,
  htmlLang,
  localizedAlternates,
  ogLocale,
  pathForLocale,
  type Locale,
} from "@/i18n/config";
import { tr } from "@/i18n/translations";

const configuredSiteUrl = (import.meta.env["VITE_SITE_URL"] as string | undefined)?.trim();

export const SITE_URL = configuredSiteUrl?.replace(/\/$/, "") ?? "";
export const SITE_NAME = "TARANIS";
export const DEFAULT_OG_IMAGE = "/og/taranis-social.png";

export function absoluteUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return SITE_URL ? `${SITE_URL}${normalizedPath}` : normalizedPath;
}

export function seoHead({
  title,
  description,
  path,
  canonicalPath = path,
  locale = "es",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  structuredData = [],
}: {
  title: string;
  description: string;
  path: string;
  canonicalPath?: string;
  locale?: Locale;
  image?: string;
  type?: "website" | "article" | "product";
  structuredData?: Record<string, unknown>[];
}) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const allowIndexing = import.meta.env["VITE_ALLOW_INDEXING"] !== "false";
  const translatedTitle = tr(title, locale);
  const translatedDescription = tr(description, locale);
  const altText = tr(
    "TARANIS, plataforma de inteligencia hidrológica y alerta temprana de inundaciones",
    locale,
  );

  return {
    meta: [
      { title: translatedTitle },
      { name: "description", content: translatedDescription },
      {
        name: "robots",
        content: allowIndexing ? "index,follow,max-image-preview:large" : "noindex,nofollow",
      },
      { property: "og:title", content: translatedTitle },
      { property: "og:description", content: translatedDescription },
      { property: "og:type", content: type },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: ogLocale[locale] },
      { property: "og:url", content: url },
      { property: "og:image", content: imageUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: altText },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: translatedTitle },
      { name: "twitter:description", content: translatedDescription },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [
      { rel: "canonical", href: url },
      ...localizedAlternates(canonicalPath).map(
        ({ locale: alternateLocale, path: alternatePath }) => ({
          rel: "alternate",
          hrefLang: htmlLang[alternateLocale],
          href: absoluteUrl(alternatePath),
        }),
      ),
      {
        rel: "alternate",
        hrefLang: "x-default",
        href: absoluteUrl(pathForLocale(canonicalPath, "es")),
      },
    ],
    scripts: structuredData.map((data) => ({
      type: "application/ld+json",
      children: JSON.stringify(data),
    })),
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
  locale: Locale = getActiveLocale(),
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tr(item.name, locale),
      item: absoluteUrl(pathForLocale(item.path, locale)),
    })),
  };
}

export function websiteSchemaFor(locale: Locale = "es") {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TARANIS",
    url: absoluteUrl(pathForLocale("/", locale)),
    inLanguage: htmlLang[locale],
    description: tr(
      "Plataforma de inteligencia hidrológica y alerta temprana de inundaciones.",
      locale,
    ),
  };
}

export function brandSchemaFor(locale: Locale = "es") {
  return {
    "@context": "https://schema.org",
    "@type": "Brand",
    name: "TARANIS",
    description: tr(
      "Tecnología de inteligencia hidrológica para anticipar escenarios de inundación y apoyar la toma de decisiones.",
      locale,
    ),
  };
}

export function softwareSchemaFor(locale: Locale = "es") {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TARANIS",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: absoluteUrl(pathForLocale("/producto", locale)),
    description: tr(
      "Plataforma de predicción hidrológica, visualización territorial y alerta temprana de inundaciones.",
      locale,
    ),
  };
}

export const websiteSchema = websiteSchemaFor("es");
export const brandSchema = brandSchemaFor("es");
export const softwareSchema = softwareSchemaFor("es");
