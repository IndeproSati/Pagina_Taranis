import { tr } from "@/i18n/translations";
import { createFileRoute } from "@tanstack/react-router";
import { ResourceArticle } from "@/components/taranis/editorial";
import { resourceBySlug } from "@/content/resources";
import { absoluteUrl, breadcrumbSchema, seoHead } from "@/lib/seo";

const resource = resourceBySlug["inteligencia-artificial-inundaciones"]!;

export const Route = createFileRoute("/recursos/inteligencia-artificial-inundaciones")({
  head: () =>
    seoHead({
      title: "Inteligencia artificial para predicción de inundaciones | TARANIS",
      description:
        "Cómo se aplica la inteligencia artificial y los modelos temporales a la hidrología y por qué deben integrarse con datos, validación y conocimiento hidrológico.",
      path: "/recursos/inteligencia-artificial-inundaciones",
      type: "article",
      structuredData: [
        breadcrumbSchema([
          { name: tr("Inicio"), path: "/" },
          { name: tr("Recursos"), path: "/recursos" },
          { name: resource.shortTitle, path: "/recursos/inteligencia-artificial-inundaciones" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: resource.title,
          description: resource.description,
          inLanguage: "es",
          mainEntityOfPage: absoluteUrl("/recursos/inteligencia-artificial-inundaciones"),
        },
      ],
    }),
  component: () => <ResourceArticle resource={resource} />,
});
