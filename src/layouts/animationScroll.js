import lax from "lax.js";

// const lax = require("lax.js");
window.onload = function () {
  lax.init();

  // Crear un controlador de scroll
  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });

  // Seleccionar el elemento y animar su altura
  const box = document.querySelector(".box");

  lax.addElements(".box", {
    scrollY: {
      height: [
        [0, 300], // Rango del scroll
        [112, 78], // Cambiar altura de 112px a 78px
      ],
    },
  });

  // Actualizar la altura manualmente con lax.js
  lax.addDriver("scrollY", () => {
    const scrollY = window.scrollY;
    const minScroll = 0;
    const maxScroll = 300;
    const minHeight = 78;
    const maxHeight = 112;

    // Interpolar la altura basada en el scroll (decreciente)
    const interpolatedHeight =
      maxHeight -
      ((maxHeight - minHeight) * (scrollY - minScroll)) /
        (maxScroll - minScroll);

    // Limitar los valores para evitar errores
    const height = Math.min(Math.max(interpolatedHeight, minHeight), maxHeight);

    // Aplicar la altura calculada
    box.style.height = `${height}px`;
  });
};
