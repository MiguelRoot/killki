import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_Heksqiom.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",function(){const a=document.querySelectorAll(\"section\"),r=document.querySelector(\"nav\"),i=r.querySelectorAll(\"a\"),s=r.offsetHeight;window.addEventListener(\"scroll\",function(){const e=window.scrollY;a.forEach(function(t){const c=t.offsetTop-s,n=c+t.offsetHeight;e>=c&&e<=n&&(i.forEach(function(o){o.classList.remove(\"active\")}),a.forEach(function(o){o.classList.remove(\"active\")}),t.classList.add(\"active\"),r.querySelector('a[href=\"#'+t.getAttribute(\"id\")+'\"]')?.classList.add(\"active\"))})}),i.forEach(function(e){e.addEventListener(\"click\",t=>{t.preventDefault();var c=e.getAttribute(\"href\"),n=document.querySelector(c);if(n){var o=n.offsetTop-s;window.scrollTo({top:o,behavior:\"smooth\"})}})})});\n"}],"styles":[{"type":"external","src":"/static/about.nUZi1oMw.css"},{"type":"external","src":"/static/about.zmN32jpw.css"},{"type":"inline","content":"@keyframes sizeImage{0%{transform:scale(1)}50%{transform:scale(3)}to{transform:scale(2)}}.info[data-astro-cid-k74dcqyt]{width:auto;height:70px;animation:adjust-info block both;animation-timeline:--main;animation-range:exit-crossing -11rem exit-crossing 0;animation:reveal linear both;animation-range:cover 0% cover 100%}body{timeline-scope:--main}main[data-astro-cid-k74dcqyt]{view-timeline:--main}.menu-home[data-astro-cid-k74dcqyt] a[data-astro-cid-k74dcqyt]{position:relative;padding-left:30px;transition:.5s ease-in-out;color:var(--primary)}.menu-home[data-astro-cid-k74dcqyt] a[data-astro-cid-k74dcqyt]:before{content:\"\";position:absolute;border:solid 1px var(--primary);left:-10px;top:50%;width:0;transition:.5s ease-in-out;padding-right:20px}.menu-home[data-astro-cid-k74dcqyt] a[data-astro-cid-k74dcqyt].active{padding-left:55px;color:var(--secondary)}.menu-home[data-astro-cid-k74dcqyt] a[data-astro-cid-k74dcqyt].active:before{width:50px;border:solid 1px var(--secondary)}.bg-text-title[data-astro-cid-k74dcqyt]{background:linear-gradient(90deg,var(--primary) .08%,var(--primary) 39.51%,var(--secondary) 99.91%);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:69px}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/static/about.nUZi1oMw.css"},{"type":"external","src":"/static/about.zmN32jpw.css"},{"type":"inline","content":"a[data-astro-cid-sssvf4qx]{display:inline-block;text-decoration:none}a[data-astro-cid-sssvf4qx].active{font-weight:bolder;text-decoration:underline}header[data-astro-cid-xsmynovv]{margin:0;padding:0 1em;background:#fff;box-shadow:0 2px 8px rgba(var(--black),5%)}h2[data-astro-cid-xsmynovv]{margin:0;font-size:1em}h2[data-astro-cid-xsmynovv] a[data-astro-cid-xsmynovv],h2[data-astro-cid-xsmynovv] a[data-astro-cid-xsmynovv].active{text-decoration:none}nav[data-astro-cid-xsmynovv]{display:flex;align-items:center;justify-content:space-between}nav[data-astro-cid-xsmynovv] a[data-astro-cid-xsmynovv]{padding:1em .5em;color:var(--black);border-bottom:4px solid transparent;text-decoration:none}nav[data-astro-cid-xsmynovv] a[data-astro-cid-xsmynovv].active{text-decoration:none;border-bottom-color:var(--accent)}.social-links[data-astro-cid-xsmynovv],.social-links[data-astro-cid-xsmynovv] a[data-astro-cid-xsmynovv]{display:flex}@media (max-width: 720px){.social-links[data-astro-cid-xsmynovv]{display:none}}\n"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sheet/defaultstyle","type":"endpoint","pattern":"^\\/sheet\\/defaultStyle$","segments":[[{"content":"sheet","dynamic":false,"spread":false}],[{"content":"defaultStyle","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sheet/defaultStyle.ts","pathname":"/sheet/defaultStyle","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sheet/listpageid","type":"endpoint","pattern":"^\\/sheet\\/listPageId$","segments":[[{"content":"sheet","dynamic":false,"spread":false}],[{"content":"listPageId","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sheet/listPageId.ts","pathname":"/sheet/listPageId","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sheet/editor/usefullscreen","type":"endpoint","pattern":"^\\/sheet\\/editor\\/useFullscreen$","segments":[[{"content":"sheet","dynamic":false,"spread":false}],[{"content":"editor","dynamic":false,"spread":false}],[{"content":"useFullscreen","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sheet/editor/useFullscreen.ts","pathname":"/sheet/editor/useFullscreen","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sheet/editor/mardown","type":"endpoint","pattern":"^\\/sheet\\/editor\\/mardown$","segments":[[{"content":"sheet","dynamic":false,"spread":false}],[{"content":"editor","dynamic":false,"spread":false}],[{"content":"mardown","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sheet/editor/mardown.ts","pathname":"/sheet/editor/mardown","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/static/about.nUZi1oMw.css"},{"type":"external","src":"/static/about.zmN32jpw.css"}],"routeData":{"route":"/sheet/[id]","type":"page","pattern":"^\\/sheet\\/([^/]+?)\\/?$","segments":[[{"content":"sheet","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/sheet/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/static/about.nUZi1oMw.css"},{"type":"external","src":"/static/about.zmN32jpw.css"},{"type":"inline","content":"a[data-astro-cid-sssvf4qx]{display:inline-block;text-decoration:none}a[data-astro-cid-sssvf4qx].active{font-weight:bolder;text-decoration:underline}header[data-astro-cid-xsmynovv]{margin:0;padding:0 1em;background:#fff;box-shadow:0 2px 8px rgba(var(--black),5%)}h2[data-astro-cid-xsmynovv]{margin:0;font-size:1em}h2[data-astro-cid-xsmynovv] a[data-astro-cid-xsmynovv],h2[data-astro-cid-xsmynovv] a[data-astro-cid-xsmynovv].active{text-decoration:none}nav[data-astro-cid-xsmynovv]{display:flex;align-items:center;justify-content:space-between}nav[data-astro-cid-xsmynovv] a[data-astro-cid-xsmynovv]{padding:1em .5em;color:var(--black);border-bottom:4px solid transparent;text-decoration:none}nav[data-astro-cid-xsmynovv] a[data-astro-cid-xsmynovv].active{text-decoration:none;border-bottom-color:var(--accent)}.social-links[data-astro-cid-xsmynovv],.social-links[data-astro-cid-xsmynovv] a[data-astro-cid-xsmynovv]{display:flex}@media (max-width: 720px){.social-links[data-astro-cid-xsmynovv]{display:none}}\nul[data-astro-cid-5tznm7mj]{display:flex;flex-wrap:wrap;gap:2rem;list-style-type:none;margin:0;padding:0}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]{width:calc(50% - 1rem)}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj] [data-astro-cid-5tznm7mj]{text-decoration:none;transition:.2s ease}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]:first-child{width:100%;margin-bottom:1rem;text-align:center}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]:first-child img[data-astro-cid-5tznm7mj]{width:100%}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]:first-child .title[data-astro-cid-5tznm7mj]{font-size:2.369rem}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj] img[data-astro-cid-5tznm7mj]{margin-bottom:.5rem;border-radius:12px}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj] a[data-astro-cid-5tznm7mj]{display:block}.title[data-astro-cid-5tznm7mj]{margin:0;color:rgb(var(--black));line-height:1}.date[data-astro-cid-5tznm7mj]{margin:0;color:rgb(var(--gray))}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj] a[data-astro-cid-5tznm7mj]:hover h4[data-astro-cid-5tznm7mj],ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj] a[data-astro-cid-5tznm7mj]:hover .date[data-astro-cid-5tznm7mj]{color:rgb(var(--accent))}ul[data-astro-cid-5tznm7mj] a[data-astro-cid-5tznm7mj]:hover img[data-astro-cid-5tznm7mj]{box-shadow:var(--box-shadow)}@media (max-width: 720px){ul[data-astro-cid-5tznm7mj]{gap:.5em}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]{width:100%;text-align:center}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]:first-child{margin-bottom:0}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]:first-child .title[data-astro-cid-5tznm7mj]{font-size:1.563em}}\n"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/static/about.nUZi1oMw.css"},{"type":"external","src":"/static/about.zmN32jpw.css"},{"type":"inline","content":"a[data-astro-cid-sssvf4qx]{display:inline-block;text-decoration:none}a[data-astro-cid-sssvf4qx].active{font-weight:bolder;text-decoration:underline}header[data-astro-cid-xsmynovv]{margin:0;padding:0 1em;background:#fff;box-shadow:0 2px 8px rgba(var(--black),5%)}h2[data-astro-cid-xsmynovv]{margin:0;font-size:1em}h2[data-astro-cid-xsmynovv] a[data-astro-cid-xsmynovv],h2[data-astro-cid-xsmynovv] a[data-astro-cid-xsmynovv].active{text-decoration:none}nav[data-astro-cid-xsmynovv]{display:flex;align-items:center;justify-content:space-between}nav[data-astro-cid-xsmynovv] a[data-astro-cid-xsmynovv]{padding:1em .5em;color:var(--black);border-bottom:4px solid transparent;text-decoration:none}nav[data-astro-cid-xsmynovv] a[data-astro-cid-xsmynovv].active{text-decoration:none;border-bottom-color:var(--accent)}.social-links[data-astro-cid-xsmynovv],.social-links[data-astro-cid-xsmynovv] a[data-astro-cid-xsmynovv]{display:flex}@media (max-width: 720px){.social-links[data-astro-cid-xsmynovv]{display:none}}\n"}],"routeData":{"route":"/blog/[...slug]","type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",function(){const a=document.querySelectorAll(\"section\"),r=document.querySelector(\"nav\"),i=r.querySelectorAll(\"a\"),s=r.offsetHeight;window.addEventListener(\"scroll\",function(){const e=window.scrollY;a.forEach(function(t){const c=t.offsetTop-s,n=c+t.offsetHeight;e>=c&&e<=n&&(i.forEach(function(o){o.classList.remove(\"active\")}),a.forEach(function(o){o.classList.remove(\"active\")}),t.classList.add(\"active\"),r.querySelector('a[href=\"#'+t.getAttribute(\"id\")+'\"]')?.classList.add(\"active\"))})}),i.forEach(function(e){e.addEventListener(\"click\",t=>{t.preventDefault();var c=e.getAttribute(\"href\"),n=document.querySelector(c);if(n){var o=n.offsetTop-s;window.scrollTo({top:o,behavior:\"smooth\"})}})})});\n"}],"styles":[{"type":"external","src":"/static/about.nUZi1oMw.css"},{"type":"external","src":"/static/about.zmN32jpw.css"},{"type":"inline","content":"@keyframes sizeImage{0%{transform:scale(1)}50%{transform:scale(3)}to{transform:scale(2)}}.info[data-astro-cid-k74dcqyt]{width:auto;height:70px;animation:adjust-info block both;animation-timeline:--main;animation-range:exit-crossing -11rem exit-crossing 0;animation:reveal linear both;animation-range:cover 0% cover 100%}body{timeline-scope:--main}main[data-astro-cid-k74dcqyt]{view-timeline:--main}.menu-home[data-astro-cid-k74dcqyt] a[data-astro-cid-k74dcqyt]{position:relative;padding-left:30px;transition:.5s ease-in-out;color:var(--primary)}.menu-home[data-astro-cid-k74dcqyt] a[data-astro-cid-k74dcqyt]:before{content:\"\";position:absolute;border:solid 1px var(--primary);left:-10px;top:50%;width:0;transition:.5s ease-in-out;padding-right:20px}.menu-home[data-astro-cid-k74dcqyt] a[data-astro-cid-k74dcqyt].active{padding-left:55px;color:var(--secondary)}.menu-home[data-astro-cid-k74dcqyt] a[data-astro-cid-k74dcqyt].active:before{width:50px;border:solid 1px var(--secondary)}.bg-text-title[data-astro-cid-k74dcqyt]{background:linear-gradient(90deg,var(--primary) .08%,var(--primary) 39.51%,var(--secondary) 99.91%);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:69px}\n"}],"routeData":{"route":"/en","type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://miguelkillki.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/BySna/Documents/killki/work/mypage/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/BySna/Documents/killki/work/mypage/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/BySna/Documents/killki/work/mypage/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["C:/Users/BySna/Documents/killki/work/mypage/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/BySna/Documents/killki/work/mypage/src/pages/sheet/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/BySna/Documents/killki/work/mypage/src/pages/en/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/BySna/Documents/killki/work/mypage/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/sheet/defaultStyle@_@ts":"pages/sheet/defaultstyle.astro.mjs","\u0000@astro-page:src/pages/sheet/listPageId@_@ts":"pages/sheet/listpageid.astro.mjs","\u0000@astro-page:src/pages/sheet/editor/useFullscreen@_@ts":"pages/sheet/editor/usefullscreen.astro.mjs","\u0000@astro-page:src/pages/sheet/editor/mardown@_@ts":"pages/sheet/editor/mardown.astro.mjs","\u0000@astro-page:src/pages/sheet/[id]@_@astro":"pages/sheet/_id_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"pages/en.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/about.astro":"chunks/pages/about_4P4k8YUw.mjs","/src/pages/sheet/defaultStyle.ts":"chunks/pages/defaultStyle_KCpGwl0M.mjs","/src/pages/sheet/listPageId.ts":"chunks/pages/listPageId_AMQuRaDo.mjs","/src/pages/sheet/editor/mardown.ts":"chunks/pages/mardown_BSSR2HPN.mjs","/src/pages/rss.xml.js":"chunks/pages/rss_MMqr50Nj.mjs","/src/pages/sheet/editor/useFullscreen.ts":"chunks/pages/useFullscreen_RhtnRS_2.mjs","\u0000@astrojs-manifest":"manifest_Ks5smTCZ.mjs","C:/Users/BySna/Documents/killki/work/mypage/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3wEZly-Z.mjs","/astro/hoisted.js?q=0":"static/hoisted.q4RhXK8e.js","C:/Users/BySna/Documents/killki/work/mypage/src/pages/sheet/Content":"static/Content.xQdsfleI.js","@astrojs/react/client.js":"static/client.irnNCqkp.js","astro:scripts/before-hydration.js":""},"assets":[],"i18n":{"routing":"prefix-other-locales","locales":["es","en"],"defaultLocale":"es"}});

export { manifest };