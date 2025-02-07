import 'kleur/colors';
import { d as decodeKey } from './chunks/astro/server_TorbNSWw.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BhZq-X3f.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
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
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Flavio/Documents/FLLATECH/cleverson-site/","cacheDir":"file:///C:/Users/Flavio/Documents/FLLATECH/cleverson-site/node_modules/.astro/","outDir":"file:///C:/Users/Flavio/Documents/FLLATECH/cleverson-site/dist/","srcDir":"file:///C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/","publicDir":"file:///C:/Users/Flavio/Documents/FLLATECH/cleverson-site/public/","buildClientDir":"file:///C:/Users/Flavio/Documents/FLLATECH/cleverson-site/dist/client/","buildServerDir":"file:///C:/Users/Flavio/Documents/FLLATECH/cleverson-site/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.W6_M8y2H.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","C:/Users/Flavio/Documents/FLLATECH/cleverson-site/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CEDbi2t3.mjs","\u0000@astrojs-manifest":"manifest_VuqjY869.mjs","@astrojs/react/client.js":"_astro/client.BNC2RHkt.js","C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/Service.astro?astro&type=script&index=0&lang.ts":"_astro/Service.astro_astro_type_script_index_0_lang.Bk-r9Rs9.js","C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/Service.astro?astro&type=script&index=1&lang.ts":"_astro/Service.astro_astro_type_script_index_1_lang.Dcwn4Fem.js","C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/Button.astro?astro&type=script&index=0&lang.ts":"_astro/Button.astro_astro_type_script_index_0_lang.Dm1pMgEo.js","C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/NavBar.astro?astro&type=script&index=0&lang.ts":"_astro/NavBar.astro_astro_type_script_index_0_lang.AThoAlLU.js","C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/InstragramCard.astro?astro&type=script&index=0&lang.ts":"_astro/InstragramCard.astro_astro_type_script_index_0_lang.EH8KR23e.js","C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/Carousel.astro?astro&type=script&index=0&lang.ts":"_astro/Carousel.astro_astro_type_script_index_0_lang.D32Ir2xZ.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/Service.astro?astro&type=script&index=0&lang.ts","class e extends HTMLElement{constructor(){super()}connectedCallback(){this.addEventListener(\"click\",this.handleClick)}handleClick(){window.open(\"https://wa.me/5511999999999?text=Olá! Cleverson, pode explicar melhor sobre os serviços que você atende ?\",\"_blank\")}}customElements.define(\"button-talktome\",e);"],["C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/Service.astro?astro&type=script&index=1&lang.ts","let A=U;const a=1,p=2,y={};var i=null;let v=null,C=null,o=null,u=null,f=null,g=0;function O(t,e,s){A=F;const r=D(t,e,!1,a);r.user=!0,f?f.push(r):m(r)}function S(t){if(o===null)return t();const e=o;o=null;try{return t()}finally{o=e}}function N(t){O(()=>S(t))}function L(t,e,s){let r=t.value;return(!t.comparator||!t.comparator(r,e))&&(t.value=e,t.observers&&t.observers.length&&b(()=>{for(let l=0;l<t.observers.length;l+=1){const n=t.observers[l],c=v&&v.running;c&&v.disposed.has(n),(c?!n.tState:!n.state)&&(n.pure?u.push(n):f.push(n),n.observers&&k(n)),c||(n.state=a)}if(u.length>1e6)throw u=[],new Error})),e}function m(t){if(!t.fn)return;w(t);const e=g;T(t,t.value,e)}function T(t,e,s){let r;const l=i,n=o;o=i=t;try{r=t.fn(e)}catch(c){return t.pure&&(t.state=a,t.owned&&t.owned.forEach(w),t.owned=null),t.updatedAt=s+1,x(c)}finally{o=n,i=l}(!t.updatedAt||t.updatedAt<=s)&&(t.updatedAt!=null&&\"observers\"in t?L(t,r):t.value=r,t.updatedAt=s)}function D(t,e,s,r=a,l){const n={fn:t,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:i,context:i?i.context:null,pure:s};return i===null||i!==y&&(i.owned?i.owned.push(n):i.owned=[n]),n}function h(t){if(t.state===0)return;if(t.state===p)return E(t);if(t.suspense&&S(t.suspense.inFallback))return t.suspense.effects.push(t);const e=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<g);)t.state&&e.push(t);for(let s=e.length-1;s>=0;s--)if(t=e[s],t.state===a)m(t);else if(t.state===p){const r=u;u=null,b(()=>E(t,e[0])),u=r}}function b(t,e){if(u)return t();let s=!1;u=[],f?s=!0:f=[],g++;try{const r=t();return z(s),r}catch(r){s||(f=null),u=null,x(r)}}function z(t){if(u&&(U(u),u=null),t)return;const e=f;f=null,e.length&&b(()=>A(e))}function U(t){for(let e=0;e<t.length;e++)h(t[e])}function F(t){let e,s=0;for(e=0;e<t.length;e++){const r=t[e];r.user?t[s++]=r:h(r)}for(e=0;e<s;e++)h(t[e])}function E(t,e){t.state=0;for(let s=0;s<t.sources.length;s+=1){const r=t.sources[s];if(r.sources){const l=r.state;l===a?r!==e&&(!r.updatedAt||r.updatedAt<g)&&h(r):l===p&&E(r,e)}}}function k(t){for(let e=0;e<t.observers.length;e+=1){const s=t.observers[e];s.state||(s.state=p,s.pure?u.push(s):f.push(s),s.observers&&k(s))}}function w(t){let e;if(t.sources)for(;t.sources.length;){const s=t.sources.pop(),r=t.sourceSlots.pop(),l=s.observers;if(l&&l.length){const n=l.pop(),c=s.observerSlots.pop();r<l.length&&(n.sourceSlots[c]=r,l[r]=n,s.observerSlots[r]=c)}}if(t.tOwned){for(e=t.tOwned.length-1;e>=0;e--)w(t.tOwned[e]);delete t.tOwned}if(t.owned){for(e=t.owned.length-1;e>=0;e--)w(t.owned[e]);t.owned=null}if(t.cleanups){for(e=t.cleanups.length-1;e>=0;e--)t.cleanups[e]();t.cleanups=null}t.state=0}function G(t){return t instanceof Error?t:new Error(typeof t==\"string\"?t:\"Unknown error\",{cause:t})}function x(t,e=i){throw G(t)}const I=()=>{};N(()=>{window.addEventListener(\"resize\",I)});"],["C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/Button.astro?astro&type=script&index=0&lang.ts","class e extends HTMLElement{constructor(){super()}connectedCallback(){this.addEventListener(\"click\",this.handleClick)}handleClick(){window.open(\"https://wa.me/5511999999999?text=Olá! Venho do Site e preciso de uma consultoria\",\"_blank\")}}customElements.define(\"custom-button\",e);"],["C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/NavBar.astro?astro&type=script&index=0&lang.ts","if(typeof window<\"u\"){const e=document.getElementById(\"hamburger\"),n=document.querySelector(\".navbar .menu\");e&&n&&e.addEventListener(\"click\",()=>{n.classList.toggle(\"active\")})}"],["C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/InstragramCard.astro?astro&type=script&index=0&lang.ts","class e extends HTMLElement{constructor(){super()}connectedCallback(){this.addEventListener(\"click\",this.handleClick)}handleClick(){window.open(\"https://www.instagram.com/cleversonborges.adv/\",\"_blank\")}}customElements.define(\"button-instagram\",e);"],["C:/Users/Flavio/Documents/FLLATECH/cleverson-site/src/components/Carousel.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{let e=0;const s=document.querySelectorAll(\".bullet\"),o=document.getElementById(\"slidesContainer\"),r=document.querySelectorAll(\".carousel-slide\"),c=Math.ceil(r.length/4);if(!o)return;const l=t=>{e=t,o.style.transform=`translateX(-${50*t}%)`,s.forEach((n,a)=>{n.classList.toggle(\"bg-green-500\",a===t)})};s.forEach((t,n)=>{t.addEventListener(\"click\",()=>{l(n)})}),setInterval(()=>{e=(e+1)%c,l(e)},3e3),l(e)});"]],"assets":["/_astro/person.LKRQaDyS.png","/_astro/serviceimg.B7NJFX0Y.png","/_astro/imgbanner.CAe_fKOZ.png","/_astro/index.W6_M8y2H.css","/favicon.svg","/_astro/client.BNC2RHkt.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Jj7oiJepG7ZEgRRCOusgxdMeikz7fAWqd4IzbpByjiM="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
