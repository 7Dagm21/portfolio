import { useEffect, useMemo, useState } from "react";
import type { PropsWithChildren } from "react";
import {
  type LanguageContextValue,
  LanguageContext,
  type Locale,
} from "./useLanguage";

const LOCALE_STORAGE_KEY = "portfolio-locale";

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [locale, setLocale] = useState<Locale>(() => {
    const stored = globalThis.localStorage.getItem(LOCALE_STORAGE_KEY);
    return stored === "am" ? "am" : "en";
  });

  useEffect(() => {
    document.documentElement.lang = locale;
    globalThis.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      isAmharic: locale === "am",
      toggleLocale: () =>
        setLocale((current) => (current === "en" ? "am" : "en")),
    }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};
