(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{Altcha:()=>mt});var n=Object.defineProperty,r=(t,e,r)=>((t,e,r)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r)(t,"symbol"!=typeof e?e+"":e,r);const o="KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGQ9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIHAoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAodD0+dC50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBiKGUsdCxyKXtpZih0eXBlb2YgY3J5cHRvPiJ1Inx8ISgic3VidGxlImluIGNyeXB0byl8fCEoImRpZ2VzdCJpbiBjcnlwdG8uc3VidGxlKSl0aHJvdyBuZXcgRXJyb3IoIldlYiBDcnlwdG8gaXMgbm90IGF2YWlsYWJsZS4gU2VjdXJlIGNvbnRleHQgaXMgcmVxdWlyZWQgKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NlY3VyaXR5L1NlY3VyZV9Db250ZXh0cykuIik7cmV0dXJuIHAoYXdhaXQgY3J5cHRvLnN1YnRsZS5kaWdlc3Qoci50b1VwcGVyQ2FzZSgpLGQuZW5jb2RlKGUrdCkpKX1mdW5jdGlvbiB3KGUsdCxyPSJTSEEtMjU2IixuPTFlNixzPTApe2NvbnN0IG89bmV3IEFib3J0Q29udHJvbGxlcixhPURhdGUubm93KCk7cmV0dXJue3Byb21pc2U6KGFzeW5jKCk9Pntmb3IobGV0IGM9cztjPD1uO2MrPTEpe2lmKG8uc2lnbmFsLmFib3J0ZWQpcmV0dXJuIG51bGw7aWYoYXdhaXQgYih0LGMscik9PT1lKXJldHVybntudW1iZXI6Yyx0b29rOkRhdGUubm93KCktYX19cmV0dXJuIG51bGx9KSgpLGNvbnRyb2xsZXI6b319ZnVuY3Rpb24gaChlKXtjb25zdCB0PWF0b2IoZSkscj1uZXcgVWludDhBcnJheSh0Lmxlbmd0aCk7Zm9yKGxldCBuPTA7bjx0Lmxlbmd0aDtuKyspcltuXT10LmNoYXJDb2RlQXQobik7cmV0dXJuIHJ9ZnVuY3Rpb24gZyhlLHQ9MTIpe2NvbnN0IHI9bmV3IFVpbnQ4QXJyYXkodCk7Zm9yKGxldCBuPTA7bjx0O24rKylyW25dPWUlMjU2LGU9TWF0aC5mbG9vcihlLzI1Nik7cmV0dXJuIHJ9YXN5bmMgZnVuY3Rpb24gbShlLHQ9IiIscj0xZTYsbj0wKXtjb25zdCBzPSJBRVMtR0NNIixvPW5ldyBBYm9ydENvbnRyb2xsZXIsYT1EYXRlLm5vdygpLGw9YXN5bmMoKT0+e2ZvcihsZXQgdT1uO3U8PXI7dSs9MSl7aWYoby5zaWduYWwuYWJvcnRlZHx8IWN8fCF5KXJldHVybiBudWxsO3RyeXtjb25zdCBmPWF3YWl0IGNyeXB0by5zdWJ0bGUuZGVjcnlwdCh7bmFtZTpzLGl2OmcodSl9LGMseSk7aWYoZilyZXR1cm57Y2xlYXJUZXh0Om5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShmKSx0b29rOkRhdGUubm93KCktYX19Y2F0Y2h7fX1yZXR1cm4gbnVsbH07bGV0IGM9bnVsbCx5PW51bGw7dHJ5e3k9aChlKTtjb25zdCB1PWF3YWl0IGNyeXB0by5zdWJ0bGUuZGlnZXN0KCJTSEEtMjU2IixkLmVuY29kZSh0KSk7Yz1hd2FpdCBjcnlwdG8uc3VidGxlLmltcG9ydEtleSgicmF3Iix1LHMsITEsWyJkZWNyeXB0Il0pfWNhdGNoe3JldHVybntwcm9taXNlOlByb21pc2UucmVqZWN0KCksY29udHJvbGxlcjpvfX1yZXR1cm57cHJvbWlzZTpsKCksY29udHJvbGxlcjpvfX1sZXQgaTtvbm1lc3NhZ2U9YXN5bmMgZT0+e2NvbnN0e3R5cGU6dCxwYXlsb2FkOnIsc3RhcnQ6bixtYXg6c309ZS5kYXRhO2xldCBvPW51bGw7aWYodD09PSJhYm9ydCIpaT09bnVsbHx8aS5hYm9ydCgpLGk9dm9pZCAwO2Vsc2UgaWYodD09PSJ3b3JrIil7aWYoIm9iZnVzY2F0ZWQiaW4gcil7Y29uc3R7a2V5OmEsb2JmdXNjYXRlZDpsfT1yfHx7fTtvPWF3YWl0IG0obCxhLHMsbil9ZWxzZXtjb25zdHthbGdvcml0aG06YSxjaGFsbGVuZ2U6bCxzYWx0OmN9PXJ8fHt9O289dyhsLGMsYSxzLG4pfWk9by5jb250cm9sbGVyLG8ucHJvbWlzZS50aGVuKGE9PntzZWxmLnBvc3RNZXNzYWdlKGEmJnsuLi5hLHdvcmtlcjohMH0pfSl9fX0pKCk7Cg==",i=typeof self<"u"&&self.Blob&&new Blob([(l=o,Uint8Array.from(atob(l),(t=>t.charCodeAt(0))))],{type:"text/javascript;charset=utf-8"});var l;function s(t){let e;try{if(e=i&&(self.URL||self.webkitURL).createObjectURL(i),!e)throw"";const n=new Worker(e,{name:null==t?void 0:t.name});return n.addEventListener("error",(()=>{(self.URL||self.webkitURL).revokeObjectURL(e)})),n}catch{return new Worker("data:text/javascript;base64,"+o,{name:null==t?void 0:t.name})}finally{e&&(self.URL||self.webkitURL).revokeObjectURL(e)}}function a(){}function c(t){return t()}function d(){return Object.create(null)}function u(t){t.forEach(c)}function f(t){return"function"==typeof t}function h(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function g(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function p(t,e){t.appendChild(e)}function m(t,e,n){const r=function(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}(t);if(!r.getElementById(e)){const t=v("style");t.id=e,t.textContent=n,function(t,e){p(t.head||t,e),e.sheet}(r,t)}}function $(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function x(){return function(t){return document.createTextNode(t)}(" ")}function w(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function E(t,e,n){t.classList.toggle(e,!!n)}let I;function C(t){I=t}function R(){if(!I)throw new Error("Function called outside component initialization");return I}function L(){const t=R();return(e,n,{cancelable:r=!1}={})=>{const o=t.$$.callbacks[e];if(o){const i=function(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}(e,n,{cancelable:r});return o.slice().forEach((e=>{e.call(t,i)})),!i.defaultPrevented}return!0}}const z=[],V=[];let G=[];const S=[],N=Promise.resolve();let X=!1;function A(){X||(X=!0,N.then(W))}function Z(t){G.push(t)}const Y=new Set;let j=0;function W(){if(0!==j)return;const t=I;do{try{for(;j<z.length;){const t=z[j];j++,C(t),F(t.$$)}}catch(t){throw z.length=0,j=0,t}for(C(null),z.length=0,j=0;V.length;)V.pop()();for(let t=0;t<G.length;t+=1){const e=G[t];Y.has(e)||(Y.add(e),e())}G.length=0}while(z.length);for(;S.length;)S.pop()();X=!1,Y.clear(),C(t)}function F(t){if(null!==t.fragment){t.update(),u(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}const M=new Set;let P;function T(t,e){t&&t.i&&(M.delete(t),t.i(e))}function U(t,e){const n=t.$$;null!==n.fragment&&(function(t){const e=[],n=[];G.forEach((r=>-1===t.indexOf(r)?e.push(r):n.push(r))),n.forEach((t=>t())),G=e}(n.after_update),u(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _(t,e,n,r,o,i,l=null,s=[-1]){const h=I;C(t);const g=t.$$={fragment:null,ctx:[],props:i,update:a,not_equal:o,bound:d(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(h?h.$$.context:[])),callbacks:d(),dirty:s,skip_bound:!1,root:e.target||h.$$.root};l&&l(g.root);let p=!1;if(g.ctx=n?n(t,e.props||{},((e,n,...r)=>{const i=r.length?r[0]:n;return g.ctx&&o(g.ctx[e],g.ctx[e]=i)&&(!g.skip_bound&&g.bound[e]&&g.bound[e](i),p&&function(t,e){-1===t.$$.dirty[0]&&(z.push(t),A(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],g.update(),p=!0,u(g.before_update),g.fragment=!!r&&r(g.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);g.fragment&&g.fragment.l(t),t.forEach(b)}else g.fragment&&g.fragment.c();e.intro&&T(t.$$.fragment),function(t,e,n){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),Z((()=>{const e=t.$$.on_mount.map(c).filter(f);t.$$.on_destroy?t.$$.on_destroy.push(...e):u(e),t.$$.on_mount=[]})),o.forEach(Z)}(t,e.target,e.anchor),W()}C(h)}function H(t,e,n,r){var o;const i=null==(o=n[t])?void 0:o.type;if(e="Boolean"===i&&"boolean"!=typeof e?null!=e:e,!r||!n[t])return e;if("toAttribute"===r)switch(i){case"Object":case"Array":return null==e?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(i){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":default:return e;case"Number":return null!=e?+e:e}}"function"==typeof HTMLElement&&(P=class extends HTMLElement{constructor(t,e,n){super(),r(this,"$$ctor"),r(this,"$$s"),r(this,"$$c"),r(this,"$$cn",!1),r(this,"$$d",{}),r(this,"$$r",!1),r(this,"$$p_d",{}),r(this,"$$l",{}),r(this,"$$l_u",new Map),this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){const n=this.$$c.$on(t,e);this.$$l_u.set(e,n)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){const t=this.$$l_u.get(e);t&&(t(),this.$$l_u.delete(e))}if(this.$$l[t]){const n=this.$$l[t].indexOf(e);n>=0&&this.$$l[t].splice(n,1)}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(t){return()=>{let e;return{c:function(){e=v("slot"),"default"!==t&&k(e,"name",t)},m:function(t,n){$(t,e,n)},d:function(t){t&&b(e)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const e={},n=function(t){const e={};return t.childNodes.forEach((t=>{e[t.slot||"default"]=!0})),e}(this);for(const r of this.$$s)r in n&&(e[r]=[t(r)]);for(const t of this.attributes){const e=this.$$g_p(t.name);e in this.$$d||(this.$$d[e]=H(e,t.value,this.$$p_d,"toProp"))}for(const t in this.$$p_d)!(t in this.$$d)&&void 0!==this[t]&&(this.$$d[t]=this[t],delete this[t]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:e,$$scope:{ctx:[]}}});const r=()=>{this.$$r=!0;for(const t in this.$$p_d)if(this.$$d[t]=this.$$c.$$.ctx[this.$$c.$$.props[t]],this.$$p_d[t].reflect){const e=H(t,this.$$d[t],this.$$p_d,"toAttribute");null==e?this.removeAttribute(this.$$p_d[t].attribute||t):this.setAttribute(this.$$p_d[t].attribute||t,e)}this.$$r=!1};this.$$c.$$.after_update.push(r),r();for(const t in this.$$l)for(const e of this.$$l[t]){const n=this.$$c.$on(t,e);this.$$l_u.set(e,n)}this.$$l={}}}attributeChangedCallback(t,e,n){var r;this.$$r||(t=this.$$g_p(t),this.$$d[t]=H(t,n,this.$$p_d,"toProp"),null==(r=this.$$c)||r.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then((()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$c=void 0)}))}$$g_p(t){return Object.keys(this.$$p_d).find((e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t))||t}});class O{constructor(){r(this,"$$"),r(this,"$$set")}$destroy(){U(this,1),this.$destroy=a}$on(t,e){if(!f(e))return a;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!function(t){return 0===Object.keys(t).length}(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4");const J=new TextEncoder;async function B(t,e,n){if(typeof crypto>"u"||!("subtle"in crypto)||!("digest"in crypto.subtle))throw new Error("Web Crypto is not available. Secure context is required (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).");return function(t){return[...new Uint8Array(t)].map((t=>t.toString(16).padStart(2,"0"))).join("")}(await crypto.subtle.digest(n.toUpperCase(),J.encode(t+e)))}function D(t,e,n="SHA-256",r=1e6,o=0){const i=new AbortController,l=Date.now();return{promise:(async()=>{for(let s=o;s<=r;s+=1){if(i.signal.aborted)return null;if(await B(e,s,n)===t)return{number:s,took:Date.now()-l}}return null})(),controller:i}}function K(t,e=12){const n=new Uint8Array(e);for(let r=0;r<e;r++)n[r]=t%256,t=Math.floor(t/256);return n}async function Q(t,e="",n=1e6,r=0){const o="AES-GCM",i=new AbortController,l=Date.now();let s=null,a=null;try{a=function(t){const e=atob(t),n=new Uint8Array(e.length);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return n}(t);const n=await crypto.subtle.digest("SHA-256",J.encode(e));s=await crypto.subtle.importKey("raw",n,o,!1,["decrypt"])}catch{return{promise:Promise.reject(),controller:i}}return{promise:(async()=>{for(let t=r;t<=n;t+=1){if(i.signal.aborted||!s||!a)return null;try{const e=await crypto.subtle.decrypt({name:o,iv:K(t)},s,a);if(e)return{clearText:(new TextDecoder).decode(e),took:Date.now()-l}}catch{}}return null})(),controller:i}}var q=(t=>(t.ERROR="error",t.VERIFIED="verified",t.VERIFYING="verifying",t.UNVERIFIED="unverified",t.EXPIRED="expired",t))(q||{});function tt(t){m(t,"svelte-ddsc3z",'.altcha.svelte-ddsc3z.svelte-ddsc3z{background:var(--altcha-color-base, transparent);border:var(--altcha-border-width, 1px) solid var(--altcha-color-border, #a0a0a0);border-radius:var(--altcha-border-radius, 3px);color:var(--altcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--altcha-max-width, 260px);position:relative;text-align:left}.altcha.svelte-ddsc3z.svelte-ddsc3z:focus-within{border-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating].svelte-ddsc3z.svelte-ddsc3z{background:var(--altcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--altcha-max-width, 260px);z-index:999999}.altcha[data-floating=top].svelte-ddsc3z .altcha-anchor-arrow.svelte-ddsc3z{border-bottom-color:transparent;border-top-color:var(--altcha-color-border, #a0a0a0);bottom:-12px;top:auto}.altcha[data-floating=bottom].svelte-ddsc3z.svelte-ddsc3z:focus-within::after{border-bottom-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating=top].svelte-ddsc3z.svelte-ddsc3z:focus-within::after{border-top-color:var(--altcha-color-border-focus, currentColor)}.altcha[data-floating].svelte-ddsc3z.svelte-ddsc3z:not([data-state=unverified]){display:block}.altcha-anchor-arrow.svelte-ddsc3z.svelte-ddsc3z{border:6px solid transparent;border-bottom-color:var(--altcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0}.altcha-main.svelte-ddsc3z.svelte-ddsc3z{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.altcha-label.svelte-ddsc3z.svelte-ddsc3z{flex-grow:1}.altcha-label.svelte-ddsc3z label.svelte-ddsc3z{cursor:pointer}.altcha-logo.svelte-ddsc3z.svelte-ddsc3z{color:currentColor;opacity:0.3}.altcha-logo.svelte-ddsc3z.svelte-ddsc3z:hover{opacity:1}.altcha-error.svelte-ddsc3z.svelte-ddsc3z{color:var(--altcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.altcha-footer.svelte-ddsc3z.svelte-ddsc3z{align-items:center;background-color:var(--altcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.altcha-footer.svelte-ddsc3z.svelte-ddsc3z:hover{opacity:1}.altcha-footer.svelte-ddsc3z>.svelte-ddsc3z:first-child{flex-grow:1}.altcha-footer.svelte-ddsc3z a{color:currentColor}.altcha-checkbox.svelte-ddsc3z.svelte-ddsc3z{display:flex;align-items:center;height:24px;width:24px}.altcha-checkbox.svelte-ddsc3z input.svelte-ddsc3z{width:18px;height:18px;margin:0}.altcha-hidden.svelte-ddsc3z.svelte-ddsc3z{display:none}.altcha-spinner.svelte-ddsc3z.svelte-ddsc3z{animation:svelte-ddsc3z-altcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-ddsc3z-altcha-spinner{100%{transform:rotate(360deg)}}')}function et(t){let e,n,r;return{c(){e=y("svg"),n=y("path"),r=y("path"),k(n,"d","M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"),k(n,"fill","currentColor"),k(n,"opacity",".25"),k(r,"d","M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"),k(r,"fill","currentColor"),k(r,"class","altcha-spinner svelte-ddsc3z"),k(e,"width","24"),k(e,"height","24"),k(e,"viewBox","0 0 24 24"),k(e,"xmlns","http://www.w3.org/2000/svg")},m(t,o){$(t,e,o),p(e,n),p(e,r)},d(t){t&&b(e)}}}function nt(t){let e,n,r=t[11].label+"";return{c(){e=v("label"),k(e,"for",n=t[4]+"_checkbox"),k(e,"class","svelte-ddsc3z")},m(t,n){$(t,e,n),e.innerHTML=r},p(t,o){2048&o[0]&&r!==(r=t[11].label+"")&&(e.innerHTML=r),16&o[0]&&n!==(n=t[4]+"_checkbox")&&k(e,"for",n)},d(t){t&&b(e)}}}function rt(t){let e,n=t[11].verifying+"";return{c(){e=v("span")},m(t,r){$(t,e,r),e.innerHTML=n},p(t,r){2048&r[0]&&n!==(n=t[11].verifying+"")&&(e.innerHTML=n)},d(t){t&&b(e)}}}function ot(t){let e,n,r,o=t[11].verified+"";return{c(){e=v("span"),n=x(),r=v("input"),k(r,"type","hidden"),k(r,"name",t[4]),r.value=t[6]},m(t,i){$(t,e,i),e.innerHTML=o,$(t,n,i),$(t,r,i)},p(t,n){2048&n[0]&&o!==(o=t[11].verified+"")&&(e.innerHTML=o),16&n[0]&&k(r,"name",t[4]),64&n[0]&&(r.value=t[6])},d(t){t&&(b(e),b(n),b(r))}}}function it(t){let e,n,r,o,i,l,s;return{c(){e=v("div"),n=v("a"),r=y("svg"),o=y("path"),i=y("path"),l=y("path"),k(o,"d","M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"),k(o,"fill","currentColor"),k(i,"d","M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"),k(i,"fill","currentColor"),k(l,"d","M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"),k(l,"fill","currentColor"),k(r,"width","22"),k(r,"height","22"),k(r,"viewBox","0 0 20 20"),k(r,"fill","none"),k(r,"xmlns","http://www.w3.org/2000/svg"),k(n,"href",ht),k(n,"target","_blank"),k(n,"class","altcha-logo svelte-ddsc3z"),k(n,"aria-label",s=t[11].ariaLinkLabel)},m(t,s){$(t,e,s),p(e,n),p(n,r),p(r,o),p(r,i),p(r,l)},p(t,e){2048&e[0]&&s!==(s=t[11].ariaLinkLabel)&&k(n,"aria-label",s)},d(t){t&&b(e)}}}function lt(t){let e,n,r,o;function i(t,e){return t[7]===q.EXPIRED?at:st}let l=i(t),s=l(t);return{c(){e=v("div"),n=y("svg"),r=y("path"),o=x(),s.c(),k(r,"stroke-linecap","round"),k(r,"stroke-linejoin","round"),k(r,"d","M6 18L18 6M6 6l12 12"),k(n,"width","14"),k(n,"height","14"),k(n,"xmlns","http://www.w3.org/2000/svg"),k(n,"fill","none"),k(n,"viewBox","0 0 24 24"),k(n,"stroke-width","1.5"),k(n,"stroke","currentColor"),k(e,"class","altcha-error svelte-ddsc3z")},m(t,i){$(t,e,i),p(e,n),p(n,r),p(e,o),s.m(e,null)},p(t,n){l===(l=i(t))&&s?s.p(t,n):(s.d(1),s=l(t),s&&(s.c(),s.m(e,null)))},d(t){t&&b(e),s.d()}}}function st(t){let e,n=t[11].error+"";return{c(){e=v("div"),k(e,"title",t[5])},m(t,r){$(t,e,r),e.innerHTML=n},p(t,r){2048&r[0]&&n!==(n=t[11].error+"")&&(e.innerHTML=n),32&r[0]&&k(e,"title",t[5])},d(t){t&&b(e)}}}function at(t){let e,n=t[11].expired+"";return{c(){e=v("div"),k(e,"title",t[5])},m(t,r){$(t,e,r),e.innerHTML=n},p(t,r){2048&r[0]&&n!==(n=t[11].expired+"")&&(e.innerHTML=n),32&r[0]&&k(e,"title",t[5])},d(t){t&&b(e)}}}function ct(t){let e,n,r=t[11].footer+"";return{c(){e=v("div"),n=v("div"),k(n,"class","svelte-ddsc3z"),k(e,"class","altcha-footer svelte-ddsc3z")},m(t,o){$(t,e,o),p(e,n),n.innerHTML=r},p(t,e){2048&e[0]&&r!==(r=t[11].footer+"")&&(n.innerHTML=r)},d(t){t&&b(e)}}}function dt(t){let e;return{c(){e=v("div"),k(e,"class","altcha-anchor-arrow svelte-ddsc3z")},m(n,r){$(n,e,r),t[48](e)},p:a,d(n){n&&b(e),t[48](null)}}}function ut(t){let e,n,r,o,i,l,s,a,c,d,f,h,m,y,I,C,R;const L=t[46].default,z=function(t,e,n,r){if(t){const o=g(t,e,n,r);return t[0](o)}}(L,t,t[45],null);let V=t[7]===q.VERIFYING&&et();function G(t,e){return t[7]===q.VERIFIED?ot:t[7]===q.VERIFYING?rt:nt}let S=G(t),N=S(t),X=(!0!==t[3]||t[12])&&it(t),A=(t[5]||t[7]===q.EXPIRED)&&lt(t),Z=t[11].footer&&(!0!==t[2]||t[12])&&ct(t),Y=t[1]&&dt(t);return{c(){z&&z.c(),e=x(),n=v("div"),r=v("div"),V&&V.c(),o=x(),i=v("div"),l=v("input"),c=x(),d=v("div"),N.c(),f=x(),X&&X.c(),h=x(),A&&A.c(),m=x(),Z&&Z.c(),y=x(),Y&&Y.c(),k(l,"type","checkbox"),k(l,"id",s=t[4]+"_checkbox"),l.required=a="onsubmit"!==t[0]&&(!t[1]||"off"!==t[0]),k(l,"class","svelte-ddsc3z"),k(i,"class","altcha-checkbox svelte-ddsc3z"),E(i,"altcha-hidden",t[7]===q.VERIFYING),k(d,"class","altcha-label svelte-ddsc3z"),k(r,"class","altcha-main svelte-ddsc3z"),k(n,"class","altcha svelte-ddsc3z"),k(n,"data-state",t[7]),k(n,"data-floating",t[1])},m(s,a){z&&z.m(s,a),$(s,e,a),$(s,n,a),p(n,r),V&&V.m(r,null),p(r,o),p(r,i),p(i,l),l.checked=t[8],p(r,c),p(r,d),N.m(d,null),p(r,f),X&&X.m(r,null),p(n,h),A&&A.m(n,null),p(n,m),Z&&Z.m(n,null),p(n,y),Y&&Y.m(n,null),t[49](n),I=!0,C||(R=[w(l,"change",t[47]),w(l,"change",t[13]),w(l,"invalid",t[14])],C=!0)},p(t,e){z&&z.p&&(!I||16384&e[1])&&function(t,e,n,r,o,i){if(o){const l=g(e,n,r,i);t.p(l,o)}}(z,L,t,t[45],I?function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(L,t[45],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[45]),null),t[7]===q.VERIFYING?V||(V=et(),V.c(),V.m(r,o)):V&&(V.d(1),V=null),(!I||16&e[0]&&s!==(s=t[4]+"_checkbox"))&&k(l,"id",s),(!I||3&e[0]&&a!==(a="onsubmit"!==t[0]&&(!t[1]||"off"!==t[0])))&&(l.required=a),256&e[0]&&(l.checked=t[8]),(!I||128&e[0])&&E(i,"altcha-hidden",t[7]===q.VERIFYING),S===(S=G(t))&&N?N.p(t,e):(N.d(1),N=S(t),N&&(N.c(),N.m(d,null))),!0!==t[3]||t[12]?X?X.p(t,e):(X=it(t),X.c(),X.m(r,null)):X&&(X.d(1),X=null),t[5]||t[7]===q.EXPIRED?A?A.p(t,e):(A=lt(t),A.c(),A.m(n,m)):A&&(A.d(1),A=null),t[11].footer&&(!0!==t[2]||t[12])?Z?Z.p(t,e):(Z=ct(t),Z.c(),Z.m(n,y)):Z&&(Z.d(1),Z=null),t[1]?Y?Y.p(t,e):(Y=dt(t),Y.c(),Y.m(n,null)):Y&&(Y.d(1),Y=null),(!I||128&e[0])&&k(n,"data-state",t[7]),(!I||2&e[0])&&k(n,"data-floating",t[1])},i(t){I||(T(z,t),I=!0)},o(t){(function(t,e){if(t&&t.o){if(M.has(t))return;M.add(t),(void 0).c.push((()=>{M.delete(t)})),t.o(e)}})(z,t),I=!1},d(r){r&&(b(e),b(n)),z&&z.d(r),V&&V.d(),N.d(),X&&X.d(),A&&A.d(),Z&&Z.d(),Y&&Y.d(),t[49](null),C=!1,u(R)}}}const ft="Visit Altcha.org",ht="https://altcha.org/";function gt(t){return JSON.parse(t)}function pt(t,e,n){var r,o;let i,l,s,a,{$$slots:c={},$$scope:d}=e,{auto:u}=e,{blockspam:f}=e,{challengeurl:h}=e,{challengejson:g}=e,{debug:p=!1}=e,{delay:m=0}=e,{expire:$}=e,{floating:b}=e,{floatinganchor:v}=e,{floatingoffset:y}=e,{hidefooter:x=!1}=e,{hidelogo:w=!1}=e,{name:k="altcha"}=e,{maxnumber:E=1e6}=e,{mockerror:I=!1}=e,{obfuscated:C}=e,{plugins:z}=e,{refetchonexpire:G=!0}=e,{spamfilter:S=!1}=e,{strings:X}=e,{test:Z=!1}=e,{verifyurl:Y}=e,{workers:j=Math.min(16,navigator.hardwareConcurrency||8)}=e,{workerurl:W}=e;const F=L(),M=["SHA-256","SHA-384","SHA-512"],P=null==(o=null==(r=document.documentElement.lang)?void 0:r.split("-"))?void 0:o[0];let T,U=!1,_=null,H=null,O=null,J=null,K=null,tt=null,et=[],nt=q.UNVERIFIED;function rt(t,e){return btoa(JSON.stringify({algorithm:t.algorithm,challenge:t.challenge,number:e.number,salt:t.salt,signature:t.signature,test:!!Z||void 0,took:e.took}))}function ot(){h&&G&&nt===q.VERIFIED?Gt():Lt(q.EXPIRED,a.expired)}async function it(){var t;if(I)throw lt("mocking error"),new Error("Mocked error.");if(l)return lt("using provided json data"),l;if(Z)return lt("generating test challenge",{test:Z}),async function(t,e="SHA-256",n=1e5){const r=Date.now().toString(16);return t||(t=Math.round(Math.random()*n)),{algorithm:e,challenge:await B(r,t,e),salt:r,signature:""}}("boolean"!=typeof Z?+Z:void 0);{if(!h&&O){const t=O.getAttribute("action");null!=t&&t.includes("/form/")&&n(15,h=t+"/altcha")}if(!h)throw new Error("Attribute challengeurl not set.");lt("fetching challenge from",h);const e=await fetch(h,{headers:S?{"x-altcha-spam-filter":"1"}:{}});if(200!==e.status)throw new Error(`Server responded with ${e.status}.`);const r=e.headers.get("Expires"),o=e.headers.get("X-Altcha-Config"),i=await e.json(),l=new URLSearchParams(null==(t=i.salt.split("?"))?void 0:t[1]),s=l.get("expires")||l.get("expire");if(s){const t=new Date(1e3*+s),e=isNaN(t.getTime())?0:t.getTime()-Date.now();e>0&&vt(e)}if(o)try{const t=JSON.parse(o);t&&"object"==typeof t&&(t.verifyurl&&(t.verifyurl=new URL(t.verifyurl,new URL(h)).toString()),Et(t))}catch(t){lt("unable to configure from X-Altcha-Config",t)}if(!$&&null!=r&&r.length){const t=Date.parse(r);if(t){const e=t-Date.now();e>0&&vt(e)}}return i}}function lt(...t){(p||t.some((t=>t instanceof Error)))&&console[t[0]instanceof Error?"error":"log"]("ALTCHA",`[name=${k}]`,...t)}function st(t){const e=t.target;b&&e&&!T.contains(e)&&(nt===q.VERIFIED||"off"===u&&nt===q.UNVERIFIED)&&n(9,T.style.display="none",T)}function at(){b&&nt!==q.UNVERIFIED&&$t()}function ct(t){nt===q.UNVERIFIED&&Gt()}function dt(t){O&&"onsubmit"===u?nt===q.UNVERIFIED?(t.preventDefault(),t.stopPropagation(),Gt().then((()=>{null==O||O.requestSubmit()}))):nt!==q.VERIFIED&&(t.preventDefault(),t.stopPropagation(),nt===q.VERIFYING&&pt()):O&&b&&"off"===u&&nt===q.UNVERIFIED&&(t.preventDefault(),t.stopPropagation(),n(9,T.style.display="block",T),$t())}function ut(){Lt()}function pt(){nt===q.VERIFYING&&a.waitAlert&&alert(a.waitAlert)}function mt(){b&&$t()}function $t(t=20){if(T)if(H||(H=(v?document.querySelector(v):null==O?void 0:O.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])'))||O),H){const e=parseInt(y,10)||12,r=H.getBoundingClientRect(),o=T.getBoundingClientRect(),i=document.documentElement.clientHeight,l=document.documentElement.clientWidth,s="auto"===b?r.bottom+o.height+e+t>i:"top"===b,a=Math.max(t,Math.min(l-t-o.width,r.left+r.width/2-o.width/2));if(n(9,T.style.top=s?r.top-(o.height+e)+"px":`${r.bottom+e}px`,T),n(9,T.style.left=`${a}px`,T),T.setAttribute("data-floating",s?"top":"bottom"),_){const t=_.getBoundingClientRect();n(10,_.style.left=r.left-a+r.width/2-t.width/2+"px",_)}}else lt("unable to find floating anchor element")}async function bt(t){if(!Y)throw new Error("Attribute verifyurl not set.");lt("requesting server verification from",Y);const e={payload:t};if(S){const{blockedCountries:t,classifier:n,disableRules:r,email:o,expectedLanguages:i,expectedCountries:l,fields:s,ipAddress:a,text:c,timeZone:d}="ipAddress"===S?{blockedCountries:void 0,classifier:void 0,disableRules:void 0,email:!1,expectedCountries:void 0,expectedLanguages:void 0,fields:!1,ipAddress:void 0,text:void 0,timeZone:void 0}:"object"==typeof S?S:{blockedCountries:void 0,classifier:void 0,disableRules:void 0,email:void 0,expectedCountries:void 0,expectedLanguages:void 0,fields:void 0,ipAddress:void 0,text:void 0,timeZone:void 0};e.blockedCountries=t,e.classifier=n,e.disableRules=r,e.email=!1===o?void 0:function(t){var e;const n=null==O?void 0:O.querySelector("string"==typeof t?`input[name="${t}"]`:'input[type="email"]:not([data-no-spamfilter])');return(null==(e=null==n?void 0:n.value)?void 0:e.slice(n.value.indexOf("@")))||void 0}(o),e.expectedCountries=l,e.expectedLanguages=i||(P?[P]:void 0),e.fields=!1===s?void 0:function(t){return[...(null==O?void 0:O.querySelectorAll(null!=t&&t.length?t.map((t=>`input[name="${t}"]`)).join(", "):'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])'))||[]].reduce(((t,e)=>{const n=e.name,r=e.value;return n&&r&&(t[n]=/\n/.test(r)?r.replace(new RegExp("(?<!\\r)\\n","g"),"\r\n"):r),t}),{})}(s),e.ipAddress=!1===a?void 0:a||"auto",e.text=c,e.timeZone=!1===d?void 0:d||function(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}()}const r=await fetch(Y,{body:JSON.stringify(e),headers:{"content-type":"application/json"},method:"POST"});if(200!==r.status)throw new Error(`Server responded with ${r.status}.`);const o=await r.json();if(null!=o&&o.payload&&n(6,tt=o.payload),F("serververification",o),f&&"BAD"===o.classification)throw new Error("SpamFilter returned negative classification.")}function vt(t){lt("expire",t),K&&(clearTimeout(K),K=null),t<1?ot():K=setTimeout(ot,t)}function yt(t){lt("floating",t),b!==t&&(n(9,T.style.left="",T),n(9,T.style.top="",T)),n(1,b=!0===t||""===t?"auto":!1===t||"false"===t?void 0:b),b?(u||n(0,u="onsubmit"),document.addEventListener("scroll",at),document.addEventListener("click",st),window.addEventListener("resize",mt)):"onsubmit"===u&&n(0,u=void 0)}function xt(t){if(!t.algorithm)throw new Error("Invalid challenge. Property algorithm is missing.");if(void 0===t.signature)throw new Error("Invalid challenge. Property signature is missing.");if(!M.includes(t.algorithm.toUpperCase()))throw new Error(`Unknown algorithm value. Allowed values: ${M.join(", ")}`);if(!t.challenge||t.challenge.length<40)throw new Error("Challenge is too short. Min. 40 chars.");if(!t.salt||t.salt.length<10)throw new Error("Salt is too short. Min. 10 chars.")}async function wt(t){let e=null;if("Worker"in window){try{e=await async function(t,e=("number"==typeof Z?Z:E),n=Math.ceil(j)){const r=[];n=Math.min(16,Math.max(1,n));for(let t=0;t<n;t++)r.push(altchaCreateWorker(W));const o=Math.ceil(e/n),i=await Promise.all(r.map(((e,n)=>{const i=n*o;return new Promise((n=>{e.addEventListener("message",(t=>{if(t.data)for(const t of r)t!==e&&t.postMessage({type:"abort"});n(t.data)})),e.postMessage({payload:t,max:i+o,start:i,type:"work"})}))})));for(const t of r)t.terminate();return i.find((t=>!!t))||null}(t,t.maxnumber)}catch(t){lt(t)}if(void 0!==(null==e?void 0:e.number)||"obfuscated"in t)return{data:t,solution:e}}if("obfuscated"in t){const e=await Q(t.obfuscated,t.key,t.maxnumber);return{data:t,solution:await e.promise}}return{data:t,solution:await D(t.challenge,t.salt,t.algorithm,t.maxnumber||E).promise}}async function kt(){if(!C)return void n(7,nt=q.ERROR);const t=et.find((t=>"obfuscation"===t.constructor.pluginName));return t&&"clarify"in t?"clarify"in t&&"function"==typeof t.clarify?t.clarify():void 0:(n(7,nt=q.ERROR),void lt("Plugin `obfuscation` not found. Import `altcha/plugins/obfuscation` to load it."))}function Et(t){void 0!==t.obfuscated&&n(24,C=t.obfuscated),void 0!==t.auto&&(n(0,u=t.auto),"onload"===u&&(C?kt():Gt())),void 0!==t.blockspam&&n(16,f=!!t.blockspam),void 0!==t.floatinganchor&&n(20,v=t.floatinganchor),void 0!==t.delay&&n(18,m=t.delay),void 0!==t.floatingoffset&&n(21,y=t.floatingoffset),void 0!==t.floating&&yt(t.floating),void 0!==t.expire&&(vt(t.expire),n(19,$=t.expire)),t.challenge&&(xt(t.challenge),l=t.challenge),void 0!==t.challengeurl&&n(15,h=t.challengeurl),void 0!==t.debug&&n(17,p=!!t.debug),void 0!==t.hidefooter&&n(2,x=!!t.hidefooter),void 0!==t.hidelogo&&n(3,w=!!t.hidelogo),void 0!==t.maxnumber&&n(22,E=+t.maxnumber),void 0!==t.mockerror&&n(23,I=!!t.mockerror),void 0!==t.name&&n(4,k=t.name),void 0!==t.refetchonexpire&&n(25,G=!!t.refetchonexpire),void 0!==t.spamfilter&&n(26,S="object"==typeof t.spamfilter?t.spamfilter:!!t.spamfilter),t.strings&&n(44,s=t.strings),void 0!==t.test&&n(27,Z="number"==typeof t.test?t.test:!!t.test),void 0!==t.verifyurl&&n(28,Y=t.verifyurl),void 0!==t.workers&&n(29,j=+t.workers),void 0!==t.workerurl&&n(30,W=t.workerurl)}function It(){return{auto:u,blockspam:f,challengeurl:h,debug:p,delay:m,expire:$,floating:b,floatinganchor:v,floatingoffset:y,hidefooter:x,hidelogo:w,name:k,maxnumber:E,mockerror:I,obfuscated:C,refetchonexpire:G,spamfilter:S,strings:a,test:Z,verifyurl:Y,workers:j,workerurl:W}}function Ct(){return H}function Rt(){return nt}function Lt(t=q.UNVERIFIED,e=null){K&&(clearTimeout(K),K=null),n(8,U=!1),n(5,J=e),n(6,tt=null),n(7,nt=t)}function zt(t){H=t}function Vt(t,e=null){n(7,nt=t),n(5,J=e)}async function Gt(){return Lt(q.VERIFYING),await new Promise((t=>setTimeout(t,m||0))),it().then((t=>(xt(t),lt("challenge",t),wt(t)))).then((({data:t,solution:e})=>{if(lt("solution",e),"challenge"in t&&e&&!("clearText"in e)){if(void 0===(null==e?void 0:e.number))throw lt("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."),new Error("Unexpected result returned.");if(Y)return bt(rt(t,e));n(6,tt=rt(t,e)),lt("payload",tt)}})).then((()=>{n(7,nt=q.VERIFIED),lt("verified"),(A(),N).then((()=>{F("verified",{payload:tt})}))})).catch((t=>{lt(t),n(7,nt=q.ERROR),n(5,J=t.message)}))}return function(t){R().$$.on_destroy.push(t)}((()=>{(function(){for(const t of et)t.destroy()})(),O&&(O.removeEventListener("submit",dt),O.removeEventListener("reset",ut),O.removeEventListener("focusin",ct),O=null),K&&(clearTimeout(K),K=null),document.removeEventListener("click",st),document.removeEventListener("scroll",at),window.removeEventListener("resize",mt)})),function(t){R().$$.on_mount.push(t)}((()=>{lt("mounted","1.0.7"),lt("workers",j),function(){const t=void 0!==z?z.split(","):void 0;for(const e of globalThis.altchaPlugins)(!t||t.includes(e.pluginName))&&et.push(new e({el:T,clarify:kt,dispatch:F,getConfiguration:It,getFloatingAnchor:Ct,getState:Rt,log:lt,reset:Lt,solve:wt,setState:Vt,setFloatingAnchor:zt,verify:Gt}))}(),lt("plugins",et.length?et.map((t=>t.constructor.pluginName)).join(", "):"none"),Z&&lt("using test mode"),$&&vt($),void 0!==u&&lt("auto",u),void 0!==b&&yt(b),O=T.closest("form"),O&&(O.addEventListener("submit",dt,{capture:!0}),O.addEventListener("reset",ut),"onfocus"===u&&O.addEventListener("focusin",ct)),"onload"===u&&(C?kt():Gt()),i&&(x||w)&&lt("Attributes hidefooter and hidelogo ignored because usage with free API Keys requires attribution."),requestAnimationFrame((()=>{F("load")}))})),t.$$set=t=>{"auto"in t&&n(0,u=t.auto),"blockspam"in t&&n(16,f=t.blockspam),"challengeurl"in t&&n(15,h=t.challengeurl),"challengejson"in t&&n(31,g=t.challengejson),"debug"in t&&n(17,p=t.debug),"delay"in t&&n(18,m=t.delay),"expire"in t&&n(19,$=t.expire),"floating"in t&&n(1,b=t.floating),"floatinganchor"in t&&n(20,v=t.floatinganchor),"floatingoffset"in t&&n(21,y=t.floatingoffset),"hidefooter"in t&&n(2,x=t.hidefooter),"hidelogo"in t&&n(3,w=t.hidelogo),"name"in t&&n(4,k=t.name),"maxnumber"in t&&n(22,E=t.maxnumber),"mockerror"in t&&n(23,I=t.mockerror),"obfuscated"in t&&n(24,C=t.obfuscated),"plugins"in t&&n(32,z=t.plugins),"refetchonexpire"in t&&n(25,G=t.refetchonexpire),"spamfilter"in t&&n(26,S=t.spamfilter),"strings"in t&&n(33,X=t.strings),"test"in t&&n(27,Z=t.test),"verifyurl"in t&&n(28,Y=t.verifyurl),"workers"in t&&n(29,j=t.workers),"workerurl"in t&&n(30,W=t.workerurl),"$$scope"in t&&n(45,d=t.$$scope)},t.$$.update=()=>{32768&t.$$.dirty[0]|1&t.$$.dirty[1]&&n(12,i=g&&new URL(g,location.origin).host.endsWith(".altcha.org")&&!(null==h||!h.includes("apiKey=ckey_"))),1&t.$$.dirty[1]&&(l=g?gt(g):void 0),4&t.$$.dirty[1]&&n(44,s=X?gt(X):{}),8192&t.$$.dirty[1]&&n(11,a={ariaLinkLabel:ft,error:"Verification failed. Try again later.",expired:"Verification expired. Try again.",footer:`Protected by <a href="${ht}" target="_blank" aria-label="${s.ariaLinkLabel||ft}">ALTCHA</a>`,label:"I'm not a robot",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait.",...s}),192&t.$$.dirty[0]&&F("statechange",{payload:tt,state:nt}),32&t.$$.dirty[0]&&function(){for(const t of et)"function"==typeof t.onErrorChange&&t.onErrorChange(J)}(),128&t.$$.dirty[0]&&function(){for(const t of et)"function"==typeof t.onStateChange&&t.onStateChange(nt);b&&nt!==q.UNVERIFIED&&requestAnimationFrame((()=>{$t()})),n(8,U=nt===q.VERIFIED)}()},[u,b,x,w,k,J,tt,nt,U,T,_,a,i,function(){[q.UNVERIFIED,q.ERROR,q.EXPIRED].includes(nt)?S&&!1===(null==O?void 0:O.reportValidity())?n(8,U=!1):C?kt():Gt():n(8,U=!0)},pt,h,f,p,m,$,v,y,E,I,C,G,S,Z,Y,j,W,g,z,X,kt,Et,It,Ct,function(t){return et.find((e=>e.constructor.pluginName===t))},Rt,Lt,zt,Vt,Gt,s,d,c,function(){U=this.checked,n(8,U)},function(t){V[t?"unshift":"push"]((()=>{_=t,n(10,_)}))},function(t){V[t?"unshift":"push"]((()=>{T=t,n(9,T)}))}]}class mt extends O{constructor(t){super(),_(this,t,pt,ut,h,{auto:0,blockspam:16,challengeurl:15,challengejson:31,debug:17,delay:18,expire:19,floating:1,floatinganchor:20,floatingoffset:21,hidefooter:2,hidelogo:3,name:4,maxnumber:22,mockerror:23,obfuscated:24,plugins:32,refetchonexpire:25,spamfilter:26,strings:33,test:27,verifyurl:28,workers:29,workerurl:30,clarify:34,configure:35,getConfiguration:36,getFloatingAnchor:37,getPlugin:38,getState:39,reset:40,setFloatingAnchor:41,setState:42,verify:43},tt,[-1,-1,-1])}get auto(){return this.$$.ctx[0]}set auto(t){this.$$set({auto:t}),W()}get blockspam(){return this.$$.ctx[16]}set blockspam(t){this.$$set({blockspam:t}),W()}get challengeurl(){return this.$$.ctx[15]}set challengeurl(t){this.$$set({challengeurl:t}),W()}get challengejson(){return this.$$.ctx[31]}set challengejson(t){this.$$set({challengejson:t}),W()}get debug(){return this.$$.ctx[17]}set debug(t){this.$$set({debug:t}),W()}get delay(){return this.$$.ctx[18]}set delay(t){this.$$set({delay:t}),W()}get expire(){return this.$$.ctx[19]}set expire(t){this.$$set({expire:t}),W()}get floating(){return this.$$.ctx[1]}set floating(t){this.$$set({floating:t}),W()}get floatinganchor(){return this.$$.ctx[20]}set floatinganchor(t){this.$$set({floatinganchor:t}),W()}get floatingoffset(){return this.$$.ctx[21]}set floatingoffset(t){this.$$set({floatingoffset:t}),W()}get hidefooter(){return this.$$.ctx[2]}set hidefooter(t){this.$$set({hidefooter:t}),W()}get hidelogo(){return this.$$.ctx[3]}set hidelogo(t){this.$$set({hidelogo:t}),W()}get name(){return this.$$.ctx[4]}set name(t){this.$$set({name:t}),W()}get maxnumber(){return this.$$.ctx[22]}set maxnumber(t){this.$$set({maxnumber:t}),W()}get mockerror(){return this.$$.ctx[23]}set mockerror(t){this.$$set({mockerror:t}),W()}get obfuscated(){return this.$$.ctx[24]}set obfuscated(t){this.$$set({obfuscated:t}),W()}get plugins(){return this.$$.ctx[32]}set plugins(t){this.$$set({plugins:t}),W()}get refetchonexpire(){return this.$$.ctx[25]}set refetchonexpire(t){this.$$set({refetchonexpire:t}),W()}get spamfilter(){return this.$$.ctx[26]}set spamfilter(t){this.$$set({spamfilter:t}),W()}get strings(){return this.$$.ctx[33]}set strings(t){this.$$set({strings:t}),W()}get test(){return this.$$.ctx[27]}set test(t){this.$$set({test:t}),W()}get verifyurl(){return this.$$.ctx[28]}set verifyurl(t){this.$$set({verifyurl:t}),W()}get workers(){return this.$$.ctx[29]}set workers(t){this.$$set({workers:t}),W()}get workerurl(){return this.$$.ctx[30]}set workerurl(t){this.$$set({workerurl:t}),W()}get clarify(){return this.$$.ctx[34]}get configure(){return this.$$.ctx[35]}get getConfiguration(){return this.$$.ctx[36]}get getFloatingAnchor(){return this.$$.ctx[37]}get getPlugin(){return this.$$.ctx[38]}get getState(){return this.$$.ctx[39]}get reset(){return this.$$.ctx[40]}get setFloatingAnchor(){return this.$$.ctx[41]}get setState(){return this.$$.ctx[42]}get verify(){return this.$$.ctx[43]}}customElements.define("altcha-widget",function(t,e,n,r,o){let i=class extends P{constructor(){super(t,n,o),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map((t=>(e[t].attribute||t).toLowerCase()))}};return Object.keys(e).forEach((t=>{Object.defineProperty(i.prototype,t,{get(){return this.$$c&&t in this.$$c?this.$$c[t]:this.$$d[t]},set(n){var r;n=H(t,n,e),this.$$d[t]=n,null==(r=this.$$c)||r.$set({[t]:n})}})})),r.forEach((t=>{Object.defineProperty(i.prototype,t,{get(){var e;return null==(e=this.$$c)?void 0:e[t]}})})),t.element=i,i}(mt,{auto:{},blockspam:{},challengeurl:{},challengejson:{},debug:{type:"Boolean"},delay:{},expire:{},floating:{},floatinganchor:{},floatingoffset:{},hidefooter:{type:"Boolean"},hidelogo:{type:"Boolean"},name:{},maxnumber:{},mockerror:{type:"Boolean"},obfuscated:{},plugins:{},refetchonexpire:{type:"Boolean"},spamfilter:{type:"Boolean"},strings:{},test:{type:"Boolean"},verifyurl:{},workers:{},workerurl:{}},["default"],["clarify","configure","getConfiguration","getFloatingAnchor","getPlugin","getState","reset","setFloatingAnchor","setState","verify"],!1)),globalThis.altchaCreateWorker=t=>t?new Worker(new URL(t)):new s,globalThis.altchaPlugins=globalThis.altchaPlugins||[],window.Altcha=e})();