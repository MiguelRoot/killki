/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent } from '../astro_sTktP0AK.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Home } from './backend_3-3_F8dp.mjs';

const $$Astro$1 = createAstro("https://miguelkillki.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Home", $$Home, { "page": "fullstack", "lang": "es" })}`;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/pages/index.astro", void 0);

const $$file$1 = "C:/Users/BySna/Documents/killki/work/mypage/src/pages/index.astro";
const $$url$1 = "";

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

export { index as a, index$1 as i };
