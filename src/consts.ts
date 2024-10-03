// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Miguel killki";
export const SITE_DESCRIPTION = "Welcome to my website!";

export let baseUrlStatic = "";

if (import.meta.env.MODE === "development") {
  baseUrlStatic = "/public/";
} else {
  baseUrlStatic = "";
}
