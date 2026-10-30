import { createFileRoute } from "@tanstack/react-router";
import { localeFromPrefix, pathForLocale } from "@/i18n/config";
import { pageMeta } from "@/i18n/page-meta";
import { LocalizedPage } from "@/i18n/localized-page";
import { seoHead, websiteSchemaFor, brandSchemaFor, softwareSchemaFor } from "@/lib/seo";

export const Route = createFileRoute("/$locale/")({
  head: ({ params }) => {
    const locale = localeFromPrefix(params.locale) ?? "es";
    const meta = pageMeta("/", locale);
    return seoHead({
      ...meta,
      path: pathForLocale("/", locale),
      canonicalPath: "/",
      locale,
      structuredData: [websiteSchemaFor(locale), softwareSchemaFor(locale), brandSchemaFor(locale)],
    });
  },
  component: () => <LocalizedPage canonicalPath="/" />,
});
