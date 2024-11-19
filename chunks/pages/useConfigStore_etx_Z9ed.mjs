import { create } from 'zustand';

const useConfigStore = create((set) => {
  return {
    currentConfig: null,
    updateConfig: (configValue) => set({ currentConfig: configValue })
  };
});

export { useConfigStore };
