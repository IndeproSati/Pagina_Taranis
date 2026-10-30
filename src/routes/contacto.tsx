import { tr } from "@/i18n/translations";
import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/taranis/shared";
import { ContactSection } from "@/components/taranis/home-sections";
import { breadcrumbSchema, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/contacto")({
  head: () =>
    seoHead({
      title: "Solicitar una demostración de TARANIS",
      description:
        "Solicita una demostración de TARANIS adaptada a tu territorio, fuentes de información y necesidades de predicción y alerta temprana de inundaciones.",
      path: "/contacto",
      structuredData: [
        breadcrumbSchema([
          { name: tr("Inicio"), path: "/" },
          { name: tr("Contacto"), path: "/contacto" },
        ]),
      ],
    }),
  component: ContactPage,
});

export function ContactPage() {
  return (
    <PageIntro
      eyebrow={tr("Contacto")}
      title={
        <>
          {tr("Tu territorio.")}
          <br />
          {tr("Una demostraci\xF3n concreta.")}
        </>
      }
      text={tr(
        "Comparte el contexto y las necesidades de tu organizaci\xF3n. Prepararemos una conversaci\xF3n centrada en lo que necesitas anticipar.",
      )}
    >
      <ContactSection />
    </PageIntro>
  );
}
