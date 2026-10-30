export type Locale = "es" | "en" | "pt-BR";

export const DEFAULT_LOCALE: Locale = "es";
export const SUPPORTED_LOCALES: Locale[] = ["es", "en", "pt-BR"];

export const localePrefix: Record<Locale, string> = {
  es: "es",
  en: "en",
  "pt-BR": "pt-br",
};

export const localeLabel: Record<Locale, string> = {
  es: "Español",
  en: "English",
  "pt-BR": "Português (Brasil)",
};

export const htmlLang: Record<Locale, string> = {
  es: "es",
  en: "en",
  "pt-BR": "pt-BR",
};

export const ogLocale: Record<Locale, string> = {
  es: "es_ES",
  en: "en_GB",
  "pt-BR": "pt_BR",
};

const routeMap: Record<string, Record<Locale, string>> = {
  "/": { es: "/es", en: "/en", "pt-BR": "/pt-br" },
  "/producto": { es: "/es/producto", en: "/en/product", "pt-BR": "/pt-br/produto" },
  "/soluciones": { es: "/es/soluciones", en: "/en/solutions", "pt-BR": "/pt-br/solucoes" },
  "/soluciones/administraciones-publicas": {
    es: "/es/soluciones/administraciones-publicas",
    en: "/en/solutions/public-administrations",
    "pt-BR": "/pt-br/solucoes/administracoes-publicas",
  },
  "/soluciones/proteccion-civil": {
    es: "/es/soluciones/proteccion-civil",
    en: "/en/solutions/civil-protection",
    "pt-BR": "/pt-br/solucoes/defesa-civil",
  },
  "/soluciones/organismos-de-cuenca": {
    es: "/es/soluciones/organismos-de-cuenca",
    en: "/en/solutions/river-basin-authorities",
    "pt-BR": "/pt-br/solucoes/orgaos-de-bacia",
  },
  "/soluciones/infraestructuras": {
    es: "/es/soluciones/infraestructuras",
    en: "/en/solutions/infrastructure",
    "pt-BR": "/pt-br/solucoes/infraestruturas",
  },
  "/tecnologia": { es: "/es/tecnologia", en: "/en/technology", "pt-BR": "/pt-br/tecnologia" },
  "/recursos": { es: "/es/recursos", en: "/en/resources", "pt-BR": "/pt-br/recursos" },
  "/recursos/sistema-alerta-temprana-inundaciones": {
    es: "/es/recursos/sistema-alerta-temprana-inundaciones",
    en: "/en/resources/flood-early-warning-system",
    "pt-BR": "/pt-br/recursos/sistema-alerta-precoce-inundacoes",
  },
  "/recursos/prediccion-hidrologica": {
    es: "/es/recursos/prediccion-hidrologica",
    en: "/en/resources/hydrological-forecasting",
    "pt-BR": "/pt-br/recursos/previsao-hidrologica",
  },
  "/recursos/inteligencia-artificial-inundaciones": {
    es: "/es/recursos/inteligencia-artificial-inundaciones",
    en: "/en/resources/artificial-intelligence-floods",
    "pt-BR": "/pt-br/recursos/inteligencia-artificial-inundacoes",
  },
  "/empresa": { es: "/es/empresa", en: "/en/company", "pt-BR": "/pt-br/empresa" },
  "/contacto": { es: "/es/contacto", en: "/en/contact", "pt-BR": "/pt-br/contato" },
};

const reverseRouteMap = new Map<string, { canonical: string; locale: Locale }>();
for (const [canonical, localized] of Object.entries(routeMap)) {
  for (const locale of SUPPORTED_LOCALES) {
    reverseRouteMap.set(localized[locale], { canonical, locale });
    reverseRouteMap.set(`${localized[locale]}/`, { canonical, locale });
  }
}

export function localeFromPath(pathname: string): Locale {
  const normalized = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  if (normalized === "/en" || normalized.startsWith("/en/")) return "en";
  if (normalized === "/pt-br" || normalized.startsWith("/pt-br/")) return "pt-BR";
  return "es";
}

export function canonicalPathFromLocalized(pathname: string): string | null {
  const normalized = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  if (routeMap[normalized]) return normalized;
  return reverseRouteMap.get(normalized)?.canonical ?? null;
}

export function pathForLocale(canonicalPath: string, locale: Locale): string {
  const normalized = canonicalPath.length > 1 ? canonicalPath.replace(/\/$/, "") : canonicalPath;
  return (
    routeMap[normalized]?.[locale] ??
    `/${localePrefix[locale]}${normalized === "/" ? "" : normalized}`
  );
}

let activeLocale: Locale = DEFAULT_LOCALE;
export function setActiveLocale(locale: Locale) {
  activeLocale = locale;
}
export function getActiveLocale() {
  return activeLocale;
}

export function localizedPath(path: string, locale: Locale = activeLocale): string {
  if (!path.startsWith("/")) return path;
  const [pathname, suffix = ""] = path.split(/(?=[?#])/, 2);
  const safePathname = pathname ?? path;
  const canonical = canonicalPathFromLocalized(safePathname) ?? safePathname;
  const localized = pathForLocale(canonical, locale);
  return suffix ? `${localized}${suffix}` : localized;
}

export function localizedAlternates(canonicalPath: string) {
  return SUPPORTED_LOCALES.map((locale) => ({
    locale,
    path: pathForLocale(canonicalPath, locale),
  }));
}

export const localizedTopLevelPage: Record<Locale, Record<string, string>> = {
  es: {
    producto: "/producto",
    soluciones: "/soluciones",
    tecnologia: "/tecnologia",
    recursos: "/recursos",
    empresa: "/empresa",
    contacto: "/contacto",
  },
  en: {
    product: "/producto",
    solutions: "/soluciones",
    technology: "/tecnologia",
    resources: "/recursos",
    company: "/empresa",
    contact: "/contacto",
  },
  "pt-BR": {
    produto: "/producto",
    solucoes: "/soluciones",
    tecnologia: "/tecnologia",
    recursos: "/recursos",
    empresa: "/empresa",
    contato: "/contacto",
  },
};

export const localizedNestedPage: Record<Locale, Record<string, string>> = {
  es: {
    "soluciones/administraciones-publicas": "/soluciones/administraciones-publicas",
    "soluciones/proteccion-civil": "/soluciones/proteccion-civil",
    "soluciones/organismos-de-cuenca": "/soluciones/organismos-de-cuenca",
    "soluciones/infraestructuras": "/soluciones/infraestructuras",
    "recursos/sistema-alerta-temprana-inundaciones":
      "/recursos/sistema-alerta-temprana-inundaciones",
    "recursos/prediccion-hidrologica": "/recursos/prediccion-hidrologica",
    "recursos/inteligencia-artificial-inundaciones":
      "/recursos/inteligencia-artificial-inundaciones",
  },
  en: {
    "solutions/public-administrations": "/soluciones/administraciones-publicas",
    "solutions/civil-protection": "/soluciones/proteccion-civil",
    "solutions/river-basin-authorities": "/soluciones/organismos-de-cuenca",
    "solutions/infrastructure": "/soluciones/infraestructuras",
    "resources/flood-early-warning-system": "/recursos/sistema-alerta-temprana-inundaciones",
    "resources/hydrological-forecasting": "/recursos/prediccion-hidrologica",
    "resources/artificial-intelligence-floods": "/recursos/inteligencia-artificial-inundaciones",
  },
  "pt-BR": {
    "solucoes/administracoes-publicas": "/soluciones/administraciones-publicas",
    "solucoes/defesa-civil": "/soluciones/proteccion-civil",
    "solucoes/orgaos-de-bacia": "/soluciones/organismos-de-cuenca",
    "solucoes/infraestruturas": "/soluciones/infraestructuras",
    "recursos/sistema-alerta-precoce-inundacoes": "/recursos/sistema-alerta-temprana-inundaciones",
    "recursos/previsao-hidrologica": "/recursos/prediccion-hidrologica",
    "recursos/inteligencia-artificial-inundacoes": "/recursos/inteligencia-artificial-inundaciones",
  },
};

export function localeFromPrefix(prefix: string): Locale | null {
  if (prefix === "es") return "es";
  if (prefix === "en") return "en";
  if (prefix.toLowerCase() === "pt-br") return "pt-BR";
  return null;
}
