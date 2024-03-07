/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_661kyLiZ.mjs';
import 'kleur/colors';
import { a as $$Layout, g as getI18N } from './archivo_H6kGRkrS.mjs';

const $$Astro$1 = createAstro("https://jahiker.github.io");
const $$Info$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Info$1;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": i18n.SEO_TITLE, "description": i18n.SEO_DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main></main> ` })}`;
}, "/var/www/html/esland-web/src/pages/en/info.astro", void 0);

const $$file$1 = "/var/www/html/esland-web/src/pages/en/info.astro";
const $$url$1 = "/esland-web/en/info";

const info$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Info$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://jahiker.github.io");
const $$Info = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Info;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": i18n.SEO_TITLE, "description": i18n.SEO_DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main></main> ` })}`;
}, "/var/www/html/esland-web/src/pages/es/info.astro", void 0);

const $$file = "/var/www/html/esland-web/src/pages/es/info.astro";
const $$url = "/esland-web/es/info";

const info = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Info,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { info as a, info$1 as i };
