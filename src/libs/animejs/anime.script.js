import anime from "animejs";
import "./anime.style.scss";

const items = document.querySelectorAll(".animation-item");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        anime({
          targets: entry.target,
          opacity: 1,
          translateX: 0,
          translateY: 0,
          duration: 500,
          easing: "easeOutQuad",
          delay: index * 50, // Incrementa el delay con cada elemento (efecto de ola)
        });
        observer.unobserve(entry.target); // Evita que se repita la animación
      }
    });
  },
  { threshold: 0.4 },
);

items.forEach((el, i) => observer.observe(el));
