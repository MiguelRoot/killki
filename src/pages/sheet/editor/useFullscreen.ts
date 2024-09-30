import { create } from "zustand";

interface FullscreenState {
  isFullscreen: boolean;
  toggleFullscreen: () => void;
}

export const useFullscreenStore = create<FullscreenState>((set) => ({
  isFullscreen: false,
  toggleFullscreen: () => {
    set((state) => {
      const newFullscreenState = !state.isFullscreen;

      if (newFullscreenState) {
        document.body.style.overflow = "hidden"; // Deshabilitar scroll

        const handleKeyDown = (event: KeyboardEvent) => {
          if (event.keyCode === 27) {
            set({ isFullscreen: false });
            document.body.style.overflow = "auto"; // Restaurar scroll
            window.removeEventListener("keydown", handleKeyDown); // Remover el listener al salir
          }
        };

        window.addEventListener("keydown", handleKeyDown);
      } else {
        document.body.style.overflow = "auto"; // Restaurar scroll
      }

      return { isFullscreen: newFullscreenState };
    });
  },
}));

// export const useFullscreenStore = create<FullscreenState>((set) => ({
//   isFullscreen: false,
//   toggleFullscreen: () =>
//     set((state) => ({ isFullscreen: !state.isFullscreen })),
//   setFullscreen: (value: boolean) => set({ isFullscreen: value }),
// }));
