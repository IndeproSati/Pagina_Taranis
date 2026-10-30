import { createFileRoute } from "@tanstack/react-router";
import { localeFromPrefix, localizedNestedPage, pathForLocale } from "@/i18n/config";
import { pageMeta } from "@/i18n/page-meta";
import { LocalizedPage } from "@/i18n/localized-page";
import { seoHead } from "@/lib/seo";

function resolve(localeParam: string, section: string, slug: string) {
  const locale = localeFromPrefix(localeParam);
  const canonical = locale ? localizedNestedPage[locale][`${section}/${slug}`] : undefined;
  return locale && canonical ? { locale, canonical } : null;
}

export const Route = createFileRoute("/$locale/$section/$slug")({
  head: ({ params }) => {
    const resolved = resolve(params.locale, params.section, params.slug);
    if (!resolved) return {};
    const { locale, canonical } = resolved;
    const meta = pageMeta(canonical, locale);
    return seoHead({
      ...meta,
      path: pathForLocale(canonical, locale),
      canonicalPath: canonical,
      locale,
      type: canonical.startsWith("/recursos/") ? "article" : "website",
    });
  },
  component: LocalizedNested,
});

function LocalizedNested() {
  const { locale: localeParam, section, slug } = Route.useParams();
  const resolved = resolve(localeParam, section, slug);
  if (!resolved) return null;
  return <LocalizedPage canonicalPath={resolved.canonical} />;
}
