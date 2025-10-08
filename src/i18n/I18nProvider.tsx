import { createContext, useContext, useEffect, useMemo, useState, type PropsWithChildren } from "react";
import data from "./data.json";

export type Lang = keyof typeof data; // "TR" | "EN"

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: <T = string>(path: string) => T;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function get(obj: any, path: string) {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

export const I18nProvider = ({ children }: PropsWithChildren) => {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem("lang") as Lang) || "TR");

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  const t = useMemo(() => {
    return ((path: string) => get(data[lang], path)) as I18nContextValue["t"];
  }, [lang]);

  const value = useMemo<I18nContextValue>(() => ({ lang, setLang, t }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};

export const useT = () => useI18n().t;


