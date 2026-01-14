/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent } from '../astro_sTktP0AK.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Home } from './backend_3-3_F8dp.mjs';

const $$Astro$1 = createAstro("https://miguelkillki.com");
const $$Frontend$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Frontend$1;
  return renderTemplate`${renderComponent($$result, "Home", $$Home, { "page": "frontend", "lang": "es" })}`;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/pages/frontend.astro", void 0);

const $$file$1 = "C:/Users/BySna/Documents/killki/work/mypage/src/pages/frontend.astro";
const $$url$1 = "/frontend";

const frontend$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Frontend$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://miguelkillki.com");
const $$Frontend = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Frontend;
  return renderTemplate``;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/pages/en/frontend.astro", void 0);

const $$file = "C:/Users/BySna/Documents/killki/work/mypage/src/pages/en/frontend.astro";
const $$url = "/en/frontend";

const frontend = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Frontend,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { frontend as a, frontend$1 as f };
