import { create } from "zustand";
import type { IConfig } from "./editor.model";

interface IStackStore {
  currentConfig: IConfig | null;
  updateConfig: (configValue: IConfig) => void;
}

export const useConfigStore = create<IStackStore>((set) => {
  return {
    currentConfig: null,
    updateConfig: (configValue: IConfig) => set({ currentConfig: configValue }),
  };
});
