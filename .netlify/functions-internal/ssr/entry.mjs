import { renderers } from './renderers.mjs';
import { manifest } from './manifest_2fo4NJlq.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_5IEQfvI4.mjs');
const _page1 = () => import('./chunks/archivo_gx7Xq_-f.mjs');
const _page2 = () => import('./chunks/info_YRT-m14Z.mjs');
const _page3 = () => import('./chunks/index_QqiuUWr3.mjs');
const _page4 = () => import('./chunks/archivo_qoErXf1U.mjs');
const _page5 = () => import('./chunks/info_R9Ys-jKj.mjs');
const _page6 = () => import('./chunks/index_2-qjFs_O.mjs');
const _page7 = () => import('./chunks/index_eJuxZziQ.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/en/archivo.astro", _page1],
    ["src/pages/en/info.astro", _page2],
    ["src/pages/en/index.astro", _page3],
    ["src/pages/es/archivo.astro", _page4],
    ["src/pages/es/info.astro", _page5],
    ["src/pages/es/index.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "f4f0ed16-b7ac-4984-8307-6ba6626da82f"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
