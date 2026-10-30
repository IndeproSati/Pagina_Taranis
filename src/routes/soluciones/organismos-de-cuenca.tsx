import { tr } from "@/i18n/translations";
import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/taranis/editorial";
import { solutionBySlug } from "@/content/solutions";
import { breadcrumbSchema, seoHead } from "@/lib/seo";

const solution = solutionBySlug["organismos-de-cuenca"]!;

export const Route = createFileRoute("/soluciones/organismos-de-cuenca")({
  head: () =>
    seoHead({
      title: "Predicción hidrológica para organismos de cuenca | TARANIS",
      description: tr(
        "Integraci\xF3n de aforos, precipitaci\xF3n, hist\xF3ricos, modelizaci\xF3n hidrol\xF3gica e inteligencia artificial para seguimiento a escala de cuenca.",
      ),
      path: "/soluciones/organismos-de-cuenca",
      structuredData: [
        breadcrumbSchema([
          { name: tr("Inicio"), path: "/" },
          { name: tr("Soluciones"), path: "/soluciones" },
          { name: solution.eyebrow, path: "/soluciones/organismos-de-cuenca" },
        ]),
      ],
    }),
  component: () => <SolutionPage solution={solution} />,
});
