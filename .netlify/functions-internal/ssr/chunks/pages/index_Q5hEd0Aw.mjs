/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, u as unescapeHTML, f as addAttribute, h as renderSlot } from '../astro_661kyLiZ.mjs';
import 'kleur/colors';
import { g as getI18N, $ as $$Logo, a as $$Layout } from './archivo_H6kGRkrS.mjs';
import 'clsx';

const $$Astro$8 = createAstro("https://jahiker.github.io");
const $$Video = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Video;
  return renderTemplate`${maybeRenderHead()}<div class="w-full relative"> <img src="./logo-home.svg" alt="Esland Logo Home" class="absolute top-10 z-10 w-[1000px] right-0 left-0 m-auto" width="1000" height="700" loading="lazy"> <video src="./video.webm" autoplay loop muted class="w-full h-screen object-cover object-top animate-ease-in-out animate-fade animate-duration-1000" style="clip-path: polygon(100% 0, 100% 80%, 50% 100%, 0 80%, 0 0);"></video> <video src="video.webm" autoplay loop muted class="absolute -bottom-48 blur-3xl -z-40 w-full"></video> </div>`;
}, "/var/www/html/esland-web/src/components/Video.astro", void 0);

const $$Astro$7 = createAstro("https://jahiker.github.io");
const $$Intro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Intro;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<section class="text-xl text-left px-4 lg:px-20 max-w-[70ch] mx-auto text-pretty my-24"> ${renderComponent($$result, "Logo", $$Logo, { "class": "w-16 my-10 mx-auto text-white" })} <h1 class="mx-auto mb-10 text-wrap text-center text-4xl font-semibold tracking-wide"> ${i18n.INTRO_TITLE}<br> ${i18n.INTRO_TITLE_AFTER_BR} </h1> <p>${unescapeHTML(i18n.INTRO_DESCRIPTION_1)}</p> <p>${unescapeHTML(i18n.INTRO_DESCRIPTION_2)}</p> <p>${unescapeHTML(i18n.INTRO_DESCRIPTION_3)}</p> </section>`;
}, "/var/www/html/esland-web/src/components/Intro.astro", void 0);

const $$Astro$6 = createAstro("https://jahiker.github.io");
const $$BentoItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BentoItem;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`${Astro2.props.class} 
  relative 
  rounded-xl 
  backdrop-blur-xl 
  col-span-5
  border 
  border-black/10 
  shadow-inner 
  shadow-white/10 overflow-hidden group`, "class")}> <!--TODO: Add black fade in for showing the content --> <div class="absolute z-10 bottom-0 top-0 h-full w-full bg-gradient-to-b from-transparent from-40% via-black/50 to-black/80"></div> ${renderSlot($$result, $$slots["image"])} <div class="relative select-none flex flex-col gap-1 p-6 text-lg z-20 justify-end h-full"> <h2 class="text-3xl font-semibold text-balance text-white mb-4">${title}</h2> ${subtitle && renderTemplate`<h3 class="text-3xl font-semibold text-sky-200/80 -mt-4 mb-4"> ${subtitle} </h3>`} ${renderSlot($$result, $$slots["content"])} </div> </article>`;
}, "/var/www/html/esland-web/src/components/BentoItem.astro", void 0);

const $$Astro$5 = createAstro("https://jahiker.github.io");
const $$Bento = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Bento;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`
    w-full max-w-[1400px]
    grid lg:grid-cols-10 auto-rows-[30rem] gap-4
    mx-auto p-6 md:p-12 lg:p-20
  `, "class")}> ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "col-span-10 md:col-span-4", "title": i18n.BENTO_TITLE_CARD_01 }, { "content": ($$result2) => renderTemplate`<p class="max-w-xl">${unescapeHTML(i18n.BENTO_DESCRIPTION_CARD_01)}</p>`, "image": ($$result2) => renderTemplate`<div class="absolute left-0 top-0 bottom-0 w-full h-full group-hover:scale-110 transition-scale duration-1000 ease-in-out opacity-90 bg-center bg-cover bg-no-repeat bg-blend-luminosity -z-10 bg-blue-900" style="background-image: url('./mountain.webp')"></div>` })} ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "col-span-10 md:col-span-6", "title": i18n.BENTO_TITLE_CARD_02, "subtitle": i18n.BENTO_SUBTITLE_CARD_02 }, { "content": ($$result2) => renderTemplate`<p class="max-w-xl">${unescapeHTML(i18n.BENTO_DESCRIPTION_CARD_02)}</p>`, "image": ($$result2) => renderTemplate`<div class="absolute left-0 top-0 bottom-0 w-full h-full group-hover:scale-110 transition-scale duration-1000 ease-in-out opacity-90 bg-center bg-cover bg-no-repeat bg-blend-luminosity -z-10 bg-blue-900" style="background-image: url('./pistas.webp')"></div>` })} ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "col-span-10 md:col-span-6", "title": i18n.BENTO_TITLE_CARD_03, "subtitle": i18n.BENTO_SUBTITLE_CARD_03 }, { "content": ($$result2) => renderTemplate`<p class="max-w-xl">${unescapeHTML(i18n.BENTO_DESCRIPTION_CARD_03)}</p>`, "image": ($$result2) => renderTemplate`<div class="absolute left-0 top-0 bottom-0 w-full h-full group-hover:scale-110 transition-scale duration-1000 ease-in-out opacity-90 bg-center bg-cover bg-no-repeat bg-blend-luminosity -z-10 bg-blue-900" style="background-image: url('./gref.webp')"></div>` })} ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "col-span-10 md:col-span-4", "title": i18n.BENTO_TITLE_CARD_04 }, { "content": ($$result2) => renderTemplate`<p class="max-w-xl">${unescapeHTML(i18n.BENTO_DESCRIPTION_CARD_04)}</p>`, "image": ($$result2) => renderTemplate`<div class="absolute left-0 top-0 bottom-0 w-full h-full group-hover:scale-110 transition-scale duration-1000 ease-in-out opacity-90 bg-center bg-cover bg-no-repeat bg-blend-luminosity -z-10 bg-blue-900" style="background-image: url('./laptop.webp')"></div>` })} </section>`;
}, "/var/www/html/esland-web/src/components/Bento.astro", void 0);

const $$Astro$4 = createAstro("https://jahiker.github.io");
const $$PreFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$PreFooter;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<section class="w-full px-4 py-8 lg:px-20 lg:py-20 max-w-[1400px] mx-auto"> <h3 class="uppercase text-center font-semibold mb-10 text-balance text-4xl tracking-wide"> ${i18n.PREFOOTER_TITLE} </h3> ${renderComponent($$result, "lite-youtube", "lite-youtube", { "class": "shadow-2xl shadow-white/20 rounded-xl", "videoId": "nYPVr2IYTtk", "videoTitle": "GUIA DE LA 3\xAA EDICI\xD3N DE LOS PREMIOS ESLAND" })} </section> `;
}, "/var/www/html/esland-web/src/components/PreFooter.astro", void 0);

const $$Astro$3 = createAstro("https://jahiker.github.io");
const $$App = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$App;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": i18n.SEO_TITLE, "description": i18n.SEO_DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Video", $$Video, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Intro", $$Intro, {})} ${renderComponent($$result2, "Bento", $$Bento, {})} ${renderComponent($$result2, "PreFooter", $$PreFooter, {})} </main> ` })}`;
}, "/var/www/html/esland-web/src/components/App.astro", void 0);

const $$Astro$2 = createAstro("https://jahiker.github.io");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "App", $$App, {})}`;
}, "/var/www/html/esland-web/src/pages/en/index.astro", void 0);

const $$file$2 = "/var/www/html/esland-web/src/pages/en/index.astro";
const $$url$2 = "/esland-web/en";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://jahiker.github.io");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "App", $$App, {})}`;
}, "/var/www/html/esland-web/src/pages/es/index.astro", void 0);

const $$file$1 = "/var/www/html/esland-web/src/pages/es/index.astro";
const $$url$1 = "/esland-web/es";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://jahiker.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "App", $$App, {})}`;
}, "/var/www/html/esland-web/src/pages/index.astro", void 0);

const $$file = "/var/www/html/esland-web/src/pages/index.astro";
const $$url = "/esland-web";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };
