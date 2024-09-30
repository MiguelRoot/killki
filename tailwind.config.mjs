/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          50: "#fff0f0",
          100: "#ffdede",
          200: "#ffc2c2",
          300: "#ff9797",
          400: "#ff5c5c",
          500: "#ff2929",
          600: "#f91111",
          700: "#d20303",
          800: "#ad0707",
          900: "#8f0d0d",
          950: "#4e0101",
          0: "#F91111",
        },
        primary: {
          50: "#f5f2ff",
          100: "#ede7ff",
          200: "#ddd2ff",
          300: "#c4aeff",
          400: "#a881ff",
          500: "#8e4eff",
          600: "#8329fe",
          700: "#7418e9",
          800: "#6a15d6",
          900: "#5112a0",
          950: "#31086d",
          0: "#6A15D6",
        },
      },
    },
  },
  plugins: [],
};
