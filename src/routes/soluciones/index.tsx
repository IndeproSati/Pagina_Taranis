import { tr } from "@/i18n/translations";
import { createFileRoute } from "@tanstack/react-router";

import { SolutionsAndDifference } from "@/components/taranis/home-sections";

import { breadcrumbSchema, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/soluciones/")({
  head: () =>
    seoHead({
      title: "Soluciones para la gestión del riesgo de inundaciones | TARANIS",

      description:
        "Soluciones TARANIS para administraciones públicas, Protección Civil, organismos de cuenca e infraestructuras expuestas al riesgo de inundación.",

      path: "/soluciones",

      structuredData: [
        breadcrumbSchema([
          {
            name: tr("Inicio"),
            path: "/",
          },
          {
            name: tr("Soluciones"),
            path: "/soluciones",
          },
        ]),
      ],
    }),

  component: SolutionsPage,
});

export function SolutionsPage() {
  return (
    <main>
      <SolutionsAndDifference />
    </main>
  );
}
