import { create } from "zustand";
import type { IContent, IIndexActive, IIndexLanguage } from "./editor.model";

export interface IRollContent {
  html: IContent | null;
  css: IContent | null;
  javascript: IContent | null;
}

interface IStackContent {
  contentStore: IRollContent;
  updateLanguage: (indexContent: IIndexLanguage, stackValue: IContent) => void;
  updateContent: (indexContent: IIndexLanguage, stackValue: string) => void;
  updateActive: (
    indexContent: IIndexLanguage,
    stackValue: IIndexActive
  ) => void;
}

export const useContentStore = create<IStackContent>((set) => {
  return {
    contentStore: { html: null, css: null, javascript: null },

    updateLanguage: (indexContent: IIndexLanguage, stackValue: IContent) => {
      return set((state) => {
        return {
          ...state,
          contentStore: {
            ...state.contentStore,
            [indexContent]: stackValue,
          },
        };
      });
    },

    updateContent: (indexContent: IIndexLanguage, stackValue: string) => {
      return set((state) => {
        return {
          ...state,
          contentStore: {
            ...state.contentStore,
            [indexContent]: {
              ...state.contentStore[indexContent],
              content: stackValue,
            },
          },
        };
      });
    },

    updateActive: (indexContent: IIndexLanguage, stackValue: IIndexActive) => {
      return set((state) => {
        return {
          ...state,
          contentStore: {
            ...state.contentStore,
            [indexContent]: {
              ...state.contentStore[indexContent],
              active: stackValue,
            },
          },
        };
      });
    },
  };
});
