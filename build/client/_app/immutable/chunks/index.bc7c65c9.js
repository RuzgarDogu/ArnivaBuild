function v(){}function I(t,e){for(const n in e)t[n]=e[n];return t}function P(t){return t()}function M(){return Object.create(null)}function y(t){t.forEach(P)}function T(t){return typeof t=="function"}function ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function at(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function W(t){return Object.keys(t).length===0}function G(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ft(t,e,n){t.$$.on_destroy.push(G(e,n))}function _t(t,e,n,i){if(t){const r=L(t,e,n,i);return t[0](r)}}function L(t,e,n,i){return t[1]&&i?I(n.ctx.slice(),t[1](i(e))):n.ctx}function dt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let u=0;u<c;u+=1)o[u]=e.dirty[u]|r[u];return o}return e.dirty|r}return e.dirty}function ht(t,e,n,i,r,o){if(r){const c=L(e,n,i,o);t.p(c,r)}}function mt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function pt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}let w=!1;function J(){w=!0}function K(){w=!1}function Q(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const l=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:Q(1,r,g=>e[n[g]].claim_order,l))-1;i[s]=n[f]+1;const a=f+1;n[a]=s,r=Math.max(a,r)}const o=[],c=[];let u=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(o.push(e[s-1]);u>=s;u--)c.push(e[u]);u--}for(;u>=0;u--)c.push(e[u]);o.reverse(),c.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<c.length;s++){for(;l<o.length&&c[s].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(c[s],f)}}function U(t,e){if(w){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function yt(t,e,n){w&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function bt(){return S(" ")}function xt(){return S("")}function $t(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function vt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Z(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:Z(t,i,e[i])}function Et(t,e,n){const i=new Set;for(let r=0;r<t.length;r+=1)t[r].checked&&i.add(t[r].__value);return n||i.delete(e),Array.from(i)}function tt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function q(t,e,n,i,r=!1){et(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(e(u)){const s=n(u);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(e(u)){const s=n(u);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function B(t,e,n,i){return q(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];n[u.name]||o.push(u.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function kt(t,e,n){return B(t,e,n,X)}function Nt(t,e,n){return B(t,e,n,Y)}function nt(t,e){return q(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>S(e),!0)}function jt(t){return nt(t," ")}function At(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function St(t,e){t.value=e??""}function Ct(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Dt(t,e,n){t.classList[n?"add":"remove"](e)}function it(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Mt(t,e){return new t(e)}let p;function m(t){p=t}function E(){if(!p)throw new Error("Function called outside component initialization");return p}function Ot(t){E().$$.on_mount.push(t)}function Pt(t){E().$$.after_update.push(t)}function Tt(t){E().$$.on_destroy.push(t)}function Lt(){const t=E();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=it(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function qt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const h=[],O=[],x=[],N=[],z=Promise.resolve();let j=!1;function F(){j||(j=!0,z.then(H))}function Bt(){return F(),z}function A(t){x.push(t)}function zt(t){N.push(t)}const k=new Set;let d=0;function H(){if(d!==0)return;const t=p;do{try{for(;d<h.length;){const e=h[d];d++,m(e),rt(e.$$)}}catch(e){throw h.length=0,d=0,e}for(m(null),h.length=0,d=0;O.length;)O.pop()();for(let e=0;e<x.length;e+=1){const n=x[e];k.has(n)||(k.add(n),n())}x.length=0}while(h.length);for(;N.length;)N.pop()();j=!1,k.clear(),m(t)}function rt(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const $=new Set;let _;function Ft(){_={r:0,c:[],p:_}}function Ht(){_.r||y(_.c),_=_.p}function ct(t,e){t&&t.i&&($.delete(t),t.i(e))}function It(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Wt(t,e){const n={},i={},r={$$scope:1};let o=t.length;for(;o--;){const c=t[o],u=e[o];if(u){for(const s in c)s in u||(i[s]=1);for(const s in u)r[s]||(n[s]=u[s],r[s]=1);t[o]=u}else for(const s in c)r[s]=1}for(const c in i)c in n||(n[c]=void 0);return n}function Gt(t){return typeof t=="object"&&t!==null?t:{}}function Jt(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Kt(t){t&&t.c()}function Qt(t,e){t&&t.l(e)}function st(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||A(()=>{const c=t.$$.on_mount.map(P).filter(T);t.$$.on_destroy?t.$$.on_destroy.push(...c):y(c),t.$$.on_mount=[]}),o.forEach(A)}function ut(t,e){const n=t.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(h.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Rt(t,e,n,i,r,o,c,u=[-1]){const s=p;m(t);const l=t.$$={fragment:null,ctx:[],props:o,update:v,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:M(),dirty:u,skip_bound:!1,root:e.target||s.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,g,...C)=>{const D=C.length?C[0]:g;return l.ctx&&r(l.ctx[a],l.ctx[a]=D)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](D),f&&lt(t,a)),g}):[],l.update(),f=!0,y(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){J();const a=tt(e.target);l.fragment&&l.fragment.l(a),a.forEach(V)}else l.fragment&&l.fragment.c();e.intro&&ct(t.$$.fragment),st(t,e.target,e.anchor,e.customElement),K(),H()}m(s)}class Ut{$destroy(){ut(this,1),this.$destroy=v}$on(e,n){if(!T(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!W(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{T as $,st as A,ut as B,_t as C,ht as D,mt as E,dt as F,U as G,v as H,ft as I,Y as J,Nt as K,$t as L,Lt as M,gt as N,at as O,A as P,Dt as Q,y as R,Ut as S,vt as T,I as U,Jt as V,Wt as W,Gt as X,zt as Y,pt as Z,St as _,bt as a,Tt as a0,qt as a1,p as a2,wt as a3,Et as a4,yt as b,jt as c,It as d,xt as e,Ht as f,ct as g,V as h,Rt as i,Pt as j,X as k,kt as l,tt as m,Z as n,Ot as o,Ct as p,S as q,nt as r,ot as s,Bt as t,At as u,Ft as v,O as w,Mt as x,Kt as y,Qt as z};