import{w as c}from"./index.53433d2b.js";var _;const g=((_=globalThis.__sveltekit_1jvp87t)==null?void 0:_.base)??"";var h;const v=((h=globalThis.__sveltekit_1jvp87t)==null?void 0:h.assets)??g,k="1678626472142",R="sveltekit:snapshot",T="sveltekit:scroll",I="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function S(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}function y(){return{x:pageXOffset,y:pageYOffset}}function l(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const d={...f,"":f.hover};function b(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function x(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=b(t)}}function O(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const a=t instanceof SVGAElement?t.target.baseVal:t.target,s=!n||!!a||m(n,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external")||t.hasAttribute("download");return{url:n,external:s,target:a}}function U(t){let e=null,n=null,a=null,s=null,o=t;for(;o&&o!==document.documentElement;)n===null&&(n=l(o,"preload-code")),a===null&&(a=l(o,"preload-data")),e===null&&(e=l(o,"noscroll")),s===null&&(s=l(o,"reload")),o=b(o);return{preload_code:d[n??"off"],preload_data:d[a??"off"],noscroll:e==="off"?!1:e===""?!0:null,reload:s==="off"?!1:s===""?!0:null}}function p(t){const e=c(t);let n=!0;function a(){n=!0,e.update(r=>r)}function s(r){n=!1,e.set(r)}function o(r){let i;return e.subscribe(u=>{(i===void 0||n&&u!==i)&&r(i=u)})}return{notify:a,set:s,subscribe:o}}function E(){const{set:t,subscribe:e}=c(!1);let n;async function a(){clearTimeout(n);const s=await fetch(`${v}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(s.ok){const r=(await s.json()).version!==k;return r&&(t(!0),clearTimeout(n)),r}else throw new Error(`Version check failed: ${s.status}`)}return{subscribe:e,check:a}}function m(t,e){return t.origin!==location.origin||!t.pathname.startsWith(e)}let w;function j(t){w=t.client}const L={url:p({}),page:p({}),navigating:c(null),updated:E()};export{I,f as P,T as S,R as a,O as b,U as c,y as d,g as e,x as f,S as g,j as h,m as i,w as j,L as s};
