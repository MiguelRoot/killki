import { create } from "zustand";
import type { IIndexStack, IStacks } from "./editor.model";

interface IStackStore {
  currentStack: IStacks | null;
  updateStack: (stackValue: IStacks) => void;
}

export const useStackStore = create<IStackStore>((set) => {
  return {
    currentStack: null,
    updateStack: (currentStack: IStacks) => set({ currentStack }),
  };
});
