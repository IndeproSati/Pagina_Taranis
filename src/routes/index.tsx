import { createFileRoute } from "@tanstack/react-router";

import {
  ContactSection,
  FinalCta,
  Hero,
  ProblemAndPipeline,
  ResourcesFaq,
  VideoDemo,
} from "@/components/taranis/home-sections";

import { brandSchema, seoHead, softwareSchema, websiteSchema } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seoHead({
      title: "Sistema de alerta temprana de inundaciones con IA | TARANIS",
      description:
        "TARANIS integra datos hidrometeorológicos, modelización e inteligencia artificial para anticipar caudales y escenarios de inundación y apoyar la toma de decisiones.",
      path: "/",
      structuredData: [websiteSchema, softwareSchema, brandSchema],
    }),

  component: Index,
});

function Index() {
  return (
    <main>
      {/* HERO */}
      <Hero />

      {/* EL RETO + SISTEMA TARANIS */}
      <ProblemAndPipeline />

      {/* DEMO */}
      <VideoDemo />

      {/* FAQ */}
      <ResourcesFaq />

      {/* CTA FINAL */}
      <FinalCta />

      {/* CONTACTO */}
      <ContactSection />
    </main>
  );
}
