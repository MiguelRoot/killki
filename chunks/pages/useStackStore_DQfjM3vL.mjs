import { create } from 'zustand';

const useStackStore = create((set) => {
  return {
    currentStack: null,
    updateStack: (currentStack) => set({ currentStack })
  };
});

export { useStackStore };
