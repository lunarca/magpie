(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const Et={},$h=(t,e)=>t===e,Wh=Symbol("solid-dev-component"),wr={equals:$h};let jh=Ko;const Xe=1,Cn=2,Vh={owned:null,cleanups:null,context:null,owner:null};var j=null;let He=null,P=null,B=null,$e=null,ws=0,Gh=0;function zh(t,e){const n=P,i=j,s=t.length===0,r=s?{owned:null,cleanups:null,context:null,owner:null}:{owned:null,cleanups:null,context:null,owner:e||i},o=s?()=>t(()=>{throw new Error("Dispose method must be an explicit argument to createRoot function")}):()=>t(()=>Yn(()=>Xn(r)));i&&(r.name=`${i.name}-r${Gh++}`),globalThis._$afterCreateRoot&&globalThis._$afterCreateRoot(r),j=r,P=null;try{return Kt(o,!0)}finally{P=n,j=i}}function Lt(t,e,n){const i=Ss(t,e,!1,Xe,n);zt(i)}function Sr(t,e,n){n=n?Object.assign({},wr,n):wr;const i=Ss(t,e,!0,0,n);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,zt(i),Xh.bind(i)}function Yn(t){const e=P;P=null;try{return t()}finally{P=e}}function Kh(t,e){const n=Ss(()=>Yn(()=>(Object.assign(t,{[Wh]:!0}),t(e))),void 0,!0,0);return n.props=e,n.observers=null,n.observerSlots=null,n.componentName=t.name,zt(n),n.tValue!==void 0?n.tValue:n.value}function qh(t,e){const n=Symbol("context");return{id:n,Provider:tc(n,e),defaultValue:t}}function Yh(t){const e=Sr(t),n=Sr(()=>ji(e()),void 0,{name:"children"});return n.toArray=()=>{const i=n();return Array.isArray(i)?i:i!=null?[i]:[]},n}function Xh(){const t=He;if(this.sources&&(this.state||t))if(this.state===Xe||t)zt(this);else{const e=B;B=null,Kt(()=>wn(this),!1),B=e}if(P){const e=this.observers?this.observers.length:0;P.sources?(P.sources.push(this),P.sourceSlots.push(e)):(P.sources=[this],P.sourceSlots=[e]),this.observers?(this.observers.push(P),this.observerSlots.push(P.sources.length-1)):(this.observers=[P],this.observerSlots=[P.sources.length-1])}return this.value}function Jh(t,e,n){let i=t.value;return(!t.comparator||!t.comparator(i,e))&&(t.value=e,t.observers&&t.observers.length&&Kt(()=>{for(let s=0;s<t.observers.length;s+=1){const r=t.observers[s],o=He&&He.running;o&&He.disposed.has(r),(o&&!r.tState||!o&&!r.state)&&(r.pure?B.push(r):$e.push(r),r.observers&&qo(r)),o||(r.state=Xe)}if(B.length>1e6){throw B=[],new Error("Potential Infinite Loop Detected.");throw new Error}},!1)),e}function zt(t){if(!t.fn)return;Xn(t);const e=j,n=P,i=ws;P=j=t,Qh(t,t.value,i),P=n,j=e}function Qh(t,e,n){let i;try{i=t.fn(e)}catch(s){t.pure&&(t.state=Xe,t.owned&&t.owned.forEach(Xn),t.owned=null),Yo(s)}(!t.updatedAt||t.updatedAt<=n)&&(t.updatedAt!=null&&"observers"in t?Jh(t,i):t.value=i,t.updatedAt=n)}function Ss(t,e,n,i=Xe,s){const r={fn:t,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:j,context:null,pure:n};return j===null?console.warn("computations created outside a `createRoot` or `render` will never be disposed"):j!==Vh&&(j.owned?j.owned.push(r):j.owned=[r],r.name=s&&s.name||`${j.name||"c"}-${(j.owned||j.tOwned).length}`),r}function zo(t){const e=He;if(t.state===0||e)return;if(t.state===Cn||e)return wn(t);if(t.suspense&&Yn(t.suspense.inFallback))return t.suspense.effects.push(t);const n=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<ws);)(t.state||e)&&n.push(t);for(let i=n.length-1;i>=0;i--)if(t=n[i],t.state===Xe||e)zt(t);else if(t.state===Cn||e){const s=B;B=null,Kt(()=>wn(t,n[0]),!1),B=s}}function Kt(t,e){if(B)return t();let n=!1;e||(B=[]),$e?n=!0:$e=[],ws++;try{const i=t();return Zh(n),i}catch(i){B||($e=null),B=null,Yo(i)}}function Zh(t){if(B&&(Ko(B),B=null),t)return;const e=$e;$e=null,e.length?Kt(()=>jh(e),!1):globalThis._$afterUpdate&&globalThis._$afterUpdate()}function Ko(t){for(let e=0;e<t.length;e++)zo(t[e])}function wn(t,e){const n=He;t.state=0;for(let i=0;i<t.sources.length;i+=1){const s=t.sources[i];s.sources&&(s.state===Xe||n?s!==e&&zo(s):(s.state===Cn||n)&&wn(s,e))}}function qo(t){const e=He;for(let n=0;n<t.observers.length;n+=1){const i=t.observers[n];(!i.state||e)&&(i.state=Cn,i.pure?B.push(i):$e.push(i),i.observers&&qo(i))}}function Xn(t){let e;if(t.sources)for(;t.sources.length;){const n=t.sources.pop(),i=t.sourceSlots.pop(),s=n.observers;if(s&&s.length){const r=s.pop(),o=n.observerSlots.pop();i<s.length&&(r.sourceSlots[o]=i,s[i]=r,n.observerSlots[i]=o)}}if(t.owned){for(e=0;e<t.owned.length;e++)Xn(t.owned[e]);t.owned=null}if(t.cleanups){for(e=0;e<t.cleanups.length;e++)t.cleanups[e]();t.cleanups=null}t.state=0,t.context=null,delete t.sourceMap}function ec(t){return t instanceof Error||typeof t=="string"?t:new Error("Unknown error")}function Yo(t){throw t=ec(t),t}function ji(t){if(typeof t=="function"&&!t.length)return ji(t());if(Array.isArray(t)){const e=[];for(let n=0;n<t.length;n++){const i=ji(t[n]);Array.isArray(i)?e.push.apply(e,i):e.push(i)}return e}return t}function tc(t,e){return function(i){let s;return Lt(()=>s=Yn(()=>(j.context={[t]:i.value},Yh(()=>i.children))),void 0,e),s}}function Vi(t,e){return Kh(t,e||{})}globalThis&&(globalThis.Solid$$?console.warn("You appear to have multiple instances of Solid. This can lead to unexpected behavior."):globalThis.Solid$$=!0);function nc(t,e,n){let i=n.length,s=e.length,r=i,o=0,l=0,a=e[s-1].nextSibling,h=null;for(;o<s||l<r;){if(e[o]===n[l]){o++,l++;continue}for(;e[s-1]===n[r-1];)s--,r--;if(s===o){const c=r<i?l?n[l-1].nextSibling:n[r-l]:a;for(;l<r;)t.insertBefore(n[l++],c)}else if(r===l)for(;o<s;)(!h||!h.has(e[o]))&&e[o].remove(),o++;else if(e[o]===n[r-1]&&n[l]===e[s-1]){const c=e[--s].nextSibling;t.insertBefore(n[l++],e[o++].nextSibling),t.insertBefore(n[--r],c),e[s]=n[r]}else{if(!h){h=new Map;let u=l;for(;u<r;)h.set(n[u],u++)}const c=h.get(e[o]);if(c!=null)if(l<c&&c<r){let u=o,d=1,g;for(;++u<s&&u<r&&!((g=h.get(e[u]))==null||g!==c+d);)d++;if(d>c-l){const _=e[o];for(;l<c;)t.insertBefore(n[l++],_)}else t.replaceChild(n[l++],e[o++])}else o++;else e[o++].remove()}}}function ic(t,e,n,i={}){let s;return zh(r=>{s=r,e===document?t():oc(e,t(),e.firstChild?null:void 0,n)},i.owner),()=>{s(),e.textContent=""}}function sc(t,e,n){const i=document.createElement("template");if(i.innerHTML=t,e&&i.innerHTML.split("<").length-1!==e)throw`The browser resolved template HTML does not match JSX input:
${i.innerHTML}

${t}. Is your HTML properly formed?`;let s=i.content.firstChild;return n&&(s=s.firstChild),s}function rc(t,e,n){n==null?t.removeAttribute(e):t.setAttribute(e,n)}function fn(t,e){e==null?t.removeAttribute("class"):t.className=e}function oc(t,e,n,i){if(n!==void 0&&!i&&(i=[]),typeof e!="function")return Sn(t,e,i,n);Lt(s=>Sn(t,e(),s,n),i)}function Sn(t,e,n,i,s){for(Et.context&&!n&&(n=[...t.childNodes]);typeof n=="function";)n=n();if(e===n)return n;const r=typeof e,o=i!==void 0;if(t=o&&n[0]&&n[0].parentNode||t,r==="string"||r==="number"){if(Et.context)return n;if(r==="number"&&(e=e.toString()),o){let l=n[0];l&&l.nodeType===3?l.data=e:l=document.createTextNode(e),n=Ze(t,n,i,l)}else n!==""&&typeof n=="string"?n=t.firstChild.data=e:n=t.textContent=e}else if(e==null||r==="boolean"){if(Et.context)return n;n=Ze(t,n,i)}else{if(r==="function")return Lt(()=>{let l=e();for(;typeof l=="function";)l=l();n=Sn(t,l,n,i)}),()=>n;if(Array.isArray(e)){const l=[],a=n&&Array.isArray(n);if(Gi(l,e,n,s))return Lt(()=>n=Sn(t,l,n,i,!0)),()=>n;if(Et.context){if(!l.length)return n;for(let h=0;h<l.length;h++)if(l[h].parentNode)return n=l}if(l.length===0){if(n=Ze(t,n,i),o)return n}else a?n.length===0?br(t,l,i):nc(t,n,l):(n&&Ze(t),br(t,l));n=l}else if(e instanceof Node){if(Et.context&&e.parentNode)return n=o?[e]:e;if(Array.isArray(n)){if(o)return n=Ze(t,n,i,e);Ze(t,n,null,e)}else n==null||n===""||!t.firstChild?t.appendChild(e):t.replaceChild(e,t.firstChild);n=e}else console.warn("Unrecognized value. Skipped inserting",e)}return n}function Gi(t,e,n,i){let s=!1;for(let r=0,o=e.length;r<o;r++){let l=e[r],a=n&&n[r];if(l instanceof Node)t.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))s=Gi(t,l,a)||s;else if(typeof l=="function")if(i){for(;typeof l=="function";)l=l();s=Gi(t,Array.isArray(l)?l:[l],Array.isArray(a)?a:[a])||s}else t.push(l),s=!0;else{const h=String(l);a&&a.nodeType===3&&a.data===h?t.push(a):t.push(document.createTextNode(h))}}return s}function br(t,e,n=null){for(let i=0,s=e.length;i<s;i++)t.insertBefore(e[i],n)}function Ze(t,e,n,i){if(n===void 0)return t.textContent="";const s=i||document.createTextNode("");if(e.length){let r=!1;for(let o=e.length-1;o>=0;o--){const l=e[o];if(s!==l){const a=l.parentNode===t;!r&&!o?a?t.replaceChild(s,l):t.insertBefore(s,n):a&&l.remove()}else r=!0}}else t.insertBefore(s,n);return[s]}const lc="/assets/logo-123b04bc.svg",ac="_App_9g4xh_1",hc="_logo_9g4xh_5",cc="_header_9g4xh_11",uc="_link_9g4xh_22",pn={App:ac,logo:hc,"logo-spin":"_logo-spin_9g4xh_1",header:cc,link:uc},dc=sc('<div><header><img alt="logo"><p>Edit <code>src/App.tsx</code> and save to reload.</p><a href="https://github.com/solidjs/solid" target="_blank" rel="noopener noreferrer">Learn Solid</a></header></div>',11),fc=()=>(()=>{const t=dc.cloneNode(!0),e=t.firstChild,n=e.firstChild,i=n.nextSibling,s=i.nextSibling;return rc(n,"src",lc),Lt(r=>{const o=pn.App,l=pn.header,a=pn.logo,h=pn.link;return o!==r._v$&&fn(t,r._v$=o),l!==r._v$2&&fn(e,r._v$2=l),a!==r._v$3&&fn(n,r._v$3=a),h!==r._v$4&&fn(s,r._v$4=h),r},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),t})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(t,e){if(!t)throw dt(e)},dt=function(t){return new Error("Firebase Database ("+Xo.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},pc=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],l=t[n++],a=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(a>>10)),e[i++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},bs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,l=o?t[s+1]:0,a=s+2<t.length,h=a?t[s+2]:0,c=r>>2,u=(r&3)<<4|l>>4;let d=(l&15)<<2|h>>6,g=h&63;a||(g=64,o||(d=64)),i.push(n[c],n[u],n[d],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jo(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pc(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||l==null||h==null||u==null)throw Error();const d=r<<2|l>>4;if(i.push(d),h!==64){const g=l<<4&240|h>>2;if(i.push(g),u!==64){const _=h<<6&192|u;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Qo=function(t){const e=Jo(t);return bs.encodeByteArray(e,!0)},Zo=function(t){return Qo(t).replace(/\./g,"")},bn=function(t){try{return bs.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(t){return el(void 0,t)}function el(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!_c(n)||(t[n]=el(t[n],e[n]));return t}function _c(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=()=>mc().__FIREBASE_DEFAULTS__,vc=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ec=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bn(t[1]);return e&&JSON.parse(e)},tl=()=>{try{return yc()||vc()||Ec()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Tc=()=>{var t;return(t=tl())===null||t===void 0?void 0:t.config},Ic=t=>{var e;return(e=tl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rs(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pe())}function Cc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function il(){return Xo.NODE_ADMIN===!0}function wc(){try{return typeof indexedDB=="object"}catch{return!1}}function Sc(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc="FirebaseError";class Ce extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=bc,Object.setPrototypeOf(this,Ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qt.prototype.create)}}class qt{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Ac(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Ce(s,l,i)}}function Ac(t,e){return t.replace(Rc,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Rc=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t){return JSON.parse(t)}function F(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=xt(bn(r[0])||""),n=xt(bn(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},Nc=function(t){const e=sl(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},kc=function(t){const e=sl(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ht(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ar(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function An(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function zi(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Rr(r)&&Rr(o)){if(!zi(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Rr(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)i[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const d=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],h,c;for(let u=0;u<80;u++){u<40?u<20?(h=l^r&(o^l),c=1518500249):(h=r^o^l,c=1859775393):u<60?(h=r&o|l&(r|o),c=2400959708):(h=r^o^l,c=3395469782);const d=(s<<5|s>>>27)+h+a+c+i[u]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Oc(t,e){const n=new Pc(t,e);return n.subscribe.bind(n)}class Pc{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Lc(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Ei),s.error===void 0&&(s.error=Ei),s.complete===void 0&&(s.complete=Ei);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lc(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ei(){}function xc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,f(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Jn=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t){return t&&t._delegate?t._delegate:t}class Te{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new As;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Bc(e))try{this.getOrInitializeService({instanceIdentifier:Le})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Le){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Le){return this.instances.has(e)}getOptions(e=Le){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Fc(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Le){return this.component?this.component.multipleInstances?e:Le:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fc(t){return t===Le?void 0:t}function Bc(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Uc(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(S||(S={}));const $c={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},Wc=S.INFO,jc={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},Vc=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=jc[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qn{constructor(e){this.name=e,this._logLevel=Wc,this._logHandler=Vc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$c[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}const Gc=(t,e)=>e.some(n=>t instanceof n);let Nr,kr;function zc(){return Nr||(Nr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kc(){return kr||(kr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rl=new WeakMap,Ki=new WeakMap,ol=new WeakMap,Ti=new WeakMap,ks=new WeakMap;function qc(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(be(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rl.set(n,t)}).catch(()=>{}),ks.set(e,t),e}function Yc(t){if(Ki.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ki.set(t,e)}let qi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ki.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ol.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return be(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Xc(t){qi=t(qi)}function Jc(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Ii(this),e,...n);return ol.set(i,e.sort?e.sort():[e]),be(i)}:Kc().includes(t)?function(...e){return t.apply(Ii(this),e),be(rl.get(this))}:function(...e){return be(t.apply(Ii(this),e))}}function Qc(t){return typeof t=="function"?Jc(t):(t instanceof IDBTransaction&&Yc(t),Gc(t,zc())?new Proxy(t,qi):t)}function be(t){if(t instanceof IDBRequest)return qc(t);if(Ti.has(t))return Ti.get(t);const e=Qc(t);return e!==t&&(Ti.set(t,e),ks.set(e,t)),e}const Ii=t=>ks.get(t);function Zc(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),l=be(o);return i&&o.addEventListener("upgradeneeded",a=>{i(be(o.result),a.oldVersion,a.newVersion,be(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),s&&a.addEventListener("versionchange",()=>s())}).catch(()=>{}),l}const eu=["get","getKey","getAll","getAllKeys","count"],tu=["put","add","delete","clear"],Ci=new Map;function Dr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ci.get(e))return Ci.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=tu.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||eu.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let h=a.store;return i&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&a.done]))[0]};return Ci.set(e,r),r}Xc(t=>({...t,get:(e,n,i)=>Dr(e,n)||t.get(e,n,i),has:(e,n)=>!!Dr(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iu(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function iu(t){const e=t.getComponent();return e?.type==="VERSION"}const Yi="@firebase/app",Or="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=new Qn("@firebase/app"),su="@firebase/app-compat",ru="@firebase/analytics-compat",ou="@firebase/analytics",lu="@firebase/app-check-compat",au="@firebase/app-check",hu="@firebase/auth",cu="@firebase/auth-compat",uu="@firebase/database",du="@firebase/database-compat",fu="@firebase/functions",pu="@firebase/functions-compat",gu="@firebase/installations",_u="@firebase/installations-compat",mu="@firebase/messaging",yu="@firebase/messaging-compat",vu="@firebase/performance",Eu="@firebase/performance-compat",Tu="@firebase/remote-config",Iu="@firebase/remote-config-compat",Cu="@firebase/storage",wu="@firebase/storage-compat",Su="@firebase/firestore",bu="@firebase/firestore-compat",Au="firebase",Ru="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu="[DEFAULT]",ku={[Yi]:"fire-core",[su]:"fire-core-compat",[ou]:"fire-analytics",[ru]:"fire-analytics-compat",[au]:"fire-app-check",[lu]:"fire-app-check-compat",[hu]:"fire-auth",[cu]:"fire-auth-compat",[uu]:"fire-rtdb",[du]:"fire-rtdb-compat",[fu]:"fire-fn",[pu]:"fire-fn-compat",[gu]:"fire-iid",[_u]:"fire-iid-compat",[mu]:"fire-fcm",[yu]:"fire-fcm-compat",[vu]:"fire-perf",[Eu]:"fire-perf-compat",[Tu]:"fire-rc",[Iu]:"fire-rc-compat",[Cu]:"fire-gcs",[wu]:"fire-gcs-compat",[Su]:"fire-fst",[bu]:"fire-fst-compat","fire-js":"fire-js",[Au]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new Map,Ji=new Map;function Du(t,e){try{t.container.addComponent(e)}catch(n){Ge.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Re(t){const e=t.name;if(Ji.has(e))return Ge.debug(`There were multiple attempts to register component ${e}.`),!1;Ji.set(e,t);for(const n of Xi.values())Du(n,t);return!0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},We=new qt("app","Firebase",Ou);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Te("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw We.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=Ru;function ll(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Nu,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw We.create("bad-app-name",{appName:String(s)});if(n||(n=Tc()),!n)throw We.create("no-options");const r=Xi.get(s);if(r){if(zi(n,r.options)&&zi(i,r.config))return r;throw We.create("duplicate-app",{appName:s})}const o=new Hc(s);for(const a of Ji.values())o.addComponent(a);const l=new Pu(n,i,o);return Xi.set(s,l),l}function ne(t,e,n){var i;let s=(i=ku[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ge.warn(l.join(" "));return}Re(new Te(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="firebase-heartbeat-database",xu=1,Mt="firebase-heartbeat-store";let wi=null;function al(){return wi||(wi=Zc(Lu,xu,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Mt)}}}).catch(t=>{throw We.create("idb-open",{originalErrorMessage:t.message})})),wi}async function Mu(t){try{return(await al()).transaction(Mt).objectStore(Mt).get(hl(t))}catch(e){if(e instanceof Ce)Ge.warn(e.message);else{const n=We.create("idb-get",{originalErrorMessage:e?.message});Ge.warn(n.message)}}}async function Pr(t,e){try{const i=(await al()).transaction(Mt,"readwrite");return await i.objectStore(Mt).put(e,hl(t)),i.done}catch(n){if(n instanceof Ce)Ge.warn(n.message);else{const i=We.create("idb-set",{originalErrorMessage:n?.message});Ge.warn(i.message)}}}function hl(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=1024,Fu=30*24*60*60*1e3;class Bu{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $u(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Lr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=Fu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lr(),{heartbeatsToSend:n,unsentEntries:i}=Hu(this._heartbeatsCache.heartbeats),s=Zo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Lr(){return new Date().toISOString().substring(0,10)}function Hu(t,e=Uu){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),xr(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),xr(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class $u{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wc()?Sc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Mu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function xr(t){return Zo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t){Re(new Te("platform-logger",e=>new nu(e),"PRIVATE")),Re(new Te("heartbeat",e=>new Bu(e),"PRIVATE")),ne(Yi,Or,t),ne(Yi,Or,"esm2017"),ne("fire-js","")}Wu("");function cl(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function ul(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ju=ul,dl=new qt("auth","Firebase",ul());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new Qn("@firebase/auth");function In(t,...e){Mr.logLevel<=S.ERROR&&Mr.error(`Auth (${Xt}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(t,...e){throw Ds(t,...e)}function fl(t,...e){return Ds(t,...e)}function Vu(t,e,n){const i=Object.assign(Object.assign({},ju()),{[e]:n});return new qt("auth","Firebase",i).create(e,{appName:t.name})}function Ds(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return dl.create(t,...e)}function I(t,e,...n){if(!t)throw Ds(e,...n)}function Rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw In(e),new Error(e)}function Rn(t,e){t||Rt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new Map;function Me(t){Rn(t instanceof Function,"Expected a class definition");let e=Fr.get(t);return e?(Rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fr.set(t,e),e)}function Gu(t,e){const n=e?.persistence||[],i=(Array.isArray(n)?n:[n]).map(Me);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e?.popupRedirectResolver)}function zu(){return Br()==="http:"||Br()==="https:"}function Br(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zu()||Cc()||"connection"in navigator)?navigator.onLine:!0}function qu(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rn(n>e,"Short delay should be less than long delay!"),this.isMobile=Rs()||nl()}get(){return Ku()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(t,e){Rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=new Jt(3e4,6e4);async function gl(t,e,n,i,s={}){return _l(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const l=Ns(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),pl.fetch()(ml(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))})}async function _l(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Xu),e);try{const s=new Qu(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw gn(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[a,h]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw gn(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw gn(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw gn(t,"user-disabled",o);const c=i[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Vu(t,c,h);Ur(t,c)}}catch(s){if(s instanceof Ce)throw s;Ur(t,"network-request-failed")}}function ml(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Yu(t.config,s):`${t.config.apiScheme}://${s}`}class Qu{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(fl(this.auth,"network-request-failed")),Ju.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gn(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=fl(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zu(t,e){return gl(t,"POST","/v1/accounts:delete",e)}async function ed(t,e){return gl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function td(t,e=!1){const n=Yt(t),i=await n.getIdToken(e),s=yl(i);I(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r?.sign_in_provider;return{claims:s,token:i,authTime:Nt(Si(s.auth_time)),issuedAtTime:Nt(Si(s.iat)),expirationTime:Nt(Si(s.exp)),signInProvider:o||null,signInSecondFactor:r?.sign_in_second_factor||null}}function Si(t){return Number(t)*1e3}function yl(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return In("JWT malformed, contained fewer than 3 sections"),null;try{const s=bn(n);return s?JSON.parse(s):(In("Failed to decode base64 JWT payload"),null)}catch(s){return In("Caught error parsing JWT payload as JSON",s?.toString()),null}}function nd(t){const e=yl(t);return I(e,"internal-error"),I(typeof e.exp<"u","internal-error"),I(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qi(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Ce&&id(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function id({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nt(this.lastLoginAt),this.creationTime=Nt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nn(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Qi(t,ed(n,{idToken:i}));I(s?.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?ld(r.providerUserInfo):[],l=od(t.providerData,o),a=t.isAnonymous,h=!(t.email&&r.passwordHash)&&!l?.length,c=a?h:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new vl(r.createdAt,r.lastLoginAt),isAnonymous:c};Object.assign(t,u)}async function rd(t){const e=Yt(t);await Nn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function od(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function ld(t){return t.map(e=>{var{providerId:n}=e,i=cl(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ad(t,e){const n=await _l(t,{},async()=>{const i=Ns({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=ml(t,s,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",pl.fetch()(o,{method:"POST",headers:l,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken<"u","internal-error"),I(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await ad(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Ut;return i&&(I(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(I(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(I(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ut,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t,e){I(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class st{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=cl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new vl(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Qi(this,this.stsTokenManager.getToken(this.auth,e));return I(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return td(this,e)}reload(){return rd(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new st(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Nn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Qi(this,Zu(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,l,a,h,c;const u=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(l=n.tenantId)!==null&&l!==void 0?l:void 0,w=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,re=(h=n.createdAt)!==null&&h!==void 0?h:void 0,me=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:X,emailVerified:W,isAnonymous:Oe,providerData:Pe,stsTokenManager:dn}=n;I(X&&dn,e,"internal-error");const vt=Ut.fromJSON(this.name,dn);I(typeof X=="string",e,"internal-error"),Se(u,e.name),Se(d,e.name),I(typeof W=="boolean",e,"internal-error"),I(typeof Oe=="boolean",e,"internal-error"),Se(g,e.name),Se(_,e.name),Se(b,e.name),Se(w,e.name),Se(re,e.name),Se(me,e.name);const vi=new st({uid:X,auth:e,email:d,emailVerified:W,displayName:u,isAnonymous:Oe,photoURL:_,phoneNumber:g,tenantId:b,stsTokenManager:vt,createdAt:re,lastLoginAt:me});return Pe&&Array.isArray(Pe)&&(vi.providerData=Pe.map(Hh=>Object.assign({},Hh))),w&&(vi._redirectEventId=w),vi}static async _fromIdTokenResponse(e,n,i=!1){const s=new Ut;s.updateFromServerResponse(n);const r=new st({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Nn(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}El.type="NONE";const Hr=El;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t,e,n){return`firebase:${t}:${e}:${n}`}class rt{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=bi(this.userKey,s.apiKey,r),this.fullPersistenceKey=bi("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?st._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new rt(Me(Hr),e,i);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let r=s[0]||Me(Hr);const o=bi(i,e.config.apiKey,e.name);let l=null;for(const h of n)try{const c=await h._get(o);if(c){const u=st._fromJSON(e,c);h!==r&&(l=u),r=h;break}}catch{}const a=s.filter(h=>h._shouldAllowMigration);return!r._shouldAllowMigration||!a.length?new rt(r,e,i):(r=a[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==r)try{await h._remove(o)}catch{}})),new rt(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pd(e))return"Blackberry";if(gd(e))return"Webos";if(cd(e))return"Safari";if((e.includes("chrome/")||ud(e))&&!e.includes("edge/"))return"Chrome";if(fd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if(i?.length===2)return i[1]}return"Other"}function hd(t=pe()){return/firefox\//i.test(t)}function cd(t=pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ud(t=pe()){return/crios\//i.test(t)}function dd(t=pe()){return/iemobile/i.test(t)}function fd(t=pe()){return/android/i.test(t)}function pd(t=pe()){return/blackberry/i.test(t)}function gd(t=pe()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(t,e=[]){let n;switch(t){case"Browser":n=$r(pe());break;case"Worker":n=`${$r(pe())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xt}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,l)=>{try{const a=e(r);o(a)}catch(a){l(a)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n,i){this.app=e,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wr(this),this.idTokenSubscription=new Wr(this),this.beforeStateQueue=new _d(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dl,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Me(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await rt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s?._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&a?.user&&(s=a.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nn(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qu()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Yt(e):null;return n&&I(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Me(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qt("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Me(e)||this._popupRedirectResolver;I(n,this,"argument-error"),this.redirectPersistenceManager=await rt.create(this,[Me(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return I(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(n["X-Firebase-Client"]=i),n}}function yd(t){return Yt(t)}class Wr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Oc(n=>this.observer=n)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}new Jt(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Jt(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Jt(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Jt(5e3,15e3);var jr="@firebase/auth",Vr="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Td(t){Re(new Te("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=i.options;return((l,a)=>{I(r&&!r.includes(":"),"invalid-api-key",{appName:l.name}),I(!o?.includes(":"),"argument-error",{appName:l.name});const h={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tl(t)},c=new md(l,a,h);return Gu(c,n),c})(i,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Re(new Te("auth-internal",e=>{const n=yd(e.getProvider("auth").getImmediate());return(i=>new vd(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ne(jr,Vr,Ed(t)),ne(jr,Vr,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=5*60;Ic("authIdTokenMaxAge");Td("Browser");var Cd="firebase",wd="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ne(Cd,wd,"app");var Sd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p,Os=Os||{},m=Sd||self;function kn(){}function Zn(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Qt(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function bd(t){return Object.prototype.hasOwnProperty.call(t,Ai)&&t[Ai]||(t[Ai]=++Ad)}var Ai="closure_uid_"+(1e9*Math.random()>>>0),Ad=0;function Rd(t,e,n){return t.call.apply(t.bind,arguments)}function Nd(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function K(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?K=Rd:K=Nd,K.apply(null,arguments)}function _n(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function $(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,s,r){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return e.prototype[s].apply(i,o)}}function ke(){this.s=this.s,this.o=this.o}var kd=0;ke.prototype.s=!1;ke.prototype.na=function(){!this.s&&(this.s=!0,this.M(),kd!=0)&&bd(this)};ke.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Il=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ps(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Gr(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Zn(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function q(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}q.prototype.h=function(){this.defaultPrevented=!0};var Dd=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{m.addEventListener("test",kn,e),m.removeEventListener("test",kn,e)}catch{}return t}();function Dn(t){return/^[\s\xa0]*$/.test(t)}var zr=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ri(t,e){return t<e?-1:t>e?1:0}function ei(){var t=m.navigator;return t&&(t=t.userAgent)?t:""}function ce(t){return ei().indexOf(t)!=-1}function Ls(t){return Ls[" "](t),t}Ls[" "]=kn;function Od(t){var e=xd;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Pd=ce("Opera"),Ft=ce("Trident")||ce("MSIE"),Cl=ce("Edge"),Zi=Cl||Ft,wl=ce("Gecko")&&!(ei().toLowerCase().indexOf("webkit")!=-1&&!ce("Edge"))&&!(ce("Trident")||ce("MSIE"))&&!ce("Edge"),Ld=ei().toLowerCase().indexOf("webkit")!=-1&&!ce("Edge");function Sl(){var t=m.document;return t?t.documentMode:void 0}var es;e:{var Ni="",ki=function(){var t=ei();if(wl)return/rv:([^\);]+)(\)|;)/.exec(t);if(Cl)return/Edge\/([\d\.]+)/.exec(t);if(Ft)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Ld)return/WebKit\/(\S+)/.exec(t);if(Pd)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ki&&(Ni=ki?ki[1]:""),Ft){var Di=Sl();if(Di!=null&&Di>parseFloat(Ni)){es=String(Di);break e}}es=Ni}var xd={};function Md(){return Od(function(){let t=0;const e=zr(String(es)).split("."),n=zr("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=Ri(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Ri(s[2].length==0,r[2].length==0)||Ri(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}m.document&&Ft&&Sl();function Bt(t,e){if(q.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(wl){e:{try{Ls(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Ud[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Bt.X.h.call(this)}}$(Bt,q);var Ud={2:"touch",3:"pen",4:"mouse"};Bt.prototype.h=function(){Bt.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Zt="closure_listenable_"+(1e6*Math.random()|0),Fd=0;function Bd(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++Fd,this.ba=this.ea=!1}function ti(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function xs(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function bl(t){const e={};for(const n in t)e[n]=t[n];return e}const Kr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Al(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<Kr.length;r++)n=Kr[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function ni(t){this.src=t,this.g={},this.h=0}ni.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=ns(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Bd(e,this.src,r,!!i,s),e.ea=n,t.push(e)),e};function ts(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=Il(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ti(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ns(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}var Ms="closure_lm_"+(1e6*Math.random()|0),Oi={};function Rl(t,e,n,i,s){if(i&&i.once)return kl(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Rl(t,e[r],n,i,s);return null}return n=Bs(n),t&&t[Zt]?t.N(e,n,Qt(i)?!!i.capture:!!i,s):Nl(t,e,n,!1,i,s)}function Nl(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Qt(s)?!!s.capture:!!s,l=Fs(t);if(l||(t[Ms]=l=new ni(t)),n=l.add(e,n,i,o,r),n.proxy)return n;if(i=Hd(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Dd||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Ol(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Hd(){function t(n){return e.call(t.src,t.listener,n)}const e=$d;return t}function kl(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)kl(t,e[r],n,i,s);return null}return n=Bs(n),t&&t[Zt]?t.O(e,n,Qt(i)?!!i.capture:!!i,s):Nl(t,e,n,!0,i,s)}function Dl(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Dl(t,e[r],n,i,s);else i=Qt(i)?!!i.capture:!!i,n=Bs(n),t&&t[Zt]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=ns(r,n,i,s),-1<n&&(ti(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Fs(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ns(e,n,i,s)),(n=-1<t?e[t]:null)&&Us(n))}function Us(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Zt])ts(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Ol(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Fs(e))?(ts(n,t),n.h==0&&(n.src=null,e[Ms]=null)):ti(t)}}}function Ol(t){return t in Oi?Oi[t]:Oi[t]="on"+t}function $d(t,e){if(t.ba)t=!0;else{e=new Bt(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&Us(t),t=n.call(i,e)}return t}function Fs(t){return t=t[Ms],t instanceof ni?t:null}var Pi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bs(t){return typeof t=="function"?t:(t[Pi]||(t[Pi]=function(e){return t.handleEvent(e)}),t[Pi])}function U(){ke.call(this),this.i=new ni(this),this.P=this,this.I=null}$(U,ke);U.prototype[Zt]=!0;U.prototype.removeEventListener=function(t,e,n,i){Dl(this,t,e,n,i)};function H(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new q(e,t);else if(e instanceof q)e.target=e.target||t;else{var s=e;e=new q(i,t),Al(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=mn(o,i,!0,e)&&s}if(o=e.g=t,s=mn(o,i,!0,e)&&s,s=mn(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=mn(o,i,!1,e)&&s}U.prototype.M=function(){if(U.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)ti(n[i]);delete t.g[e],t.h--}}this.I=null};U.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};U.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function mn(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var l=o.listener,a=o.ha||o.src;o.ea&&ts(t.i,o),s=l.call(a,i)!==!1&&s}}return s&&!i.defaultPrevented}var Hs=m.JSON.stringify;function Wd(){var t=xl;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class jd{constructor(){this.h=this.g=null}add(e,n){const i=Pl.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Pl=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Vd,t=>t.reset());class Vd{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Gd(t){m.setTimeout(()=>{throw t},0)}function Ll(t,e){is||zd(),ss||(is(),ss=!0),xl.add(t,e)}var is;function zd(){var t=m.Promise.resolve(void 0);is=function(){t.then(Kd)}}var ss=!1,xl=new jd;function Kd(){for(var t;t=Wd();){try{t.h.call(t.g)}catch(n){Gd(n)}var e=Pl;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ss=!1}function ii(t,e){U.call(this),this.h=t||1,this.g=e||m,this.j=K(this.lb,this),this.l=Date.now()}$(ii,U);p=ii.prototype;p.ca=!1;p.R=null;p.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),H(this,"tick"),this.ca&&($s(this),this.start()))}};p.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function $s(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}p.M=function(){ii.X.M.call(this),$s(this),delete this.g};function Ws(t,e,n){if(typeof t=="function")n&&(t=K(t,n));else if(t&&typeof t.handleEvent=="function")t=K(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:m.setTimeout(t,e||0)}function Ml(t){t.g=Ws(()=>{t.g=null,t.i&&(t.i=!1,Ml(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class qd extends ke{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ml(this)}M(){super.M(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ht(t){ke.call(this),this.h=t,this.g={}}$(Ht,ke);var qr=[];function Ul(t,e,n,i){Array.isArray(n)||(n&&(qr[0]=n.toString()),n=qr);for(var s=0;s<n.length;s++){var r=Rl(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Fl(t){xs(t.g,function(e,n){this.g.hasOwnProperty(n)&&Us(e)},t),t.g={}}Ht.prototype.M=function(){Ht.X.M.call(this),Fl(this)};Ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function si(){this.g=!0}si.prototype.Aa=function(){this.g=!1};function Yd(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",l=r.split("&"),a=0;a<l.length;a++){var h=l[a].split("=");if(1<h.length){var c=h[0];h=h[1];var u=c.split("_");o=2<=u.length&&u[1]=="type"?o+(c+"="+h+"&"):o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Xd(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function tt(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Qd(t,n)+(i?" "+i:"")})}function Jd(t,e){t.info(function(){return"TIMEOUT: "+e})}si.prototype.info=function(){};function Qd(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Hs(n)}catch{return e}}var ft={},Yr=null;function js(){return Yr=Yr||new U}ft.Pa="serverreachability";function Bl(t){q.call(this,ft.Pa,t)}$(Bl,q);function $t(t){const e=js();H(e,new Bl(e))}ft.STAT_EVENT="statevent";function Hl(t,e){q.call(this,ft.STAT_EVENT,t),this.stat=e}$(Hl,q);function Y(t){const e=js();H(e,new Hl(e,t))}ft.Qa="timingevent";function $l(t,e){q.call(this,ft.Qa,t),this.size=e}$($l,q);function en(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){t()},e)}var Vs={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Zd={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Gs(){}Gs.prototype.h=null;function Xr(t){return t.h||(t.h=t.i())}function ef(){}var tn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function zs(){q.call(this,"d")}$(zs,q);function Ks(){q.call(this,"c")}$(Ks,q);var rs;function ri(){}$(ri,Gs);ri.prototype.g=function(){return new XMLHttpRequest};ri.prototype.i=function(){return{}};rs=new ri;function nn(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new Ht(this),this.O=tf,t=Zi?125:void 0,this.T=new ii(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Wl}function Wl(){this.i=null,this.g="",this.h=!1}var tf=45e3,os={},On={};p=nn.prototype;p.setTimeout=function(t){this.O=t};function ls(t,e,n){t.K=1,t.v=li(Ie(e)),t.s=n,t.P=!0,jl(t,null)}function jl(t,e){t.F=Date.now(),sn(t),t.A=Ie(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),Jl(n.i,"t",i),t.C=0,n=t.l.H,t.h=new Wl,t.g=ya(t.l,n?e:null,!t.s),0<t.N&&(t.L=new qd(K(t.La,t,t.g),t.N)),Ul(t.S,t.g,"readystatechange",t.ib),e=t.H?bl(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),$t(),Yd(t.j,t.u,t.A,t.m,t.U,t.s)}p.ib=function(t){t=t.target;const e=this.L;e&&ye(t)==3?e.l():this.La(t)};p.La=function(t){try{if(t==this.g)e:{const c=ye(this.g);var e=this.g.Ea();const u=this.g.aa();if(!(3>c)&&(c!=3||Zi||this.g&&(this.h.h||this.g.fa()||eo(this.g)))){this.I||c!=4||e==7||(e==8||0>=u?$t(3):$t(2)),oi(this);var n=this.g.aa();this.Y=n;t:if(Vl(this)){var i=eo(this.g);t="";var s=i.length,r=ye(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ue(this),kt(this);var o="";break t}this.h.i=new m.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Xd(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Dn(l)){var h=l;break t}}h=null}if(n=h)tt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,as(this,n);else{this.i=!1,this.o=3,Y(12),Ue(this),kt(this);break e}}this.P?(Gl(this,c,o),Zi&&this.i&&c==3&&(Ul(this.S,this.T,"tick",this.hb),this.T.start())):(tt(this.j,this.m,o,null),as(this,o)),c==4&&Ue(this),this.i&&!this.I&&(c==4?pa(this.l,this):(this.i=!1,sn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Y(12)):(this.o=0,Y(13)),Ue(this),kt(this)}}}catch{}finally{}};function Vl(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Gl(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=nf(t,n),s==On){e==4&&(t.o=4,Y(14),i=!1),tt(t.j,t.m,null,"[Incomplete Response]");break}else if(s==os){t.o=4,Y(15),tt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else tt(t.j,t.m,s,null),as(t,s);Vl(t)&&s!=On&&s!=os&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Y(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),er(e),e.K=!0,Y(11))):(tt(t.j,t.m,n,"[Invalid Chunked Response]"),Ue(t),kt(t))}p.hb=function(){if(this.g){var t=ye(this.g),e=this.g.fa();this.C<e.length&&(oi(this),Gl(this,t,e),this.i&&t!=4&&sn(this))}};function nf(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?On:(n=Number(e.substring(n,i)),isNaN(n)?os:(i+=1,i+n>e.length?On:(e=e.substr(i,n),t.C=i+n,e)))}p.cancel=function(){this.I=!0,Ue(this)};function sn(t){t.V=Date.now()+t.O,zl(t,t.O)}function zl(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=en(K(t.gb,t),e)}function oi(t){t.B&&(m.clearTimeout(t.B),t.B=null)}p.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Jd(this.j,this.A),this.K!=2&&($t(),Y(17)),Ue(this),this.o=2,kt(this)):zl(this,this.V-t)};function kt(t){t.l.G==0||t.I||pa(t.l,t)}function Ue(t){oi(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,$s(t.T),Fl(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function as(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||hs(n.h,t))){if(!t.J&&hs(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)xn(n),ui(n);else break e;Zs(n),Y(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=en(K(n.cb,n),6e3));if(1>=ea(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Fe(n,11)}else if((t.J||n.g==t)&&xn(n),!Dn(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let h=s[e];if(n.T=h[0],h=h[1],n.G==2)if(h[0]=="c"){n.I=h[1],n.ka=h[2];const c=h[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const u=h[4];u!=null&&(n.Ca=u,n.j.info("SVER="+n.Ca));const d=h[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const g=t.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=i.h;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(qs(r,r.h),r.h=null))}if(i.D){const b=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(i.za=b,D(i.F,i.D,b))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=ma(i,i.H?i.ka:null,i.V),o.J){ta(i.h,o);var l=o,a=i.J;a&&l.setTimeout(a),l.B&&(oi(l),sn(l)),i.g=o}else da(i);0<n.i.length&&di(n)}else h[0]!="stop"&&h[0]!="close"||Fe(n,7);else n.G==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?Fe(n,7):Qs(n):h[0]!="noop"&&n.l&&n.l.wa(h),n.A=0)}}$t(4)}catch{}}function sf(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Zn(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function rf(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Zn(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function Kl(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Zn(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=rf(t),i=sf(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var ql=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function of(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function je(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof je){this.h=e!==void 0?e:t.h,Pn(this,t.j),this.s=t.s,this.g=t.g,Ln(this,t.m),this.l=t.l,e=t.i;var n=new Wt;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Jr(this,n),this.o=t.o}else t&&(n=String(t).match(ql))?(this.h=!!e,Pn(this,n[1]||"",!0),this.s=bt(n[2]||""),this.g=bt(n[3]||"",!0),Ln(this,n[4]),this.l=bt(n[5]||"",!0),Jr(this,n[6]||"",!0),this.o=bt(n[7]||"")):(this.h=!!e,this.i=new Wt(null,this.h))}je.prototype.toString=function(){var t=[],e=this.j;e&&t.push(At(e,Qr,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(At(e,Qr,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(At(n,n.charAt(0)=="/"?hf:af,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",At(n,uf)),t.join("")};function Ie(t){return new je(t)}function Pn(t,e,n){t.j=n?bt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ln(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Jr(t,e,n){e instanceof Wt?(t.i=e,df(t.i,t.h)):(n||(e=At(e,cf)),t.i=new Wt(e,t.h))}function D(t,e,n){t.i.set(e,n)}function li(t){return D(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function bt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function At(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,lf),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function lf(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Qr=/[#\/\?@]/g,af=/[#\?:]/g,hf=/[#\?]/g,cf=/[#\?@]/g,uf=/#/g;function Wt(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function De(t){t.g||(t.g=new Map,t.h=0,t.i&&of(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}p=Wt.prototype;p.add=function(t,e){De(this),this.i=null,t=pt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Yl(t,e){De(t),e=pt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Xl(t,e){return De(t),e=pt(t,e),t.g.has(e)}p.forEach=function(t,e){De(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};p.oa=function(){De(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};p.W=function(t){De(this);let e=[];if(typeof t=="string")Xl(this,t)&&(e=e.concat(this.g.get(pt(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};p.set=function(t,e){return De(this),this.i=null,t=pt(this,t),Xl(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};p.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Jl(t,e,n){Yl(t,e),0<n.length&&(t.i=null,t.g.set(pt(t,e),Ps(n)),t.h+=n.length)}p.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function pt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function df(t,e){e&&!t.j&&(De(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(Yl(this,i),Jl(this,s,n))},t)),t.j=e}var ff=class{constructor(t,e){this.h=t,this.g=e}};function Ql(t){this.l=t||pf,m.PerformanceNavigationTiming?(t=m.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(m.g&&m.g.Ga&&m.g.Ga()&&m.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var pf=10;function Zl(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ea(t){return t.h?1:t.g?t.g.size:0}function hs(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function qs(t,e){t.g?t.g.add(e):t.h=e}function ta(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ql.prototype.cancel=function(){if(this.i=na(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function na(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ps(t.i)}function Ys(){}Ys.prototype.stringify=function(t){return m.JSON.stringify(t,void 0)};Ys.prototype.parse=function(t){return m.JSON.parse(t,void 0)};function gf(){this.g=new Ys}function _f(t,e,n){const i=n||"";try{Kl(t,function(s,r){let o=s;Qt(s)&&(o=Hs(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function mf(t,e){const n=new si;if(m.Image){const i=new Image;i.onload=_n(yn,n,i,"TestLoadImage: loaded",!0,e),i.onerror=_n(yn,n,i,"TestLoadImage: error",!1,e),i.onabort=_n(yn,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=_n(yn,n,i,"TestLoadImage: timeout",!1,e),m.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function yn(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function ai(t){this.l=t.ac||null,this.j=t.jb||!1}$(ai,Gs);ai.prototype.g=function(){return new hi(this.l,this.j)};ai.prototype.i=function(t){return function(){return t}}({});function hi(t,e){U.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Xs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$(hi,U);var Xs=0;p=hi.prototype;p.open=function(t,e){if(this.readyState!=Xs)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,jt(this)};p.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||m).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};p.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,rn(this)),this.readyState=Xs};p.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,jt(this)),this.g&&(this.readyState=3,jt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ia(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function ia(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}p.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?rn(this):jt(this),this.readyState==3&&ia(this)}};p.Va=function(t){this.g&&(this.response=this.responseText=t,rn(this))};p.Ua=function(t){this.g&&(this.response=t,rn(this))};p.ga=function(){this.g&&rn(this)};function rn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,jt(t)}p.setRequestHeader=function(t,e){this.v.append(t,e)};p.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};p.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function jt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var yf=m.JSON.parse;function O(t){U.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=sa,this.K=this.L=!1}$(O,U);var sa="",vf=/^https?$/i,Ef=["POST","PUT"];p=O.prototype;p.Ka=function(t){this.L=t};p.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():rs.g(),this.C=this.u?Xr(this.u):Xr(rs),this.g.onreadystatechange=K(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Zr(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=m.FormData&&t instanceof m.FormData,!(0<=Il(Ef,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{la(this),0<this.B&&((this.K=Tf(this.g))?(this.g.timeout=this.B,this.g.ontimeout=K(this.qa,this)):this.A=Ws(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Zr(this,r)}};function Tf(t){return Ft&&Md()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}p.qa=function(){typeof Os<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,H(this,"timeout"),this.abort(8))};function Zr(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ra(t),ci(t)}function ra(t){t.D||(t.D=!0,H(t,"complete"),H(t,"error"))}p.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,H(this,"complete"),H(this,"abort"),ci(this))};p.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ci(this,!0)),O.X.M.call(this)};p.Ha=function(){this.s||(this.F||this.v||this.l?oa(this):this.fb())};p.fb=function(){oa(this)};function oa(t){if(t.h&&typeof Os<"u"&&(!t.C[1]||ye(t)!=4||t.aa()!=2)){if(t.v&&ye(t)==4)Ws(t.Ha,0,t);else if(H(t,"readystatechange"),ye(t)==4){t.h=!1;try{const l=t.aa();e:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=l===0){var s=String(t.H).match(ql)[1]||null;if(!s&&m.self&&m.self.location){var r=m.self.location.protocol;s=r.substr(0,r.length-1)}i=!vf.test(s?s.toLowerCase():"")}n=i}if(n)H(t,"complete"),H(t,"success");else{t.m=6;try{var o=2<ye(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",ra(t)}}finally{ci(t)}}}}function ci(t,e){if(t.g){la(t);const n=t.g,i=t.C[0]?kn:null;t.g=null,t.C=null,e||H(t,"ready");try{n.onreadystatechange=i}catch{}}}function la(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(m.clearTimeout(t.A),t.A=null)}function ye(t){return t.g?t.g.readyState:0}p.aa=function(){try{return 2<ye(this)?this.g.status:-1}catch{return-1}};p.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};p.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),yf(e)}};function eo(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case sa:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}p.Ea=function(){return this.m};p.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function aa(t){let e="";return xs(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Js(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=aa(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):D(t,e,n))}function Tt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ha(t){this.Ca=0,this.i=[],this.j=new si,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Tt("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Tt("baseRetryDelayMs",5e3,t),this.bb=Tt("retryDelaySeedMs",1e4,t),this.$a=Tt("forwardChannelMaxRetries",2,t),this.ta=Tt("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ql(t&&t.concurrentRequestLimit),this.Fa=new gf,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}p=ha.prototype;p.ma=8;p.G=1;function Qs(t){if(ca(t),t.G==3){var e=t.U++,n=Ie(t.F);D(n,"SID",t.I),D(n,"RID",e),D(n,"TYPE","terminate"),on(t,n),e=new nn(t,t.j,e,void 0),e.K=2,e.v=li(Ie(n)),n=!1,m.navigator&&m.navigator.sendBeacon&&(n=m.navigator.sendBeacon(e.v.toString(),"")),!n&&m.Image&&(new Image().src=e.v,n=!0),n||(e.g=ya(e.l,null),e.g.da(e.v)),e.F=Date.now(),sn(e)}_a(t)}function ui(t){t.g&&(er(t),t.g.cancel(),t.g=null)}function ca(t){ui(t),t.u&&(m.clearTimeout(t.u),t.u=null),xn(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&m.clearTimeout(t.m),t.m=null)}function di(t){Zl(t.h)||t.m||(t.m=!0,Ll(t.Ja,t),t.C=0)}function If(t,e){return ea(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=en(K(t.Ja,t,e),ga(t,t.C)),t.C++,!0)}p.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new nn(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=bl(r),Al(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ua(this,s,e),n=Ie(this.F),D(n,"RID",t),D(n,"CVER",22),this.D&&D(n,"X-HTTP-Session-Id",this.D),on(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(aa(r)))+"&"+e:this.o&&Js(n,this.o,r)),qs(this.h,s),this.Ya&&D(n,"TYPE","init"),this.O?(D(n,"$req",e),D(n,"SID","null"),s.Z=!0,ls(s,n,null)):ls(s,n,e),this.G=2}}else this.G==3&&(t?to(this,t):this.i.length==0||Zl(this.h)||to(this))};function to(t,e){var n;e?n=e.m:n=t.U++;const i=Ie(t.F);D(i,"SID",t.I),D(i,"RID",n),D(i,"AID",t.T),on(t,i),t.o&&t.s&&Js(i,t.o,t.s),n=new nn(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=ua(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),qs(t.h,n),ls(n,i,e)}function on(t,e){t.ia&&xs(t.ia,function(n,i){D(e,i,n)}),t.l&&Kl({},function(n,i){D(e,i,n)})}function ua(t,e,n){n=Math.min(t.i.length,n);var i=t.l?K(t.l.Ra,t.l,t):null;e:{var s=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let l=!0;for(let a=0;a<n;a++){let h=s[a].h;const c=s[a].g;if(h-=r,0>h)r=Math.max(0,s[a].h-100),l=!1;else try{_f(c,o,"req"+h+"_")}catch{i&&i(c)}}if(l){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,i}function da(t){t.g||t.u||(t.Z=1,Ll(t.Ia,t),t.A=0)}function Zs(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=en(K(t.Ia,t),ga(t,t.A)),t.A++,!0)}p.Ia=function(){if(this.u=null,fa(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=en(K(this.eb,this),t)}};p.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Y(10),ui(this),fa(this))};function er(t){t.B!=null&&(m.clearTimeout(t.B),t.B=null)}function fa(t){t.g=new nn(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Ie(t.sa);D(e,"RID","rpc"),D(e,"SID",t.I),D(e,"CI",t.L?"0":"1"),D(e,"AID",t.T),D(e,"TYPE","xmlhttp"),on(t,e),t.o&&t.s&&Js(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=li(Ie(e)),n.s=null,n.P=!0,jl(n,t)}p.cb=function(){this.v!=null&&(this.v=null,ui(this),Zs(this),Y(19))};function xn(t){t.v!=null&&(m.clearTimeout(t.v),t.v=null)}function pa(t,e){var n=null;if(t.g==e){xn(t),er(t),t.g=null;var i=2}else if(hs(t.h,e))n=e.D,ta(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=js(),H(i,new $l(i,n)),di(t)}else da(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(i==1&&If(t,e)||i==2&&Zs(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:Fe(t,5);break;case 4:Fe(t,10);break;case 3:Fe(t,6);break;default:Fe(t,2)}}}function ga(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Fe(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=K(t.kb,t);n||(n=new je("//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Pn(n,"https"),li(n)),mf(n.toString(),i)}else Y(2);t.G=0,t.l&&t.l.va(e),_a(t),ca(t)}p.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Y(2)):(this.j.info("Failed to ping google.com"),Y(1))};function _a(t){if(t.G=0,t.la=[],t.l){const e=na(t.h);(e.length!=0||t.i.length!=0)&&(Gr(t.la,e),Gr(t.la,t.i),t.h.i.length=0,Ps(t.i),t.i.length=0),t.l.ua()}}function ma(t,e,n){var i=n instanceof je?Ie(n):new je(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),Ln(i,i.m);else{var s=m.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new je(null,void 0);i&&Pn(r,i),e&&(r.g=e),s&&Ln(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&D(i,n,e),D(i,"VER",t.ma),on(t,i),i}function ya(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new O(new ai({jb:!0})):new O(t.ra),e.Ka(t.H),e}function va(){}p=va.prototype;p.xa=function(){};p.wa=function(){};p.va=function(){};p.ua=function(){};p.Ra=function(){};function ie(t,e){U.call(this),this.g=new ha(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Dn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Dn(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gt(this)}$(ie,U);ie.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Y(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=ma(t,null,t.V),di(t)};ie.prototype.close=function(){Qs(this.g)};ie.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Hs(t),t=n);e.i.push(new ff(e.ab++,t)),e.G==3&&di(e)};ie.prototype.M=function(){this.g.l=null,delete this.j,Qs(this.g),delete this.g,ie.X.M.call(this)};function Ea(t){zs.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$(Ea,zs);function Ta(){Ks.call(this),this.status=1}$(Ta,Ks);function gt(t){this.g=t}$(gt,va);gt.prototype.xa=function(){H(this.g,"a")};gt.prototype.wa=function(t){H(this.g,new Ea(t))};gt.prototype.va=function(t){H(this.g,new Ta)};gt.prototype.ua=function(){H(this.g,"b")};ie.prototype.send=ie.prototype.u;ie.prototype.open=ie.prototype.m;ie.prototype.close=ie.prototype.close;Vs.NO_ERROR=0;Vs.TIMEOUT=8;Vs.HTTP_ERROR=6;Zd.COMPLETE="complete";ef.EventType=tn;tn.OPEN="a";tn.CLOSE="b";tn.ERROR="c";tn.MESSAGE="d";U.prototype.listen=U.prototype.N;O.prototype.listenOnce=O.prototype.O;O.prototype.getLastError=O.prototype.Oa;O.prototype.getLastErrorCode=O.prototype.Ea;O.prototype.getStatus=O.prototype.aa;O.prototype.getResponseJson=O.prototype.Sa;O.prototype.getResponseText=O.prototype.fa;O.prototype.send=O.prototype.da;O.prototype.setWithCredentials=O.prototype.Ka;const no="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}J.UNAUTHENTICATED=new J(null),J.GOOGLE_CREDENTIALS=new J("google-credentials-uid"),J.FIRST_PARTY=new J("first-party-uid"),J.MOCK_USER=new J("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new Qn("@firebase/firestore");function Z(t,...e){if(Mn.logLevel<=S.DEBUG){const n=e.map(Ia);Mn.debug(`Firestore (${fi}): ${t}`,...n)}}function tr(t,...e){if(Mn.logLevel<=S.ERROR){const n=e.map(Ia);Mn.error(`Firestore (${fi}): ${t}`,...n)}}function Ia(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(t="Unexpected state"){const e=`FIRESTORE (${fi}) INTERNAL ASSERTION FAILED: `+t;throw tr(e),new Error(e)}function Un(t,e){t||Ca()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends Ce{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(J.UNAUTHENTICATED))}shutdown(){}}class Sf{constructor(e){this.t=e,this.currentUser=J.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=a=>this.i!==i?(i=this.i,n(a)):Promise.resolve();let r=new ot;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ot,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const a=r;e.enqueueRetryable(async()=>{await a.promise,await s(this.currentUser)})},l=a=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ot)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Un(typeof i.accessToken=="string"),new Cf(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Un(e===null||typeof e=="string"),new J(e)}}class bf{constructor(e,n,i,s){this.h=e,this.l=n,this.m=i,this.g=s,this.type="FirstParty",this.user=J.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Un(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Af{constructor(e,n,i,s){this.h=e,this.l=n,this.m=i,this.g=s}getToken(){return Promise.resolve(new bf(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(J.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Rf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Nf{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const i=r=>{r.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?s(r):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Un(typeof n.token=="string"),this.A=n.token,new Rf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=kf(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function wa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,n,i,s,r,o,l,a){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.useFetchStreams=a}}class Fn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Fn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var io,v;(v=io||(io={}))[v.OK=0]="OK",v[v.CANCELLED=1]="CANCELLED",v[v.UNKNOWN=2]="UNKNOWN",v[v.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",v[v.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",v[v.NOT_FOUND=5]="NOT_FOUND",v[v.ALREADY_EXISTS=6]="ALREADY_EXISTS",v[v.PERMISSION_DENIED=7]="PERMISSION_DENIED",v[v.UNAUTHENTICATED=16]="UNAUTHENTICATED",v[v.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",v[v.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",v[v.ABORTED=10]="ABORTED",v[v.OUT_OF_RANGE=11]="OUT_OF_RANGE",v[v.UNIMPLEMENTED=12]="UNIMPLEMENTED",v[v.INTERNAL=13]="INTERNAL",v[v.UNAVAILABLE=14]="UNAVAILABLE",v[v.DATA_LOSS=15]="DATA_LOSS";function Li(){return typeof document<"u"?document:null}class Pf{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=i,this.yo=s,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),i=Math.max(0,Date.now()-this.Eo),s=Math.max(0,n-i);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,l=new nr(e,n,o,s,r);return l.start(i),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(de.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lf(t,e){if(tr("AsyncQueue",`${e}: ${t}`),wa(t))return new fe(de.UNAVAILABLE,`${e}: ${t}`);throw t}function xf(t,e,n,i){if(e===!0&&i===!0)throw new fe(de.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=new Map;class ro{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new fe(de.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new fe(de.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,xf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ro({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new fe(de.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new fe(de.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ro(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new wf;switch(n.type){case"gapi":const i=n.client;return new Af(i,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new fe(de.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=so.get(e);n&&(Z("ComponentProvider","Removing Datastore"),so.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=J.UNAUTHENTICATED,this.clientId=Df.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{Z("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(Z("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new fe(de.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Lf(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}class Ff{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Pf(this,"async_queue_retry"),this.Wc=()=>{const n=Li();n&&Z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Li();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Li();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new ot;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!wa(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(i=>{this.Kc=i,this.Gc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw tr("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Gc=!1,i))));return this.Bc=n,n}enqueueAfterDelay(e,n,i){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const s=nr.createAndSchedule(this,e,n,i,r=>this.Yc(r));return this.Uc.push(s),s}zc(){this.Kc&&Ca()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class Bf extends Mf{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new Ff,this._persistenceKey=s?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||Hf(this),this._firestoreClient.terminate()}}function Hf(t){var e;const n=t._freezeSettings(),i=function(s,r,o,l){return new Of(s,r,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Uf(t._authCredentials,t._appCheckCredentials,t._queue,i)}(function(t,e=!0){(function(n){fi=n})(Xt),Re(new Te("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new Bf(new Sf(n.getProvider("auth-internal")),new Nf(n.getProvider("app-check-internal")),function(l,a){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new fe(de.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fn(l.options.projectId,a)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),ne(no,"3.8.3",t),ne(no,"3.8.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="firebasestorage.googleapis.com",$f="storageBucket",Wf=2*60*1e3,jf=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends Ce{constructor(e,n,i=0){super(xi(e),`Firebase Storage: ${n} (${xi(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_e.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xi(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ge;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ge||(ge={}));function xi(t){return"storage/"+t}function Vf(){const t="An unknown error occurred, please check the error payload for server response.";return new _e(ge.UNKNOWN,t)}function Gf(){return new _e(ge.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function zf(){return new _e(ge.CANCELED,"User canceled the upload/download.")}function Kf(t){return new _e(ge.INVALID_URL,"Invalid URL '"+t+"'.")}function qf(t){return new _e(ge.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function oo(t){return new _e(ge.INVALID_ARGUMENT,t)}function ba(){return new _e(ge.APP_DELETED,"The Firebase app was deleted.")}function Yf(t){return new _e(ge.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=le.makeFromUrl(e,n)}catch{return new le(e,"")}if(i.path==="")return i;throw qf(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(W){W.path.charAt(W.path.length-1)==="/"&&(W.path_=W.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),a={bucket:1,path:3};function h(W){W.path_=decodeURIComponent(W.path)}const c="v[A-Za-z0-9_]+",u=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${u}/${c}/b/${s}/o${d}`,"i"),_={bucket:1,path:3},b=n===Sa?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",re=new RegExp(`^https?://${b}/${s}/${w}`,"i"),X=[{regex:l,indices:a,postModify:r},{regex:g,indices:_,postModify:h},{regex:re,indices:{bucket:1,path:2},postModify:h}];for(let W=0;W<X.length;W++){const Oe=X[W],Pe=Oe.regex.exec(e);if(Pe){const dn=Pe[Oe.indices.bucket];let vt=Pe[Oe.indices.path];vt||(vt=""),i=new le(dn,vt),Oe.postModify(i);break}}if(i==null)throw Kf(e);return i}}class Xf{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(t,e,n){let i=1,s=null,r=null,o=!1,l=0;function a(){return l===2}let h=!1;function c(...w){h||(h=!0,e.apply(null,w))}function u(w){s=setTimeout(()=>{s=null,t(g,a())},w)}function d(){r&&clearTimeout(r)}function g(w,...re){if(h){d();return}if(w){d(),c.call(null,w,...re);return}if(a()||o){d(),c.call(null,w,...re);return}i<64&&(i*=2);let X;l===1?(l=2,X=0):X=(i+Math.random())*1e3,u(X)}let _=!1;function b(w){_||(_=!0,d(),!h&&(s!==null?(w||(l=2),clearTimeout(s),u(0)):w||(l=1)))}return u(0),r=setTimeout(()=>{o=!0,b(!0)},n),b}function Qf(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(t){return t!==void 0}function lo(t,e,n,i){if(i<e)throw oo(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw oo(`Invalid value for '${t}'. Expected ${n} or less.`)}function ep(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Bn||(Bn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,n,i,s,r,o,l,a,h,c,u,d=!0){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=h,this.progressCallback_=c,this.connectionFactory_=u,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,_)=>{this.resolve_=g,this.reject_=_,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new vn(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=l=>{const a=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,h)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const l=r.getErrorCode()===Bn.NO_ERROR,a=r.getStatus();if(!l||tp(a,this.additionalRetryCodes_)&&this.retry){const c=r.getErrorCode()===Bn.ABORT;i(!1,new vn(!1,null,c));return}const h=this.successCodes_.indexOf(a)!==-1;i(!0,new vn(h,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());Zf(a)?r(a):r()}catch(a){o(a)}else if(l!==null){const a=Vf();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(s.canceled){const a=this.appDelete_?ba():zf();o(a)}else{const a=Gf();o(a)}};this.canceled_?n(!1,new vn(!1,null,!0)):this.backoffId_=Jf(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Qf(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class vn{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function ip(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function sp(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function rp(t,e){e&&(t["X-Firebase-GMPID"]=e)}function op(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function lp(t,e,n,i,s,r,o=!0){const l=ep(t.urlParams),a=t.url+l,h=Object.assign({},t.headers);return rp(h,e),ip(h,n),sp(h,r),op(h,i),new np(a,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function hp(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n){this._service=e,n instanceof le?this._location=n:this._location=le.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Hn(e,n)}get root(){const e=new le(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return hp(this._location.path)}get storage(){return this._service}get parent(){const e=ap(this._location.path);if(e===null)return null;const n=new le(this._location.bucket,e);return new Hn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Yf(e)}}function ao(t,e){const n=e?.[$f];return n==null?null:le.makeFromBucketSpec(n,t)}class cp{constructor(e,n,i,s,r){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=Sa,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Wf,this._maxUploadRetryTime=jf,this._requests=new Set,s!=null?this._bucket=le.makeFromBucketSpec(s,this._host):this._bucket=ao(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=le.makeFromBucketSpec(this._url,e):this._bucket=ao(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){lo("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){lo("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Hn(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new Xf(ba());{const o=lp(e,this._appId,i,s,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const ho="@firebase/storage",co="0.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up="storage";function dp(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new cp(n,i,s,e,Xt)}function fp(){Re(new Te(up,dp,"PUBLIC").setMultipleInstances(!0)),ne(ho,co,""),ne(ho,co,"esm2017")}fp();const uo="@firebase/database",fo="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Aa="";function pp(t){Aa=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),F(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:xt(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return we(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new gp(e)}}catch{}return new _p},Be=Ra("localStorage"),cs=Ra("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new Qn("@firebase/database"),mp=function(){let t=1;return function(){return t++}}(),Na=function(t){const e=Mc(t),n=new Dc;n.update(e);const i=n.digest();return bs.encodeByteArray(i)},ln=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=ln.apply(null,i):typeof i=="object"?e+=F(i):e+=i,e+=" "}return e};let Ve=null,po=!0;const yp=function(t,e){f(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(lt.logLevel=S.VERBOSE,Ve=lt.log.bind(lt),e&&cs.set("logging_enabled",!0)):typeof t=="function"?Ve=t:(Ve=null,cs.remove("logging_enabled"))},V=function(...t){if(po===!0&&(po=!1,Ve===null&&cs.get("logging_enabled")===!0&&yp(!0)),Ve){const e=ln.apply(null,t);Ve(e)}},an=function(t){return function(...e){V(t,...e)}},us=function(...t){const e="FIREBASE INTERNAL ERROR: "+ln(...t);lt.error(e)},ze=function(...t){const e=`FIREBASE FATAL ERROR: ${ln(...t)}`;throw lt.error(e),new Error(e)},ee=function(...t){const e="FIREBASE WARNING: "+ln(...t);lt.warn(e)},vp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ee("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ka=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Ep=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ct="[MIN_NAME]",Ke="[MAX_NAME]",_t=function(t,e){if(t===e)return 0;if(t===ct||e===Ke)return-1;if(e===ct||t===Ke)return 1;{const n=go(t),i=go(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Tp=function(t,e){return t===e?0:t<e?-1:1},It=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+F(e))},ir=function(t){if(typeof t!="object"||t===null)return F(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=F(e[i]),n+=":",n+=ir(t[e[i]]);return n+="}",n},Da=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function se(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Oa=function(t){f(!ka(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,l,a;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=l+i,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const h=[];for(a=n;a;a-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)h.push(r%2?1:0),r=Math.floor(r/2);h.push(s?1:0),h.reverse();const c=h.join("");let u="";for(a=0;a<64;a+=8){let d=parseInt(c.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},Ip=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Cp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},wp=new RegExp("^-?(0*)\\d{1,10}$"),Sp=-2147483648,bp=2147483647,go=function(t){if(wp.test(t)){const e=Number(t);if(e>=Sp&&e<=bp)return e}return null},hn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ee("Exception was thrown by user callback.",n),e},Math.floor(0))}},Ap=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Dt=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ee(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(V("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ee(e)}}class ds{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ds.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="5",Pa="v",La="s",xa="r",Ma="f",Ua=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Fa="ls",Ba="p",fs="ac",Ha="websocket",$a="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,n,i,s,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Be.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Be.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Dp(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Wa(t,e,n){f(typeof e=="string","typeof type must == string"),f(typeof n=="object","typeof params must == object");let i;if(e===Ha)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===$a)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Dp(t)&&(n.ns=t.namespace);const s=[];return se(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(){this.counters_={}}incrementCounter(e,n=1){we(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return gc(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi={},Ui={};function rr(t){const e=t.toString();return Mi[e]||(Mi[e]=new Op),Mi[e]}function Pp(t,e){const n=t.toString();return Ui[n]||(Ui[n]=e()),Ui[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&hn(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o="start",xp="close",Mp="pLPCommand",Up="pRTLPCB",ja="id",Va="pw",Ga="ser",Fp="cb",Bp="seg",Hp="ts",$p="d",Wp="dframe",za=1870,Ka=30,jp=za-Ka,Vp=25e3,Gp=3e4;class nt{constructor(e,n,i,s,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=an(e),this.stats_=rr(n),this.urlFn=a=>(this.appCheckToken&&(a[fs]=this.appCheckToken),Wa(n,$a,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Lp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Gp)),Ep(()=>{if(this.isClosed_)return;this.scriptTagHolder=new or((...r)=>{const[o,l,a,h,c]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===_o)this.id=l,this.password=a;else if(o===xp)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[_o]="t",i[Ga]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Fp]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Pa]=sr,this.transportSessionId&&(i[La]=this.transportSessionId),this.lastSessionId&&(i[Fa]=this.lastSessionId),this.applicationId&&(i[Ba]=this.applicationId),this.appCheckToken&&(i[fs]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ua.test(location.hostname)&&(i[xa]=Ma);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){nt.forceAllow_=!0}static forceDisallow(){nt.forceDisallow_=!0}static isAvailable(){return nt.forceAllow_?!0:!nt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ip()&&!Cp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=F(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Qo(n),s=Da(i,jp);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[Wp]="t",i[ja]=e,i[Va]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=F(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class or{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=mp(),window[Mp+this.uniqueCallbackIdentifier]=e,window[Up+this.uniqueCallbackIdentifier]=n,this.myIFrame=or.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){V("frame writing exception"),l.stack&&V(l.stack),V(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||V("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ja]=this.myID,e[Va]=this.myPW,e[Ga]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ka+i.length<=za;){const o=this.pendingSegs.shift();i=i+"&"+Bp+s+"="+o.seg+"&"+Hp+s+"="+o.ts+"&"+$p+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(Vp)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{V("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=16384,Kp=45e3;let $n=null;typeof MozWebSocket<"u"?$n=MozWebSocket:typeof WebSocket<"u"&&($n=WebSocket);class oe{constructor(e,n,i,s,r,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=an(this.connId),this.stats_=rr(n),this.connURL=oe.connectionURL_(n,o,l,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Pa]=sr,typeof location<"u"&&location.hostname&&Ua.test(location.hostname)&&(o[xa]=Ma),n&&(o[La]=n),i&&(o[Fa]=i),s&&(o[fs]=s),r&&(o[Ba]=r),Wa(e,Ha,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Be.set("previous_websocket_failure",!0);try{let i;il(),this.mySock=new $n(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){oe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&$n!==null&&!oe.forceDisallow_}static previouslyFailed(){return Be.isInMemoryStorage||Be.get("previous_websocket_failure")===!0}markConnectionHealthy(){Be.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=xt(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=F(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Da(n,zp);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Kp))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}oe.responsesRequiredToBeHealthy=2;oe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[nt,oe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=oe&&oe.isAvailable();let i=n&&!oe.previouslyFailed();if(e.webSocketOnly&&(n||ee("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[oe];else{const s=this.transports_=[];for(const r of Vt.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Vt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=6e4,Yp=5e3,Xp=10*1024,Jp=100*1024,Fi="t",mo="d",Qp="s",yo="r",Zp="e",vo="o",Eo="a",To="n",Io="p",eg="h";class tg{constructor(e,n,i,s,r,o,l,a,h,c){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=h,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=an("c:"+this.id+":"),this.transportManager_=new Vt(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Dt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Jp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Xp?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Fi in e){const n=e[Fi];n===Eo?this.upgradeIfSecondaryHealthy_():n===yo?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===vo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=It("t",e),i=It("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Io,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Eo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:To,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=It("t",e),i=It("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=It(Fi,e);if(mo in e){const i=e[mo];if(n===eg){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===To){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Qp?this.onConnectionShutdown_(i):n===yo?this.onReset_(i):n===Zp?us("Server Error: "+i):n===vo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):us("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),sr!==i&&ee("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Dt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qp))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Dt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Yp))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Io,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Be.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){f(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Ya{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Rs()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Wn}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=32,wo=768;class k{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function A(){return new k("")}function E(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ne(t){return t.pieces_.length-t.pieceNum_}function N(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new k(t.pieces_,e)}function Xa(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ng(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ja(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Qa(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new k(e,0)}function M(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof k)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new k(n,0)}function y(t){return t.pieceNum_>=t.pieces_.length}function te(t,e){const n=E(t),i=E(e);if(n===null)return e;if(n===i)return te(N(t),N(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Za(t,e){if(Ne(t)!==Ne(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function ae(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Ne(t)>Ne(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class ig{constructor(e,n){this.errorPrefix_=n,this.parts_=Ja(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Jn(this.parts_[i]);eh(this)}}function sg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Jn(e),eh(t)}function rg(t){const e=t.parts_.pop();t.byteLength_-=Jn(e),t.parts_.length>0&&(t.byteLength_-=1)}function eh(t){if(t.byteLength_>wo)throw new Error(t.errorPrefix_+"has a key path longer than "+wo+" bytes ("+t.byteLength_+").");if(t.parts_.length>Co)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Co+") or object contains a cycle "+xe(t))}function xe(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Ya{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new lr}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=1e3,og=60*5*1e3,So=30*1e3,lg=1.3,ag=3e4,hg="server_kill",bo=3;class Ee extends qa{constructor(e,n,i,s,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Ee.nextPersistentConnectionId_++,this.log_=an("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ct,this.maxReconnectDelay_=og,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!il())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");lr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Wn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(F(r)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new As,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,h=l.s;Ee.warnOnListenWarnings_(a,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),h!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(h,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&we(e,"w")){const i=ht(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ee(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||kc(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=So)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Nc(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+F(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):us("Unrecognized action received from server: "+F(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ct,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ct,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ag&&(this.reconnectDelay_=Ct),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*lg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ee.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,i())},h=function(u){f(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(u)};this.realtime_={close:a,sendRequest:h};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?V("getToken() completed but was canceled"):(V("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,l=new tg(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,g=>{ee(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(hg)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&ee(u),a())}}}interrupt(e){V("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){V("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ar(this.interruptReasons_)&&(this.reconnectDelay_=Ct,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>ir(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new k(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){V("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=bo&&(this.reconnectDelay_=So,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){V("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=bo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Aa.replace(/\./g,"-")]=1,Rs()?e["framework.cordova"]=1:nl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Wn.getInstance().currentlyOnline();return Ar(this.interruptReasons_)&&e}}Ee.nextPersistentConnectionId_=0;Ee.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new T(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new T(ct,e),s=new T(ct,n);return this.compare(i,s)!==0}minPost(){return T.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let En;class th extends pi{static get __EMPTY_NODE(){return En}static set __EMPTY_NODE(e){En=e}compare(e,n){return _t(e.name,n.name)}isDefinedOn(e){throw dt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return T.MIN}maxPost(){return new T(Ke,En)}makePost(e,n){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new T(e,En)}toString(){return".key"}}const at=new th;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class x{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??x.RED,this.left=s??Q.EMPTY_NODE,this.right=r??Q.EMPTY_NODE}copy(e,n,i,s,r){return new x(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Q.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Q.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,x.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,x.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}x.RED=!0;x.BLACK=!1;class cg{copy(e,n,i,s,r){return this}insert(e,n,i){return new x(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Q{constructor(e,n=Q.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Q(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,x.BLACK,null,null))}remove(e){return new Q(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,x.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Tn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Tn(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Tn(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Tn(this.root_,null,this.comparator_,!0,e)}}Q.EMPTY_NODE=new cg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(t,e){return _t(t.name,e.name)}function ar(t,e){return _t(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps;function dg(t){ps=t}const nh=function(t){return typeof t=="number"?"number:"+Oa(t):"string:"+t},ih=function(t){if(t.isLeafNode()){const e=t.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&we(e,".sv"),"Priority must be a string or number.")}else f(t===ps||t.isEmpty(),"priority of unexpected type.");f(t===ps||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao;class L{constructor(e,n=L.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ih(this.priorityNode_)}static set __childrenNodeConstructor(e){Ao=e}static get __childrenNodeConstructor(){return Ao}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new L(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:L.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return y(e)?this:E(e)===".priority"?this.priorityNode_:L.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:L.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=E(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(f(i!==".priority"||Ne(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,L.__childrenNodeConstructor.EMPTY_NODE.updateChild(N(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+nh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Oa(this.value_):e+=this.value_,this.lazyHash_=Na(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===L.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof L.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=L.VALUE_TYPE_ORDER.indexOf(n),r=L.VALUE_TYPE_ORDER.indexOf(i);return f(s>=0,"Unknown leaf type: "+n),f(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}L.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sh,rh;function fg(t){sh=t}function pg(t){rh=t}class gg extends pi{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?_t(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return T.MIN}maxPost(){return new T(Ke,new L("[PRIORITY-POST]",rh))}makePost(e,n){const i=sh(e);return new T(n,new L("[PRIORITY-POST]",i))}toString(){return".priority"}}const z=new gg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=Math.log(2);class mg{constructor(e){const n=r=>parseInt(Math.log(r)/_g,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const jn=function(t,e,n,i){t.sort(e);const s=function(a,h){const c=h-a;let u,d;if(c===0)return null;if(c===1)return u=t[a],d=n?n(u):u,new x(d,u.node,x.BLACK,null,null);{const g=parseInt(c/2,10)+a,_=s(a,g),b=s(g+1,h);return u=t[g],d=n?n(u):u,new x(d,u.node,x.BLACK,_,b)}},r=function(a){let h=null,c=null,u=t.length;const d=function(_,b){const w=u-_,re=u;u-=_;const me=s(w+1,re),X=t[w],W=n?n(X):X;g(new x(W,X.node,b,null,me))},g=function(_){h?(h.left=_,h=_):(c=_,h=_)};for(let _=0;_<a.count;++_){const b=a.nextBitIsOne(),w=Math.pow(2,a.count-(_+1));b?d(w,x.BLACK):(d(w,x.BLACK),d(w,x.RED))}return c},o=new mg(t.length),l=r(o);return new Q(i||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi;const et={};class ve{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return f(et&&z,"ChildrenNode.ts has not been loaded"),Bi=Bi||new ve({".priority":et},{".priority":z}),Bi}get(e){const n=ht(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Q?n:null}hasIndex(e){return we(this.indexSet_,e.toString())}addIndex(e,n){f(e!==at,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(T.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=jn(i,e.getCompare()):l=et;const a=e.toString(),h=Object.assign({},this.indexSet_);h[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new ve(c,h)}addToIndexes(e,n){const i=An(this.indexes_,(s,r)=>{const o=ht(this.indexSet_,r);if(f(o,"Missing index implementation for "+r),s===et)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(T.Wrap);let h=a.getNext();for(;h;)h.name!==e.name&&l.push(h),h=a.getNext();return l.push(e),jn(l,o.getCompare())}else return et;else{const l=n.get(e.name);let a=s;return l&&(a=a.remove(new T(e.name,l))),a.insert(e,e.node)}});return new ve(i,this.indexSet_)}removeFromIndexes(e,n){const i=An(this.indexes_,s=>{if(s===et)return s;{const r=n.get(e.name);return r?s.remove(new T(e.name,r)):s}});return new ve(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wt;class C{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&ih(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return wt||(wt=new C(new Q(ar),null,ve.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||wt}updatePriority(e){return this.children_.isEmpty()?this:new C(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?wt:n}}getChild(e){const n=E(e);return n===null?this:this.getImmediateChild(n).getChild(N(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(f(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new T(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?wt:this.priorityNode_;return new C(s,o,r)}}updateChild(e,n){const i=E(e);if(i===null)return n;{f(E(e)!==".priority"||Ne(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(N(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(z,(o,l)=>{n[o]=l.val(e),i++,r&&C.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+nh(this.getPriority().val())+":"),this.forEachChild(z,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Na(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new T(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new T(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new T(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,T.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,T.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===cn?-1:0}withIndex(e){if(e===at||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new C(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===at||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(z),s=n.getIterator(z);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===at?null:this.indexMap_.get(e.toString())}}C.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class yg extends C{constructor(){super(new Q(ar),C.EMPTY_NODE,ve.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return C.EMPTY_NODE}isEmpty(){return!1}}const cn=new yg;Object.defineProperties(T,{MIN:{value:new T(ct,C.EMPTY_NODE)},MAX:{value:new T(Ke,cn)}});th.__EMPTY_NODE=C.EMPTY_NODE;L.__childrenNodeConstructor=C;dg(cn);pg(cn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=!0;function G(t,e=null){if(t===null)return C.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new L(n,G(e))}if(!(t instanceof Array)&&vg){const n=[];let i=!1;if(se(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=G(l);a.isEmpty()||(i=i||!a.getPriority().isEmpty(),n.push(new T(o,a)))}}),n.length===0)return C.EMPTY_NODE;const r=jn(n,ug,o=>o.name,ar);if(i){const o=jn(n,z.getCompare());return new C(r,G(e),new ve({".priority":o},{".priority":z}))}else return new C(r,G(e),ve.Default)}else{let n=C.EMPTY_NODE;return se(t,(i,s)=>{if(we(t,i)&&i.substring(0,1)!=="."){const r=G(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(G(e))}}fg(G);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg extends pi{constructor(e){super(),this.indexPath_=e,f(!y(e)&&E(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?_t(e.name,n.name):r}makePost(e,n){const i=G(e),s=C.EMPTY_NODE.updateChild(this.indexPath_,i);return new T(n,s)}maxPost(){const e=C.EMPTY_NODE.updateChild(this.indexPath_,cn);return new T(Ke,e)}toString(){return Ja(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg extends pi{compare(e,n){const i=e.node.compareTo(n.node);return i===0?_t(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return T.MIN}maxPost(){return T.MAX}makePost(e,n){const i=G(e);return new T(n,i)}toString(){return".value"}}const Ig=new Tg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t){return{type:"value",snapshotNode:t}}function wg(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Sg(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ro(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function bg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=z}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ct}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ke}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===z}copy(){const e=new hr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function No(t){const e={};if(t.isDefault())return e;let n;if(t.index_===z?n="$priority":t.index_===Ig?n="$value":t.index_===at?n="$key":(f(t.index_ instanceof Eg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=F(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=F(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+F(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=F(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+F(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ko(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==z&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends qa{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=an("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Vn.getListenId_(e,i),l={};this.listens_[o]=l;const a=No(e._queryParams);this.restRequest_(r+".json",a,(h,c)=>{let u=c;if(h===404&&(u=null,h=null),h===null&&this.onDataUpdate_(r,u,!1,i),ht(this.listens_,o)===l){let d;h?h===401?d="permission_denied":d="rest_error:"+h:d="ok",s(d,null)}})}unlisten(e,n){const i=Vn.getListenId_(e,n);delete this.listens_[i]}get(e){const n=No(e._queryParams),i=e._path.toString(),s=new As;return this.restRequest_(i+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ns(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=xt(l.responseText)}catch{ee("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,a)}else l.status!==401&&l.status!==404&&ee("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(){this.rootNode_=C.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(){return{value:null,children:new Map}}function oh(t,e,n){if(y(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=E(e);t.children.has(i)||t.children.set(i,Gn());const s=t.children.get(i);e=N(e),oh(s,e,n)}}function gs(t,e,n){t.value!==null?n(e,t.value):Rg(t,(i,s)=>{const r=new k(e.toString()+"/"+i);gs(s,r,n)})}function Rg(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&se(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=10*1e3,kg=30*1e3,Dg=5*60*1e3;class Og{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Ng(e);const i=Do+(kg-Do)*Math.random();Dt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;se(e,(s,r)=>{r>0&&we(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),Dt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Dg))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ue||(ue={}));function lh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ah(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function hh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=ue.ACK_USER_WRITE,this.source=lh()}operationForChild(e){if(y(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new k(e));return new zn(A(),n,this.revert)}}else return f(E(this.path)===e,"operationForChild called for unrelated child."),new zn(N(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=ue.OVERWRITE}operationForChild(e){return y(this.path)?new qe(this.source,A(),this.snap.getImmediateChild(e)):new qe(this.source,N(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=ue.MERGE}operationForChild(e){if(y(this.path)){const n=this.children.subtree(new k(e));return n.isEmpty()?null:n.value?new qe(this.source,A(),n.value):new Gt(this.source,A(),n)}else return f(E(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Gt(this.source,N(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(y(e))return this.isFullyInitialized()&&!this.filtered_;const n=E(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Pg(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(bg(o.childName,o.snapshotNode))}),St(t,s,"child_removed",e,i,n),St(t,s,"child_added",e,i,n),St(t,s,"child_moved",r,i,n),St(t,s,"child_changed",e,i,n),St(t,s,"value",e,i,n),s}function St(t,e,n,i,s,r){const o=i.filter(l=>l.type===n);o.sort((l,a)=>xg(t,l,a)),o.forEach(l=>{const a=Lg(t,l,r);s.forEach(h=>{h.respondsTo(l.type)&&e.push(h.createEvent(a,t.query_))})})}function Lg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function xg(t,e,n){if(e.childName==null||n.childName==null)throw dt("Should only compare child_ events.");const i=new T(e.childName,e.snapshotNode),s=new T(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(t,e){return{eventCache:t,serverCache:e}}function Ot(t,e,n,i){return ch(new cr(e,n,i),t.serverCache)}function uh(t,e,n,i){return ch(t.eventCache,new cr(e,n,i))}function _s(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ye(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hi;const Mg=()=>(Hi||(Hi=new Q(Tp)),Hi);class R{constructor(e,n=Mg()){this.value=e,this.children=n}static fromObject(e){let n=new R(null);return se(e,(i,s)=>{n=n.set(new k(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:A(),value:this.value};if(y(e))return null;{const i=E(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(N(e),n);return r!=null?{path:M(new k(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(y(e))return this;{const n=E(e),i=this.children.get(n);return i!==null?i.subtree(N(e)):new R(null)}}set(e,n){if(y(e))return new R(n,this.children);{const i=E(e),r=(this.children.get(i)||new R(null)).set(N(e),n),o=this.children.insert(i,r);return new R(this.value,o)}}remove(e){if(y(e))return this.children.isEmpty()?new R(null):new R(null,this.children);{const n=E(e),i=this.children.get(n);if(i){const s=i.remove(N(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new R(null):new R(this.value,r)}else return this}}get(e){if(y(e))return this.value;{const n=E(e),i=this.children.get(n);return i?i.get(N(e)):null}}setTree(e,n){if(y(e))return n;{const i=E(e),r=(this.children.get(i)||new R(null)).setTree(N(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new R(this.value,o)}}fold(e){return this.fold_(A(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(M(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,A(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(y(e))return null;{const r=E(e),o=this.children.get(r);return o?o.findOnPath_(N(e),M(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,A(),n)}foreachOnPath_(e,n,i){if(y(e))return this;{this.value&&i(n,this.value);const s=E(e),r=this.children.get(s);return r?r.foreachOnPath_(N(e),M(n,s),i):new R(null)}}foreach(e){this.foreach_(A(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(M(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.writeTree_=e}static empty(){return new he(new R(null))}}function Pt(t,e,n){if(y(e))return new he(new R(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=te(s,e);return r=r.updateChild(o,n),new he(t.writeTree_.set(s,r))}else{const s=new R(n),r=t.writeTree_.setTree(e,s);return new he(r)}}}function Oo(t,e,n){let i=t;return se(n,(s,r)=>{i=Pt(i,M(e,s),r)}),i}function Po(t,e){if(y(e))return he.empty();{const n=t.writeTree_.setTree(e,new R(null));return new he(n)}}function ms(t,e){return Je(t,e)!=null}function Je(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(te(n.path,e)):null}function Lo(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(z,(i,s)=>{e.push(new T(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new T(i,s.value))}),e}function Ae(t,e){if(y(e))return t;{const n=Je(t,e);return n!=null?new he(new R(n)):new he(t.writeTree_.subtree(e))}}function ys(t){return t.writeTree_.isEmpty()}function ut(t,e){return dh(A(),t.writeTree_,e)}function dh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(f(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=dh(M(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(M(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t,e){return yh(e,t)}function Ug(t,e,n,i,s){f(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Pt(t.visibleWrites,e,n)),t.lastWriteId=i}function Fg(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Bg(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);f(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Hg(l,i.path)?s=!1:ae(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return $g(t),!0;if(i.snap)t.visibleWrites=Po(t.visibleWrites,i.path);else{const l=i.children;se(l,a=>{t.visibleWrites=Po(t.visibleWrites,M(i.path,a))})}return!0}else return!1}function Hg(t,e){if(t.snap)return ae(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ae(M(t.path,n),e))return!0;return!1}function $g(t){t.visibleWrites=ph(t.allWrites,Wg,A()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Wg(t){return t.visible}function ph(t,e,n){let i=he.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let l;if(r.snap)ae(n,o)?(l=te(n,o),i=Pt(i,l,r.snap)):ae(o,n)&&(l=te(o,n),i=Pt(i,A(),r.snap.getChild(l)));else if(r.children){if(ae(n,o))l=te(n,o),i=Oo(i,l,r.children);else if(ae(o,n))if(l=te(o,n),y(l))i=Oo(i,A(),r.children);else{const a=ht(r.children,E(l));if(a){const h=a.getChild(N(l));i=Pt(i,A(),h)}}}else throw dt("WriteRecord should have .snap or .children")}}return i}function gh(t,e,n,i,s){if(!i&&!s){const r=Je(t.visibleWrites,e);if(r!=null)return r;{const o=Ae(t.visibleWrites,e);if(ys(o))return n;if(n==null&&!ms(o,A()))return null;{const l=n||C.EMPTY_NODE;return ut(o,l)}}}else{const r=Ae(t.visibleWrites,e);if(!s&&ys(r))return n;if(!s&&n==null&&!ms(r,A()))return null;{const o=function(h){return(h.visible||s)&&(!i||!~i.indexOf(h.writeId))&&(ae(h.path,e)||ae(e,h.path))},l=ph(t.allWrites,o,e),a=n||C.EMPTY_NODE;return ut(l,a)}}}function jg(t,e,n){let i=C.EMPTY_NODE;const s=Je(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(z,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Ae(t.visibleWrites,e);return n.forEachChild(z,(o,l)=>{const a=ut(Ae(r,new k(o)),l);i=i.updateImmediateChild(o,a)}),Lo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Ae(t.visibleWrites,e);return Lo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Vg(t,e,n,i,s){f(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=M(e,n);if(ms(t.visibleWrites,r))return null;{const o=Ae(t.visibleWrites,r);return ys(o)?s.getChild(n):ut(o,s.getChild(n))}}function Gg(t,e,n,i){const s=M(e,n),r=Je(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Ae(t.visibleWrites,s);return ut(o,i.getNode().getImmediateChild(n))}else return null}function zg(t,e){return Je(t.visibleWrites,e)}function Kg(t,e,n,i,s,r,o){let l;const a=Ae(t.visibleWrites,e),h=Je(a,A());if(h!=null)l=h;else if(n!=null)l=ut(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],u=o.getCompare(),d=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let g=d.getNext();for(;g&&c.length<s;)u(g,i)!==0&&c.push(g),g=d.getNext();return c}else return[]}function qg(){return{visibleWrites:he.empty(),allWrites:[],lastWriteId:-1}}function vs(t,e,n,i){return gh(t.writeTree,t.treePath,e,n,i)}function _h(t,e){return jg(t.writeTree,t.treePath,e)}function xo(t,e,n,i){return Vg(t.writeTree,t.treePath,e,n,i)}function Kn(t,e){return zg(t.writeTree,M(t.treePath,e))}function Yg(t,e,n,i,s,r){return Kg(t.writeTree,t.treePath,e,n,i,s,r)}function ur(t,e,n){return Gg(t.writeTree,t.treePath,e,n)}function mh(t,e){return yh(M(t.treePath,e),t.writeTree)}function yh(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;f(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),f(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Ro(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,Sg(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,wg(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Ro(i,e.snapshotNode,s.oldSnap));else throw dt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const vh=new Jg;class dr{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new cr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ur(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ye(this.viewCache_),r=Yg(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}function Qg(t,e){f(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Zg(t,e,n,i,s){const r=new Xg;let o,l;if(n.type===ue.OVERWRITE){const h=n;h.source.fromUser?o=Es(t,e,h.path,h.snap,i,s,r):(f(h.source.fromServer,"Unknown source."),l=h.source.tagged||e.serverCache.isFiltered()&&!y(h.path),o=qn(t,e,h.path,h.snap,i,s,l,r))}else if(n.type===ue.MERGE){const h=n;h.source.fromUser?o=t_(t,e,h.path,h.children,i,s,r):(f(h.source.fromServer,"Unknown source."),l=h.source.tagged||e.serverCache.isFiltered(),o=Ts(t,e,h.path,h.children,i,s,l,r))}else if(n.type===ue.ACK_USER_WRITE){const h=n;h.revert?o=s_(t,e,h.path,i,s,r):o=n_(t,e,h.path,h.affectedTree,i,s,r)}else if(n.type===ue.LISTEN_COMPLETE)o=i_(t,e,n.path,i,r);else throw dt("Unknown operation type: "+n.type);const a=r.getChanges();return e_(e,o,a),{viewCache:o,changes:a}}function e_(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=_s(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Cg(_s(e)))}}function Eh(t,e,n,i,s,r){const o=e.eventCache;if(Kn(i,n)!=null)return e;{let l,a;if(y(n))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=Ye(e),c=h instanceof C?h:C.EMPTY_NODE,u=_h(i,c);l=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const h=vs(i,Ye(e));l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const h=E(n);if(h===".priority"){f(Ne(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const u=xo(i,n,c,a);u!=null?l=t.filter.updatePriority(c,u):l=o.getNode()}else{const c=N(n);let u;if(o.isCompleteForChild(h)){a=e.serverCache.getNode();const d=xo(i,n,o.getNode(),a);d!=null?u=o.getNode().getImmediateChild(h).updateChild(c,d):u=o.getNode().getImmediateChild(h)}else u=ur(i,h,e.serverCache);u!=null?l=t.filter.updateChild(o.getNode(),h,u,c,s,r):l=o.getNode()}}return Ot(e,l,o.isFullyInitialized()||y(n),t.filter.filtersNodes())}}function qn(t,e,n,i,s,r,o,l){const a=e.serverCache;let h;const c=o?t.filter:t.filter.getIndexedFilter();if(y(n))h=c.updateFullNode(a.getNode(),i,null);else if(c.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,i);h=c.updateFullNode(a.getNode(),g,null)}else{const g=E(n);if(!a.isCompleteForPath(n)&&Ne(n)>1)return e;const _=N(n),w=a.getNode().getImmediateChild(g).updateChild(_,i);g===".priority"?h=c.updatePriority(a.getNode(),w):h=c.updateChild(a.getNode(),g,w,_,vh,null)}const u=uh(e,h,a.isFullyInitialized()||y(n),c.filtersNodes()),d=new dr(s,u,r);return Eh(t,u,n,s,d,l)}function Es(t,e,n,i,s,r,o){const l=e.eventCache;let a,h;const c=new dr(s,e,r);if(y(n))h=t.filter.updateFullNode(e.eventCache.getNode(),i,o),a=Ot(e,h,!0,t.filter.filtersNodes());else{const u=E(n);if(u===".priority")h=t.filter.updatePriority(e.eventCache.getNode(),i),a=Ot(e,h,l.isFullyInitialized(),l.isFiltered());else{const d=N(n),g=l.getNode().getImmediateChild(u);let _;if(y(d))_=i;else{const b=c.getCompleteChild(u);b!=null?Xa(d)===".priority"&&b.getChild(Qa(d)).isEmpty()?_=b:_=b.updateChild(d,i):_=C.EMPTY_NODE}if(g.equals(_))a=e;else{const b=t.filter.updateChild(l.getNode(),u,_,d,c,o);a=Ot(e,b,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Mo(t,e){return t.eventCache.isCompleteForChild(e)}function t_(t,e,n,i,s,r,o){let l=e;return i.foreach((a,h)=>{const c=M(n,a);Mo(e,E(c))&&(l=Es(t,l,c,h,s,r,o))}),i.foreach((a,h)=>{const c=M(n,a);Mo(e,E(c))||(l=Es(t,l,c,h,s,r,o))}),l}function Uo(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Ts(t,e,n,i,s,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,h;y(n)?h=i:h=new R(null).setTree(n,i);const c=e.serverCache.getNode();return h.children.inorderTraversal((u,d)=>{if(c.hasChild(u)){const g=e.serverCache.getNode().getImmediateChild(u),_=Uo(t,g,d);a=qn(t,a,new k(u),_,s,r,o,l)}}),h.children.inorderTraversal((u,d)=>{const g=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!c.hasChild(u)&&!g){const _=e.serverCache.getNode().getImmediateChild(u),b=Uo(t,_,d);a=qn(t,a,new k(u),b,s,r,o,l)}}),a}function n_(t,e,n,i,s,r,o){if(Kn(s,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(i.value!=null){if(y(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return qn(t,e,n,a.getNode().getChild(n),s,r,l,o);if(y(n)){let h=new R(null);return a.getNode().forEachChild(at,(c,u)=>{h=h.set(new k(c),u)}),Ts(t,e,n,h,s,r,l,o)}else return e}else{let h=new R(null);return i.foreach((c,u)=>{const d=M(n,c);a.isCompleteForPath(d)&&(h=h.set(c,a.getNode().getChild(d)))}),Ts(t,e,n,h,s,r,l,o)}}function i_(t,e,n,i,s){const r=e.serverCache,o=uh(e,r.getNode(),r.isFullyInitialized()||y(n),r.isFiltered());return Eh(t,o,n,i,vh,s)}function s_(t,e,n,i,s,r){let o;if(Kn(i,n)!=null)return e;{const l=new dr(i,e,s),a=e.eventCache.getNode();let h;if(y(n)||E(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=vs(i,Ye(e));else{const u=e.serverCache.getNode();f(u instanceof C,"serverChildren would be complete if leaf node"),c=_h(i,u)}c=c,h=t.filter.updateFullNode(a,c,r)}else{const c=E(n);let u=ur(i,c,e.serverCache);u==null&&e.serverCache.isCompleteForChild(c)&&(u=a.getImmediateChild(c)),u!=null?h=t.filter.updateChild(a,c,u,N(n),l,r):e.eventCache.getNode().hasChild(c)?h=t.filter.updateChild(a,c,C.EMPTY_NODE,N(n),l,r):h=a,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=vs(i,Ye(e)),o.isLeafNode()&&(h=t.filter.updateFullNode(h,o,r)))}return o=e.serverCache.isFullyInitialized()||Kn(i,A())!=null,Ot(e,h,o,t.filter.filtersNodes())}}function r_(t,e){const n=Ye(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!y(e)&&!n.getImmediateChild(E(e)).isEmpty())?n.getChild(e):null}function Fo(t,e,n,i){e.type===ue.MERGE&&e.source.queryId!==null&&(f(Ye(t.viewCache_),"We should always have a full cache before handling merges"),f(_s(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=Zg(t.processor_,s,e,n,i);return Qg(t.processor_,r.viewCache),f(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,o_(t,r.changes,r.viewCache.eventCache.getNode(),null)}function o_(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return Pg(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bo;function l_(t){f(!Bo,"__referenceConstructor has already been defined"),Bo=t}function fr(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return f(r!=null,"SyncTree gave us an op for an invalid query."),Fo(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Fo(o,e,n,i));return r}}function pr(t,e){let n=null;for(const i of t.views.values())n=n||r_(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ho;function a_(t){f(!Ho,"__referenceConstructor has already been defined"),Ho=t}class $o{constructor(e){this.listenProvider_=e,this.syncPointTree_=new R(null),this.pendingWriteTree_=qg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function h_(t,e,n,i,s){return Ug(t.pendingWriteTree_,e,n,i,s),s?_i(t,new qe(lh(),e,n)):[]}function it(t,e,n=!1){const i=Fg(t.pendingWriteTree_,e);if(Bg(t.pendingWriteTree_,e)){let r=new R(null);return i.snap!=null?r=r.set(A(),!0):se(i.children,o=>{r=r.set(new k(o),!0)}),_i(t,new zn(i.path,r,n))}else return[]}function gi(t,e,n){return _i(t,new qe(ah(),e,n))}function c_(t,e,n){const i=R.fromObject(n);return _i(t,new Gt(ah(),e,i))}function u_(t,e,n,i){const s=wh(t,i);if(s!=null){const r=Sh(s),o=r.path,l=r.queryId,a=te(o,e),h=new qe(hh(l),a,n);return bh(t,o,h)}else return[]}function d_(t,e,n,i){const s=wh(t,i);if(s){const r=Sh(s),o=r.path,l=r.queryId,a=te(o,e),h=R.fromObject(n),c=new Gt(hh(l),a,h);return bh(t,o,c)}else return[]}function Th(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=te(o,e),h=pr(l,a);if(h)return h});return gh(s,e,r,n,!0)}function _i(t,e){return Ih(e,t.syncPointTree_,null,fh(t.pendingWriteTree_,A()))}function Ih(t,e,n,i){if(y(t.path))return Ch(t,e,n,i);{const s=e.get(A());n==null&&s!=null&&(n=pr(s,A()));let r=[];const o=E(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const h=n?n.getImmediateChild(o):null,c=mh(i,o);r=r.concat(Ih(l,a,h,c))}return s&&(r=r.concat(fr(s,t,i,n))),r}}function Ch(t,e,n,i){const s=e.get(A());n==null&&s!=null&&(n=pr(s,A()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,h=mh(i,o),c=t.operationForChild(o);c&&(r=r.concat(Ch(c,l,a,h)))}),s&&(r=r.concat(fr(s,t,i,n))),r}function wh(t,e){return t.tagToQueryMap.get(e)}function Sh(t){const e=t.indexOf("$");return f(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new k(t.substr(0,e))}}function bh(t,e,n){const i=t.syncPointTree_.get(e);f(i,"Missing sync point for query tag that we're tracking");const s=fh(t.pendingWriteTree_,e);return fr(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new gr(n)}node(){return this.node_}}class _r{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=M(this.path_,e);return new _r(this.syncTree_,n)}node(){return Th(this.syncTree_,this.path_)}}const f_=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Wo=function(t,e,n){if(!t||typeof t!="object")return t;if(f(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return p_(t[".sv"],e,n);if(typeof t[".sv"]=="object")return g_(t[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},p_=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:f(!1,"Unexpected server value: "+t)}},g_=function(t,e,n){t.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&f(!1,"Unexpected increment value: "+i);const s=e.node();if(f(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},__=function(t,e,n,i){return mr(e,new _r(n,t),i)},m_=function(t,e,n){return mr(t,new gr(e),n)};function mr(t,e,n){const i=t.getPriority().val(),s=Wo(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Wo(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new L(l,G(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new L(s))),o.forEachChild(z,(l,a)=>{const h=mr(a,e.getImmediateChild(l),n);h!==a&&(r=r.updateImmediateChild(l,h))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function vr(t,e){let n=e instanceof k?e:new k(e),i=t,s=E(n);for(;s!==null;){const r=ht(i.node.children,s)||{children:{},childCount:0};i=new yr(s,i,r),n=N(n),s=E(n)}return i}function mt(t){return t.node.value}function Ah(t,e){t.node.value=e,Is(t)}function Rh(t){return t.node.childCount>0}function y_(t){return mt(t)===void 0&&!Rh(t)}function mi(t,e){se(t.node.children,(n,i)=>{e(new yr(n,t,i))})}function Nh(t,e,n,i){n&&!i&&e(t),mi(t,s=>{Nh(s,e,!0,i)}),n&&i&&e(t)}function v_(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function un(t){return new k(t.parent===null?t.name:un(t.parent)+"/"+t.name)}function Is(t){t.parent!==null&&E_(t.parent,t.name,t)}function E_(t,e,n){const i=y_(n),s=we(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Is(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Is(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=/[\[\].#$\/\u0000-\u001F\u007F]/,I_=/[\[\].#$\u0000-\u001F\u007F]/,$i=10*1024*1024,kh=function(t){return typeof t=="string"&&t.length!==0&&!T_.test(t)},C_=function(t){return typeof t=="string"&&t.length!==0&&!I_.test(t)},w_=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),C_(t)},Dh=function(t,e,n){const i=n instanceof k?new ig(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+xe(i));if(typeof e=="function")throw new Error(t+"contains a function "+xe(i)+" with contents = "+e.toString());if(ka(e))throw new Error(t+"contains "+e.toString()+" "+xe(i));if(typeof e=="string"&&e.length>$i/3&&Jn(e)>$i)throw new Error(t+"contains a string greater than "+$i+" utf8 bytes "+xe(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(se(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!kh(o)))throw new Error(t+" contains an invalid key ("+o+") "+xe(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);sg(i,o),Dh(t,l,i),rg(i)}),s&&r)throw new Error(t+' contains ".value" child '+xe(i)+" in addition to actual children.")}},S_=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!kh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!w_(n))throw new Error(xc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function A_(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Za(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Qe(t,e,n){A_(t,n),R_(t,i=>ae(i,e)||ae(e,i))}function R_(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(N_(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function N_(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Ve&&V("event: "+n.toString()),hn(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="repo_interrupt",D_=25;class O_{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new b_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Gn(),this.transactionQueueTree_=new yr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function P_(t,e,n){if(t.stats_=rr(t.repoInfo_),t.forceRestClient_||Ap())t.server_=new Vn(t.repoInfo_,(i,s,r,o)=>{jo(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Vo(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{F(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Ee(t.repoInfo_,e,(i,s,r,o)=>{jo(t,i,s,r,o)},i=>{Vo(t,i)},i=>{x_(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Pp(t.repoInfo_,()=>new Og(t.stats_,t.server_)),t.infoData_=new Ag,t.infoSyncTree_=new $o({startListening:(i,s,r,o)=>{let l=[];const a=t.infoData_.getNode(i._path);return a.isEmpty()||(l=gi(t.infoSyncTree_,i._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Er(t,"connected",!1),t.serverSyncTree_=new $o({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(l,a)=>{const h=o(l,a);Qe(t.eventQueue_,i._path,h)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function L_(t){const n=t.infoData_.getNode(new k(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Oh(t){return f_({timestamp:L_(t)})}function jo(t,e,n,i,s){t.dataUpdateCount++;const r=new k(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const a=An(n,h=>G(h));o=d_(t.serverSyncTree_,r,a,s)}else{const a=G(n);o=u_(t.serverSyncTree_,r,a,s)}else if(i){const a=An(n,h=>G(h));o=c_(t.serverSyncTree_,r,a)}else{const a=G(n);o=gi(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Ir(t,r)),Qe(t.eventQueue_,l,o)}function Vo(t,e){Er(t,"connected",e),e===!1&&U_(t)}function x_(t,e){se(e,(n,i)=>{Er(t,n,i)})}function Er(t,e,n){const i=new k("/.info/"+e),s=G(n);t.infoData_.updateSnapshot(i,s);const r=gi(t.infoSyncTree_,i,s);Qe(t.eventQueue_,i,r)}function M_(t){return t.nextWriteId_++}function U_(t){Ph(t,"onDisconnectEvents");const e=Oh(t),n=Gn();gs(t.onDisconnect_,A(),(s,r)=>{const o=__(s,r,t.serverSyncTree_,e);oh(n,s,o)});let i=[];gs(n,A(),(s,r)=>{i=i.concat(gi(t.serverSyncTree_,s,r));const o=$_(t,s);Ir(t,o)}),t.onDisconnect_=Gn(),Qe(t.eventQueue_,A(),i)}function F_(t){t.persistentConnection_&&t.persistentConnection_.interrupt(k_)}function Ph(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),V(n,...e)}function Lh(t,e,n){return Th(t.serverSyncTree_,e,n)||C.EMPTY_NODE}function Tr(t,e=t.transactionQueueTree_){if(e||yi(t,e),mt(e)){const n=Mh(t,e);f(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&B_(t,un(e),n)}else Rh(e)&&mi(e,n=>{Tr(t,n)})}function B_(t,e,n){const i=n.map(h=>h.currentWriteId),s=Lh(t,e,i);let r=s;const o=s.hash();for(let h=0;h<n.length;h++){const c=n[h];f(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const u=te(e,c.path);r=r.updateChild(u,c.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,h=>{Ph(t,"transaction put response",{path:a.toString(),status:h});let c=[];if(h==="ok"){const u=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(it(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&u.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();yi(t,vr(t.transactionQueueTree_,e)),Tr(t,t.transactionQueueTree_),Qe(t.eventQueue_,e,c);for(let d=0;d<u.length;d++)hn(u[d])}else{if(h==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{ee("transaction at "+a.toString()+" failed: "+h);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=h}Ir(t,e)}},o)}function Ir(t,e){const n=xh(t,e),i=un(n),s=Mh(t,n);return H_(t,s,i),i}function H_(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],h=te(n,a.path);let c=!1,u;if(f(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,u=a.abortReason,s=s.concat(it(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=D_)c=!0,u="maxretry",s=s.concat(it(t.serverSyncTree_,a.currentWriteId,!0));else{const d=Lh(t,a.path,o);a.currentInputSnapshot=d;const g=e[l].update(d.val());if(g!==void 0){Dh("transaction failed: Data returned ",g,a.path);let _=G(g);typeof g=="object"&&g!=null&&we(g,".priority")||(_=_.updatePriority(d.getPriority()));const w=a.currentWriteId,re=Oh(t),me=m_(_,d,re);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=me,a.currentWriteId=M_(t),o.splice(o.indexOf(w),1),s=s.concat(h_(t.serverSyncTree_,a.path,me,a.currentWriteId,a.applyLocally)),s=s.concat(it(t.serverSyncTree_,w,!0))}else c=!0,u="nodata",s=s.concat(it(t.serverSyncTree_,a.currentWriteId,!0))}Qe(t.eventQueue_,n,s),s=[],c&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(u==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(u),!1,null))))}yi(t,t.transactionQueueTree_);for(let l=0;l<i.length;l++)hn(i[l]);Tr(t,t.transactionQueueTree_)}function xh(t,e){let n,i=t.transactionQueueTree_;for(n=E(e);n!==null&&mt(i)===void 0;)i=vr(i,n),e=N(e),n=E(e);return i}function Mh(t,e){const n=[];return Uh(t,e,n),n.sort((i,s)=>i.order-s.order),n}function Uh(t,e,n){const i=mt(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);mi(e,s=>{Uh(t,s,n)})}function yi(t,e){const n=mt(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,Ah(e,n.length>0?n:void 0)}mi(e,i=>{yi(t,i)})}function $_(t,e){const n=un(xh(t,e)),i=vr(t.transactionQueueTree_,e);return v_(i,s=>{Wi(t,s)}),Wi(t,i),Nh(i,s=>{Wi(t,s)}),n}function Wi(t,e){const n=mt(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(f(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(f(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(it(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ah(e,void 0):n.length=r+1,Qe(t.eventQueue_,un(e),s);for(let o=0;o<i.length;o++)hn(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function j_(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ee(`Invalid query segment '${n}' in query '${t}'`)}return e}const Go=function(t,e){const n=V_(t),i=n.namespace;n.domain==="firebase.com"&&ze(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&ze("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||vp();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new kp(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new k(n.pathString)}},V_=function(t){let e="",n="",i="",s="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let h=t.indexOf("//");h>=0&&(l=t.substring(0,h-1),t=t.substring(h+2));let c=t.indexOf("/");c===-1&&(c=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(c,u)),c<u&&(s=W_(t.substring(c,u)));const d=j_(t.substring(Math.min(t.length,u)));h=e.indexOf(":"),h>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(h+1),10)):h=e.length;const g=e.slice(0,h);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:a,domain:n,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return y(this._path)?null:Xa(this._path)}get ref(){return new yt(this._repo,this._path)}get _queryIdentifier(){const e=ko(this._queryParams),n=ir(e);return n==="{}"?"default":n}get _queryObject(){return ko(this._queryParams)}isEqual(e){if(e=Yt(e),!(e instanceof Cr))return!1;const n=this._repo===e._repo,i=Za(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+ng(this._path)}}class yt extends Cr{constructor(e,n){super(e,n,new hr,!1)}get parent(){const e=Qa(this._path);return e===null?null:new yt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}l_(yt);a_(yt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_="FIREBASE_DATABASE_EMULATOR_HOST",Cs={};let z_=!1;function K_(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||ze("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),V("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Go(r,s),l=o.repoInfo,a,h;typeof process<"u"&&process.env&&(h=process.env[G_]),h?(a=!0,r=`http://${h}?ns=${l.namespace}`,o=Go(r,s),l=o.repoInfo):a=!o.repoInfo.secure;const c=s&&a?new ds(ds.OWNER):new Np(t.name,t.options,e);S_("Invalid Firebase Database URL",o),y(o.path)||ze("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Y_(l,t,c,new Rp(t.name,n));return new X_(u,t)}function q_(t,e){const n=Cs[e];(!n||n[t.key]!==t)&&ze(`Database ${e}(${t.repoInfo_}) has already been deleted.`),F_(t),delete n[t.key]}function Y_(t,e,n,i){let s=Cs[e.name];s||(s={},Cs[e.name]=s);let r=s[t.toURLString()];return r&&ze("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new O_(t,z_,n,i),s[t.toURLString()]=r,r}class X_{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(P_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new yt(this._repo,A())),this._rootInternal}_delete(){return this._rootInternal!==null&&(q_(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ze("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(t){pp(Xt),Re(new Te("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return K_(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),ne(uo,fo,t),ne(uo,fo,"esm2017")}Ee.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ee.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};J_();var Q_=qh(),Z_=t=>{const e=ll(t.config);return Vi(Q_.Provider,{value:e,get children(){return t.children}})};const Fh={apiKey:"AIzaSyC9UKVbK5jp1XoV7XTAiRjHi6GUCrOxOxw",authDomain:"magpie-ecb0a.firebaseapp.com",projectId:"magpie-ecb0a",storageBucket:"magpie-ecb0a.appspot.com",messagingSenderId:"106194819654",appId:"1:106194819654:web:c2b1006c7124b864348847"};ll(Fh);const Bh=document.getElementById("root");if(!(Bh instanceof HTMLElement))throw new Error("Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?");ic(()=>Vi(Z_,{config:Fh,get children(){return Vi(fc,{})}}),Bh);
