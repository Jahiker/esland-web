/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, e as renderComponent, f as addAttribute, g as renderHead, h as renderSlot } from '../astro_661kyLiZ.mjs';
import 'kleur/colors';
/* empty css                          */
import 'clsx';

const $$Astro$5 = createAstro("https://jahiker.github.io");
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Logo;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="56" height="70" viewBox="0 0 56 70" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0 70L26.25 56.7L11.2 58.8L26.25 0L0 70Z" fill="currentColor"></path> <path d="M56 70L29.75 56.7L44.8 58.8L29.75 0L56 70Z" fill="currentColor"></path> <path d="M24.8501 41.65L28.0001 22.4L31.5001 41.65L28.0001 48.65L24.8501 41.65Z" fill="currentColor"></path> </svg>`;
}, "/var/www/html/esland-web/src/components/Logo.astro", void 0);

const $$Astro$4 = createAstro("https://jahiker.github.io");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header id="header-nav" class="fixed w-screen py-4 z-50 top-0 px-8 lg:px-0"> <div class="flex justify-between items-center flex-wrap max-w-7xl mx-auto"> <a href="/" class="col-span-1"> ${renderComponent($$result, "Logo", $$Logo, { "class": "h-12" })} </a> <nav class="col-span-1 justify-self-center"> <ul class="flex gap-4"> <li><a class="hover:underline" href="#">INFO</a></li> <li><a class="hover:underline" href="#">ARCHIVO</a></li> </ul> </nav> <a href="#" class="border rounded-full inline-block border-white px-4 py-2 justify-self-end hover:bg-white hover:text-black duration-300">
ESLAND: EL DOCUMENTAL
</a> </div> </header>`;
}, "/var/www/html/esland-web/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro("https://jahiker.github.io");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const date = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gradient-to-br from-slate-800/10 to-slate-950 backdrop-blur-sm shadow-sm shadow-black/30"> <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"> <div class="md:flex md:justify-between"> <div class="mb-6 md:mb-0"> <a href="https://flowbite.com/" class="flex items-center"> ${renderComponent($$result, "Logo", $$Logo, { "class": "h-12 lg:h-16" })} </a> </div> <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"> <div> <h2 class="mb-6 text-sm font-semibold uppercase text-white">
Resources
</h2> <ul class="text-gray-400 font-medium"> <li class="mb-4"> <a href="https://flowbite.com/" class="hover:underline">Flowbite</a> </li> <li> <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a> </li> </ul> </div> <div> <h2 class="mb-6 text-sm font-semibold uppercase text-white">
Follow us
</h2> <ul class="text-gray-400 font-medium"> <li class="mb-4"> <a href="https://github.com/themesberg/flowbite" class="hover:underline">Github</a> </li> <li> <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a> </li> </ul> </div> <div> <h2 class="mb-6 text-sm font-semibold uppercase text-white">Legal</h2> <ul class="text-gray-400 font-medium"> <li class="mb-4"> <a href="#" class="hover:underline">Privacy Policy</a> </li> <li> <a href="#" class="hover:underline">Terms &amp; Conditions</a> </li> </ul> </div> </div> </div> <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8"> <div class="sm:flex sm:items-center sm:justify-between"> <span class="text-sm sm:text-center text-gray-400">© ${date.getFullYear()} <a href="https://flowbite.com/" class="hover:underline">ESLAND Awards</a>.
        All Rights Reserved.
</span> <div class="flex mt-4 sm:justify-center sm:mt-0"> <a href="#" class="text-gray-500 hover:text-white" target="_blank" rel="noopener noreferrer"> <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19"> <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"></path> </svg> <span class="sr-only">Facebook page</span> </a> <a href="#" class="text-gray-500 hover:text-white ms-5" target="_blank" rel="noopener noreferrer"> <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16"> <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"></path> </svg> <span class="sr-only">Discord community</span> </a> <a href="#" class="text-gray-500 hover:text-white ms-5" target="_blank" rel="noopener noreferrer"> <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17"> <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"></path> </svg> <span class="sr-only">Twitter page</span> </a> <a href="https://github.com/Jahiker/esland-web" class="text-gray-500 hover:text-white ms-5" target="_blank" rel="noopener noreferrer"> <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"></path> </svg> <span class="sr-only">GitHub account</span> </a> </div> </div> </div> </footer>`;
}, "/var/www/html/esland-web/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://jahiker.github.io");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  const { currentLocale } = Astro2;
  return renderTemplate`<html${addAttribute(currentLocale, "lang")}> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="./favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/var/www/html/esland-web/src/layouts/Layout.astro", void 0);

const SEO_TITLE$1 = "Premios ESLAND 2024 - Celebrando lo mejor del streaming y los creadores de contenido";
const SEO_DESCRIPTION$1 = "Descubre a los mejores creadores de contenido de España, Latinoamerica y Andorra. Vota por tus favoritos! Celebra la innovación y el talento de Twitch, Youtube y más";
const INTRO_TITLE$1 = "Bienvenidos/as";
const INTRO_TITLE_AFTER_BR$1 = "a los Premios ESLAND";
const INTRO_DESCRIPTION_1$1 = "El cine tiene los Oscars, la música tiene los Grammy y <strong> el streaming tiene los ESLAND.</strong> Los premios que celebran la creatividad y el talento de los mejores creadores de contenido de <strong>la comunidad hispanohablante.</strong>";
const INTRO_DESCRIPTION_2$1 = "España, Latinoamérica y Andorra unidas por creadores creadoras y sus comunidades, para recordar y revivir <strong>algunos de los mejores momentos del año.</strong>";
const INTRO_DESCRIPTION_3$1 = "Tras dos galas celebradas, una en el Palau de la Música Catalana de Barcelona, y otra en el Auditorio Nacional de la Ciudad de México, solo queda esperar <strong>a la tercera edición en Andorra.</strong>";
const BENTO_TITLE_CARD_01$1 = "ANDORRA: EL CÉNIT DE LOS PREMIOS ESLAND";
const BENTO_SUBTITLE_CARD_01$1 = "";
const BENTO_DESCRIPTION_CARD_01$1 = "Una nueva edición <strong>cargada de novedades</strong> y contenido, que empezará varias semanas antes de la ansiada gala. <strong>Directos especiales, colaboraciones, conciertos y mucho más</strong> en lo que será una auténtica fiesta dedicada a la creación de contenido.";
const BENTO_TITLE_CARD_02$1 = "LA ALFOMBRA BLANCA";
const BENTO_SUBTITLE_CARD_02$1 = "16 de febrero de 2024";
const BENTO_DESCRIPTION_CARD_02$1 = "Este año, el momento de la alfombra azul será sustituido y mejorado, gracias a los increíbles paisajes andorranos, por una <strong>alfombra blanca en plena nieve</strong>, situada en las <strong>pistas de esquí de Andorra.</strong>";
const BENTO_TITLE_CARD_03$1 = "LA GALA";
const BENTO_SUBTITLE_CARD_03$1 = "17 de febrero de 2024";
const BENTO_DESCRIPTION_CARD_03$1 = "Una gala de premios llena de <strong>contenido de primer nivel y muchas sorpresas</strong>, en la que se descubrirán los <strong>ganadores</strong> de esta tercera edición de los Premios ESLAND.";
const BENTO_TITLE_CARD_04$1 = "LA ALFOMBRA BLANCA";
const BENTO_SUBTITLE_CARD_04$1 = "";
const BENTO_DESCRIPTION_CARD_04$1 = "Este año, el reddit no formará parte de las votaciones de los premios, pero sí que <strong>formará parte de la comunidad</strong>. El subreddit oficial de los Premios ESLAND está abierto para ti, para que compartas tus clips, tus opiniones y para que <strong>interactúes con toda la comunidad</strong> del streaming hispanohablante.";
const PREFOOTER_TITLE$1 = "GUIA DE LA 3ª EDICIÓN DE LOS PREMIOS ESLAND";
const spanish = {
	SEO_TITLE: SEO_TITLE$1,
	SEO_DESCRIPTION: SEO_DESCRIPTION$1,
	INTRO_TITLE: INTRO_TITLE$1,
	INTRO_TITLE_AFTER_BR: INTRO_TITLE_AFTER_BR$1,
	INTRO_DESCRIPTION_1: INTRO_DESCRIPTION_1$1,
	INTRO_DESCRIPTION_2: INTRO_DESCRIPTION_2$1,
	INTRO_DESCRIPTION_3: INTRO_DESCRIPTION_3$1,
	BENTO_TITLE_CARD_01: BENTO_TITLE_CARD_01$1,
	BENTO_SUBTITLE_CARD_01: BENTO_SUBTITLE_CARD_01$1,
	BENTO_DESCRIPTION_CARD_01: BENTO_DESCRIPTION_CARD_01$1,
	BENTO_TITLE_CARD_02: BENTO_TITLE_CARD_02$1,
	BENTO_SUBTITLE_CARD_02: BENTO_SUBTITLE_CARD_02$1,
	BENTO_DESCRIPTION_CARD_02: BENTO_DESCRIPTION_CARD_02$1,
	BENTO_TITLE_CARD_03: BENTO_TITLE_CARD_03$1,
	BENTO_SUBTITLE_CARD_03: BENTO_SUBTITLE_CARD_03$1,
	BENTO_DESCRIPTION_CARD_03: BENTO_DESCRIPTION_CARD_03$1,
	BENTO_TITLE_CARD_04: BENTO_TITLE_CARD_04$1,
	BENTO_SUBTITLE_CARD_04: BENTO_SUBTITLE_CARD_04$1,
	BENTO_DESCRIPTION_CARD_04: BENTO_DESCRIPTION_CARD_04$1,
	PREFOOTER_TITLE: PREFOOTER_TITLE$1
};

const SEO_TITLE = "ESLAND Awards 2024 - Celebrating the best of streaming and content creators";
const SEO_DESCRIPTION = "Discover the best content creators from Spain, Latin America and Andorra. Vote for your favorites! Celebrate the innovation and talent of Twitch, Youtube and more";
const INTRO_TITLE = "Welcome";
const INTRO_TITLE_AFTER_BR = "to the ESLAND Awards";
const INTRO_DESCRIPTION_1 = "Cinema has the Oscars, music has the Grammys and <strong> streaming has the ESLAND.</strong> The awards that celebrate the creativity and talent of the best content creators in the <strong>Spanish-speaking community.</strong> strong>";
const INTRO_DESCRIPTION_2 = "Spain, Latin America and Andorra united by creators and their communities, to remember and relive <strong>some of the best moments of the year.</strong>";
const INTRO_DESCRIPTION_3 = "After two galas held, one at the Palau de la Música Catalana in Barcelona, and another at the National Auditorium in Mexico City, we only have to wait for <strong>the third edition in Andorra.</strong>";
const BENTO_TITLE_CARD_01 = "ANDORRA: THE ZENIT OF THE ESLAND AWARDS";
const BENTO_SUBTITLE_CARD_01 = "";
const BENTO_DESCRIPTION_CARD_01 = "A new edition <strong>loaded with news</strong> and content, which will begin several weeks before the long-awaited gala. <strong>Special live shows, collaborations, concerts and much more</strong> in what will be a true party dedicated to content creation.";
const BENTO_TITLE_CARD_02 = "THE WHITE CARPET";
const BENTO_SUBTITLE_CARD_02 = "February 16, 2024";
const BENTO_DESCRIPTION_CARD_02 = "This year, the moment of the blue carpet will be replaced and improved, thanks to the incredible Andorran landscapes, by a <strong>white carpet in the snow</strong>, located on the <strong>ski slopes of Andorra.</strong> strong>";
const BENTO_TITLE_CARD_03 = "THE GALA";
const BENTO_SUBTITLE_CARD_03 = "February 17, 2024";
const BENTO_DESCRIPTION_CARD_03 = "An awards gala full of <strong>top-level content and many surprises</strong>, in which the <strong>winners</strong> of this third edition of the ESLAND Awards will be revealed.";
const BENTO_TITLE_CARD_04 = "THE WHITE CARPET";
const BENTO_SUBTITLE_CARD_04 = "";
const BENTO_DESCRIPTION_CARD_04 = "This year, reddit will not be part of the awards voting, but it will be part of the community. The official subreddit of the ESLAND Awards is open for you, for you to share your clips, your opinions and for you to interact with the entire Spanish-speaking streaming community.";
const PREFOOTER_TITLE = "GUIDE TO THE 3RD EDITION OF THE ESLAND AWARDS";
const english = {
	SEO_TITLE: SEO_TITLE,
	SEO_DESCRIPTION: SEO_DESCRIPTION,
	INTRO_TITLE: INTRO_TITLE,
	INTRO_TITLE_AFTER_BR: INTRO_TITLE_AFTER_BR,
	INTRO_DESCRIPTION_1: INTRO_DESCRIPTION_1,
	INTRO_DESCRIPTION_2: INTRO_DESCRIPTION_2,
	INTRO_DESCRIPTION_3: INTRO_DESCRIPTION_3,
	BENTO_TITLE_CARD_01: BENTO_TITLE_CARD_01,
	BENTO_SUBTITLE_CARD_01: BENTO_SUBTITLE_CARD_01,
	BENTO_DESCRIPTION_CARD_01: BENTO_DESCRIPTION_CARD_01,
	BENTO_TITLE_CARD_02: BENTO_TITLE_CARD_02,
	BENTO_SUBTITLE_CARD_02: BENTO_SUBTITLE_CARD_02,
	BENTO_DESCRIPTION_CARD_02: BENTO_DESCRIPTION_CARD_02,
	BENTO_TITLE_CARD_03: BENTO_TITLE_CARD_03,
	BENTO_SUBTITLE_CARD_03: BENTO_SUBTITLE_CARD_03,
	BENTO_DESCRIPTION_CARD_03: BENTO_DESCRIPTION_CARD_03,
	BENTO_TITLE_CARD_04: BENTO_TITLE_CARD_04,
	BENTO_SUBTITLE_CARD_04: BENTO_SUBTITLE_CARD_04,
	BENTO_DESCRIPTION_CARD_04: BENTO_DESCRIPTION_CARD_04,
	PREFOOTER_TITLE: PREFOOTER_TITLE
};

const LANGUAGES = {
  SPANISH: "es",
  ENGLISH: "en"
};
const getI18N = ({ currentLocale = "es" }) => {
  switch (currentLocale) {
    case LANGUAGES.ENGLISH:
      return english;
    case LANGUAGES.SPANISH:
      return spanish;
    default:
      return spanish;
  }
};

const $$Astro$1 = createAstro("https://jahiker.github.io");
const $$Archivo$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Archivo$1;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": i18n.SEO_TITLE, "description": i18n.SEO_DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main></main> ` })}`;
}, "/var/www/html/esland-web/src/pages/en/archivo.astro", void 0);

const $$file$1 = "/var/www/html/esland-web/src/pages/en/archivo.astro";
const $$url$1 = "/esland-web/en/archivo";

const archivo$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Archivo$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://jahiker.github.io");
const $$Archivo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Archivo;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": i18n.SEO_TITLE, "description": i18n.SEO_DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main></main> ` })}`;
}, "/var/www/html/esland-web/src/pages/es/archivo.astro", void 0);

const $$file = "/var/www/html/esland-web/src/pages/es/archivo.astro";
const $$url = "/esland-web/es/archivo";

const archivo = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Archivo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Logo as $, $$Layout as a, archivo$1 as b, archivo as c, getI18N as g };
