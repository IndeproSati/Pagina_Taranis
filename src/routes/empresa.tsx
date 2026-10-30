import { tr } from "@/i18n/translations";
import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SectionHeader } from "@/components/taranis/shared";
import { FinalCta } from "@/components/taranis/home-sections";
import { brandSchema, breadcrumbSchema, seoHead } from "@/lib/seo";

export const Route = createFileRoute("/empresa")({
  head: () =>
    seoHead({
      title: "TARANIS | Inteligencia hidrológica para territorios resilientes",
      description:
        "Conoce la visión de TARANIS: transformar conocimiento hidrológico, datos territoriales y capacidad predictiva en decisiones más informadas frente a inundaciones.",
      path: "/empresa",
      structuredData: [
        brandSchema,
        breadcrumbSchema([
          { name: tr("Inicio"), path: "/" },
          { name: tr("TARANIS"), path: "/empresa" },
        ]),
      ],
    }),
  component: CompanyPage,
});

export function CompanyPage() {
  return (
    <PageIntro
      eyebrow={tr("TARANIS")}
      title={
        <>
          {tr("Comprender antes.")}
          <br />
          {tr("Decidir mejor.")}
        </>
      }
      text={tr(
        "TARANIS nace para convertir conocimiento hidrol\xF3gico, datos territoriales y capacidad predictiva en decisiones m\xE1s informadas.",
      )}
    >
      <section className="section-space bg-background">
        <div className="section-shell grid gap-14 lg:grid-cols-2">
          <SectionHeader eyebrow={tr("Visi\xF3n")} title={tr("Territorios m\xE1s resilientes.")} />
          <div className="space-y-6 text-lg leading-8 text-muted-foreground">
            <p>
              {tr(
                "Los episodios extremos exigen una lectura integrada del territorio, capaz de evolucionar junto a la informaci\xF3n disponible.",
              )}
            </p>
            <p>
              {tr(
                "Nuestra visi\xF3n es que la tecnolog\xEDa hidrol\xF3gica sea comprensible, operativa y \xFAtil para las organizaciones responsables de anticipar el riesgo.",
              )}
            </p>
            <p>
              {tr(
                "TARANIS se plantea como un producto tecnol\xF3gico modular, capaz de integrar fuentes existentes, modelos hidrol\xF3gicos e inteligencia artificial y adaptarse a diferentes escalas territoriales.",
              )}
            </p>
          </div>
        </div>
      </section>
      <FinalCta />
    </PageIntro>
  );
}
