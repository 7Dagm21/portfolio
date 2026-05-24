import { createContext, useContext } from "react";

export type Locale = "en" | "am";

export type LanguageContextValue = {
  locale: Locale;
  isAmharic: boolean;
  toggleLocale: () => void;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
};
