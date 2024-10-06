import { prependForwardSlash } from '@astrojs/internal-helpers/path';
/* empty css                          */
import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderComponent, u as unescapeHTML, F as Fragment, m as maybeRenderHead, A as AstroError, U as UnknownContentCollectionError, e as renderUniqueStylesheet, f as renderScriptElement, g as createHeadAndContent, s as spreadAttributes, h as renderSlot, i as renderHead } from '../astro_Heksqiom.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
/* empty css                          */

const SITE_TITLE = "Miguel killki";
const SITE_DESCRIPTION = "Welcome to my website!";
let baseUrlStatic = "";
const baseUrlLocal = "http://localhost:4321";
{
  baseUrlStatic = "";
}

const $$Astro$7 = createAstro("https://miguelkillki.com");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/blog-placeholder-1.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><!-- <link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin /> --><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/shared-astro/components/BaseHead.astro", void 0);

const $$Astro$6 = createAstro("https://miguelkillki.com");
const $$IconApp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$IconApp;
  const {
    name,
    size = "24",
    class: className = ""
  } = Astro2.props;
  const loadIcon = async (width = 24, className2 = "") => {
    const iconUrl = `${baseUrlLocal}/icons/${name}.svg`;
    try {
      const response = await fetch(iconUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let svgContent = await response.text();
      svgContent = svgContent.replace(/width="\d+"/, `width="${width}"`);
      svgContent = svgContent.replace(/height="\d+"/, `height="${width}"`);
      if (svgContent.includes('class="')) {
        svgContent = svgContent.replace(
          /class="([^"]*)"/,
          `class="$1 ${className2}"`
        );
      } else {
        svgContent = svgContent.replace("<svg", `<svg class="${className2}"`);
      }
      return svgContent;
    } catch (error) {
      return `
      <svg width="${width}" height="${width}" viewBox="0 0 800 800" class="${className2}" fill="none" xmlns="http://www.w3.org/2000/svg">
      </svg>
    `;
    }
  };
  const applySizeStyles = (size2) => {
    let sizeIcon;
    const sizeAsNumber = Number(size2);
    if (!isNaN(sizeAsNumber)) {
      sizeIcon = `${size2}`;
    } else {
      switch (size2) {
        case "small":
          sizeIcon = "16";
          break;
        case "large":
          sizeIcon = "48";
          break;
        default:
          sizeIcon = "24";
      }
    }
    return sizeIcon;
  };
  const setSizeStyles = applySizeStyles(size);
  const iconContent = await loadIcon(Number(setSizeStyles), className);
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(iconContent)}` })}`;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/shared-astro/IconApp.astro", void 0);

const $$Astro$5 = createAstro("https://miguelkillki.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-50 mt-10"> <div class="mx-auto px-3 md:px-8 max-w-screen-xl py-5 md:flex justify-between"> <div class="flex items-center justify-center md:justify-start"> ${renderComponent($$result, "IconApp", $$IconApp, { "name": "logo", "size": "38" })} <div class="mx-2"> ${renderComponent($$result, "IconApp", $$IconApp, { "name": "frog", "size": "32" })} </div> <!-- <div>
        <IconApp name="code" size="small" />
      </div> --> <div class="ms-1">
&copy; ${today.getFullYear()} killki Corporation.
</div> </div> <div class="mt-3 md:mt-0 text-center md:text-start">
Security | Privacy | terms
</div> </div> </footer>`;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/shared-astro/components/Footer.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://miguelkillki.com", "ASSETS_PREFIX": undefined}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$4 = createAstro("https://miguelkillki.com");
const $$HeaderLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-sssvf4qx> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/shared-astro/components/HeaderLink.astro", void 0);

const $$Astro$3 = createAstro("https://miguelkillki.com");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-xsmynovv> <nav data-astro-cid-xsmynovv> <h2 data-astro-cid-xsmynovv><a href="/" data-astro-cid-xsmynovv>${SITE_TITLE}</a></h2> <div class="internal-links" data-astro-cid-xsmynovv> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "data-astro-cid-xsmynovv": true }, { "default": ($$result2) => renderTemplate`Home` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog", "data-astro-cid-xsmynovv": true }, { "default": ($$result2) => renderTemplate`Blog` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/about", "data-astro-cid-xsmynovv": true }, { "default": ($$result2) => renderTemplate`About` })} </div> <div class="social-links" data-astro-cid-xsmynovv> <a href="https://m.webtoo.ls/@astro" target="_blank" data-astro-cid-xsmynovv> <span class="sr-only" data-astro-cid-xsmynovv>Follow Astro on Mastodon</span> <svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" data-astro-cid-xsmynovv><path fill="currentColor" d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z" data-astro-cid-xsmynovv></path></svg> </a> <a href="https://twitter.com/astrodotbuild" target="_blank" data-astro-cid-xsmynovv> <span class="sr-only" data-astro-cid-xsmynovv>Follow Astro on Twitter</span> <svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" data-astro-cid-xsmynovv><path fill="currentColor" d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" data-astro-cid-xsmynovv></path></svg> </a> <a href="https://github.com/withastro/astro" target="_blank" data-astro-cid-xsmynovv> <span class="sr-only" data-astro-cid-xsmynovv>Go to Astro's GitHub repo</span> <svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32" data-astro-cid-xsmynovv><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" data-astro-cid-xsmynovv></path></svg> </a> </div> </nav> </header> `;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/shared-astro/components/Header.astro", void 0);

const $$Astro$2 = createAstro("https://miguelkillki.com");
const $$FormattedDate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/shared-astro/components/FormattedDate.astro", void 0);

const $$Astro$1 = createAstro("https://miguelkillki.com");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-bvzihdzo> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-bvzihdzo": true })}${renderHead()}</head> <body data-astro-cid-bvzihdzo> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-bvzihdzo": true })} <main data-astro-cid-bvzihdzo> <article data-astro-cid-bvzihdzo> <div class="hero-image" data-astro-cid-bvzihdzo> ${heroImage && renderTemplate`<img${addAttribute(1020, "width")}${addAttribute(510, "height")}${addAttribute(heroImage, "src")} alt="" data-astro-cid-bvzihdzo>`} </div> <div class="prose" data-astro-cid-bvzihdzo> <div class="title" data-astro-cid-bvzihdzo> <div class="date" data-astro-cid-bvzihdzo> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-bvzihdzo": true })} ${updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-bvzihdzo>
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-bvzihdzo": true })} </div>`} </div> <h1 data-astro-cid-bvzihdzo>${title}</h1> <hr data-astro-cid-bvzihdzo> </div> ${renderSlot($$result, $$slots["default"])} </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bvzihdzo": true })} </body></html>`;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/layouts/BlogPost.astro", void 0);

const $$Astro = createAstro("https://miguelkillki.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "C:/Users/BySna/Documents/killki/work/mypage/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/Users/BySna/Documents/killki/work/mypage/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$IconApp as $, SITE_TITLE as S, ____slug_ as _, SITE_DESCRIPTION as a, baseUrlStatic as b, $$BaseHead as c, $$Footer as d, $$BlogPost as e, $$FormattedDate as f, getCollection as g, $$Header as h };
