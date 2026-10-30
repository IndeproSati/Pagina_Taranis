import { createFileRoute } from "@tanstack/react-router";
import { localeFromPrefix, localizedTopLevelPage, pathForLocale } from "@/i18n/config";
import { pageMeta } from "@/i18n/page-meta";
import { LocalizedPage } from "@/i18n/localized-page";
import { seoHead, softwareSchemaFor, brandSchemaFor } from "@/lib/seo";

function resolve(localeParam: string, page: string) {
  const locale = localeFromPrefix(localeParam);
  const canonical = locale ? localizedTopLevelPage[locale][page] : undefined;
  return locale && canonical ? { locale, canonical } : null;
}

export const Route = createFileRoute("/$locale/$page")({
  head: ({ params }) => {
    const resolved = resolve(params.locale, params.page);
    if (!resolved) return {};
    const { locale, canonical } = resolved;
    const meta = pageMeta(canonical, locale);
    return seoHead({
      ...meta,
      path: pathForLocale(canonical, locale),
      canonicalPath: canonical,
      locale,
      type: canonical === "/producto" ? "product" : "website",
      structuredData:
        canonical === "/producto"
          ? [softwareSchemaFor(locale)]
          : canonical === "/empresa"
            ? [brandSchemaFor(locale)]
            : [],
    });
  },
  component: LocalizedTopLevel,
});

function LocalizedTopLevel() {
  const { locale: localeParam, page } = Route.useParams();
  const resolved = resolve(localeParam, page);
  if (!resolved) return null;
  return <LocalizedPage canonicalPath={resolved.canonical} />;
}
