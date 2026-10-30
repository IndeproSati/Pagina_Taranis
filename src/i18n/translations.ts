import type { Locale } from "./config";
import { getActiveLocale } from "./config";

const en: Record<string, string> = {
  Producto: "Product",
  Soluciones: "Solutions",
  Tecnología: "Technology",
  Recursos: "Resources",
  TARANIS: "TARANIS",
  Contacto: "Contact",
  "Solicitar demo": "Request a demo",
  "Solicita una demo": "Request a demo",
  "Solicitar una demo": "Request a demo",
  "Solicitar demostración": "Request a demo",
  "Solicitar una demostración": "Request a demo",
  "Solicitar una demostración personalizada": "Request a tailored demo",
  "Solicitar información": "Request information",
  "Plataforma TARANIS": "TARANIS platform",
  "Soluciones por organización": "Solutions by organization",
  "Tecnología hidrológica e IA": "Hydrological technology and AI",
  "Recursos sobre inundaciones": "Flood resources",
  "Plataforma de inteligencia hidrológica y alerta temprana para anticipar escenarios de inundación.":
    "Hydrological intelligence and early-warning platform for anticipating flood scenarios.",
  "Navegación principal": "Main navigation",
  "Navegación móvil": "Mobile navigation",
  "Navegación secundaria": "Secondary navigation",
  "Abrir menú": "Open menu",
  "Cerrar menú": "Close menu",
  "Alerta temprana de inundaciones": "Flood early warning",
  "Anticipa la": "Anticipate",
  "inundación.": "flooding.",
  "Decide antes.": "Decide earlier.",
  "TARANIS combina datos hidrometeorológicos, modelización, inteligencia artificial e inteligencia geoespacial para convertir información compleja en predicciones y alertas accionables que apoyan la toma de decisiones.":
    "TARANIS combines hydrometeorological data, modelling, artificial intelligence and geospatial intelligence to turn complex information into actionable forecasts and alerts that support decision-making.",
  "Ver cómo funciona": "See how it works",
  "Inteligencia hidrológica para territorios más resilientes.":
    "Hydrological intelligence for more resilient territories.",
  "El reto": "The challenge",
  "El riesgo no espera.": "Risk does not wait.",
  "Tu decisión tampoco debería.": "Neither should your decision.",
  "Los fenómenos extremos evolucionan rápidamente y las decisiones deben tomarse antes de que el impacto sea visible sobre el territorio.":
    "Extreme events evolve quickly, and decisions must be made before their impact becomes visible across the territory.",
  "Sistema TARANIS": "TARANIS system",
  "Una cadena completa: observar, modelizar, anticipar.":
    "A complete chain: observe, model, anticipate.",
  "Sensores, satélites, radar y fuentes oficiales":
    "Sensors, satellites, radar and official sources",
  "Datos multifuente": "Multi-source data",
  "Modelos e inteligencia artificial": "Models and artificial intelligence",
  "Predicción, modelos y alertas": "Forecasting, models and alerts",
  "Información operativa": "Operational information",
  Datos: "Data",
  Modelos: "Models",
  Predicción: "Forecasting",
  Decisión: "Decision",
  Decisiones: "Decisions",
  Análisis: "Analysis",
  Alertas: "Alerts",
  Escenarios: "Scenarios",
  Indicadores: "Indicators",
  Mapas: "Maps",
  "Datos hidrometeorológicos": "Hydrometeorological data",
  "Integra precipitación, aforos, históricos y otras fuentes disponibles para el territorio.":
    "Integrates precipitation, discharge gauges, historical records and other data sources available for the territory.",
  "Predicción y seguimiento": "Forecasting and monitoring",
  "Conecta observaciones y modelos para analizar la evolución del episodio y sus escenarios.":
    "Connects observations and models to analyse how an event and its scenarios evolve.",
  "Lectura geoespacial": "Geospatial insight",
  "Representa información hidrológica sobre el territorio para facilitar su interpretación operativa.":
    "Displays hydrological information across the territory to support operational interpretation.",
  "Datos · Modelos · Predicción · Decisión": "Data · Models · Forecasting · Decision",
  "Del dato a la decisión": "From data to decision",
  "De los datos a una visión completa.": "From data to a complete view.",
  "Conoce nuestra tecnología": "Explore our technology",
  "Explorar TARANIS": "Explore TARANIS",
  "Explorar la plataforma": "Explore the platform",
  "Ver la plataforma": "View the platform",
  "Ver solución": "View solution",
  "Explorar soluciones": "Explore solutions",
  "Ver todos los recursos": "View all resources",
  Demo: "Demo",
  "Demostración visual · datos ficticios": "Visual demo · synthetic data",
  "Vista de producto": "Product view",
  "Reproducir vídeo TARANIS": "Play TARANIS video",
  "Vista previa del vídeo TARANIS": "TARANIS video preview",
  "Preguntas frecuentes.": "Frequently asked questions.",
  "Conocimiento para anticipar.": "Knowledge to anticipate.",
  Conocimiento: "Knowledge",
  "Guías y contenidos técnicos para comprender la predicción hidrológica, la alerta temprana y la inteligencia artificial aplicada a inundaciones.":
    "Technical guides and content for understanding hydrological forecasting, early warning and artificial intelligence applied to floods.",
  "Guías técnicas sobre alerta temprana, predicción hidrológica, inteligencia artificial, datos y gestión del riesgo de inundaciones.":
    "Technical guides on early warning, hydrological forecasting, artificial intelligence, data and flood-risk management.",
  "Leer recurso": "Read resource",
  "Leer sobre predicción hidrológica": "Read about hydrological forecasting",
  "Hablemos de tu territorio.": "Let’s talk about your territory.",
  "Háblanos de tu territorio": "Tell us about your territory",
  "De tu territorio a TARANIS.": "From your territory to TARANIS.",
  "Cuéntanos el contexto operativo y prepararemos una demostración centrada en tus necesidades.":
    "Tell us about your operational context and we will prepare a demo focused on your needs.",
  Nombre: "First name",
  Apellidos: "Last name",
  Email: "Email",
  Teléfono: "Phone",
  País: "Country",
  Cargo: "Role",
  Organización: "Organization",
  "Tipo de organización": "Organization type",
  "Territorio de interés": "Territory of interest",
  Mensaje: "Message",
  Necesidades: "Needs",
  Administración: "Public administration",
  "Administraciones públicas": "Public administrations",
  "Protección Civil": "Civil Protection",
  "Organismo de cuenca": "River basin authority",
  "Organismos de cuenca": "River basin authorities",
  "Operadores de infraestructuras": "Infrastructure operators",
  "Empresa / Infraestructura": "Company / Infrastructure",
  Otro: "Other",
  "He leído y acepto la política de privacidad y el tratamiento de datos para atender mi solicitud.":
    "I have read and accept the privacy policy and the processing of my data to handle my request.",
  "Gracias.": "Thank you.",
  "Nuestro equipo se pondrá en contacto contigo para conocer las características de tu territorio y preparar una demostración.":
    "Our team will contact you to learn about your territory and prepare a demonstration.",
  "Conoce cómo nuestra plataforma puede ayudarte a anticipar escenarios de riesgo y tomar mejores decisiones sobre tu territorio.":
    "See how our platform can help you anticipate risk scenarios and make better decisions about your territory.",
  Capacidades: "Capabilities",
  Beneficios: "Benefits",
  Arquitectura: "Architecture",
  "Base tecnológica": "Technology base",
  "Modelo de servicio": "Service model",
  Implementación: "Implementation",
  "Acompañamiento técnico": "Technical support",
  "Plataforma de predicción hidrológica, visualización territorial y alerta temprana de inundaciones.":
    "Hydrological forecasting, territorial visualisation and flood early-warning platform.",
  "Integramos datos, modelos hidrológicos, inteligencia artificial y visualización geoespacial para convertir la complejidad del territorio en información clara y operativa.":
    "We integrate data, hydrological models, artificial intelligence and geospatial visualisation to turn territorial complexity into clear, operational information.",
  "Información integrada y escalable.": "Integrated, scalable information.",
  "Una interfaz para comprender lo que viene.": "One interface to understand what comes next.",
  "Múltiples fuentes": "Multiple sources",
  "Integración de aforos, precipitación, históricos, modelización hidrológica e inteligencia artificial para seguimiento a escala de cuenca.":
    "Integration of river gauges, precipitation, historical records, hydrological modelling and artificial intelligence for basin-scale monitoring.",
  Visualización: "Visualisation",
  "Visualiza cuencas, ríos, estaciones, municipios y áreas expuestas desde una única interfaz.":
    "Visualise basins, rivers, stations, municipalities and exposed areas from a single interface.",
  "Predicción hidrológica": "Hydrological forecasting",
  "Anticipa la evolución de variables hidrológicas mediante modelos físicos y de inteligencia artificial.":
    "Anticipate the evolution of hydrological variables using physical and artificial-intelligence models.",
  "Cartografía territorial": "Territorial mapping",
  "Capas de información geoespacial, meteorológica e hidrológica utilizadas por TARANIS":
    "Geospatial, meteorological and hydrological information layers used by TARANIS",
  "Una plataforma preparada para crecer con el territorio.":
    "A platform designed to grow with the territory.",
  "Cada despliegue puede adaptarse a las características hidrológicas y operativas del territorio.":
    "Each deployment can be adapted to the hydrological and operational characteristics of the territory.",
  "Arquitectura diseñada para trabajar desde municipios hasta áreas territoriales extensas.":
    "Architecture designed to operate from municipal scale to large territorial areas.",
  Escalabilidad: "Scalability",
  "Arquitectura tecnológica": "Technology architecture",
  "Ciencia y tecnología": "Science and technology",
  "IA + hidrología": "AI + hydrology",
  "Hidrología e inteligencia artificial, no una u otra.":
    "Hydrology and artificial intelligence, not one or the other.",
  "Combinamos modelización hidrológica, análisis territorial e inteligencia artificial para transformar observaciones en información capaz de anticipar la evolución de un episodio.":
    "We combine hydrological modelling, territorial analysis and artificial intelligence to turn observations into information capable of anticipating how an event will evolve.",
  "Modelización híbrida": "Hybrid modelling",
  "Modelos hidrológicos": "Hydrological models",
  "Modelos predictivos que identifican patrones temporales y mejoran la capacidad de anticipación.":
    "Predictive models that identify temporal patterns and improve anticipation capability.",
  "Complementa modelos hidrológicos clásicos con técnicas avanzadas de inteligencia artificial.":
    "Complements classical hydrological models with advanced artificial-intelligence techniques.",
  "Una combinación de datos, modelos e inteligencia artificial para transformar información compleja en herramientas útiles para la toma de decisiones.":
    "A combination of data, models and artificial intelligence that turns complex information into useful decision-support tools.",
  "Casos de uso reales": "Real use cases",
  "Con ejemplos aplicados a contextos hidrológicos reales.":
    "With examples applied to real hydrological contexts.",
  "Por organización": "By organization",
  "La misma inteligencia hidrológica, distintas decisiones.":
    "The same hydrological intelligence, different decisions.",
  "Cada organización utiliza la información con objetivos y responsabilidades diferentes. Por eso TARANIS adapta la lectura y el despliegue al contexto operativo.":
    "Each organization uses information with different goals and responsibilities. TARANIS therefore adapts the view and deployment to the operational context.",
  "Información hidrológica para anticipar y planificar":
    "Hydrological information to anticipate and plan",
  "Planificación, protección civil y gestión del riesgo de inundaciones.":
    "Planning, civil protection and flood-risk management.",
  "Seguimiento hidrológico": "Hydrological monitoring",
  "Seguimiento hidrológico, predicción y alertas georreferenciadas para complementar los procedimientos operativos de Protección Civil.":
    "Hydrological monitoring, forecasting and georeferenced alerts to complement Civil Protection operating procedures.",
  "Gestión de recursos hídricos y supervisión de eventos extremos.":
    "Water-resource management and monitoring of extreme events.",
  "Contexto hidrológico para activos expuestos al riesgo":
    "Hydrological context for assets exposed to risk",
  "Continuidad operativa y reducción de riesgos en activos críticos.":
    "Operational continuity and risk reduction for critical assets.",
  "Evaluación territorial": "Territorial assessment",
  "Monitorización y contexto territorial": "Monitoring and territorial context",
  "Anticipación operativa durante episodios de inundación":
    "Operational anticipation during flood events",
  "Información en tiempo real para la coordinación operativa y la toma de decisiones.":
    "Real-time information for operational coordination and decision-making.",
  "Avisos tempranos y umbrales personalizados para activar protocolos de respuesta.":
    "Early warnings and tailored thresholds to activate response protocols.",
  "Territorios más resilientes.": "More resilient territories.",
  Visión: "Vision",
  "Comprender antes.": "Understand earlier.",
  "Decidir mejor.": "Decide better.",
  "TARANIS nace para convertir conocimiento hidrológico, datos territoriales y capacidad predictiva en decisiones más informadas.":
    "TARANIS was created to turn hydrological knowledge, territorial data and predictive capability into better-informed decisions.",
  "Los episodios extremos exigen una lectura integrada del territorio, capaz de evolucionar junto a la información disponible.":
    "Extreme events require an integrated view of the territory that can evolve as new information becomes available.",
  "Nuestra visión es que la tecnología hidrológica sea comprensible, operativa y útil para las organizaciones responsables de anticipar el riesgo.":
    "Our vision is for hydrological technology to be understandable, operational and useful to organizations responsible for anticipating risk.",
  "TARANIS se plantea como un producto tecnológico modular, capaz de integrar fuentes existentes, modelos hidrológicos e inteligencia artificial y adaptarse a diferentes escalas territoriales.":
    "TARANIS is conceived as a modular technology product able to integrate existing sources, hydrological models and artificial intelligence and adapt to different territorial scales.",
  "Tu territorio.": "Your territory.",
  "Una demostración concreta.": "A focused demonstration.",
  "Comparte el contexto y las necesidades de tu organización. Prepararemos una conversación centrada en lo que necesitas anticipar.":
    "Share your organization’s context and needs. We will prepare a conversation focused on what you need to anticipate.",
  "Página no encontrada": "Page not found",
  "La página que buscas no existe o ha cambiado de ubicación.":
    "The page you are looking for does not exist or has moved.",
  "Volver al inicio": "Back to home",
  "No se ha podido cargar esta página": "This page could not be loaded",
  "Se ha producido un error. Puedes volver a intentarlo o regresar al inicio.":
    "An error occurred. You can try again or return to the home page.",
  Reintentar: "Try again",
  Inicio: "Home",
  Alto: "High",
  Medio: "Medium",
  Bajo: "Low",
  Nivel: "Level",
  "Nivel de riesgo": "Risk level",
  Estado: "Status",
  "Tiempo real": "Real time",
  Ahora: "Now",
  "Últimas 24 h": "Last 24 h",
  "Actualización automática": "Automatic refresh",
  Precipitación: "Precipitation",
  "Precipitación acumulada": "Accumulated precipitation",
  Caudal: "Discharge",
  Caudales: "Discharges",
  Lluvia: "Rainfall",
  Escorrentía: "Runoff",
  Estaciones: "Stations",
  "Estaciones de aforo": "River gauges",
  "Estaciones y SAIH": "Stations and SAIH",
  Satélites: "Satellites",
  "Radar meteorológico": "Weather radar",
  Copernicus: "Copernicus",
  "Topografía, usos del suelo y cartografía": "Topography, land use and mapping",
  "Escenario previsto": "Forecast scenario",
  "Hidrogramas, hietogramas, indicadores y mapas para facilitar la interpretación.":
    "Hydrographs, hyetographs, indicators and maps to support interpretation.",
  "Observado / pronosticado": "Observed / forecast",
  "Evolución hidrológica": "Hydrological evolution",
  "Evolución temporal": "Temporal evolution",
  "Comparación de resultados": "Results comparison",
  "Análisis histórico": "Historical analysis",
  "Predicción de caudales y escenarios de inundación con días u horas de antelación.":
    "Forecasting of river discharges and flood scenarios hours or days in advance.",
  "Predicción, patrones temporales y detección": "Forecasting, temporal patterns and detection",
  "Qué es la predicción hidrológica": "What is hydrological forecasting",
  "Predicción hidrológica: datos, modelos y horizontes de anticipación":
    "Hydrological forecasting: data, models and forecast horizons",
  "Introducción a la predicción hidrológica, sus fuentes de datos, modelos y uso para anticipar caudales y escenarios de inundación.":
    "An introduction to hydrological forecasting, its data sources, models and use in anticipating river discharges and flood scenarios.",
  "Sistema de alerta temprana de inundaciones: qué es y cómo funciona":
    "Flood early-warning systems: what they are and how they work",
  "Cómo funciona una alerta temprana de inundaciones": "How flood early warning works",
  "Qué integra un sistema de alerta temprana de inundaciones y cómo conecta datos, modelos, predicción y territorio para apoyar decisiones.":
    "What a flood early-warning system integrates and how it connects data, models, forecasting and territory to support decisions.",
  "Inteligencia artificial aplicada a la predicción de inundaciones":
    "Artificial intelligence applied to flood forecasting",
  "IA aplicada a la predicción de inundaciones": "AI applied to flood forecasting",
  "IA para predicción de inundaciones": "AI for flood forecasting",
  "Cómo puede utilizarse la inteligencia artificial en hidrología, qué aportan los modelos temporales y por qué deben integrarse con datos y conocimiento hidrológico.":
    "How artificial intelligence can be used in hydrology, what temporal models contribute and why they must be integrated with data and hydrological knowledge.",
  "Transformamos datos hidrológicos en información operativa para que municipios, organismos y sectores estratégicos puedan anticipar riesgos, proteger a la población y gestionar el territorio con mayor eficacia.":
    "We turn hydrological data into operational information so municipalities, authorities and strategic sectors can anticipate risks, protect people and manage territory more effectively.",
  "Información clara, visual y basada en datos para decisiones más rápidas y efectivas.":
    "Clear, visual, data-driven information for faster and more effective decisions.",
  "Mayor seguridad": "Greater safety",
  "Más eficiencia": "Greater efficiency",
  "Territorios sostenibles": "Sustainable territories",
  "Protección de la población y reducción del impacto de las inundaciones.":
    "Protection of people and reduction of flood impacts.",
  "Optimización de recursos y coordinación operativa en situaciones de riesgo.":
    "Resource optimisation and operational coordination in risk situations.",
  "Gestión responsable del agua y menor impacto ambiental en los ecosistemas.":
    "Responsible water management and lower environmental impact on ecosystems.",
  Actuar: "Act",
  Alertar: "Alert",
  Anticipar: "Anticipate",
  Detectar: "Detect",
  Gestionar: "Manage",
  Aprender: "Learn",
  Vigilancia: "Monitoring",
};

const pt: Record<string, string> = {
  Producto: "Produto",
  Soluciones: "Soluções",
  Tecnología: "Tecnologia",
  Recursos: "Recursos",
  TARANIS: "TARANIS",
  Contacto: "Contato",
  "Solicitar demo": "Solicitar demonstração",
  "Solicita una demo": "Solicite uma demonstração",
  "Solicitar una demo": "Solicitar uma demonstração",
  "Solicitar demostración": "Solicitar demonstração",
  "Solicitar una demostración": "Solicitar uma demonstração",
  "Solicitar una demostración personalizada": "Solicitar uma demonstração personalizada",
  "Solicitar información": "Solicitar informações",
  "Plataforma TARANIS": "Plataforma TARANIS",
  "Soluciones por organización": "Soluções por organização",
  "Tecnología hidrológica e IA": "Tecnologia hidrológica e IA",
  "Recursos sobre inundaciones": "Recursos sobre inundações",
  "Plataforma de inteligencia hidrológica y alerta temprana para anticipar escenarios de inundación.":
    "Plataforma de inteligência hidrológica e alerta precoce para antecipar cenários de inundação.",
  "Navegación principal": "Navegação principal",
  "Navegación móvil": "Navegação móvel",
  "Navegación secundaria": "Navegação secundária",
  "Abrir menú": "Abrir menu",
  "Cerrar menú": "Fechar menu",
  "Alerta temprana de inundaciones": "Alerta precoce de inundações",
  "Anticipa la": "Antecipe a",
  "inundación.": "inundação.",
  "Decide antes.": "Decida antes.",
  "TARANIS combina datos hidrometeorológicos, modelización, inteligencia artificial e inteligencia geoespacial para convertir información compleja en predicciones y alertas accionables que apoyan la toma de decisiones.":
    "A TARANIS combina dados hidrometeorológicos, modelagem, inteligência artificial e inteligência geoespacial para transformar informações complexas em previsões e alertas acionáveis que apoiam a tomada de decisão.",
  "Ver cómo funciona": "Veja como funciona",
  "Inteligencia hidrológica para territorios más resilientes.":
    "Inteligência hidrológica para territórios mais resilientes.",
  "El reto": "O desafio",
  "El riesgo no espera.": "O risco não espera.",
  "Tu decisión tampoco debería.": "Sua decisão também não deveria.",
  "Los fenómenos extremos evolucionan rápidamente y las decisiones deben tomarse antes de que el impacto sea visible sobre el territorio.":
    "Os eventos extremos evoluem rapidamente e as decisões precisam ser tomadas antes que o impacto seja visível no território.",
  "Sistema TARANIS": "Sistema TARANIS",
  "Una cadena completa: observar, modelizar, anticipar.":
    "Uma cadeia completa: observar, modelar, antecipar.",
  "Sensores, satélites, radar y fuentes oficiales": "Sensores, satélites, radar e fontes oficiais",
  "Datos multifuente": "Dados de múltiplas fontes",
  "Modelos e inteligencia artificial": "Modelos e inteligência artificial",
  "Predicción, modelos y alertas": "Previsão, modelos e alertas",
  "Información operativa": "Informação operacional",
  Datos: "Dados",
  Modelos: "Modelos",
  Predicción: "Previsão",
  Decisión: "Decisão",
  Decisiones: "Decisões",
  Análisis: "Análise",
  Alertas: "Alertas",
  Escenarios: "Cenários",
  Indicadores: "Indicadores",
  Mapas: "Mapas",
  "Datos hidrometeorológicos": "Dados hidrometeorológicos",
  "Integra precipitación, aforos, históricos y otras fuentes disponibles para el territorio.":
    "Integra precipitação, estações fluviométricas, históricos e outras fontes disponíveis para o território.",
  "Predicción y seguimiento": "Previsão e monitoramento",
  "Conecta observaciones y modelos para analizar la evolución del episodio y sus escenarios.":
    "Conecta observações e modelos para analisar a evolução do evento e seus cenários.",
  "Lectura geoespacial": "Leitura geoespacial",
  "Representa información hidrológica sobre el territorio para facilitar su interpretación operativa.":
    "Representa informações hidrológicas no território para facilitar sua interpretação operacional.",
  "Datos · Modelos · Predicción · Decisión": "Dados · Modelos · Previsão · Decisão",
  "Del dato a la decisión": "Do dado à decisão",
  "De los datos a una visión completa.": "Dos dados a uma visão completa.",
  "Conoce nuestra tecnología": "Conheça nossa tecnologia",
  "Explorar TARANIS": "Explorar TARANIS",
  "Explorar la plataforma": "Explorar a plataforma",
  "Ver la plataforma": "Ver a plataforma",
  "Ver solución": "Ver solução",
  "Explorar soluciones": "Explorar soluções",
  "Ver todos los recursos": "Ver todos os recursos",
  Demo: "Demonstração",
  "Demostración visual · datos ficticios": "Demonstração visual · dados fictícios",
  "Vista de producto": "Visão do produto",
  "Reproducir vídeo TARANIS": "Reproduzir vídeo TARANIS",
  "Vista previa del vídeo TARANIS": "Prévia do vídeo TARANIS",
  "Preguntas frecuentes.": "Perguntas frequentes.",
  "Conocimiento para anticipar.": "Conhecimento para antecipar.",
  Conocimiento: "Conhecimento",
  "Guías y contenidos técnicos para comprender la predicción hidrológica, la alerta temprana y la inteligencia artificial aplicada a inundaciones.":
    "Guias e conteúdos técnicos para compreender a previsão hidrológica, o alerta precoce e a inteligência artificial aplicada a inundações.",
  "Guías técnicas sobre alerta temprana, predicción hidrológica, inteligencia artificial, datos y gestión del riesgo de inundaciones.":
    "Guias técnicos sobre alerta precoce, previsão hidrológica, inteligência artificial, dados e gestão do risco de inundações.",
  "Leer recurso": "Ler recurso",
  "Leer sobre predicción hidrológica": "Ler sobre previsão hidrológica",
  "Hablemos de tu territorio.": "Vamos falar sobre o seu território.",
  "Háblanos de tu territorio": "Fale sobre o seu território",
  "De tu territorio a TARANIS.": "Do seu território à TARANIS.",
  "Cuéntanos el contexto operativo y prepararemos una demostración centrada en tus necesidades.":
    "Conte-nos sobre o contexto operacional e prepararemos uma demonstração focada nas suas necessidades.",
  Nombre: "Nome",
  Apellidos: "Sobrenome",
  Email: "E-mail",
  Teléfono: "Telefone",
  País: "País",
  Cargo: "Cargo",
  Organización: "Organização",
  "Tipo de organización": "Tipo de organização",
  "Territorio de interés": "Território de interesse",
  Mensaje: "Mensagem",
  Necesidades: "Necessidades",
  Administración: "Administração pública",
  "Administraciones públicas": "Administrações públicas",
  "Protección Civil": "Defesa Civil",
  "Organismo de cuenca": "Órgão de bacia",
  "Organismos de cuenca": "Órgãos de bacia",
  "Operadores de infraestructuras": "Operadores de infraestrutura",
  "Empresa / Infraestructura": "Empresa / Infraestrutura",
  Otro: "Outro",
  "He leído y acepto la política de privacidad y el tratamiento de datos para atender mi solicitud.":
    "Li e aceito a política de privacidade e o tratamento de dados para atender à minha solicitação.",
  "Gracias.": "Obrigado.",
  "Nuestro equipo se pondrá en contacto contigo para conocer las características de tu territorio y preparar una demostración.":
    "Nossa equipe entrará em contato para conhecer as características do seu território e preparar uma demonstração.",
  "Conoce cómo nuestra plataforma puede ayudarte a anticipar escenarios de riesgo y tomar mejores decisiones sobre tu territorio.":
    "Conheça como nossa plataforma pode ajudar a antecipar cenários de risco e tomar melhores decisões sobre o seu território.",
  Capacidades: "Capacidades",
  Beneficios: "Benefícios",
  Arquitectura: "Arquitetura",
  "Base tecnológica": "Base tecnológica",
  "Modelo de servicio": "Modelo de serviço",
  Implementación: "Implementação",
  "Acompañamiento técnico": "Suporte técnico",
  "Plataforma de predicción hidrológica, visualización territorial y alerta temprana de inundaciones.":
    "Plataforma de previsão hidrológica, visualização territorial e alerta precoce de inundações.",
  "Integramos datos, modelos hidrológicos, inteligencia artificial y visualización geoespacial para convertir la complejidad del territorio en información clara y operativa.":
    "Integramos dados, modelos hidrológicos, inteligência artificial e visualização geoespacial para transformar a complexidade do território em informação clara e operacional.",
  "Información integrada y escalable.": "Informação integrada e escalável.",
  "Una interfaz para comprender lo que viene.":
    "Uma interface para compreender o que vem pela frente.",
  "Múltiples fuentes": "Múltiplas fontes",
  "Integración de aforos, precipitación, históricos, modelización hidrológica e inteligencia artificial para seguimiento a escala de cuenca.":
    "Integração de estações fluviométricas, precipitação, históricos, modelagem hidrológica e inteligência artificial para monitoramento em escala de bacia.",
  Visualización: "Visualização",
  "Visualiza cuencas, ríos, estaciones, municipios y áreas expuestas desde una única interfaz.":
    "Visualize bacias, rios, estações, municípios e áreas expostas em uma única interface.",
  "Predicción hidrológica": "Previsão hidrológica",
  "Anticipa la evolución de variables hidrológicas mediante modelos físicos y de inteligencia artificial.":
    "Antecipe a evolução das variáveis hidrológicas por meio de modelos físicos e de inteligência artificial.",
  "Cartografía territorial": "Cartografia territorial",
  "Capas de información geoespacial, meteorológica e hidrológica utilizadas por TARANIS":
    "Camadas de informação geoespacial, meteorológica e hidrológica utilizadas pela TARANIS",
  "Una plataforma preparada para crecer con el territorio.":
    "Uma plataforma preparada para crescer com o território.",
  "Cada despliegue puede adaptarse a las características hidrológicas y operativas del territorio.":
    "Cada implantação pode ser adaptada às características hidrológicas e operacionais do território.",
  "Arquitectura diseñada para trabajar desde municipios hasta áreas territoriales extensas.":
    "Arquitetura projetada para operar desde municípios até grandes áreas territoriais.",
  Escalabilidad: "Escalabilidade",
  "Arquitectura tecnológica": "Arquitetura tecnológica",
  "Ciencia y tecnología": "Ciência e tecnologia",
  "IA + hidrología": "IA + hidrologia",
  "Hidrología e inteligencia artificial, no una u otra.":
    "Hidrologia e inteligência artificial, não uma ou outra.",
  "Combinamos modelización hidrológica, análisis territorial e inteligencia artificial para transformar observaciones en información capaz de anticipar la evolución de un episodio.":
    "Combinamos modelagem hidrológica, análise territorial e inteligência artificial para transformar observações em informações capazes de antecipar a evolução de um evento.",
  "Modelización híbrida": "Modelagem híbrida",
  "Modelos hidrológicos": "Modelos hidrológicos",
  "Modelos predictivos que identifican patrones temporales y mejoran la capacidad de anticipación.":
    "Modelos preditivos que identificam padrões temporais e melhoram a capacidade de antecipação.",
  "Complementa modelos hidrológicos clásicos con técnicas avanzadas de inteligencia artificial.":
    "Complementa modelos hidrológicos clássicos com técnicas avançadas de inteligência artificial.",
  "Una combinación de datos, modelos e inteligencia artificial para transformar información compleja en herramientas útiles para la toma de decisiones.":
    "Uma combinação de dados, modelos e inteligência artificial para transformar informações complexas em ferramentas úteis à tomada de decisão.",
  "Casos de uso reales": "Casos de uso reais",
  "Con ejemplos aplicados a contextos hidrológicos reales.":
    "Com exemplos aplicados a contextos hidrológicos reais.",
  "Por organización": "Por organização",
  "La misma inteligencia hidrológica, distintas decisiones.":
    "A mesma inteligência hidrológica, diferentes decisões.",
  "Cada organización utiliza la información con objetivos y responsabilidades diferentes. Por eso TARANIS adapta la lectura y el despliegue al contexto operativo.":
    "Cada organização utiliza as informações com objetivos e responsabilidades diferentes. Por isso, a TARANIS adapta a leitura e a implantação ao contexto operacional.",
  "Información hidrológica para anticipar y planificar":
    "Informação hidrológica para antecipar e planejar",
  "Planificación, protección civil y gestión del riesgo de inundaciones.":
    "Planejamento, defesa civil e gestão do risco de inundações.",
  "Seguimiento hidrológico": "Monitoramento hidrológico",
  "Seguimiento hidrológico, predicción y alertas georreferenciadas para complementar los procedimientos operativos de Protección Civil.":
    "Monitoramento hidrológico, previsão e alertas georreferenciados para complementar os procedimentos operacionais da Defesa Civil.",
  "Gestión de recursos hídricos y supervisión de eventos extremos.":
    "Gestão de recursos hídricos e monitoramento de eventos extremos.",
  "Contexto hidrológico para activos expuestos al riesgo":
    "Contexto hidrológico para ativos expostos ao risco",
  "Continuidad operativa y reducción de riesgos en activos críticos.":
    "Continuidade operacional e redução de riscos em ativos críticos.",
  "Evaluación territorial": "Avaliação territorial",
  "Monitorización y contexto territorial": "Monitoramento e contexto territorial",
  "Anticipación operativa durante episodios de inundación":
    "Antecipação operacional durante eventos de inundação",
  "Información en tiempo real para la coordinación operativa y la toma de decisiones.":
    "Informação em tempo real para coordenação operacional e tomada de decisão.",
  "Avisos tempranos y umbrales personalizados para activar protocolos de respuesta.":
    "Alertas precoces e limiares personalizados para ativar protocolos de resposta.",
  "Territorios más resilientes.": "Territórios mais resilientes.",
  Visión: "Visão",
  "Comprender antes.": "Compreender antes.",
  "Decidir mejor.": "Decidir melhor.",
  "TARANIS nace para convertir conocimiento hidrológico, datos territoriales y capacidad predictiva en decisiones más informadas.":
    "A TARANIS nasceu para transformar conhecimento hidrológico, dados territoriais e capacidade preditiva em decisões mais bem informadas.",
  "Los episodios extremos exigen una lectura integrada del territorio, capaz de evolucionar junto a la información disponible.":
    "Eventos extremos exigem uma leitura integrada do território, capaz de evoluir junto com as informações disponíveis.",
  "Nuestra visión es que la tecnología hidrológica sea comprensible, operativa y útil para las organizaciones responsables de anticipar el riesgo.":
    "Nossa visão é que a tecnologia hidrológica seja compreensível, operacional e útil para as organizações responsáveis por antecipar o risco.",
  "TARANIS se plantea como un producto tecnológico modular, capaz de integrar fuentes existentes, modelos hidrológicos e inteligencia artificial y adaptarse a diferentes escalas territoriales.":
    "A TARANIS é concebida como um produto tecnológico modular, capaz de integrar fontes existentes, modelos hidrológicos e inteligência artificial e adaptar-se a diferentes escalas territoriais.",
  "Tu territorio.": "Seu território.",
  "Una demostración concreta.": "Uma demonstração focada.",
  "Comparte el contexto y las necesidades de tu organización. Prepararemos una conversación centrada en lo que necesitas anticipar.":
    "Compartilhe o contexto e as necessidades da sua organização. Prepararemos uma conversa focada no que você precisa antecipar.",
  "Página no encontrada": "Página não encontrada",
  "La página que buscas no existe o ha cambiado de ubicación.":
    "A página que você procura não existe ou mudou de endereço.",
  "Volver al inicio": "Voltar ao início",
  "No se ha podido cargar esta página": "Não foi possível carregar esta página",
  "Se ha producido un error. Puedes volver a intentarlo o regresar al inicio.":
    "Ocorreu um erro. Você pode tentar novamente ou voltar ao início.",
  Reintentar: "Tentar novamente",
  Inicio: "Início",
  Alto: "Alto",
  Medio: "Médio",
  Bajo: "Baixo",
  Nivel: "Nível",
  "Nivel de riesgo": "Nível de risco",
  Estado: "Status",
  "Tiempo real": "Tempo real",
  Ahora: "Agora",
  "Últimas 24 h": "Últimas 24 h",
  "Actualización automática": "Atualização automática",
  Precipitación: "Precipitação",
  "Precipitación acumulada": "Precipitação acumulada",
  Caudal: "Vazão",
  Caudales: "Vazões",
  Lluvia: "Chuva",
  Escorrentía: "Escoamento",
  Estaciones: "Estações",
  "Estaciones de aforo": "Estações fluviométricas",
  "Estaciones y SAIH": "Estações e SAIH",
  Satélites: "Satélites",
  "Radar meteorológico": "Radar meteorológico",
  "Topografía, usos del suelo y cartografía": "Topografia, uso do solo e cartografia",
  "Escenario previsto": "Cenário previsto",
  "Hidrogramas, hietogramas, indicadores y mapas para facilitar la interpretación.":
    "Hidrogramas, hietogramas, indicadores e mapas para facilitar a interpretação.",
  "Observado / pronosticado": "Observado / previsto",
  "Evolución hidrológica": "Evolução hidrológica",
  "Evolución temporal": "Evolução temporal",
  "Comparación de resultados": "Comparação de resultados",
  "Análisis histórico": "Análise histórica",
  "Predicción de caudales y escenarios de inundación con días u horas de antelación.":
    "Previsão de vazões e cenários de inundação com horas ou dias de antecedência.",
  "Predicción, patrones temporales y detección": "Previsão, padrões temporais e detecção",
  "Qué es la predicción hidrológica": "O que é previsão hidrológica",
  "Predicción hidrológica: datos, modelos y horizontes de anticipación":
    "Previsão hidrológica: dados, modelos e horizontes de antecipação",
  "Introducción a la predicción hidrológica, sus fuentes de datos, modelos y uso para anticipar caudales y escenarios de inundación.":
    "Introdução à previsão hidrológica, suas fontes de dados, modelos e uso para antecipar vazões e cenários de inundação.",
  "Sistema de alerta temprana de inundaciones: qué es y cómo funciona":
    "Sistema de alerta precoce de inundações: o que é e como funciona",
  "Cómo funciona una alerta temprana de inundaciones":
    "Como funciona um alerta precoce de inundações",
  "Qué integra un sistema de alerta temprana de inundaciones y cómo conecta datos, modelos, predicción y territorio para apoyar decisiones.":
    "O que integra um sistema de alerta precoce de inundações e como conecta dados, modelos, previsão e território para apoiar decisões.",
  "Inteligencia artificial aplicada a la predicción de inundaciones":
    "Inteligência artificial aplicada à previsão de inundações",
  "IA aplicada a la predicción de inundaciones": "IA aplicada à previsão de inundações",
  "IA para predicción de inundaciones": "IA para previsão de inundações",
  "Cómo puede utilizarse la inteligencia artificial en hidrología, qué aportan los modelos temporales y por qué deben integrarse con datos y conocimiento hidrológico.":
    "Como a inteligência artificial pode ser utilizada em hidrologia, o que os modelos temporais oferecem e por que precisam ser integrados a dados e conhecimento hidrológico.",
  "Transformamos datos hidrológicos en información operativa para que municipios, organismos y sectores estratégicos puedan anticipar riesgos, proteger a la población y gestionar el territorio con mayor eficacia.":
    "Transformamos dados hidrológicos em informação operacional para que municípios, órgãos e setores estratégicos possam antecipar riscos, proteger a população e gerir o território com maior eficácia.",
  "Información clara, visual y basada en datos para decisiones más rápidas y efectivas.":
    "Informação clara, visual e baseada em dados para decisões mais rápidas e eficazes.",
  "Mayor seguridad": "Mais segurança",
  "Más eficiencia": "Mais eficiência",
  "Territorios sostenibles": "Territórios sustentáveis",
  "Protección de la población y reducción del impacto de las inundaciones.":
    "Proteção da população e redução do impacto das inundações.",
  "Optimización de recursos y coordinación operativa en situaciones de riesgo.":
    "Otimização de recursos e coordenação operacional em situações de risco.",
  "Gestión responsable del agua y menor impacto ambiental en los ecosistemas.":
    "Gestão responsável da água e menor impacto ambiental nos ecossistemas.",
  Actuar: "Agir",
  Alertar: "Alertar",
  Anticipar: "Antecipar",
  Detectar: "Detectar",
  Gestionar: "Gerir",
  Aprender: "Aprender",
  Vigilancia: "Monitoramento",
};

const enExtra: Record<string, string> = {
  "Plataforma de alerta temprana": "Early-warning platform",
  "De los datos a una": "From data to an",
  "lectura operativa": "operational view",
  "del riesgo.": "of risk.",
  "TARANIS reúne información hidrometeorológica, modelización y visualización territorial para apoyar la anticipación de escenarios de inundación.":
    "TARANIS brings together hydrometeorological information, modelling and territorial visualisation to support anticipation of flood scenarios.",
  "La plataforma está concebida para trabajar con fuentes existentes y adaptarse a la disponibilidad de datos de cada territorio. Esto permite construir despliegues desde ámbitos municipales hasta áreas más extensas sin depender necesariamente de una red propia de sensores en campo.":
    "The platform is designed to work with existing sources and adapt to the data available in each territory. This enables deployments from municipal areas to larger regions without necessarily depending on a proprietary field-sensor network.",
  "Su objetivo no es sustituir los procedimientos de emergencia, sino convertir datos y modelos complejos en información más comprensible para administraciones, organismos de cuenca, Protección Civil y gestores de infraestructuras.":
    "Its purpose is not to replace emergency procedures, but to turn complex data and models into information that is easier to interpret for administrations, river-basin authorities, Civil Protection and infrastructure managers.",
  "El rendimiento de una predicción depende tanto del modelo como de la calidad de los datos, el contexto hidrológico y la forma en que se comunican los resultados.":
    "Forecast performance depends on the model, the quality of the data, the hydrological context and how results are communicated.",
  "TARANIS está planteado como una arquitectura modular capaz de incorporar modelización hidrológica y modelos de aprendizaje automático. La combinación concreta depende de las características de la cuenca, la disponibilidad de datos y el horizonte de predicción requerido.":
    "TARANIS is conceived as a modular architecture able to incorporate hydrological modelling and machine-learning models. The specific combination depends on basin characteristics, data availability and the required forecast horizon.",
  "Los modelos temporales como LSTM pueden aprender patrones de series hidrometeorológicas, mientras que los enfoques hidrológicos aportan una representación explícita de procesos y estados de cuenca. La plataforma permite integrar estos resultados dentro de una lectura territorial común.":
    "Temporal models such as LSTMs can learn patterns from hydrometeorological series, while hydrological approaches provide an explicit representation of basin processes and states. The platform integrates these results into a common territorial view.",
  "Qué debe poder comprender la organización.": "What the organization needs to understand.",
  "Capacidades configurables para ese contexto.": "Capabilities configurable for that context.",
  "Siguiente paso": "Next step",
  "Evalúa TARANIS sobre un territorio concreto.": "Evaluate TARANIS on a specific territory.",
  "Una demostración permite revisar fuentes disponibles, alcance territorial y necesidades operativas.":
    "A demonstration makes it possible to review available sources, territorial scope and operational needs.",
  "Guías y contenidos técnicos sobre predicción hidrológica, alerta temprana e inteligencia artificial aplicada al riesgo de inundaciones.":
    "Technical guides and content on hydrological forecasting, early warning and artificial intelligence applied to flood risk.",
  "Cuando llega la inundación,": "When flooding arrives,",
  "cada minuto cuenta.": "every minute matters.",
  "Del dato a la": "From data to the",
  "decisión.": "decision.",
  "Una cadena tecnológica completa convierte fuentes heterogéneas en información territorial que se puede interpretar y utilizar.":
    "A complete technology chain turns heterogeneous sources into territorial information that can be interpreted and used.",
  "Una interfaz para": "One interface to",
  "comprender lo que viene.": "understand what comes next.",
  "Explora variables, compara escenarios y sigue la evolución del territorio desde un espacio de trabajo unificado.":
    "Explore variables, compare scenarios and follow territorial evolution from a unified workspace.",
  "TARANIS en acción": "TARANIS in action",
  "Descubre cómo TARANIS transforma datos hidrológicos y meteorológicos en información útil para anticipar escenarios de inundación.":
    "Discover how TARANIS transforms hydrological and meteorological data into useful information for anticipating flood scenarios.",
  "Inteligencia aplicada al territorio.": "Intelligence applied to the territory.",
  "de TARANIS para": "of TARANIS for",
  "tu territorio.": "your territory.",
  "No necesitas esperar a que el agua llegue.": "You do not need to wait for the water to arrive.",
  "Observa cómo puede evolucionar el sistema antes de que el episodio alcance su máxima intensidad.":
    "See how the system may evolve before the event reaches peak intensity.",
  "Horizonte temporal de la demostración": "Demonstration time horizon",
  "Estado del territorio": "Territory status",
  "para territorios": "for territories",
  "más resilientes.": "more resilient.",
  Anticipación: "Anticipation",
  "del riesgo": "of risk",
  "Gestión operativa": "Operational management",
  "del territorio": "of the territory",
  "Decisiones basadas": "Decisions based",
  "en datos": "on data",
  "¿Para quién": "Who do we",
  "trabajamos?": "work for?",
  "Nuestras soluciones se adaptan a las necesidades de cada territorio, combinando modelos hidrológicos, inteligencia artificial y visualización geoespacial para ofrecer información clara y accionable.":
    "Our solutions adapt to the needs of each territory, combining hydrological models, artificial intelligence and geospatial visualisation to provide clear, actionable information.",
  "Soluciones en todo": "Solutions across the",
  "ciclo del riesgo.": "risk cycle.",
  "Acompañamos a nuestros clientes en todas las fases, desde la anticipación hasta la recuperación, con herramientas diseñadas para la toma de decisiones operativa.":
    "We support our clients throughout every phase, from anticipation to recovery, with tools designed for operational decision-making.",
  "Nuestras soluciones contribuyen a territorios más seguros, eficientes y sostenibles, generando valor en el corto y largo plazo.":
    "Our solutions contribute to safer, more efficient and sustainable territories, creating value in both the short and long term.",
  "Una configuración": "A configuration",
  "para cada escala.": "for every scale.",
  "Las capacidades y cobertura se configuran según el territorio, fuentes de información, nivel de modelización y necesidades operativas.":
    "Capabilities and coverage are configured according to the territory, information sources, modelling level and operational needs.",
  "Ciencia y": "Science and",
  tecnología: "technology",
  "para anticipar": "to anticipate",
  "lo que viene.": "what comes next.",
  "Una plataforma": "A platform",
  "integrada y escalable.": "integrated and scalable.",
  "TARANIS combina múltiples fuentes de información y modelos avanzados en una arquitectura modular, robusta y preparada para escalar desde cuencas locales hasta territorios de gran extensión.":
    "TARANIS combines multiple information sources and advanced models in a modular, robust architecture designed to scale from local basins to large territories.",
  "para una": "for a",
  "visión completa.": "complete view.",
  "Integramos y procesamos información procedente de diferentes fuentes para construir una representación coherente y actualizada del territorio y de su comportamiento hidrológico.":
    "We integrate and process information from different sources to build a coherent, up-to-date representation of the territory and its hydrological behaviour.",
  "Del dato al": "From data to",
  "conocimiento.": "knowledge.",
  "Del modelo a la decisión": "From model to decision",
  "Información visual": "Visual information",
  para: "for",
  "decisiones reales.": "real decisions.",
  "TARANIS transforma datos, modelos y escenarios en información geoespacial clara, intuitiva y accionable para apoyar la gestión del riesgo de inundación.":
    "TARANIS transforms data, models and scenarios into clear, intuitive and actionable geospatial information to support flood-risk management.",
  "Una configuración para cada escala.": "A configuration for every scale.",
  "La arquitectura combina integración de fuentes, modelización y visualización geoespacial. Las alianzas, certificaciones y referencias institucionales se incorporarán únicamente cuando estén verificadas y autorizadas.":
    "The architecture combines source integration, modelling and geospatial visualisation. Partnerships, certifications and institutional references will only be incorporated once verified and authorised.",
  "Descubre cómo TARANIS puede ayudar a anticipar escenarios de inundación en tu territorio.":
    "Discover how TARANIS can help anticipate flood scenarios in your territory.",
  "Contactar con TARANIS": "Contact TARANIS",
  Seleccionar: "Select",
  Inteligencia: "Intelligence",
  "hidrológica,": "hydrological,",
  "en operación.": "in operation.",
  "Una plataforma para integrar datos, ejecutar modelos y convertir escenarios complejos en una lectura territorial clara.":
    "A platform for integrating data, running models and turning complex scenarios into a clear territorial view.",
  "para anticipar.": "to anticipate.",
  "Guía técnica": "Technical guide",
  "Qué integra un sistema de alerta temprana de inundaciones, cómo transforma datos en información operativa y qué papel desempeña en la toma de decisiones.":
    "What a flood early-warning system integrates, how it turns data into operational information and what role it plays in decision-making.",
  "Un sistema de alerta temprana de inundaciones conecta observación, modelización, predicción y comunicación para reducir el tiempo entre la detección de una amenaza y la respuesta operativa.":
    "A flood early-warning system connects observation, modelling, forecasting and communication to reduce the time between threat detection and operational response.",
  "De la observación a la decisión": "From observation to decision",
  "La alerta temprana no consiste únicamente en mostrar lluvia o caudal. Su valor aparece cuando distintas fuentes de información se integran y se interpretan de forma conjunta para anticipar cómo puede evolucionar un episodio.":
    "Early warning is not simply about displaying rainfall or river discharge. Its value appears when different sources are integrated and interpreted together to anticipate how an event may evolve.",
  "En TARANIS, ese enfoque se articula alrededor de información hidrometeorológica, estaciones de aforo, precipitación, radar meteorológico, cartografía, datos históricos y modelos hidrológicos y de inteligencia artificial.":
    "In TARANIS, this approach is built around hydrometeorological information, river gauges, precipitation, weather radar, mapping, historical data, and hydrological and artificial-intelligence models.",
  "Observación hidrometeorológica": "Hydrometeorological observation",
  "Integración de datos territoriales": "Territorial data integration",
  "Modelización y predicción": "Modelling and forecasting",
  "Visualización geoespacial": "Geospatial visualisation",
  "Apoyo a la decisión": "Decision support",
  "Por qué el contexto territorial importa": "Why territorial context matters",
  "Una misma precipitación puede producir respuestas muy diferentes según la cuenca, el estado previo del suelo, la red de drenaje, la topografía y la evolución del episodio. Por eso una plataforma operativa necesita relacionar los datos con el territorio y no tratarlos como valores aislados.":
    "The same rainfall can produce very different responses depending on the basin, antecedent soil conditions, drainage network, topography and event evolution. An operational platform therefore needs to relate data to the territory rather than treat them as isolated values.",
  "El objetivo es convertir series y modelos complejos en una lectura que ayude a comprender dónde se concentra el riesgo, cómo puede evolucionar y qué información merece atención prioritaria.":
    "The goal is to turn complex series and models into a view that helps identify where risk is concentrated, how it may evolve and which information deserves priority attention.",
  "El papel de TARANIS": "The role of TARANIS",
  "TARANIS está concebido como una capa de inteligencia hidrológica que aprovecha fuentes existentes y puede operar sin depender necesariamente del despliegue de una red propia de sensores IoT.":
    "TARANIS is conceived as a hydrological-intelligence layer that leverages existing sources and can operate without necessarily depending on deployment of its own IoT sensor network.",
  "La plataforma no sustituye los procedimientos de emergencia. Aporta información adicional para apoyar la anticipación, el seguimiento y la toma de decisiones de administraciones, organismos de cuenca, protección civil y gestores de infraestructuras.":
    "The platform does not replace emergency procedures. It provides additional information to support anticipation, monitoring and decision-making by administrations, river-basin authorities, Civil Protection and infrastructure managers.",
  "Conocer la plataforma TARANIS": "Explore the TARANIS platform",
  "Ver la tecnología de predicción": "View forecasting technology",
  Fundamentos: "Fundamentals",
  "La predicción hidrológica busca estimar cómo evolucionará la respuesta de una cuenca a partir de la información observada y prevista disponible.":
    "Hydrological forecasting aims to estimate how a basin response will evolve based on available observed and forecast information.",
  "Qué información alimenta una predicción": "What information feeds a forecast",
  "Las predicciones dependen de la calidad, resolución y disponibilidad de las fuentes de entrada. Entre las más relevantes se encuentran la precipitación observada y prevista, los caudales, la información radar, las series históricas y las características espaciales de la cuenca.":
    "Forecasts depend on the quality, resolution and availability of input sources. Key inputs include observed and forecast precipitation, river discharge, radar information, historical series and spatial basin characteristics.",
  "La integración de estas fuentes permite construir una representación temporal y territorial del episodio antes de ejecutar los modelos.":
    "Integrating these sources makes it possible to build a temporal and territorial representation of the event before running the models.",
  "Precipitación observada y prevista": "Observed and forecast precipitation",
  "Series históricas": "Historical series",
  "Cartografía y características de cuenca": "Mapping and basin characteristics",
  "Modelos físicos e inteligencia artificial": "Physical models and artificial intelligence",
  "Los modelos hidrológicos representan procesos de transformación lluvia-caudal a partir de hipótesis físicas o conceptuales. Los modelos de aprendizaje automático pueden aprender patrones temporales a partir de series históricas y variables de entrada.":
    "Hydrological models represent rainfall-runoff transformation processes using physical or conceptual assumptions. Machine-learning models can learn temporal patterns from historical series and input variables.",
  "TARANIS integra ambas líneas tecnológicas dentro de una arquitectura modular. La selección y configuración de modelos depende del territorio, las fuentes disponibles y el objetivo operativo.":
    "TARANIS integrates both technology approaches within a modular architecture. Model selection and configuration depend on the territory, available sources and operational objective.",
  "Horizonte de predicción y uso operativo": "Forecast horizon and operational use",
  "Un horizonte más largo aporta mayor tiempo potencial de anticipación, pero también incorpora más incertidumbre. Por eso la predicción debe interpretarse junto con la evolución de las observaciones y actualizarse a medida que llegan nuevos datos.":
    "A longer horizon provides more potential lead time but also introduces greater uncertainty. Forecasts should therefore be interpreted alongside evolving observations and updated as new data arrive.",
  "TARANIS está diseñado para trabajar con distintos horizontes de predicción según la configuración del despliegue y presentar sus resultados en una interfaz territorial comprensible.":
    "TARANIS is designed to work with different forecast horizons according to deployment configuration and present results in an understandable territorial interface.",
  "Ver cómo TARANIS integra datos y modelos": "See how TARANIS integrates data and models",
  "IA aplicada": "Applied AI",
  "La inteligencia artificial puede identificar relaciones temporales complejas en series hidrometeorológicas y complementar la modelización hidrológica tradicional.":
    "Artificial intelligence can identify complex temporal relationships in hydrometeorological series and complement traditional hydrological modelling.",
  "Qué puede aprender un modelo temporal": "What a temporal model can learn",
  "Las redes neuronales diseñadas para series temporales, como las arquitecturas LSTM, pueden aprender dependencias entre variables pasadas y la evolución posterior de una señal. En hidrología, esto permite estudiar relaciones entre precipitación, estados previos y caudales observados.":
    "Neural networks designed for time series, such as LSTM architectures, can learn dependencies between past variables and subsequent signal evolution. In hydrology, this supports analysis of relationships between precipitation, antecedent states and observed river discharge.",
  "Su utilidad depende de disponer de datos representativos, una preparación rigurosa de las series y una validación separada de los datos utilizados durante el entrenamiento.":
    "Their usefulness depends on representative data, rigorous series preparation and validation separated from the data used during training.",
  "IA no significa prescindir de la hidrología": "AI does not mean dispensing with hydrology",
  "Un sistema operativo necesita más que un modelo predictivo. Requiere control de calidad de datos, contexto territorial, análisis hidrológico, evaluación de incertidumbre y una interfaz que traduzca los resultados a información accionable.":
    "An operational system needs more than a predictive model. It requires data-quality control, territorial context, hydrological analysis, uncertainty assessment and an interface that turns results into actionable information.",
  "Por este motivo TARANIS plantea una integración entre modelización hidrológica, inteligencia artificial y fuentes oficiales, en lugar de tratar la IA como una capa aislada.":
    "For this reason, TARANIS integrates hydrological modelling, artificial intelligence and official sources rather than treating AI as an isolated layer.",
  "Preparación y control de datos": "Data preparation and control",
  "Entrenamiento y validación": "Training and validation",
  "Comparación con observaciones": "Comparison with observations",
  "Contexto hidrológico": "Hydrological context",
  "Representación territorial de resultados": "Territorial representation of results",
  "Del modelo a una herramienta de decisión": "From model to decision-support tool",
  "El valor final aparece cuando la salida del modelo se puede comparar con observaciones, visualizar en el territorio y actualizar durante el episodio. Esa conexión entre predicción y operación es una de las funciones centrales de una plataforma de alerta temprana.":
    "The final value appears when model output can be compared with observations, visualised across the territory and updated during an event. That connection between forecasting and operations is a core function of an early-warning platform.",
  "TARANIS integra información hidrometeorológica, predicción y cartografía para apoyar la gestión municipal y territorial del riesgo de inundaciones.":
    "TARANIS integrates hydrometeorological information, forecasting and mapping to support municipal and territorial flood-risk management.",
  "Ayuntamientos y administraciones necesitan transformar fuentes dispersas en una lectura territorial que pueda consultarse antes y durante un episodio.":
    "Municipalities and public administrations need to turn dispersed sources into a territorial view that can be consulted before and during an event.",
  "Seguimiento de precipitación y caudales": "Monitoring precipitation and river discharge",
  "Lectura territorial del episodio": "Territorial view of the event",
  "Acceso a históricos": "Access to historical data",
  "Apoyo a planificación y coordinación": "Planning and coordination support",
  "Integración de fuentes oficiales": "Integration of official sources",
  "Predicción configurable": "Configurable forecasting",
  "Despliegue adaptado al territorio": "Territory-adapted deployment",
  "Durante un episodio, el tiempo y la claridad de la información son críticos. TARANIS concentra observaciones y predicciones para facilitar una lectura rápida de la evolución hidrológica.":
    "During an event, time and clarity of information are critical. TARANIS brings observations and forecasts together to provide a rapid view of hydrological evolution.",
  "Seguimiento de episodios": "Event monitoring",
  "Identificación de cambios relevantes": "Identification of relevant changes",
  "Consulta territorial": "Territorial consultation",
  "Apoyo a la coordinación operativa": "Operational coordination support",
  "Alertas georreferenciadas": "Georeferenced alerts",
  "Series e hidrogramas": "Series and hydrographs",
  "Horizontes de predicción": "Forecast horizons",
  "Integración con fuentes existentes": "Integration with existing sources",
  "TARANIS combina estaciones de aforo, precipitación, históricos y modelización para apoyar el seguimiento hidrológico a escala de cuenca.":
    "TARANIS combines river gauges, precipitation, historical records and modelling to support basin-scale hydrological monitoring.",
  "La operación hidrológica exige relacionar series de caudal, precipitación, modelos y territorio. TARANIS facilita esa integración mediante una arquitectura modular.":
    "Hydrological operations require relating discharge series, precipitation, models and territory. TARANIS facilitates this integration through a modular architecture.",
  "Integración de redes de aforo": "River-gauge network integration",
  "Seguimiento de precipitación": "Precipitation monitoring",
  "Comparación de modelos y observaciones": "Comparison of models and observations",
  "Fuentes SAIH y meteorológicas": "SAIH and meteorological sources",
  "Modelización hidrológica": "Hydrological modelling",
  "Inteligencia artificial": "Artificial intelligence",
  "Visualización por cuencas y subcuencas": "Visualisation by basins and sub-basins",
  "TARANIS aporta información territorial y predictiva para organizaciones que gestionan infraestructuras o activos sensibles a episodios de inundación.":
    "TARANIS provides territorial and predictive information for organizations managing infrastructure or assets sensitive to flood events.",
  "La exposición de activos requiere comprender qué está ocurriendo aguas arriba, cómo evoluciona el episodio y qué escenarios pueden afectar a la operación.":
    "Asset exposure requires understanding what is happening upstream, how the event is evolving and which scenarios may affect operations.",
  "Seguimiento de activos expuestos": "Monitoring exposed assets",
  "Contexto hidrológico territorial": "Territorial hydrological context",
  "Anticipación de escenarios": "Scenario anticipation",
  "Información para protocolos internos": "Information for internal protocols",
  "Cobertura territorial configurable": "Configurable territorial coverage",
  "Integración de datos externos": "External-data integration",
  "Alertas y visualización": "Alerts and visualisation",
};

const ptExtra: Record<string, string> = {
  "Plataforma de alerta temprana": "Plataforma de alerta precoce",
  "De los datos a una": "Dos dados a uma",
  "lectura operativa": "leitura operacional",
  "del riesgo.": "do risco.",
  "TARANIS reúne información hidrometeorológica, modelización y visualización territorial para apoyar la anticipación de escenarios de inundación.":
    "A TARANIS reúne informações hidrometeorológicas, modelagem e visualização territorial para apoiar a antecipação de cenários de inundação.",
  "La plataforma está concebida para trabajar con fuentes existentes y adaptarse a la disponibilidad de datos de cada territorio. Esto permite construir despliegues desde ámbitos municipales hasta áreas más extensas sin depender necesariamente de una red propia de sensores en campo.":
    "A plataforma foi concebida para trabalhar com fontes existentes e adaptar-se à disponibilidade de dados de cada território. Isso permite implantações desde áreas municipais até regiões mais amplas, sem depender necessariamente de uma rede própria de sensores em campo.",
  "Su objetivo no es sustituir los procedimientos de emergencia, sino convertir datos y modelos complejos en información más comprensible para administraciones, organismos de cuenca, Protección Civil y gestores de infraestructuras.":
    "Seu objetivo não é substituir procedimentos de emergência, mas transformar dados e modelos complexos em informações mais compreensíveis para administrações, órgãos de bacia, Defesa Civil e gestores de infraestrutura.",
  "El rendimiento de una predicción depende tanto del modelo como de la calidad de los datos, el contexto hidrológico y la forma en que se comunican los resultados.":
    "O desempenho de uma previsão depende tanto do modelo quanto da qualidade dos dados, do contexto hidrológico e da forma como os resultados são comunicados.",
  "TARANIS está planteado como una arquitectura modular capaz de incorporar modelización hidrológica y modelos de aprendizaje automático. La combinación concreta depende de las características de la cuenca, la disponibilidad de datos y el horizonte de predicción requerido.":
    "A TARANIS foi concebida como uma arquitetura modular capaz de incorporar modelagem hidrológica e modelos de aprendizado de máquina. A combinação específica depende das características da bacia, da disponibilidade de dados e do horizonte de previsão necessário.",
  "Los modelos temporales como LSTM pueden aprender patrones de series hidrometeorológicas, mientras que los enfoques hidrológicos aportan una representación explícita de procesos y estados de cuenca. La plataforma permite integrar estos resultados dentro de una lectura territorial común.":
    "Modelos temporais como LSTM podem aprender padrões de séries hidrometeorológicas, enquanto abordagens hidrológicas fornecem uma representação explícita de processos e estados da bacia. A plataforma integra esses resultados em uma leitura territorial comum.",
  "Qué debe poder comprender la organización.": "O que a organização precisa compreender.",
  "Capacidades configurables para ese contexto.": "Capacidades configuráveis para esse contexto.",
  "Siguiente paso": "Próximo passo",
  "Evalúa TARANIS sobre un territorio concreto.": "Avalie a TARANIS em um território específico.",
  "Una demostración permite revisar fuentes disponibles, alcance territorial y necesidades operativas.":
    "Uma demonstração permite revisar fontes disponíveis, alcance territorial e necessidades operacionais.",
  "Guías y contenidos técnicos sobre predicción hidrológica, alerta temprana e inteligencia artificial aplicada al riesgo de inundaciones.":
    "Guias e conteúdos técnicos sobre previsão hidrológica, alerta precoce e inteligência artificial aplicada ao risco de inundações.",
  "Cuando llega la inundación,": "Quando a inundação chega,",
  "cada minuto cuenta.": "cada minuto conta.",
  "Del dato a la": "Do dado à",
  "decisión.": "decisão.",
  "Una cadena tecnológica completa convierte fuentes heterogéneas en información territorial que se puede interpretar y utilizar.":
    "Uma cadeia tecnológica completa transforma fontes heterogêneas em informação territorial que pode ser interpretada e utilizada.",
  "Una interfaz para": "Uma interface para",
  "comprender lo que viene.": "compreender o que vem pela frente.",
  "Explora variables, compara escenarios y sigue la evolución del territorio desde un espacio de trabajo unificado.":
    "Explore variáveis, compare cenários e acompanhe a evolução do território em um espaço de trabalho unificado.",
  "TARANIS en acción": "TARANIS em ação",
  "Descubre cómo TARANIS transforma datos hidrológicos y meteorológicos en información útil para anticipar escenarios de inundación.":
    "Veja como a TARANIS transforma dados hidrológicos e meteorológicos em informações úteis para antecipar cenários de inundação.",
  "Inteligencia aplicada al territorio.": "Inteligência aplicada ao território.",
  "de TARANIS para": "da TARANIS para",
  "tu territorio.": "seu território.",
  "No necesitas esperar a que el agua llegue.": "Você não precisa esperar a água chegar.",
  "Observa cómo puede evolucionar el sistema antes de que el episodio alcance su máxima intensidad.":
    "Veja como o sistema pode evoluir antes que o evento atinja sua intensidade máxima.",
  "Horizonte temporal de la demostración": "Horizonte temporal da demonstração",
  "Estado del territorio": "Estado do território",
  "para territorios": "para territórios",
  "más resilientes.": "mais resilientes.",
  Anticipación: "Antecipação",
  "del riesgo": "do risco",
  "Gestión operativa": "Gestão operacional",
  "del territorio": "do território",
  "Decisiones basadas": "Decisões baseadas",
  "en datos": "em dados",
  "¿Para quién": "Para quem",
  "trabajamos?": "trabalhamos?",
  "Nuestras soluciones se adaptan a las necesidades de cada territorio, combinando modelos hidrológicos, inteligencia artificial y visualización geoespacial para ofrecer información clara y accionable.":
    "Nossas soluções se adaptam às necessidades de cada território, combinando modelos hidrológicos, inteligência artificial e visualização geoespacial para oferecer informações claras e acionáveis.",
  "Soluciones en todo": "Soluções em todo o",
  "ciclo del riesgo.": "ciclo do risco.",
  "Acompañamos a nuestros clientes en todas las fases, desde la anticipación hasta la recuperación, con herramientas diseñadas para la toma de decisiones operativa.":
    "Apoiamos nossos clientes em todas as fases, da antecipação à recuperação, com ferramentas projetadas para a tomada de decisão operacional.",
  "Nuestras soluciones contribuyen a territorios más seguros, eficientes y sostenibles, generando valor en el corto y largo plazo.":
    "Nossas soluções contribuem para territórios mais seguros, eficientes e sustentáveis, gerando valor no curto e no longo prazo.",
  "Una configuración": "Uma configuração",
  "para cada escala.": "para cada escala.",
  "Las capacidades y cobertura se configuran según el territorio, fuentes de información, nivel de modelización y necesidades operativas.":
    "As capacidades e a cobertura são configuradas de acordo com o território, as fontes de informação, o nível de modelagem e as necessidades operacionais.",
  "Ciencia y": "Ciência e",
  tecnología: "tecnologia",
  "para anticipar": "para antecipar",
  "lo que viene.": "o que vem pela frente.",
  "Una plataforma": "Uma plataforma",
  "integrada y escalable.": "integrada e escalável.",
  "TARANIS combina múltiples fuentes de información y modelos avanzados en una arquitectura modular, robusta y preparada para escalar desde cuencas locales hasta territorios de gran extensión.":
    "A TARANIS combina múltiplas fontes de informação e modelos avançados em uma arquitetura modular, robusta e preparada para escalar de bacias locais a territórios de grande extensão.",
  "para una": "para uma",
  "visión completa.": "visão completa.",
  "Integramos y procesamos información procedente de diferentes fuentes para construir una representación coherente y actualizada del territorio y de su comportamiento hidrológico.":
    "Integramos e processamos informações de diferentes fontes para construir uma representação coerente e atualizada do território e de seu comportamento hidrológico.",
  "Del dato al": "Do dado ao",
  "conocimiento.": "conhecimento.",
  "Del modelo a la decisión": "Do modelo à decisão",
  "Información visual": "Informação visual",
  para: "para",
  "decisiones reales.": "decisões reais.",
  "TARANIS transforma datos, modelos y escenarios en información geoespacial clara, intuitiva y accionable para apoyar la gestión del riesgo de inundación.":
    "A TARANIS transforma dados, modelos e cenários em informação geoespacial clara, intuitiva e acionável para apoiar a gestão do risco de inundações.",
  "Una configuración para cada escala.": "Uma configuração para cada escala.",
  "La arquitectura combina integración de fuentes, modelización y visualización geoespacial. Las alianzas, certificaciones y referencias institucionales se incorporarán únicamente cuando estén verificadas y autorizadas.":
    "A arquitetura combina integração de fontes, modelagem e visualização geoespacial. Parcerias, certificações e referências institucionais serão incorporadas somente quando estiverem verificadas e autorizadas.",
  "Descubre cómo TARANIS puede ayudar a anticipar escenarios de inundación en tu territorio.":
    "Veja como a TARANIS pode ajudar a antecipar cenários de inundação no seu território.",
  "Contactar con TARANIS": "Entrar em contato com a TARANIS",
  Seleccionar: "Selecionar",
  Inteligencia: "Inteligência",
  "hidrológica,": "hidrológica,",
  "en operación.": "em operação.",
  "Una plataforma para integrar datos, ejecutar modelos y convertir escenarios complejos en una lectura territorial clara.":
    "Uma plataforma para integrar dados, executar modelos e transformar cenários complexos em uma leitura territorial clara.",
  "para anticipar.": "para antecipar.",
  "Guía técnica": "Guia técnico",
  "Qué integra un sistema de alerta temprana de inundaciones, cómo transforma datos en información operativa y qué papel desempeña en la toma de decisiones.":
    "O que integra um sistema de alerta precoce de inundações, como transforma dados em informação operacional e qual papel desempenha na tomada de decisão.",
  "Un sistema de alerta temprana de inundaciones conecta observación, modelización, predicción y comunicación para reducir el tiempo entre la detección de una amenaza y la respuesta operativa.":
    "Um sistema de alerta precoce de inundações conecta observação, modelagem, previsão e comunicação para reduzir o tempo entre a detecção de uma ameaça e a resposta operacional.",
  "De la observación a la decisión": "Da observação à decisão",
  "La alerta temprana no consiste únicamente en mostrar lluvia o caudal. Su valor aparece cuando distintas fuentes de información se integran y se interpretan de forma conjunta para anticipar cómo puede evolucionar un episodio.":
    "O alerta precoce não consiste apenas em mostrar chuva ou vazão. Seu valor aparece quando diferentes fontes de informação são integradas e interpretadas em conjunto para antecipar como um evento pode evoluir.",
  "En TARANIS, ese enfoque se articula alrededor de información hidrometeorológica, estaciones de aforo, precipitación, radar meteorológico, cartografía, datos históricos y modelos hidrológicos y de inteligencia artificial.":
    "Na TARANIS, essa abordagem se organiza em torno de informações hidrometeorológicas, estações fluviométricas, precipitação, radar meteorológico, cartografia, dados históricos e modelos hidrológicos e de inteligência artificial.",
  "Observación hidrometeorológica": "Observação hidrometeorológica",
  "Integración de datos territoriales": "Integração de dados territoriais",
  "Modelización y predicción": "Modelagem e previsão",
  "Visualización geoespacial": "Visualização geoespacial",
  "Apoyo a la decisión": "Apoio à decisão",
  "Por qué el contexto territorial importa": "Por que o contexto territorial importa",
  "Una misma precipitación puede producir respuestas muy diferentes según la cuenca, el estado previo del suelo, la red de drenaje, la topografía y la evolución del episodio. Por eso una plataforma operativa necesita relacionar los datos con el territorio y no tratarlos como valores aislados.":
    "A mesma precipitação pode produzir respostas muito diferentes dependendo da bacia, das condições antecedentes do solo, da rede de drenagem, da topografia e da evolução do evento. Por isso, uma plataforma operacional precisa relacionar os dados ao território e não tratá-los como valores isolados.",
  "El objetivo es convertir series y modelos complejos en una lectura que ayude a comprender dónde se concentra el riesgo, cómo puede evolucionar y qué información merece atención prioritaria.":
    "O objetivo é transformar séries e modelos complexos em uma leitura que ajude a entender onde o risco se concentra, como pode evoluir e quais informações merecem atenção prioritária.",
  "El papel de TARANIS": "O papel da TARANIS",
  "TARANIS está concebido como una capa de inteligencia hidrológica que aprovecha fuentes existentes y puede operar sin depender necesariamente del despliegue de una red propia de sensores IoT.":
    "A TARANIS foi concebida como uma camada de inteligência hidrológica que aproveita fontes existentes e pode operar sem depender necessariamente da implantação de uma rede própria de sensores IoT.",
  "La plataforma no sustituye los procedimientos de emergencia. Aporta información adicional para apoyar la anticipación, el seguimiento y la toma de decisiones de administraciones, organismos de cuenca, protección civil y gestores de infraestructuras.":
    "A plataforma não substitui procedimentos de emergência. Ela fornece informações adicionais para apoiar a antecipação, o monitoramento e a tomada de decisão de administrações, órgãos de bacia, Defesa Civil e gestores de infraestrutura.",
  "Conocer la plataforma TARANIS": "Conhecer a plataforma TARANIS",
  "Ver la tecnología de predicción": "Ver a tecnologia de previsão",
  Fundamentos: "Fundamentos",
  "La predicción hidrológica busca estimar cómo evolucionará la respuesta de una cuenca a partir de la información observada y prevista disponible.":
    "A previsão hidrológica busca estimar como a resposta de uma bacia evoluirá a partir das informações observadas e previstas disponíveis.",
  "Qué información alimenta una predicción": "Quais informações alimentam uma previsão",
  "Las predicciones dependen de la calidad, resolución y disponibilidad de las fuentes de entrada. Entre las más relevantes se encuentran la precipitación observada y prevista, los caudales, la información radar, las series históricas y las características espaciales de la cuenca.":
    "As previsões dependem da qualidade, resolução e disponibilidade das fontes de entrada. Entre as mais relevantes estão a precipitação observada e prevista, as vazões, as informações de radar, as séries históricas e as características espaciais da bacia.",
  "La integración de estas fuentes permite construir una representación temporal y territorial del episodio antes de ejecutar los modelos.":
    "A integração dessas fontes permite construir uma representação temporal e territorial do evento antes da execução dos modelos.",
  "Precipitación observada y prevista": "Precipitação observada e prevista",
  "Series históricas": "Séries históricas",
  "Cartografía y características de cuenca": "Cartografia e características da bacia",
  "Modelos físicos e inteligencia artificial": "Modelos físicos e inteligência artificial",
  "Los modelos hidrológicos representan procesos de transformación lluvia-caudal a partir de hipótesis físicas o conceptuales. Los modelos de aprendizaje automático pueden aprender patrones temporales a partir de series históricas y variables de entrada.":
    "Os modelos hidrológicos representam processos de transformação chuva-vazão a partir de hipóteses físicas ou conceituais. Modelos de aprendizado de máquina podem aprender padrões temporais a partir de séries históricas e variáveis de entrada.",
  "TARANIS integra ambas líneas tecnológicas dentro de una arquitectura modular. La selección y configuración de modelos depende del territorio, las fuentes disponibles y el objetivo operativo.":
    "A TARANIS integra as duas linhas tecnológicas em uma arquitetura modular. A seleção e a configuração dos modelos dependem do território, das fontes disponíveis e do objetivo operacional.",
  "Horizonte de predicción y uso operativo": "Horizonte de previsão e uso operacional",
  "Un horizonte más largo aporta mayor tiempo potencial de anticipación, pero también incorpora más incertidumbre. Por eso la predicción debe interpretarse junto con la evolución de las observaciones y actualizarse a medida que llegan nuevos datos.":
    "Um horizonte mais longo oferece maior tempo potencial de antecipação, mas também incorpora mais incerteza. Por isso, a previsão deve ser interpretada junto com a evolução das observações e atualizada à medida que novos dados chegam.",
  "TARANIS está diseñado para trabajar con distintos horizontes de predicción según la configuración del despliegue y presentar sus resultados en una interfaz territorial comprensible.":
    "A TARANIS foi projetada para trabalhar com diferentes horizontes de previsão de acordo com a configuração da implantação e apresentar seus resultados em uma interface territorial compreensível.",
  "Ver cómo TARANIS integra datos y modelos": "Ver como a TARANIS integra dados e modelos",
  "IA aplicada": "IA aplicada",
  "La inteligencia artificial puede identificar relaciones temporales complejas en series hidrometeorológicas y complementar la modelización hidrológica tradicional.":
    "A inteligência artificial pode identificar relações temporais complexas em séries hidrometeorológicas e complementar a modelagem hidrológica tradicional.",
  "Qué puede aprender un modelo temporal": "O que um modelo temporal pode aprender",
  "Las redes neuronales diseñadas para series temporales, como las arquitecturas LSTM, pueden aprender dependencias entre variables pasadas y la evolución posterior de una señal. En hidrología, esto permite estudiar relaciones entre precipitación, estados previos y caudales observados.":
    "Redes neurais projetadas para séries temporais, como arquiteturas LSTM, podem aprender dependências entre variáveis passadas e a evolução posterior de um sinal. Em hidrologia, isso permite estudar relações entre precipitação, estados antecedentes e vazões observadas.",
  "Su utilidad depende de disponer de datos representativos, una preparación rigurosa de las series y una validación separada de los datos utilizados durante el entrenamiento.":
    "Sua utilidade depende de dados representativos, preparação rigorosa das séries e validação separada dos dados utilizados no treinamento.",
  "IA no significa prescindir de la hidrología": "IA não significa dispensar a hidrologia",
  "Un sistema operativo necesita más que un modelo predictivo. Requiere control de calidad de datos, contexto territorial, análisis hidrológico, evaluación de incertidumbre y una interfaz que traduzca los resultados a información accionable.":
    "Um sistema operacional precisa de mais do que um modelo preditivo. Exige controle de qualidade dos dados, contexto territorial, análise hidrológica, avaliação da incerteza e uma interface que transforme os resultados em informação acionável.",
  "Por este motivo TARANIS plantea una integración entre modelización hidrológica, inteligencia artificial y fuentes oficiales, en lugar de tratar la IA como una capa aislada.":
    "Por esse motivo, a TARANIS integra modelagem hidrológica, inteligência artificial e fontes oficiais, em vez de tratar a IA como uma camada isolada.",
  "Preparación y control de datos": "Preparação e controle de dados",
  "Entrenamiento y validación": "Treinamento e validação",
  "Comparación con observaciones": "Comparação com observações",
  "Contexto hidrológico": "Contexto hidrológico",
  "Representación territorial de resultados": "Representação territorial dos resultados",
  "Del modelo a una herramienta de decisión": "Do modelo a uma ferramenta de decisão",
  "El valor final aparece cuando la salida del modelo se puede comparar con observaciones, visualizar en el territorio y actualizar durante el episodio. Esa conexión entre predicción y operación es una de las funciones centrales de una plataforma de alerta temprana.":
    "O valor final aparece quando a saída do modelo pode ser comparada com observações, visualizada no território e atualizada durante o evento. Essa conexão entre previsão e operação é uma das funções centrais de uma plataforma de alerta precoce.",
  "TARANIS integra información hidrometeorológica, predicción y cartografía para apoyar la gestión municipal y territorial del riesgo de inundaciones.":
    "A TARANIS integra informação hidrometeorológica, previsão e cartografia para apoiar a gestão municipal e territorial do risco de inundações.",
  "Ayuntamientos y administraciones necesitan transformar fuentes dispersas en una lectura territorial que pueda consultarse antes y durante un episodio.":
    "Municípios e administrações precisam transformar fontes dispersas em uma leitura territorial que possa ser consultada antes e durante um evento.",
  "Seguimiento de precipitación y caudales": "Monitoramento de precipitação e vazões",
  "Lectura territorial del episodio": "Leitura territorial do evento",
  "Acceso a históricos": "Acesso a históricos",
  "Apoyo a planificación y coordinación": "Apoio ao planejamento e coordenação",
  "Integración de fuentes oficiales": "Integração de fontes oficiais",
  "Predicción configurable": "Previsão configurável",
  "Despliegue adaptado al territorio": "Implantação adaptada ao território",
  "Durante un episodio, el tiempo y la claridad de la información son críticos. TARANIS concentra observaciones y predicciones para facilitar una lectura rápida de la evolución hidrológica.":
    "Durante um evento, o tempo e a clareza das informações são críticos. A TARANIS reúne observações e previsões para facilitar uma leitura rápida da evolução hidrológica.",
  "Seguimiento de episodios": "Monitoramento de eventos",
  "Identificación de cambios relevantes": "Identificação de mudanças relevantes",
  "Consulta territorial": "Consulta territorial",
  "Apoyo a la coordinación operativa": "Apoio à coordenação operacional",
  "Alertas georreferenciadas": "Alertas georreferenciados",
  "Series e hidrogramas": "Séries e hidrogramas",
  "Horizontes de predicción": "Horizontes de previsão",
  "Integración con fuentes existentes": "Integração com fontes existentes",
  "TARANIS combina estaciones de aforo, precipitación, históricos y modelización para apoyar el seguimiento hidrológico a escala de cuenca.":
    "A TARANIS combina estações fluviométricas, precipitação, históricos e modelagem para apoiar o monitoramento hidrológico em escala de bacia.",
  "La operación hidrológica exige relacionar series de caudal, precipitación, modelos y territorio. TARANIS facilita esa integración mediante una arquitectura modular.":
    "A operação hidrológica exige relacionar séries de vazão, precipitação, modelos e território. A TARANIS facilita essa integração por meio de uma arquitetura modular.",
  "Integración de redes de aforo": "Integração de redes fluviométricas",
  "Seguimiento de precipitación": "Monitoramento da precipitação",
  "Comparación de modelos y observaciones": "Comparação de modelos e observações",
  "Fuentes SAIH y meteorológicas": "Fontes SAIH e meteorológicas",
  "Modelización hidrológica": "Modelagem hidrológica",
  "Inteligencia artificial": "Inteligência artificial",
  "Visualización por cuencas y subcuencas": "Visualização por bacias e sub-bacias",
  "TARANIS aporta información territorial y predictiva para organizaciones que gestionan infraestructuras o activos sensibles a episodios de inundación.":
    "A TARANIS fornece informações territoriais e preditivas para organizações que gerenciam infraestruturas ou ativos sensíveis a eventos de inundação.",
  "La exposición de activos requiere comprender qué está ocurriendo aguas arriba, cómo evoluciona el episodio y qué escenarios pueden afectar a la operación.":
    "A exposição de ativos exige compreender o que está acontecendo a montante, como o evento evolui e quais cenários podem afetar a operação.",
  "Seguimiento de activos expuestos": "Monitoramento de ativos expostos",
  "Contexto hidrológico territorial": "Contexto hidrológico territorial",
  "Anticipación de escenarios": "Antecipação de cenários",
  "Información para protocolos internos": "Informação para protocolos internos",
  "Cobertura territorial configurable": "Cobertura territorial configurável",
  "Integración de datos externos": "Integração de dados externos",
  "Alertas y visualización": "Alertas e visualização",
};

const tables: Record<Locale, Record<string, string>> = {
  es: {},
  en: { ...en, ...enExtra },
  "pt-BR": { ...pt, ...ptExtra },
};

export function tr(value: string, locale: Locale = getActiveLocale()): string {
  if (locale === "es") return value;
  return tables[locale][value] ?? value;
}

export function hasTranslation(value: string) {
  return Boolean(en[value] && pt[value]);
}

export function localizeDeep<T>(value: T, locale: Locale = getActiveLocale()): T {
  if (typeof value === "string") return tr(value, locale) as T;
  if (Array.isArray(value)) return value.map((item) => localizeDeep(item, locale)) as T;
  if (value && typeof value === "object") {
    const output: Record<string, unknown> = {};
    for (const [key, item] of Object.entries(value as Record<string, unknown>)) {
      output[key] =
        key === "slug" || key === "to" || key === "path" ? item : localizeDeep(item, locale);
    }
    return output as T;
  }
  return value;
}
