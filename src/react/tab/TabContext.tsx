import { create } from "zustand";

interface TabStore {
  activeTab: string;
  setActiveTab: (tabValue: string) => void;
}

export const useTabStore = create<TabStore>((set) => {
  return {
    activeTab: "tab1",
    setActiveTab: (tabValue) => set({ activeTab: tabValue }),
  };
});
