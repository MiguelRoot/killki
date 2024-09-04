import React, { useState } from "react";

interface Language {
  title: string;
  active: boolean;
  content: string;
}

interface LanguageGroup {
  [key: string]: Language;
}

const useGroupState = (initialState: LanguageGroup) => {
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
    setLanguages((prevLanguages) => {
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

  return {
    languages,
    toggleActive,
    updateContent,
  };
};
