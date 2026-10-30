export type ResourceSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Resource = {
  slug: string;
  tag: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  sections: ResourceSection[];
  related: Array<{ label: string; to: string }>;
};

export const resources: Resource[] = [
  {
    slug: "sistema-alerta-temprana-inundaciones",
    tag: "Guía técnica",
    title: "Sistema de alerta temprana de inundaciones: qué es y cómo funciona",
    shortTitle: "Cómo funciona una alerta temprana de inundaciones",
    description:
      "Qué integra un sistema de alerta temprana de inundaciones, cómo transforma datos en información operativa y qué papel desempeña en la toma de decisiones.",
    intro:
      "Un sistema de alerta temprana de inundaciones conecta observación, modelización, predicción y comunicación para reducir el tiempo entre la detección de una amenaza y la respuesta operativa.",
    sections: [
      {
        heading: "De la observación a la decisión",
        paragraphs: [
          "La alerta temprana no consiste únicamente en mostrar lluvia o caudal. Su valor aparece cuando distintas fuentes de información se integran y se interpretan de forma conjunta para anticipar cómo puede evolucionar un episodio.",
          "En TARANIS, ese enfoque se articula alrededor de información hidrometeorológica, estaciones de aforo, precipitación, radar meteorológico, cartografía, datos históricos y modelos hidrológicos y de inteligencia artificial.",
        ],
        bullets: [
          "Observación hidrometeorológica",
          "Integración de datos territoriales",
          "Modelización y predicción",
          "Visualización geoespacial",
          "Apoyo a la decisión",
        ],
      },
      {
        heading: "Por qué el contexto territorial importa",
        paragraphs: [
          "Una misma precipitación puede producir respuestas muy diferentes según la cuenca, el estado previo del suelo, la red de drenaje, la topografía y la evolución del episodio. Por eso una plataforma operativa necesita relacionar los datos con el territorio y no tratarlos como valores aislados.",
          "El objetivo es convertir series y modelos complejos en una lectura que ayude a comprender dónde se concentra el riesgo, cómo puede evolucionar y qué información merece atención prioritaria.",
        ],
      },
      {
        heading: "El papel de TARANIS",
        paragraphs: [
          "TARANIS está concebido como una capa de inteligencia hidrológica que aprovecha fuentes existentes y puede operar sin depender necesariamente del despliegue de una red propia de sensores IoT.",
          "La plataforma no sustituye los procedimientos de emergencia. Aporta información adicional para apoyar la anticipación, el seguimiento y la toma de decisiones de administraciones, organismos de cuenca, protección civil y gestores de infraestructuras.",
        ],
      },
    ],
    related: [
      { label: "Conocer la plataforma TARANIS", to: "/producto" },
      { label: "Ver la tecnología de predicción", to: "/tecnologia" },
    ],
  },
  {
    slug: "prediccion-hidrologica",
    tag: "Fundamentos",
    title: "Predicción hidrológica: datos, modelos y horizontes de anticipación",
    shortTitle: "Qué es la predicción hidrológica",
    description:
      "Introducción a la predicción hidrológica, sus fuentes de datos, modelos y uso para anticipar caudales y escenarios de inundación.",
    intro:
      "La predicción hidrológica busca estimar cómo evolucionará la respuesta de una cuenca a partir de la información observada y prevista disponible.",
    sections: [
      {
        heading: "Qué información alimenta una predicción",
        paragraphs: [
          "Las predicciones dependen de la calidad, resolución y disponibilidad de las fuentes de entrada. Entre las más relevantes se encuentran la precipitación observada y prevista, los caudales, la información radar, las series históricas y las características espaciales de la cuenca.",
          "La integración de estas fuentes permite construir una representación temporal y territorial del episodio antes de ejecutar los modelos.",
        ],
        bullets: [
          "Precipitación observada y prevista",
          "Estaciones de aforo",
          "Radar meteorológico",
          "Series históricas",
          "Cartografía y características de cuenca",
        ],
      },
      {
        heading: "Modelos físicos e inteligencia artificial",
        paragraphs: [
          "Los modelos hidrológicos representan procesos de transformación lluvia-caudal a partir de hipótesis físicas o conceptuales. Los modelos de aprendizaje automático pueden aprender patrones temporales a partir de series históricas y variables de entrada.",
          "TARANIS integra ambas líneas tecnológicas dentro de una arquitectura modular. La selección y configuración de modelos depende del territorio, las fuentes disponibles y el objetivo operativo.",
        ],
      },
      {
        heading: "Horizonte de predicción y uso operativo",
        paragraphs: [
          "Un horizonte más largo aporta mayor tiempo potencial de anticipación, pero también incorpora más incertidumbre. Por eso la predicción debe interpretarse junto con la evolución de las observaciones y actualizarse a medida que llegan nuevos datos.",
          "TARANIS está diseñado para trabajar con distintos horizontes de predicción según la configuración del despliegue y presentar sus resultados en una interfaz territorial comprensible.",
        ],
      },
    ],
    related: [
      { label: "Ver cómo TARANIS integra datos y modelos", to: "/tecnologia" },
      { label: "Solicitar una demostración", to: "/contacto" },
    ],
  },
  {
    slug: "inteligencia-artificial-inundaciones",
    tag: "IA aplicada",
    title: "Inteligencia artificial aplicada a la predicción de inundaciones",
    shortTitle: "IA para predicción de inundaciones",
    description:
      "Cómo puede utilizarse la inteligencia artificial en hidrología, qué aportan los modelos temporales y por qué deben integrarse con datos y conocimiento hidrológico.",
    intro:
      "La inteligencia artificial puede identificar relaciones temporales complejas en series hidrometeorológicas y complementar la modelización hidrológica tradicional.",
    sections: [
      {
        heading: "Qué puede aprender un modelo temporal",
        paragraphs: [
          "Las redes neuronales diseñadas para series temporales, como las arquitecturas LSTM, pueden aprender dependencias entre variables pasadas y la evolución posterior de una señal. En hidrología, esto permite estudiar relaciones entre precipitación, estados previos y caudales observados.",
          "Su utilidad depende de disponer de datos representativos, una preparación rigurosa de las series y una validación separada de los datos utilizados durante el entrenamiento.",
        ],
      },
      {
        heading: "IA no significa prescindir de la hidrología",
        paragraphs: [
          "Un sistema operativo necesita más que un modelo predictivo. Requiere control de calidad de datos, contexto territorial, análisis hidrológico, evaluación de incertidumbre y una interfaz que traduzca los resultados a información accionable.",
          "Por este motivo TARANIS plantea una integración entre modelización hidrológica, inteligencia artificial y fuentes oficiales, en lugar de tratar la IA como una capa aislada.",
        ],
        bullets: [
          "Preparación y control de datos",
          "Entrenamiento y validación",
          "Comparación con observaciones",
          "Contexto hidrológico",
          "Representación territorial de resultados",
        ],
      },
      {
        heading: "Del modelo a una herramienta de decisión",
        paragraphs: [
          "El valor final aparece cuando la salida del modelo se puede comparar con observaciones, visualizar en el territorio y actualizar durante el episodio. Esa conexión entre predicción y operación es una de las funciones centrales de una plataforma de alerta temprana.",
        ],
      },
    ],
    related: [
      { label: "Leer sobre predicción hidrológica", to: "/recursos/prediccion-hidrologica" },
      { label: "Explorar la plataforma", to: "/producto" },
    ],
  },
];

export const resourceBySlug = Object.fromEntries(
  resources.map((resource) => [resource.slug, resource]),
);
