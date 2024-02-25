import { translations } from "./translations";
const { es, en } = translations;

export const LANG = {
  es: {
    link: "/",
    text: "es",
  },
  en: {
    link: "en",
    text: "en",
  },
};

export const i18n = (lang: string | undefined) => {
  const t = lang === "es" ? es : en;
  return t;
};
