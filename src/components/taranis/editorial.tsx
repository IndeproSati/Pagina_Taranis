import { tr, localizeDeep } from "@/i18n/translations";
import { localizedPath } from "@/i18n/config";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Database,
  Layers3,
  Network,
  Radar,
  Route,
  Satellite,
  Waves,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Resource, resources } from "@/content/resources";
import { Solution, solutions } from "@/content/solutions";
import { PageIntro, SectionHeader } from "./shared";
export function ProductSeoSection() {
  const capabilities = [
    {
      number: "01",
      Icon: Database,
      title: tr("Datos hidrometeorol\xF3gicos"),
      text: tr(
        "Integra precipitaci\xF3n, aforos, hist\xF3ricos y otras fuentes disponibles para el territorio.",
      ),
      path: "M0 39C28 37 38 16 67 20C98 25 103 44 137 35C171 26 186 11 220 17",
    },
    {
      number: "02",
      Icon: Radar,
      title: tr("Predicci\xF3n y seguimiento"),
      text: tr(
        "Conecta observaciones y modelos para analizar la evoluci\xF3n del episodio y sus escenarios.",
      ),
      path: "M0 39C25 32 44 21 67 27C93 34 105 44 135 32C166 19 183 8 220 19",
    },
    {
      number: "03",
      Icon: Layers3,
      title: tr("Lectura geoespacial"),
      text: tr(
        "Representa informaci\xF3n hidrol\xF3gica sobre el territorio para facilitar su interpretaci\xF3n operativa.",
      ),
      path: "M0 38C22 30 38 27 58 32C85 39 101 42 123 29C148 14 169 20 187 28C199 33 209 28 220 18",
    },
  ] as const;
  const process = [
    {
      label: tr("Datos"),
      Icon: Database,
    },
    {
      label: tr("Modelos"),
      Icon: Network,
    },
    {
      label: tr("An\xE1lisis"),
      Icon: Radar,
    },
    {
      label: tr("Decisiones"),
      Icon: Route,
    },
  ] as const;
  return (
    <section
      className="
        section-space
        relative
        overflow-hidden
        bg-[#EEF8FC]
      "
    >
      {/* ======================================================
           FONDO · CURVAS TOPOGRÁFICAS
        ======================================================= */}

      <svg
        className="
          pointer-events-none
          absolute
          right-[-5%]
          top-[-30px]

          h-[520px]
          w-[58%]

          opacity-[0.22]
        "
        viewBox="0 0 900 520"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M55 420C110 315 190 360 245 267C302 172 386 240 434 146C481 54 562 105 631 61C691 23 767 30 854 67"
          stroke="#5DC8E7"
          strokeWidth="1"
        />

        <path
          d="M94 452C142 345 219 392 279 299C335 211 421 266 472 179C527 87 604 137 670 91C729 51 788 54 870 91"
          stroke="#68D5EE"
          strokeWidth=".9"
        />

        <path
          d="M136 477C184 380 255 419 316 337C376 255 449 302 514 221C577 142 646 176 705 133C758 95 816 97 887 126"
          stroke="#81DEEF"
          strokeWidth=".8"
        />

        <path
          d="M236 480C267 413 329 429 365 374C406 312 465 338 506 281C550 220 613 240 651 191C693 137 752 152 806 121"
          stroke="#4CB8DE"
          strokeWidth=".7"
          opacity=".7"
        />

        <path
          d="M318 493C341 443 387 451 415 412C450 362 496 376 529 331C565 283 615 294 649 252C686 207 735 216 780 185"
          stroke="#54C6E7"
          strokeWidth=".7"
          opacity=".55"
        />
      </svg>

      {/* ======================================================
           GLOW DEL FONDO
        ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          right-[4%]
          top-[8%]

          h-[380px]
          w-[450px]

          rounded-full

          bg-[#58CFF5]/[0.10]
          blur-[110px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          left-[8%]

          h-[330px]
          w-[55%]

          rounded-full

          bg-[#39D9FF]/[0.055]
          blur-[130px]
        "
      />

      {/* ======================================================
           CONTENIDO
        ======================================================= */}

      <div className="section-shell relative z-10">
        {/* ====================================================
             ENCABEZADO
          ===================================================== */}

        <div
          className="
            grid
            items-center
            gap-12

            lg:grid-cols-[1.12fr_0.88fr]
            lg:gap-8
          "
        >
          {/* ==================================================
               TEXTO
            =================================================== */}

          <div className="max-w-[780px]">
            <div className="mb-6 flex items-center gap-4">
              <span
                className="
                  h-px
                  w-9

                  bg-[#00BFD7]

                  shadow-[0_0_8px_rgba(0,191,215,0.35)]
                "
              />

              <p
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#00AFC7]

                  sm:text-xs
                "
              >
                {tr("Plataforma de alerta temprana")}
              </p>
            </div>

            <h2
              className="
                title-section
                max-w-[820px]
                text-[#001D2D]
              "
            >
              {tr("De los datos a una")}
              <br />
              {tr("lectura operativa")}
              <br />
              <span className="text-[#00AFC7]">{tr("del riesgo.")}</span>
            </h2>

            <p
              className="
                mt-7
                max-w-[700px]

                text-base
                leading-7

                text-[#36576A]

                sm:text-lg
                sm:leading-8
              "
            >
              {tr(
                "TARANIS re\xFAne informaci\xF3n hidrometeorol\xF3gica, modelizaci\xF3n y visualizaci\xF3n territorial para apoyar la anticipaci\xF3n de escenarios de inundaci\xF3n.",
              )}
            </p>
          </div>

          {/* ==================================================
               COMPOSICIÓN GRÁFICA · CAPAS
            =================================================== */}

          <div
            className="
              relative

              hidden

              h-[330px]

              lg:block
            "
            aria-hidden="true"
          >
            {/* Halo */}

            <div
              className="
                absolute
                left-[5%]
                top-[12%]

                h-[240px]
                w-[75%]

                rounded-full

                bg-[#39D9FF]/10

                blur-[65px]
              "
            />

            {/* ==================================================
                 CAPA 4
              =================================================== */}

            <div
              className="
                absolute
                left-[4%]
                top-[42%]

                h-[102px]
                w-[66%]

                -rotate-6
                skew-x-[-7deg]

                rounded-[18px]

                border
                border-[#44CDEB]/35

                bg-gradient-to-br
                from-[#BDECF7]/70
                via-[#CDEFF6]/70
                to-[#9DDCEB]/55

                shadow-[0_18px_35px_rgba(37,135,166,0.11)]
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  opacity-45
                "
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(30,169,205,0.16) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(30,169,205,0.16) 1px, transparent 1px)
                  `,
                  backgroundSize: "23px 23px",
                }}
              />
            </div>

            {/* ==================================================
                 CAPA 3
              =================================================== */}

            <div
              className="
                absolute
                left-[10%]
                top-[32%]

                h-[102px]
                w-[66%]

                -rotate-6
                skew-x-[-7deg]

                rounded-[18px]

                border
                border-[#27CBE9]/45

                bg-gradient-to-br
                from-[#A5E9F5]/80
                via-[#C6F2F8]/75
                to-[#6ED1E6]/60

                shadow-[0_18px_35px_rgba(37,135,166,0.14)]
              "
            >
              <svg
                className="absolute inset-0 size-full opacity-60"
                viewBox="0 0 300 100"
                fill="none"
              >
                <path
                  d="M-10 86C30 59 55 80 87 56C122 30 149 69 180 43C218 13 251 56 310 21"
                  stroke="#008DBD"
                  strokeWidth="1"
                />

                <path
                  d="M-10 94C35 72 60 89 96 67C127 48 154 77 190 54C230 29 255 67 310 38"
                  stroke="#39D9FF"
                  strokeWidth=".8"
                  opacity=".7"
                />
              </svg>
            </div>

            {/* ==================================================
                 CAPA 2
              =================================================== */}

            <div
              className="
                absolute
                left-[16%]
                top-[22%]

                h-[102px]
                w-[66%]

                -rotate-6
                skew-x-[-7deg]

                rounded-[18px]

                border
                border-[#14C7E6]/55

                bg-gradient-to-br
                from-[#8DE6F3]/85
                via-[#B3EDF5]/80
                to-[#48C3DD]/65

                shadow-[0_18px_35px_rgba(37,135,166,0.16)]
              "
            >
              <div className="absolute left-[19%] top-[30%] size-2 rounded-full bg-[#00BFD7] shadow-[0_0_12px_rgba(0,191,215,0.75)]" />
              <div className="absolute left-[55%] top-[55%] size-2 rounded-full bg-[#00BFD7] shadow-[0_0_12px_rgba(0,191,215,0.75)]" />
              <div className="absolute right-[18%] top-[25%] size-2 rounded-full bg-[#00BFD7] shadow-[0_0_12px_rgba(0,191,215,0.75)]" />

              <svg
                className="absolute inset-0 size-full opacity-65"
                viewBox="0 0 300 100"
                fill="none"
              >
                <path d="M22 32L84 56L160 38L244 68" stroke="#008BAF" strokeWidth="1" />

                <path d="M84 56L130 83L160 38L224 20" stroke="#00BFD7" strokeWidth=".9" />
              </svg>
            </div>

            {/* ==================================================
                 CAPA 1
              =================================================== */}

            <div
              className="
                absolute
                left-[22%]
                top-[12%]

                h-[102px]
                w-[66%]

                -rotate-6
                skew-x-[-7deg]

                overflow-hidden

                rounded-[18px]

                border
                border-[#00BFD7]/65

                bg-gradient-to-br
                from-[#60DBED]/80
                via-[#A4EAF4]/80
                to-[#15AFCB]/65

                shadow-[0_20px_42px_rgba(0,153,190,0.20),0_0_25px_rgba(57,217,255,0.14)]
              "
            >
              <svg
                className="absolute inset-0 size-full opacity-80"
                viewBox="0 0 300 100"
                fill="none"
              >
                <path
                  d="M-20 80C34 59 53 18 104 30C145 39 152 76 199 59C238 45 248 14 320 23"
                  stroke="#006D94"
                  strokeWidth="1.2"
                />

                <path
                  d="M-20 91C28 78 55 43 99 50C143 57 159 88 205 72C249 57 272 31 320 38"
                  stroke="#78F2FF"
                  strokeWidth=".9"
                />
              </svg>
            </div>

            {/* ==================================================
                 ETIQUETAS DEL PROCESO
              =================================================== */}

            <div
              className="
                absolute
                right-0
                top-[4%]

                flex
                flex-col
                gap-3
              "
            >
              {localizeDeep(process).map(({ label, Icon }) => (
                <div
                  key={label}
                  className="
                    flex
                    min-w-[130px]
                    items-center
                    gap-3

                    rounded-full

                    border
                    border-[#69CFE6]/45

                    bg-white/80

                    px-4
                    py-2.5

                    text-xs
                    font-medium
                    text-[#264B5B]

                    shadow-[0_10px_24px_rgba(39,132,160,0.10),0_0_18px_rgba(57,217,255,0.08)]

                    backdrop-blur-md
                  "
                >
                  <span
                    className="
                      grid
                      size-7
                      shrink-0
                      place-items-center

                      rounded-full

                      bg-[#DDF8FC]

                      text-[#00AFC7]
                    "
                  >
                    <Icon className="size-3.5" />
                  </span>

                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ====================================================
             TARJETAS
          ===================================================== */}

        <div
          className="
            mt-16

            grid
            gap-5

            lg:grid-cols-3
          "
        >
          {localizeDeep(capabilities).map(({ number, Icon, title, text, path }) => (
            <article
              key={title}
              className="
                  group
                  relative

                  min-h-[285px]

                  overflow-hidden

                  rounded-[22px]

                  border
                  border-[#A8D5E2]

                  bg-white/85

                  p-7

                  shadow-[0_14px_38px_rgba(44,112,136,0.06)]

                  backdrop-blur-sm

                  transition
                  duration-500

                  hover:-translate-y-1.5
                  hover:border-[#39CFE9]
                  hover:shadow-[0_20px_46px_rgba(44,112,136,0.10),0_0_28px_rgba(57,217,255,0.10)]
                "
            >
              {/* Glow superior */}

              <div
                className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12

                    size-36

                    rounded-full

                    bg-[#39D9FF]/[0.06]

                    blur-2xl

                    transition
                    duration-500

                    group-hover:bg-[#39D9FF]/[0.12]
                  "
              />

              {/* Cabecera de tarjeta */}

              <div
                className="
                    relative
                    z-20

                    flex
                    items-start
                    justify-between
                    gap-5
                  "
              >
                <div
                  className="
                      grid
                      size-11
                      place-items-center

                      rounded-xl

                      border
                      border-[#39CFE9]/25

                      bg-[#E8FAFD]

                      text-[#00AFC7]

                      transition
                      duration-300

                      group-hover:border-[#39CFE9]/50
                      group-hover:shadow-[0_0_18px_rgba(57,217,255,0.14)]
                    "
                >
                  <Icon className="size-5" />
                </div>

                <span
                  className="
                      text-[10px]
                      font-semibold
                      tracking-[0.18em]
                      text-[#8AB8C7]
                    "
                >
                  {number}
                </span>
              </div>

              <h3
                className="
                    title-card
                    relative
                    z-20
                    mt-7
                    text-[#001D2D]
                  "
              >
                {title}
              </h3>

              <p
                className="
                    relative
                    z-20

                    mt-3
                    max-w-[360px]

                    text-sm
                    leading-6

                    text-[#4D6B79]
                  "
              >
                {text}
              </p>

              {/* ==================================================
                   LINE ART INFERIOR
                =================================================== */}

              <div
                className="
                    pointer-events-none
                    absolute

                    inset-x-6
                    bottom-4

                    h-[58px]

                    opacity-80
                  "
              >
                <svg
                  viewBox="0 0 220 55"
                  className="size-full"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id={`line-${number}`} x1="0" y1="0" x2="220" y2="0">
                      <stop offset="0%" stopColor="#5FD6E9" stopOpacity=".18" />

                      <stop offset="50%" stopColor="#00BFD7" stopOpacity=".85" />

                      <stop offset="100%" stopColor="#5FD6E9" stopOpacity=".18" />
                    </linearGradient>
                  </defs>

                  <path
                    d={path}
                    fill="none"
                    stroke={`url(#line-${number})`}
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />

                  <circle
                    cx={number === "01" ? "137" : number === "02" ? "135" : "123"}
                    cy={number === "01" ? "35" : number === "02" ? "32" : "29"}
                    r="2.5"
                    fill="#00BFD7"
                  />

                  <circle
                    cx={number === "01" ? "137" : number === "02" ? "135" : "123"}
                    cy={number === "01" ? "35" : number === "02" ? "32" : "29"}
                    r="6"
                    fill="rgba(0,191,215,0.08)"
                  />
                </svg>
              </div>

              {/* Flecha */}

              <div
                className="
                    absolute
                    bottom-6
                    right-6
                    z-30

                    grid
                    size-9
                    place-items-center

                    rounded-full

                    border
                    border-[#B9DEE8]

                    bg-[#ECF9FC]

                    text-[#277088]

                    transition
                    duration-300

                    group-hover:border-[#39CFE9]
                    group-hover:bg-[#DDF9FD]
                    group-hover:text-[#00AFC7]

                    group-hover:shadow-[0_0_16px_rgba(57,217,255,0.16)]
                  "
                aria-hidden="true"
              >
                <ArrowRight
                  className="
                      size-4

                      transition-transform
                      duration-300

                      group-hover:translate-x-0.5
                    "
                />
              </div>
            </article>
          ))}
        </div>

        {/* ====================================================
             CONTENIDO SEO / EXPLICATIVO
             Se mantiene, pero con menor peso visual
          ===================================================== */}

        <div
          className="
            mt-14

            grid
            gap-8

            border-t
            border-[#B9D9E3]

            pt-10

            text-[15px]
            leading-7
            text-[#4A6877]

            lg:grid-cols-2
            lg:gap-14
          "
        >
          <p>
            {tr(
              "La plataforma est\xE1 concebida para trabajar con fuentes existentes y adaptarse a la disponibilidad de datos de cada territorio. Esto permite construir despliegues desde \xE1mbitos municipales hasta \xE1reas m\xE1s extensas sin depender necesariamente de una red propia de sensores en campo.",
            )}
          </p>

          <p>
            {tr(
              "Su objetivo no es sustituir los procedimientos de emergencia, sino convertir datos y modelos complejos en informaci\xF3n m\xE1s comprensible para administraciones, organismos de cuenca, Protecci\xF3n Civil y gestores de infraestructuras.",
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
export function TechnologyDeepDive() {
  const layers = [
    [
      Satellite,
      "Fuentes",
      "Información meteorológica, hidrológica, satelital, radar, cartografía y series históricas.",
    ],
    [
      Network,
      "Modelización",
      "Modelos hidrológicos e inteligencia artificial configurados según datos, cuenca y objetivo operativo.",
    ],
    [
      Route,
      "Territorio",
      "Resultados conectados con cuencas, estaciones, municipios y otras unidades geográficas relevantes.",
    ],
    [
      Waves,
      tr("Decisi\xF3n"),
      "Visualizaciones, series y alertas que permiten seguir la evolución del episodio en una misma interfaz.",
    ],
  ] as const;
  return (
    <section className="section-space bg-background">
      <div className="section-shell">
        <SectionHeader
          eyebrow={tr("Arquitectura tecnol\xF3gica")}
          title={tr("Una cadena completa: observar, modelizar, anticipar.")}
          text={tr(
            "El rendimiento de una predicci\xF3n depende tanto del modelo como de la calidad de los datos, el contexto hidrol\xF3gico y la forma en que se comunican los resultados.",
          )}
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {localizeDeep(layers).map(([Icon, title, text]) => (
            <article key={title} className="bg-card p-7">
              <Icon className="size-6 text-primary" aria-hidden="true" />
              <h2 className="title-card mt-8">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-5">{tr("Modelizaci\xF3n h\xEDbrida")}</p>
            <h2 className="title-section">
              {tr("Hidrolog\xEDa e inteligencia artificial, no una u otra.")}
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-muted-foreground">
            <p>
              {tr(
                "TARANIS est\xE1 planteado como una arquitectura modular capaz de incorporar modelizaci\xF3n hidrol\xF3gica y modelos de aprendizaje autom\xE1tico. La combinaci\xF3n concreta depende de las caracter\xEDsticas de la cuenca, la disponibilidad de datos y el horizonte de predicci\xF3n requerido.",
              )}
            </p>
            <p>
              {tr(
                "Los modelos temporales como LSTM pueden aprender patrones de series hidrometeorol\xF3gicas, mientras que los enfoques hidrol\xF3gicos aportan una representaci\xF3n expl\xEDcita de procesos y estados de cuenca. La plataforma permite integrar estos resultados dentro de una lectura territorial com\xFAn.",
              )}
            </p>
            <Link
              to={localizedPath("/recursos/inteligencia-artificial-inundaciones")}
              className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
            >
              {tr("IA aplicada a la predicci\xF3n de inundaciones")}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export function SolutionsIndex() {
  return (
    <section className="section-space bg-background">
      <div className="section-shell">
        <SectionHeader
          eyebrow={tr("Por organizaci\xF3n")}
          title={tr("La misma inteligencia hidrol\xF3gica, distintas decisiones.")}
          text={tr(
            "Cada organizaci\xF3n utiliza la informaci\xF3n con objetivos y responsabilidades diferentes. Por eso TARANIS adapta la lectura y el despliegue al contexto operativo.",
          )}
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {solutions.map((solution) => (
            <Link
              key={solution.slug}
              to={localizedPath(`/soluciones/${solution.slug}`)}
              className="group rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-aqua"
            >
              <p className="eyebrow">{solution.eyebrow}</p>
              <h2 className="title-card mt-8">{solution.title}</h2>
              <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
                {solution.description}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary">
                {tr("Ver soluci\xF3n")}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
export function SolutionPage({ solution: rawSolution }: { solution: Solution }) {
  const solution = localizeDeep(rawSolution);
  return (
    <PageIntro eyebrow={solution.eyebrow} title={solution.title} text={solution.intro}>
      <section className="section-space bg-background">
        <div className="section-shell grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-5">{tr("Necesidades")}</p>
            <h2 className="title-section">
              {tr("Qu\xE9 debe poder comprender la organizaci\xF3n.")}
            </h2>
            <ul className="mt-8 space-y-4">
              {solution.needs.map((item) => (
                <li key={item} className="flex gap-3 text-lg text-muted-foreground">
                  <Check className="mt-1 size-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-5">{tr("TARANIS")}</p>
            <h2 className="title-section">{tr("Capacidades configurables para ese contexto.")}</h2>
            <ul className="mt-8 space-y-4">
              {solution.capabilities.map((item) => (
                <li key={item} className="flex gap-3 text-lg text-muted-foreground">
                  <Check className="mt-1 size-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section-space bg-surface">
        <div className="section-shell flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow={tr("Siguiente paso")}
            title={tr("Eval\xFAa TARANIS sobre un territorio concreto.")}
            text={tr(
              "Una demostraci\xF3n permite revisar fuentes disponibles, alcance territorial y necesidades operativas.",
            )}
          />
          <Button asChild variant="hero" size="lg">
            <Link to={localizedPath("/contacto")}>
              {tr("Solicitar una demo")}
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </PageIntro>
  );
}
export function ResourcesGrid({ limit }: { limit?: number }) {
  const visible = localizeDeep(typeof limit === "number" ? resources.slice(0, limit) : resources);
  return (
    <section className="section-space bg-surface">
      <div className="section-shell">
        <SectionHeader
          eyebrow={tr("Recursos")}
          title={tr("Conocimiento para anticipar.")}
          text={tr(
            "Gu\xEDas y contenidos t\xE9cnicos sobre predicci\xF3n hidrol\xF3gica, alerta temprana e inteligencia artificial aplicada al riesgo de inundaciones.",
          )}
        />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {visible.map((resource) => (
            <Link
              key={resource.slug}
              to={localizedPath(`/recursos/${resource.slug}`)}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-aqua"
            >
              <div className="topo-field h-44 bg-deep-soft p-5">
                <span className="rounded-full bg-primary/15 px-3 py-1 text-xs text-primary">
                  {resource.tag}
                </span>
              </div>
              <div className="p-6">
                <h2 className="title-card">{resource.shortTitle}</h2>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {resource.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  {tr("Leer recurso")}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        {limit && resources.length > limit ? (
          <Button asChild variant="quiet" size="lg" className="mt-10">
            <Link to={localizedPath("/recursos")}>
              {tr("Ver todos los recursos")}
              <ArrowRight />
            </Link>
          </Button>
        ) : null}
      </div>
    </section>
  );
}
export function ResourceArticle({ resource: rawResource }: { resource: Resource }) {
  const resource = localizeDeep(rawResource);
  return (
    <PageIntro eyebrow={resource.tag} title={resource.title} text={resource.intro}>
      <article className="section-space bg-background">
        <div className="section-shell grid gap-14 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="max-w-3xl space-y-16">
            {resource.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="title-section">{section.heading}</h2>
                <div className="mt-6 space-y-5 text-lg leading-8 text-muted-foreground">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 rounded-xl border border-border bg-surface p-4 text-sm"
                      >
                        <Check className="size-4 shrink-0 text-primary" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
          <aside className="h-fit rounded-2xl border border-border bg-surface p-6 lg:sticky lg:top-28">
            <p className="eyebrow">{tr("Explorar TARANIS")}</p>
            <div className="mt-5 flex flex-col gap-4">
              {resource.related.map((item) => (
                <Link
                  key={item.to}
                  to={localizedPath(item.to)}
                  className="flex items-start justify-between gap-3 border-b border-border pb-4 text-sm font-medium hover:text-primary"
                >
                  {item.label}
                  <ArrowRight className="mt-0.5 size-4 shrink-0" />
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </article>
    </PageIntro>
  );
}
