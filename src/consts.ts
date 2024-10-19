// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Miguel killki";
export const SITE_DESCRIPTION = "Welcome to my website!";

export const baseUrlHost = "http://localhost:4321";

// const currentUrl = import.meta.url;

// Crear un objeto URL a partir de la URL actual
// const currentDir = new URL(".", currentUrl);
export const rootProject = new URL("..", import.meta.url).pathname;
console.log("rootProject GAA2", rootProject);

export let baseUrlStatic = "";
if (import.meta.env.MODE === "development") {
  baseUrlStatic = "/public/";
} else {
  baseUrlStatic = "";
}
