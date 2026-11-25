import { tr } from "@/i18n/translations";
import { createFileRoute } from "@tanstack/react-router";
import { CloudRain, Droplets, Gauge, ShieldCheck, TrendingUp } from "lucide-react";
import { Features, ProductDemoCTA, ProductSection } from "@/components/taranis/home-sections";
import { ProductSeoSection } from "@/components/taranis/editorial";
import { breadcrumbSchema, seoHead, softwareSchema } from "@/lib/seo";
export const Route = createFileRoute("/producto")({
  head: () =>
    seoHead({
      title: "Plataforma de predicción y alerta de inundaciones | TARANIS",
      description:
        "Descubre TARANIS: plataforma de predicción hidrológica, integración de datos, visualización geoespacial y alerta temprana de inundaciones.",
      path: "/producto",
      type: "product",
      structuredData: [
        softwareSchema,
        breadcrumbSchema([
          {
            name: tr("Inicio"),
            path: "/",
          },
          {
            name: tr("Producto"),
            path: "/producto",
          },
        ]),
      ],
    }),
  component: ProductPage,
});

/* ============================================================

   HERO PRODUCTO

============================================================ */

function ProductHero() {
  return (
    <section
      className="

        dark-band

        relative

        min-h-[820px]

        overflow-hidden

        pt-28

        lg:min-h-[880px]

        lg:pt-32

      "
    >
      {/* ======================================================
            RETÍCULA
        ======================================================= */}

      <div
        className="

          pointer-events-none

          absolute

          inset-0

          opacity-[0.24]

        "
        style={{
          backgroundImage: `

            linear-gradient(

              rgba(36, 139, 196, 0.15) 1px,

              transparent 1px

            ),

            linear-gradient(

              90deg,

              rgba(36, 139, 196, 0.15) 1px,

              transparent 1px

            )

          `,
          backgroundSize: "54px 54px",
        }}
      />

      {/* ======================================================
            PUNTOS DE DATOS
        ======================================================= */}

      <div
        className="

          pointer-events-none

          absolute

          inset-0

          opacity-[0.38]

        "
        style={{
          backgroundImage: "radial-gradient(circle, rgba(57,217,255,0.72) 1px, transparent 1.5px)",
          backgroundSize: "105px 105px",
        }}
      />

      {/* ======================================================
            GLOW PRINCIPAL DERECHO
        ======================================================= */}

      <div
        className="

          pointer-events-none

          absolute

          right-[-10%]

          top-[4%]



          h-[720px]

          w-[820px]



          rounded-full



          bg-[#00AEEF]/[0.18]

          blur-[150px]

        "
      />

      {/* ======================================================
            GLOW INFERIOR
        ======================================================= */}

      <div
        className="

          pointer-events-none

          absolute

          bottom-[-220px]

          left-[18%]



          h-[420px]

          w-[65%]



          rounded-full



          bg-[#00D7E8]/[0.10]

          blur-[140px]

        "
      />

      {/* ======================================================
            ONDAS SUPERIORES
        ======================================================= */}

      <svg
        className="

          pointer-events-none

          absolute

          right-[-4%]

          top-[3%]



          h-[310px]

          w-[68%]



          opacity-[0.78]

        "
        viewBox="0 0 1100 300"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="

            M0 165

            C150 210 210 70 370 105

            C540 143 610 40 760 84

            C900 124 950 190 1100 145

          "
          stroke="#1BAEEA"
          strokeWidth="1.6"
          opacity=".88"
        />

        <path
          d="

            M0 192

            C145 230 230 102 380 132

            C530 161 620 78 770 110

            C900 138 975 210 1100 175

          "
          stroke="#39D9FF"
          strokeWidth="1.35"
          opacity=".86"
        />

        <path
          d="

            M0 138

            C160 175 220 34 382 74

            C540 112 620 14 780 52

            C920 85 970 152 1100 118

          "
          stroke="#7CEEFF"
          strokeWidth="1.15"
          opacity=".72"
        />

        {/* Línea adicional para aumentar profundidad */}

        <path
          d="

            M40 220

            C175 250 260 145 405 164

            C565 184 650 115 805 140

            C940 162 1010 218 1130 190

          "
          stroke="#168FD0"
          strokeWidth=".9"
          opacity=".48"
        />
      </svg>

      {/* ======================================================
            ONDAS INFERIORES
        ======================================================= */}

      <svg
        className="

          pointer-events-none

          absolute

          bottom-[-30px]

          left-[-5%]



          h-[250px]

          w-[72%]



          opacity-[0.62]

        "
        viewBox="0 0 900 250"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="

            M0 220

            C120 130 225 215 345 150

            C465 85 570 190 690 125

            C780 78 840 98 920 55

          "
          stroke="#1AA8E0"
          strokeWidth="1.45"
          opacity=".82"
        />

        <path
          d="

            M0 242

            C140 160 235 230 360 172

            C475 119 590 206 705 149

            C810 96 855 120 930 84

          "
          stroke="#7CEEFF"
          strokeWidth="1.15"
          opacity=".78"
        />

        <path
          d="

            M-20 198

            C120 115 225 188 344 124

            C470 57 570 160 700 98

            C790 54 850 67 930 27

          "
          stroke="#1577B7"
          strokeWidth=".85"
          opacity=".48"
        />
      </svg>

      {/* ======================================================
            CONTENIDO
        ======================================================= */}

      <div
        className="

          section-shell

          relative

          z-10

        "
      >
        <div
          className="

            grid

            min-h-[670px]

            items-center

            gap-16



            lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]

            lg:gap-8

          "
        >
          {/* ==================================================
                TEXTO
            =================================================== */}
          <div className="relative z-30 min-w-0">
            <div
              className="
                mb-7
                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  h-px
                  w-9
                  bg-[#39D9FF]
                  shadow-[0_0_8px_rgba(57,217,255,0.85),0_0_18px_rgba(57,217,255,0.35)]
                "
              />
              <p
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-primary
                  sm:text-xs

                "
              >
                {tr("Producto")}
              </p>
            </div>

            <h1
              className="
                title-page hero-title-product
                max-w-[690px]
                text-on-dark
              "
            >
              Inteligencia
              <br />
              {tr("hidrol\xF3gica,")}
              <br />
              <span className="text-primary">{tr("en operaci\xF3n.")}</span>
            </h1>
            <p
              className="
                mt-8
                max-w-[570px]
                text-base
                leading-7
                text-on-dark/68
                sm:text-lg
                sm:leading-8
              "
            >
              {tr(
                "Una plataforma para integrar datos, ejecutar modelos y convertir escenarios complejos en una lectura territorial clara.",
              )}
            </p>

            {/* Indicador inferior */}

            <div
              className="

                mt-9

                flex

                items-center

                gap-4

              "
            >
              <span
                className="

                  size-2



                  rounded-full



                  bg-[#39D9FF]



                  shadow-[0_0_12px_rgba(57,217,255,1),0_0_25px_rgba(57,217,255,0.45)]

                "
              />

              <p
                className="

                  text-sm

                  text-on-dark/55

                "
              >
                {tr("Datos \xB7 Modelos \xB7 Predicci\xF3n \xB7 Decisi\xF3n")}
              </p>
            </div>
          </div>

          {/* ==================================================
                COMPOSICIÓN VISUAL
            =================================================== */}

          <div
            className="

              relative



              mx-auto

              w-full



              min-w-0
              max-w-full
              lg:px-5
              lg:py-6

            "
          >
            {/* Glow detrás del dashboard */}

            <div
              className="

                pointer-events-none

                absolute



                -inset-[14%]



                rounded-[50%]



                bg-[#00C6F4]/[0.16]



                blur-[90px]

              "
            />

            {/* Segundo halo */}

            <div
              className="

                pointer-events-none

                absolute



                right-[10%]

                top-[15%]



                h-[65%]

                w-[70%]



                rounded-full



                bg-[#39D9FF]/[0.08]



                blur-[70px]

              "
            />

            {/* Perspectiva */}

            <div
              className="

                relative

                [perspective:1800px]

              "
            >
              {/* sombra */}

              <div
                className="

                  pointer-events-none

                  absolute



                  bottom-[-35px]

                  left-[8%]



                  h-20

                  w-[84%]



                  rounded-full



                  bg-black/55



                  blur-3xl

                "
              />

              {/* ==================================================
                    DASHBOARD
                =================================================== */}

              <div
                className="

                  relative

                  z-10



                  overflow-hidden



                  rounded-[26px]



                  border

                  border-[#39D9FF]/70



                  bg-[#031B2D]



                  shadow-[0_32px_100px_rgba(0,0,0,0.58),0_0_38px_rgba(57,217,255,0.24),0_0_12px_rgba(57,217,255,0.42)]



                  lg:[transform:rotateY(-8deg)_rotateX(2deg)_rotateZ(-1deg)]

                "
              >
                {/* Barra superior */}

                <div
                  className="

                    flex

                    h-10

                    items-center

                    justify-between



                    border-b

                    border-[#39D9FF]/22



                    bg-[#062941]/95



                    px-4

                  "
                >
                  <div className="flex gap-1.5">
                    <span
                      className="

                        size-1.5

                        rounded-full

                        bg-[#39D9FF]



                        shadow-[0_0_6px_rgba(57,217,255,0.9)]

                      "
                    />

                    <span className="size-1.5 rounded-full bg-white/20" />

                    <span className="size-1.5 rounded-full bg-white/20" />
                  </div>

                  <span
                    className="

                      text-[9px]

                      uppercase

                      tracking-[0.18em]

                      text-white/45

                    "
                  >
                    TARANIS · Ávila
                  </span>

                  <span
                    className="

                      text-[9px]

                      text-white/35

                    "
                  >
                    {tr("Tiempo real")}
                  </span>
                </div>

                {/* ==================================================
                      MAPA REAL
                  =================================================== */}

                <div
                  className="

                    relative



                    aspect-[1.64/1]



                    overflow-hidden

                  "
                >
                  <img
                    src="/images/producto/taranis-product-hero-map.png"
                    alt="Mapa de TARANIS mostrando cartografía territorial y zonas potencialmente afectadas por inundación en Ávila"
                    width={1822}
                    height={832}
                    fetchPriority="high"
                    className="

                      absolute

                      inset-0



                      size-full



                      object-cover



                      brightness-[0.84]

                      contrast-[1.4]

                      saturate-[1.8]

                    "
                  />

                  {/* Capa cromática */}

                  <div
                    className="

                      pointer-events-none

                      absolute

                      inset-0



                      bg-gradient-to-tr



                      from-[#001827]/42

                      via-[#003950]/12

                      to-[#00B8E6]/16



                      mix-blend-multiply

                    "
                  />

                  {/* Vignette suavizada */}

                  <div
                    className="

                      pointer-events-none

                      absolute

                      inset-0



                      bg-[radial-gradient(circle_at_55%_48%,transparent_24%,rgba(0,18,31,0.03)_46%,rgba(0,18,31,0.46)_100%)]

                    "
                  />

                  {/* Halo central */}

                  <div
                    className="

                      pointer-events-none

                      absolute



                      left-[55%]

                      top-[38%]



                      size-48



                      -translate-x-1/2

                      -translate-y-1/2



                      rounded-full



                      bg-[#39D9FF]/18



                      blur-3xl

                    "
                  />

                  {/* Halo río */}

                  <div
                    className="

                      pointer-events-none

                      absolute



                      left-[61%]

                      top-[49%]



                      h-14

                      w-[55%]



                      -translate-x-1/2

                      -translate-y-1/2



                      rotate-[-15deg]



                      rounded-full



                      bg-[#00CFFF]/10



                      blur-2xl

                    "
                  />

                  {/* Nodo 1 */}

                  <span
                    className="

                      absolute

                      left-[58%]

                      top-[42%]



                      size-4



                      rounded-full



                      border-2

                      border-[#B6FAFF]



                      bg-[#00C8E8]



                      shadow-[0_0_9px_rgba(182,250,255,1),0_0_22px_rgba(57,217,255,0.85)]

                    "
                  />

                  {/* Nodo 2 */}

                  <span
                    className="

                      absolute

                      left-[70%]

                      top-[32%]



                      size-3



                      rounded-full



                      border

                      border-[#C7FCFF]



                      bg-[#39D9FF]



                      shadow-[0_0_8px_rgba(199,252,255,0.95),0_0_18px_rgba(57,217,255,0.85)]

                    "
                  />
                </div>

                {/* Borde interior */}

                <div
                  className="

                    pointer-events-none

                    absolute

                    inset-0



                    rounded-[26px]



                    ring-1

                    ring-inset

                    ring-[#9CE8FF]/30

                  "
                />
              </div>
            </div>

            {/* ==================================================
                  TARJETA · PRECIPITACIÓN
              =================================================== */}

            <div
              className="

                absolute



                left-0

                top-[20%]



                z-30



                hidden

                min-w-[185px]



                rounded-2xl



                border

                border-[#39D9FF]/65



                bg-[#052A44]/95



                p-4



                text-white



                shadow-[0_0_18px_rgba(57,217,255,0.22),0_0_35px_rgba(57,217,255,0.10),0_18px_45px_rgba(0,0,0,0.30)]



                backdrop-blur-xl



                md:block

              "
            >
              <div className="flex items-center gap-3">
                <span
                  className="

                    grid

                    size-9

                    place-items-center



                    rounded-xl



                    bg-[#39D9FF]/12

                  "
                >
                  <CloudRain
                    className="

                      size-5



                      text-[#7CEEFF]



                      drop-shadow-[0_0_5px_rgba(124,238,255,0.75)]

                    "
                  />
                </span>

                <div>
                  <p
                    className="

                      text-[9px]

                      uppercase

                      tracking-[0.12em]

                      text-white/45

                    "
                  >
                    {tr("Precipitaci\xF3n")}
                  </p>

                  <p
                    className="

                      mt-1

                      font-display

                      text-xl

                      font-semibold

                    "
                  >
                    38.4
                    <span className="ml-1 text-xs text-white/45">mm</span>
                  </p>
                </div>
              </div>
            </div>

            {/* ==================================================
                  TARJETA · CAUDAL
              =================================================== */}

            <div
              className="

                absolute



                left-0

                bottom-[14%]



                z-30



                hidden

                min-w-[205px]



                rounded-2xl



                border

                border-[#39D9FF]/55



                bg-[#052A44]/95



                p-4



                text-white



                shadow-[0_0_18px_rgba(57,217,255,0.18),0_0_30px_rgba(57,217,255,0.08),0_18px_45px_rgba(0,0,0,0.32)]



                backdrop-blur-xl



                lg:block

              "
            >
              <div className="flex items-center gap-3">
                <span
                  className="

                    grid

                    size-9

                    place-items-center



                    rounded-xl



                    bg-[#39D9FF]/12

                  "
                >
                  <Droplets
                    className="

                      size-5



                      text-[#7CEEFF]



                      drop-shadow-[0_0_5px_rgba(124,238,255,0.75)]

                    "
                  />
                </span>

                <div>
                  <p
                    className="

                      text-[9px]

                      uppercase

                      tracking-[0.12em]

                      text-white/45

                    "
                  >
                    {tr("Caudal")}
                  </p>

                  <p
                    className="

                      mt-1

                      font-display

                      text-lg

                      font-semibold

                    "
                  >
                    42.8 m³/s
                  </p>
                </div>

                <TrendingUp
                  className="

                    ml-auto

                    size-4



                    text-[#7CEEFF]



                    drop-shadow-[0_0_5px_rgba(124,238,255,0.65)]

                  "
                />
              </div>
            </div>

            {/* ==================================================
                  TARJETA · NIVEL
              =================================================== */}

            <div
              className="

                absolute



                right-0

                top-[12%]



                z-30



                hidden

                min-w-[175px]



                rounded-2xl



                border

                border-[#39D9FF]/65



                bg-[#052A44]/95



                p-4



                text-white



                shadow-[0_0_18px_rgba(57,217,255,0.22),0_0_35px_rgba(57,217,255,0.10),0_18px_45px_rgba(0,0,0,0.32)]



                backdrop-blur-xl



                xl:block

              "
            >
              <div className="flex items-center gap-3">
                <Gauge
                  className="

                    size-6



                    text-[#7CEEFF]



                    drop-shadow-[0_0_6px_rgba(124,238,255,0.75)]

                  "
                />

                <div>
                  <p
                    className="

                      text-[9px]

                      uppercase

                      tracking-[0.12em]

                      text-white/45

                    "
                  >
                    {tr("Nivel")}
                  </p>

                  <p className="mt-1 font-display text-xl font-semibold">1.82 m</p>

                  <p className="mt-1 text-[10px] text-[#7CEEFF]">↑ +0.21 m</p>
                </div>
              </div>
            </div>

            {/* ==================================================
                  TARJETA · ESTADO
              =================================================== */}

            <div
              className="

                absolute



                right-[0%]

                bottom-[17%]



                z-30



                hidden

                min-w-[165px]



                rounded-2xl



                border

                border-[#39D9FF]/55



                bg-[#052A44]/95



                p-4



                text-white



                shadow-[0_0_18px_rgba(57,217,255,0.18),0_0_30px_rgba(57,217,255,0.08),0_18px_45px_rgba(0,0,0,0.32)]



                backdrop-blur-xl



                xl:block

              "
            >
              <div className="flex items-center gap-3">
                <ShieldCheck
                  className="

                    size-6



                    text-[#7CEEFF]



                    drop-shadow-[0_0_6px_rgba(124,238,255,0.75)]

                  "
                />

                <div>
                  <p
                    className="

                      text-[9px]

                      uppercase

                      tracking-[0.12em]

                      text-white/45

                    "
                  >
                    {tr("Estado")}
                  </p>

                  <div
                    className="

                      mt-2

                      flex

                      items-center

                      gap-2

                    "
                  >
                    <span
                      className="

                        size-2



                        rounded-full



                        bg-emerald-400



                        shadow-[0_0_10px_rgba(52,211,153,0.95),0_0_18px_rgba(52,211,153,0.35)]

                      "
                    />

                    <span className="font-display text-sm">{tr("Vigilancia")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================
           FADE INFERIOR
        ======================================================= */}

      <div
        className="

          pointer-events-none

          absolute

          inset-x-0

          bottom-0



          h-24



          bg-gradient-to-b

          from-transparent

          to-deep/20

        "
      />
    </section>
  );
}

/* ============================================================

   PRODUCT PAGE

============================================================ */

export function ProductPage() {
  return (
    <main>
      {/* BLOQUE 1 · HERO */}

      <ProductHero />

      {/* BLOQUE 2 · DATOS → RIESGO */}

      <ProductSeoSection />

      {/* BLOQUE 3 · PLATAFORMA */}

      <ProductSection />

      {/* BLOQUE 4 · CAPACIDADES */}

      <Features />

      {/* BLOQUE 5 · SOLICITAR DEMO */}

      <ProductDemoCTA />
    </main>
  );
}
