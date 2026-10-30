import { tr } from "@/i18n/translations";
import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/taranis/shared";
import { VideoDemo } from "@/components/taranis/home-sections";
import { ResourcesGrid } from "@/components/taranis/editorial";
import { breadcrumbSchema, seoHead } from "@/lib/seo";
export const Route = createFileRoute("/recursos/")({
  head: () =>
    seoHead({
      title: "Recursos sobre predicción y riesgo de inundaciones | TARANIS",
      description: tr(
        "Gu\xEDas t\xE9cnicas sobre alerta temprana, predicci\xF3n hidrol\xF3gica, inteligencia artificial, datos y gesti\xF3n del riesgo de inundaciones.",
      ),
      path: "/recursos",
      structuredData: [
        breadcrumbSchema([
          {
            name: tr("Inicio"),
            path: "/",
          },
          {
            name: tr("Recursos"),
            path: "/recursos",
          },
        ]),
      ],
    }),
  component: ResourcesPage,
});
export function ResourcesPage() {
  return (
    <PageIntro
      eyebrow={tr("Recursos")}
      title={
        <>
          {tr("Conocimiento")}
          <br />
          {tr("para anticipar.")}
        </>
      }
      text={tr(
        "Gu\xEDas y contenidos t\xE9cnicos para comprender la predicci\xF3n hidrol\xF3gica, la alerta temprana y la inteligencia artificial aplicada a inundaciones.",
      )}
    >
      <ResourcesGrid />
      <VideoDemo />
    </PageIntro>
  );
}
