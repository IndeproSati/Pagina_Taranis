import { tr } from "@/i18n/translations";
import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/taranis/editorial";
import { solutionBySlug } from "@/content/solutions";
import { breadcrumbSchema, seoHead } from "@/lib/seo";

const solution = solutionBySlug["proteccion-civil"]!;

export const Route = createFileRoute("/soluciones/proteccion-civil")({
  head: () =>
    seoHead({
      title: "Alerta temprana de inundaciones para Protección Civil | TARANIS",
      description: tr(
        "Seguimiento hidrol\xF3gico, predicci\xF3n y alertas georreferenciadas para complementar los procedimientos operativos de Protecci\xF3n Civil.",
      ),
      path: "/soluciones/proteccion-civil",
      structuredData: [
        breadcrumbSchema([
          { name: tr("Inicio"), path: "/" },
          { name: tr("Soluciones"), path: "/soluciones" },
          { name: solution.eyebrow, path: "/soluciones/proteccion-civil" },
        ]),
      ],
    }),
  component: () => <SolutionPage solution={solution} />,
});
