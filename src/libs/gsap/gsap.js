import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export function animationGSap() {
  // console.log("gsap");
  // 🔑 Muy importante: registrar ANTES de usar ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ limitCallbacks: true });
  ScrollTrigger.batch(".anime-item", {
    onEnter: (elements) => {
      gsap.to(elements, {
        duration: 0.3, // duración de la animación
        opacity: 1, // se hacen visibles
        x: 0,
        y: 0,
        stagger: 0.05, // se animan en secuencia, uno tras otro
      });
    },
    onEnterBack: (elements) => {
      gsap.to(elements, {
        duration: 0.3,
        opacity: 1,
        x: 0,
        y: 0,
        stagger: 0.03,
      });
    },
  });
}
