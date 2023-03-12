import{o as De,t as se}from"../chunks/index.bc7c65c9.js";import{S as Me,a as ze,I as q,g as Ne,f as Ce,b as ge,c as le,s as H,i as qe,d as Z,e as V,P as Fe,h as We}from"../chunks/singletons.49a35693.js";import{u as Ye}from"../chunks/parse.d12b0d5b.js";function Xe(n,i){return n==="/"||i==="ignore"?n:i==="never"?n.endsWith("/")?n.slice(0,-1):n:i==="always"&&!n.endsWith("/")?n+"/":n}function Qe(n){return n.split("%25").map(decodeURI).join("%25")}function Ze(n){for(const i in n)n[i]=decodeURIComponent(n[i]);return n}const et=["href","pathname","search","searchParams","toString","toJSON"];function tt(n,i){const l=new URL(n);for(const f of et){let p=l[f];Object.defineProperty(l,f,{get(){return i(),p},enumerable:!0,configurable:!0})}return nt(l),l}function nt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const at="/__data.json";function rt(n){return n.replace(/\/$/,"")+at}function Ve(n){try{return JSON.parse(sessionStorage[n])}catch{}}function He(n,i){const l=JSON.stringify(i);try{sessionStorage[n]=l}catch{}}function ot(...n){let i=5381;for(const l of n)if(typeof l=="string"){let f=l.length;for(;f;)i=i*33^l.charCodeAt(--f)}else if(ArrayBuffer.isView(l)){const f=new Uint8Array(l.buffer,l.byteOffset,l.byteLength);let p=f.length;for(;p;)i=i*33^f[--p]}else throw new TypeError("value must be a string or TypedArray");return(i>>>0).toString(36)}const ce=window.fetch;window.fetch=(n,i)=>((n instanceof Request?n.method:(i==null?void 0:i.method)||"GET")!=="GET"&&te.delete(ve(n)),ce(n,i));const te=new Map;function it(n,i){const l=ve(n,i),f=document.querySelector(l);if(f!=null&&f.textContent){const{body:p,...v}=JSON.parse(f.textContent),R=f.getAttribute("data-ttl");return R&&te.set(l,{body:p,init:v,ttl:1e3*Number(R)}),Promise.resolve(new Response(p,v))}return ce(n,i)}function st(n,i,l){if(te.size>0){const f=ve(n,l),p=te.get(f);if(p){if(performance.now()<p.ttl&&["default","force-cache","only-if-cached",void 0].includes(l==null?void 0:l.cache))return new Response(p.body,p.init);te.delete(f)}}return ce(i,l)}function ve(n,i){let f=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;if(i!=null&&i.headers||i!=null&&i.body){const p=[];i.headers&&p.push([...new Headers(i.headers)].join(",")),i.body&&(typeof i.body=="string"||ArrayBuffer.isView(i.body))&&p.push(i.body),f+=`[data-hash="${ot(...p)}"]`}return f}const lt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function ct(n){const i=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${ut(n).map(f=>{const p=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(f);if(p)return i.push({name:p[1],matcher:p[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const v=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(f);if(v)return i.push({name:v[1],matcher:v[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!f)return;const R=f.split(/\[(.+?)\](?!\])/);return"/"+R.map((w,b)=>{if(b%2){if(w.startsWith("x+"))return ye(String.fromCharCode(parseInt(w.slice(2),16)));if(w.startsWith("u+"))return ye(String.fromCharCode(...w.slice(2).split("-").map(x=>parseInt(x,16))));const g=lt.exec(w);if(!g)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,D,j,$,L]=g;return i.push({name:$,matcher:L,optional:!!D,rest:!!j,chained:j?b===1&&R[0]==="":!1}),j?"(.*?)":D?"([^/]*)?":"([^/]+?)"}return ye(w)}).join("")}).join("")}/?$`),params:i}}function ft(n){return!/^\([^)]+\)$/.test(n)}function ut(n){return n.slice(1).split("/").filter(ft)}function dt(n,i,l){const f={},p=n.slice(1);let v=0;for(let R=0;R<i.length;R+=1){const y=i[R],w=p[R-v];if(y.chained&&y.rest&&v){f[y.name]=p.slice(R-v,R+1).filter(b=>b).join("/"),v=0;continue}if(w===void 0){y.rest&&(f[y.name]="");continue}if(!y.matcher||l[y.matcher](w)){f[y.name]=w;const b=i[R+1],g=p[R+1];b&&!b.rest&&g&&(v=0);continue}if(y.optional&&y.chained){v++;continue}return}if(!v)return f}function ye(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function ht({nodes:n,server_loads:i,dictionary:l,matchers:f}){const p=new Set(i);return Object.entries(l).map(([y,[w,b,g]])=>{const{pattern:D,params:j}=ct(y),$={id:y,exec:L=>{const x=D.exec(L);if(x)return dt(x,j,f)},errors:[1,...g||[]].map(L=>n[L]),layouts:[0,...b||[]].map(R),leaf:v(w)};return $.errors.length=$.layouts.length=Math.max($.errors.length,$.layouts.length),$});function v(y){const w=y<0;return w&&(y=~y),[w,n[y]]}function R(y){return y===void 0?y:[p.has(y),n[y]]}}let ee=class{constructor(i,l){this.status=i,typeof l=="string"?this.body={message:l}:l?this.body=l:this.body={message:`Error: ${i}`}}toString(){return JSON.stringify(this.body)}},Je=class{constructor(i,l){this.status=i,this.location=l}};async function pt(n){var i;for(const l in n)if(typeof((i=n[l])==null?void 0:i.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([f,p])=>[f,await p])));return n}function mt(n){return n.filter(i=>i!=null)}const z=Ve(Me)??{},Q=Ve(ze)??{};function we(n){z[n]=Z()}function gt(n,i){var Ie;const l=ht(n),f=n.nodes[0],p=n.nodes[1];f(),p();const v=document.documentElement,R=[],y=[];let w=null;const b={before_navigate:[],after_navigate:[]};let g={branch:[],error:null,url:null},D=!1,j=!1,$=!0,L=!1,x=!1,B=!1,J=!1,F,O=(Ie=history.state)==null?void 0:Ie[q];O||(O=Date.now(),history.replaceState({...history.state,[q]:O},"",location.href));const fe=z[O];fe&&(history.scrollRestoration="manual",scrollTo(fe.x,fe.y));let K,be,ne;async function Ee(){ne=ne||Promise.resolve(),await ne,ne=null;const t=new URL(location.href),e=W(t,!0);w=null,await xe(e,t,[])}function Se(t){y.some(e=>e==null?void 0:e.snapshot)&&(Q[t]=y.map(e=>{var r;return(r=e==null?void 0:e.snapshot)==null?void 0:r.capture()}))}function ke(t){var e;(e=Q[t])==null||e.forEach((r,a)=>{var s,o;(o=(s=y[a])==null?void 0:s.snapshot)==null||o.restore(r)})}async function ue(t,{noScroll:e=!1,replaceState:r=!1,keepFocus:a=!1,state:s={},invalidateAll:o=!1},u,c){return typeof t=="string"&&(t=new URL(t,Ne(document))),ie({url:t,scroll:e?Z():null,keepfocus:a,redirect_chain:u,details:{state:s,replaceState:r},nav_token:c,accepted:()=>{o&&(J=!0)},blocked:()=>{},type:"goto"})}async function Re(t){return w={id:t.id,promise:Ue(t).then(e=>(e.type==="loaded"&&e.state.error&&(w=null),e))},w.promise}async function ae(...t){const r=l.filter(a=>t.some(s=>a.exec(s))).map(a=>Promise.all([...a.layouts,a.leaf].map(s=>s==null?void 0:s[1]())));await Promise.all(r)}async function xe(t,e,r,a,s,o={},u){var h,d,k;be=o;let c=t&&await Ue(t);if(c||(c=await $e(e,{id:null},await X(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)),e=(t==null?void 0:t.url)||e,be!==o)return!1;if(c.type==="redirect")if(r.length>10||r.includes(e.pathname))c=await re({status:500,error:await X(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return ue(new URL(c.location,e).href,{},[...r,e.pathname],o),!1;else((h=c.props.page)==null?void 0:h.status)>=400&&await H.updated.check()&&await Y(e);if(R.length=0,J=!1,L=!0,a&&(we(a),Se(a)),(d=c.props.page)!=null&&d.url&&c.props.page.url.pathname!==e.pathname&&(e.pathname=(k=c.props.page)==null?void 0:k.url.pathname),s&&s.details){const{details:E}=s,P=E.replaceState?0:1;if(E.state[q]=O+=P,history[E.replaceState?"replaceState":"pushState"](E.state,"",e),!E.replaceState){let S=O+1;for(;Q[S]||z[S];)delete Q[S],delete z[S],S+=1}}if(w=null,j?(g=c.state,c.props.page&&(c.props.page.url=e),F.$set(c.props)):Le(c),s){const{scroll:E,keepfocus:P}=s,{activeElement:S}=document;await se();const m=document.activeElement!==S&&document.activeElement!==document.body;if(!P&&!m&&await _e(),$){const U=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));E?scrollTo(E.x,E.y):U?U.scrollIntoView():scrollTo(0,0)}}else await se();$=!0,c.props.page&&(K=c.props.page),u&&u(),L=!1}function Le(t){var a;g=t.state;const e=document.querySelector("style[data-sveltekit]");e&&e.remove(),K=t.props.page,F=new n.root({target:i,props:{...t.props,stores:H,components:y},hydrate:!0}),ke(O);const r={from:null,to:{params:g.params,route:{id:((a=g.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};b.after_navigate.forEach(s=>s(r)),j=!0}async function G({url:t,params:e,branch:r,status:a,error:s,route:o,form:u}){let c="never";for(const S of r)(S==null?void 0:S.slash)!==void 0&&(c=S.slash);t.pathname=Xe(t.pathname,c),t.search=t.search;const h={type:"loaded",state:{url:t,params:e,branch:r,error:s,route:o},props:{constructors:mt(r).map(S=>S.node.component)}};u!==void 0&&(h.props.form=u);let d={},k=!K,E=0;for(let S=0;S<Math.max(r.length,g.branch.length);S+=1){const m=r[S],U=g.branch[S];(m==null?void 0:m.data)!==(U==null?void 0:U.data)&&(k=!0),m&&(d={...d,...m.data},k&&(h.props[`data_${E}`]=d),E+=1)}return(!g.url||t.href!==g.url.href||g.error!==s||u!==void 0&&u!==K.form||k)&&(h.props.page={error:s,params:e,route:{id:(o==null?void 0:o.id)??null},status:a,url:new URL(t),form:u??null,data:k?d:K.data}),h}async function de({loader:t,parent:e,url:r,params:a,route:s,server_data_node:o}){var d,k,E;let u=null;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},h=await t();if((d=h.universal)!=null&&d.load){let P=function(...m){for(const U of m){const{href:N}=new URL(U,r);c.dependencies.add(N)}};const S={route:{get id(){return c.route=!0,s.id}},params:new Proxy(a,{get:(m,U)=>(c.params.add(U),m[U])}),data:(o==null?void 0:o.data)??null,url:tt(r,()=>{c.url=!0}),async fetch(m,U){let N;m instanceof Request?(N=m.url,U={body:m.method==="GET"||m.method==="HEAD"?void 0:await m.blob(),cache:m.cache,credentials:m.credentials,headers:m.headers,integrity:m.integrity,keepalive:m.keepalive,method:m.method,mode:m.mode,redirect:m.redirect,referrer:m.referrer,referrerPolicy:m.referrerPolicy,signal:m.signal,...U}):N=m;const C=new URL(N,r);return P(C.href),C.origin===r.origin&&(N=C.href.slice(r.origin.length)),j?st(N,C.href,U):it(N,U)},setHeaders:()=>{},depends:P,parent(){return c.parent=!0,e()}};u=await h.universal.load.call(null,S)??null,u=u?await pt(u):null}return{node:h,loader:t,server:o,universal:(k=h.universal)!=null&&k.load?{type:"data",data:u,uses:c}:null,data:u??(o==null?void 0:o.data)??null,slash:((E=h.universal)==null?void 0:E.trailingSlash)??(o==null?void 0:o.slash)}}function Pe(t,e,r,a,s){if(J)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&r)return!0;for(const o of a.params)if(s[o]!==g.params[o])return!0;for(const o of a.dependencies)if(R.some(u=>u(new URL(o))))return!0;return!1}function he(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}async function Ue({id:t,invalidating:e,url:r,params:a,route:s}){if((w==null?void 0:w.id)===t)return w.promise;const{errors:o,layouts:u,leaf:c}=s,h=[...u,c];o.forEach(_=>_==null?void 0:_().catch(()=>{})),h.forEach(_=>_==null?void 0:_[1]().catch(()=>{}));let d=null;const k=g.url?t!==g.url.pathname+g.url.search:!1,E=g.route?s.id!==g.route.id:!1;let P=!1;const S=h.map((_,T)=>{var M;const A=g.branch[T],I=!!(_!=null&&_[0])&&((A==null?void 0:A.loader)!==_[1]||Pe(P,E,k,(M=A.server)==null?void 0:M.uses,a));return I&&(P=!0),I});if(S.some(Boolean)){try{d=await Ke(r,S)}catch(_){return re({status:_ instanceof ee?_.status:500,error:await X(_,{url:r,params:a,route:{id:s.id}}),url:r,route:s})}if(d.type==="redirect")return d}const m=d==null?void 0:d.nodes;let U=!1;const N=h.map(async(_,T)=>{var pe;if(!_)return;const A=g.branch[T],I=m==null?void 0:m[T];if((!I||I.type==="skip")&&_[1]===(A==null?void 0:A.loader)&&!Pe(U,E,k,(pe=A.universal)==null?void 0:pe.uses,a))return A;if(U=!0,(I==null?void 0:I.type)==="error")throw I;return de({loader:_[1],url:r,params:a,route:s,parent:async()=>{var Te;const je={};for(let me=0;me<T;me+=1)Object.assign(je,(Te=await N[me])==null?void 0:Te.data);return je},server_data_node:he(I===void 0&&_[0]?{type:"skip"}:I??null,_[0]?A==null?void 0:A.server:void 0)})});for(const _ of N)_.catch(()=>{});const C=[];for(let _=0;_<h.length;_+=1)if(h[_])try{C.push(await N[_])}catch(T){if(T instanceof Je)return{type:"redirect",location:T.location};let A=500,I;if(m!=null&&m.includes(T))A=T.status??A,I=T.error;else if(T instanceof ee)A=T.status,I=T.body;else{if(await H.updated.check())return await Y(r);I=await X(T,{params:a,url:r,route:{id:s.id}})}const M=await Ae(_,C,o);return M?await G({url:r,params:a,branch:C.slice(0,M.idx).concat(M.node),status:A,error:I,route:s}):await $e(r,{id:s.id},I,A)}else C.push(void 0);return await G({url:r,params:a,branch:C,status:200,error:null,route:s,form:e?void 0:null})}async function Ae(t,e,r){for(;t--;)if(r[t]){let a=t;for(;!e[a];)a-=1;try{return{idx:a+1,node:{node:await r[t](),loader:r[t],data:{},server:null,universal:null}}}catch{continue}}}async function re({status:t,error:e,url:r,route:a}){const s={};let o=null;if(n.server_loads[0]===0)try{const d=await Ke(r,[!0]);if(d.type!=="data"||d.nodes[0]&&d.nodes[0].type!=="data")throw 0;o=d.nodes[0]??null}catch{(r.origin!==location.origin||r.pathname!==location.pathname||D)&&await Y(r)}const c=await de({loader:f,url:r,params:s,route:a,parent:()=>Promise.resolve({}),server_data_node:he(o)}),h={node:await p(),loader:p,universal:null,server:null,data:null};return await G({url:r,params:s,branch:[c,h],status:t,error:e,route:null})}function W(t,e){if(qe(t,V))return;const r=oe(t);for(const a of l){const s=a.exec(r);if(s)return{id:t.pathname+t.search,invalidating:e,route:a,params:Ze(s),url:t}}}function oe(t){return Qe(t.pathname.slice(V.length)||"/")}function Oe({url:t,type:e,intent:r,delta:a}){var c,h;let s=!1;const o={from:{params:g.params,route:{id:((c=g.route)==null?void 0:c.id)??null},url:g.url},to:{params:(r==null?void 0:r.params)??null,route:{id:((h=r==null?void 0:r.route)==null?void 0:h.id)??null},url:t},willUnload:!r,type:e};a!==void 0&&(o.delta=a);const u={...o,cancel:()=>{s=!0}};return x||b.before_navigate.forEach(d=>d(u)),s?null:o}async function ie({url:t,scroll:e,keepfocus:r,redirect_chain:a,details:s,type:o,delta:u,nav_token:c,accepted:h,blocked:d}){const k=W(t,!1),E=Oe({url:t,type:o,delta:u,intent:k});if(!E){d();return}const P=O;h(),x=!0,j&&H.navigating.set(E),await xe(k,t,a,P,{scroll:e,keepfocus:r,details:s},c,()=>{x=!1,b.after_navigate.forEach(S=>S(E)),H.navigating.set(null)})}async function $e(t,e,r,a){return t.origin===location.origin&&t.pathname===location.pathname&&!D?await re({status:a,error:r,url:t,route:e}):await Y(t)}function Y(t){return location.href=t.href,new Promise(()=>{})}function Ge(){let t;v.addEventListener("mousemove",o=>{const u=o.target;clearTimeout(t),t=setTimeout(()=>{a(u,2)},20)});function e(o){a(o.composedPath()[0],1)}v.addEventListener("mousedown",e),v.addEventListener("touchstart",e,{passive:!0});const r=new IntersectionObserver(o=>{for(const u of o)u.isIntersecting&&(ae(oe(new URL(u.target.href))),r.unobserve(u.target))},{threshold:0});function a(o,u){const c=Ce(o,v);if(!c)return;const{url:h,external:d}=ge(c,V);if(d)return;const k=le(c);if(!k.reload)if(u<=k.preload_data){const E=W(h,!1);E&&Re(E)}else u<=k.preload_code&&ae(oe(h))}function s(){r.disconnect();for(const o of v.querySelectorAll("a")){const{url:u,external:c}=ge(o,V);if(c)continue;const h=le(o);h.reload||(h.preload_code===Fe.viewport&&r.observe(o),h.preload_code===Fe.eager&&ae(oe(u)))}}b.after_navigate.push(s),s()}function X(t,e){return t instanceof ee?t.body:n.hooks.handleError({error:t,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:t=>{De(()=>(b.after_navigate.push(t),()=>{const e=b.after_navigate.indexOf(t);b.after_navigate.splice(e,1)}))},before_navigate:t=>{De(()=>(b.before_navigate.push(t),()=>{const e=b.before_navigate.indexOf(t);b.before_navigate.splice(e,1)}))},disable_scroll_handling:()=>{(L||!j)&&($=!1)},goto:(t,e={})=>ue(t,e,[]),invalidate:t=>{if(typeof t=="function")R.push(t);else{const{href:e}=new URL(t,location.href);R.push(r=>r.href===e)}return Ee()},invalidateAll:()=>(J=!0,Ee()),preload_data:async t=>{const e=new URL(t,Ne(document)),r=W(e,!1);if(!r)throw new Error(`Attempted to preload a URL that does not belong to this app: ${e}`);await Re(r)},preload_code:ae,apply_action:async t=>{if(t.type==="error"){const e=new URL(location.href),{branch:r,route:a}=g;if(!a)return;const s=await Ae(g.branch.length,r,a.errors);if(s){const o=await G({url:e,params:g.params,branch:r.slice(0,s.idx).concat(s.node),status:t.status??500,error:t.error,route:a});g=o.state,F.$set(o.props),se().then(_e)}}else t.type==="redirect"?ue(t.location,{invalidateAll:!0},[]):(F.$set({form:null,page:{...K,form:t.data,status:t.status}}),await se(),F.$set({form:t.data}),t.type==="success"&&_e())},_start_router:()=>{var t;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{var a;let r=!1;if(!x){const s={from:{params:g.params,route:{id:((a=g.route)==null?void 0:a.id)??null},url:g.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};b.before_navigate.forEach(o=>o(s))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&(we(O),He(Me,z),Se(O),He(ze,Q))}),(t=navigator.connection)!=null&&t.saveData||Ge(),v.addEventListener("click",e=>{if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=Ce(e.composedPath()[0],v);if(!r)return;const{url:a,external:s,target:o}=ge(r,V);if(!a)return;if(o==="_parent"||o==="_top"){if(window.parent!==window)return}else if(o&&o!=="_self")return;const u=le(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:"))return;if(s||u.reload){Oe({url:a,type:"link"})||e.preventDefault(),x=!0;return}const[h,d]=a.href.split("#");if(d!==void 0&&h===location.href.split("#")[0]){B=!0,we(O),g.url=a,H.page.set({...K,url:a}),H.page.notify();return}ie({url:a,scroll:u.noscroll?Z():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:a.href===location.href},accepted:()=>e.preventDefault(),blocked:()=>e.preventDefault(),type:"link"})}),v.addEventListener("submit",e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(qe(o,V))return;const u=e.target,{noscroll:c,reload:h}=le(u);if(h)return;e.preventDefault(),e.stopPropagation();const d=new FormData(u),k=a==null?void 0:a.getAttribute("name");k&&d.append(k,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(d).toString(),ie({url:o,scroll:c?Z():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[q]){if(e.state[q]===O)return;const a=z[e.state[q]];if(g.url.href.split("#")[0]===location.href.split("#")[0]){z[O]=Z(),O=e.state[q],scrollTo(a.x,a.y);return}const s=e.state[q]-O;let o=!1;await ie({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=e.state[q]},blocked:()=>{history.go(-s),o=!0},type:"popstate",delta:s}),o||ke(O)}}),addEventListener("hashchange",()=>{B&&(B=!1,history.replaceState({...history.state,[q]:++O},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&H.navigating.set(null)})},_hydrate:async({status:t=200,error:e,node_ids:r,params:a,route:s,data:o,form:u})=>{D=!0;const c=new URL(location.href);({params:a={},route:s={id:null}}=W(c,!1)||{});let h;try{const d=r.map(async(k,E)=>{const P=o[E];return P!=null&&P.uses&&(P.uses=Be(P.uses)),de({loader:n.nodes[k],url:c,params:a,route:s,parent:async()=>{const S={};for(let m=0;m<E;m+=1)Object.assign(S,(await d[m]).data);return S},server_data_node:he(P)})});h=await G({url:c,params:a,branch:await Promise.all(d),status:t,error:e,form:u,route:l.find(({id:k})=>k===s.id)??null})}catch(d){if(d instanceof Je){await Y(new URL(d.location,location.href));return}h=await re({status:d instanceof ee?d.status:500,error:await X(d,{url:c,params:a,route:s}),url:c,route:s})}Le(h)}}}async function Ke(n,i){const l=new URL(n);l.pathname=rt(n.pathname),l.searchParams.append("x-sveltekit-invalidated",i.map(p=>p?"1":"").join("_"));const f=await ce(l.href);if(!f.ok)throw new ee(f.status,await f.json());return new Promise(async p=>{var g;const v=new Map,R=f.body.getReader(),y=new TextDecoder;function w(D){return Ye(D,{Promise:j=>new Promise(($,L)=>{v.set(j,{fulfil:$,reject:L})})})}let b="";for(;;){const{done:D,value:j}=await R.read();if(D&&!b)break;for(b+=!j&&b?`
`:y.decode(j);;){const $=b.indexOf(`
`);if($===-1)break;const L=JSON.parse(b.slice(0,$));if(b=b.slice($+1),L.type==="redirect")return p(L);if(L.type==="data")(g=L.nodes)==null||g.forEach(x=>{(x==null?void 0:x.type)==="data"&&(x.uses=Be(x.uses),x.data=w(x.data))}),p(L);else if(L.type==="chunk"){const{id:x,data:B,error:J}=L,F=v.get(x);v.delete(x),J?F.reject(w(J)):F.fulfil(w(B))}}}})}function Be(n){return{dependencies:new Set((n==null?void 0:n.dependencies)??[]),params:new Set((n==null?void 0:n.params)??[]),parent:!!(n!=null&&n.parent),route:!!(n!=null&&n.route),url:!!(n!=null&&n.url)}}function _e(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const i=document.body,l=i.getAttribute("tabindex");return i.tabIndex=-1,i.focus({preventScroll:!0}),l!==null?i.setAttribute("tabindex",l):i.removeAttribute("tabindex"),new Promise(f=>{setTimeout(()=>{var p;f((p=getSelection())==null?void 0:p.removeAllRanges())})})}}async function Et(n,i,l){const f=gt(n,i);We({client:f}),l?await f._hydrate(l):f.goto(location.href,{replaceState:!0}),f._start_router()}export{Et as start};
