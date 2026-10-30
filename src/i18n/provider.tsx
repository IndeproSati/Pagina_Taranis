import { useEffect, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { localeFromPath, setActiveLocale } from "./config";

export function I18nProvider({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const locale = localeFromPath(pathname);
  setActiveLocale(locale);

  useEffect(() => {
    document.documentElement.lang = locale === "pt-BR" ? "pt-BR" : locale;
    try {
      localStorage.setItem("taranis-language", locale);
    } catch {
      /* noop */
    }
  }, [locale]);

  return (
    <div key={locale} className="contents">
      {children}
    </div>
  );
}
