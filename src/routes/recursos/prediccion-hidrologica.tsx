import { tr } from "@/i18n/translations";
import { createFileRoute } from "@tanstack/react-router";
import { ResourceArticle } from "@/components/taranis/editorial";
import { resourceBySlug } from "@/content/resources";
import { absoluteUrl, breadcrumbSchema, seoHead } from "@/lib/seo";

const resource = resourceBySlug["prediccion-hidrologica"]!;

export const Route = createFileRoute("/recursos/prediccion-hidrologica")({
  head: () =>
    seoHead({
      title: "Predicción hidrológica: datos, modelos y anticipación | TARANIS",
      description:
        "Qué es la predicción hidrológica, qué datos utiliza y cómo se combinan modelización y observaciones para anticipar caudales y escenarios.",
      path: "/recursos/prediccion-hidrologica",
      type: "article",
      structuredData: [
        breadcrumbSchema([
          { name: tr("Inicio"), path: "/" },
          { name: tr("Recursos"), path: "/recursos" },
          { name: resource.shortTitle, path: "/recursos/prediccion-hidrologica" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: resource.title,
          description: resource.description,
          inLanguage: "es",
          mainEntityOfPage: absoluteUrl("/recursos/prediccion-hidrologica"),
        },
      ],
    }),
  component: () => <ResourceArticle resource={resource} />,
});
