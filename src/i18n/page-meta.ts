import type { Locale } from "./config";

export type PageMeta = { title: string; description: string };

const es: Record<string, PageMeta> = {
  "/": {
    title: "Sistema de alerta temprana de inundaciones con IA | TARANIS",
    description:
      "TARANIS integra datos hidrometeorológicos, modelización e inteligencia artificial para anticipar caudales y escenarios de inundación y apoyar la toma de decisiones.",
  },
  "/producto": {
    title: "Plataforma de predicción y alerta de inundaciones | TARANIS",
    description:
      "Descubre TARANIS: plataforma de predicción hidrológica, integración de datos, visualización geoespacial y alerta temprana de inundaciones.",
  },
  "/soluciones": {
    title: "Soluciones para la gestión del riesgo de inundaciones | TARANIS",
    description:
      "Soluciones TARANIS para administraciones públicas, Protección Civil, organismos de cuenca e infraestructuras expuestas al riesgo de inundación.",
  },
  "/soluciones/administraciones-publicas": {
    title: "Sistema de alerta de inundaciones para administraciones | TARANIS",
    description:
      "Información hidrológica, predicción y visualización territorial para apoyar a ayuntamientos y administraciones en la gestión del riesgo de inundación.",
  },
  "/soluciones/proteccion-civil": {
    title: "Alerta temprana de inundaciones para Protección Civil | TARANIS",
    description:
      "Seguimiento hidrológico, predicción y alertas georreferenciadas para complementar los procedimientos operativos de Protección Civil.",
  },
  "/soluciones/organismos-de-cuenca": {
    title: "Predicción hidrológica para organismos de cuenca | TARANIS",
    description:
      "Integración de aforos, precipitación, históricos, modelización hidrológica e inteligencia artificial para seguimiento a escala de cuenca.",
  },
  "/soluciones/infraestructuras": {
    title: "Gestión del riesgo de inundación en infraestructuras | TARANIS",
    description:
      "Información territorial y predictiva para organizaciones que gestionan infraestructuras y activos expuestos al riesgo de inundaciones.",
  },
  "/tecnologia": {
    title: "Tecnología para predicción hidrológica e inteligencia artificial | TARANIS",
    description:
      "Conoce la tecnología de TARANIS: integración de datos hidrometeorológicos, modelización hidrológica, inteligencia artificial y visualización geoespacial para anticipar inundaciones.",
  },
  "/recursos": {
    title: "Recursos sobre predicción y riesgo de inundaciones | TARANIS",
    description:
      "Guías técnicas sobre alerta temprana, predicción hidrológica, inteligencia artificial, datos y gestión del riesgo de inundaciones.",
  },
  "/recursos/sistema-alerta-temprana-inundaciones": {
    title: "Sistema de alerta temprana de inundaciones: qué es y cómo funciona | TARANIS",
    description:
      "Qué integra un sistema de alerta temprana de inundaciones y cómo conecta datos, modelos, predicción y territorio para apoyar decisiones.",
  },
  "/recursos/prediccion-hidrologica": {
    title: "Predicción hidrológica: datos, modelos y anticipación | TARANIS",
    description:
      "Qué es la predicción hidrológica, qué datos utiliza y cómo se combinan modelización y observaciones para anticipar caudales y escenarios.",
  },
  "/recursos/inteligencia-artificial-inundaciones": {
    title: "Inteligencia artificial para predicción de inundaciones | TARANIS",
    description:
      "Cómo se aplica la inteligencia artificial y los modelos temporales a la hidrología y por qué deben integrarse con datos, validación y conocimiento hidrológico.",
  },
  "/empresa": {
    title: "TARANIS | Inteligencia hidrológica para territorios resilientes",
    description:
      "Conoce la visión de TARANIS: transformar conocimiento hidrológico, datos territoriales y capacidad predictiva en decisiones más informadas frente a inundaciones.",
  },
  "/contacto": {
    title: "Solicitar una demostración de TARANIS",
    description:
      "Solicita una demostración de TARANIS adaptada a tu territorio, fuentes de información y necesidades de predicción y alerta temprana de inundaciones.",
  },
};

const en: Record<string, PageMeta> = {
  "/": {
    title: "AI flood early-warning system | TARANIS",
    description:
      "TARANIS integrates hydrometeorological data, modelling and artificial intelligence to anticipate river discharge and flood scenarios and support decision-making.",
  },
  "/producto": {
    title: "Flood forecasting and early-warning platform | TARANIS",
    description:
      "Discover TARANIS: hydrological forecasting, data integration, geospatial visualisation and flood early warning in one platform.",
  },
  "/soluciones": {
    title: "Flood-risk management solutions | TARANIS",
    description:
      "TARANIS solutions for public administrations, Civil Protection, river basin authorities and infrastructure exposed to flood risk.",
  },
  "/soluciones/administraciones-publicas": {
    title: "Flood warning system for public administrations | TARANIS",
    description:
      "Hydrological information, forecasting and territorial visualisation to support municipalities and public administrations in flood-risk management.",
  },
  "/soluciones/proteccion-civil": {
    title: "Flood early warning for Civil Protection | TARANIS",
    description:
      "Hydrological monitoring, forecasting and georeferenced alerts to complement Civil Protection operating procedures.",
  },
  "/soluciones/organismos-de-cuenca": {
    title: "Hydrological forecasting for river basin authorities | TARANIS",
    description:
      "River gauges, precipitation, historical data, hydrological modelling and artificial intelligence integrated for basin-scale monitoring.",
  },
  "/soluciones/infraestructuras": {
    title: "Flood-risk management for infrastructure | TARANIS",
    description:
      "Territorial and predictive information for organisations managing infrastructure and assets exposed to flood risk.",
  },
  "/tecnologia": {
    title: "Hydrological forecasting and artificial-intelligence technology | TARANIS",
    description:
      "Explore TARANIS technology: hydrometeorological data integration, hydrological modelling, artificial intelligence and geospatial visualisation for flood anticipation.",
  },
  "/recursos": {
    title: "Flood forecasting and risk resources | TARANIS",
    description:
      "Technical guides on early warning, hydrological forecasting, artificial intelligence, data and flood-risk management.",
  },
  "/recursos/sistema-alerta-temprana-inundaciones": {
    title: "Flood early-warning systems: what they are and how they work | TARANIS",
    description:
      "Learn what a flood early-warning system integrates and how it connects data, models, forecasting and territory to support decisions.",
  },
  "/recursos/prediccion-hidrologica": {
    title: "Hydrological forecasting: data, models and anticipation | TARANIS",
    description:
      "What hydrological forecasting is, which data it uses and how modelling and observations are combined to anticipate river discharge and flood scenarios.",
  },
  "/recursos/inteligencia-artificial-inundaciones": {
    title: "Artificial intelligence for flood forecasting | TARANIS",
    description:
      "How artificial intelligence and temporal models are applied to hydrology and why they must be integrated with data, validation and hydrological knowledge.",
  },
  "/empresa": {
    title: "TARANIS | Hydrological intelligence for resilient territories",
    description:
      "Discover the TARANIS vision: turning hydrological knowledge, territorial data and predictive capability into better-informed flood-risk decisions.",
  },
  "/contacto": {
    title: "Request a TARANIS demonstration",
    description:
      "Request a TARANIS demonstration tailored to your territory, data sources and flood forecasting and early-warning needs.",
  },
};

const pt: Record<string, PageMeta> = {
  "/": {
    title: "Sistema de alerta precoce de inundações com IA | TARANIS",
    description:
      "A TARANIS integra dados hidrometeorológicos, modelagem e inteligência artificial para antecipar vazões e cenários de inundação e apoiar a tomada de decisão.",
  },
  "/producto": {
    title: "Plataforma de previsão e alerta de inundações | TARANIS",
    description:
      "Conheça a TARANIS: previsão hidrológica, integração de dados, visualização geoespacial e alerta precoce de inundações em uma única plataforma.",
  },
  "/soluciones": {
    title: "Soluções para gestão do risco de inundações | TARANIS",
    description:
      "Soluções TARANIS para administrações públicas, Defesa Civil, órgãos de bacia e infraestruturas expostas ao risco de inundações.",
  },
  "/soluciones/administraciones-publicas": {
    title: "Sistema de alerta de inundações para administrações públicas | TARANIS",
    description:
      "Informação hidrológica, previsão e visualização territorial para apoiar municípios e administrações públicas na gestão do risco de inundações.",
  },
  "/soluciones/proteccion-civil": {
    title: "Alerta precoce de inundações para Defesa Civil | TARANIS",
    description:
      "Monitoramento hidrológico, previsão e alertas georreferenciados para complementar os procedimentos operacionais da Defesa Civil.",
  },
  "/soluciones/organismos-de-cuenca": {
    title: "Previsão hidrológica para órgãos de bacia | TARANIS",
    description:
      "Integração de estações fluviométricas, precipitação, históricos, modelagem hidrológica e inteligência artificial para monitoramento em escala de bacia.",
  },
  "/soluciones/infraestructuras": {
    title: "Gestão do risco de inundações em infraestruturas | TARANIS",
    description:
      "Informação territorial e preditiva para organizações que gerenciam infraestruturas e ativos expostos ao risco de inundações.",
  },
  "/tecnologia": {
    title: "Tecnologia para previsão hidrológica e inteligência artificial | TARANIS",
    description:
      "Conheça a tecnologia TARANIS: integração de dados hidrometeorológicos, modelagem hidrológica, inteligência artificial e visualização geoespacial para antecipar inundações.",
  },
  "/recursos": {
    title: "Recursos sobre previsão e risco de inundações | TARANIS",
    description:
      "Guias técnicos sobre alerta precoce, previsão hidrológica, inteligência artificial, dados e gestão do risco de inundações.",
  },
  "/recursos/sistema-alerta-temprana-inundaciones": {
    title: "Sistema de alerta precoce de inundações: o que é e como funciona | TARANIS",
    description:
      "Entenda o que um sistema de alerta precoce de inundações integra e como conecta dados, modelos, previsão e território para apoiar decisões.",
  },
  "/recursos/prediccion-hidrologica": {
    title: "Previsão hidrológica: dados, modelos e antecipação | TARANIS",
    description:
      "O que é previsão hidrológica, quais dados utiliza e como modelagem e observações são combinadas para antecipar vazões e cenários de inundação.",
  },
  "/recursos/inteligencia-artificial-inundaciones": {
    title: "Inteligência artificial para previsão de inundações | TARANIS",
    description:
      "Como a inteligência artificial e os modelos temporais são aplicados à hidrologia e por que precisam ser integrados a dados, validação e conhecimento hidrológico.",
  },
  "/empresa": {
    title: "TARANIS | Inteligência hidrológica para territórios resilientes",
    description:
      "Conheça a visão da TARANIS: transformar conhecimento hidrológico, dados territoriais e capacidade preditiva em decisões mais bem informadas diante de inundações.",
  },
  "/contacto": {
    title: "Solicitar uma demonstração da TARANIS",
    description:
      "Solicite uma demonstração da TARANIS adaptada ao seu território, fontes de informação e necessidades de previsão e alerta precoce de inundações.",
  },
};

const tables: Record<Locale, Record<string, PageMeta>> = { es, en, "pt-BR": pt };
export function pageMeta(canonicalPath: string, locale: Locale): PageMeta {
  return tables[locale][canonicalPath] ?? tables.es[canonicalPath] ?? tables.es["/"]!;
}
