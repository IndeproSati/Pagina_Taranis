import { tr, localizeDeep } from "@/i18n/translations";
import { getActiveLocale, localizedPath, type Locale } from "@/i18n/config";
import { useState, type FormEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Building2,
  BrainCircuit,
  BarChart3,
  Bell,
  Check,
  CirclePlay,
  CloudRain,
  Clock3,
  Database,
  Droplets,
  Factory,
  Gauge,
  Layers3,
  Map,
  Network,
  Radar,
  RadioTower,
  Route,
  Satellite,
  Waypoints,
  ShieldCheck,
  Sparkles,
  Settings2,
  Target,
  Waves,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ProductMockup } from "./product-mockup";
import { SectionHeader } from "./shared";
import { cn } from "@/lib/utils";

/* HERO */
export function Hero() {
  return (
    <section
      className="
          dark-band
          relative
          min-h-[940px]
          overflow-hidden
          pb-24
          pt-28
          lg:min-h-[980px]
          lg:pb-24
          lg:pt-32
        "
    >
      {/* FONDO BASE */}
      <div className="pointer-events-none absolute inset-0 grid-field opacity-25" />

      <div
        className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            z-[1]
            h-[520px]
            bg-gradient-to-b
            from-deep
            via-deep/95
            to-transparent
          "
      />

      <div
        className="
            pointer-events-none
            absolute
            -left-[12%]
            top-[18%]
            z-[1]
            h-[650px]
            w-[650px]
            rounded-full
            bg-primary/[0.05]
            blur-[130px]
          "
      />

      <div
        className="
            pointer-events-none
            absolute
            right-[-12%]
            top-[8%]
            z-[1]
            h-[780px]
            w-[980px]
            rounded-full
            bg-cyan-400/[0.07]
            blur-[160px]
          "
      />

      {/*  CURVAS TOPOGRÁFICAS */}

      <svg
        className="
            pointer-events-none
            absolute
            right-0
            top-10
            z-[2]
            hidden
            h-[430px]
            w-[760px]
            opacity-30
            lg:block
          "
        viewBox="0 0 760 430"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M40 260C120 80 280 20 470 85C620 135 680 80 760 20"
          stroke="var(--primary)"
          strokeWidth="1.2"
        />

        <path
          d="M45 280C125 105 285 45 470 105C615 150 680 105 760 45"
          stroke="var(--primary)"
          strokeWidth="1"
          opacity=".75"
        />

        <path
          d="M55 300C140 135 290 75 470 125C610 165 675 135 760 75"
          stroke="var(--primary)"
          strokeWidth="1"
          opacity=".55"
        />

        <path
          d="M70 320C160 160 310 105 480 145C620 180 690 160 760 110"
          stroke="var(--primary)"
          strokeWidth="1"
          opacity=".35"
        />
      </svg>

      {/*  PAISAJE NEON */}

      <div
        className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-[2]
            h-[440px]
            overflow-hidden
            sm:h-[500px]
            lg:h-[560px]
          "
      >
        <img
          src="/images/neon_river_digital_valley.png"
          alt=""
          aria-hidden="true"
          className="
              absolute
              inset-x-0
              bottom-0
              h-full
              w-full
              object-cover
              object-bottom
              opacity-95
              lg:scale-[1.03]
            "
        />

        <div
          className="
              absolute
              inset-0
              bg-gradient-to-b
              from-deep
              via-deep/20
              to-transparent
            "
        />

        <div
          className="
              absolute
              inset-y-0
              left-0
              w-[55%]
              bg-gradient-to-r
              from-deep
              via-deep/70
              to-transparent
            "
        />

        <div
          className="
              absolute
              bottom-[3%]
              left-[32%]
              h-[140px]
              w-[55%]
              rounded-full
              bg-primary/[0.08]
              blur-[70px]
            "
        />
      </div>
      {/* CONTENIDO */}
      <div className="section-shell relative z-10">
        <div
          className="
              grid
              items-center
              gap-14
              lg:grid-cols-[0.76fr_1.24fr]
              lg:gap-0
            "
        >
          {/* TEXTO */}
          <div className="relative z-30 max-w-[650px]">
            <div className="mb-7 flex items-center gap-5">
              <span className="h-px w-10 bg-primary" />

              <p
                className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-on-dark/85
                    sm:text-xs
                  "
              >
                {tr("Alerta temprana de inundaciones")}
              </p>
            </div>

            <h1
              className="
                  max-w-[720px]
                  font-display
                  text-[clamp(3.8rem,5.7vw,6.2rem)]
                  font-semibold
                  leading-[0.9]
                  tracking-[-0.05em]
                  text-on-dark
                "
            >
              {tr("Anticipa la")}

              <br />
              {tr("inundaci\xF3n.")}

              <br />

              <span className="text-primary">{tr("Decide antes.")}</span>
            </h1>

            <p
              className="
                  mt-8
                  max-w-[590px]
                  text-base
                  leading-7
                  text-on-dark/70
                  sm:text-lg
                  sm:leading-8
                "
            >
              {tr(
                "TARANIS combina datos hidrometeorol\xF3gicos, modelizaci\xF3n, inteligencia artificial e inteligencia geoespacial para convertir informaci\xF3n compleja en predicciones y alertas accionables que apoyan la toma de decisiones.",
              )}
            </p>

            <div
              className="
                  mt-9
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                  sm:items-center
                "
            >
              <Button
                asChild
                variant="hero"
                size="xl"
                className="
                    min-w-[235px]
                    rounded-full
                    shadow-[0_0_35px_rgba(0,225,235,0.16)]
                  "
              >
                <Link to={localizedPath("/contacto")}>
                  {tr("Solicitar una demo")}

                  <ArrowRight className="size-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="glass"
                size="xl"
                className="
                    min-w-[225px]
                    rounded-full
                    border-primary/55
                    bg-deep/30
                    backdrop-blur-md
                  "
              >
                <a href="#demo">
                  <CirclePlay className="size-5" />
                  {tr("Ver c\xF3mo funciona")}
                </a>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-7 bg-on-dark/70" />

              <p className="text-base text-on-dark/85">
                {tr("NOS ANTICIPAMOS PARA PROTEGER")}
              </p>
            </div>
          </div>
          {/* DASHBOARD */}
          <div
            className="
                relative
                z-20
                mx-auto
                w-full
  
                lg:w-[132%]
                lg:max-w-none
  
                lg:translate-x-[-265px]
                lg:-translate-y-[-75px]
              "
          >
            {/* Halo ambiental */}
            <div
              className="
                  pointer-events-none
                  absolute
                  -inset-14
                  rounded-[3rem]
                  bg-primary/[0.10]
                  blur-[100px]
                "
            />

            {/* Perspectiva */}
            <div className="relative [perspective:1800px]">
              {/* Sombra inferior */}
              <div
                className="
                    pointer-events-none
                    absolute
                    bottom-[-42px]
                    left-[10%]
                    z-0
                    h-24
                    w-[84%]
                    rounded-full
                    bg-black/55
                    blur-3xl
                  "
              />

              {/* DASHBOARD + MARCO */}
              <div
                className="
                    relative
                    z-10
                    overflow-visible
                    rounded-[28px]
                    bg-deep
  
                    shadow-[0_38px_120px_rgba(0,0,0,0.72),0_0_34px_rgba(0,225,235,0.24),0_0_8px_rgba(103,232,249,0.42)]
  
                    transition-transform
                    duration-700
  
                    lg:origin-right
                    lg:[transform:rotateY(-27.7deg)_rotateX(3deg)_rotateZ(-2deg)_scale(0.9)]
                  "
              >
                {/* CONTENEDOR DE LA IMAGEN */}
                <div
                  className="
                      relative
                      overflow-hidden
                      rounded-[28px]
                      bg-deep
                    "
                >
                  {/* Dashboard real */}
                  <img
                    src="/images/taranis-dashboard-medina.png"
                    alt="Plataforma TARANIS mostrando predicción hidrológica, estaciones de aforo, cartografía de inundación, hidrograma e hietograma en Medina del Campo"
                    width={1815}
                    height={830}
                    fetchPriority="high"
                    className="
                        relative
                        z-0
                        block
  
                        aspect-[2.18/1]
                        w-full
                        object-cover
  
                        brightness-[0.9]
                        contrast-[1.2]
                        saturate-[1.4]
                      "
                  />

                  {/* Integración cromática más ligera */}
                  <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        z-10
  
                        bg-gradient-to-tr
                        from-cyan-950/[0.08]
                        via-transparent
                        to-primary/[0.04]
  
                        mix-blend-multiply
                      "
                  />

                  {/* Ligero reflejo interior */}
                  <div
                    className="
                        pointer-events-none
                        absolute
                        inset-x-0
                        top-0
                        z-20
                        h-px
  
                        bg-gradient-to-r
                        from-transparent
                        via-white/30
                        to-transparent
                      "
                  />
                </div>

                {/* MARCO NEON EXTERIOR */}
                <div
                  className="
                      pointer-events-none
                      absolute
                      -inset-[8px]
                      z-30
  
                      rounded-[34px]
  
                      border-[3px]
                      border-cyan-300/70
  
                      shadow-[0_0_9px_rgba(103,232,249,0.90),0_0_22px_rgba(34,211,238,0.48),inset_0_0_10px_rgba(34,211,238,0.10)]
                    "
                />

                {/* Segundo filo, muy próximo al marco principal */}
                <div
                  className="
                      pointer-events-none
                      absolute
                      -inset-[6px]
                      z-30
  
                      rounded-[33px]
  
                      ring-1
                      ring-inset
                      ring-primary/35
                    "
                />

                {/* LÍNEA SUPERIOR */}
                <div
                  className="
                      pointer-events-none
                      absolute
  
                      left-[5%]
                      right-[1.5%]
                      top-[-8px]
  
                      z-40
                      h-[3px]
                      rounded-full
  
                      bg-gradient-to-r
                      from-transparent
                      via-cyan-100
                      to-primary
  
                      shadow-[0_0_12px_rgba(165,243,252,1),0_0_25px_rgba(34,211,238,0.65),0_0_40px_rgba(34,211,238,0.28)]
                    "
                />

                {/* LÍNEA INFERIOR */}
                <div
                  className="
                      pointer-events-none
                      absolute
  
                      bottom-[-8px]
                      left-[7%]
                      right-[2%]
  
                      z-40
                      h-[3px]
                      rounded-full
  
                      bg-gradient-to-r
                      from-transparent
                      via-primary
                      to-cyan-100
  
                      shadow-[0_0_12px_rgba(34,211,238,1),0_0_26px_rgba(34,211,238,0.65),0_0_42px_rgba(34,211,238,0.30)]
                    "
                />

                {/* LATERAL DERECHO */}
                <div
                  className="
                      pointer-events-none
                      absolute
  
                      bottom-[4%]
                      right-[-8px]
                      top-[4%]
  
                      z-40
                      w-[3px]
                      rounded-full
  
                      bg-gradient-to-b
                      from-transparent
                      via-cyan-100
                      to-primary
  
                      shadow-[0_0_13px_rgba(165,243,252,1),0_0_26px_rgba(34,211,238,0.60)]
                    "
                />

                {/* LATERAL IZQUIERDOMás discreto por la perspectiva*/}
                <div
                  className="
                      pointer-events-none
                      absolute
  
                      bottom-[7%]
                      left-[-8px]
                      top-[7%]
  
                      z-40
                      w-[2px]
                      rounded-full
  
                      bg-gradient-to-b
                      from-transparent
                      via-primary/70
                      to-transparent
  
                      shadow-[0_0_11px_rgba(34,211,238,0.55)]
                    "
                />
              </div>
            </div>

            {/* Nodo territorial */}
            <span
              className="
                  pointer-events-none
                  absolute
                  -bottom-12
                  left-[48%]
                  hidden
                  size-2.5
                  rounded-full
                  bg-primary
                  shadow-[0_0_22px_var(--primary)]
                  lg:block
                "
            />
          </div>
        </div>
      </div>

      {/* Fade inferior */}
      <div
        className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-[5]
            h-20
            bg-gradient-to-b
            from-transparent
            to-deep/20
          "
      />
    </section>
  );
}
/* PROBLEMA + PIPELINE */
const processSteps = [
  {
    number: "01",
    title: "Lluvia",
    subtitle: "Detección meteorológica",
    badge: "Radar + precipitación",
    image: "/images/home/taranis-lluvia-radar.png",
    imageAlt: "Radar meteorológico de TARANIS mostrando precipitación sobre la península ibérica",
    Icon: Radar,
    imagePosition: "object-[15%_22%]",
  },
  {
    number: "02",
    title: "Escorrentía",
    subtitle: "Flujo sobre el río",
    badge: "Pluviómetros · Hietograma",
    image: "/images/home/taranis-escorrentia-pluviometros.png",
    imageAlt: "Pluviómetros de TARANIS y detalle de precipitación registrada en Valencia",
    Icon: Droplets,
    imagePosition: "object-[54%_50%]",
  },
  {
    number: "03",
    title: "Caudal",
    subtitle: "Evolución hidrológica",
    badge: "Aforos · hidrograma",
    image: "/images/home/taranis-caudal-aforos.png",
    imageAlt: "Estación de aforo e hidrograma de TARANIS para seguimiento del caudal",
    Icon: Waves,
    imagePosition: "object-[53%_50%]",
  },
  {
    number: "04",
    title: "Riesgo",
    subtitle: "Evaluación territorial del riesgo",
    badge: "Modelos predictivos",
    image: "/images/home/taranis-riesgo-modelos.png",
    imageAlt: "Cartografía y modelos predictivos de TARANIS para evaluación territorial del riesgo",
    Icon: Map,
    imagePosition: "object-[38%_50%]",
  },
] as const;

/* PIPELINE TARANIS */

const pipelineStages = [
  {
    number: "01",
    title: "Datos",
    Icon: Database,
    items: [
      {
        label: "AEMET y radar",
        Icon: CloudRain,
      },
      {
        label: "Estaciones y SAIH",
        Icon: RadioTower,
      },
      {
        label: "Copernicus",
        Icon: Satellite,
      },
      {
        label: "Cartografía territorial",
        Icon: Map,
      },
    ],
  },
  {
    number: "02",
    title: "Inteligencia",
    Icon: BrainCircuit,
    items: [
      {
        label: "Modelos hidrológicos",
        Icon: Settings2,
      },
      {
        label: "Inteligencia artificial",
        Icon: Network,
      },
      {
        label: "LSTM",
        Icon: Database,
      },
      {
        label: "Análisis histórico",
        Icon: BarChart3,
      },
    ],
  },
  {
    number: "03",
    title: "Predicción",
    Icon: BarChart3,
    items: [
      {
        label: "Precipitación",
        Icon: CloudRain,
      },
      {
        label: "Caudal",
        Icon: Waves,
      },
      {
        label: "Evolución temporal",
        Icon: Clock3,
      },
      {
        label: "Escenarios",
        Icon: Target,
      },
    ],
  },
  {
    number: "04",
    title: "Decisión",
    Icon: ShieldCheck,
    items: [
      {
        label: "Mapas",
        Icon: Map,
      },
      {
        label: "Alertas",
        Icon: Bell,
      },
      {
        label: "Indicadores",
        Icon: BarChart3,
      },
      {
        label: "Seguimiento territorial",
        Icon: Target,
      },
    ],
  },
] as const;
/*FLUJO VISUAL LLUVIA → ESCORRENTÍA → CAUDAL → RIESGO */

function ProcessFlowDiagram() {
  return (
    <div className="mt-14">
      <div
        className="
            grid
            gap-5
            md:grid-cols-2
            xl:grid-cols-4
            xl:gap-4
          "
      >
        {processSteps.map(
          ({ number, title, subtitle, badge, image, imageAlt, Icon, imagePosition }, i) => (
            <div key={title} className="relative">
              {/* TARJETA*/}

              <article
                className="
                    group
                    relative
                    h-full
                    overflow-hidden
                    rounded-[22px]
  
                    border
                    border-[#58CFF5]/20
  
                    bg-deep
  
                    shadow-[0_18px_50px_rgba(4,29,52,0.12)]
  
                    transition
                    duration-500
  
                    hover:-translate-y-1
                    hover:border-[#58CFF5]/45
  
                    hover:shadow-[0_24px_70px_rgba(4,29,52,0.18),0_0_30px_rgba(88,207,245,0.14)]
                  "
              >
                {/* CABECERA*/}
                <div
                  className="
                      relative
                      z-20
  
                      flex
                      min-h-[92px]
                      items-center
                      gap-3
  
                      border-b
                      border-[#58CFF5]/15
  
                      bg-gradient-to-r
                      from-[#082946]
                      via-[#0A3659]
                      to-[#082946]
  
                      px-5
                      py-1
                    "
                >
                  {/* Número */}

                  <span
                    className="
                        grid
                        size-11
                        shrink-0
                        place-items-center
  
                        rounded-full
  
                        border
                        border-[#58CFF5]/30
  
                        bg-gradient-to-br
                        from-[#144E78]
                        to-[#082D4C]
  
                        font-display
                        text-sm
                        font-semibold
                        text-[#9CE8FF]
  
                        shadow-[inset_0_0_12px_rgba(88,207,245,0.10)]
                      "
                  >
                    {number}
                  </span>

                  {/* Título */}

                  <div className="min-w-0">
                    <h3
                      className="
                          font-display
                          text-[1.35rem]
                          font-semibold
                          leading-none
                          text-white
                        "
                    >
                      {title}
                    </h3>

                    <p className="mt-2 text-xs text-white/60">{subtitle}</p>
                  </div>

                  {/* BADGE DESKTOP */}

                  <div
                    className="
                        ml-auto
                        hidden
                        shrink-0
                        items-center
                        gap-2
  
                        rounded-full
  
                        border
                        border-[#39D9FF]/90
  
                        bg-[linear-gradient(180deg,rgba(10,56,92,0.95)_0%,rgba(7,37,61,0.95)_100%)]
  
                        px-3
                        py-2
  
                        text-[9px]
                        font-medium
                        text-[#9CE8FF]
  
                        shadow-[0_0_0_1px_rgba(57,217,255,0.14),0_0_10px_rgba(57,217,255,0.42),0_0_22px_rgba(57,217,255,0.24),inset_0_0_10px_rgba(57,217,255,0.10)]
  
                        2xl:flex
                      "
                  >
                    <Icon
                      className="
                          size-3.5
                          shrink-0
  
                          text-[#63E7FF]
  
                          drop-shadow-[0_0_6px_rgba(99,231,255,0.85)]
                        "
                    />

                    <span
                      className="
                          whitespace-nowrap
                          tracking-[0.01em]
                          text-[#9CE8FF]
                        "
                    >
                      {badge}
                    </span>
                  </div>
                </div>

                {/* IMAGEN TARANIS */}

                <div
                  className="
                      relative
                      aspect-[1.28/1]
                      overflow-hidden
                      bg-slate-100
                    "
                >
                  <img
                    src={image}
                    alt={imageAlt}
                    width={1815}
                    height={830}
                    loading="lazy"
                    className={`
                        absolute
                        inset-0
                        size-full
                        object-cover
                        ${imagePosition}
  
                        transition-transform
                        duration-700
  
                        group-hover:scale-[1.025]
                      `}
                  />

                  {/* Transición superior */}

                  <div
                    className="
                        pointer-events-none
                        absolute
                        inset-x-0
                        top-0
                        h-16
  
                        bg-gradient-to-b
                        from-[#061E34]/15
                        to-transparent
                      "
                  />

                  {/* Filo luminoso */}

                  <div
                    className="
                        pointer-events-none
                        absolute
                        inset-x-[8%]
                        bottom-0
                        h-px
  
                        bg-gradient-to-r
                        from-transparent
                        via-[#58CFF5]/70
                        to-transparent
  
                        shadow-[0_0_10px_rgba(88,207,245,0.35)]
                      "
                  />
                </div>

                {/* BADGE TABLET / MÓVIL */}

                <div
                  className="
                      flex
                      items-center
                      gap-2
  
                      border-t
                      border-[#39D9FF]/20
  
                      bg-[linear-gradient(180deg,#082946_0%,#07223A_100%)]
  
                      px-5
                      py-3
  
                      text-[11px]
                      text-[#9CE8FF]
  
                      2xl:hidden
                    "
                >
                  <Icon
                    className="
                        size-4
                        shrink-0
  
                        text-[#63E7FF]
  
                        drop-shadow-[0_0_6px_rgba(99,231,255,0.70)]
                      "
                  />

                  <span>{badge}</span>
                </div>
              </article>

              {/* FLECHA */}

              {i < processSteps.length - 1 && (
                <div
                  className="
                      pointer-events-none
  
                      absolute
                      -right-[27px]
                      top-1/2
                      z-30
  
                      hidden
  
                      size-10
                      -translate-y-1/2
                      place-items-center
  
                      rounded-full
  
                      border
                      border-[#39D9FF]/90
  
                      bg-gradient-to-br
                      from-[#0A3A5E]
                      to-[#061E34]
  
                      shadow-[0_0_0_1px_rgba(57,217,255,0.12),0_0_12px_rgba(156,232,255,0.85),0_0_28px_rgba(57,217,255,0.45)]
  
                      xl:grid
                    "
                  aria-hidden="true"
                >
                  <ArrowRight
                    className="
                        size-5
                        text-[#9CE8FF]
                        drop-shadow-[0_0_5px_rgba(156,232,255,0.75)]
                      "
                  />
                </div>
              )}
            </div>
          ),
        )}
      </div>
    </div>
  );
}

/* PROBLEM AND PIPELINE */

export function ProblemAndPipeline() {
  return (
    <>
      {/* BLOQUE 1 · EL RETO */}

      <section
        className="
            section-space
            relative
            overflow-hidden
            bg-background
          "
      >
        {/* Glow de fondo */}

        <div
          className="
              pointer-events-none
              absolute
              right-[-8%]
              top-[-10%]
  
              h-[500px]
              w-[760px]
  
              rounded-full
              bg-primary/[0.025]
              blur-[100px]
            "
        />

        <div className="section-shell relative z-10">
          {/* ENCABEZADO*/}
          <div
            className="
                grid
                gap-12
  
                lg:grid-cols-[1.05fr_0.95fr]
                lg:items-end
              "
          >
        <SectionHeader
          eyebrow={tr("El reto")}
          title={
        <span className="inline-block leading-[1.08]">
          {tr("Cuando llega la inundación,")}
          <br />

        <span className="text-primary">
          {tr("cada minuto cuenta.")}
        </span>
      </span>
        }
        text={tr(
        "Los fenómenos extremos evolucionan rápidamente y las decisiones deben tomarse antes de que el impacto sea visible sobre el territorio.",
        )}
        />

            {/* DETECTAR / ANTICIPAR / ACTUAR */}
            <div className="pb-2">
              <div
                className="
                    grid
                    grid-cols-3
  
                    text-center
  
                    font-display
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.18em]
  
                    sm:text-base
                  "
              >
                <span className="text-foreground">{tr("Detectar")}</span>

                <span className="text-primary">{tr("Anticipar")}</span>

                <span className="text-foreground">{tr("Actuar")}</span>
              </div>
              {/* LÍNEA DE PROGRESO */}
              <div className="relative mt-6">
                {/* Glow ancho de fondo */}
                <div
                  className="
        pointer-events-none
        absolute
        left-[16.66%]
        right-[16.66%]
        top-[7px]
        z-0
        h-[10px]
        -translate-y-[4px]
        rounded-full
        bg-gradient-to-r
        from-[#2A78B8]/0
        via-[#58CFF5]/30
        to-[#2A78B8]/0
        blur-md
        opacity-90
      "
                />

                {/* Línea glow secundaria */}
                <div
                  className="
        pointer-events-none
        absolute
        left-[16.66%]
        right-[16.66%]
        top-[7px]
        z-0
        h-[4px]
        -translate-y-[1px]
        rounded-full
        bg-gradient-to-r
        from-[#2E78B9]/35
        via-[#6FE8FF]/90
        to-[#2E78B9]/35
        blur-[1.5px]
        shadow-[0_0_10px_rgba(88,207,245,0.30),0_0_22px_rgba(88,207,245,0.20)]
      "
                />

                {/* Línea principal */}
                <div
                  className="
        pointer-events-none
        absolute
        left-[16.66%]
        right-[16.66%]
        top-[7px]
        z-10
        h-[2px]
        rounded-full
        bg-gradient-to-r
        from-[#3A86C2]/70
        via-[#7CEEFF]
        to-[#3A86C2]/70
        shadow-[0_0_8px_rgba(88,207,245,0.45),0_0_18px_rgba(88,207,245,0.22)]
      "
                />

                {/* Halo central bajo ANTICIPAR */}
                <div
                  className="
        pointer-events-none
        absolute
        left-1/2
        top-[7px]
        z-0
        h-10
        w-28
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#58CFF5]/30
        blur-xl
        opacity-95
      "
                />

                <div className="relative z-20 grid grid-cols-3">
                  {[
                    "Del fenómeno a la información",
                    "Del dato a la predicción",
                    "De la predicción a la acción",
                  ].map((label, i) => (
                    <div key={label} className="flex flex-col items-center">
                      {/* Nodo */}
                      <span
                        className={`
              relative
              z-20
              block
              size-4
              rounded-full
              border-2
              border-white
              ${i === 1 ? "bg-[#39D9FF] shadow-[0_0_10px_rgba(156,232,255,1),0_0_22px_rgba(57,217,255,0.85),0_0_34px_rgba(57,217,255,0.45)]" : "bg-[#2378B7] shadow-[0_0_8px_rgba(35,120,183,0.45),0_0_18px_rgba(88,207,245,0.18)]"}
            `}
                      />

                      {/* Texto inferior */}
                      <p
                        className="
              mt-5
              max-w-[130px]
              text-center
              text-xs
              leading-5
              text-muted-foreground
            "
                      >
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* LLUVIA → ESCORRENTÍA → CAUDAL → RIESGO */}

          <ProcessFlowDiagram />
        </div>
      </section>

      {/* ======================================================
        BLOQUE 2 · SISTEMA TARANIS
        ======================================================= */}

      <section
        className="
      section-space
      dark-band
      relative
      overflow-hidden
    "
      >
        {/* ======================================================
             RETÍCULA PRINCIPAL
          ======================================================= */}

        <div
          className="
        pointer-events-none
        absolute
        inset-0
        opacity-[0.34]
      "
          style={{
            backgroundImage: `
          linear-gradient(rgba(35, 126, 196, 0.17) 1px, transparent 1px),
          linear-gradient(90deg, rgba(35, 126, 196, 0.17) 1px, transparent 1px)
        `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* ======================================================
             RETÍCULA SECUNDARIA
          ======================================================= */}

        <div
          className="
        pointer-events-none
        absolute
        inset-0
        opacity-[0.15]
      "
          style={{
            backgroundImage: `
          linear-gradient(rgba(61, 196, 245, 0.14) 1px, transparent 1px),
          linear-gradient(90deg, rgba(61, 196, 245, 0.14) 1px, transparent 1px)
        `,
            backgroundSize: "16px 16px",
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
        opacity-[0.50]
      "
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(54,224,255,0.75) 1px, transparent 1.5px)",
            backgroundSize: "82px 82px",
          }}
        />

        {/* ======================================================
             GLOW CENTRAL SUPERIOR
          ======================================================= */}

        <div
          className="
        pointer-events-none
        absolute
        left-[18%]
        top-[-230px]
  
        h-[500px]
        w-[72%]
  
        rounded-full
  
        bg-[#007DFF]/[0.13]
        blur-[145px]
      "
        />

        {/* ======================================================
             GLOW INFERIOR
          ======================================================= */}

        <div
          className="
        pointer-events-none
        absolute
        bottom-[-270px]
        left-[12%]
  
        h-[500px]
        w-[78%]
  
        rounded-full
  
        bg-[#00BFFF]/[0.09]
        blur-[155px]
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
        top-[-25px]
  
        h-[275px]
        w-[76%]
  
        opacity-[0.78]
      "
          viewBox="0 0 1100 270"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 150C120 205 195 62 345 108C492 154 555 46 720 86C858 120 924 207 1100 160"
            stroke="#0879D0"
            strokeWidth="1.4"
            opacity=".72"
          />

          <path
            d="M0 173C125 220 217 92 350 130C500 174 570 72 725 105C870 136 936 220 1100 183"
            stroke="#149FE7"
            strokeWidth="1.2"
            opacity=".58"
          />

          <path
            d="M0 127C130 177 208 37 354 80C502 125 575 22 731 59C870 92 950 174 1100 130"
            stroke="#20BCEF"
            strokeWidth="1.1"
            opacity=".50"
          />

          <path
            d="M72 192C205 242 284 126 430 151C590 177 650 104 800 134C905 154 976 205 1100 199"
            stroke="#63E7FF"
            strokeWidth=".9"
            opacity=".36"
          />
        </svg>

        {/* ======================================================
             LÍNEAS INFERIORES DE FONDO
          ======================================================= */}

        <svg
          className="
        pointer-events-none
        absolute
        bottom-[-40px]
        left-[-4%]
  
        h-[260px]
        w-[108%]
  
        opacity-[0.32]
      "
          viewBox="0 0 1500 260"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M-50 220C120 145 220 210 390 155C560 102 650 208 825 145C1010 78 1155 172 1550 80"
            stroke="#087BD0"
            strokeWidth="1"
          />

          <path
            d="M-50 238C145 174 240 226 405 177C570 128 672 220 848 160C1040 96 1170 192 1550 106"
            stroke="#16A4E7"
            strokeWidth=".9"
            opacity=".7"
          />

          <path
            d="M-50 250C150 201 270 236 430 194C598 150 705 230 880 179C1054 128 1210 200 1550 137"
            stroke="#43D6F8"
            strokeWidth=".8"
            opacity=".42"
          />
        </svg>

        {/* ======================================================
             CONTENIDO
          ======================================================= */}

        <div className="section-shell relative z-10">
          {/* ====================================================
               ENCABEZADO
            ===================================================== */}

          <SectionHeader
            dark
            eyebrow={tr("Sistema TARANIS")}
            title={
              <>
                {tr("Del dato a la")}
                <span className="text-primary">{tr("decisi\xF3n.")}</span>
              </>
            }
            text={tr(
              "Una cadena tecnol\xF3gica completa convierte fuentes heterog\xE9neas en informaci\xF3n territorial que se puede interpretar y utilizar.",
            )}
          />

          {/* ====================================================
               PIPELINE
            ===================================================== */}

          <div
            className="
          mt-14
          grid
          gap-5
  
          md:grid-cols-2
  
          xl:grid-cols-4
          xl:gap-6
        "
          >
            {pipelineStages.map(({ number, title, Icon, items }, i) => (
              <div key={title} className="relative">
                {/* =================================================
                     TARJETA
                  ================================================== */}

                <article
                  className="
                  group
                  relative
  
                  min-h-[330px]
  
                  overflow-hidden
  
                  rounded-[22px]
  
                  border
                  border-[#26DDF7]/65
  
                  bg-gradient-to-b
                  from-[#0A3357]/95
                  via-[#072B49]/95
                  to-[#051E34]/95
  
                  p-7
  
                  shadow-[inset_0_0_0_1px_rgba(34,221,247,0.05),0_20px_60px_rgba(0,0,0,0.28),0_0_22px_rgba(0,174,255,0.05)]
  
                  transition
                  duration-500
  
                  hover:-translate-y-1
                  hover:border-[#4BE7FF]/85
  
                  hover:shadow-[inset_0_0_0_1px_rgba(57,217,255,0.10),0_22px_65px_rgba(0,0,0,0.38),0_0_34px_rgba(57,217,255,0.13)]
                "
                >
                  {/* =================================================
                       HEADER
                    ================================================== */}

                  <div
                    className="
                    relative
                    z-30
                    flex
                    items-center
                    gap-4
                  "
                  >
                    {/* Número */}

                    <span
                      className="
                      grid
                      size-10
                      shrink-0
                      place-items-center
  
                      rounded-full
  
                      border
                      border-[#39D9FF]/30
  
                      bg-gradient-to-br
                      from-[#175681]
                      to-[#092D4D]
  
                      text-xs
                      font-semibold
                      text-[#C0F7FF]
  
                      shadow-[inset_0_0_14px_rgba(57,217,255,0.10),0_0_10px_rgba(57,217,255,0.06)]
                    "
                    >
                      {number}
                    </span>

                    {/* =================================================
                         ICONO PRINCIPAL
                         Cerebro especialmente reforzado
                      ================================================== */}

                    <div
                      className="
                      relative
                      grid
                      size-11
                      shrink-0
                      place-items-center
                    "
                    >
                      <span
                        className={cn(
                          "pointer-events-none absolute rounded-full blur-xl",
                          i === 1 ? "size-12 bg-[#28DFFF]/25" : "size-9 bg-[#28DFFF]/12",
                        )}
                      />

                      <Icon
                        className={cn(
                          "relative z-10 text-[#37E2FF]",
                          i === 1
                            ? "size-10 stroke-[2.15] drop-shadow-[0_0_7px_rgba(55,226,255,1)]"
                            : "size-8 stroke-[1.9] drop-shadow-[0_0_7px_rgba(55,226,255,0.72)]",
                        )}
                      />
                    </div>

                    <h3
                      className="
                      font-display
                      text-2xl
                      font-semibold
                      text-white
                    "
                    >
                      {title}
                    </h3>
                  </div>

                  {/* =================================================
                       LISTADO
                    ================================================== */}

                  <ul
                    className="
                    relative
                    z-30
  
                    mt-8
                    space-y-4
                  "
                  >
                    {items.map(({ label, Icon: ItemIcon }) => (
                      <li
                        key={label}
                        className="
                          flex
                          items-center
                          gap-3
  
                          text-sm
                          text-white/80
                        "
                      >
                        <ItemIcon
                          className="
                            size-[17px]
                            shrink-0
  
                            stroke-[1.8]
  
                            text-white/75
  
                            transition-all
                            duration-300
  
                            group-hover:text-[#A7F3FF]
                            group-hover:drop-shadow-[0_0_5px_rgba(88,207,245,0.45)]
                          "
                        />

                        <span>{label}</span>
                      </li>
                    ))}
                  </ul>

                  {/* =================================================
                       TARJETA 01 · DATOS
                    ================================================== */}

                  {i === 0 && (
                    <div
                      className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      bottom-0
  
                      z-10
                      h-[120px]
  
                      overflow-hidden
                    "
                    >
                      <div
                        className="
                        absolute
                        bottom-[-15px]
                        left-1/2
  
                        h-[105px]
                        w-[115%]
  
                        -translate-x-1/2
  
                        rounded-[50%]
  
                        bg-[#007DFF]/15
                        blur-2xl
                      "
                      />

                      <svg
                        viewBox="0 0 360 120"
                        className="
                        relative
                        z-10
                        size-full
  
                        drop-shadow-[0_0_7px_rgba(47,205,255,0.45)]
                      "
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <ellipse cx="175" cy="119" rx="192" ry="77" fill="rgba(0,126,255,0.11)" />

                        <path
                          d="M-25 115C28 62 91 45 167 49C246 52 312 79 390 126"
                          fill="none"
                          stroke="#41DFFF"
                          strokeWidth="1.9"
                          opacity=".98"
                        />

                        <path
                          d="M-24 118C38 81 100 66 168 67C244 68 305 86 383 123"
                          fill="none"
                          stroke="#27B7FF"
                          strokeWidth="1.3"
                          opacity=".85"
                        />

                        <path
                          d="M10 100C72 79 120 75 175 77C234 78 285 87 340 109"
                          fill="none"
                          stroke="#158EDB"
                          strokeWidth="1"
                          opacity=".85"
                        />

                        <path
                          d="M42 85C89 69 130 65 176 66C224 66 264 72 310 89"
                          fill="none"
                          stroke="#21A7ED"
                          strokeWidth=".9"
                          opacity=".78"
                        />

                        <path
                          d="M93 114C113 77 138 56 167 49"
                          fill="none"
                          stroke="#1FB4EF"
                          strokeWidth=".95"
                          opacity=".85"
                        />

                        <path
                          d="M157 118C158 84 162 61 167 49"
                          fill="none"
                          stroke="#83F2FF"
                          strokeWidth=".95"
                          opacity=".88"
                        />

                        <path
                          d="M224 118C211 82 190 59 167 49"
                          fill="none"
                          stroke="#1FB4EF"
                          strokeWidth=".95"
                          opacity=".85"
                        />

                        {[
                          [52, 95, 93, 79],
                          [93, 79, 137, 87],
                          [137, 87, 179, 69],
                          [179, 69, 226, 81],
                          [226, 81, 278, 73],
                          [278, 73, 321, 98],
                          [93, 79, 112, 108],
                          [179, 69, 192, 110],
                          [226, 81, 256, 113],
                        ].map(([x1, y1, x2, y2], index) => (
                          <line
                            key={index}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke="#27CFFF"
                            strokeWidth=".9"
                            opacity=".72"
                          />
                        ))}

                        {[
                          [52, 95],
                          [93, 79],
                          [137, 87],
                          [179, 69],
                          [226, 81],
                          [278, 73],
                          [321, 98],
                          [112, 108],
                          [192, 110],
                          [256, 113],
                        ].map(([cx, cy], index) => (
                          <circle key={index} cx={cx} cy={cy} r="2" fill="#9CF6FF" />
                        ))}
                      </svg>
                    </div>
                  )}

                  {/* =================================================
                       TARJETA 02 · INTELIGENCIA
                    ================================================== */}

                  {i === 1 && (
                    <div
                      className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      bottom-0
  
                      z-10
                      h-[118px]
  
                      overflow-hidden
                    "
                    >
                      <div
                        className="
                        absolute
                        bottom-[-30px]
                        left-[35%]
  
                        h-[130px]
                        w-[70%]
  
                        rounded-full
  
                        bg-[#009DFF]/18
                        blur-3xl
                      "
                      />

                      <svg
                        viewBox="0 0 360 118"
                        className="
                        relative
                        z-10
                        size-full
  
                        drop-shadow-[0_0_7px_rgba(43,209,255,0.42)]
                      "
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        {[
                          "M-10 101C35 76 62 90 105 75C151 58 173 27 214 46C260 68 285 81 370 40",
                          "M-10 106C38 83 70 98 112 80C154 63 180 37 217 55C258 74 291 89 370 49",
                          "M-10 112C41 92 74 105 118 87C161 70 186 46 220 63C259 79 295 98 370 58",
                          "M-10 95C30 68 62 85 101 67C147 48 168 19 211 39C261 62 282 73 370 31",
                          "M-10 89C28 61 59 78 98 59C143 40 164 12 208 32C254 52 281 66 370 24",
                        ].map((d, index) => (
                          <path
                            key={index}
                            d={d}
                            fill="none"
                            stroke={index === 2 ? "#89F2FF" : index === 1 ? "#35D5FF" : "#178FE4"}
                            strokeWidth={index === 2 ? "1.5" : "1"}
                            opacity={index === 2 ? ".95" : ".72"}
                          />
                        ))}

                        {Array.from({
                          length: 28,
                        }).map((_, index) => {
                          const x = 12 + index * 13;
                          const y =
                            90 - Math.sin(index * 0.6) * 21 - (index > 12 && index < 19 ? 24 : 0);
                          return (
                            <circle
                              key={index}
                              cx={x}
                              cy={y}
                              r={index % 5 === 0 ? "2" : "1.3"}
                              fill={index % 5 === 0 ? "#B0FAFF" : "#47DCFF"}
                              opacity=".95"
                            />
                          );
                        })}
                      </svg>
                    </div>
                  )}

                  {/* =================================================
                       TARJETA 03 · PREDICCIÓN
                    ================================================== */}

                  {i === 2 && (
                    <div
                      className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      bottom-0
  
                      z-10
                      h-[118px]
  
                      overflow-hidden
                    "
                    >
                      <div
                        className="
                        absolute
                        bottom-[-10px]
                        right-[10%]
  
                        h-[90px]
                        w-[65%]
  
                        rounded-full
  
                        bg-[#00BFFF]/15
                        blur-3xl
                      "
                      />

                      <svg
                        viewBox="0 0 360 118"
                        className="
                        relative
                        z-10
                        size-full
  
                        drop-shadow-[0_0_8px_rgba(60,220,255,0.42)]
                      "
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M-12 101C22 103 40 82 72 87C110 94 118 104 153 77C185 51 198 99 234 61C260 34 273 30 298 47C321 65 338 46 372 26"
                          fill="none"
                          stroke="#1686E5"
                          strokeWidth="1.3"
                          opacity=".88"
                        />

                        <path
                          d="M-12 106C30 85 50 97 80 89C112 81 130 93 159 81C198 65 215 105 249 66C281 31 309 77 372 42"
                          fill="none"
                          stroke="#35DBFF"
                          strokeWidth="1.8"
                          opacity="1"
                        />

                        <path
                          d="M-12 111C30 96 58 102 91 96C128 90 148 99 178 85C211 69 229 90 260 73C295 54 317 57 372 50"
                          fill="none"
                          stroke="#B1F9FF"
                          strokeWidth="1.25"
                          opacity=".92"
                        />

                        <path
                          d="M-12 114C34 105 64 108 101 104C145 99 173 107 206 92C242 75 273 95 372 65"
                          fill="none"
                          stroke="#286DD0"
                          strokeWidth="1"
                          opacity=".72"
                        />

                        <circle cx="298" cy="47" r="4.5" fill="#D4FDFF" />

                        <circle cx="298" cy="47" r="12" fill="rgba(88,207,245,0.16)" />
                      </svg>
                    </div>
                  )}

                  {/* =================================================
                       TARJETA 04 · DECISIÓN
                    ================================================== */}

                  {i === 3 && (
                    <div
                      className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      bottom-0
  
                      z-10
                      h-[148px]
  
                      overflow-hidden
                    "
                    >
                      {/* Glow */}

                      <div
                        className="
                        absolute
                        bottom-[-22px]
                        right-[-12px]
  
                        h-[165px]
                        w-[250px]
  
                        rounded-[50%]
  
                        bg-[#007EC7]/16
                        blur-2xl
                      "
                      />

                      {/* Red territorial */}

                      <svg
                        viewBox="0 0 360 148"
                        className="
                        absolute
                        inset-0
                        size-full
  
                        drop-shadow-[0_0_7px_rgba(48,204,255,0.36)]
                      "
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        {/* Líneas */}

                        {[
                          [118, 144, 151, 114],
                          [151, 114, 181, 127],
                          [181, 127, 203, 91],
                          [203, 91, 236, 104],
                          [236, 104, 261, 68],
                          [261, 68, 291, 79],
                          [291, 79, 330, 42],
                          [151, 114, 166, 72],
                          [166, 72, 203, 91],
                          [203, 91, 210, 48],
                          [210, 48, 261, 68],
                          [236, 104, 273, 131],
                          [273, 131, 317, 108],
                          [291, 79, 317, 108],
                          [261, 68, 270, 29],
                          [270, 29, 330, 42],
                          [118, 144, 166, 72],
                          [181, 127, 236, 104],
                          [166, 72, 210, 48],
                          [210, 48, 270, 29],
                          [203, 91, 261, 68],
                          [261, 68, 330, 42],
                          [236, 104, 317, 108],
                        ].map(([x1, y1, x2, y2], index) => (
                          <line
                            key={index}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke={index % 4 === 0 ? "#4BE5FF" : "#1D9DE3"}
                            strokeWidth={index % 4 === 0 ? "1.1" : ".85"}
                            opacity={index % 4 === 0 ? ".92" : ".70"}
                          />
                        ))}

                        {/* Nodos */}

                        {[
                          [118, 144],
                          [151, 114],
                          [181, 127],
                          [203, 91],
                          [236, 104],
                          [261, 68],
                          [291, 79],
                          [330, 42],
                          [166, 72],
                          [210, 48],
                          [273, 131],
                          [317, 108],
                          [270, 29],
                        ].map(([cx, cy], index) => (
                          <g key={index}>
                            <circle cx={cx} cy={cy} r="4.5" fill="rgba(57,217,255,0.08)" />

                            <circle cx={cx} cy={cy} r="2" fill="#8CF2FF" />
                          </g>
                        ))}

                        {/* MARCADORES DE RIESGO CORRECCIÓN TYPESCRIPT */}

                        {[
                          {
                            cx: 261,
                            cy: 68,
                            color: "#FFC928",
                          },
                          {
                            cx: 291,
                            cy: 79,
                            color: "#FFB600",
                          },
                          {
                            cx: 270,
                            cy: 29,
                            color: "#FF4665",
                          },
                          {
                            cx: 317,
                            cy: 108,
                            color: "#FF405F",
                          },
                        ].map(({ cx, cy, color }, index) => (
                          <g key={index}>
                            {/* Halo */}
                            <circle cx={cx} cy={cy} r="11" fill={`${color}22`} />

                            {/* Marcador */}
                            <circle cx={cx} cy={cy} r="5.5" fill={color} />
                          </g>
                        ))}
                      </svg>

                      {/* Alerta principal */}

                      <div
                        className="
                        absolute
                        bottom-4
                        right-5
  
                        grid
                        size-12
                        place-items-center
  
                        rounded-full
  
                        border-2
                        border-[#FF4968]
  
                        bg-[#FF4968]/15
  
                        text-xl
                        font-bold
                        text-[#FF6B84]
  
                        shadow-[0_0_12px_rgba(255,73,104,0.68),0_0_26px_rgba(255,73,104,0.30)]
                      "
                      >
                        !
                      </div>
                    </div>
                  )}

                  {/* FADE INFERIOR */}
                  <div
                    className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
  
                    z-20
                    h-[70px]
  
                    bg-gradient-to-b
                    from-transparent
                    to-[#051E34]/[0.03]
                  "
                  />
                </article>

                {/*  CONECTOR */}
                {i < pipelineStages.length - 1 && (
                  <div
                    className="
                    pointer-events-none
  
                    absolute
                    -right-[33px]
                    top-1/2
                    z-40
  
                    hidden
  
                    size-11
                    -translate-y-1/2
                    place-items-center
  
                    rounded-full
  
                    border
                    border-[#39D9FF]/95
  
                    bg-gradient-to-br
                    from-[#0A3A5E]
                    to-[#061E34]
  
                    shadow-[0_0_0_1px_rgba(57,217,255,0.12),0_0_13px_rgba(156,232,255,0.95),0_0_32px_rgba(57,217,255,0.55)]
  
                    xl:grid
                  "
                    aria-hidden="true"
                  >
                    <ArrowRight
                      className="
                      size-5
  
                      text-[#A9F6FF]
  
                      drop-shadow-[0_0_6px_rgba(156,232,255,0.85)]
                    "
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
/*  VISTA DE PRODUCTO · PLATAFORMA= */
export function ProductSection() {
  const platformViews = [
    {
      label: tr("Predicci\xF3n hidrol\xF3gica"),
      Icon: Activity,
    },
    {
      label: "Seguimiento de estaciones",
      Icon: RadioTower,
    },
    {
      label: tr("Precipitaci\xF3n"),
      Icon: CloudRain,
    },
    {
      label: tr("Caudales"),
      Icon: Waves,
    },
    {
      label: "Cartografía de riesgo",
      Icon: Layers3,
    },
    {
      label: tr("An\xE1lisis hist\xF3rico"),
      Icon: Gauge,
    },
    {
      label: "Modelos comparables",
      Icon: Network,
    },
    {
      label: "Información territorial",
      Icon: Database,
    },
  ] as const;
  const [active, setActive] = useState(0);
  return (
    <section
      id="plataforma"
      className="
        section-space
        dark-band
        relative
        overflow-hidden
      "
    >
      {/* RETÍCULA */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          grid-field
          opacity-[0.24]
        "
      />

      {/* GLOWS */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-8%]
          top-[14%]
          h-[620px]
          w-[760px]
          rounded-full
          bg-[#008BCB]/[0.10]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-250px]
          left-[18%]
          h-[460px]
          w-[70%]
          rounded-full
          bg-[#00CBE5]/[0.07]
          blur-[150px]
        "
      />

      {/* LÍNEAS SUPERIORES */}

      <svg
        className="
          pointer-events-none
          absolute
          right-[-4%]
          top-[-10px]
          h-[300px]
          w-[62%]
          opacity-[0.52]
        "
        viewBox="0 0 1000 300"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 165C130 205 210 68 350 104C500 143 570 44 720 83C845 115 910 190 1030 150"
          stroke="#1187CB"
          strokeWidth="1.2"
        />

        <path
          d="M0 190C145 225 225 99 365 131C510 165 590 77 738 107C860 132 930 205 1030 177"
          stroke="#28BCE7"
          strokeWidth="1"
          opacity=".7"
        />

        <path
          d="M0 137C140 175 220 32 365 76C515 120 590 20 744 57C875 88 935 156 1030 122"
          stroke="#58DDF7"
          strokeWidth=".9"
          opacity=".52"
        />
      </svg>

      {/* CURVAS INFERIORES */}

      <svg
        className="
          pointer-events-none
          absolute
          bottom-[-80px]
          left-[-8%]
          h-[310px]
          w-[52%]
          opacity-[0.30]
        "
        viewBox="0 0 800 300"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M-30 245C105 153 185 224 300 168C420 108 510 201 625 142C705 101 754 111 840 65"
          stroke="#1187CB"
          strokeWidth="1"
        />

        <path
          d="M-30 265C120 187 205 245 325 193C440 144 533 224 645 169C730 128 780 143 850 105"
          stroke="#39D9FF"
          strokeWidth=".9"
          opacity=".65"
        />

        <path
          d="M-30 283C127 218 222 260 345 217C457 178 553 244 670 194C747 161 801 167 856 140"
          stroke="#63E7FF"
          strokeWidth=".75"
          opacity=".42"
        />
      </svg>

      {/* PUNTOS */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.28]
        "
        style={{
          backgroundImage: "radial-gradient(circle, rgba(57,217,255,0.65) 1px, transparent 1.5px)",
          backgroundSize: "110px 110px",
        }}
      />

      <div
        className="
          section-shell
          relative
          z-10
          !max-w-[1500px]
        "
      >
        {/* CABECERA */}

        <div
          className="
            grid
            items-end
            gap-8
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-14
          "
        >
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span
                className="
                  h-px
                  w-9
                  bg-[#39D9FF]
                  shadow-[0_0_8px_rgba(57,217,255,0.65)]
                "
              />

              <p
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#39D9FF]
                  sm:text-xs
                "
              >
                {tr("Vista de producto")}
              </p>
            </div>

            <h2
              className="
                max-w-[850px]
                font-display
                text-[clamp(2.7rem,4.1vw,4.2rem)]
                font-medium
                leading-[0.94]
                tracking-[-0.045em]
                text-white
              "
            >
              <span className="block">{tr("Una interfaz para")}</span>

              <span className="block sm:whitespace-nowrap">{tr("comprender lo que viene.")}</span>
            </h2>
          </div>

          <p
            className="
              max-w-[570px]
              pb-1
              text-base
              leading-7
              text-white/72
              lg:justify-self-end
              sm:text-lg
              sm:leading-8
            "
          >
            {tr(
              "Explora variables, compara escenarios y sigue la evoluci\xF3n del territorio desde un espacio de trabajo unificado.",
            )}
          </p>
        </div>

        {/* INTERFAZ */}

        <div
          className="
            mt-12
            grid
            gap-7
            lg:grid-cols-[225px_minmax(0,1fr)]
            lg:gap-7
            xl:grid-cols-[240px_minmax(0,1fr)]
            xl:gap-8
          "
        >
          {/* SELECTOR */}

          <div
            className="
              grid
              grid-cols-2
              gap-2.5
              lg:grid-cols-1
              lg:self-start
            "
          >
            {platformViews.map(({ label, Icon }, i) => {
              const isActive = active === i;
              return (
                <button
                  type="button"
                  key={label}
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-pressed={isActive}
                  className={cn(
                    `
                        group
                        relative
                        flex
                        min-h-[54px]
                        items-center
                        gap-3
                        overflow-hidden
                        rounded-xl
                        border
                        px-4
                        py-3
                        text-left
                        text-xs
                        transition-all
                        duration-300
                        lg:min-h-[58px]
                      `,
                    isActive
                      ? `
                          border-[#39D9FF]/95
                          bg-gradient-to-r
                          from-[#083D59]
                          via-[#07354E]
                          to-[#052B41]
                          text-[#B9F7FF]
                          shadow-[0_0_0_1px_rgba(57,217,255,0.12),0_0_17px_rgba(57,217,255,0.32),0_0_36px_rgba(57,217,255,0.14)]
                        `
                      : `
                          border-white/10
                          bg-[#08263A]/72
                          text-white/58
                          hover:border-[#39D9FF]/40
                          hover:bg-[#09314A]/85
                          hover:text-white/85
                        `,
                  )}
                >
                  {isActive && (
                    <span
                      className="
                          pointer-events-none
                          absolute
                          -left-4
                          top-1/2
                          size-16
                          -translate-y-1/2
                          rounded-full
                          bg-[#39D9FF]/17
                          blur-xl
                        "
                    />
                  )}

                  <span
                    className={cn(
                      `
                          relative
                          z-10
                          grid
                          size-8
                          shrink-0
                          place-items-center
                          rounded-lg
                          border
                          transition-all
                          duration-300
                        `,
                      isActive
                        ? `
                            border-[#39D9FF]/40
                            bg-[#39D9FF]/12
                            text-[#63E7FF]
                            shadow-[0_0_12px_rgba(57,217,255,0.15)]
                          `
                        : `
                            border-white/8
                            bg-white/[0.03]
                            text-white/45
                            group-hover:text-[#63E7FF]
                          `,
                    )}
                  >
                    <Icon
                      className={cn(
                        "size-4",
                        isActive && "drop-shadow-[0_0_6px_rgba(99,231,255,0.85)]",
                      )}
                    />
                  </span>

                  <span
                    className="
                        relative
                        z-10
                        flex-1
                        font-medium
                      "
                  >
                    {label}
                  </span>

                  <ArrowRight
                    className={cn(
                      `
                          relative
                          z-10
                          size-3.5
                          shrink-0
                          transition-all
                          duration-300
                        `,
                      isActive
                        ? `
                            translate-x-0
                            text-[#63E7FF]
                          `
                        : `
                            -translate-x-1
                            text-white/20
                            group-hover:translate-x-0
                            group-hover:text-[#63E7FF]
                          `,
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* PANEL INTERACTIVO */}

          <div
            className="
              relative
              min-w-0
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -inset-[4%]
                rounded-[32px]
                bg-[#00BBD8]/[0.12]
                blur-[62px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                bottom-[-9%]
                left-[12%]
                h-[120px]
                w-[76%]
                rounded-full
                bg-[#39D9FF]/[0.12]
                blur-[60px]
              "
            />

            <div
              className="
                relative
                z-10
                overflow-hidden
                rounded-[24px]
                border
                border-[#39D9FF]/55
                bg-[#041E31]
                p-[1px]
                shadow-[0_28px_85px_rgba(0,0,0,0.42),0_0_38px_rgba(57,217,255,0.16),0_0_9px_rgba(57,217,255,0.16)]
              "
            >
              <ProductMockup activeView={active} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
/*  VIDEO*/

export function VideoDemo() {
  const [playing, setPlaying] = useState(false);
  return (
    <section id="demo" className="section-space dark-band">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[.75fr_1.25fr]">
        <div>
          <SectionHeader
            dark
            eyebrow={tr("Demo")}
            title={tr("TARANIS en acci\xF3n")}
            text={tr(
              "Descubre c\xF3mo TARANIS transforma datos hidrol\xF3gicos y meteorol\xF3gicos en informaci\xF3n \xFAtil para anticipar escenarios de inundaci\xF3n.",
            )}
          />

          <Button asChild variant="hero" size="lg" className="mt-8">
            <Link to={localizedPath("/contacto")}>
              {tr("Solicitar una demostraci\xF3n personalizada")}
            </Link>
          </Button>
        </div>

        <div className="aspect-video overflow-hidden rounded-2xl border border-on-dark/10 bg-deep-soft shadow-product">
          {playing ? (
            <iframe
              className="size-full"
              src="https://www.youtube-nocookie.com/embed/7jszFkqGLeU?si=L0zeMNvjJQ1CHI69"
              title={tr("TARANIS en acci\xF3n")}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group relative size-full overflow-hidden"
              aria-label={tr("Reproducir v\xEDdeo TARANIS")}
            >
              <img
                src="https://i.ytimg.com/vi/1jOw4fw0Ph8/maxresdefault.jpg"
                alt={tr("Vista previa del v\xEDdeo TARANIS")}
                loading="lazy"
                className="size-full object-cover opacity-60 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-75"
              />

              <span className="absolute inset-0 grid place-items-center">
                <span className="grid size-20 place-items-center rounded-full bg-primary text-primary-foreground shadow-aqua-lg">
                  <CirclePlay className="size-9" />
                </span>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 CAPACIDADES
============================================================ */

const features = [
  {
    title: "Predicción",
    text: "Anticipa la evolución de variables hidrológicas mediante modelos físicos y de inteligencia artificial.",
    Icon: Activity,
    graphic: "prediction",
  },
  {
    title: "Mapa territorial",
    text: "Visualiza cuencas, ríos, estaciones, municipios y áreas expuestas desde una única interfaz.",
    Icon: Layers3,
    graphic: "terrain",
  },
  {
    title: "Datos multifuente",
    text: "Combina información meteorológica, hidrológica, geoespacial y satelital.",
    Icon: Database,
    graphic: "network",
  },
  {
    title: "IA + hidrología",
    text: "Complementa modelos hidrológicos clásicos con técnicas avanzadas de inteligencia artificial.",
    Icon: Sparkles,
    graphic: "ai",
  },
  {
    title: "Análisis histórico",
    text: "Reconstruye episodios y analiza la respuesta del territorio.",
    Icon: Gauge,
    graphic: "history",
  },
  {
    title: "Visualización",
    text: "Hidrogramas, hietogramas, indicadores y mapas para facilitar la interpretación.",
    Icon: Radar,
    graphic: "visualization",
  },
  {
    title: "Alertas",
    text: "Convierte las predicciones en información operativa para apoyar decisiones.",
    Icon: RadioTower,
    graphic: "alerts",
  },
  {
    title: "Escalabilidad",
    text: "Arquitectura diseñada para trabajar desde municipios hasta áreas territoriales extensas.",
    Icon: Network,
    graphic: "scalability",
  },
] as const;

/* ============================================================
   GRÁFICOS DE CAPACIDADES
============================================================ */

function CapabilityGraphic({ type }: { type: (typeof features)[number]["graphic"] }) {
  /* ==========================================================
     01 · PREDICCIÓN
  ========================================================== */

  if (type === "prediction") {
    return (
      <svg viewBox="0 0 240 80" className="size-full" fill="none" aria-hidden="true">
        <path
          d="
            M0 61
            C31 55 43 42 66 45
            C91 49 96 69 125 58
            C151 48 157 28 181 31
            C203 34 216 48 240 43
          "
          stroke="#46CFE7"
          strokeWidth="1.5"
        />

        <path
          d="
            M0 70
            C34 64 47 53 72 56
            C99 60 110 73 134 66
            C163 57 171 42 197 43
            C216 44 227 52 240 50
          "
          stroke="#8BE6F2"
          strokeWidth="1"
          opacity=".65"
        />

        <circle cx="181" cy="31" r="3.2" fill="#00BFD7" />

        <circle cx="181" cy="31" r="9" fill="rgba(0,191,215,0.08)" />
      </svg>
    );
  }

  /* ==========================================================
     02 · MAPA TERRITORIAL
  ========================================================== */

  if (type === "terrain") {
    return (
      <svg viewBox="0 0 240 80" className="size-full" fill="none" aria-hidden="true">
        <path
          d="
            M0 70
            C26 45 47 58 72 38
            C98 18 115 49 140 28
            C166 6 187 35 240 13
          "
          stroke="#72D9EB"
          strokeWidth="1"
          opacity=".45"
        />

        <path
          d="
            M0 75
            C30 55 48 65 79 48
            C108 31 126 59 151 39
            C179 17 202 45 240 29
          "
          stroke="#39CDE6"
          strokeWidth="1"
          opacity=".58"
        />

        <path
          d="
            M15 80
            C37 62 59 70 84 56
            C109 42 129 66 156 50
            C183 34 208 55 240 41
          "
          stroke="#10B7D7"
          strokeWidth="1.2"
          opacity=".72"
        />

        <circle cx="150" cy="39" r="2.5" fill="#00BFD7" />

        <circle cx="188" cy="35" r="2" fill="#00BFD7" />

        <circle cx="111" cy="47" r="2" fill="#00BFD7" />
      </svg>
    );
  }

  /* ==========================================================
     03 · DATOS MULTIFUENTE
  ========================================================== */

  if (type === "network") {
    return (
      <svg viewBox="0 0 240 80" className="size-full" fill="none" aria-hidden="true">
        <g stroke="#36C9E4" strokeWidth="1" opacity=".6">
          <path d="M35 53L79 31L117 45L160 20L206 47" />
          <path d="M79 31L98 68L117 45" />
          <path d="M117 45L151 67L160 20" />
          <path d="M160 20L194 18L206 47" />
          <path d="M35 53L67 69L98 68" />
        </g>

        {[
          [35, 53],
          [79, 31],
          [98, 68],
          [117, 45],
          [151, 67],
          [160, 20],
          [194, 18],
          [206, 47],
          [67, 69],
        ].map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="6" fill="rgba(0,191,215,0.07)" />

            <circle cx={cx} cy={cy} r="2.6" fill="#00BFD7" />
          </g>
        ))}
      </svg>
    );
  }

  /* ==========================================================
     04 · IA + HIDROLOGÍA
  ========================================================== */

  if (type === "ai") {
    return (
      <svg viewBox="0 0 240 80" className="size-full" fill="none" aria-hidden="true">
        <path
          d="
            M0 62
            C28 55 40 43 65 46
            C93 49 100 68 127 59
            C153 51 157 26 181 28
            C207 30 215 54 240 47
          "
          stroke="#39CDE6"
          strokeWidth="1.4"
        />

        <g stroke="#7FE3F1" strokeWidth=".8" opacity=".55">
          <path d="M127 59L153 43L181 28L207 43" />
          <path d="M153 43L178 60L207 43" />
        </g>

        {[
          [127, 59],
          [153, 43],
          [181, 28],
          [178, 60],
          [207, 43],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.7" fill="#00BFD7" />
        ))}
      </svg>
    );
  }

  /* ==========================================================
     05 · ANÁLISIS HISTÓRICO
  ========================================================== */

  if (type === "history") {
    const bars = [18, 35, 25, 47, 39, 61, 44, 70, 52, 34, 58, 74, 46, 63, 38];
    return (
      <div
        className="
          flex
          size-full
          items-end
          gap-[5px]
          px-4
          pb-1
        "
        aria-hidden="true"
      >
        {bars.map((height, index) => (
          <span
            key={`${height}-${index}`}
            className="
                flex-1
                rounded-t-[2px]

                bg-gradient-to-t
                from-[#57CFE5]/25
                to-[#00BFD7]/75
              "
            style={{
              height: `${height}%`,
            }}
          />
        ))}
      </div>
    );
  }

  /* ==========================================================
     06 · VISUALIZACIÓN
  ========================================================== */

  if (type === "visualization") {
    return (
      <svg viewBox="0 0 240 80" className="size-full" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="capabilityVisualArea" x1="0" y1="0" x2="0" y2="80">
            <stop offset="0%" stopColor="#00BFD7" stopOpacity=".24" />

            <stop offset="100%" stopColor="#00BFD7" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="
            M0 68
            C22 64 31 53 52 52
            C76 51 81 67 103 62
            C131 55 137 24 163 26
            C190 28 198 59 220 55
            C228 54 234 51 240 49
            L240 80
            L0 80
            Z
          "
          fill="url(#capabilityVisualArea)"
        />

        <path
          d="
            M0 68
            C22 64 31 53 52 52
            C76 51 81 67 103 62
            C131 55 137 24 163 26
            C190 28 198 59 220 55
            C228 54 234 51 240 49
          "
          stroke="#3CCCE5"
          strokeWidth="1.4"
        />

        <circle cx="163" cy="26" r="3" fill="#00BFD7" />

        <circle cx="163" cy="26" r="8" fill="rgba(0,191,215,0.07)" />
      </svg>
    );
  }

  /* ==========================================================
     07 · ALERTAS
  ========================================================== */

  if (type === "alerts") {
    return (
      <svg viewBox="0 0 240 80" className="size-full" fill="none" aria-hidden="true">
        <g transform="translate(120 45)" stroke="#25C4E0" fill="none">
          <circle r="10" fill="rgba(0,191,215,0.08)" strokeWidth="1.2" />

          <circle r="22" opacity=".65" />

          <circle r="34" opacity=".42" />

          <circle r="46" opacity=".20" />

          <circle r="3.5" fill="#00BFD7" stroke="none" />
        </g>
      </svg>
    );
  }

  /* ==========================================================
     08 · ESCALABILIDAD
  ========================================================== */

  return (
    <svg viewBox="0 0 240 80" className="size-full" fill="none" aria-hidden="true">
      <g stroke="#40CBE3" strokeWidth="1" opacity=".65">
        <path d="M17 64L58 37L95 57L130 27L169 48L221 24" />
        <path d="M58 37L69 68L95 57" />
        <path d="M95 57L136 69L169 48" />
        <path d="M130 27L168 17L221 24" />
        <path d="M169 48L203 66L221 24" />
      </g>

      {[
        [17, 64],
        [58, 37],
        [69, 68],
        [95, 57],
        [130, 27],
        [136, 69],
        [168, 17],
        [169, 48],
        [203, 66],
        [221, 24],
      ].map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="6" fill="rgba(0,191,215,0.06)" />

          <circle cx={cx} cy={cy} r="2.5" fill="#00BFD7" />
        </g>
      ))}
    </svg>
  );
}

/* ============================================================
   CAPACIDADES · GRID
============================================================ */

export function Features() {
  return (
    <section
      className="
        section-space
        relative
        overflow-hidden
        bg-[#F1FAFD]
      "
    >
      {/* ======================================================
           GLOW AMBIENTAL
        ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[25%]
          top-[-180px]

          h-[400px]
          w-[55%]

          rounded-full

          bg-[#58CFF5]/[0.07]

          blur-[120px]
        "
      />

      {/* ======================================================
           CURVAS TOPOGRÁFICAS
        ======================================================= */}

      <svg
        className="
          pointer-events-none
          absolute
          right-[-8%]
          top-[2%]

          h-[390px]
          w-[46%]

          opacity-[0.17]
        "
        viewBox="0 0 700 400"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="
            M22 323
            C95 246 135 302 198 229
            C260 157 317 218 376 145
            C434 73 493 128 548 76
            C595 31 638 39 694 70
          "
          stroke="#4ECBE7"
        />

        <path
          d="
            M61 351
            C124 280 168 330 227 263
            C286 197 342 248 399 184
            C458 117 511 164 565 116
            C614 73 650 77 706 105
          "
          stroke="#54D3E9"
          opacity=".75"
        />

        <path
          d="
            M104 374
            C161 310 202 353 259 294
            C318 234 370 276 429 220
            C486 164 536 201 587 161
            C631 126 665 128 714 150
          "
          stroke="#72DDEC"
          opacity=".55"
        />
      </svg>

      {/* ======================================================
           GLOW INFERIOR
        ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-220px]
          left-[20%]

          h-[360px]
          w-[60%]

          rounded-full

          bg-[#39D9FF]/[0.045]

          blur-[135px]
        "
      />

      {/* ======================================================
           CONTENIDO
        ======================================================= */}

      <div
        className="
          section-shell
          relative
          z-10
          !max-w-[1500px]
        "
      >
        {/* ====================================================
             HEADER
          ===================================================== */}

        <div className="max-w-[980px]">
          <div
            className="
              mb-5
              flex
              items-center
              gap-4
            "
          >
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
              {tr("Capacidades")}
            </p>
          </div>

          <h2
            className="
              font-display

              text-[clamp(2.8rem,4.2vw,4.6rem)]

              font-medium

              leading-[0.96]

              tracking-[-0.04em]

              text-[#001D2D]
            "
          >
            {tr("Inteligencia aplicada al territorio.")}
          </h2>

          <p
            className="
              mt-5
              max-w-[850px]

              text-base
              leading-7

              text-[#4C6978]

              sm:text-lg
            "
          >
            {tr(
              "Una combinaci\xF3n de datos, modelos e inteligencia artificial para transformar informaci\xF3n compleja en herramientas \xFAtiles para la toma de decisiones.",
            )}
          </p>
        </div>

        {/* ====================================================
             GRID 4 × 2
          ===================================================== */}

        <div
          className="
            mt-12

            grid
            gap-4

            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {localizeDeep(features).map(({ title, text, Icon, graphic }) => (
            <article
              key={title}
              className="
                  group
                  relative

                  min-h-[255px]

                  overflow-hidden

                  rounded-[18px]

                  border
                  border-[#A9D7E2]

                  bg-white/[0.88]

                  p-6
                  pb-24

                  shadow-[0_12px_32px_rgba(35,108,134,0.045)]

                  backdrop-blur-sm

                  transition-all
                  duration-300

                  hover:-translate-y-1

                  hover:border-[#39CFE9]/80

                  hover:shadow-[0_18px_42px_rgba(35,108,134,0.08),0_0_26px_rgba(57,217,255,0.08)]
                "
            >
              {/* ================================================
                   GLOW DE TARJETA
                ================================================= */}

              <div
                className="
                    pointer-events-none
                    absolute

                    -right-12
                    -top-12

                    size-36

                    rounded-full

                    bg-[#39D9FF]/[0.035]

                    blur-2xl

                    transition-all
                    duration-500

                    group-hover:bg-[#39D9FF]/[0.085]
                  "
              />

              {/* ================================================
                   CABECERA
                ================================================= */}

              <div
                className="
                    relative
                    z-20

                    flex
                    items-start
                    gap-4
                  "
              >
                <div
                  className="
                      grid
                      size-10
                      shrink-0
                      place-items-center

                      rounded-xl

                      border
                      border-[#39CFE9]/20

                      bg-[#ECFAFC]

                      text-[#00B8D0]

                      transition-all
                      duration-300

                      group-hover:border-[#39CFE9]/45

                      group-hover:shadow-[0_0_14px_rgba(57,217,255,0.15)]
                    "
                >
                  <Icon
                    className="
                        size-5

                        drop-shadow-[0_0_4px_rgba(0,191,215,0.22)]
                      "
                  />
                </div>

                <div className="min-w-0">
                  <h3
                    className="
                        font-display

                        text-[1.12rem]
                        font-semibold

                        leading-6

                        text-[#001D2D]
                      "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                        mt-2

                        text-[13px]
                        leading-[1.55]

                        text-[#526E7B]
                      "
                  >
                    {text}
                  </p>
                </div>
              </div>

              {/* ================================================
                   GRÁFICO
                ================================================= */}

              <div
                className="
                    pointer-events-none
                    absolute

                    inset-x-5
                    bottom-3

                    h-[76px]

                    opacity-[0.86]

                    transition-opacity
                    duration-300

                    group-hover:opacity-100
                  "
              >
                <CapabilityGraphic type={graphic} />
              </div>

              {/* ================================================
                   FILO INFERIOR
                ================================================= */}

              <div
                className="
                    pointer-events-none
                    absolute

                    bottom-0
                    left-[15%]

                    h-px
                    w-[70%]

                    bg-gradient-to-r
                    from-transparent
                    via-[#39D9FF]/30
                    to-transparent

                    opacity-0

                    transition-opacity
                    duration-300

                    group-hover:opacity-100
                  "
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
/* ============================================================
   PRODUCTO · CTA SOLICITAR DEMO
============================================================ */

export function ProductDemoCTA() {
  const benefits = [
    {
      title: "Presentación personalizada",
      text: "Adaptada a las necesidades de tu territorio.",
      Icon: Target,
    },
    {
      title: tr("Casos de uso reales"),
      text: tr("Con ejemplos aplicados a contextos hidrol\xF3gicos reales."),
      Icon: BarChart3,
    },
    {
      title: tr("Acompa\xF1amiento t\xE9cnico"),
      text: "Desde la evaluación inicial hasta la implementación.",
      Icon: Settings2,
    },
  ] as const;
  return (
    <section
      className="
        relative
        min-h-[520px]
        overflow-hidden
        bg-[#021725]
        text-white
      "
    >
      {/* ======================================================
           IMAGEN DE FONDO
           Más luminosa y con mayor presencia
        ======================================================= */}

      <img
        src="/images/producto/taranis-product-demo-cta.png"
        alt=""
        loading="lazy"
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0

          size-full

          scale-[1.015]

          object-cover
          object-[50%_52%]

          brightness-[0.94]
          contrast-[1.16]
          saturate-[1.28]
        "
      />

      {/* ======================================================
           VELO GENERAL
           Antes oscurecía demasiado toda la fotografía
        ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[#001827]/12
        "
      />

      {/* ======================================================
           OSCURECIMIENTO SOLO EN LA IZQUIERDA
            Protege el texto pero deja visible el río
           y todo el paisaje central.
        ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[linear-gradient(90deg,rgba(0,15,26,0.94)_0%,rgba(0,18,30,0.84)_24%,rgba(0,21,34,0.53)_42%,rgba(0,24,39,0.18)_61%,rgba(0,24,39,0.05)_100%)]
        "
      />

      {/* ======================================================
           PROFUNDIDAD VERTICAL
        ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-gradient-to-b
          from-[#001827]/10
          via-transparent
          to-[#00121E]/38
        "
      />

      {/* ======================================================
           SPOTLIGHT CENTRAL SOBRE EL RÍO
        ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[radial-gradient(circle_at_55%_52%,rgba(57,217,255,0.20)_0%,rgba(57,217,255,0.08)_20%,transparent_44%)]

          mix-blend-screen
        "
      />

      {/* ======================================================
           RESPLANDOR DEL CORREDOR FLUVIAL
        ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute

          bottom-[-25%]
          left-[37%]

          h-[520px]
          w-[52%]

          rotate-[-7deg]

          rounded-full

          bg-[#00D8F4]/[0.15]

          blur-[105px]

          mix-blend-screen
        "
      />

      {/* ======================================================
           SEGUNDO HALO
        ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute

          left-[48%]
          top-[18%]

          h-[340px]
          w-[34%]

          rounded-full

          bg-[#39D9FF]/[0.10]

          blur-[90px]

          mix-blend-screen
        "
      />

      {/* ======================================================
           RETÍCULA
           Más tenue para no apagar la fotografía
        ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          opacity-[0.09]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(57,217,255,0.18) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(57,217,255,0.18) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "58px 58px",
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

          opacity-[0.22]
        "
        style={{
          backgroundImage: "radial-gradient(circle, rgba(99,231,255,0.72) 1px, transparent 1.5px)",
          backgroundSize: "120px 120px",
        }}
      />

      {/* ======================================================
           CURVAS SUPERIORES
        ======================================================= */}

      <svg
        className="
          pointer-events-none
          absolute

          right-[-3%]
          top-[-28px]

          h-[250px]
          w-[60%]

          opacity-[0.58]
        "
        viewBox="0 0 900 280"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="
            M0 180
            C125 215 215 91 345 118
            C483 147 535 66 680 94
            C790 115 840 176 925 146
          "
          stroke="#39D9FF"
          strokeWidth="1.3"
        />

        <path
          d="
            M0 204
            C137 235 226 124 356 145
            C490 168 555 94 690 119
            C805 140 852 198 925 173
          "
          stroke="#63E7FF"
          strokeWidth="1"
          opacity=".72"
        />

        <path
          d="
            M0 154
            C130 188 210 57 350 89
            C490 121 548 36 697 67
            C807 91 858 151 925 121
          "
          stroke="#168AC7"
          strokeWidth=".9"
          opacity=".62"
        />
      </svg>

      {/* ======================================================
           CURVAS INFERIORES / RÍO
        ======================================================= */}

      <svg
        className="
          pointer-events-none
          absolute

          bottom-[-40px]
          left-[25%]

          h-[210px]
          w-[58%]

          opacity-[0.34]
        "
        viewBox="0 0 900 220"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="
            M0 180
            C120 132 215 188 326 139
            C440 89 525 157 632 113
            C730 73 800 88 920 49
          "
          stroke="#39D9FF"
          strokeWidth="1.15"
        />

        <path
          d="
            M-10 202
            C130 154 224 207 342 159
            C449 115 544 177 654 135
            C753 98 823 108 930 75
          "
          stroke="#7CEEFF"
          strokeWidth=".8"
          opacity=".65"
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

          !max-w-[1500px]

          py-16

          md:py-20
          lg:py-[86px]
        "
      >
        <div
          className="
            grid
            items-center
            gap-14

            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-20
          "
        >
          {/* ==================================================
               COLUMNA IZQUIERDA
            =================================================== */}

          <div className="max-w-[690px]">
            {/* TARANIS */}

            <div
              className="
                mb-6

                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  h-px
                  w-10

                  bg-[#63E7FF]

                  shadow-[0_0_8px_rgba(99,231,255,0.95),0_0_18px_rgba(57,217,255,0.40)]
                "
              />

              <p
                className="
                  text-[11px]
                  font-semibold
                  uppercase

                  tracking-[0.30em]

                  text-[#7CF1FF]

                  sm:text-xs
                "
              >
                {tr("TARANIS")}
              </p>
            </div>

            {/* ==================================================
                 TÍTULO
              =================================================== */}

            <h2
              className="
                max-w-[690px]

                font-display

                text-[clamp(2.7rem,4.5vw,4.8rem)]

                font-medium

                leading-[0.92]

                tracking-[-0.045em]

                text-white

                drop-shadow-[0_3px_18px_rgba(0,0,0,0.22)]
              "
            >
              {tr("Solicita una demo")}
              <br />
              {tr("de TARANIS para")}
              <br />
              <span
                className="
                  text-[#48E4F5]

                  drop-shadow-[0_0_15px_rgba(57,217,255,0.18)]
                "
              >
                {tr("tu territorio.")}
              </span>
            </h2>

            {/* ==================================================
                 TEXTO
              =================================================== */}

            <p
              className="
                mt-7

                max-w-[590px]

                text-base
                leading-7

                text-white/78

                drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]

                sm:text-lg
                sm:leading-8
              "
            >
              {tr(
                "Conoce c\xF3mo nuestra plataforma puede ayudarte a anticipar escenarios de riesgo y tomar mejores decisiones sobre tu territorio.",
              )}
            </p>

            {/* ==================================================
                 BOTÓN
              =================================================== */}

            <Button
              asChild
              variant="hero"
              size="lg"
              className="
                mt-8

                min-w-[185px]

                border
                border-[#A7F7FF]/40

                bg-[#39D9FF]

                text-[#002033]

                shadow-[0_0_18px_rgba(57,217,255,0.34),0_10px_26px_rgba(0,0,0,0.24)]

                hover:bg-[#72ECF8]

                hover:shadow-[0_0_24px_rgba(57,217,255,0.46),0_12px_28px_rgba(0,0,0,0.24)]
              "
            >
              <Link to={localizedPath("/contacto")}>
                {tr("Solicitar demo")}

                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          {/* ==================================================
               COLUMNA DERECHA
            =================================================== */}

          <div
            className="
              relative

              lg:justify-self-end

              lg:w-full
              lg:max-w-[510px]
            "
          >
            {/* Glow detrás de las tarjetas */}

            <div
              className="
                pointer-events-none
                absolute

                inset-[5%]

                rounded-full

                bg-[#00CBE5]/[0.14]

                blur-[75px]
              "
            />

            <div
              className="
                relative
                z-10

                space-y-4
              "
            >
              {benefits.map(({ title, text, Icon }) => (
                <article
                  key={title}
                  className="
                      group
                      relative

                      overflow-hidden

                      rounded-[18px]

                      border
                      border-[#63E7FF]/30

                      bg-[#05263B]/68

                      px-5
                      py-[18px]

                      backdrop-blur-[10px]

                      shadow-[0_12px_28px_rgba(0,0,0,0.18),inset_0_0_20px_rgba(57,217,255,0.02)]

                      transition-all
                      duration-300

                      hover:-translate-y-0.5

                      hover:border-[#63E7FF]/55

                      hover:bg-[#06314A]/78

                      hover:shadow-[0_0_26px_rgba(57,217,255,0.12),0_14px_30px_rgba(0,0,0,0.20)]
                    "
                >
                  {/* glow lateral */}

                  <div
                    className="
                        pointer-events-none
                        absolute

                        -left-10
                        top-1/2

                        size-24

                        -translate-y-1/2

                        rounded-full

                        bg-[#39D9FF]/[0.09]

                        blur-2xl

                        transition-all
                        duration-300

                        group-hover:bg-[#39D9FF]/[0.16]
                      "
                  />

                  <div
                    className="
                        relative
                        z-10

                        flex
                        items-start
                        gap-4
                      "
                  >
                    {/* icono */}

                    <span
                      className="
                          grid
                          size-11
                          shrink-0
                          place-items-center

                          rounded-xl

                          border
                          border-[#63E7FF]/35

                          bg-[#39D9FF]/12

                          text-[#7CF1FF]

                          shadow-[0_0_14px_rgba(57,217,255,0.12)]
                        "
                    >
                      <Icon
                        className="
                            size-5

                            drop-shadow-[0_0_6px_rgba(99,231,255,0.70)]
                          "
                      />
                    </span>

                    {/* texto */}

                    <div>
                      <h3
                        className="
                            font-display

                            text-lg
                            font-semibold

                            text-white
                          "
                      >
                        {title}
                      </h3>

                      <p
                        className="
                            mt-1.5

                            text-sm
                            leading-6

                            text-white/62
                          "
                      >
                        {text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================
           FILO SUPERIOR
        ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0

          h-px

          bg-gradient-to-r
          from-transparent
          via-[#7CEEFF]/65
          to-transparent

          shadow-[0_0_12px_rgba(57,217,255,0.42)]
        "
      />

      {/* ======================================================
           VIGNETTE INFERIOR MUCHO MÁS SUAVE
        ======================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0

          h-20

          bg-gradient-to-b
          from-transparent
          to-[#00121E]/22
        "
      />
    </section>
  );
}
/* PREDICCIÓN */

const forecast = [
  {
    t: "AHORA",
    rain: 22,
    flow: 18,
    state: "Estable",
  },
  {
    t: "+6 h",
    rain: 48,
    flow: 31,
    state: "Seguimiento",
  },
  {
    t: "+12 h",
    rain: 73,
    flow: 54,
    state: "Vigilancia",
  },
  {
    t: "+24 h",
    rain: 42,
    flow: 81,
    state: "Atención",
  },
  {
    t: "+48 h",
    rain: 16,
    flow: 49,
    state: "Descenso",
  },
] as const;
export function Prediction() {
  const [step, setStep] = useState(2);
  const d = forecast[step] ?? forecast[0];
  return (
    <section className="section-space dark-band topo-field">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            dark
            eyebrow={tr("Predicci\xF3n")}
            title={tr("No necesitas esperar a que el agua llegue.")}
            text={tr(
              "Observa c\xF3mo puede evolucionar el sistema antes de que el episodio alcance su m\xE1xima intensidad.",
            )}
          />

          <span className="w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">
            {tr("Demostraci\xF3n visual \xB7 datos ficticios")}
          </span>
        </div>

        <div className="mt-14 rounded-2xl border border-on-dark/10 bg-deep-soft/80 p-6 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div>
              <div className="grid h-56 grid-cols-2 items-end gap-3 border-b border-on-dark/20 px-4">
                {[
                  [tr("Precipitaci\xF3n"), d.rain],
                  [tr("Caudal"), d.flow],
                ].map(([x, v]) => (
                  <div key={String(x)} className="flex h-full flex-col justify-end">
                    <div
                      className="rounded-t-xl bg-primary/70 transition-all duration-500"
                      style={{
                        height: `${Number(v)}%`,
                      }}
                    />

                    <p className="mt-3 text-center text-xs text-on-dark/50">{x}</p>
                  </div>
                ))}
              </div>

              <input
                type="range"
                min="0"
                max="4"
                value={step}
                onChange={(e) => setStep(Number(e.target.value))}
                className="mt-10 w-full accent-primary"
                aria-label={tr("Horizonte temporal de la demostraci\xF3n")}
              />

              <div className="mt-3 flex justify-between text-xs text-on-dark/45">
                {forecast.map((x) => (
                  <span key={x.t}>{x.t}</span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-on-dark/10 bg-deep p-6">
              <p className="text-xs uppercase tracking-[.14em] text-on-dark/40">
                {tr("Estado del territorio")}
              </p>

              <p className="mt-4 font-display text-4xl text-primary">{d.state}</p>

              <div className="mt-8 space-y-4">
                {[
                  [tr("Lluvia"), d.rain],
                  ["Respuesta fluvial", d.flow],
                ].map(([x, v]) => (
                  <div key={String(x)}>
                    <div className="flex justify-between text-xs">
                      <span>{x}</span>
                      <span>{v}%</span>
                    </div>

                    <div className="mt-2 h-1 rounded-full bg-on-dark/10">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-500"
                        style={{
                          width: `${Number(v)}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 SOLUCIONES
============================================================ */

export function SolutionsAndDifference() {
  const audiences = [
    {
      title: tr("Administraciones p\xFAblicas"),
      text: tr("Planificaci\xF3n, protecci\xF3n civil y gesti\xF3n del riesgo de inundaciones."),
      Icon: Building2,
    },
    {
      title: tr("Organismos de cuenca"),
      text: tr("Gesti\xF3n de recursos h\xEDdricos y supervisi\xF3n de eventos extremos."),
      Icon: Waves,
    },
    {
      title: tr("Operadores de infraestructuras"),
      text: tr("Continuidad operativa y reducci\xF3n de riesgos en activos cr\xEDticos."),
      Icon: Network,
    },
    {
      title: "Sectores estratégicos",
      text: "Anticipación de impactos en actividad industrial, logística y energética.",
      Icon: Factory,
    },
  ] as const;
  const cycle = [
    {
      number: "01",
      title: tr("Anticipar"),
      text: tr(
        "Predicci\xF3n de caudales y escenarios de inundaci\xF3n con d\xEDas u horas de antelaci\xF3n.",
      ),
      Icon: Activity,
    },
    {
      number: "02",
      title: tr("Alertar"),
      text: tr("Avisos tempranos y umbrales personalizados para activar protocolos de respuesta."),
      Icon: RadioTower,
    },
    {
      number: "03",
      title: tr("Gestionar"),
      text: tr(
        "Informaci\xF3n en tiempo real para la coordinaci\xF3n operativa y la toma de decisiones.",
      ),
      Icon: Layers3,
    },
    {
      number: "04",
      title: tr("Aprender"),
      text: "Análisis de eventos y lecciones aprendidas para mejorar la resiliencia futura.",
      Icon: Gauge,
    },
  ] as const;
  const benefits = [
    {
      title: tr("Mayor seguridad"),
      text: tr("Protecci\xF3n de la poblaci\xF3n y reducci\xF3n del impacto de las inundaciones."),
      Icon: ShieldCheck,
    },
    {
      title: tr("M\xE1s eficiencia"),
      text: tr("Optimizaci\xF3n de recursos y coordinaci\xF3n operativa en situaciones de riesgo."),
      Icon: Activity,
    },
    {
      title: tr("Territorios sostenibles"),
      text: tr("Gesti\xF3n responsable del agua y menor impacto ambiental en los ecosistemas."),
      Icon: Waves,
    },
    {
      title: "Decisiones con confianza",
      text: tr(
        "Informaci\xF3n clara, visual y basada en datos para decisiones m\xE1s r\xE1pidas y efectivas.",
      ),
      Icon: Building2,
    },
  ] as const;
  const plans = [
    {
      name: "ESENCIAL",
      subtitle: tr("Monitorizaci\xF3n y contexto territorial"),
      featured: false,
    },
    {
      name: "PROFESIONAL",
      subtitle: tr("Predicci\xF3n, modelos y alertas"),
      featured: true,
    },
    {
      name: "TERRITORIAL",
      subtitle: "Cobertura y operación a escala amplia",
      featured: false,
    },
  ] as const;
  return (
    <>
      {/* ======================================================
           BLOQUE 1 · HERO SOLUCIONES
        ======================================================= */}

      <section
        className="
          dark-band
          relative
          min-h-[760px]
          overflow-hidden
          pt-28
          lg:min-h-[820px]
          lg:pt-32
        "
      >
        {/* IMAGEN */}

        <img
          src="/images/soluciones/soluciones-rio-adaja-cyber.png"
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            size-full
            object-cover
            object-center
            brightness-[0.92]
            contrast-[1.12]
            saturate-[1.15]
          "
        />

        {/* OSCURECIMIENTO IZQUIERDO */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[linear-gradient(90deg,rgba(0,17,29,0.97)_0%,rgba(0,19,32,0.90)_28%,rgba(0,22,36,0.55)_48%,rgba(0,24,38,0.12)_72%,rgba(0,24,38,0.02)_100%)]
          "
        />

        {/* PROFUNDIDAD */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-b
            from-[#001827]/15
            via-transparent
            to-[#00121E]/45
          "
        />

        {/* GRID */}

        <div className="pointer-events-none absolute inset-0 grid-field opacity-[0.14]" />

        {/* GLOW RÍO */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-20%]
            left-[42%]
            h-[520px]
            w-[48%]
            rounded-full
            bg-[#00D8F4]/[0.14]
            blur-[110px]
            mix-blend-screen
          "
        />

        {/* CURVAS SUPERIORES */}

        <svg
          className="
            pointer-events-none
            absolute
            right-[-3%]
            top-[3%]
            h-[310px]
            w-[65%]
            opacity-[0.55]
          "
          viewBox="0 0 1000 300"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 170C145 213 220 75 370 106C530 140 600 44 755 84C880 116 940 181 1030 148"
            stroke="#39D9FF"
            strokeWidth="1.2"
          />

          <path
            d="M0 197C150 233 238 108 385 136C535 164 620 80 770 110C896 136 960 202 1030 176"
            stroke="#7CEEFF"
            strokeWidth="1"
            opacity=".65"
          />

          <path
            d="M0 143C152 180 225 38 385 76C544 113 620 20 782 56C910 86 970 150 1030 121"
            stroke="#168FD0"
            strokeWidth=".9"
            opacity=".58"
          />
        </svg>

        <div
          className="
            section-shell
            relative
            z-10
            !max-w-[1500px]
          "
        >
          <div
            className="
              grid
              min-h-[620px]
              items-center
              gap-14
              lg:grid-cols-[0.8fr_1.2fr]
            "
          >
            {/* TEXTO */}

            <div className="relative z-20 max-w-[650px]">
              <div className="mb-7 flex items-center gap-4">
                <span
                  className="
                    h-px
                    w-10
                    bg-[#63E7FF]
                    shadow-[0_0_8px_rgba(99,231,255,0.9)]
                  "
                />

                <p
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-[#7CF1FF]
                  "
                >
                  {tr("TARANIS")}
                </p>
              </div>

              <h1
                className="
                  font-display
                  text-[clamp(3.2rem,5vw,5.7rem)]
                  font-semibold
                  leading-[0.91]
                  tracking-[-0.045em]
                  text-white
                "
              >
                {tr("Soluciones")}
                <br />
                {tr("para territorios")}
                <br />
                <span className="text-[#39D9FF]">{tr("m\xE1s resilientes.")}</span>
              </h1>

              <p
                className="
                  mt-8
                  max-w-[580px]
                  text-base
                  leading-7
                  text-white/75
                  sm:text-lg
                  sm:leading-8
                "
              >
                {tr(
                  "Transformamos datos hidrol\xF3gicos en informaci\xF3n operativa para que municipios, organismos y sectores estrat\xE9gicos puedan anticipar riesgos, proteger a la poblaci\xF3n y gestionar el territorio con mayor eficacia.",
                )}
              </p>

              <Button
                asChild
                variant="hero"
                size="lg"
                className="
                  mt-8
                  border
                  border-[#A7F7FF]/35
                  bg-[#39D9FF]
                  text-[#002033]
                  shadow-[0_0_20px_rgba(57,217,255,0.28)]
                  hover:bg-[#72ECF8]
                "
              >
                <a href="#soluciones-publicos">
                  {tr("Explorar soluciones")}

                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>

            {/* CALLOUTS */}

            <div
              className="
                relative
                hidden
                h-[500px]
                lg:block
              "
            >
              <div
                className="
                  absolute
                  left-[18%]
                  top-[10%]
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-[#63E7FF]/30
                  bg-[#052A44]/82
                  px-5
                  py-4
                  backdrop-blur-xl
                  shadow-[0_0_25px_rgba(57,217,255,0.10)]
                "
              >
                <span
                  className="
                    grid
                    size-10
                    place-items-center
                    rounded-xl
                    bg-[#39D9FF]/10
                    text-[#63E7FF]
                  "
                >
                  <Activity className="size-5" />
                </span>

                <p className="font-display text-sm font-semibold text-white">
                  Anticipación
                  <br />
                  {tr("del riesgo")}
                </p>
              </div>

              <div
                className="
                  absolute
                  right-[2%]
                  top-[38%]
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-[#63E7FF]/30
                  bg-[#052A44]/82
                  px-5
                  py-4
                  backdrop-blur-xl
                  shadow-[0_0_25px_rgba(57,217,255,0.10)]
                "
              >
                <span
                  className="
                    grid
                    size-10
                    place-items-center
                    rounded-xl
                    bg-[#39D9FF]/10
                    text-[#63E7FF]
                  "
                >
                  <Layers3 className="size-5" />
                </span>

                <p className="font-display text-sm font-semibold text-white">
                  {tr("Gesti\xF3n operativa")}
                  <br />
                  {tr("del territorio")}
                </p>
              </div>

              <div
                className="
                  absolute
                  bottom-[8%]
                  left-[38%]
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-[#63E7FF]/30
                  bg-[#052A44]/82
                  px-5
                  py-4
                  backdrop-blur-xl
                  shadow-[0_0_25px_rgba(57,217,255,0.10)]
                "
              >
                <span
                  className="
                    grid
                    size-10
                    place-items-center
                    rounded-xl
                    bg-[#39D9FF]/10
                    text-[#63E7FF]
                  "
                >
                  <Target className="size-5" />
                </span>

                <p className="font-display text-sm font-semibold text-white">
                  {tr("Decisiones basadas")}
                  <br />
                  {tr("en datos")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
           BLOQUE 2 · PARA QUIÉN TRABAJAMOS
        ======================================================= */}

      <section
        id="soluciones-publicos"
        className="
          section-space
          relative
          overflow-hidden
          bg-[#F1FAFD]
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            right-[-10%]
            top-[-170px]
            h-[440px]
            w-[50%]
            rounded-full
            bg-[#39D9FF]/[0.06]
            blur-[130px]
          "
        />

        <svg
          className="
            pointer-events-none
            absolute
            right-[-5%]
            top-[-10px]
            h-[320px]
            w-[60%]
            opacity-[0.14]
          "
          viewBox="0 0 900 300"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 220C135 135 225 224 345 155C470 83 565 189 690 119C790 63 842 90 920 43"
            stroke="#39CDE6"
          />

          <path
            d="M0 246C148 170 239 245 362 184C480 126 582 207 702 148C802 99 856 118 930 82"
            stroke="#72DDEC"
            opacity=".65"
          />
        </svg>

        <div className="section-shell relative z-10 !max-w-[1500px]">
          <div
            className="
              grid
              items-end
              gap-10
              lg:grid-cols-[0.72fr_1.28fr]
              lg:gap-12
            "
          >
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-9 bg-[#00BFD7]" />

                <p
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#00AFC7]
                  "
                >
                  {tr("TARANIS")}
                </p>
              </div>

              <h2
                className="
                  font-display
                  text-[clamp(2.8rem,4.2vw,4.6rem)]
                  font-medium
                  leading-[0.94]
                  tracking-[-0.04em]
                  text-[#001D2D]
                "
              >
                {tr("\xBFPara qui\xE9n")}
                <br />
                <span className="text-[#00BFD7]">{tr("trabajamos?")}</span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-[520px]
                  text-base
                  leading-7
                  text-[#4C6978]
                "
              >
                {tr(
                  "Nuestras soluciones se adaptan a las necesidades de cada territorio, combinando modelos hidrol\xF3gicos, inteligencia artificial y visualizaci\xF3n geoespacial para ofrecer informaci\xF3n clara y accionable.",
                )}
              </p>
            </div>

            <div
              className="
                grid
                gap-4
                sm:grid-cols-2
                xl:grid-cols-4
              "
            >
              {audiences.map(({ title, text, Icon }) => (
                <article
                  key={title}
                  className="
                    group
                    relative
                    min-h-[285px]
                    overflow-hidden
                    rounded-[18px]
                    border
                    border-[#A9D7E2]
                    bg-white/90
                    p-6
                    shadow-[0_12px_30px_rgba(35,108,134,0.05)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#39CFE9]/75
                    hover:shadow-[0_18px_38px_rgba(35,108,134,0.09)]
                  "
                >
                  <span
                    className="
                      grid
                      size-10
                      place-items-center
                      rounded-full
                      bg-[#DDF8FC]
                      text-[#00B8D0]
                    "
                  >
                    <Icon className="size-5" />
                  </span>

                  <h3
                    className="
                      mt-6
                      font-display
                      text-lg
                      font-semibold
                      leading-6
                      text-[#001D2D]
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-[#526E7B]
                    "
                  >
                    {text}
                  </p>

                  <svg
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      bottom-0
                      h-[82px]
                      w-full
                      opacity-[0.62]
                    "
                    viewBox="0 0 260 82"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 64C35 48 50 57 76 46C105 34 118 58 145 45C174 31 195 51 260 30"
                      stroke="#39CDE6"
                    />

                    <path
                      d="M0 72C34 59 57 67 83 55C113 42 129 67 158 54C187 41 210 60 260 43"
                      stroke="#8BE6F2"
                      opacity=".65"
                    />
                  </svg>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
           BLOQUE 3 · CICLO DEL RIESGO
        ======================================================= */}

      <section
        className="
          dark-band
          relative
          overflow-hidden
          section-space
        "
      >
        <div className="pointer-events-none absolute inset-0 grid-field opacity-[0.18]" />

        <div
          className="
            pointer-events-none
            absolute
            right-[-8%]
            top-[8%]
            h-[540px]
            w-[55%]
            rounded-full
            bg-[#00AEEF]/[0.10]
            blur-[130px]
          "
        />

        <div className="section-shell relative z-10 !max-w-[1500px]">
          <div
            className="
              grid
              items-center
              gap-14
              lg:grid-cols-[0.95fr_1.05fr]
            "
          >
            {/* TEXTO + CICLO */}

            <div>
              <div className="mb-5 flex items-center gap-4">
                <span
                  className="
                    h-px
                    w-9
                    bg-[#39D9FF]
                    shadow-[0_0_8px_rgba(57,217,255,0.70)]
                  "
                />

                <p
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#63E7FF]
                  "
                >
                  {tr("TARANIS")}
                </p>
              </div>

              <h2
                className="
                  max-w-[730px]
                  font-display
                  text-[clamp(2.8rem,4.4vw,4.8rem)]
                  font-medium
                  leading-[0.94]
                  tracking-[-0.04em]
                  text-white
                "
              >
                {tr("Soluciones en todo")}
                <br />
                el <span className="text-[#39D9FF]">{tr("ciclo del riesgo.")}</span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-[650px]
                  text-base
                  leading-7
                  text-white/68
                "
              >
                {tr(
                  "Acompa\xF1amos a nuestros clientes en todas las fases, desde la anticipaci\xF3n hasta la recuperaci\xF3n, con herramientas dise\xF1adas para la toma de decisiones operativa.",
                )}
              </p>

              <div
                className="
                  mt-12
                  grid
                  gap-8
                  sm:grid-cols-2
                  xl:grid-cols-4
                "
              >
                {cycle.map(({ number, title, text, Icon }, index) => (
                  <div key={title} className="relative">
                    <div
                      className="
                          relative
                          z-10
                          grid
                          size-14
                          place-items-center
                          rounded-full
                          border
                          border-[#39D9FF]/55
                          bg-[#062A43]
                          text-[#63E7FF]
                          shadow-[0_0_16px_rgba(57,217,255,0.16)]
                        "
                    >
                      <Icon className="size-6" />
                    </div>

                    {index < cycle.length - 1 && (
                      <span
                        className="
                            pointer-events-none
                            absolute
                            left-14
                            top-7
                            hidden
                            h-px
                            w-[calc(100%-3.5rem)]
                            bg-gradient-to-r
                            from-[#39D9FF]
                            to-[#39D9FF]/20
                            xl:block
                          "
                      />
                    )}

                    <p
                      className="
                          mt-5
                          text-[10px]
                          font-semibold
                          tracking-[0.16em]
                          text-[#63E7FF]/55
                        "
                    >
                      {number}
                    </p>

                    <h3
                      className="
                          mt-1
                          font-display
                          text-lg
                          font-semibold
                          text-white
                        "
                    >
                      {title}
                    </h3>

                    <p
                      className="
                          mt-2
                          text-sm
                          leading-6
                          text-white/55
                        "
                    >
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* PLATAFORMA */}

            <div
              className="
                relative
                mx-auto
                w-full
                max-w-[760px]
                [perspective:1800px]
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-[10%]
                  rounded-full
                  bg-[#00C8E8]/[0.12]
                  blur-[90px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[-40px]
                  left-[8%]
                  h-20
                  w-[84%]
                  rounded-full
                  bg-black/60
                  blur-3xl
                "
              />

              <div
                className="
                  relative
                  z-10
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-[#39D9FF]/65
                  bg-[#031B2D]
                  shadow-[0_30px_90px_rgba(0,0,0,0.55),0_0_34px_rgba(57,217,255,0.20)]
                  lg:[transform:rotateY(-7deg)_rotateX(2deg)_rotateZ(-1deg)]
                "
              >
                <img
                  src="/images/soluciones/soluciones-panel-gis-avila.png"
                  alt="Interfaz TARANIS con cartografía de inundación y datos hidrológicos en Ávila"
                  loading="lazy"
                  className="
                    block
                    h-auto
                    w-full
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
           BLOQUE 4 · BENEFICIOS
        ======================================================= */}

      <section
        className="
          section-space
          relative
          overflow-hidden
          bg-[#F1FAFD]
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            left-[20%]
            top-[-180px]
            h-[380px]
            w-[60%]
            rounded-full
            bg-[#39D9FF]/[0.055]
            blur-[130px]
          "
        />

        <div className="section-shell relative z-10 !max-w-[1500px]">
          <div className="max-w-[820px]">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-9 bg-[#00BFD7]" />

              <p
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#00AFC7]
                "
              >
                {tr("TARANIS")}
              </p>
            </div>

            <h2
              className="
                font-display
                text-[clamp(2.8rem,4.2vw,4.5rem)]
                font-medium
                leading-[0.95]
                tracking-[-0.04em]
                text-[#001D2D]
              "
            >
              {tr("Beneficios")}
              <br />
              para <span className="text-[#00BFD7]">{tr("tu territorio.")}</span>
            </h2>

            <p
              className="
                mt-5
                max-w-[680px]
                text-base
                leading-7
                text-[#4C6978]
              "
            >
              {tr(
                "Nuestras soluciones contribuyen a territorios m\xE1s seguros, eficientes y sostenibles, generando valor en el corto y largo plazo.",
              )}
            </p>
          </div>

          <div
            className="
              mt-10
              grid
              gap-4
              md:grid-cols-2
              xl:grid-cols-4
            "
          >
            {benefits.map(({ title, text, Icon }) => (
              <article
                key={title}
                className="
                  group
                  relative
                  min-h-[210px]
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-[#A9D7E2]
                  bg-white/88
                  p-6
                  shadow-[0_12px_30px_rgba(35,108,134,0.045)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#39CFE9]/75
                "
              >
                <div className="flex items-start gap-4">
                  <span
                    className="
                      grid
                      size-10
                      shrink-0
                      place-items-center
                      rounded-full
                      bg-[#DDF8FC]
                      text-[#00B8D0]
                    "
                  >
                    <Icon className="size-5" />
                  </span>

                  <div>
                    <h3
                      className="
                        font-display
                        text-lg
                        font-semibold
                        text-[#001D2D]
                      "
                    >
                      {title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-[#526E7B]
                      "
                    >
                      {text}
                    </p>
                  </div>
                </div>

                <svg
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-[62px]
                    w-full
                    opacity-[0.55]
                  "
                  viewBox="0 0 300 62"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 47C43 33 70 48 103 36C142 22 163 45 198 34C232 24 259 38 300 23"
                    stroke="#39CDE6"
                  />

                  <path
                    d="M0 55C43 43 73 55 108 45C145 34 169 53 204 43C242 33 268 46 300 35"
                    stroke="#8BE6F2"
                    opacity=".65"
                  />
                </svg>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
           BLOQUE 5 · MODELO DE SERVICIO
        ======================================================= */}

      <section
        className="
          section-space
          relative
          overflow-hidden
          bg-[#EAF7FB]
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            left-[35%]
            top-[-200px]
            h-[480px]
            w-[48%]
            rounded-full
            bg-[#39D9FF]/[0.07]
            blur-[135px]
          "
        />

        <div
          className="
            section-shell
            relative
            z-10
            !max-w-[1500px]
          "
        >
          <div
            className="
              grid
              items-center
              gap-12
              lg:grid-cols-[0.7fr_1.3fr]
            "
          >
            {/* INTRO */}

            <div>
              <p
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#00AFC7]
                "
              >
                {tr("Modelo de servicio")}
              </p>

              <h2
                className="
                  mt-5
                  max-w-[600px]
                  font-display
                  text-[clamp(3rem,4.5vw,4.8rem)]
                  font-medium
                  leading-[0.93]
                  tracking-[-0.04em]
                  text-[#001D2D]
                "
              >
                {tr("Una configuraci\xF3n")}
                <br />
                {tr("para cada escala.")}
              </h2>

              <p
                className="
                  mt-6
                  max-w-[560px]
                  text-base
                  leading-7
                  text-[#4C6978]
                "
              >
                {tr(
                  "Las capacidades y cobertura se configuran seg\xFAn el territorio, fuentes de informaci\xF3n, nivel de modelizaci\xF3n y necesidades operativas.",
                )}
              </p>
            </div>

            {/* PLANES */}

            <div
              className="
                grid
                gap-4
                md:grid-cols-3
              "
            >
              {plans.map(({ name, subtitle, featured }) => (
                <article
                  key={name}
                  className={cn(
                    `
                      relative
                      min-h-[330px]
                      rounded-[20px]
                      border
                      p-7
                      transition-all
                      duration-300
                    `,
                    featured
                      ? `
                        border-[#39D9FF]/80
                        bg-[#031C2D]
                        text-white
                        shadow-[0_24px_55px_rgba(0,27,45,0.24),0_0_26px_rgba(57,217,255,0.15)]
                        md:-translate-y-3
                      `
                      : `
                        border-[#B4D6E0]
                        bg-white/90
                        text-[#001D2D]
                        shadow-[0_12px_30px_rgba(35,108,134,0.055)]
                      `,
                  )}
                >
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.20em]
                      text-[#00BFD7]
                    "
                  >
                    {name}
                  </p>

                  <p
                    className={cn(
                      "mt-5 text-sm leading-6",
                      featured ? "text-white/68" : "text-[#526E7B]",
                    )}
                  >
                    {subtitle}
                  </p>

                  <ul className="mt-10 space-y-4">
                    {[
                      "Cobertura configurable",
                      "Integración multifunción",
                      tr("Acompa\xF1amiento t\xE9cnico"),
                    ].map((item) => (
                      <li
                        key={item}
                        className="
                          flex
                          items-center
                          gap-3
                          text-sm
                        "
                      >
                        <Check
                          className="
                            size-4
                            shrink-0
                            text-[#00BFD7]
                          "
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant={featured ? "hero" : "outline"}
                    className={cn(
                      `
                        absolute
                        inset-x-7
                        bottom-7
                        w-[calc(100%-3.5rem)]
                      `,
                      featured && "bg-[#39D9FF] text-[#002033] hover:bg-[#72ECF8]",
                    )}
                  >
                    <Link to={localizedPath("/contacto")}>{tr("Solicitar informaci\xF3n")}</Link>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
/* ============================================================
 TECNOLOGÍA
============================================================ */

export function TechnologyAndCases() {
  const architecture = [
    {
      title: tr("Datos"),
      text: tr("Sensores, sat\xE9lites, radar y fuentes oficiales"),
      Icon: Database,
    },
    {
      title: tr("Modelos"),
      text: "Modelización hidrológica y análisis territorial",
      Icon: Waves,
    },
    {
      title: tr("Inteligencia artificial"),
      text: tr("Predicci\xF3n, patrones temporales y detecci\xF3n"),
      Icon: Sparkles,
    },
    {
      title: tr("Informaci\xF3n operativa"),
      text: "Alertas, escenarios y soporte a la decisión",
      Icon: Gauge,
    },
  ] as const;
  const heroLabels = [
    {
      title: tr("Datos"),
      text: "multi-fuente",
      Icon: Database,
      top: "17%",
    },
    {
      title: tr("Modelos"),
      text: "hidrológicos",
      Icon: Waves,
      top: "30%",
    },
    {
      title: "Inteligencia",
      text: "artificial",
      Icon: Sparkles,
      top: "43%",
    },
    {
      title: "Simulación",
      text: "de escenarios",
      Icon: Layers3,
      top: "56%",
    },
    {
      title: tr("Visualizaci\xF3n"),
      text: "geoespacial",
      Icon: Map,
      top: "69%",
    },
  ] as const;
  const dataSources = [
    {
      title: tr("Sat\xE9lites"),
      text: "Información territorial y observación distribuida",
      Icon: Satellite,
      top: "18%",
    },
    {
      title: tr("Radar meteorol\xF3gico"),
      text: "Precipitación y evolución meteorológica",
      Icon: CloudRain,
      top: "36%",
    },
    {
      title: tr("Estaciones de aforo"),
      text: "Caudales y niveles de río",
      Icon: RadioTower,
      top: "54.5%",
    },
    {
      title: "Datos territoriales",
      text: tr("Topograf\xEDa, usos del suelo y cartograf\xEDa"),
      Icon: Layers3,
      top: "73%",
    },
  ] as const;
  const models = [
    {
      title: tr("Modelos hidrol\xF3gicos"),
      text: "Representación de procesos precipitación–escorrentía y evolución de caudales en la cuenca.",
      Icon: Waves,
    },
    {
      title: "Modelos hidráulicos",
      text: "Análisis de propagación, zonas inundables y comportamiento territorial de los escenarios.",
      Icon: Gauge,
    },
    {
      title: tr("Inteligencia artificial"),
      text: tr(
        "Modelos predictivos que identifican patrones temporales y mejoran la capacidad de anticipaci\xF3n.",
      ),
      Icon: Sparkles,
    },
  ] as const;
  return (
    <>
      {/* ======================================================
           BLOQUE 1 · HERO TECNOLOGÍA
        ======================================================= */}

      <section
        className="
          dark-band
          relative
          min-h-[790px]
          overflow-hidden
          pt-28
          lg:min-h-[850px]
          lg:pt-32
        "
      >
        {/* RETÍCULA */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.18]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(57,217,255,0.12) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(57,217,255,0.12) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "58px 58px",
          }}
        />

        {/* PUNTOS */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.22]
          "
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(99,231,255,0.70) 1px, transparent 1.5px)",
            backgroundSize: "115px 115px",
          }}
        />

        {/* GLOW DERECHO */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-8%]
            top-[4%]
            h-[720px]
            w-[800px]
            rounded-full
            bg-[#00AEEF]/[0.15]
            blur-[150px]
          "
        />

        {/* GLOW INFERIOR */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-20%]
            left-[35%]
            h-[480px]
            w-[55%]
            rounded-full
            bg-[#00D8F4]/[0.10]
            blur-[120px]
          "
        />

        {/* CURVAS SUPERIORES */}

        <svg
          className="
            pointer-events-none
            absolute
            right-[-5%]
            top-[2%]
            h-[280px]
            w-[65%]
            opacity-[0.45]
          "
          viewBox="0 0 1000 300"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 190C140 220 220 88 360 116C515 147 580 60 730 95C842 120 920 170 1020 140"
            stroke="#39D9FF"
            strokeWidth="1.15"
          />

          <path
            d="M0 218C145 248 235 125 375 148C528 175 600 95 745 126C865 150 935 198 1020 170"
            stroke="#63E7FF"
            strokeWidth=".9"
            opacity=".65"
          />

          <path
            d="M0 159C150 194 220 52 370 84C527 118 596 32 750 66C870 93 940 143 1020 114"
            stroke="#168AC7"
            strokeWidth=".9"
            opacity=".58"
          />
        </svg>

        <div className="section-shell relative z-10 !max-w-[1500px]">
          <div
            className="
              grid
              min-h-[640px]
              items-center
              gap-12
              lg:grid-cols-[0.78fr_1.22fr]
              lg:gap-4
            "
          >
            {/* TEXTO */}

            <div className="relative z-20 max-w-[650px]">
              <div className="mb-6 flex items-center gap-4">
                <span
                  className="
                    h-px
                    w-10
                    bg-[#63E7FF]
                    shadow-[0_0_8px_rgba(99,231,255,0.9)]
                  "
                />

                <p
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-[#63E7FF]
                  "
                >
                  {tr("Tecnolog\xEDa")}
                </p>
              </div>

              <h1
                className="
                  font-display
                  text-[clamp(3rem,5vw,5.4rem)]
                  font-semibold
                  leading-[0.99]
                  tracking-[-0.045em]
                  text-white
                "
              >
                {tr("Ciencia y")}
                <br />
                tecnología
                <br />
                <span className="text-[#39D9FF]">
                  {tr("para anticipar")}
                  <br />
                  {tr("lo que viene.")}
                </span>
              </h1>

              <p
                className="
                  mt-7
                  max-w-[575px]
                  text-base
                  leading-7
                  text-white/72
                  sm:text-lg
                  sm:leading-8
                "
              >
                {tr(
                  "Integramos datos, modelos hidrol\xF3gicos, inteligencia artificial y visualizaci\xF3n geoespacial para convertir la complejidad del territorio en informaci\xF3n clara y operativa.",
                )}
              </p>

              <Button
                asChild
                variant="hero"
                size="lg"
                className="
                  mt-8
                  border
                  border-[#A7F7FF]/35
                  bg-[#39D9FF]
                  text-[#002033]
                  shadow-[0_0_20px_rgba(57,217,255,0.28)]
                  hover:bg-[#72ECF8]
                "
              >
                <a href="#arquitectura-tecnologia">
                  {tr("Conoce nuestra tecnolog\xEDa")}

                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>

            {/* ==================================================
                 VISUAL HERO
              =================================================== */}

            <div
              className="
                relative
                min-h-[520px]
                lg:min-h-[610px]
              "
            >
              {/* HALO */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-[1%]
                  top-[7%]
                  h-[520px]
                  w-[80%]
                  rounded-full
                  bg-[#00BDE2]/[0.16]
                  blur-[100px]
                "
              />

              {/* ==================================================
                   IMAGEN HERO · AMPLIADA
                =================================================== */}

              <img
                src="/images/tecnologia/tecnologia-hero-cuenca.png"
                alt="Representación tecnológica multicapa de una cuenca hidrológica"
                className="
                  absolute
                  left-[10%]
                  top-[3%]
                  z-[5]
                  h-[100%]
                  w-[100%]
                  object-contain
                  drop-shadow-[0_30px_45px_rgba(0,0,0,0.45)]
                "
                style={{
                  maskImage:
                    "radial-gradient(ellipse 94% 92% at center, black 65%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 94% 92% at center, black 65%, transparent 100%)",
                }}
              />

              {/* ==================================================
                   CONECTORES HERO · MÁS CORTOS
                =================================================== */}

              <svg
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-10
                  hidden
                  size-full
                  xl:block
                "
                viewBox="0 0 900 610"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <filter id="technologyHeroGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />

                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* DATOS */}

                <path
                  d="M490 155 L635 155 L688 120"
                  stroke="#63E7FF"
                  strokeWidth="1.1"
                  opacity=".86"
                />

                <circle cx="490" cy="155" r="4" fill="#63E7FF" filter="url(#technologyHeroGlow)" />

                {/* MODELOS */}

                <path
                  d="M490 227 L642 227 L688 199"
                  stroke="#63E7FF"
                  strokeWidth="1.1"
                  opacity=".86"
                />

                <circle cx="490" cy="227" r="4" fill="#63E7FF" filter="url(#technologyHeroGlow)" />

                {/* INTELIGENCIA */}

                <path
                  d="M590 300 L648 300 L688 278"
                  stroke="#63E7FF"
                  strokeWidth="1.1"
                  opacity=".9"
                />

                <circle cx="590" cy="300" r="4" fill="#63E7FF" filter="url(#technologyHeroGlow)" />

                {/* SIMULACIÓN */}

                <path
                  d="M600 373 L642 373 L688 357"
                  stroke="#63E7FF"
                  strokeWidth="1.1"
                  opacity=".86"
                />

                <circle cx="600" cy="373" r="4" fill="#63E7FF" filter="url(#technologyHeroGlow)" />

                {/* VISUALIZACIÓN */}

                <path
                  d="M575 445 L635 445 L688 436"
                  stroke="#63E7FF"
                  strokeWidth="1.1"
                  opacity=".86"
                />

                <circle cx="575" cy="445" r="4" fill="#63E7FF" filter="url(#technologyHeroGlow)" />
              </svg>

              {/* LABELS HERO */}

              {heroLabels.map(({ title, text, Icon, top }) => (
                <div
                  key={title}
                  className="
                      absolute
                      right-[0%]
                      z-20
                      hidden
                      w-[180px]
                      items-center
                      gap-3
                      py-2
                      xl:flex
                    "
                  style={{
                    top,
                  }}
                >
                  <Icon
                    className="
                        -ml-1
                        size-5
                        shrink-0
                        text-[#7CEEFF]
                        drop-shadow-[0_0_6px_rgba(99,231,255,0.75)]
                      "
                  />

                  <div>
                    <p
                      className="
                          text-sm
                          font-semibold
                          leading-tight
                          text-white
                        "
                    >
                      {title}
                    </p>

                    <p
                      className="
                          mt-0.5
                          text-[11px]
                          leading-4
                          text-white/55
                        "
                    >
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
           BLOQUE 2 · ARQUITECTURA
        ======================================================= */}

      <section
        id="arquitectura-tecnologia"
        className="
          section-space
          relative
          overflow-hidden
          bg-[#F1FAFD]
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            right-[-10%]
            top-[-180px]
            h-[420px]
            w-[55%]
            rounded-full
            bg-[#39D9FF]/[0.06]
            blur-[130px]
          "
        />

        <svg
          className="
            pointer-events-none
            absolute
            right-[-7%]
            top-[-40px]
            h-[300px]
            w-[60%]
            opacity-[0.14]
          "
          viewBox="0 0 900 300"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 220C135 135 225 224 345 155C470 83 565 189 690 119C790 63 842 90 920 43"
            stroke="#39CDE6"
          />

          <path
            d="M0 246C148 170 239 245 362 184C480 126 582 207 702 148C802 99 856 118 930 82"
            stroke="#72DDEC"
            opacity=".65"
          />
        </svg>

        <div className="section-shell relative z-10 !max-w-[1500px]">
          <div
            className="
              grid
              items-center
              gap-12
              lg:grid-cols-[0.78fr_1.22fr]
            "
          >
            <div>
              <p
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#00AFC7]
                "
              >
                {tr("Arquitectura")}
              </p>

              <h2
                className="
                  mt-5
                  font-display
                  text-[clamp(2.8rem,4vw,4.6rem)]
                  font-medium
                  leading-[0.98]
                  tracking-[-0.04em]
                  text-[#001D2D]
                "
              >
                {tr("Una plataforma")}
                <br />
                <span className="text-[#00BFD7]">{tr("integrada y escalable.")}</span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-[560px]
                  text-base
                  leading-7
                  text-[#4C6978]
                "
              >
                {tr(
                  "TARANIS combina m\xFAltiples fuentes de informaci\xF3n y modelos avanzados en una arquitectura modular, robusta y preparada para escalar desde cuencas locales hasta territorios de gran extensi\xF3n.",
                )}
              </p>
            </div>

            <div
              className="
                grid
                gap-4
                sm:grid-cols-2
                xl:grid-cols-4
              "
            >
              {architecture.map(({ title, text, Icon }, index) => (
                <div key={title} className="relative text-center">
                  <article
                    className="
                        relative
                        min-h-[245px]
                        rounded-[18px]
                        border
                        border-[#B4DBE5]
                        bg-white/88
                        px-5
                        py-7
                        shadow-[0_12px_30px_rgba(35,108,134,0.045)]
                      "
                  >
                    <span
                      className="
                          mx-auto
                          grid
                          size-14
                          place-items-center
                          rounded-full
                          bg-[#DDF8FC]
                          text-[#00B8D0]
                        "
                    >
                      <Icon className="size-6" />
                    </span>

                    <h3
                      className="
                          mt-6
                          font-display
                          text-base
                          font-semibold
                          text-[#001D2D]
                        "
                    >
                      {title}
                    </h3>

                    <p
                      className="
                          mt-3
                          text-sm
                          leading-5
                          text-[#526E7B]
                        "
                    >
                      {text}
                    </p>
                  </article>

                  {index < architecture.length - 1 && (
                    <ArrowRight
                      className="
                          absolute
                          -right-[18px]
                          top-[105px]
                          z-20
                          hidden
                          size-5
                          text-[#00BFD7]
                          xl:block
                        "
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
           BLOQUE 3 · DATOS MULTIFUENTE
        ======================================================= */}

      <section
        id="fuentes-datos"
        className="
          dark-band
          relative
          overflow-hidden
          section-space
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            grid-field
            opacity-[0.16]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[10%]
            top-[15%]
            h-[440px]
            w-[42%]
            rounded-full
            bg-[#00AEEF]/[0.10]
            blur-[110px]
          "
        />

        <div className="section-shell relative z-10 !max-w-[1500px]">
          <div
            className="
              grid
              items-center
              gap-14
              lg:grid-cols-[0.82fr_1.18fr]
            "
          >
            {/* TEXTO */}

            <div>
              <p
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#63E7FF]
                "
              >
                {tr("Datos")}
              </p>

              <h2
                className="
                  mt-5
                  max-w-[670px]
                  font-display
                  text-[clamp(2.8rem,4.3vw,4.6rem)]
                  font-medium
                  leading-[0.94]
                  tracking-[-0.04em]
                  text-white
                "
              >
                {tr("M\xFAltiples fuentes")}
                <br />
                {tr("para una")}
                <span className="text-[#39D9FF]">{tr("visi\xF3n completa.")}</span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-[610px]
                  text-base
                  leading-7
                  text-white/65
                "
              >
                {tr(
                  "Integramos y procesamos informaci\xF3n procedente de diferentes fuentes para construir una representaci\xF3n coherente y actualizada del territorio y de su comportamiento hidrol\xF3gico.",
                )}
              </p>
            </div>

            {/* ==================================================
                 DIAGRAMA MULTICAPA
              =================================================== */}

            <div
              className="
                relative
                min-h-[540px]
              "
            >
              {/* GLOW */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-[4%]
                  top-[14%]
                  hidden
                  h-[370px]
                  w-[58%]
                  rounded-full
                  bg-[#00CBE5]/[0.13]
                  blur-[90px]
                  xl:block
                "
              />

              {/* IMAGEN */}

              <img
                src="/images/tecnologia/tecnologia-fuentes-multicapa.png"
                alt={tr(
                  "Capas de informaci\xF3n geoespacial, meteorol\xF3gica e hidrol\xF3gica utilizadas por TARANIS",
                )}
                loading="lazy"
                className="
                  relative
                  z-10
                  mx-auto
                  max-h-[490px]
                  w-full
                  max-w-[620px]
                  object-contain
                  drop-shadow-[0_30px_45px_rgba(0,0,0,0.42)]
                  xl:absolute
                  xl:left-[-2%]
                  xl:top-1/2
                  xl:w-[65%]
                  xl:-translate-y-1/2
                "
                style={{
                  maskImage:
                    "radial-gradient(ellipse 94% 94% at center, black 70%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 94% 94% at center, black 70%, transparent 100%)",
                }}
              />

              {/* ==================================================
                   CONECTORES
                =================================================== */}

              <svg
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-20
                  hidden
                  size-full
                  xl:block
                "
                viewBox="0 0 900 540"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <filter id="dataSourceGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />

                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* SATÉLITES */}

                <path d="M515 118 H722" stroke="#63E7FF" strokeWidth="1.15" opacity=".82" />

                <circle cx="515" cy="118" r="4" fill="#63E7FF" filter="url(#dataSourceGlow)" />

                {/* RADAR */}

                <path d="M515 214 H722" stroke="#63E7FF" strokeWidth="1.15" opacity=".82" />

                <circle cx="515" cy="214" r="4" fill="#63E7FF" filter="url(#dataSourceGlow)" />

                {/* AFOROS */}

                <path d="M515 314 H722" stroke="#63E7FF" strokeWidth="1.15" opacity=".82" />

                <circle cx="515" cy="314" r="4" fill="#63E7FF" filter="url(#dataSourceGlow)" />

                {/* TERRITORIO */}

                <path d="M480 414 H722" stroke="#63E7FF" strokeWidth="1.15" opacity=".82" />

                <circle cx="480" cy="414" r="4" fill="#63E7FF" filter="url(#dataSourceGlow)" />
              </svg>

              {/* ==================================================
                   LABELS DESKTOP · DESPLAZADOS A LA DERECHA
                =================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[-82px]
                  top-0
                  hidden
                  h-full
                  w-[235px]
                  xl:block
                "
              >
                {dataSources.map(({ title, text, Icon, top }) => (
                  <div
                    key={title}
                    className="
                        absolute
                        right-0
                        flex
                        w-[225px]
                        items-start
                        gap-4
                      "
                    style={{
                      top,
                    }}
                  >
                    <span
                      className="
                          mt-0.5
                          grid
                          size-9
                          shrink-0
                          place-items-center
                          rounded-full
                          border
                          border-[#63E7FF]/35
                          bg-[#39D9FF]/10
                          text-[#7CEEFF]
                          shadow-[0_0_12px_rgba(57,217,255,0.12)]
                        "
                    >
                      <Icon className="size-4" />
                    </span>

                    <div>
                      <p
                        className="
                            text-sm
                            font-semibold
                            leading-tight
                            text-white
                          "
                      >
                        {title}
                      </p>

                      <p
                        className="
                            mt-1
                            text-xs
                            leading-5
                            text-white/50
                          "
                      >
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* LABELS MOBILE */}

              <div
                className="
                  relative
                  z-30
                  mt-7
                  grid
                  gap-5
                  sm:grid-cols-2
                  xl:hidden
                "
              >
                {dataSources.map(({ title, text, Icon }) => (
                  <div key={title} className="flex items-start gap-4">
                    <span
                      className="
                          mt-0.5
                          grid
                          size-9
                          shrink-0
                          place-items-center
                          rounded-full
                          border
                          border-[#63E7FF]/35
                          bg-[#39D9FF]/10
                          text-[#7CEEFF]
                        "
                    >
                      <Icon className="size-4" />
                    </span>

                    <div>
                      <p
                        className="
                            text-sm
                            font-semibold
                            text-white
                          "
                      >
                        {title}
                      </p>

                      <p
                        className="
                            mt-1
                            text-xs
                            leading-5
                            text-white/50
                          "
                      >
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
           BLOQUE 4 · MODELOS + IA
        ======================================================= */}

      <section
        id="modelos-ia"
        className="
          section-space
          relative
          overflow-hidden
          bg-[#F1FAFD]
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            left-[20%]
            top-[-180px]
            h-[420px]
            w-[60%]
            rounded-full
            bg-[#39D9FF]/[0.055]
            blur-[130px]
          "
        />

        <div className="section-shell relative z-10 !max-w-[1500px]">
          <div
            className="
              grid
              items-center
              gap-12
              lg:grid-cols-[0.72fr_1.28fr]
            "
          >
            <div>
              <p
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#00AFC7]
                "
              >
                {tr("Modelos e inteligencia artificial")}
              </p>

              <h2
                className="
                  mt-5
                  font-display
                  text-[clamp(2.9rem,4.4vw,4.8rem)]
                  font-medium
                  leading-[0.93]
                  tracking-[-0.04em]
                  text-[#001D2D]
                "
              >
                {tr("Del dato al")}
                <br />
                <span className="text-[#00BFD7]">{tr("conocimiento.")}</span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-[560px]
                  text-base
                  leading-7
                  text-[#4C6978]
                "
              >
                {tr(
                  "Combinamos modelizaci\xF3n hidrol\xF3gica, an\xE1lisis territorial e inteligencia artificial para transformar observaciones en informaci\xF3n capaz de anticipar la evoluci\xF3n de un episodio.",
                )}
              </p>
            </div>

            <div
              className="
                grid
                gap-4
                md:grid-cols-3
              "
            >
              {models.map(({ title, text, Icon }) => (
                <article
                  key={title}
                  className="
                      group
                      relative
                      min-h-[295px]
                      overflow-hidden
                      rounded-[18px]
                      border
                      border-[#B4DBE5]
                      bg-white/88
                      p-7
                      shadow-[0_12px_30px_rgba(35,108,134,0.05)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#39CFE9]/75
                      hover:shadow-[0_18px_40px_rgba(35,108,134,0.09)]
                    "
                >
                  <span
                    className="
                        grid
                        size-12
                        place-items-center
                        rounded-full
                        bg-[#DDF8FC]
                        text-[#00B8D0]
                      "
                  >
                    <Icon className="size-6" />
                  </span>

                  <h3
                    className="
                        mt-7
                        font-display
                        text-lg
                        font-semibold
                        text-[#001D2D]
                      "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                        mt-3
                        text-sm
                        leading-6
                        text-[#526E7B]
                      "
                  >
                    {text}
                  </p>

                  <svg
                    className="
                        pointer-events-none
                        absolute
                        inset-x-0
                        bottom-0
                        h-[70px]
                        w-full
                        opacity-[0.5]
                      "
                    viewBox="0 0 300 70"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 54C45 38 70 53 105 40C145 25 164 51 200 38C236 26 262 42 300 25"
                      stroke="#39CDE6"
                    />

                    <path
                      d="M0 62C45 50 73 61 110 51C147 39 171 58 207 48C245 38 271 51 300 42"
                      stroke="#8BE6F2"
                      opacity=".65"
                    />
                  </svg>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
           BLOQUE 5 · DEL MODELO A LA DECISIÓN
        ======================================================= */}

      <section
        className="
          dark-band
          relative
          overflow-hidden
          section-space
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            grid-field
            opacity-[0.15]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[4%]
            top-[10%]
            h-[520px]
            w-[58%]
            rounded-full
            bg-[#00AEEF]/[0.11]
            blur-[120px]
          "
        />

        <svg
          className="
            pointer-events-none
            absolute
            left-[-5%]
            bottom-[-40px]
            h-[220px]
            w-[60%]
            opacity-[0.32]
          "
          viewBox="0 0 900 220"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 170C120 130 210 190 325 142C438 95 522 161 630 118C735 76 807 94 920 53"
            stroke="#39D9FF"
          />

          <path
            d="M0 198C130 154 224 209 342 161C449 116 545 179 654 137C755 99 824 110 930 77"
            stroke="#7CEEFF"
            opacity=".55"
          />
        </svg>

        <div className="section-shell relative z-10 !max-w-[1500px]">
          <div
            className="
              grid
              items-center
              gap-14
              lg:grid-cols-[0.72fr_1.28fr]
            "
          >
            {/* TEXTO */}

            <div>
              <p
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#63E7FF]
                "
              >
                {tr("Del modelo a la decisi\xF3n")}
              </p>

              <h2
                className="
                  mt-5
                  max-w-[650px]
                  font-display
                  text-[clamp(2.9rem,4.4vw,4.8rem)]
                  font-medium
                  leading-[0.94]
                  tracking-[-0.04em]
                  text-white
                "
              >
                {tr("Informaci\xF3n visual")}
                <br />
                para <span className="text-[#39D9FF]">{tr("decisiones reales.")}</span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-[580px]
                  text-base
                  leading-7
                  text-white/65
                "
              >
                {tr(
                  "TARANIS transforma datos, modelos y escenarios en informaci\xF3n geoespacial clara, intuitiva y accionable para apoyar la gesti\xF3n del riesgo de inundaci\xF3n.",
                )}
              </p>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="
                  mt-8
                  border-[#39D9FF]/75
                  bg-transparent
                  text-[#63E7FF]
                  hover:bg-[#39D9FF]/10
                  hover:text-[#8CF4FF]
                "
              >
                <Link to={localizedPath("/producto")}>
                  {tr("Ver la plataforma")}

                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>

            {/* ==================================================
                 MONITOR
              =================================================== */}

            <div
              className="
                relative
                mx-auto
                w-full
                max-w-[760px]
                pb-14
              "
            >
              {/* GLOW */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-[8%]
                  top-[8%]
                  h-[75%]
                  w-[84%]
                  rounded-full
                  bg-[#00CBE5]/[0.16]
                  blur-[95px]
                "
              />

              {/* SOMBRA */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[6px]
                  left-[12%]
                  h-[45px]
                  w-[76%]
                  rounded-full
                  bg-black/55
                  blur-3xl
                "
              />

              {/* MONITOR */}

              <div
                className="
                  relative
                  z-20
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-[#6EDFFF]/55
                  bg-[#02131F]
                  p-[7px]
                  shadow-[0_30px_80px_rgba(0,0,0,0.55),0_0_32px_rgba(57,217,255,0.18)]
                "
              >
                {/* CÁMARA */}

                <span
                  className="
                    absolute
                    left-1/2
                    top-[3px]
                    z-40
                    size-1.5
                    -translate-x-1/2
                    rounded-full
                    bg-[#63E7FF]/60
                    shadow-[0_0_6px_rgba(99,231,255,0.60)]
                  "
                />

                {/* PANTALLA */}

                <div
                  className="
                    overflow-hidden
                    rounded-[16px]
                    bg-[#00121D]
                  "
                >
                  <img
                    src="/images/tecnologia/tecnologia-plataforma-decision.png"
                    alt="Interfaz TARANIS con mapa de inundación, estaciones e información hidrológica"
                    loading="lazy"
                    className="
                      block
                      h-auto
                      w-full
                    "
                  />
                </div>

                {/* BISEL */}

                <div
                  className="
                    h-4
                    bg-gradient-to-b
                    from-[#071E2B]
                    to-[#03111A]
                  "
                />
              </div>

              {/* SOPORTE */}

              <div
                className="
                  relative
                  z-[15]
                  mx-auto
                  h-[42px]
                  w-[92px]
                  bg-gradient-to-b
                  from-[#8497A0]
                  via-[#536B76]
                  to-[#172B35]
                  [clip-path:polygon(32%_0,68%_0,82%_100%,18%_100%)]
                "
              />

              {/* BASE */}

              <div
                className="
                  relative
                  z-[14]
                  mx-auto
                  -mt-[2px]
                  h-[11px]
                  w-[280px]
                  rounded-[50%]
                  bg-gradient-to-r
                  from-[#172A34]
                  via-[#A8BBC2]
                  to-[#172A34]
                  shadow-[0_12px_28px_rgba(0,0,0,0.65)]
                "
              />

              {/* REFLEJO */}

              <div
                className="
                  relative
                  z-[13]
                  mx-auto
                  mt-1
                  h-[4px]
                  w-[235px]
                  rounded-full
                  bg-[#63E7FF]/15
                  blur-[3px]
                "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/*IMPLEMENTACIÓN*/

export function DeliveryAndTrust() {
  const plans = [
    ["ESENCIAL", tr("Monitorizaci\xF3n y contexto territorial")],
    ["PROFESIONAL", tr("Predicci\xF3n, modelos y alertas")],
    ["TERRITORIAL", "Cobertura y operación a escala amplia"],
  ];
  return (
    <>
      <section className="section-space bg-background">
        <div className="section-shell">
          <SectionHeader
            eyebrow={tr("Implementaci\xF3n")}
            title={tr("De tu territorio a TARANIS.")}
            text={tr(
              "Cada despliegue puede adaptarse a las caracter\xEDsticas hidrol\xF3gicas y operativas del territorio.",
            )}
          />

          <div className="mt-14 grid gap-4 lg:grid-cols-4">
            {[
              tr("An\xE1lisis"),
              "Integración de datos",
              "Configuración y modelización",
              "Operación",
            ].map((x, i) => (
              <article key={x} className="border-t border-primary pt-5">
                <span className="text-xs text-primary">0{i + 1}</span>

                <h3 className="mt-8 font-display text-xl">{x}</h3>
              </article>
            ))}
          </div>

          <Button asChild variant="quiet" size="lg" className="mt-10">
            <Link to={localizedPath("/contacto")}>
              {tr("H\xE1blanos de tu territorio")}

              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <section className="section-space bg-surface">
        <div className="section-shell">
          <SectionHeader
            eyebrow={tr("Modelo de servicio")}
            title={tr("Una configuraci\xF3n para cada escala.")}
            text={tr(
              "Las capacidades y cobertura se configuran seg\xFAn el territorio, fuentes de informaci\xF3n, nivel de modelizaci\xF3n y necesidades operativas.",
            )}
          />

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {plans.map(([t, d], i) => (
              <article
                key={t}
                className={cn(
                  "rounded-2xl border p-8",
                  i === 1
                    ? "border-primary bg-deep text-on-dark shadow-product"
                    : "border-border bg-card",
                )}
              >
                <p className="eyebrow">{t}</p>

                <p
                  className={cn(
                    "mt-8 min-h-14",
                    i === 1 ? "text-on-dark/65" : "text-muted-foreground",
                  )}
                >
                  {d}
                </p>

                <ul className="my-8 space-y-3 text-sm">
                  {[
                    "Cobertura configurable",
                    "Integración multifunción",
                    tr("Acompa\xF1amiento t\xE9cnico"),
                  ].map((x) => (
                    <li className="flex gap-2" key={x}>
                      <Check className="size-4 text-primary" />
                      {x}
                    </li>
                  ))}
                </ul>

                <Button asChild variant={i === 1 ? "hero" : "quiet"} className="w-full">
                  <Link to={localizedPath("/contacto")}>{tr("Solicitar informaci\xF3n")}</Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-background">
        <div className="section-shell">
          <SectionHeader
            eyebrow={tr("Base tecnol\xF3gica")}
            title={tr("Una plataforma preparada para crecer con el territorio.")}
            text={tr(
              "La arquitectura combina integraci\xF3n de fuentes, modelizaci\xF3n y visualizaci\xF3n geoespacial. Las alianzas, certificaciones y referencias institucionales se incorporar\xE1n \xFAnicamente cuando est\xE9n verificadas y autorizadas.",
            )}
          />

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {[
              ["MULTIFUENTE", "Integración de información"],
              ["IA + HIDROLOGÍA", "Modelización complementaria"],
              ["GEOSPACIAL", "Lectura territorial"],
              ["MODULAR", "Arquitectura escalable"],
            ].map(([a, b]) => (
              <div key={a} className="bg-card p-7">
                <p className="font-display text-2xl text-primary">{a}</p>

                <p className="mt-2 text-sm text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/*RECURSOS + FAQ */

export function ResourcesFaq() {
  const faqs = [
    [
      "¿Qué es TARANIS?",
      "Una plataforma de inteligencia hidrológica y alerta temprana que integra datos, modelización e inteligencia artificial para apoyar decisiones.",
    ],
    [
      "¿Para qué territorios puede utilizarse?",
      "Puede configurarse desde ámbitos municipales hasta áreas territoriales extensas, según datos y objetivos operativos.",
    ],
    [
      "¿Qué información utiliza TARANIS?",
      "Información meteorológica, hidrológica, satelital, cartográfica e histórica, incluyendo fuentes como AEMET, radar, SAIH y Copernicus.",
    ],
    [
      "¿Es necesario instalar sensores?",
      "No necesariamente. Puede aprovechar fuentes existentes y modelización, e integrar sensores cuando aporten valor.",
    ],
    [
      "¿Qué horizonte de predicción ofrece?",
      "Puede trabajar con distintos horizontes según la configuración, las fuentes y los modelos disponibles.",
    ],
    [
      "¿Puede integrarse con sistemas existentes?",
      "La arquitectura está concebida para integrar fuentes y sistemas existentes según las necesidades del despliegue.",
    ],
    [
      "¿TARANIS sustituye a los sistemas de emergencia existentes?",
      "No. TARANIS aporta información para apoyar y complementar los procedimientos y sistemas operativos existentes.",
    ],
    [
      "¿Cómo se implementa?",
      "Mediante análisis del territorio, integración de datos, configuración y modelización, y puesta en operación.",
    ],
    [
      "¿Cómo puedo solicitar una demostración?",
      "Completa el formulario y el equipo preparará una conversación adaptada a las características de tu territorio.",
    ],
  ];
  return (
    <>
      <section className="section-space bg-background">
        <div className="section-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <SectionHeader eyebrow="FAQ" title={tr("Preguntas frecuentes.")} />

          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map(([question, answer], i) => (
              <AccordionItem value={`faq-${i}`} key={question}>
                <AccordionTrigger className="py-6 text-left font-display text-base hover:no-underline">
                  {question}
                </AccordionTrigger>

                <AccordionContent className="max-w-2xl pb-6 leading-7 text-muted-foreground">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}

/*CTA FINAL */

export function FinalCta() {
  return (
    <section className="section-space dark-band topo-field">
      <div className="section-shell text-center">
        <h2 className="mx-auto max-w-5xl font-display text-[clamp(3rem,7vw,6.5rem)] font-medium leading-[.95]">
          {tr("El riesgo no espera.")}

          <br />

          <span className="text-primary">{tr("Tu decisi\xF3n tampoco deber\xEDa.")}</span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-on-dark/65">
          {tr(
            "Descubre c\xF3mo TARANIS puede ayudar a anticipar escenarios de inundaci\xF3n en tu territorio.",
          )}
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild variant="hero" size="xl">
            <Link to={localizedPath("/contacto")}>{tr("Solicitar una demo")}</Link>
          </Button>

          <Button asChild variant="glass" size="xl">
            <Link to={localizedPath("/contacto")}>{tr("Contactar con TARANIS")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/*FORMULARIO== */

const demoFormCopy: Record<
  Locale,
  {
    sending: string;
    successTitle: string;
    successText: string;
    close: string;
    error: string;
  }
> = {
  es: {
    sending: "Enviando...",
    successTitle: "Solicitud enviada correctamente",
    successText:
      "Gracias por contactar con TARANIS. Hemos recibido tu solicitud de demostración y un miembro de nuestro equipo se pondrá en contacto contigo en breve.",
    close: "Cerrar",
    error:
      "No se ha podido enviar la solicitud. Inténtalo de nuevo en unos minutos o escríbenos a demo@taranisapp.com.",
  },
  en: {
    sending: "Sending...",
    successTitle: "Request sent successfully",
    successText:
      "Thank you for contacting TARANIS. We have received your demo request and a member of our team will contact you shortly.",
    close: "Close",
    error:
      "We could not send your request. Please try again in a few minutes or email us at demo@taranisapp.com.",
  },
  "pt-BR": {
    sending: "Enviando...",
    successTitle: "Solicitação enviada com sucesso",
    successText:
      "Obrigado por entrar em contato com a TARANIS. Recebemos sua solicitação de demonstração e um membro da nossa equipe entrará em contato em breve.",
    close: "Fechar",
    error:
      "Não foi possível enviar sua solicitação. Tente novamente em alguns minutos ou envie um e-mail para demo@taranisapp.com.",
  },
};

export function DemoForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const locale = getActiveLocale();
  const copy = demoFormCopy[locale];

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      nombre: data.get("nombre")?.toString().trim() ?? "",
      apellidos: data.get("apellidos")?.toString().trim() ?? "",
      organizacion: data.get("organizacion")?.toString().trim() ?? "",
      cargo: data.get("cargo")?.toString().trim() ?? "",
      email: data.get("email")?.toString().trim() ?? "",
      telefono: data.get("telefono")?.toString().trim() ?? "",
      pais: data.get("pais")?.toString().trim() ?? "",
      tipo: data.get("tipo")?.toString().trim() ?? "",
      territorio: data.get("territorio")?.toString().trim() ?? "",
      mensaje: data.get("mensaje")?.toString().trim() ?? "",
      website: data.get("website")?.toString().trim() ?? "",
      locale,
    };

    setStatus("sending");

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Demo request failed");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("TARANIS demo request error:", error);
      setStatus("error");
    }
  }

  return (
    <div className="relative">
      <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2" aria-busy={status === "sending"}>
        <Field label={tr("Nombre")}>
          <Input required name="nombre" autoComplete="given-name" />
        </Field>

        <Field label={tr("Apellidos")}>
          <Input required name="apellidos" autoComplete="family-name" />
        </Field>

        <Field label={tr("Organización")}>
          <Input required name="organizacion" autoComplete="organization" />
        </Field>

        <Field label={tr("Cargo")}>
          <Input name="cargo" autoComplete="organization-title" />
        </Field>

        <Field label={tr("Email")}>
          <Input required type="email" name="email" autoComplete="email" />
        </Field>

        <Field label={tr("Teléfono")}>
          <Input type="tel" name="telefono" autoComplete="tel" />
        </Field>

        <Field label={tr("País")}>
          <Input name="pais" autoComplete="country-name" />
        </Field>

        <Field label={tr("Tipo de organización")}>
          <select
            name="tipo"
            required
            defaultValue=""
            className="flex h-11 w-full rounded-xl border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="" disabled>
              {tr("Seleccionar")}
            </option>

            <option value="Administración">{tr("Administración")}</option>
            <option value="Protección Civil">{tr("Protección Civil")}</option>
            <option value="Organismo de cuenca">{tr("Organismo de cuenca")}</option>
            <option value="Empresa / Infraestructura">{tr("Empresa / Infraestructura")}</option>
            <option value="Otro">{tr("Otro")}</option>
          </select>
        </Field>

        <Field label={tr("Territorio de interés")} wide>
          <Input name="territorio" />
        </Field>

        <Field label={tr("Mensaje")} wide>
          <Textarea name="mensaje" className="min-h-32" />
        </Field>

        {/* Campo señuelo anti-bots: debe permanecer vacío y oculto para usuarios reales. */}
        <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <label className="flex gap-3 text-sm text-muted-foreground sm:col-span-2">
          <input required type="checkbox" className="mt-1 size-4 accent-primary" />
          {tr(
            "He leído y acepto la política de privacidad y el tratamiento de datos para atender mi solicitud.",
          )}
        </label>

        <Button
          type="submit"
          variant="hero"
          size="lg"
          disabled={status === "sending"}
          className="sm:col-span-2 sm:w-fit"
        >
          {status === "sending" ? copy.sending : tr("Solicitar demostración")}
          <ArrowRight className={status === "sending" ? "animate-pulse" : undefined} />
        </Button>

        {status === "error" && (
          <div
            className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm leading-6 text-red-700 sm:col-span-2"
            role="alert"
          >
            {copy.error}
          </div>
        )}
      </form>

      {status === "success" && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-deep/65 px-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-success-title"
        >
          <div className="w-full max-w-md rounded-[24px] border border-primary/30 bg-background p-7 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-9">
            <div className="grid size-12 place-items-center rounded-full border border-primary/30 bg-primary/10">
              <Check className="size-6 text-primary" />
            </div>

            <h3 id="demo-success-title" className="mt-6 font-display text-2xl font-semibold text-foreground">
              {copy.successTitle}
            </h3>

            <p className="mt-4 leading-7 text-muted-foreground">{copy.successText}</p>

            <Button
              type="button"
              variant="hero"
              size="lg"
              className="mt-7 w-full rounded-full"
              onClick={() => setStatus("idle")}
            >
              {copy.close}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
function Field({ label, wide, children }: { label: string; wide?: boolean; children: ReactNode }) {
  return (
    <label className={cn("space-y-2 text-sm font-medium", wide && "sm:col-span-2")}>
      <span>{label}</span>
      {children}
    </label>
  );
}

/*CONTACTO */

export function ContactSection() {
  return (
    <section className="section-space bg-surface">
      <div className="section-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <SectionHeader
          eyebrow={tr("Solicitar demo")}
          title={tr("Hablemos de tu territorio.")}
          text={tr(
            "Cu\xE9ntanos el contexto operativo y prepararemos una demostraci\xF3n centrada en tus necesidades.",
          )}
        />

        <DemoForm />
      </div>
    </section>
  );
}
