import { tr } from "@/i18n/translations";
import { createFileRoute } from "@tanstack/react-router";

import { TechnologyAndCases } from "@/components/taranis/home-sections";

import { breadcrumbSchema, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/tecnologia")({
  head: () =>
    seoHead({
      title: "Tecnología para predicción hidrológica e inteligencia artificial | TARANIS",

      description:
        "Conoce la tecnología de TARANIS: integración de datos hidrometeorológicos, modelización hidrológica, inteligencia artificial y visualización geoespacial para anticipar inundaciones.",

      path: "/tecnologia",

      structuredData: [
        breadcrumbSchema([
          {
            name: tr("Inicio"),
            path: "/",
          },
          {
            name: tr("Tecnolog\xEDa"),
            path: "/tecnologia",
          },
        ]),
      ],
    }),

  component: TechnologyPage,
});

export function TechnologyPage() {
  return (
    <main>
      <TechnologyAndCases />
    </main>
  );
}
