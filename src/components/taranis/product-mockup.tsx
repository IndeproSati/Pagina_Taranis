import { tr } from "@/i18n/translations";
import {
  Activity,
  BarChart3,
  CalendarRange,
  CloudRain,
  Gauge,
  Layers3,
  Map,
  RadioTower,
  ShieldAlert,
  TrendingUp,
  Waves,
} from "lucide-react";

import { cn } from "@/lib/utils";

type ProductMockupProps = {
  className?: string;
  compact?: boolean;

  /*
   * Índice del módulo seleccionado desde ProductSection.
   * 0 = Predicción hidrológica
   * 1 = Seguimiento de estaciones
   * 2 = Precipitación
   * 3 = Caudales
   * 4 = Cartografía de riesgo
   * 5 = Análisis histórico
   * 6 = Modelos comparables
   * 7 = Información territorial
   */
  activeView?: number;
};

/* ============================================================
   PRODUCT MOCKUP · TARANIS
============================================================ */

export function ProductMockup({ className, compact = false, activeView = 0 }: ProductMockupProps) {
  /* ==========================================================
     CONTENIDO DINÁMICO
  ========================================================== */

  const views = [
    {
      title: tr("Predicci\xF3n hidrol\xF3gica"),
      subtitle: tr("Escenario previsto"),
      topChart: "Precipitación pronosticada",
      bottomChart: "Hidrograma predictivo",
      metrics: [
        [tr("Precipitaci\xF3n"), "38.4", "mm"],
        [tr("Caudal"), "42.8", "m³/s"],
        [tr("Nivel"), "1.82", "m"],
        ["Tendencia", "Ascendente", ""],
      ],
    },

    {
      title: "Seguimiento de estaciones",
      subtitle: "Red de observación",
      topChart: "Estado de estaciones",
      bottomChart: "Serie temporal · E-104",
      metrics: [
        [tr("Estaciones"), "12", "activas"],
        ["Disponibilidad", "98", "%"],
        ["Último dato", "5", "min"],
        [tr("Estado"), "Operativo", ""],
      ],
    },

    {
      title: tr("Precipitaci\xF3n"),
      subtitle: tr("Precipitaci\xF3n acumulada"),
      topChart: "Precipitación pronosticada",
      bottomChart: tr("Evoluci\xF3n temporal"),
      metrics: [
        ["Acumulada", "38.4", "mm"],
        ["Última hora", "4.6", "mm"],
        ["Máximo", "12.8", "mm/h"],
        ["Tendencia", "Ascendente", ""],
      ],
    },

    {
      title: tr("Caudales"),
      subtitle: tr("Seguimiento hidrol\xF3gico"),
      topChart: "Caudal previsto",
      bottomChart: "Hidrograma · E-104",
      metrics: [
        [tr("Caudal"), "42.8", "m³/s"],
        [tr("Nivel"), "1.82", "m"],
        ["Variación", "+8", "%"],
        ["Tendencia", "Ascendente", ""],
      ],
    },

    {
      title: "Cartografía de riesgo",
      subtitle: tr("Evaluaci\xF3n territorial"),
      topChart: tr("Nivel de riesgo"),
      bottomChart: "Evolución del escenario",
      metrics: [
        ["Riesgo", tr("Medio"), ""],
        ["Zonas", "3", ""],
        ["Escenario", "T100", ""],
        [tr("Estado"), tr("Vigilancia"), ""],
      ],
    },

    {
      title: tr("An\xE1lisis hist\xF3rico"),
      subtitle: "Consulta temporal",
      topChart: "Eventos registrados",
      bottomChart: "Serie histórica",
      metrics: [
        ["Evento", "01", ""],
        ["Caudal máx.", "50.3", "m³/s"],
        [tr("Precipitaci\xF3n"), "36.7", "mm"],
        ["Periodo", "Histórico", ""],
      ],
    },

    {
      title: "Modelos comparables",
      subtitle: tr("Comparaci\xF3n de resultados"),
      topChart: "Modelos activos",
      bottomChart: "Comparativa temporal",
      metrics: [
        ["Modelo A", "42.8", "m³/s"],
        ["Modelo B", "40.6", "m³/s"],
        ["Diferencia", "5.1", "%"],
        [tr("Estado"), "Comparando", ""],
      ],
    },

    {
      title: "Información territorial",
      subtitle: "Capas geoespaciales",
      topChart: "Capas disponibles",
      bottomChart: "Cobertura territorial",
      metrics: [
        ["Cuenca", "04", ""],
        ["Capas", "8", ""],
        ["Municipios", "7", ""],
        [tr("Estado"), "Actualizado", ""],
      ],
    },
  ] as const;

  const selectedView = views[activeView] ?? views[0];

  /* ==========================================================
     NAVEGACIÓN INTERNA DEL MOCKUP
  ========================================================== */

  const navigation = [
    {
      label: "Territorio",
      Icon: Map,
      active: activeView === 7,
    },
    {
      label: tr("Predicci\xF3n"),
      Icon: Activity,
      active: activeView === 0 || activeView === 2 || activeView === 3 || activeView === 6,
    },
    {
      label: tr("Estaciones"),
      Icon: RadioTower,
      active: activeView === 1,
    },
    {
      label: "Riesgo",
      Icon: ShieldAlert,
      active: activeView === 4 || activeView === 5,
    },
  ] as const;

  /* ==========================================================
     PRECIPITACIÓN
  ========================================================== */

  const forecastBars = [18, 27, 36, 45, 59, 78, 92, 82, 69, 56, 47, 38, 29, 23] as const;

  /* ==========================================================
     RED TERRITORIAL
  ========================================================== */

  const networkLines = [
    [89, 261, 145, 225],
    [145, 225, 199, 238],
    [199, 238, 255, 201],
    [255, 201, 318, 218],
    [318, 218, 373, 173],
    [373, 173, 429, 191],
    [429, 191, 489, 152],
    [489, 152, 547, 171],

    [145, 225, 162, 174],
    [162, 174, 226, 147],
    [226, 147, 255, 201],

    [318, 218, 347, 267],
    [347, 267, 410, 284],
    [410, 284, 458, 245],
    [458, 245, 547, 171],

    [199, 238, 178, 298],
    [178, 298, 243, 319],
    [243, 319, 347, 267],

    [226, 147, 290, 112],
    [290, 112, 373, 173],

    [410, 284, 470, 319],
    [470, 319, 524, 279],
    [524, 279, 547, 171],
  ] as const;

  const networkNodes = [
    { cx: 89, cy: 261, level: "low" },
    { cx: 145, cy: 225, level: "low" },
    { cx: 199, cy: 238, level: "medium" },
    { cx: 255, cy: 201, level: "medium" },
    { cx: 318, cy: 218, level: "high" },
    { cx: 373, cy: 173, level: "medium" },
    { cx: 429, cy: 191, level: "low" },
    { cx: 489, cy: 152, level: "medium" },
    { cx: 547, cy: 171, level: "high" },
    { cx: 162, cy: 174, level: "low" },
    { cx: 226, cy: 147, level: "medium" },
    { cx: 347, cy: 267, level: "low" },
    { cx: 410, cy: 284, level: "medium" },
    { cx: 458, cy: 245, level: "low" },
    { cx: 178, cy: 298, level: "low" },
    { cx: 243, cy: 319, level: "medium" },
    { cx: 290, cy: 112, level: "low" },
    { cx: 470, cy: 319, level: "low" },
    { cx: 524, cy: 279, level: "medium" },
  ] as const;

  const getRiskColor = (level: "low" | "medium" | "high") => {
    if (level === "high") {
      return "#FF4D67";
    }

    if (level === "medium") {
      return "#FFC72E";
    }

    return "#36D9FF";
  };

  /* ==========================================================
     ICONOS DE LAS MÉTRICAS
  ========================================================== */

  const metricIcons = [CloudRain, Waves, Gauge, TrendingUp] as const;

  return (
    <div
      className={cn(
        `
          product-frame
          relative
          overflow-hidden
          rounded-[1.4rem]

          border
          border-[#36D9FF]/35

          bg-[#031B2B]

          text-on-dark

          shadow-[0_0_0_1px_rgba(54,217,255,0.06),0_24px_70px_rgba(0,0,0,0.28),0_0_30px_rgba(54,217,255,0.10)]
        `,
        className,
      )}
      aria-label="Representación visual de la plataforma TARANIS"
    >
      {/* ======================================================
           GLOW INTERIOR
        ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-12%]
          top-[5%]

          h-[70%]
          w-[65%]

          rounded-full

          bg-[#008ED6]/[0.08]

          blur-[80px]
        "
      />

      {/* ======================================================
           TOP BAR
        ======================================================= */}

      <div
        className="
          relative
          z-30

          flex
          h-10
          items-center
          justify-between

          border-b
          border-[#36D9FF]/12

          bg-[#08283C]/95

          px-4

          text-[9px]
          text-white/40
        "
      >
        <div className="flex items-center gap-1.5">
          <span
            className="
              size-1.5
              rounded-full
              bg-[#36D9FF]

              shadow-[0_0_6px_rgba(54,217,255,0.8)]
            "
          />

          <span className="size-1.5 rounded-full bg-white/20" />

          <span className="size-1.5 rounded-full bg-white/20" />
        </div>

        <span
          className="
            font-display
            uppercase
            tracking-[0.18em]
            text-white/45
          "
        >
          TARANIS / CUENCA 04
        </span>

        <span className="hidden sm:block">14:32 UTC</span>
      </div>

      {/* ======================================================
           CUERPO
        ======================================================= */}

      <div
        className={cn(
          `
            relative
            z-20

            grid
            grid-cols-[58px_minmax(0,1fr)]
          `,
          compact
            ? "min-h-[350px]"
            : "min-h-[420px] md:min-h-[520px] md:grid-cols-[150px_minmax(0,1fr)]",
        )}
      >
        {/* ====================================================
             SIDEBAR
          ===================================================== */}

        <aside
          className="
            relative

            border-r
            border-[#36D9FF]/12

            bg-[#072438]/96

            p-2
            md:p-3
          "
        >
          <div
            className="
              mb-6
              hidden
              items-center
              gap-2
              px-2
              md:flex
            "
          >
            <div
              className="
                grid
                size-6
                place-items-center

                rounded-lg

                border
                border-[#36D9FF]/20

                bg-[#36D9FF]/[0.06]
              "
            >
              <Layers3
                className="
                  size-3.5
                  text-[#63E7FF]
                "
              />
            </div>

            <span
              className="
                font-display
                text-[10px]
                font-semibold
                tracking-[0.18em]
                text-white/80
              "
            >
              {tr("TARANIS")}
            </span>
          </div>

          <div className="space-y-2">
            {navigation.map(({ label, Icon, active }) => (
              <div
                key={label}
                className={cn(
                  `
                      flex
                      items-center
                      gap-2.5

                      rounded-lg

                      px-2
                      py-2.5

                      text-[9px]

                      transition-all
                      duration-300
                    `,
                  active
                    ? `
                        bg-[#00B7D4]/15

                        text-[#63E7FF]

                        shadow-[inset_3px_0_0_rgba(54,217,255,0.75)]
                      `
                    : `
                        text-white/38
                      `,
                )}
              >
                <Icon
                  className="
                      size-3.5
                      shrink-0
                    "
                />

                <span className="hidden md:inline">{label}</span>
              </div>
            ))}
          </div>
        </aside>

        {/* ====================================================
             DASHBOARD
          ===================================================== */}

        <main
          className="
            relative

            overflow-hidden

            bg-gradient-to-br
            from-[#031C2D]
            via-[#04253A]
            to-[#031A2A]

            p-3
            md:p-4
          "
        >
          {/* GRID */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.13]
            "

            style={{
              backgroundImage: `
                linear-gradient(rgba(54,217,255,0.16) 1px, transparent 1px),
                linear-gradient(90deg, rgba(54,217,255,0.16) 1px, transparent 1px)
              `,
              backgroundSize: "30px 30px",
            }}
          />

          {/* ==================================================
               TOOLBAR DINÁMICA
            =================================================== */}

          <div
            className="
              relative
              z-30

              flex
              items-center
              justify-between
              gap-3
            "
          >
            <div className="flex items-center gap-3">
              <div>
                <p
                  className="
                    text-[9px]
                    font-medium
                    text-white/70
                  "
                >
                  {selectedView.title}
                </p>

                <p
                  className="
                    mt-0.5
                    text-[7px]
                    text-[#63E7FF]/60
                  "
                >
                  {selectedView.subtitle}
                </p>
              </div>

              <span
                className="
                  size-1
                  rounded-full
                  bg-[#36D9FF]

                  shadow-[0_0_7px_rgba(54,217,255,0.85)]
                "
              />
            </div>

            <div
              className="
                flex
                items-center
                gap-2

                rounded-lg

                border
                border-[#36D9FF]/16

                bg-[#041D2E]/80

                px-2.5
                py-1.5

                text-[8px]
                text-white/50

                backdrop-blur-sm
              "
            >
              <CalendarRange
                className="
                  size-3
                  text-[#63E7FF]
                "
              />
              {tr("\xDAltimas 24 h")}
            </div>
          </div>

          {/* ==================================================
               ZONA PRINCIPAL
            =================================================== */}

          <div
            className={cn(
              `
                relative
                z-20

                mt-3

                grid
                gap-3
              `,
              compact ? "grid-cols-1" : "md:grid-cols-[1.55fr_0.85fr]",
            )}
          >
            {/* ==================================================
                 MAPA / RED
              =================================================== */}

            <section
              className="
                relative

                min-h-[245px]

                overflow-hidden

                rounded-xl

                border
                border-[#36D9FF]/12

                bg-[#031827]

                md:min-h-[330px]
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute

                  left-[30%]
                  top-[20%]

                  h-[70%]
                  w-[60%]

                  rounded-full

                  bg-[#007DFF]/[0.10]

                  blur-[45px]
                "
              />

              <svg
                viewBox="0 0 620 360"
                className="
                  absolute
                  inset-0
                  size-full
                "

                role="img"
                aria-label="Representación esquemática de una red territorial e hidrológica"
              >
                {/* Líneas territoriales */}

                <g fill="none" stroke="#147CA7" strokeWidth=".7" opacity=".45">
                  <path d="M20 74L95 29L170 51L222 20L299 39L348 16L415 47L492 30L605 72" />

                  <path d="M0 124L82 91L148 116L213 82L279 105L338 71L408 99L474 78L620 122" />

                  <path d="M14 183L76 152L135 176L208 143L275 166L352 129L421 158L498 137L612 176" />

                  <path d="M0 250L67 219L124 245L193 212L267 232L341 200L414 228L484 205L620 244" />

                  <path d="M24 313L104 275L171 304L239 277L314 298L393 265L458 295L530 271L614 311" />
                </g>

                {/* Red */}

                {networkLines.map(
                  (
                    [x1, y1, x2, y2],

                    index,
                  ) => (
                    <line
                      key={index}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={index % 5 === 0 ? "#55E9FF" : "#129ED3"}
                      strokeWidth={index % 5 === 0 ? "1.4" : ".9"}
                      opacity={index % 5 === 0 ? ".95" : ".65"}
                    />
                  ),
                )}

                {/* Cauce */}

                <path
                  d="
                    M42 314
                    C95 275 125 246 170 227
                    C214 207 250 212 291 193
                    C336 172 347 141 390 134
                    C438 126 465 165 512 142
                    C551 123 571 87 612 63
                  "

                  fill="none"
                  stroke="#44E8FF"
                  strokeWidth="3.4"
                  opacity=".90"
                />

                <path
                  d="
                    M42 314
                    C95 275 125 246 170 227
                    C214 207 250 212 291 193
                    C336 172 347 141 390 134
                    C438 126 465 165 512 142
                    C551 123 571 87 612 63
                  "

                  fill="none"
                  stroke="#00A9E7"
                  strokeWidth="9"
                  opacity=".10"
                />

                {/* Nodos */}

                {networkNodes.map(({ cx, cy, level }) => {
                  const color = getRiskColor(level);

                  return (
                    <g key={`${cx}-${cy}`}>
                      <circle cx={cx} cy={cy} r="11" fill={`${color}18`} />

                      <circle
                        cx={cx}
                        cy={cy}
                        r="5.2"
                        fill="#031827"
                        stroke={color}
                        strokeWidth="2"
                      />

                      <circle cx={cx} cy={cy} r="2.1" fill={color} />
                    </g>
                  );
                })}
              </svg>

              {/* LEYENDA */}

              <div
                className="
                  absolute
                  right-3
                  top-3
                  z-20

                  rounded-lg

                  border
                  border-[#36D9FF]/16

                  bg-[#031B2C]/85

                  p-2.5

                  text-[8px]
                  text-white/52

                  backdrop-blur-md
                "
              >
                <p
                  className="
                    mb-2
                    font-medium
                    text-white/70
                  "
                >
                  {tr("Nivel de riesgo")}
                </p>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#FF4D67]" />
                    {tr("Alto")}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#FFC72E]" />
                    {tr("Medio")}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#36D9FF]" />
                    {tr("Bajo")}
                  </div>
                </div>
              </div>

              <div
                className="
                  absolute
                  bottom-3
                  left-3

                  flex
                  items-center
                  gap-2

                  rounded-lg

                  border
                  border-[#36D9FF]/12

                  bg-[#031B2B]/70

                  px-2.5
                  py-1.5

                  text-[8px]
                  text-white/45

                  backdrop-blur-md
                "
              >
                <Layers3
                  className="
                    size-3
                    text-[#63E7FF]
                  "
                />

                {selectedView.subtitle}
              </div>
            </section>

            {/* ==================================================
                 GRÁFICOS
              =================================================== */}

            {!compact && (
              <div
                className="
                  grid
                  gap-3
                  md:grid-rows-2
                "
              >
                {/* GRÁFICO SUPERIOR */}

                <section
                  className="
                    relative

                    overflow-hidden

                    rounded-xl

                    border
                    border-[#36D9FF]/12

                    bg-[#041D2F]/88

                    p-3.5
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <div>
                      <p
                        className="
                          text-[9px]
                          font-medium
                          text-white/68
                        "
                      >
                        {selectedView.topChart}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[7px]
                          text-white/30
                        "
                      >
                        {tr("Actualizaci\xF3n autom\xE1tica")}
                      </p>
                    </div>

                    <CloudRain
                      className="
                        size-4
                        text-[#63E7FF]
                      "
                    />
                  </div>

                  <div
                    className="
                      absolute
                      inset-x-4
                      bottom-7

                      flex
                      h-[72px]
                      items-end
                      gap-[3px]
                    "
                  >
                    {forecastBars.map((value, index) => (
                      <div
                        key={`${value}-${index}`}
                        className="
                            flex-1

                            rounded-t-[2px]

                            bg-gradient-to-t
                            from-[#006FAF]
                            to-[#47E7FF]

                            shadow-[0_0_5px_rgba(71,231,255,0.18)]
                          "

                        style={{
                          height: `${value}%`,
                        }}
                      />
                    ))}
                  </div>

                  <div
                    className="
                      absolute
                      inset-x-4
                      bottom-3

                      flex
                      justify-between

                      text-[6px]
                      text-white/25
                    "
                  >
                    <span>{tr("Ahora")}</span>
                    <span>12 h</span>
                    <span>24 h</span>
                    <span>48 h</span>
                  </div>
                </section>

                {/* GRÁFICO INFERIOR */}

                <section
                  className="
                    relative

                    overflow-hidden

                    rounded-xl

                    border
                    border-[#36D9FF]/12

                    bg-[#041D2F]/88

                    p-3.5
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <div>
                      <p
                        className="
                          text-[9px]
                          font-medium
                          text-white/68
                        "
                      >
                        {selectedView.bottomChart}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[7px]
                          text-white/30
                        "
                      >
                        {tr("Observado / pronosticado")}
                      </p>
                    </div>

                    <BarChart3
                      className="
                        size-4
                        text-[#63E7FF]
                      "
                    />
                  </div>

                  <svg
                    viewBox="0 0 220 80"
                    className="
                      absolute
                      inset-x-3
                      bottom-4

                      h-[75px]
                      w-[calc(100%-1.5rem)]
                    "

                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="
                        M0 66
                        C25 65 35 57 55 51
                        C76 45 83 28 101 20
                        C118 12 131 17 144 28
                        C160 42 171 47 186 45
                        C198 43 207 42 220 43
                      "

                      fill="none"
                      stroke="#49E8FF"
                      strokeWidth="2"
                    />

                    <path
                      d="
                        M0 68
                        C23 66 38 59 59 55
                        C80 51 88 36 105 29
                        C123 22 135 24 149 34
                        C166 47 176 51 192 49
                        C204 48 213 48 220 48
                      "

                      fill="none"
                      stroke="#7C7DFF"
                      strokeWidth="1.4"
                      opacity=".75"
                    />

                    <path
                      d="
                        M0 70
                        C25 68 35 60 55 53
                        C76 46 83 28 101 20
                        C118 12 131 17 144 28
                        C160 42 171 47 186 45
                        C198 43 207 42 220 43
                        L220 78
                        L0 78
                        Z
                      "

                      fill="rgba(54,217,255,0.07)"
                    />

                    <circle cx="101" cy="20" r="3" fill="#B9FAFF" />

                    <circle cx="101" cy="20" r="8" fill="rgba(54,217,255,0.10)" />
                  </svg>
                </section>
              </div>
            )}
          </div>

          {/* ==================================================
               MÉTRICAS DINÁMICAS
            =================================================== */}

          <div
            className={cn(
              `
                relative
                z-20

                mt-3

                grid
                gap-2
              `,
              compact ? "grid-cols-2" : "grid-cols-2 md:grid-cols-4",
            )}
          >
            {selectedView.metrics.map(
              (
                [label, value, unit],

                index,
              ) => {
                const MetricIcon = metricIcons[index] ?? Activity;

                return (
                  <article
                    key={label}
                    className="
                      relative

                      overflow-hidden

                      rounded-xl

                      border
                      border-[#36D9FF]/12

                      bg-[#041E31]/90

                      p-3

                      transition-all
                      duration-300

                      shadow-[inset_0_0_16px_rgba(54,217,255,0.025)]
                    "
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="
                          grid
                          size-8
                          shrink-0
                          place-items-center

                          rounded-lg

                          bg-[#36D9FF]/10

                          text-[#63E7FF]
                        "
                      >
                        <MetricIcon className="size-4" />
                      </span>

                      <div className="min-w-0">
                        <p
                          className="
                            truncate

                            text-[7px]
                            uppercase
                            tracking-[0.08em]

                            text-white/32
                          "
                        >
                          {label}
                        </p>

                        <div
                          className="
                            mt-0.5

                            flex
                            items-baseline
                            gap-1
                          "
                        >
                          <strong
                            className="
                              font-display
                              text-sm
                              font-semibold
                              text-white

                              md:text-base
                            "
                          >
                            {value}
                          </strong>

                          {unit && (
                            <span
                              className="
                                text-[7px]
                                text-white/38
                              "
                            >
                              {unit}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              },
            )}
          </div>
        </main>
      </div>

      {/* ======================================================
           FILO LUMINOSO
        ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-[5%]
          top-0

          h-px

          bg-gradient-to-r
          from-transparent
          via-[#8AF3FF]/65
          to-transparent

          shadow-[0_0_10px_rgba(54,217,255,0.50)]
        "
      />
    </div>
  );
}
