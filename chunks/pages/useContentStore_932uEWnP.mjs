import { create } from 'zustand';

const useContentStore = create((set) => {
  return {
    contentStore: { html: null, css: null, javascript: null },
    updateLanguage: (indexContent, stackValue) => {
      return set((state) => {
        return {
          ...state,
          contentStore: {
            ...state.contentStore,
            [indexContent]: stackValue
          }
        };
      });
    },
    updateContent: (indexContent, stackValue) => {
      return set((state) => {
        return {
          ...state,
          contentStore: {
            ...state.contentStore,
            [indexContent]: {
              ...state.contentStore[indexContent],
              content: stackValue
            }
          }
        };
      });
    },
    updateActive: (indexContent, stackValue) => {
      return set((state) => {
        return {
          ...state,
          contentStore: {
            ...state.contentStore,
            [indexContent]: {
              ...state.contentStore[indexContent],
              active: stackValue
            }
          }
        };
      });
    }
  };
});

export { useContentStore };
