import {
  Hero,
  ProblemAndPipeline,
  VideoDemo,
  ResourcesFaq,
  FinalCta,
  ContactSection,
  SolutionsAndDifference,
  TechnologyAndCases,
} from "@/components/taranis/home-sections";
import { ResourceArticle, SolutionPage } from "@/components/taranis/editorial";
import { resourceBySlug } from "@/content/resources";
import { solutionBySlug } from "@/content/solutions";
import { ProductPage } from "@/routes/producto";
import { CompanyPage } from "@/routes/empresa";
import { ContactPage } from "@/routes/contacto";
import { ResourcesPage } from "@/routes/recursos/index";
import { SolutionsPage } from "@/routes/soluciones/index";
import { TechnologyPage } from "@/routes/tecnologia";

export function LocalizedPage({ canonicalPath }: { canonicalPath: string }) {
  if (canonicalPath === "/") {
    return (
      <main>
        <Hero />
        <ProblemAndPipeline />
        <VideoDemo />
        <ResourcesFaq />
        <FinalCta />
        <ContactSection />
      </main>
    );
  }
  if (canonicalPath === "/producto") return <ProductPage />;
  if (canonicalPath === "/soluciones") return <SolutionsPage />;
  if (canonicalPath === "/tecnologia") return <TechnologyPage />;
  if (canonicalPath === "/recursos") return <ResourcesPage />;
  if (canonicalPath === "/empresa") return <CompanyPage />;
  if (canonicalPath === "/contacto") return <ContactPage />;

  if (canonicalPath.startsWith("/soluciones/")) {
    const slug = canonicalPath.slice("/soluciones/".length);
    const solution = solutionBySlug[slug];
    return solution ? <SolutionPage solution={solution} /> : null;
  }
  if (canonicalPath.startsWith("/recursos/")) {
    const slug = canonicalPath.slice("/recursos/".length);
    const resource = resourceBySlug[slug];
    return resource ? <ResourceArticle resource={resource} /> : null;
  }
  return null;
}
