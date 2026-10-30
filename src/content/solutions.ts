export type Solution = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  needs: string[];
  capabilities: string[];
};

export const solutions: Solution[] = [
  {
    slug: "administraciones-publicas",
    eyebrow: "Administraciones públicas",
    title: "Información hidrológica para anticipar y planificar",
    description:
      "TARANIS integra información hidrometeorológica, predicción y cartografía para apoyar la gestión municipal y territorial del riesgo de inundaciones.",
    intro:
      "Ayuntamientos y administraciones necesitan transformar fuentes dispersas en una lectura territorial que pueda consultarse antes y durante un episodio.",
    needs: [
      "Seguimiento de precipitación y caudales",
      "Lectura territorial del episodio",
      "Acceso a históricos",
      "Apoyo a planificación y coordinación",
    ],
    capabilities: [
      "Integración de fuentes oficiales",
      "Visualización geoespacial",
      "Predicción configurable",
      "Despliegue adaptado al territorio",
    ],
  },
  {
    slug: "proteccion-civil",
    eyebrow: "Protección Civil",
    title: "Anticipación operativa durante episodios de inundación",
    description:
      "Información integrada y predicciones para complementar los procedimientos de seguimiento y respuesta de Protección Civil.",
    intro:
      "Durante un episodio, el tiempo y la claridad de la información son críticos. TARANIS concentra observaciones y predicciones para facilitar una lectura rápida de la evolución hidrológica.",
    needs: [
      "Seguimiento de episodios",
      "Identificación de cambios relevantes",
      "Consulta territorial",
      "Apoyo a la coordinación operativa",
    ],
    capabilities: [
      "Alertas georreferenciadas",
      "Series e hidrogramas",
      "Horizontes de predicción",
      "Integración con fuentes existentes",
    ],
  },
  {
    slug: "organismos-de-cuenca",
    eyebrow: "Organismos de cuenca",
    title: "Datos, aforos y modelización en una misma lectura",
    description:
      "TARANIS combina estaciones de aforo, precipitación, históricos y modelización para apoyar el seguimiento hidrológico a escala de cuenca.",
    intro:
      "La operación hidrológica exige relacionar series de caudal, precipitación, modelos y territorio. TARANIS facilita esa integración mediante una arquitectura modular.",
    needs: [
      "Integración de redes de aforo",
      "Seguimiento de precipitación",
      "Análisis histórico",
      "Comparación de modelos y observaciones",
    ],
    capabilities: [
      "Fuentes SAIH y meteorológicas",
      "Modelización hidrológica",
      "Inteligencia artificial",
      "Visualización por cuencas y subcuencas",
    ],
  },
  {
    slug: "infraestructuras",
    eyebrow: "Infraestructuras y empresas",
    title: "Contexto hidrológico para activos expuestos al riesgo",
    description:
      "TARANIS aporta información territorial y predictiva para organizaciones que gestionan infraestructuras o activos sensibles a episodios de inundación.",
    intro:
      "La exposición de activos requiere comprender qué está ocurriendo aguas arriba, cómo evoluciona el episodio y qué escenarios pueden afectar a la operación.",
    needs: [
      "Seguimiento de activos expuestos",
      "Contexto hidrológico territorial",
      "Anticipación de escenarios",
      "Información para protocolos internos",
    ],
    capabilities: [
      "Cobertura territorial configurable",
      "Integración de datos externos",
      "Alertas y visualización",
      "Acompañamiento técnico",
    ],
  },
];

export const solutionBySlug = Object.fromEntries(
  solutions.map((solution) => [solution.slug, solution]),
);
