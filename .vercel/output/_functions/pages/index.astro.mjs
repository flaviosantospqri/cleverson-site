import { c as createComponent, a as createAstro, r as renderTemplate, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, e as renderComponent, f as renderScript, g as renderHead, h as renderSlot } from '../chunks/astro/server_TorbNSWw.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { $ as $$Image } from '../chunks/_astro_assets_DHxMdoNb.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Icon;
  const {
    xmlns,
    viewBox = "0 0 512 512",
    path,
    width = "24",
    height = "24",
    color = "#000",
    ...props
  } = Astro2.props;
  if (!xmlns || !path) {
    console.error("Icon: 'xmlns' and 'path' is required");
    return null;
  }
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(xmlns, "xmlns")}${addAttribute(viewBox, "viewBox")}${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(color, "fill")}${spreadAttributes(props)}> <path${addAttribute(path, "d")}></path> </svg>`;
}, "C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/Icon.astro", undefined);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<div id="about" data-astro-cid-v2cbyr3p></div> <div id="container" data-astro-cid-v2cbyr3p> <div class="container-content-element" data-astro-cid-v2cbyr3p> <div class="block" data-observe data-astro-cid-v2cbyr3p> <section class="block-content-element" data-astro-cid-v2cbyr3p> <h2 data-astro-cid-v2cbyr3p>Quem sou</h2> <p data-astro-cid-v2cbyr3p>\nCleverson Borges \xE9 advogado, formado pelas Faculdades Integradas\n          Vianna J\xFAnior em Juiz de Fora e conta com mais de 20 anos de\n          experi\xEAncia profissional nas mais diversas \xE1reas (vendedor, auxiliar\n          administrativo, representante de atendimento de call center).\n</p> <p class="enphases" data-astro-cid-v2cbyr3p>\nAtua h\xE1 mais de 10 anos em v\xE1rios ramos do Direito, representando com\n          zelo e compromisso cada um dos\xA0seus\xA0clientes.\n</p> </section> ', ' </div> <div class="block who-i-am" data-observe data-astro-cid-v2cbyr3p> <section class="block-content-element" data-astro-cid-v2cbyr3p> <h2 data-astro-cid-v2cbyr3p>O que eu fa\xE7o</h2> <p data-astro-cid-v2cbyr3p>\nAdvogado com conhecimento em diversas \xE1reas do direito, oferecendo\n          solu\xE7\xF5es personalizadas e estrat\xE9gicas para proteger seus interesses.\n          Compromisso com \xE9tica, agilidade e resultados. Vamos conversar e\n          encontrar o melhor caminho para voc\xEA ou sua empresa?\n</p> </section> <div class="svg" data-astro-cid-v2cbyr3p> ', ' </div> </div> </div> </div>  <script type="text/javascript">\n  if (typeof window !== "undefined") {\n    document.addEventListener("DOMContentLoaded", () => {\n      const options = {\n        root: null,\n        rootMargin: "0px",\n        threshold: 0.1,\n      };\n\n      const handleIntersection = (entries, observer) => {\n        entries.forEach((entry) => {\n          if (entry.isIntersecting) {\n            entry.target.classList.add("visible");\n          } else {\n            entry.target.classList.remove("visible");\n          }\n        });\n      };\n\n      const observer = new IntersectionObserver(handleIntersection, options);\n      const blocks = document.querySelectorAll("[data-observe]");\n      blocks.forEach((block) => observer.observe(block));\n    });\n  }\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Icon", $$Icon, { "xmlns": "http://www.w3.org/2000/svg", "color": "rgba(255,255,255,0.1)", "width": "300", "height": "300", "viewBox": "0 0 576 512", "path": "M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-223.1L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6l29.7 0c33.7 0 64.9 17.7 82.3 46.6l44.9 74.7c-16.1 17.6-28.6 38.5-36.6 61.5c-1.9-1.8-3.5-3.9-4.9-6.3L232 256.9 232 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-16 0zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 240a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM368 321.6l0 6.4c0 8.8 7.2 16 16 16s16-7.2 16-16l0-6.4c0-5.3 4.3-9.6 9.6-9.6l40.5 0c7.7 0 13.9 6.2 13.9 13.9c0 5.2-2.9 9.9-7.4 12.3l-32 16.8c-5.3 2.8-8.6 8.2-8.6 14.2l0 14.8c0 8.8 7.2 16 16 16s16-7.2 16-16l0-5.1 23.5-12.3c15.1-7.9 24.5-23.6 24.5-40.6c0-25.4-20.6-45.9-45.9-45.9l-40.5 0c-23 0-41.6 18.6-41.6 41.6z", "data-astro-cid-v2cbyr3p": true }), renderComponent($$result, "Icon", $$Icon, { "xmlns": "http://www.w3.org/2000/svg", "color": "rgba(255,255,255,0.1)", "width": "300", "height": "300", "viewBox": "0 0 640 512", "path": "M117.9 62.4c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l113 37.7C265 15.8 290.7 0 320 0c44.2 0 80 35.8 80 80c0 3-.2 5.9-.5 8.8l122.6 40.9c16.8 5.6 25.8 23.7 20.2 40.5s-23.7-25.8-40.5-20.2L366.4 145.2c-4.5 3.2-9.3 5.9-14.4 8.2L352 480c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 0-294.7c-21-9.2-37.2-27-44.2-49l-125.9-42zM200.4 288L128 163.8 55.6 288l144.9 0zM128 384C65.1 384 12.8 350 2 305.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C243.2 350 190.9 384 128 384zm382.8-92.2L438.4 416l144.9 0L510.8 291.8zm126 141.3C626 478 573.7 512 510.8 512s-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1z", "data-astro-cid-v2cbyr3p": true }));
}, "C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/About.astro", undefined);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="contact" data-astro-cid-sz7xmlte></div> <div id="container-footer" data-astro-cid-sz7xmlte> <div class="container-footer-elements" data-astro-cid-sz7xmlte> <h1 data-astro-cid-sz7xmlte>Contatos</h1> <div class="container-contacts" data-astro-cid-sz7xmlte> <ul class="list-elements-contact block" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> ${renderComponent($$result, "Icon", $$Icon, { "xmlns": "http://www.w3.org/2000/svg", "color": "#000000", "width": "24", "height": "24", "path": "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z", "data-astro-cid-sz7xmlte": true })}
@cleversonborgesadvogado
</li> <li data-astro-cid-sz7xmlte> ${renderComponent($$result, "Icon", $$Icon, { "xmlns": "http://www.w3.org/2000/svg", "color": "#000000", "width": "24", "height": "24", "path": "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z", "data-astro-cid-sz7xmlte": true })}
(32) 9 99999-9999
</li> <li data-astro-cid-sz7xmlte> ${renderComponent($$result, "Icon", $$Icon, { "xmlns": "http://www.w3.org/2000/svg", "color": "#000000", "width": "24", "height": "24", "path": "M64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l80 0 0-64c0-26.5 21.5-48 48-48s48 21.5 48 48l0 64 80 0c8.8 0 16-7.2 16-16l0-384c0-8.8-7.2-16-16-16L64 48zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm88 40c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48zM232 88l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16zM88 232c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48zm144-16l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16z", "data-astro-cid-sz7xmlte": true })}
Rua X, Cidade Y,
</li> <li data-astro-cid-sz7xmlte> ${renderComponent($$result, "Icon", $$Icon, { "xmlns": "http://www.w3.org/2000/svg", "path": "M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z", "color": "#000000", "width": "24", "height": "24", "data-astro-cid-sz7xmlte": true })}Cleverson Borges Advogado
</li> </ul> <section class="phrase-elements-contact block" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>
"A justiça não consiste em ser neutro entre o certo e o errado, mas em
          descobrir o certo e sustentá-lo, onde quer que ele se encontre, contra
          o errado." –
<strong data-astro-cid-sz7xmlte>Theodore Roosevelt</strong> </p> </section> </div> <div class="line-divisor" data-astro-cid-sz7xmlte></div> <div data-astro-cid-sz7xmlte> <section class="footer-final-text-elements" data-astro-cid-sz7xmlte> <div data-astro-cid-sz7xmlte> <h2 data-astro-cid-sz7xmlte>Desenvolvido e Mantido;</h2> <p data-astro-cid-sz7xmlte>FLLA TECH SOLUÇÕES EM TECNOLOGIA</p> </div> <div data-astro-cid-sz7xmlte> <ul class="list-container-item-developement" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> ${renderComponent($$result, "Icon", $$Icon, { "xmlns": "http://www.w3.org/2000/svg", "color": "#000000", "width": "12", "height": "12", "path": "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z", "data-astro-cid-sz7xmlte": true })}@flatechsolucoes
</li> <li data-astro-cid-sz7xmlte> ${renderComponent($$result, "Icon", $$Icon, { "xmlns": "http://www.w3.org/2000/svg", "color": "#000000", "width": "12", "height": "12", "path": "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z", "data-astro-cid-sz7xmlte": true })}(32) 9 8473-8948
</li> <li data-astro-cid-sz7xmlte> ${renderComponent($$result, "Icon", $$Icon, { "xmlns": "http://www.w3.org/2000/svg", "color": "#000000", "width": "12", "height": "12", "path": "M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z", "data-astro-cid-sz7xmlte": true })}www.fllatech.com
</li> </ul> </div> </section> </div> </div> </div> `;
}, "C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/Footer.astro", undefined);

const $$Button = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/Button.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<div class="container-button" data-astro-cid-vnzlvqnm> ${renderComponent($$result, "custom-button", "custom-button", { "data-astro-cid-vnzlvqnm": true }, { "default": () => renderTemplate`Mande sua Dúvida` })} </div> `;
}, "C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/Button.astro", undefined);

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/NavBar.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<div class="navbar" data-astro-cid-ymhdp2rl> <div class="logo" data-astro-cid-ymhdp2rl>Logo</div> <div class="menu" data-astro-cid-ymhdp2rl> <a href="#home" data-astro-cid-ymhdp2rl>Início</a> <a href="#about" data-astro-cid-ymhdp2rl>Quem Sou</a> <a href="#services" data-astro-cid-ymhdp2rl>Meus Serviços</a> <a href="#contact" data-astro-cid-ymhdp2rl>Contato</a> </div> <div class="hamburger" id="hamburger" data-astro-cid-ymhdp2rl> <div data-astro-cid-ymhdp2rl></div> <div data-astro-cid-ymhdp2rl></div> <div data-astro-cid-ymhdp2rl></div> </div> </div> `;
}, "C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/NavBar.astro", undefined);

const $$InstragramCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/InstragramCard.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<div id="container" data-astro-cid-vuykuw6e> <div class="content" data-astro-cid-vuykuw6e> <span class="notification-span" data-astro-cid-vuykuw6e>1</span> <div class="img-block" data-astro-cid-vuykuw6e></div> <div class="content-information" data-astro-cid-vuykuw6e> <h2 data-astro-cid-vuykuw6e>Cleverson Borges Advogado</h2> <p data-astro-cid-vuykuw6e>Me Acompanhe No Instagram!</p> </div> </div> ${renderComponent($$result, "button-instagram", "button-instagram", { "class": "btn-container", "data-astro-cid-vuykuw6e": true }, { "default": () => renderTemplate` ${renderComponent($$result, "Icon", $$Icon, { "xmlns": "http://www.w3.org/2000/svg", "color": "#ffffff", "width": "16", "height": "16", "path": "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z", "data-astro-cid-vuykuw6e": true })}Ir para o Instagram` })} </div> `;
}, "C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/InstragramCard.astro", undefined);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div id="home" data-astro-cid-3ef6ksr2></div> <div id="container" data-astro-cid-3ef6ksr2> ', ' <div class="content-impact-phrase" data-observe data-astro-cid-3ef6ksr2> <div class="content-owner-name" data-astro-cid-3ef6ksr2> <h1 data-astro-cid-3ef6ksr2>Cleverson Borges</h1> <p data-astro-cid-3ef6ksr2>Advogado</p> </div> <div class="content-owner-phrase-citation" data-astro-cid-3ef6ksr2> <p data-astro-cid-3ef6ksr2>\n\u201CA justi\xE7a n\xE3o \xE9 uma quest\xE3o de tempo, \xE9 uma quest\xE3o de coragem.\u201D<br data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2> \u2013 Napol\xE9on Bonaparte.</span> </p> </div> </div> <div class="main-banner" data-astro-cid-3ef6ksr2> <div class="ctc-banner" data-astro-cid-3ef6ksr2> <div class="ctc-text-element-btn" data-astro-cid-3ef6ksr2> <h2 data-astro-cid-3ef6ksr2>\nTer um advogado \xE9 mais do que necess\xE1rio.<br data-astro-cid-3ef6ksr2> <span class="content-target" data-astro-cid-3ef6ksr2> Esteja pronto!</span> </h2> <span class="divisor-trace" data-astro-cid-3ef6ksr2> &#62;&#62;&#62; </span> ', ' </div> <div class="container-card-instagram" data-astro-cid-3ef6ksr2> ', ' </div> </div> </div> </div> <script type="text/javascript">\n  if (typeof window !== "undefined") {\n    document.addEventListener("DOMContentLoaded", () => {\n      const options = {\n        root: null,\n        rootMargin: "0px",\n        threshold: 0.1,\n      };\n\n      const handleIntersection = (entries, observer) => {\n        entries.forEach((entry) => {\n          if (entry.isIntersecting) {\n            entry.target.classList.add("visible");\n          } else {\n            entry.target.classList.remove("visible");\n          }\n        });\n      };\n\n      const observer = new IntersectionObserver(handleIntersection, options);\n      const blocks = document.querySelectorAll("[data-observe]");\n      blocks.forEach((block) => observer.observe(block));\n    });\n  }\n<\/script> '])), maybeRenderHead(), renderComponent($$result, "NavBar", $$NavBar, { "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "Button", $$Button, { "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "InstragramCard", $$InstragramCard, { "data-astro-cid-3ef6ksr2": true }));
}, "C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/Header.astro", undefined);

const personImage = new Proxy({"src":"/_astro/person.LKRQaDyS.png","width":454,"height":634,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/assets/person/person.png";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Newslatter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<script type="text/javascript">\n  if (typeof window !== "undefined") {\n    document.addEventListener("DOMContentLoaded", () => {\n      const options = {\n        root: null,\n        rootMargin: "0px",\n        threshold: 0.1,\n      };\n\n      const handleIntersection = (entries, observer) => {\n        entries.forEach((entry) => {\n          if (entry.isIntersecting) {\n            entry.target.classList.add("visible");\n          } else {\n            entry.target.classList.remove("visible");\n          }\n        });\n      };\n\n      const observer = new IntersectionObserver(handleIntersection, options);\n      const blocks = document.querySelectorAll("[data-observe]");\n      blocks.forEach((block) => observer.observe(block));\n    });\n  }\n<\/script> ', '<div id="container" data-astro-cid-gppbw32g> <div class="container-content" data-astro-cid-gppbw32g> <div class="header-newslatter-section" data-astro-cid-gppbw32g> <div class="container-person-img" data-astro-cid-gppbw32g> ', ' </div> <div class="container-content-text" data-observe data-astro-cid-gppbw32g> <div class="content-effect" data-astro-cid-gppbw32g> <h1 data-astro-cid-gppbw32g>Porque eu sou sua melhor op\xE7\xE3o ?</h1> <h2 data-astro-cid-gppbw32g>Cleverson Borges Advogado</h2> </div> <p class="content-effect" data-astro-cid-gppbw32g>\nContrary to popular belief, Lorem Ipsum is not simply random text. It\n          has roots in a piece of classical Latin literature from 45 BC, making\n          it over 2000 years old. Richard McClintock, a Latin professor at\n          Hampden-Sydney College in Virginia, looked up one of the more obscure\n          Latin words,\n</p> ', ' </div> </div> <span class="divisor-trace" data-astro-cid-gppbw32g> &#60;&#60;&#60; </span> <div class="container-newslatter-footer" data-observe="" data-astro-cid-gppbw32g> <div class="container-newslatter-text" data-astro-cid-gppbw32g> <h2 data-astro-cid-gppbw32g>Receba Dicas Semanais</h2> <p class="paragraph-content-newslatter" data-astro-cid-gppbw32g>\nInforma\xE7\xF5es relevantes sobre economia, direito, curiosidades. Todas as\n          Semanas!\n</p> </div> <div class="container-newslatter-form" data-astro-cid-gppbw32g> <div data-astro-cid-gppbw32g> <form action="" class="newslatter-form" data-astro-cid-gppbw32g> <input type="email" name="email" id="" placeholder="Digite seu email" data-astro-cid-gppbw32g> <input type="submit" value="Inscrever" data-astro-cid-gppbw32g> </form> </div> <span class="alert-content" data-astro-cid-gppbw32g>Fique por dentro de tudo.</span> </div> </div> </div> </div> '])), maybeRenderHead(), renderComponent($$result, "Image", $$Image, { "src": personImage, "alt": "Cleverson Borges Advogado foto de Perfil", "loading": "lazy", "data-astro-cid-gppbw32g": true }), renderComponent($$result, "Button", $$Button, { "data-astro-cid-gppbw32g": true }));
}, "C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/Newslatter.astro", undefined);

const $$Astro$3 = createAstro();
const $$CardService = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CardService;
  const { title, properties, pathSvg } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="container" class="item" data-astro-cid-7svfsdc4> <div class="container-header-card" data-astro-cid-7svfsdc4> ${renderComponent($$result, "Icon", $$Icon, { "xmlns": "http://www.w3.org/2000/svg", "color": "#5f2823", "width": "32", "height": "32", "path": pathSvg, "viewBox": "0 0 640 512", "data-astro-cid-7svfsdc4": true })} <p data-astro-cid-7svfsdc4>${title}</p> </div> <ul class="list-card-service" data-astro-cid-7svfsdc4> ${properties.map((item) => renderTemplate`<li data-astro-cid-7svfsdc4> ${renderComponent($$result, "Icon", $$Icon, { "xmlns": "http://www.w3.org/2000/svg", "color": "#39D98A", "width": "16", "height": "16", "path": "M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z", "viewBox": "0 0 448 512", "data-astro-cid-7svfsdc4": true })} ${item} </li>`)} </ul> </div> `;
}, "C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/CardService.astro", undefined);

const $$Astro$2 = createAstro();
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Carousel;
  const { items } = Astro2.props;
  const itemsPerPage = 4;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  return renderTemplate`${maybeRenderHead()}<div class="relative w-full overflow-hidden" data-astro-cid-wfe7xcno> <div id="slidesContainer" class="flex transition-transform duration-1500 ease-in-out"${addAttribute(`width: ${totalPages * 100}%`, "style")} data-astro-cid-wfe7xcno> ${Array.from({ length: totalPages }).map((_, pageIndex) => renderTemplate`<div class="flex-shrink-0 flex w-full"${addAttribute(`width: ${100 / totalPages}%`, "style")} data-astro-cid-wfe7xcno> ${items.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((item, itemIndex) => renderTemplate`<div class="carousel-slide flex-shrink-0 w-1/4 p-2 transition-transform duration-700 ease-in-out" data-astro-cid-wfe7xcno> ${renderComponent($$result, "CardService", $$CardService, { ...item, "data-astro-cid-wfe7xcno": true })} </div>`)} ${pageIndex === totalPages - 1 && Array.from({
    length: itemsPerPage - items.length % itemsPerPage
  }).map((_2, emptyIndex) => renderTemplate`<div class="carousel-slide flex-shrink-0 w-1/4 p-2" data-astro-cid-wfe7xcno></div>`)} </div>`)} </div> </div> ${renderScript($$result, "C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/Carousel.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/Carousel.astro", undefined);

const $$Astro$1 = createAstro();
const $$Galery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Galery;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="container-gallery-service" data-astro-cid-qudgmpkg> <div data-astro-cid-qudgmpkg> ${items.map((item) => renderTemplate`<div data-astro-cid-qudgmpkg> ${renderComponent($$result, "CardService", $$CardService, { ...item, "data-astro-cid-qudgmpkg": true })} </div>`)} </div> </div> `;
}, "C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/Galery.astro", undefined);

const $$Service = createComponent(($$result, $$props, $$slots) => {
  const serviceList = [
    {
      title: "Direito Civil e Contratual",
      properties: [
        "Posse e Propriedade",
        "Direitos Autorais",
        "Direito Imobili\xE1rio"
      ],
      pathSvg: "M384 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L398.4 96c-5.2 25.8-22.9 47.1-46.4 57.3L352 448l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 0-294.7c-23.5-10.3-41.2-31.6-46.4-57.3L128 96c-17.7 0-32-14.3-32-32s14.3-32 32-32l128 0c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288l144.9 0L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320l144.9 0L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z"
    },
    {
      title: "Direito do Consumidor",
      properties: [
        "Revis\xE3o de juros em contratos banc\xE1rios",
        " Produtos com defeito",
        "Problemas com contratos",
        "Pr\xE1ticas Abusivas"
      ],
      pathSvg: "M384 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L398.4 96c-5.2 25.8-22.9 47.1-46.4 57.3L352 448l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 0-294.7c-23.5-10.3-41.2-31.6-46.4-57.3L128 96c-17.7 0-32-14.3-32-32s14.3-32 32-32l128 0c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288l144.9 0L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320l144.9 0L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z"
    },
    {
      title: "Direito de Fam\xEDlia e da Inf\xE2ncia e Juventude",
      properties: [
        "Pens\xE3o Aliment\xEDcia",
        "Reconhecimento de v\xEDnculo familiar sangu\xEDneo ou afetivo",
        "Sucess\xF5es (heran\xE7a, invent\xE1rio",
        "Ado\xE7\xE3o e Guarda"
      ],
      pathSvg: "M384 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L398.4 96c-5.2 25.8-22.9 47.1-46.4 57.3L352 448l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 0-294.7c-23.5-10.3-41.2-31.6-46.4-57.3L128 96c-17.7 0-32-14.3-32-32s14.3-32 32-32l128 0c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288l144.9 0L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320l144.9 0L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z"
    },
    {
      title: "Direito de Tr\xE2nsito",
      properties: [
        "Defesa em processos administrativos e judiciais",
        "Recursos contra infra\xE7\xF5es e multas de tr\xE2nsito"
      ],
      pathSvg: "M384 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L398.4 96c-5.2 25.8-22.9 47.1-46.4 57.3L352 448l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 0-294.7c-23.5-10.3-41.2-31.6-46.4-57.3L128 96c-17.7 0-32-14.3-32-32s14.3-32 32-32l128 0c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288l144.9 0L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320l144.9 0L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z"
    },
    {
      title: "Direito Trabalhista e Previdenci\xE1rio",
      properties: [
        "Consultoria e Assessoria trabalhista para pessoas e empresas",
        "Aposentadorias, Aux\xEDlios, Benef\xEDcios e Revis\xF5es Previdenci\xE1rias"
      ],
      pathSvg: "M384 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L398.4 96c-5.2 25.8-22.9 47.1-46.4 57.3L352 448l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 0-294.7c-23.5-10.3-41.2-31.6-46.4-57.3L128 96c-17.7 0-32-14.3-32-32s14.3-32 32-32l128 0c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288l144.9 0L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320l144.9 0L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z"
    },
    {
      title: "Direito P\xFAblico e Direito Administrativo",
      properties: [
        "Consultoria e Assessoria Jur\xEDdica para pessoas jur\xEDdica de Direito P\xFAblico",
        "Consultoria e Assessoria Jur\xEDdica em licita\xE7\xF5es para fornecedores e prestadores de servi\xE7os",
        "Representa\xE7\xE3o de servidores p\xFAblicos civis e militares da uni\xE3o, estados\xA0e\xA0munic\xEDpios"
      ],
      pathSvg: "M384 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L398.4 96c-5.2 25.8-22.9 47.1-46.4 57.3L352 448l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 0-294.7c-23.5-10.3-41.2-31.6-46.4-57.3L128 96c-17.7 0-32-14.3-32-32s14.3-32 32-32l128 0c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288l144.9 0L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320l144.9 0L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z"
    }
  ];
  return renderTemplate`${renderScript($$result, "C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/Service.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<div id="services" data-astro-cid-o5bwjdhe></div> <div id="container" data-astro-cid-o5bwjdhe> <div class="mask" data-astro-cid-o5bwjdhe></div> <div class="container-content-element" data-astro-cid-o5bwjdhe> <div class="container-content-header" data-astro-cid-o5bwjdhe> <div class="div-text-header" data-astro-cid-o5bwjdhe> <p data-astro-cid-o5bwjdhe>Aqui, ofereço qualidade e diversidade.</p> </div> <div data-astro-cid-o5bwjdhe> ${renderComponent($$result, "Button", $$Button, { "data-astro-cid-o5bwjdhe": true })} </div> </div> <div class="large" data-astro-cid-o5bwjdhe> ${renderComponent($$result, "Carousel", $$Carousel, { "items": serviceList, "data-astro-cid-o5bwjdhe": true })} </div> <div class="small" data-astro-cid-o5bwjdhe> ${renderComponent($$result, "Galery", $$Galery, { "items": serviceList, "data-astro-cid-o5bwjdhe": true })} </div> ${renderComponent($$result, "button-talktome", "button-talktome", { "class": "container-button-card", "data-astro-cid-o5bwjdhe": true }, { "default": () => renderTemplate`Falar com Cleverson` })} </div> </div> ${renderScript($$result, "C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/Service.astro?astro&type=script&index=1&lang.ts")} `;
}, "C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/Service.astro", undefined);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>Cleverson Advogado</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/layouts/Layout.astro", undefined);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Service", $$Service, {})} ${renderComponent($$result2, "Newslatter", $$Newslatter, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/pages/index.astro", undefined);

const $$file = "C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
