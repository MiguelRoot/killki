import { create } from 'zustand';

const useFullscreenStore = create((set) => ({
  isFullscreen: false,
  toggleFullscreen: () => {
    set((state) => {
      const newFullscreenState = !state.isFullscreen;
      if (newFullscreenState) {
        document.body.style.overflow = "hidden";
        const handleKeyDown = (event) => {
          if (event.keyCode === 27) {
            set({ isFullscreen: false });
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleKeyDown);
          }
        };
        window.addEventListener("keydown", handleKeyDown);
      } else {
        document.body.style.overflow = "auto";
      }
      return { isFullscreen: newFullscreenState };
    });
  }
}));

export { useFullscreenStore };
