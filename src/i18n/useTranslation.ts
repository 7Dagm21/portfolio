import { useCallback, useMemo } from "react";
import { useLanguage } from "@/context/useLanguage";
import { getNestedValue } from "./getNestedValue";
import am from "@/locales/am.json";
import en from "@/locales/en.json";

const dictionaries = { en, am } as const;

export const useTranslation = () => {
  const { locale, isAmharic, toggleLocale } = useLanguage();

  const dictionary = useMemo(() => dictionaries[locale], [locale]);

  const t = useCallback(
    (key: string, params?: Record<string, string | number>) => {
      let value = getNestedValue(dictionary, key);

      if (params) {
        for (const [paramKey, paramValue] of Object.entries(params)) {
          value = value.replaceAll(`{{${paramKey}}}`, String(paramValue));
        }
      }

      return value;
    },
    [dictionary],
  );

  return { t, locale, isAmharic, toggleLocale };
};
