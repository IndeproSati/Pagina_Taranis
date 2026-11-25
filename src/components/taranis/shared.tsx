import { tr } from "@/i18n/translations";
import {
  getActiveLocale,
  localizedPath,
  localeLabel,
  SUPPORTED_LOCALES,
  pathForLocale,
  canonicalPathFromLocalized,
  type Locale,
} from "@/i18n/config";

import { FaLinkedinIn, FaYoutube } from "react-icons/fa6";

import { Link, useRouterState } from "@tanstack/react-router";

import { ArrowRight, ChevronRight, Menu, X } from "lucide-react";

import { useEffect, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

/* ============================================================
   NAVEGACIÓN
============================================================ */

export const navItems = [
  ["Producto", "/producto"],
  ["Soluciones", "/soluciones"],
  ["Tecnología", "/tecnologia"],
  ["Recursos", "/recursos"],
  ["TARANIS", "/empresa"],
  ["Contacto", "/contacto"],
] as const;

/*
 * Navegación principal del escritorio.
 * Mantiene la cabecera limpia como en el mockup aprobado.
 */
const primaryNavItems = [
  ["Producto", "/producto"],
  ["Soluciones", "/soluciones"],
  ["Tecnología", "/tecnologia"],
  ["Recursos", "/recursos"],
] as const;

/* ============================================================
   REDES
============================================================ */

const socialLinks = [
  {
    label: "LinkedIn",
    href: import.meta.env["VITE_LINKEDIN_URL"] as string | undefined,
    Icon: FaLinkedinIn,
  },
  {
    label: "YouTube",
    href: import.meta.env["VITE_YOUTUBE_URL"] as string | undefined,
    Icon: FaYoutube,
  },
];

/* ============================================================
   MARCA
============================================================ */

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to={localizedPath("/")}
      className="group flex items-center gap-3"
      aria-label="TARANIS, inicio"
    >
      <img
        src="/brand/taranis-logo.png"
        alt=""
        width={52}
        height={52}
        className="
          size-10
          object-contain
          brightness-0
          invert
          transition-transform
          duration-300
          group-hover:scale-105
        "
      />

      {!compact && (
        <span
          className="
            font-display
            text-lg
            font-semibold
            tracking-[0.28em]
            text-on-dark
          "
        >
          {tr("TARANIS")}
        </span>
      )}
    </Link>
  );
}

/* ============================================================
   SELECTOR DE IDIOMA
============================================================ */

export function LanguageSwitcher({
  mobile = false,
}: {
  mobile?: boolean;
}) {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const active = getActiveLocale();

  const canonical =
    canonicalPathFromLocalized(pathname) ?? pathname;

  return (
    <div
      className={cn(
        "flex items-center gap-1",
        mobile && "mt-5 border-t border-on-dark/10 pt-5",
      )}
    >
      {SUPPORTED_LOCALES.map((locale: Locale) => {
        const href = pathForLocale(canonical, locale);

        const short =
          locale === "pt-BR"
            ? "PT-BR"
            : locale.toUpperCase();

        return (
          <a
            key={locale}
            href={href}
            hrefLang={locale === "pt-BR" ? "pt-BR" : locale}
            lang={locale === "pt-BR" ? "pt-BR" : locale}
            aria-label={localeLabel[locale]}
            aria-current={active === locale ? "page" : undefined}
            className={cn(
              "rounded-full px-2.5 py-1.5 text-[11px] font-semibold tracking-wide transition-colors",
              active === locale
                ? "bg-primary/15 text-primary"
                : "text-on-dark/55 hover:bg-on-dark/5 hover:text-on-dark",
            )}
          >
            {short}
          </a>
        );
      })}
    </div>
  );
}

/* ============================================================
   NAVBAR
============================================================ */

export function Navbar() {
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        `
          fixed
          inset-x-0
          top-0
          z-50
          text-on-dark
          transition-all
          duration-500
        `,
        scrolled &&
          `
            border-b
            border-on-dark/10
            bg-deep/90
            shadow-[0_8px_40px_rgba(0,0,0,0.18)]
            backdrop-blur-xl
          `,
      )}
    >
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <Brand />

        {/* Navegación escritorio */}
        <nav
          className="hidden shrink-0 items-center gap-4 whitespace-nowrap lg:flex xl:gap-9"
          aria-label={tr("Navegación principal")}
        >
          {primaryNavItems.map(([label, to]) => (
            <Link
              key={label}
              to={localizedPath(to)}
              className="
                text-sm
                font-medium
                text-on-dark/72
                transition-colors
                hover:text-primary
              "
              activeProps={{
                className: "text-primary",
              }}
            >
              {tr(label)}
            </Link>
          ))}
        </nav>

        {/* Idioma + CTA escritorio */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-4">
          <LanguageSwitcher />

          <Button
            asChild
            variant="glass"
            size="lg"
            className="
              rounded-full
              border-primary/70
              bg-transparent
              px-4
              text-sm
              xl:px-7
              xl:text-base
              text-primary
              hover:bg-primary/10
            "
          >
            <Link to={localizedPath("/contacto")}>
              {tr("Solicitar demo")}
            </Link>
          </Button>
        </div>

        {/* Menú móvil */}
        <Button
          variant="glass"
          size="icon"
          className="lg:hidden"
          aria-expanded={open}
          aria-controls="taranis-mobile-navigation"
          aria-label={
            open
              ? tr("Cerrar menú")
              : tr("Abrir menú")
          }
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Navegación móvil */}
      {open && (
        <div
          id="taranis-mobile-navigation"
          className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-on-dark/10 bg-deep/95 px-4 py-6 backdrop-blur-xl lg:hidden"
        >
          <nav
            className="mx-auto flex max-w-lg flex-col"
            aria-label={tr("Navegación móvil")}
          >
            {navItems.map(([label, to]) => (
              <Link
                key={label}
                to={localizedPath(to)}
                onClick={() => setOpen(false)}
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-on-dark/10
                  py-4
                  text-on-dark/80
                "
              >
                {tr(label)}

                <ChevronRight className="size-4" />
              </Link>
            ))}

            <Button
              asChild
              variant="hero"
              size="lg"
              className="mt-6 rounded-full"
            >
              <Link
                to={localizedPath("/contacto")}
                onClick={() => setOpen(false)}
              >
                {tr("Solicitar demo")}
              </Link>
            </Button>

            <LanguageSwitcher mobile />
          </nav>
        </div>
      )}
    </header>
  );
}

/* ============================================================
   CABECERAS DE SECCIÓN
============================================================ */

export function SectionHeader({
  eyebrow,
  title,
  text,
  dark = false,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  dark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-4xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <p className="eyebrow mb-5">
        {eyebrow}
      </p>

      <h2
        className={cn(
          "title-section text-balance",
          dark
            ? "text-on-dark"
            : "text-foreground",
        )}
      >
        {title}
      </h2>

      {text && (
        <p
          className={cn(
            "mt-7 max-w-2xl text-lg leading-8",
            align === "center" && "mx-auto",
            dark
              ? "text-on-dark/65"
              : "text-muted-foreground",
          )}
        >
          {text}
        </p>
      )}
    </div>
  );
}

/* ============================================================
   FOOTER
============================================================ */

export function Footer() {
  return (
    <footer className="border-t border-on-dark/10 bg-deep py-14 text-on-dark">
      <div className="section-shell">

        {/* =====================================================
            PARTE SUPERIOR DEL FOOTER
        ====================================================== */}

        <div
          className="
            grid
            gap-12
            border-b
            border-on-dark/10
            pb-12
            lg:grid-cols-[1.15fr_1.85fr]
          "
        >
          {/* Marca y descripción */}
          <div>
            <Brand />

            <p className="mt-5 max-w-sm text-sm leading-6 text-on-dark/55">
              {tr(
                "Plataforma de inteligencia hidrológica y alerta temprana para anticipar escenarios de inundación.",
              )}
            </p>
          </div>

          {/* Navegación secundaria */}
          <nav
            className="
              grid
              grid-cols-2
              gap-x-8
              gap-y-5
              text-sm
              sm:grid-cols-3
            "
            aria-label={tr("Navegación secundaria")}
          >
            {navItems.map(([label, to]) => (
              <Link
                key={label}
                to={localizedPath(to)}
                className="
                  text-on-dark/60
                  transition-colors
                  hover:text-primary
                "
              >
                {label === "Producto"
                  ? tr("Plataforma TARANIS")
                  : label === "Soluciones"
                    ? tr("Soluciones por organización")
                    : label === "Tecnología"
                      ? tr("Tecnología hidrológica e IA")
                      : label === "Recursos"
                        ? tr("Recursos sobre inundaciones")
                        : tr(label)}
              </Link>
            ))}
          </nav>
        </div>

        {/* =====================================================
            FRANJA INFERIOR DEL FOOTER
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-6
            pt-7
            text-center
            text-sm
            text-on-dark/45
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-8
          "
        >
          {/* Copyright */}
          <div className="lg:justify-self-start">
            <p>
              © 2026 TARANIS by INDEPRO
            </p>
          </div>

          {/* Web de INDEPRO */}
          <div className="lg:justify-self-center">
            <a
              href="https://www.indepro.es"
              target="_blank"
              rel="noopener noreferrer"
              className="
                transition-colors
                hover:text-on-dark/80
              "
            >
              WWW.INDEPRO.ES
            </a>
          </div>

          {/* Redes sociales */}
          <div
            className="
              flex
              items-center
              justify-center
              gap-3
              lg:justify-self-center
            "
            aria-label={tr("Redes sociales")}
          >
            {socialLinks.map(
              ({ label, href, Icon }) =>
                href && (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} TARANIS`}
                    title={label}
                    className="
                      group
                      inline-flex
                      size-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-on-dark/15
                      text-on-dark/55
                      transition-all
                      duration-300
                      hover:border-primary/60
                      hover:bg-primary/10
                      hover:text-primary
                      hover:-translate-y-0.5
                    "
                  >
                    <Icon
                      className="
                        size-[18px]
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                      aria-hidden="true"
                    />
                  </a>
                ),
            )}
          </div>

          {/* Selector de idioma */}
          <div
            className="
              flex
              justify-center
              lg:justify-self-end
            "
          >
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   INTRO DE PÁGINAS
============================================================ */

export function PageIntro({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  text: string;
  children?: ReactNode;
}) {
  return (
    <main>
      <section className="dark-band topo-field min-h-[72vh] pt-36">
        <div className="section-shell section-space">
          <div className="max-w-5xl">
            <p className="eyebrow mb-6">
              {eyebrow}
            </p>

            <h1
              className="
                title-page
                text-on-dark
              "
            >
              {title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-on-dark/65">
              {text}
            </p>
          </div>
        </div>
      </section>

      {children}
    </main>
  );
}

/* ============================================================
   PROGRESO DE SCROLL
============================================================ */

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () =>
      setProgress(
        (window.scrollY /
          Math.max(
            document.documentElement.scrollHeight -
              innerHeight,
            1,
          )) *
          100,
      );

    update();

    addEventListener("scroll", update, {
      passive: true,
    });

    return () =>
      removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="
        fixed
        left-0
        top-0
        z-[60]
        h-0.5
        bg-primary
        transition-[width]
        duration-150
      "
      style={{
        width: `${progress}%`,
      }}
      aria-hidden="true"
    />
  );
}