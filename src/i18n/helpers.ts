export const t = ({ es, en }: { es: string; en: string }, lang: string): string => {
  return lang === "es" ? es : en;
};
