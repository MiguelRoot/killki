import { useState } from "react";

// interface Language {
//   title: string;
//   active: boolean;
//   content: string;
//   code: string;
//   parse: string | null;
// }

// export interface LanguageGroup {
//   [key: string]: Language;
// }

type CodeOption = {
  title: string;
  code: string;
};

type Language = {
  title: string;
  active: boolean;
  content: string;
  code: string;
  codes: CodeOption[];
};

// export interface LanguageGroup {
//   [key: string]: Language;
// }

// fin data object default

export const useGroupState = (initialState: Language) => {
  const [languages, setLanguages] = useState<Language>(initialState);

  const toggleActive = (languageId: string) => {
    setLanguages((prevLanguages) => {
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
