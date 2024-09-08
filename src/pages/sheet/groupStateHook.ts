import { useState } from "react";

interface Language {
  title: string;
  active: boolean;
  content: string;
  code: string;
  parse: string | null;
}

export interface LanguageGroup {
  [key: string]: Language;
}

// data object default:
// const htmlGroup = useGroupState({
//   html: {
//     title: "HTML",
//     active: true,
//     content: "",
//     code: "html",
//     parse: null,
//   },
//   markdown: {
//     title: "MD",
//     active: false,
//     content: "",
//     code: "markdown",
//     parse: "markdown",
//   },
// });

// const cssGroup = useGroupState({
//   css: {
//     title: "CSS",
//     active: true,
//     content: "",
//     code: "css",
//     parse: null,
//   },
//   scss: {
//     title: "SCSS",
//     active: false,
//     content: "",
//     code: "scss",
//     parse: "sass",
//   },
// });

// const jsGroup = useGroupState({
//   javascript: {
//     title: "JS",
//     active: true,
//     content: "",
//     code: "javascript",
//     parse: null,
//   },
//   typescript: {
//     title: "TS",
//     active: false,
//     content: "",
//     code: "typescript",
//     parse: "typescript",
//   },
// });

// fin data object default

export const useGroupState = (initialState: LanguageGroup) => {
  const [languages, setLanguages] = useState<LanguageGroup>(initialState);

  const toggleActive = (languageId: string) => {
    setLanguages((prevLanguages) => {
      const updatedGroup: LanguageGroup = Object.keys(prevLanguages).reduce(
        (acc, key) => {
          if (key === languageId) {
            const prevLanguage = prevLanguages[key];
            if (prevLanguage) {
              acc[key] = {
                ...prevLanguage,
                active: !prevLanguage.active,
              };
            }
          } else {
            const prevLanguage = prevLanguages[key];
            if (prevLanguage) {
              acc[key] = { ...prevLanguage, active: false };
            }
          }
          return acc;
        },
        {} as LanguageGroup
      );

      return updatedGroup;
    });
  };

  const updateContent = (languageId: string, newContent: string) => {
    setLanguages((prevLanguages: any) => {
      if (!prevLanguages[languageId]) return prevLanguages;
      return {
        ...prevLanguages,
        [languageId]: {
          ...prevLanguages[languageId],
          content: newContent,
        },
      };
    });
  };

  const updateState = (newState: LanguageGroup) => {
    setLanguages(newState);
  };

  return {
    languages,
    updateState,
    toggleActive,
    updateContent,
  };
};
