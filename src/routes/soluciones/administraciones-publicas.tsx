import { tr } from "@/i18n/translations";
import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/taranis/editorial";
import { solutionBySlug } from "@/content/solutions";
import { breadcrumbSchema, seoHead } from "@/lib/seo";

const solution = solutionBySlug["administraciones-publicas"]!;

export const Route = createFileRoute("/soluciones/administraciones-publicas")({
  head: () =>
    seoHead({
      title: "Sistema de alerta de inundaciones para administraciones | TARANIS",
      description:
        "Información hidrológica, predicción y visualización territorial para apoyar a ayuntamientos y administraciones en la gestión del riesgo de inundación.",
      path: "/soluciones/administraciones-publicas",
      structuredData: [
        breadcrumbSchema([
          { name: tr("Inicio"), path: "/" },
          { name: tr("Soluciones"), path: "/soluciones" },
          { name: solution.eyebrow, path: "/soluciones/administraciones-publicas" },
        ]),
      ],
    }),
  component: () => <SolutionPage solution={solution} />,
});
