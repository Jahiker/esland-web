import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_661kyLiZ.mjs';
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
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
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
    }),
    isIndex: rawRouteData.isIndex
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
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/esland-web/_astro/archivo.3CtDEuIP.css"},{"type":"external","src":"/esland-web/_astro/index.nfo3yNpa.css"}],"routeData":{"route":"/en/archivo","isIndex":false,"type":"page","pattern":"^\\/en\\/archivo\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"archivo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/archivo.astro","pathname":"/en/archivo","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/esland-web/_astro/archivo.3CtDEuIP.css"},{"type":"external","src":"/esland-web/_astro/index.nfo3yNpa.css"}],"routeData":{"route":"/en/info","isIndex":false,"type":"page","pattern":"^\\/en\\/info\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"info","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/info.astro","pathname":"/en/info","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/esland-web/_astro/hoisted.B82H8Mtg.js"}],"styles":[{"type":"external","src":"/esland-web/_astro/archivo.3CtDEuIP.css"},{"type":"external","src":"/esland-web/_astro/index.nfo3yNpa.css"}],"routeData":{"route":"/en","isIndex":true,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/esland-web/_astro/archivo.3CtDEuIP.css"},{"type":"external","src":"/esland-web/_astro/index.nfo3yNpa.css"}],"routeData":{"route":"/es/archivo","isIndex":false,"type":"page","pattern":"^\\/es\\/archivo\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}],[{"content":"archivo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/archivo.astro","pathname":"/es/archivo","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/esland-web/_astro/archivo.3CtDEuIP.css"},{"type":"external","src":"/esland-web/_astro/index.nfo3yNpa.css"}],"routeData":{"route":"/es/info","isIndex":false,"type":"page","pattern":"^\\/es\\/info\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}],[{"content":"info","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/info.astro","pathname":"/es/info","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/esland-web/_astro/hoisted.B82H8Mtg.js"}],"styles":[{"type":"external","src":"/esland-web/_astro/archivo.3CtDEuIP.css"},{"type":"external","src":"/esland-web/_astro/index.nfo3yNpa.css"}],"routeData":{"route":"/es","isIndex":true,"type":"page","pattern":"^\\/es\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/index.astro","pathname":"/es","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/esland-web/_astro/hoisted.B82H8Mtg.js"}],"styles":[{"type":"external","src":"/esland-web/_astro/archivo.3CtDEuIP.css"},{"type":"external","src":"/esland-web/_astro/index.nfo3yNpa.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/esland-web/_astro/hoisted.B82H8Mtg.js"}],"styles":[{"type":"external","src":"/esland-web/_astro/archivo.3CtDEuIP.css"},{"type":"external","src":"/esland-web/_astro/index.nfo3yNpa.css"}],"routeData":{"route":"/","isIndex":true,"type":"fallback","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://jahiker.github.io","base":"/esland-web","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/var/www/html/esland-web/src/pages/en/index.astro",{"propagation":"none","containsHead":true}],["/var/www/html/esland-web/src/pages/es/index.astro",{"propagation":"none","containsHead":true}],["/var/www/html/esland-web/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/var/www/html/esland-web/src/pages/en/archivo.astro",{"propagation":"none","containsHead":true}],["/var/www/html/esland-web/src/pages/en/info.astro",{"propagation":"none","containsHead":true}],["/var/www/html/esland-web/src/pages/es/archivo.astro",{"propagation":"none","containsHead":true}],["/var/www/html/esland-web/src/pages/es/info.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_M0U5ATu7.mjs","\u0000@astrojs-manifest":"manifest_2fo4NJlq.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_5IEQfvI4.mjs","\u0000@astro-page:src/pages/en/archivo@_@astro":"chunks/archivo_gx7Xq_-f.mjs","\u0000@astro-page:src/pages/en/info@_@astro":"chunks/info_YRT-m14Z.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"chunks/index_QqiuUWr3.mjs","\u0000@astro-page:src/pages/es/archivo@_@astro":"chunks/archivo_qoErXf1U.mjs","\u0000@astro-page:src/pages/es/info@_@astro":"chunks/info_R9Ys-jKj.mjs","\u0000@astro-page:src/pages/es/index@_@astro":"chunks/index_2-qjFs_O.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_eJuxZziQ.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.B82H8Mtg.js","astro:scripts/before-hydration.js":""},"assets":["/esland-web/_astro/onest-latin-wght-normal.ycwkluYs.woff2","/esland-web/_astro/onest-cyrillic-wght-normal.okE7jKFK.woff2","/esland-web/_astro/onest-latin-ext-wght-normal.NATBPiDw.woff2","/esland-web/_astro/archivo.3CtDEuIP.css","/esland-web/_astro/index.nfo3yNpa.css","/esland-web/favicon.svg","/esland-web/gref.png","/esland-web/gref.webp","/esland-web/gref.webp:Zone.Identifier","/esland-web/laptop.png","/esland-web/laptop.webp","/esland-web/laptop.webp:Zone.Identifier","/esland-web/logo-home.svg","/esland-web/logo.png","/esland-web/mountain.png","/esland-web/mountain.webp","/esland-web/mountain.webp:Zone.Identifier","/esland-web/pistas.png","/esland-web/pistas.webp","/esland-web/pistas.webp:Zone.Identifier","/esland-web/video.mp4","/esland-web/video.webm","/esland-web/_astro/hoisted.B82H8Mtg.js"],"i18n":{"strategy":"pathname-prefix-always","locales":["es","en"],"defaultLocale":"es","domainLookupTable":{}},"buildFormat":"directory"});

export { manifest };
