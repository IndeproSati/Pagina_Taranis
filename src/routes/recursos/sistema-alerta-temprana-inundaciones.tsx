import { tr } from "@/i18n/translations";
import { createFileRoute } from "@tanstack/react-router";
import { ResourceArticle } from "@/components/taranis/editorial";
import { resourceBySlug } from "@/content/resources";
import { absoluteUrl, breadcrumbSchema, seoHead } from "@/lib/seo";

const resource = resourceBySlug["sistema-alerta-temprana-inundaciones"]!;

export const Route = createFileRoute("/recursos/sistema-alerta-temprana-inundaciones")({
  head: () =>
    seoHead({
      title: "Sistema de alerta temprana de inundaciones: qué es y cómo funciona | TARANIS",
      description: tr(
        "Qu\xE9 integra un sistema de alerta temprana de inundaciones y c\xF3mo conecta datos, modelos, predicci\xF3n y territorio para apoyar decisiones.",
      ),
      path: "/recursos/sistema-alerta-temprana-inundaciones",
      type: "article",
      structuredData: [
        breadcrumbSchema([
          { name: tr("Inicio"), path: "/" },
          { name: tr("Recursos"), path: "/recursos" },
          { name: resource.shortTitle, path: "/recursos/sistema-alerta-temprana-inundaciones" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: resource.title,
          description: resource.description,
          inLanguage: "es",
          mainEntityOfPage: absoluteUrl("/recursos/sistema-alerta-temprana-inundaciones"),
        },
      ],
    }),
  component: () => <ResourceArticle resource={resource} />,
});
