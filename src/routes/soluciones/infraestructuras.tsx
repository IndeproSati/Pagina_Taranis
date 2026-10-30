import { tr } from "@/i18n/translations";
import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/taranis/editorial";
import { solutionBySlug } from "@/content/solutions";
import { breadcrumbSchema, seoHead } from "@/lib/seo";

const solution = solutionBySlug["infraestructuras"]!;

export const Route = createFileRoute("/soluciones/infraestructuras")({
  head: () =>
    seoHead({
      title: "Gestión del riesgo de inundación en infraestructuras | TARANIS",
      description:
        "Información territorial y predictiva para organizaciones que gestionan infraestructuras y activos expuestos al riesgo de inundaciones.",
      path: "/soluciones/infraestructuras",
      structuredData: [
        breadcrumbSchema([
          { name: tr("Inicio"), path: "/" },
          { name: tr("Soluciones"), path: "/soluciones" },
          { name: solution.eyebrow, path: "/soluciones/infraestructuras" },
        ]),
      ],
    }),
  component: () => <SolutionPage solution={solution} />,
});
