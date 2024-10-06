/* empty css                          */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as addAttribute, i as renderHead } from '../astro_Heksqiom.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$IconApp, c as $$BaseHead, d as $$Footer, S as SITE_TITLE, a as SITE_DESCRIPTION, g as getCollection, f as $$FormattedDate, h as $$Header } from './__Xb4qrwF8.mjs';
/* empty css                          */
import { L as LANG, i as i18n, $ as $$Social, a as $$MenuFooter } from './_id__7PgDbVzT.mjs';
/* empty css                          */

const $$Astro$5 = createAstro("https://miguelkillki.com");
const $$DonwloadCV = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$DonwloadCV;
  return renderTemplate`<!-- <button
  class="font-medium border border-primary-0 rounded-xl text-sm text-primary-0 px-5 py-1.5 mb-1 me-2"
  id="generate-word">Descargar CV</button
> -->${maybeRenderHead()}<button type="button" class="text-white bg-primary-300 cursor-not-allowed font-medium rounded-xl text-sm px-6 py-2 text-center" disabled>No disponible</button> <!-- <button
  class="relative inline-flex items-center justify-center p-0.5 mb-1 overflow-hidden text-sm font-medium text-primary-0 rounded-xl group bg-gradient-to-br from-secondary-0 to-primary-0 group-hover:from-secondary-0 group-hover:to-primary-0"
>
  <span
    class="relative px-6 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-lg font-bold"
  >
    Descargar CV
  </span>
</button> --> `;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/shared-astro/components/DonwloadCV.astro", void 0);

const $$Astro$4 = createAstro("https://miguelkillki.com");
const $$Menu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Menu;
  const { currentLocale } = Astro2;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center md:justify-end mb-5"> <div class="flex items-center"> ${renderComponent($$result, "IconApp", $$IconApp, { "name": "planets", "class": "me-2 text-secondary-0" })} <a${addAttribute(LANG.es.link, "href")} class="text-secondary-1000"> <span${addAttribute(`me-2 leading-none ${currentLocale !== "en" ? "font-bold text-secondary-0" : ""}`, "class")}>ES</span> </a> <a${addAttribute(LANG.en.link, "href")} class="text-secondary-1000"> <span${addAttribute(`me-2 leading-none ${currentLocale === "en" ? "font-bold text-secondary-0" : ""}`, "class")}>EN</span> </a> </div> </div>`;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/shared-astro/components/Menu.astro", void 0);

const $$Astro$3 = createAstro("https://miguelkillki.com");
const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Home;
  const { currentLocale } = Astro2;
  const texts = i18n(currentLocale);
  return renderTemplate`<html${addAttribute(currentLocale, "lang")} data-astro-cid-k74dcqyt> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-k74dcqyt": true })}${renderHead()}</head> <body data-astro-cid-k74dcqyt> <div class="relative h-full w-full" data-astro-cid-k74dcqyt> <div class="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" data-astro-cid-k74dcqyt></div> </div> <!-- <Header title={SITE_TITLE} /> --> <main class="mx-auto px-3 md:px-8 max-w-screen-xl" data-astro-cid-k74dcqyt> <svg class="fixed z-10 top-[-450px] start-[-300px] opacity-30 pointer-events-none" width="1020" height="932" viewBox="0 0 1020 932" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-k74dcqyt> <g opacity="0.3" filter="url(#filter0_f_8710_4643)" data-astro-cid-k74dcqyt> <path fill-rule="evenodd" clip-rule="evenodd" d="M864.057 486.614C846.653 541.287 806.82 583.111 770.741 627.698C739.657 666.112 706.529 700.357 667.059 730.064C623.094 763.155 581.632 809.207 526.674 811.397C471.538 813.594 425.235 772.698 379.685 741.515C336.858 712.197 306.364 671.8 269.447 635.304C218.92 585.354 131.721 557.014 121.837 486.614C112.283 418.556 181.643 365.732 224.009 311.657C261.557 263.732 303.468 221.284 355.036 188.966C407.988 155.781 464.867 112.886 526.674 121.978C588.379 131.055 614.616 209.842 671.469 235.515C737.749 265.445 836.532 224.162 880.816 281.9C923.187 337.144 885.182 420.249 864.057 486.614Z" fill="#8873EF" data-astro-cid-k74dcqyt></path> </g> <defs data-astro-cid-k74dcqyt> <filter id="filter0_f_8710_4643" x="0.94458" y="0.740356" width="1019.06" height="930.741" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-astro-cid-k74dcqyt> <feFlood flood-opacity="0" result="BackgroundImageFix" data-astro-cid-k74dcqyt></feFlood> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-astro-cid-k74dcqyt></feBlend> <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_8710_4643" data-astro-cid-k74dcqyt></feGaussianBlur> </filter> </defs> </svg> <article class="grid grid-cols-1 lg:grid-cols-2 md:gap-16" data-astro-cid-k74dcqyt> <div class="lg:sticky lg:top-0 lg:h-[100vh] lg:flex lg:flex-col lg:justify-between pt-10" data-astro-cid-k74dcqyt> <div data-astro-cid-k74dcqyt> <div class="flex mb-1" data-astro-cid-k74dcqyt> <div class="rounded-full me-3 w-[70px]" data-astro-cid-k74dcqyt> <img src="/images/profile.png" alt="miguel killki" data-astro-cid-k74dcqyt> </div> <div data-astro-cid-k74dcqyt> ${renderComponent($$result, "DonwloadCV", $$DonwloadCV, { "data-astro-cid-k74dcqyt": true })} <div class="md:text-2xl text-primary-600 font-bold lg:mt-2 order-2" data-astro-cid-k74dcqyt> ${texts.welcome} </div> </div> <!-- <div class="text-start lg:hidden block order-1">
                <Menu />
              </div> --> </div> <h1 class="bg-text-title font-black text-primary-1000 text-4xl md:text-6xl mb-4" data-astro-cid-k74dcqyt> ${texts.senior} </h1> <span class="text-xl md:text-2xl text-primary-1000 font-bold" data-astro-cid-k74dcqyt>${texts.career}</span> <p class="text-primary-1000 mt-2" data-astro-cid-k74dcqyt>${texts.presentation}</p> </div> <nav class="menu-home" data-astro-cid-k74dcqyt> <ul class="[&>*]:mb-2 hidden lg:block" data-astro-cid-k74dcqyt> ${texts.menu.map((item) => renderTemplate`<li data-astro-cid-k74dcqyt> <a class="font-bold text-primary-600"${addAttribute("#" + item.path, "href")} data-astro-cid-k74dcqyt> ${item.label} </a> </li>`)} </ul> </nav> ${renderComponent($$result, "Social", $$Social, { "data-astro-cid-k74dcqyt": true })} </div> <!-- BODY --> <div class="mt-4 lg:mt-10" data-astro-cid-k74dcqyt> <section class="hidden lg:block" data-astro-cid-k74dcqyt> ${renderComponent($$result, "Menu", $$Menu, { "data-astro-cid-k74dcqyt": true })} </section> <section id="about" class="mb-7" data-astro-cid-k74dcqyt> <p data-astro-cid-k74dcqyt> ${texts.profile} </p> </section> <section id="experience" data-astro-cid-k74dcqyt> <h2 class="font-bold flex items-center text-xl mb-3 lg:hidden" data-astro-cid-k74dcqyt> ${renderComponent($$result, "IconApp", $$IconApp, { "name": "porfolio", "data-astro-cid-k74dcqyt": true })} <span class="ms-2" data-astro-cid-k74dcqyt>${texts.menu[1]?.label}</span> </h2> ${texts.experience.map((items) => {
    return renderTemplate`<div class="md:flex lg-14 mb-8" data-astro-cid-k74dcqyt> <div class="me-3 pt-1 text-primary-1000 text-sm leading-5 min-w-[88px]" data-astro-cid-k74dcqyt> ${items.startDate} </div> <div data-astro-cid-k74dcqyt> <div class="md:flex items-center justify-between mb-3" data-astro-cid-k74dcqyt> <div class="text-lg font-bold text-primary-600 text-shadow" data-astro-cid-k74dcqyt> ${items.position} </div> <div class="md:font-bold text-secondary-1000" data-astro-cid-k74dcqyt> ${items.company} </div> </div> <div class="mb-3" data-astro-cid-k74dcqyt>${items.description}</div> </div> </div>`;
  })} </section> <section id="projects" class="mt-14" data-astro-cid-k74dcqyt> <h2 class="font-bold flex items-center text-xl mb-3 lg:hidden" data-astro-cid-k74dcqyt> ${renderComponent($$result, "IconApp", $$IconApp, { "name": "code-section", "data-astro-cid-k74dcqyt": true })} <span class="ms-2" data-astro-cid-k74dcqyt>${texts.menu[2]?.label}</span> </h2> ${texts.projects.map((item) => {
    return renderTemplate`<div class="group md:bg-gradient-to-br transition-all hover:from-secondary-0 hover:to-primary-0 rounded-xl p-0.5 mb-5 md:ms-[-16px] relative" data-astro-cid-k74dcqyt> <div class="rounded-lg bg-white transform-none md:py-4 md:px-4  flex-col md:flex-row flex ease-in-out" data-astro-cid-k74dcqyt> <div class="absolute top-[-90px] right-0 opacity-0 group-hover:opacity-50 pointer-events-none" data-astro-cid-k74dcqyt> <svg width="759" height="430" viewBox="0 0 759 430" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-k74dcqyt> <g opacity="0.3" filter="url(#filter0_f_8757_5886)" data-astro-cid-k74dcqyt> <path fill-rule="evenodd" clip-rule="evenodd" d="M614.621 220.721C603.057 235.632 576.591 247.039 552.619 259.2C531.965 269.677 509.955 279.017 483.729 287.119C454.518 296.144 426.969 308.704 390.453 309.302C353.819 309.901 323.054 298.747 292.789 290.242C264.334 282.246 244.073 271.228 219.544 261.274C185.972 247.651 128.035 239.922 121.468 220.721C115.119 202.159 161.204 187.752 189.353 173.003C214.301 159.932 242.149 148.355 276.412 139.541C311.595 130.49 349.387 118.791 390.453 121.27C431.452 123.746 448.885 145.234 486.66 152.236C530.698 160.4 596.332 149.14 625.756 164.888C653.909 179.955 628.657 202.621 614.621 220.721Z" fill="#8873EF" data-astro-cid-k74dcqyt></path> </g> <defs data-astro-cid-k74dcqyt> <filter id="filter0_f_8757_5886" x="0.874512" y="0.932983" width="757.628" height="428.392" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-astro-cid-k74dcqyt> <feFlood flood-opacity="0" result="BackgroundImageFix" data-astro-cid-k74dcqyt></feFlood> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-astro-cid-k74dcqyt></feBlend> <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_8757_5886" data-astro-cid-k74dcqyt></feGaussianBlur> </filter> </defs> </svg> </div> <div class="mt-4 md:mt-0 order-2 md:order-1 relative rounded-lg overflow-hidden grow-0 shrink-0 w-[130px] h-[130px]" data-astro-cid-k74dcqyt> <div class="group-hover:bg-transparent bg-primary-900 mix-blend-hue absolute w-full h-100 top-0 bottom-0" data-astro-cid-k74dcqyt></div> <img${addAttribute("/projects/" + item.image, "src")} class="w-full h-full" alt="" data-astro-cid-k74dcqyt> </div> <div class="md:ms-5 order-1 md:order-2" data-astro-cid-k74dcqyt> <h2 class="group-hover:blank text-base font-bold text-primary-600 md:text-primary-1000 group-hover:text-primary-600 mb-3" data-astro-cid-k74dcqyt> ${item.title} </h2> <p class="text-primary-1000 mb-4" data-astro-cid-k74dcqyt>${item.description}</p> <ul class="flex flex-wrap" data-astro-cid-k74dcqyt> ${item.stack.map((tag) => renderTemplate`<li class="py-1 px-3 mb-2 text-sm text-primary-600 group-hover:bg-secondary-100 bg-primary-50 rounded-md me-2 group-hover:text-secondary-0" data-astro-cid-k74dcqyt> ${tag} </li>`)} </ul> </div> </div> </div>`;
  })} </section> <section id="skills" class="mt-14" data-astro-cid-k74dcqyt> <h2 class="font-bold flex items-center text-xl mb-5 lg:hidden" data-astro-cid-k74dcqyt> ${renderComponent($$result, "IconApp", $$IconApp, { "name": "skills-section", "data-astro-cid-k74dcqyt": true })} <span class="ms-2" data-astro-cid-k74dcqyt>${texts.menu[3]?.label}</span> </h2> <div class="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-1" data-astro-cid-k74dcqyt> ${texts.skills.map((item) => {
    return renderTemplate`<div class="mb-8" data-astro-cid-k74dcqyt> ${renderComponent($$result, "IconApp", $$IconApp, { "name": `skill-${item.icon}`, "size": "72", "data-astro-cid-k74dcqyt": true })} <span class="font-bold block mt-4" data-astro-cid-k74dcqyt>${item.title}</span> </div>`;
  })} </div> </section> ${renderComponent($$result, "MenuFooter", $$MenuFooter, { "data-astro-cid-k74dcqyt": true })} </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-k74dcqyt": true })}   </body> </html>`;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/layouts/Home.astro", void 0);

const $$Astro$2 = createAstro("https://miguelkillki.com");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "Home", $$Home, {})}`;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/pages/index.astro", void 0);

const $$file$2 = "C:/Users/BySna/Documents/killki/work/mypage/src/pages/index.astro";
const $$url$2 = "";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://miguelkillki.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const posts = (await getCollection("blog")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en" data-astro-cid-5tznm7mj> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-5tznm7mj": true })}${renderHead()}</head> <body data-astro-cid-5tznm7mj> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })} <main data-astro-cid-5tznm7mj> <section data-astro-cid-5tznm7mj> <ul data-astro-cid-5tznm7mj> ${posts.map((post) => renderTemplate`<li data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.slug}/`, "href")} data-astro-cid-5tznm7mj> <img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(post.data.heroImage, "src")} alt="" data-astro-cid-5tznm7mj> <h4 class="title" data-astro-cid-5tznm7mj>${post.data.title}</h4> <p class="date" data-astro-cid-5tznm7mj> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-5tznm7mj": true })} </p> </a> </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} </body></html>`;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/pages/blog/index.astro", void 0);

const $$file$1 = "C:/Users/BySna/Documents/killki/work/mypage/src/pages/blog/index.astro";
const $$url$1 = "/blog";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://miguelkillki.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Home", $$Home, {})}`;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/pages/en/index.astro", void 0);

const $$file = "C:/Users/BySna/Documents/killki/work/mypage/src/pages/en/index.astro";
const $$url = "/en";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };
