var t={};
/**
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
 */const e=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296==(64512&s)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++r)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},n={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const e=t[s],i=s+1<t.length,o=i?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=e>>2,h=(3&e)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(l=64)),r.push(n[u],n[h],n[l],n[d])}return r.join("")},encodeString(t,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(t):this.encodeByteArray(e(t),n)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=((7&s)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(i>>10)),e[r++]=String.fromCharCode(56320+(1023&i))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==a||null==c)throw new r;const u=e<<2|o>>4;if(s.push(u),64!==a){const t=o<<4&240|a>>2;if(s.push(t),64!==c){const t=a<<6&192|c;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class r extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const s=function(t){return function(t){const r=e(t);return n.encodeByteArray(r,!0)}(t).replace(/\./g,"")},i=function(t){try{return n.decodeString(t,!0)}catch(e){}return null};
/**
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
 */
const o=()=>
/**
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
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,a=()=>{try{return o()||(()=>{if("undefined"==typeof process)return;const e=t.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&i(t[1]);return e&&JSON.parse(e)})()}catch(e){return}},c=t=>{var e,n;return null==(n=null==(e=a())?void 0:e.emulatorHosts)?void 0:n[t]},u=()=>{var t;return null==(t=a())?void 0:t.config},h=t=>{var e;return null==(e=a())?void 0:e[`_${t}`]};
/**
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
 */
class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2025 Google LLC
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
 */function d(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function f(t){return(await fetch(t,{credentials:"include"})).ok}
/**
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
 */const p={};let g=!1;function m(t,e){if("undefined"==typeof window||"undefined"==typeof document||!d(window.location.host)||p[t]===e||p[t]||g)return;function n(t){return`__firebase__banner__${t}`}p[t]=e;const r="__firebase__banner",s=function(){const t={prod:[],emulator:[]};for(const e of Object.keys(p))p[e]?t.emulator.push(e):t.prod.push(e);return t}().prod.length>0;function i(){const t=document.createElement("span");return t.style.cursor="pointer",t.style.marginLeft="16px",t.style.fontSize="24px",t.innerHTML=" &times;",t.onclick=()=>{g=!0,function(){const t=document.getElementById(r);t&&t.remove()}()},t}function o(){const t=function(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}(r),e=n("text"),o=document.getElementById(e)||document.createElement("span"),a=n("learnmore"),c=document.getElementById(a)||document.createElement("a"),u=n("preprendIcon"),h=document.getElementById(u)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(t.created){const e=t.element;!function(t){t.style.display="flex",t.style.background="#7faaf0",t.style.position="fixed",t.style.bottom="5px",t.style.left="5px",t.style.padding=".5em",t.style.borderRadius="5px",t.style.alignItems="center"}(e),function(t,e){t.setAttribute("id",e),t.innerText="Learn more",t.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",t.setAttribute("target","__blank"),t.style.paddingLeft="5px",t.style.textDecoration="underline"}(c,a);const n=i();!function(t,e){t.setAttribute("width","24"),t.setAttribute("id",e),t.setAttribute("height","24"),t.setAttribute("viewBox","0 0 24 24"),t.setAttribute("fill","none"),t.style.marginLeft="-6px"}(h,u),e.append(h,o,c,n),document.body.appendChild(e)}s?(o.innerText="Preview backend disconnected.",h.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(h.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',o.innerText="Preview backend running in this workspace."),o.setAttribute("id",e)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",o):o()}
/**
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
 */function y(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function v(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(y())}function w(){return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function b(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function E(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function _(){const t=y();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function T(){return!function(){var t;const e=null==(t=a())?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(n){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}class S extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,I.prototype.create)}}class I{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],i=s?function(t,e){return t.replace(C,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new S(r,o,n)}}const C=/\{\$([^}]+)}/g;function A(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function D(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const n=t[s],i=e[s];if(N(n)&&N(i)){if(!D(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function N(t){return null!==t&&"object"==typeof t}
/**
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
 */function k(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function R(t){const e={};return t.replace(/^\?/,"").split("&").forEach(t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}}),e}function x(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function O(t,e){const n=new L(t,e);return n.subscribe.bind(n)}class L{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=M),void 0===r.error&&(r.error=M),void 0===r.complete&&(r.complete=M);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}}),this.observers.push(r),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!=typeof console&&console.error}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function M(){}
/**
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
 */function P(t){return t&&t._delegate?t._delegate:t}class V{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
 */const F="[DEFAULT]";
/**
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
 */class U{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new l;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),n=(null==t?void 0:t.optional)??!1;if(!this.isInitialized(e)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:e})}catch(r){if(n)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:F})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=F){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=F){return this.instances.has(t)}getOptions(t=F){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,i]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(s)&&i.resolve(r)}return r}onInit(t,e){const n=this.normalizeInstanceIdentifier(e),r=this.onInitCallbacks.get(n)??new Set;r.add(t),this.onInitCallbacks.set(n,r);const s=this.instances.get(n);return s&&t(s,n),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,r===F?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}var r;return n||null}normalizeInstanceIdentifier(t=F){return this.component?this.component.multipleInstances?t:F:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class B{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new U(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
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
 */var j,q;(q=j||(j={}))[q.DEBUG=0]="DEBUG",q[q.VERBOSE=1]="VERBOSE",q[q.INFO=2]="INFO",q[q.WARN=3]="WARN",q[q.ERROR=4]="ERROR",q[q.SILENT=5]="SILENT";const $={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},z=j.INFO,G={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},H=(t,e,...n)=>{if(e<t.logLevel)return;(new Date).toISOString();if(!G[e])throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class K{constructor(t){this.name=t,this._logLevel=z,this._logHandler=H,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in j))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?$[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...t),this._logHandler(this,j.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...t),this._logHandler(this,j.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,j.INFO,...t),this._logHandler(this,j.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,j.WARN,...t),this._logHandler(this,j.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...t),this._logHandler(this,j.ERROR,...t)}}let Q,W;const X=new WeakMap,Y=new WeakMap,J=new WeakMap,Z=new WeakMap,tt=new WeakMap;let et={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return Y.get(t);if("objectStoreNames"===e)return t.objectStoreNames||J.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return st(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function nt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(W||(W=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(it(this),e),st(X.get(this))}:function(...e){return st(t.apply(it(this),e))}:function(e,...n){const r=t.call(it(this),e,...n);return J.set(r,e.sort?e.sort():[e]),st(r)}}function rt(t){return"function"==typeof t?nt(t):(t instanceof IDBTransaction&&function(t){if(Y.has(t))return;const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)});Y.set(t,e)}(t),e=t,(Q||(Q=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(t=>e instanceof t)?new Proxy(t,et):t);var e}function st(t){if(t instanceof IDBRequest)return function(t){const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{e(st(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",i)});return e.then(e=>{e instanceof IDBCursor&&X.set(e,t)}).catch(()=>{}),tt.set(e,t),e}(t);if(Z.has(t))return Z.get(t);const e=rt(t);return e!==t&&(Z.set(t,e),tt.set(e,t)),e}const it=t=>tt.get(t);const ot=["get","getKey","getAll","getAllKeys","count"],at=["put","add","delete","clear"],ct=new Map;function ut(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(ct.get(e))return ct.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=at.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!ot.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&i.done]))[0]};return ct.set(e,i),i}et=(t=>({...t,get:(e,n,r)=>ut(e,n)||t.get(e,n,r),has:(e,n)=>!!ut(e,n)||t.has(e,n)}))(et);
/**
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
 */
class ht{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}const lt="@firebase/app",dt="0.14.6",ft=new K("@firebase/app"),pt="@firebase/app-compat",gt="@firebase/analytics-compat",mt="@firebase/analytics",yt="@firebase/app-check-compat",vt="@firebase/app-check",wt="@firebase/auth",bt="@firebase/auth-compat",Et="@firebase/database",_t="@firebase/data-connect",Tt="@firebase/database-compat",St="@firebase/functions",It="@firebase/functions-compat",Ct="@firebase/installations",At="@firebase/installations-compat",Dt="@firebase/messaging",Nt="@firebase/messaging-compat",kt="@firebase/performance",Rt="@firebase/performance-compat",xt="@firebase/remote-config",Ot="@firebase/remote-config-compat",Lt="@firebase/storage",Mt="@firebase/storage-compat",Pt="@firebase/firestore",Vt="@firebase/ai",Ft="@firebase/firestore-compat",Ut="firebase",Bt="[DEFAULT]",jt={[lt]:"fire-core",[pt]:"fire-core-compat",[mt]:"fire-analytics",[gt]:"fire-analytics-compat",[vt]:"fire-app-check",[yt]:"fire-app-check-compat",[wt]:"fire-auth",[bt]:"fire-auth-compat",[Et]:"fire-rtdb",[_t]:"fire-data-connect",[Tt]:"fire-rtdb-compat",[St]:"fire-fn",[It]:"fire-fn-compat",[Ct]:"fire-iid",[At]:"fire-iid-compat",[Dt]:"fire-fcm",[Nt]:"fire-fcm-compat",[kt]:"fire-perf",[Rt]:"fire-perf-compat",[xt]:"fire-rc",[Ot]:"fire-rc-compat",[Lt]:"fire-gcs",[Mt]:"fire-gcs-compat",[Pt]:"fire-fst",[Ft]:"fire-fst-compat",[Vt]:"fire-vertex","fire-js":"fire-js",[Ut]:"fire-js-all"},qt=new Map,$t=new Map,zt=new Map;function Gt(t,e){try{t.container.addComponent(e)}catch(n){ft.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ht(t){const e=t.name;if(zt.has(e))return ft.debug(`There were multiple attempts to register component ${e}.`),!1;zt.set(e,t);for(const n of qt.values())Gt(n,t);for(const n of $t.values())Gt(n,t);return!0}function Kt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qt(t){return null!=t&&void 0!==t.settings}
/**
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
 */const Wt=new I("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
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
 */
class Xt{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new V("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}
/**
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
 */const Yt="12.6.0";function Jt(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const r={name:Bt,automaticDataCollectionEnabled:!0,...e},s=r.name;if("string"!=typeof s||!s)throw Wt.create("bad-app-name",{appName:String(s)});if(n||(n=u()),!n)throw Wt.create("no-options");const i=qt.get(s);if(i){if(D(n,i.options)&&D(r,i.config))return i;throw Wt.create("duplicate-app",{appName:s})}const o=new B(s);for(const c of zt.values())o.addComponent(c);const a=new Xt(n,r,o);return qt.set(s,a),a}function Zt(t=Bt){const e=qt.get(t);if(!e&&t===Bt&&u())return Jt();if(!e)throw Wt.create("no-app",{appName:t});return e}function te(t,e,n){let r=jt[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&t.push("and"),i&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void ft.warn(t.join(" "))}Ht(new V(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}
/**
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
 */const ee="firebase-heartbeat-store";let ne=null;function re(){return ne||(ne=function(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=st(o);return r&&o.addEventListener("upgradeneeded",t=>{r(st(o.result),t.oldVersion,t.newVersion,st(o.transaction),t)}),n&&o.addEventListener("blocked",t=>n(t.oldVersion,t.newVersion,t)),a.then(t=>{i&&t.addEventListener("close",()=>i()),s&&t.addEventListener("versionchange",t=>s(t.oldVersion,t.newVersion,t))}).catch(()=>{}),a}("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)try{t.createObjectStore(ee)}catch(n){}}}).catch(t=>{throw Wt.create("idb-open",{originalErrorMessage:t.message})})),ne}async function se(t,e){try{const n=(await re()).transaction(ee,"readwrite"),r=n.objectStore(ee);await r.put(e,ie(t)),await n.done}catch(n){if(n instanceof S)ft.warn(n.message);else{const t=Wt.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});ft.warn(t.message)}}}function ie(t){return`${t.name}!${t.options.appId}`}
/**
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
 */class oe{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ce(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){var t,e;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ae();if(null==(null==(t=this._heartbeatsCache)?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null==(e=this._heartbeatsCache)?void 0:e.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(t=>t.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>30){const t=function(t){if(0===t.length)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}
/**
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
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(t,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){ft.warn(n)}}async getHeartbeatsHeader(){var t;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null==(t=this._heartbeatsCache)?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=ae(),{heartbeatsToSend:n,unsentEntries:r}=function(t,e=1024){const n=[];let r=t.slice();for(const s of t){const t=n.find(t=>t.agent===s.agent);if(t){if(t.dates.push(s.date),ue(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ue(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=s(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return ft.warn(e),""}}}function ae(){return(new Date).toISOString().substring(0,10)}class ce{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null==(t=s.error)?void 0:t.message)||"")}}catch(n){e(n)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=(await re()).transaction(ee),n=await e.objectStore(ee).get(ie(t));return await e.done,n}catch(e){if(e instanceof S)ft.warn(e.message);else{const t=Wt.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});ft.warn(t.message)}}}(this.app);return(null==t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const e=await this.read();return se(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){if(await this._canUseIndexedDBPromise){const e=await this.read();return se(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:[...e.heartbeats,...t.heartbeats]})}}}function ue(t){return s(JSON.stringify({version:2,heartbeats:t})).length}var he;he="",Ht(new V("platform-logger",t=>new ht(t),"PRIVATE")),Ht(new V("heartbeat",t=>new oe(t),"PRIVATE")),te(lt,dt,he),te(lt,dt,"esm2020"),te("fire-js","");var le,de,fe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var t;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function e(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function n(t,e,n){n||(n=0);const r=Array(16);if("string"==typeof e)for(var s=0;s<16;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;s<16;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];let i,o=t.g[3];i=e+(o^n&(s^o))+r[0]+3614090360&4294967295,i=o+(s^(e=n+(i<<7&4294967295|i>>>25))&(n^s))+r[1]+3905402710&4294967295,o=e+(i<<12&4294967295|i>>>20),i=s+(n^o&(e^n))+r[2]+606105819&4294967295,i=n+(e^(s=o+(i<<17&4294967295|i>>>15))&(o^e))+r[3]+3250441966&4294967295,i=e+(o^(n=s+(i<<22&4294967295|i>>>10))&(s^o))+r[4]+4118548399&4294967295,i=o+(s^(e=n+(i<<7&4294967295|i>>>25))&(n^s))+r[5]+1200080426&4294967295,o=e+(i<<12&4294967295|i>>>20),i=s+(n^o&(e^n))+r[6]+2821735955&4294967295,i=n+(e^(s=o+(i<<17&4294967295|i>>>15))&(o^e))+r[7]+4249261313&4294967295,i=e+(o^(n=s+(i<<22&4294967295|i>>>10))&(s^o))+r[8]+1770035416&4294967295,i=o+(s^(e=n+(i<<7&4294967295|i>>>25))&(n^s))+r[9]+2336552879&4294967295,o=e+(i<<12&4294967295|i>>>20),i=s+(n^o&(e^n))+r[10]+4294925233&4294967295,i=n+(e^(s=o+(i<<17&4294967295|i>>>15))&(o^e))+r[11]+2304563134&4294967295,i=e+(o^(n=s+(i<<22&4294967295|i>>>10))&(s^o))+r[12]+1804603682&4294967295,i=o+(s^(e=n+(i<<7&4294967295|i>>>25))&(n^s))+r[13]+4254626195&4294967295,o=e+(i<<12&4294967295|i>>>20),i=s+(n^o&(e^n))+r[14]+2792965006&4294967295,i=n+(e^(s=o+(i<<17&4294967295|i>>>15))&(o^e))+r[15]+1236535329&4294967295,i=e+(s^o&((n=s+(i<<22&4294967295|i>>>10))^s))+r[1]+4129170786&4294967295,i=o+(n^s&((e=n+(i<<5&4294967295|i>>>27))^n))+r[6]+3225465664&4294967295,o=e+(i<<9&4294967295|i>>>23),i=s+(e^n&(o^e))+r[11]+643717713&4294967295,i=n+(o^e&((s=o+(i<<14&4294967295|i>>>18))^o))+r[0]+3921069994&4294967295,i=e+(s^o&((n=s+(i<<20&4294967295|i>>>12))^s))+r[5]+3593408605&4294967295,i=o+(n^s&((e=n+(i<<5&4294967295|i>>>27))^n))+r[10]+38016083&4294967295,o=e+(i<<9&4294967295|i>>>23),i=s+(e^n&(o^e))+r[15]+3634488961&4294967295,i=n+(o^e&((s=o+(i<<14&4294967295|i>>>18))^o))+r[4]+3889429448&4294967295,i=e+(s^o&((n=s+(i<<20&4294967295|i>>>12))^s))+r[9]+568446438&4294967295,i=o+(n^s&((e=n+(i<<5&4294967295|i>>>27))^n))+r[14]+3275163606&4294967295,o=e+(i<<9&4294967295|i>>>23),i=s+(e^n&(o^e))+r[3]+4107603335&4294967295,i=n+(o^e&((s=o+(i<<14&4294967295|i>>>18))^o))+r[8]+1163531501&4294967295,i=e+(s^o&((n=s+(i<<20&4294967295|i>>>12))^s))+r[13]+2850285829&4294967295,i=o+(n^s&((e=n+(i<<5&4294967295|i>>>27))^n))+r[2]+4243563512&4294967295,o=e+(i<<9&4294967295|i>>>23),i=s+(e^n&(o^e))+r[7]+1735328473&4294967295,i=n+(o^e&((s=o+(i<<14&4294967295|i>>>18))^o))+r[12]+2368359562&4294967295,i=e+((n=s+(i<<20&4294967295|i>>>12))^s^o)+r[5]+4294588738&4294967295,i=o+((e=n+(i<<4&4294967295|i>>>28))^n^s)+r[8]+2272392833&4294967295,o=e+(i<<11&4294967295|i>>>21),i=s+(o^e^n)+r[11]+1839030562&4294967295,i=n+((s=o+(i<<16&4294967295|i>>>16))^o^e)+r[14]+4259657740&4294967295,i=e+((n=s+(i<<23&4294967295|i>>>9))^s^o)+r[1]+2763975236&4294967295,i=o+((e=n+(i<<4&4294967295|i>>>28))^n^s)+r[4]+1272893353&4294967295,o=e+(i<<11&4294967295|i>>>21),i=s+(o^e^n)+r[7]+4139469664&4294967295,i=n+((s=o+(i<<16&4294967295|i>>>16))^o^e)+r[10]+3200236656&4294967295,i=e+((n=s+(i<<23&4294967295|i>>>9))^s^o)+r[13]+681279174&4294967295,i=o+((e=n+(i<<4&4294967295|i>>>28))^n^s)+r[0]+3936430074&4294967295,o=e+(i<<11&4294967295|i>>>21),i=s+(o^e^n)+r[3]+3572445317&4294967295,i=n+((s=o+(i<<16&4294967295|i>>>16))^o^e)+r[6]+76029189&4294967295,i=e+((n=s+(i<<23&4294967295|i>>>9))^s^o)+r[9]+3654602809&4294967295,i=o+((e=n+(i<<4&4294967295|i>>>28))^n^s)+r[12]+3873151461&4294967295,o=e+(i<<11&4294967295|i>>>21),i=s+(o^e^n)+r[15]+530742520&4294967295,i=n+((s=o+(i<<16&4294967295|i>>>16))^o^e)+r[2]+3299628645&4294967295,i=e+(s^((n=s+(i<<23&4294967295|i>>>9))|~o))+r[0]+4096336452&4294967295,i=o+(n^((e=n+(i<<6&4294967295|i>>>26))|~s))+r[7]+1126891415&4294967295,o=e+(i<<10&4294967295|i>>>22),i=s+(e^(o|~n))+r[14]+2878612391&4294967295,i=n+(o^((s=o+(i<<15&4294967295|i>>>17))|~e))+r[5]+4237533241&4294967295,i=e+(s^((n=s+(i<<21&4294967295|i>>>11))|~o))+r[12]+1700485571&4294967295,i=o+(n^((e=n+(i<<6&4294967295|i>>>26))|~s))+r[3]+2399980690&4294967295,o=e+(i<<10&4294967295|i>>>22),i=s+(e^(o|~n))+r[10]+4293915773&4294967295,i=n+(o^((s=o+(i<<15&4294967295|i>>>17))|~e))+r[1]+2240044497&4294967295,i=e+(s^((n=s+(i<<21&4294967295|i>>>11))|~o))+r[8]+1873313359&4294967295,i=o+(n^((e=n+(i<<6&4294967295|i>>>26))|~s))+r[15]+4264355552&4294967295,o=e+(i<<10&4294967295|i>>>22),i=s+(e^(o|~n))+r[6]+2734768916&4294967295,i=n+(o^((s=o+(i<<15&4294967295|i>>>17))|~e))+r[13]+1309151649&4294967295,i=e+(s^((n=s+(i<<21&4294967295|i>>>11))|~o))+r[4]+4149444226&4294967295,i=o+(n^((e=n+(i<<6&4294967295|i>>>26))|~s))+r[11]+3174756917&4294967295,o=e+(i<<10&4294967295|i>>>22),i=s+(e^(o|~n))+r[2]+718787259&4294967295,i=n+(o^((s=o+(i<<15&4294967295|i>>>17))|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(i<<21&4294967295|i>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+o&4294967295}function r(t,e){this.h=e;const n=[];let r=!0;for(let s=t.length-1;s>=0;s--){const i=0|t[s];r&&i==e||(n[s]=i,r=!1)}this.g=n}!function(t,e){function n(){}n.prototype=e.prototype,t.F=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.D=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}(e,function(){this.blockSize=-1}),e.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},e.prototype.v=function(t,e){void 0===e&&(e=t.length);const r=e-this.blockSize,s=this.C;let i=this.h,o=0;for(;o<e;){if(0==i)for(;o<=r;)n(this,t,o),o+=this.blockSize;if("string"==typeof t){for(;o<e;)if(s[i++]=t.charCodeAt(o++),i==this.blockSize){n(this,s),i=0;break}}else for(;o<e;)if(s[i++]=t[o++],i==this.blockSize){n(this,s),i=0;break}}this.h=i,this.o+=e},e.prototype.A=function(){var t=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;e=8*this.o;for(var n=t.length-8;n<t.length;++n)t[n]=255&e,e/=256;for(this.v(t),t=Array(16),e=0,n=0;n<4;++n)for(let r=0;r<32;r+=8)t[e++]=this.g[n]>>>r&255;return t};var s={};function i(t){return-128<=t&&t<128?function(t,e){var n=s;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,function(t){return new r([0|t],t<0?-1:0)}):new r([0|t],t<0?-1:0)}function o(t){if(isNaN(t)||!isFinite(t))return a;if(t<0)return d(o(-t));const e=[];let n=1;for(let r=0;t>=n;r++)e[r]=t/n|0,n*=4294967296;return new r(e,0)}var a=i(0),c=i(1),u=i(16777216);function h(t){if(0!=t.h)return!1;for(let e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function l(t){return-1==t.h}function d(t){const e=t.g.length,n=[];for(let r=0;r<e;r++)n[r]=~t.g[r];return new r(n,~t.h).add(c)}function f(t,e){return t.add(d(e))}function p(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function g(t,e){this.g=t,this.h=e}function m(t,e){if(h(e))throw Error("division by zero");if(h(t))return new g(a,a);if(l(t))return e=m(d(t),e),new g(d(e.g),d(e.h));if(l(e))return e=m(t,d(e)),new g(d(e.g),e.h);if(t.g.length>30){if(l(t)||l(e))throw Error("slowDivide_ only works with positive integers.");for(var n=c,r=e;r.l(t)<=0;)n=y(n),r=y(r);var s=v(n,1),i=v(r,1);for(r=v(r,2),n=v(n,2);!h(r);){var u=i.add(r);u.l(t)<=0&&(s=s.add(n),i=u),r=v(r,1),n=v(n,1)}return e=f(t,s.j(e)),new g(s,e)}for(s=a;t.l(e)>=0;){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=(r=Math.ceil(Math.log(n)/Math.LN2))<=48?1:Math.pow(2,r-48),u=(i=o(n)).j(e);l(u)||u.l(t)>0;)u=(i=o(n-=r)).j(e);h(i)&&(i=c),s=s.add(i),t=f(t,u)}return new g(s,t)}function y(t){const e=t.g.length+1,n=[];for(let r=0;r<e;r++)n[r]=t.i(r)<<1|t.i(r-1)>>>31;return new r(n,t.h)}function v(t,e){const n=e>>5;e%=32;const s=t.g.length-n,i=[];for(let r=0;r<s;r++)i[r]=e>0?t.i(r+n)>>>e|t.i(r+n+1)<<32-e:t.i(r+n);return new r(i,t.h)}(t=r.prototype).m=function(){if(l(this))return-d(this).m();let t=0,e=1;for(let n=0;n<this.g.length;n++){const r=this.i(n);t+=(r>=0?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if((t=t||10)<2||36<t)throw Error("radix out of range: "+t);if(h(this))return"0";if(l(this))return"-"+d(this).toString(t);const e=o(Math.pow(t,6));var n=this;let r="";for(;;){const s=m(n,e).g;let i=(((n=f(n,s.j(e))).g.length>0?n.g[0]:n.h)>>>0).toString(t);if(h(n=s))return i+r;for(;i.length<6;)i="0"+i;r=i+r}},t.i=function(t){return t<0?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return l(t=f(this,t))?-1:h(t)?0:1},t.abs=function(){return l(this)?d(this):this},t.add=function(t){const e=Math.max(this.g.length,t.g.length),n=[];let s=0;for(let r=0;r<=e;r++){let e=s+(65535&this.i(r))+(65535&t.i(r)),i=(e>>>16)+(this.i(r)>>>16)+(t.i(r)>>>16);s=i>>>16,e&=65535,i&=65535,n[r]=i<<16|e}return new r(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(h(this)||h(t))return a;if(l(this))return l(t)?d(this).j(d(t)):d(d(this).j(t));if(l(t))return d(this.j(d(t)));if(this.l(u)<0&&t.l(u)<0)return o(this.m()*t.m());const e=this.g.length+t.g.length,n=[];for(var s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(let e=0;e<t.g.length;e++){const r=this.i(s)>>>16,i=65535&this.i(s),o=t.i(e)>>>16,a=65535&t.i(e);n[2*s+2*e]+=i*a,p(n,2*s+2*e),n[2*s+2*e+1]+=r*a,p(n,2*s+2*e+1),n[2*s+2*e+1]+=i*o,p(n,2*s+2*e+1),n[2*s+2*e+2]+=r*o,p(n,2*s+2*e+2)}for(t=0;t<e;t++)n[t]=n[2*t+1]<<16|n[2*t];for(t=e;t<2*e;t++)n[t]=0;return new r(n,0)},t.B=function(t){return m(this,t).h},t.and=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)&t.i(r);return new r(n,this.h&t.h)},t.or=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)|t.i(r);return new r(n,this.h|t.h)},t.xor=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)^t.i(r);return new r(n,this.h^t.h)},e.prototype.digest=e.prototype.A,e.prototype.reset=e.prototype.u,e.prototype.update=e.prototype.v,de=e,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.B,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if((n=n||10)<2||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return d(t(e.substring(1),n));if(e.indexOf("-")>=0)throw Error('number format error: interior "-" character');const r=o(Math.pow(n,8));let s=a;for(let a=0;a<e.length;a+=8){var i=Math.min(8,e.length-a);const t=parseInt(e.substring(a,a+i),n);i<8?(i=o(Math.pow(n,i)),s=s.j(i).add(o(t))):(s=s.j(r),s=s.add(o(t)))}return s},le=r}).apply(void 0!==fe?fe:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var pe,ge,me,ye,ve,we,be,Ee,_e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var t,e=Object.defineProperty;var n=function(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof _e&&_e];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);function r(t,r){if(r)t:{var s=n;t=t.split(".");for(var i=0;i<t.length-1;i++){var o=t[i];if(!(o in s))break t;s=s[o]}(r=r(i=s[t=t[t.length-1]]))!=i&&null!=r&&e(s,t,{configurable:!0,writable:!0,value:r})}}r("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(t){return t||function(t){var e,n=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push([e,t[e]]);return n}});
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var s=s||{},i=this||self;function o(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function a(t,e,n){return t.call.apply(t.bind,arguments)}function c(t,e,n){return(c=a).apply(null,arguments)}function u(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function h(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Ob=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}var l="undefined"!=typeof AsyncContext&&"function"==typeof AsyncContext.Snapshot?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function d(t){const e=t.length;if(e>0){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function f(t,e){for(let r=1;r<arguments.length;r++){const e=arguments[r];var n=typeof e;if("array"==(n="object"!=n?n:e?Array.isArray(e)?"array":n:"null")||"object"==n&&"number"==typeof e.length){n=t.length||0;const r=e.length||0;t.length=n+r;for(let s=0;s<r;s++)t[n+s]=e[s]}else t.push(e)}}function p(t){i.setTimeout(()=>{throw t},0)}function g(){var t=b;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var m=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return this.h>0?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new y,t=>t.reset());class y{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let v,w=!1,b=new class{constructor(){this.h=this.g=null}add(t,e){const n=m.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},E=()=>{const t=Promise.resolve(void 0);v=()=>{t.then(_)}};function _(){for(var t;t=g();){try{t.h.call(t.g)}catch(n){p(n)}var e=m;e.j(t),e.h<100&&(e.h++,t.next=e.g,e.g=t)}w=!1}function T(){this.u=this.u,this.C=this.C}function S(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},S.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};i.addEventListener("test",t,e),i.removeEventListener("test",t,e)}catch(n){}return t}();function C(t){return/^[\s\xa0]*$/.test(t)}function A(t,e){S.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,e)}h(A,S),A.prototype.init=function(t,e){const n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=e,(e=t.relatedTarget)||("mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement)),this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&A.Z.h.call(this)},A.prototype.h=function(){A.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var D="closure_listenable_"+(1e6*Math.random()|0),N=0;function k(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++N,this.da=this.fa=!1}function R(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function x(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function O(t){const e={};for(const n in t)e[n]=t[n];return e}const L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(t,e){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(let e=0;e<L.length;e++)n=L[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function P(t){this.src=t,this.g={},this.h=0}function V(t,e){const n=e.type;if(n in t.g){var r,s=t.g[n],i=Array.prototype.indexOf.call(s,e,void 0);(r=i>=0)&&Array.prototype.splice.call(s,i,1),r&&(R(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function F(t,e,n,r){for(let s=0;s<t.length;++s){const i=t[s];if(!i.da&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}P.prototype.add=function(t,e,n,r,s){const i=t.toString();(t=this.g[i])||(t=this.g[i]=[],this.h++);const o=F(t,e,r,s);return o>-1?(e=t[o],n||(e.fa=!1)):((e=new k(e,this.src,i,!!r,s)).fa=n,t.push(e)),e};var U="closure_lm_"+(1e6*Math.random()|0),B={};function j(t,e,n,r,s){if(Array.isArray(e)){for(let i=0;i<e.length;i++)j(t,e[i],n,r,s);return null}return n=Q(n),t&&t[D]?t.J(e,n,!!o(r)&&!!r.capture,s):function(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");const a=o(s)?!!s.capture:!!s;let c=H(t);if(c||(t[U]=c=new P(t)),n=c.add(e,n,r,a,i),n.proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}const e=G;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)I||(s=a),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(z(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}(t,e,n,!1,r,s)}function q(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)q(t,e[i],n,r,s);else r=o(r)?!!r.capture:!!r,n=Q(n),t&&t[D]?(t=t.i,(i=String(e).toString())in t.g&&((n=F(e=t.g[i],n,r,s))>-1&&(R(e[n]),Array.prototype.splice.call(e,n,1),0==e.length&&(delete t.g[i],t.h--)))):t&&(t=H(t))&&(e=t.g[e.toString()],t=-1,e&&(t=F(e,n,r,s)),(n=t>-1?e[t]:null)&&$(n))}function $(t){if("number"!=typeof t&&t&&!t.da){var e=t.src;if(e&&e[D])V(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(z(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=H(e))?(V(n,t),0==n.h&&(n.src=null,e[U]=null)):R(t)}}}function z(t){return t in B?B[t]:B[t]="on"+t}function G(t,e){if(t.da)t=!0;else{e=new A(e,this);const n=t.listener,r=t.ha||t.src;t.fa&&$(t),t=n.call(r,e)}return t}function H(t){return(t=t[U])instanceof P?t:null}var K="__closure_events_fn_"+(1e9*Math.random()>>>0);function Q(t){return"function"==typeof t?t:(t[K]||(t[K]=function(e){return t.handleEvent(e)}),t[K])}function W(){T.call(this),this.i=new P(this),this.M=this,this.G=null}function X(t,e){var n,r=t.G;if(r)for(n=[];r;r=r.G)n.push(r);if(t=t.M,r=e.type||e,"string"==typeof e)e=new S(e,t);else if(e instanceof S)e.target=e.target||t;else{var s=e;M(e=new S(r,t),s)}let i,o;if(s=!0,n)for(o=n.length-1;o>=0;o--)i=e.g=n[o],s=Y(i,r,!0,e)&&s;if(i=e.g=t,s=Y(i,r,!0,e)&&s,s=Y(i,r,!1,e)&&s,n)for(o=0;o<n.length;o++)i=e.g=n[o],s=Y(i,r,!1,e)&&s}function Y(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();let s=!0;for(let i=0;i<e.length;++i){const o=e[i];if(o&&!o.da&&o.capture==n){const e=o.listener,n=o.ha||o.src;o.fa&&V(t.i,o),s=!1!==e.call(n,r)&&s}}return s&&!r.defaultPrevented}function J(t){t.g=function(t,e){if("function"!=typeof t){if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=c(t.handleEvent,t)}return Number(e)>2147483647?-1:i.setTimeout(t,e||0)}(()=>{t.g=null,t.i&&(t.i=!1,J(t))},t.l);const e=t.h;t.h=null,t.m.apply(null,e)}h(W,T),W.prototype[D]=!0,W.prototype.removeEventListener=function(t,e,n,r){q(this,t,e,n,r)},W.prototype.N=function(){if(W.Z.N.call(this),this.i){var t=this.i;for(const e in t.g){const n=t.g[e];for(let t=0;t<n.length;t++)R(n[t]);delete t.g[e],t.h--}}this.G=null},W.prototype.J=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},W.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class Z extends T{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:J(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(t){T.call(this),this.h=t,this.g={}}h(tt,T);var et=[];function nt(t){x(t.g,function(t,e){this.g.hasOwnProperty(e)&&$(t)},t),t.g={}}tt.prototype.N=function(){tt.Z.N.call(this),nt(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var rt=i.JSON.stringify,st=i.JSON.parse,it=class{stringify(t){return i.JSON.stringify(t,void 0)}parse(t){return i.JSON.parse(t,void 0)}};function ot(){}function at(){}var ct={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ut(){S.call(this,"d")}function ht(){S.call(this,"c")}h(ut,S),h(ht,S);var lt={},dt=null;function ft(){return dt=dt||new W}function pt(t){S.call(this,lt.Ia,t)}function gt(t){const e=ft();X(e,new pt(e))}function mt(t,e){S.call(this,lt.STAT_EVENT,t),this.stat=e}function yt(t){const e=ft();X(e,new mt(e,t))}function vt(t,e){S.call(this,lt.Ja,t),this.size=e}function wt(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return i.setTimeout(function(){t()},e)}function bt(){this.g=!0}function Et(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{const i=JSON.parse(e);if(i)for(t=0;t<i.length;t++)if(Array.isArray(i[t])){var n=i[t];if(!(n.length<2)){var r=n[1];if(Array.isArray(r)&&!(r.length<1)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(let t=1;t<r.length;t++)r[t]=""}}}return rt(i)}catch(i){return e}}(t,n)+(r?" "+r:"")})}lt.Ia="serverreachability",h(pt,S),lt.STAT_EVENT="statevent",h(mt,S),lt.Ja="timingevent",h(vt,S),bt.prototype.ua=function(){this.g=!1},bt.prototype.info=function(){};var _t,Tt={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},St={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function It(){}function Ct(t){return encodeURIComponent(String(t))}function At(t){var e=1;t=t.split(":");const n=[];for(;e>0&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Dt(t,e,n,r){this.j=t,this.i=e,this.l=n,this.S=r||1,this.V=new tt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Nt}function Nt(){this.i=null,this.g="",this.h=!1}h(It,ot),It.prototype.g=function(){return new XMLHttpRequest},_t=new It;var kt={},Rt={};function xt(t,e,n){t.M=1,t.A=re(Jt(e)),t.u=n,t.R=!0,Ot(t,null)}function Ot(t,e){t.F=Date.now(),Pt(t),t.B=Jt(t.A);var n=t.B,r=t.S;Array.isArray(r)||(r=[String(r)]),Ce(n.i,"t",r),t.C=0,n=t.j.L,t.h=new Nt,t.g=fn(t.j,n?e:null,!t.u),t.P>0&&(t.O=new Z(c(t.Y,t,t.g),t.P)),e=t.V,n=t.g,r=t.ba;var s="readystatechange";Array.isArray(s)||(s&&(et[0]=s.toString()),s=et);for(let i=0;i<s.length;i++){const t=j(n,s[i],r||e.handleEvent,!1,e.h||e);if(!t)break;e.g[t.key]=t}e=t.J?O(t.J):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,e)):(t.v="GET",t.g.ea(t.B,t.v,null,e)),gt(),function(t,e,n,r,s,i){t.info(function(){if(t.g)if(i){var o="",a=i.split("&");for(let t=0;t<a.length;t++){var c=a[t].split("=");if(c.length>1){const t=c[0];c=c[1];const e=t.split("_");o=e.length>=2&&"type"==e[1]?o+(t+"=")+c+"&":o+(t+"=redacted&")}}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o})}(t.i,t.v,t.B,t.l,t.S,t.u)}function Lt(t){return!!t.g&&("GET"==t.v&&2!=t.M&&t.j.Aa)}function Mt(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Rt:(n=Number(e.substring(n,r)),isNaN(n)?kt:(r+=1)+n>e.length?Rt:(e=e.slice(r,r+n),t.C=r+n,e))}function Pt(t){t.T=Date.now()+t.H,Vt(t,t.H)}function Vt(t,e){if(null!=t.D)throw Error("WatchDog timer not null");t.D=wt(c(t.aa,t),e)}function Ft(t){t.D&&(i.clearTimeout(t.D),t.D=null)}function Ut(t){0==t.j.I||t.K||cn(t.j,t)}function Bt(t){Ft(t);var e=t.O;e&&"function"==typeof e.dispose&&e.dispose(),t.O=null,nt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.dispose())}function jt(t,e){try{var n=t.j;if(0!=n.I&&(n.g==t||Ht(n.h,t)))if(!t.L&&Ht(n.h,t)&&3==n.I){try{var r=n.Ba.g.parse(e)}catch(h){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.v){if(n.g){if(!(n.g.F+3e3<t.F))break t;an(n),Xe(n)}rn(n),yt(18)}}else n.xa=s[1],0<n.xa-n.K&&s[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=wt(c(n.Va,n),6e3));Gt(n.h)<=1&&n.ta&&(n.ta=void 0)}else hn(n,11)}else if((t.L||n.g==t)&&an(n),!C(e))for(s=n.Ba.g.parse(e),e=0;e<s.length;e++){let c=s[e];const h=c[0];if(!(h<=n.K))if(n.K=h,c=c[1],2==n.I)if("c"==c[0]){n.M=c[1],n.ba=c[2];const e=c[3];null!=e&&(n.ka=e,n.j.info("VER="+n.ka));const s=c[4];null!=s&&(n.za=s,n.j.info("SVER="+n.za));const h=c[5];null!=h&&"number"==typeof h&&h>0&&(r=1.5*h,n.O=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.h;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(Kt(i,i.h),i.h=null))}if(r.G){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.wa=t,ne(r.J,r.G,t))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-t.F,n.j.info("Handshake RTT: "+n.T+"ms"));var o=t;if((r=n).na=dn(r,r.L?r.ba:null,r.W),o.L){Qt(r.h,o);var a=o,u=r.O;u&&(a.H=u),a.D&&(Ft(a),Pt(a)),r.g=o}else nn(r);n.i.length>0&&Je(n)}else"stop"!=c[0]&&"close"!=c[0]||hn(n,7);else 3==n.I&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?hn(n,7):We(n):"noop"!=c[0]&&n.l&&n.l.qa(c),n.A=0)}gt()}catch(h){}}Dt.prototype.ba=function(t){t=t.target;const e=this.O;e&&3==Ge(t)?e.j():this.Y(t)},Dt.prototype.Y=function(t){try{if(t==this.g)t:{const c=Ge(this.g),u=this.g.ya();this.g.ca();if(!(c<3)&&(3!=c||this.g&&(this.h.h||this.g.la()||He(this.g)))){this.K||4!=c||7==u||gt(),Ft(this);var e=this.g.ca();this.X=e;var n=function(t){if(!Lt(t))return t.g.la();const e=He(t.g);if(""===e)return"";let n="";const r=e.length,s=4==Ge(t.g);if(!t.h.i){if("undefined"==typeof TextDecoder)return Bt(t),Ut(t),"";t.h.i=new i.TextDecoder}for(let i=0;i<r;i++)t.h.h=!0,n+=t.h.i.decode(e[i],{stream:!(s&&i==r-1)});return e.length=0,t.h.g+=n,t.C=0,t.h.g}(this);if(this.o=200==e,function(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o})}(this.i,this.v,this.B,this.l,this.S,c,e),this.o){if(this.U&&!this.L){e:{if(this.g){var r,s=this.g;if((r=s.g?s.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(r)){var o=r;break e}}o=null}if(!(t=o)){this.o=!1,this.m=3,yt(12),Bt(this),Ut(this);break t}Et(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,jt(this,t)}if(this.R){let e;for(t=!0;!this.K&&this.C<n.length;){if(e=Mt(this,n),e==Rt){4==c&&(this.m=4,yt(14),t=!1),Et(this.i,this.l,null,"[Incomplete Response]");break}if(e==kt){this.m=4,yt(15),Et(this.i,this.l,n,"[Invalid Chunk]"),t=!1;break}Et(this.i,this.l,e,null),jt(this,e)}if(Lt(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=c||0!=n.length||this.h.h||(this.m=1,yt(16),t=!1),this.o=this.o&&t,t){if(n.length>0&&!this.W){this.W=!0;var a=this.j;a.g==this&&a.aa&&!a.P&&(a.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),sn(a),a.P=!0,yt(11))}}else Et(this.i,this.l,n,"[Invalid Chunked Response]"),Bt(this),Ut(this)}else Et(this.i,this.l,n,null),jt(this,n);4==c&&Bt(this),this.o&&!this.K&&(4==c?cn(this.j,this):(this.o=!1,Pt(this)))}else(function(t){const e={};t=(t.g&&Ge(t)>=2&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(C(t[r]))continue;var n=At(t[r]);const s=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,function(t){return t.join(", ")})})(this.g),400==e&&n.indexOf("Unknown SID")>0?(this.m=3,yt(12)):(this.m=0,yt(13)),Bt(this),Ut(this)}}}catch(c){}},Dt.prototype.cancel=function(){this.K=!0,Bt(this)},Dt.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(function(t,e){t.info(function(){return"TIMEOUT: "+e})}(this.i,this.B),2!=this.M&&(gt(),yt(17)),Bt(this),this.m=2,Ut(this)):Vt(this,this.T-t)};var qt=class{constructor(t,e){this.g=t,this.map=e}};function $t(t){this.l=t||10,i.PerformanceNavigationTiming?t=(t=i.performance.getEntriesByType("navigation")).length>0&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function zt(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Gt(t){return t.h?1:t.g?t.g.size:0}function Ht(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Kt(t,e){t.g?t.g.add(e):t.h=e}function Qt(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Wt(t){if(null!=t.h)return t.i.concat(t.h.G);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.G);return e}return d(t.i)}$t.prototype.cancel=function(){if(this.i=Wt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var Xt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yt(t){let e;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,t instanceof Yt?(this.l=t.l,Zt(this,t.j),this.o=t.o,this.g=t.g,te(this,t.u),this.h=t.h,ee(this,Ae(t.i)),this.m=t.m):t&&(e=String(t).match(Xt))?(this.l=!1,Zt(this,e[1]||"",!0),this.o=se(e[2]||""),this.g=se(e[3]||"",!0),te(this,e[4]),this.h=se(e[5]||"",!0),ee(this,e[6]||"",!0),this.m=se(e[7]||"")):(this.l=!1,this.i=new de(null,this.l))}function Jt(t){return new Yt(t)}function Zt(t,e,n){t.j=n?se(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function te(t,e){if(e){if(e=Number(e),isNaN(e)||e<0)throw Error("Bad port number "+e);t.u=e}else t.u=null}function ee(t,e,n){e instanceof de?(t.i=e,function(t,e){e&&!t.j&&(fe(t),t.i=null,t.g.forEach(function(t,e){const n=e.toLowerCase();e!=n&&(Te(this,e),Ce(this,n,t))},t)),t.j=e}(t.i,t.l)):(n||(e=ie(e,he)),t.i=new de(e,t.l))}function ne(t,e,n){t.i.set(e,n)}function re(t){return ne(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function se(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ie(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,oe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function oe(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Yt.prototype.toString=function(){const t=[];var e=this.j;e&&t.push(ie(e,ae,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(ie(e,ae,!0),"@"),t.push(Ct(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.u)&&t.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(ie(n,"/"==n.charAt(0)?ue:ce,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",ie(n,le)),t.join("")},Yt.prototype.resolve=function(t){const e=Jt(this);let n=!!t.j;n?Zt(e,t.j):n=!!t.o,n?e.o=t.o:n=!!t.g,n?e.g=t.g:n=null!=t.u;var r=t.h;if(n)te(e,t.u);else if(n=!!t.h){if("/"!=r.charAt(0))if(this.g&&!this.h)r="/"+r;else{var s=e.h.lastIndexOf("/");-1!=s&&(r=e.h.slice(0,s+1)+r)}if(".."==(s=r)||"."==s)r="";else if(-1!=s.indexOf("./")||-1!=s.indexOf("/.")){r=0==s.lastIndexOf("/",0),s=s.split("/");const t=[];for(let e=0;e<s.length;){const n=s[e++];"."==n?r&&e==s.length&&t.push(""):".."==n?((t.length>1||1==t.length&&""!=t[0])&&t.pop(),r&&e==s.length&&t.push("")):(t.push(n),r=!0)}r=t.join("/")}else r=s}return n?e.h=r:n=""!==t.i.toString(),n?ee(e,Ae(t.i)):n=!!t.m,n&&(e.m=t.m),e};var ae=/[#\/\?@]/g,ce=/[#\?:]/g,ue=/[#\?]/g,he=/[#\?@]/g,le=/#/g;function de(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function fe(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(let n=0;n<t.length;n++){const r=t[n].indexOf("=");let s,i=null;r>=0?(s=t[n].substring(0,r),i=t[n].substring(r+1)):s=t[n],e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function Te(t,e){fe(t),e=De(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Se(t,e){return fe(t),e=De(t,e),t.g.has(e)}function Ie(t,e){fe(t);let n=[];if("string"==typeof e)Se(t,e)&&(n=n.concat(t.g.get(De(t,e))));else for(t=Array.from(t.g.values()),e=0;e<t.length;e++)n=n.concat(t[e]);return n}function Ce(t,e,n){Te(t,e),n.length>0&&(t.i=null,t.g.set(De(t,e),d(n)),t.h+=n.length)}function Ae(t){const e=new de;return e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),e}function De(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ne(t,e,n,r,s){try{s&&(s.onload=null,s.onerror=null,s.onabort=null,s.ontimeout=null),r(n)}catch(i){}}function ke(){this.g=new it}function Re(t){this.i=t.Sb||null,this.h=t.ab||!1}function xe(t,e){W.call(this),this.H=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function Oe(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}function Le(t){t.readyState=4,t.l=null,t.j=null,t.B=null,Me(t)}function Me(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function Pe(t){let e="";return x(t,function(t,n){e+=n,e+=":",e+=t,e+="\r\n"}),e}function Ve(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Pe(n),"string"==typeof t?null!=n&&Ct(n):ne(t,e,n))}function Fe(t){W.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}(t=de.prototype).add=function(t,e){fe(this),this.i=null,t=De(this,t);let n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){fe(this),this.g.forEach(function(n,r){n.forEach(function(n){t.call(e,n,r,this)},this)},this)},t.set=function(t,e){return fe(this),this.i=null,Se(this,t=De(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t&&(t=Ie(this,t)).length>0?String(t[0]):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(let r=0;r<e.length;r++){var n=e[r];const s=Ct(n);n=Ie(this,n);for(let e=0;e<n.length;e++){let r=s;""!==n[e]&&(r+="="+Ct(n[e])),t.push(r)}}return this.i=t.join("&")},h(Re,ot),Re.prototype.g=function(){return new xe(this.i,this.h)},h(xe,W),(t=xe.prototype).open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=e,this.readyState=1,Me(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const e={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(e.body=t),(this.H||i).fetch(new Request(this.D,e)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,Le(this)),this.readyState=0},t.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Me(this)),this.g&&(this.readyState=3,Me(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Oe(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))},t.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.B.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Le(this):Me(this),3==this.readyState&&Oe(this)}},t.Oa=function(t){this.g&&(this.response=this.responseText=t,Le(this))},t.Na=function(t){this.g&&(this.response=t,Le(this))},t.ga=function(){this.g&&Le(this)},t.setRequestHeader=function(t,e){this.A.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(xe.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),h(Fe,W);var Ue=/^https?$/i,Be=["POST","PUT"];function je(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.o=5,qe(t),ze(t)}function qe(t){t.A||(t.A=!0,X(t,"complete"),X(t,"error"))}function $e(t){if(t.h&&void 0!==s)if(t.v&&4==Ge(t))setTimeout(t.Ca.bind(t),0);else if(X(t,"readystatechange"),4==Ge(t)){t.h=!1;try{const s=t.ca();t:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===s){let e=String(t.D).match(Xt)[1]||null;!e&&i.self&&i.self.location&&(e=i.self.location.protocol.slice(0,-1)),r=!Ue.test(e?e.toLowerCase():"")}n=r}if(n)X(t,"complete"),X(t,"success");else{t.o=6;try{var o=Ge(t)>2?t.g.statusText:""}catch(a){o=""}t.l=o+" ["+t.ca()+"]",qe(t)}}finally{ze(t)}}}function ze(t,e){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const r=t.g;t.g=null,e||X(t,"ready");try{r.onreadystatechange=null}catch(n){}}}function Ge(t){return t.g?t.g.readyState:0}function He(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Ke(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Qe(t){this.za=0,this.i=[],this.j=new bt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ke("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ke("baseRetryDelayMs",5e3,t),this.Za=Ke("retryDelaySeedMs",1e4,t),this.Ta=Ke("forwardChannelMaxRetries",2,t),this.va=Ke("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new $t(t&&t.concurrentRequestLimit),this.Ba=new ke,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function We(t){if(Ye(t),3==t.I){var e=t.V++,n=Jt(t.J);if(ne(n,"SID",t.M),ne(n,"RID",e),ne(n,"TYPE","terminate"),tn(t,n),(e=new Dt(t,t.j,e)).M=2,e.A=re(Jt(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(e.A.toString(),"")}catch(r){}!n&&i.Image&&((new Image).src=e.A,n=!0),n||(e.g=fn(e.j,null),e.g.ea(e.A)),e.F=Date.now(),Pt(e)}ln(t)}function Xe(t){t.g&&(sn(t),t.g.cancel(),t.g=null)}function Ye(t){Xe(t),t.v&&(i.clearTimeout(t.v),t.v=null),an(t),t.h.cancel(),t.m&&("number"==typeof t.m&&i.clearTimeout(t.m),t.m=null)}function Je(t){if(!zt(t.h)&&!t.m){t.m=!0;var e=t.Ea;v||E(),w||(v(),w=!0),b.add(e,t),t.D=0}}function Ze(t,e){var n;n=e?e.l:t.V++;const r=Jt(t.J);ne(r,"SID",t.M),ne(r,"RID",n),ne(r,"AID",t.K),tn(t,r),t.u&&t.o&&Ve(r,t.u,t.o),n=new Dt(t,t.j,n,t.D+1),null===t.u&&(n.J=t.o),e&&(t.i=e.G.concat(t.i)),e=en(t,n,1e3),n.H=Math.round(.5*t.va)+Math.round(.5*t.va*Math.random()),Kt(t.h,n),xt(n,r,e)}function tn(t,e){t.H&&x(t.H,function(t,n){ne(e,n,t)}),t.l&&x({},function(t,n){ne(e,n,t)})}function en(t,e,n){n=Math.min(t.i.length,n);const r=t.l?c(t.l.Ka,t.l,t):null;t:{var s=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?n>0?(e=s[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let c=!0;for(let h=0;h<n;h++){var i=s[h].g;const n=s[h].map;if((i-=e)<0)e=Math.max(0,s[h].g-100),c=!1;else try{i="req"+i+"_"||"";try{var a=n instanceof Map?n:Object.entries(n);for(const[e,n]of a){let r=n;o(n)&&(r=rt(n)),t.push(i+e+"="+encodeURIComponent(r))}}catch(u){throw t.push(i+"type="+encodeURIComponent("_badmap")),u}}catch(u){r&&r(n)}}if(c){a=t.join("&");break t}}a=void 0}return t=t.i.splice(0,n),e.G=t,a}function nn(t){if(!t.g&&!t.v){t.Y=1;var e=t.Da;v||E(),w||(v(),w=!0),b.add(e,t),t.A=0}}function rn(t){return!(t.g||t.v||t.A>=3)&&(t.Y++,t.v=wt(c(t.Da,t),un(t,t.A)),t.A++,!0)}function sn(t){null!=t.B&&(i.clearTimeout(t.B),t.B=null)}function on(t){t.g=new Dt(t,t.j,"rpc",t.Y),null===t.u&&(t.g.J=t.o),t.g.P=0;var e=Jt(t.na);ne(e,"RID","rpc"),ne(e,"SID",t.M),ne(e,"AID",t.K),ne(e,"CI",t.F?"0":"1"),!t.F&&t.ia&&ne(e,"TO",t.ia),ne(e,"TYPE","xmlhttp"),tn(t,e),t.u&&t.o&&Ve(e,t.u,t.o),t.O&&(t.g.H=t.O);var n=t.g;t=t.ba,n.M=1,n.A=re(Jt(e)),n.u=null,n.R=!0,Ot(n,t)}function an(t){null!=t.C&&(i.clearTimeout(t.C),t.C=null)}function cn(t,e){var n=null;if(t.g==e){an(t),sn(t),t.g=null;var r=2}else{if(!Ht(t.h,e))return;n=e.G,Qt(t.h,e),r=1}if(0!=t.I)if(e.o)if(1==r){n=e.u?e.u.length:0,e=Date.now()-e.F;var s=t.D;X(r=ft(),new vt(r,n)),Je(t)}else nn(t);else if(3==(s=e.m)||0==s&&e.X>0||!(1==r&&function(t,e){return!(Gt(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.G.concat(t.i),0):1==t.I||2==t.I||t.D>=(t.Sa?0:t.Ta)||(t.m=wt(c(t.Ea,t,e),un(t,t.D)),t.D++,0)))}(t,e)||2==r&&rn(t)))switch(n&&n.length>0&&(e=t.h,e.i=e.i.concat(n)),s){case 1:hn(t,5);break;case 4:hn(t,10);break;case 3:hn(t,6);break;default:hn(t,2)}}function un(t,e){let n=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(n*=2),n*e}function hn(t,e){if(t.j.info("Error code "+e),2==e){var n=c(t.bb,t),r=t.Ua;const e=!r;r=new Yt(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||Zt(r,"https"),re(r),e?function(t,e){const n=new bt;if(i.Image){const r=new Image;r.onload=u(Ne,n,"TestLoadImage: loaded",!0,e,r),r.onerror=u(Ne,n,"TestLoadImage: error",!1,e,r),r.onabort=u(Ne,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=u(Ne,n,"TestLoadImage: timeout",!1,e,r),i.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}(r.toString(),n):function(t,e){new bt;const n=new AbortController,r=setTimeout(()=>{n.abort(),Ne(0,0,!1,e)},1e4);fetch(t,{signal:n.signal}).then(t=>{clearTimeout(r),t.ok?Ne(0,0,!0,e):Ne(0,0,!1,e)}).catch(()=>{clearTimeout(r),Ne(0,0,!1,e)})}(r.toString(),n)}else yt(2);t.I=0,t.l&&t.l.pa(e),ln(t),Ye(t)}function ln(t){if(t.I=0,t.ja=[],t.l){const e=Wt(t.h);0==e.length&&0==t.i.length||(f(t.ja,e),f(t.ja,t.i),t.h.i.length=0,d(t.i),t.i.length=0),t.l.oa()}}function dn(t,e,n){var r=n instanceof Yt?Jt(n):new Yt(n);if(""!=r.g)e&&(r.g=e+"."+r.g),te(r,r.u);else{var s=i.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;const t=new Yt(null);r&&Zt(t,r),e&&(t.g=e),s&&te(t,s),n&&(t.h=n),r=t}return n=t.G,e=t.wa,n&&e&&ne(r,n,e),ne(r,"VER",t.ka),tn(t,r),r}function fn(t,e,n){if(e&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Aa&&!t.ma?new Fe(new Re({ab:n})):new Fe(t.ma)).Fa(t.L),e}function pn(){}function gn(){}function mn(t,e){W.call(this),this.g=new Qe(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.sa&&(t?t["X-WebChannel-Client-Profile"]=e.sa:t={"X-WebChannel-Client-Profile":e.sa}),this.g.U=t,(t=e&&e.Qb)&&!C(t)&&(this.g.u=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!C(e)&&(this.g.G=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new wn(this)}function yn(t){ut.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function vn(){ht.call(this),this.status=1}function wn(t){this.g=t}(t=Fe.prototype).Fa=function(t){this.H=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():_t.g(),this.g.onreadystatechange=l(c(this.Ca,this));try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(o){return void je(this,o)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),s=i.FormData&&t instanceof i.FormData,!(Array.prototype.indexOf.call(Be,e,void 0)>=0)||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,a]of n)this.g.setRequestHeader(i,a);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(o){je(this,o)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,X(this,"complete"),X(this,"abort"),ze(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ze(this,!0)),Fe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?$e(this):this.Xa())},t.Xa=function(){$e(this)},t.isActive=function(){return!!this.g},t.ca=function(){try{return Ge(this)>2?this.g.status:-1}catch(t){return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.La=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),st(e)}},t.ya=function(){return this.o},t.Ha=function(){return"string"==typeof this.l?this.l:String(this.l)},(t=Qe.prototype).ka=8,t.I=1,t.connect=function(t,e,n,r){yt(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.J=dn(this,null,this.W),Je(this)},t.Ea=function(t){if(this.m)if(this.m=null,1==this.I){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Dt(this,this.j,t);let i=this.o;if(this.U&&(i?(i=O(i),M(i,this.U)):i=this.U),null!==this.u||this.R||(s.J=i,i=null),this.S)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if((e+=r)>4096){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=en(this,s,e),ne(n=Jt(this.J),"RID",t),ne(n,"CVER",22),this.G&&ne(n,"X-HTTP-Session-Id",this.G),tn(this,n),i&&(this.R?e="headers="+Ct(Pe(i))+"&"+e:this.u&&Ve(n,this.u,i)),Kt(this.h,s),this.Ra&&ne(n,"TYPE","init"),this.S?(ne(n,"$req",e),ne(n,"SID","null"),s.U=!0,xt(s,n,null)):xt(s,n,e),this.I=2}}else 3==this.I&&(t?Ze(this,t):0==this.i.length||zt(this.h)||Ze(this))},t.Da=function(){if(this.v=null,on(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=wt(c(this.Wa,this),t)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,yt(10),Xe(this),on(this))},t.Va=function(){null!=this.C&&(this.C=null,Xe(this),rn(this),yt(19))},t.bb=function(t){t?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},(t=pn.prototype).ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){},gn.prototype.g=function(t,e){return new mn(t,e)},h(mn,W),mn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},mn.prototype.close=function(){We(this.g)},mn.prototype.o=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=rt(t),t=n);e.i.push(new qt(e.Ya++,t)),3==e.I&&Je(e)},mn.prototype.N=function(){this.g.l=null,delete this.j,We(this.g),delete this.g,mn.Z.N.call(this)},h(yn,ut),h(vn,ht),h(wn,pn),wn.prototype.ra=function(){X(this.g,"a")},wn.prototype.qa=function(t){X(this.g,new yn(t))},wn.prototype.pa=function(t){X(this.g,new vn)},wn.prototype.oa=function(){X(this.g,"b")},gn.prototype.createWebChannel=gn.prototype.g,mn.prototype.send=mn.prototype.o,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,Ee=function(){return new gn},be=function(){return ft()},we=lt,ve={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Tt.NO_ERROR=0,Tt.TIMEOUT=8,Tt.HTTP_ERROR=6,ye=Tt,St.COMPLETE="complete",me=St,at.EventType=ct,ct.OPEN="a",ct.CLOSE="b",ct.ERROR="c",ct.MESSAGE="d",W.prototype.listen=W.prototype.J,ge=at,Fe.prototype.listenOnce=Fe.prototype.K,Fe.prototype.getLastError=Fe.prototype.Ha,Fe.prototype.getLastErrorCode=Fe.prototype.ya,Fe.prototype.getStatus=Fe.prototype.ca,Fe.prototype.getResponseJson=Fe.prototype.La,Fe.prototype.getResponseText=Fe.prototype.la,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Fa,pe=Fe}).apply(void 0!==_e?_e:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const Te="@firebase/firestore",Se="4.9.3";
/**
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
 */class Ie{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ie.UNAUTHENTICATED=new Ie(null),Ie.GOOGLE_CREDENTIALS=new Ie("google-credentials-uid"),Ie.FIRST_PARTY=new Ie("first-party-uid"),Ie.MOCK_USER=new Ie("mock-user");
/**
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
 */
let Ce="12.7.0";
/**
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
 */const Ae=new K("@firebase/firestore");function De(){return Ae.logLevel}function Ne(t,...e){if(Ae.logLevel<=j.DEBUG){const n=e.map(xe);Ae.debug(`Firestore (${Ce}): ${t}`,...n)}}function ke(t,...e){if(Ae.logLevel<=j.ERROR){const n=e.map(xe);Ae.error(`Firestore (${Ce}): ${t}`,...n)}}function Re(t,...e){if(Ae.logLevel<=j.WARN){const n=e.map(xe);Ae.warn(`Firestore (${Ce}): ${t}`,...n)}}function xe(t){if("string"==typeof t)return t;try{
/**
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
    */
return e=t,JSON.stringify(e)}catch(n){return t}var e}
/**
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
 */function Oe(t,e,n){let r="Unexpected state";"string"==typeof e?r=e:n=e,Le(t,r,n)}function Le(t,e,n){let r=`FIRESTORE (${Ce}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(s){r+=" CONTEXT: "+n}throw ke(r),new Error(r)}function Me(t,e,n,r){let s="Unexpected state";"string"==typeof n?s=n:r=n,t||Le(e,s,r)}function Pe(t,e){return t}
/**
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
 */const Ve={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Fe extends S{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class Ue{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
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
 */class Be{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class je{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Ie.UNAUTHENTICATED))}shutdown(){}}class qe{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class $e{constructor(t){this.t=t,this.currentUser=Ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Me(void 0===this.o,42304);let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new Ue;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ue,t.enqueueRetryable(()=>r(this.currentUser))};const i=()=>{const e=s;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{Ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),i())};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ue)}},0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(Ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Me("string"==typeof e.accessToken,31837,{l:e}),new Be(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Me(null===t||"string"==typeof t,2055,{h:t}),new Ie(t)}}class ze{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=Ie.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Ge{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new ze(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(Ie.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class He{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ke{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Qt(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Me(void 0===this.o,3512);const n=t=>{null!=t.error&&Ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.m;return this.m=t.token,Ne("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const r=t=>{Ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(t=>r(t)),setTimeout(()=>{if(!this.appCheck){const t=this.V.getImmediate({optional:!0});t?r(t):Ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new He(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(Me("string"==typeof t.token,44558,{tokenResult:t}),this.m=t.token,new He(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
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
 */function Qe(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */class We{static newId(){const t=62*Math.floor(256/62);let e="";for(;e.length<20;){const n=Qe(40);for(let r=0;r<n.length;++r)e.length<20&&n[r]<t&&(e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return e}}function Xe(t,e){return t<e?-1:t>e?1:0}function Ye(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.charAt(r),s=e.charAt(r);if(n!==s)return tn(n)===tn(s)?Xe(n,s):tn(n)?1:-1}return Xe(t.length,e.length)}const Je=55296,Ze=57343;function tn(t){const e=t.charCodeAt(0);return e>=Je&&e<=Ze}function en(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
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
 */const nn="__name__";class rn{constructor(t,e,n){void 0===e?e=0:e>t.length&&Oe(637,{offset:e,range:t.length}),void 0===n?n=t.length-e:n>t.length-e&&Oe(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===rn.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof rn?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=rn.compareSegments(t.get(r),e.get(r));if(0!==n)return n}return Xe(t.length,e.length)}static compareSegments(t,e){const n=rn.isNumericId(t),r=rn.isNumericId(e);return n&&!r?-1:!n&&r?1:n&&r?rn.extractNumericId(t).compare(rn.extractNumericId(e)):Ye(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return le.fromString(t.substring(4,t.length-2))}}class sn extends rn{construct(t,e,n){return new sn(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Fe(Ve.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new sn(e)}static emptyPath(){return new sn([])}}const on=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class an extends rn{construct(t,e,n){return new an(t,e,n)}static isValidIdentifier(t){return on.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),an.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===nn}static keyField(){return new an([nn])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new Fe(Ve.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Fe(Ve.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Fe(Ve.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new Fe(Ve.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new an(e)}static emptyPath(){return new an([])}}
/**
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
 */class cn{constructor(t){this.path=t}static fromPath(t){return new cn(sn.fromString(t))}static fromName(t){return new cn(sn.fromString(t).popFirst(5))}static empty(){return new cn(sn.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===sn.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return sn.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new cn(new sn(t.slice()))}}
/**
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
 */function un(t,e,n){if(!n)throw new Fe(Ve.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hn(t){if(!cn.isDocumentKey(t))throw new Fe(Ve.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ln(t){if(cn.isDocumentKey(t))throw new Fe(Ve.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function dn(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}function fn(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":Oe(12329,{type:typeof t})}function pn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Fe(Ve.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fn(t);throw new Fe(Ve.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2025 Google LLC
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
 */function gn(t,e){const n={typeString:t};return e&&(n.value=e),n}function mn(t,e){if(!dn(t))throw new Fe(Ve.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(void 0!==i&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Fe(Ve.INVALID_ARGUMENT,n);return!0}
/**
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
 */const yn=-62135596800,vn=1e6;class wn{static now(){return wn.fromMillis(Date.now())}static fromDate(t){return wn.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*vn);return new wn(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Fe(Ve.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Fe(Ve.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<yn)throw new Fe(Ve.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Fe(Ve.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vn}_compareTo(t){return this.seconds===t.seconds?Xe(this.nanoseconds,t.nanoseconds):Xe(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:wn._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(mn(t,wn._jsonSchema))return new wn(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-yn;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}wn._jsonSchemaVersion="firestore/timestamp/1.0",wn._jsonSchema={type:gn("string",wn._jsonSchemaVersion),seconds:gn("number"),nanoseconds:gn("number")};
/**
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
 */
class bn{static fromTimestamp(t){return new bn(t)}static min(){return new bn(new wn(0,0))}static max(){return new bn(new wn(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */function En(t){return new _n(t.readTime,t.key,-1)}class _n{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new _n(bn.min(),cn.empty(),-1)}static max(){return new _n(bn.max(),cn.empty(),-1)}}function Tn(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=cn.comparator(t.documentKey,e.documentKey),0!==n?n:Xe(t.largestBatchId,e.largestBatchId)
/**
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
 */)}class Sn{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
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
 */async function In(t){if(t.code!==Ve.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;Ne("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class Cn{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Oe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Cn((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof Cn?e:Cn.resolve(e)}catch(e){return Cn.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):Cn.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):Cn.reject(e)}static resolve(t){return new Cn((e,n)=>{e(t)})}static reject(t){return new Cn((e,n)=>{n(t)})}static waitFor(t){return new Cn((e,n)=>{let r=0,s=0,i=!1;t.forEach(t=>{++r,t.next(()=>{++s,i&&s===r&&e()},t=>n(t))}),i=!0,s===r&&e()})}static or(t){let e=Cn.resolve(!1);for(const n of t)e=e.next(t=>t?Cn.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}static mapArray(t,e){return new Cn((n,r)=>{const s=t.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next(t=>{i[c]=t,++o,o===s&&n(i)},t=>r(t))}})}static doWhile(t,e){return new Cn((n,r)=>{const s=()=>{!0===t()?e().next(()=>{s()},r):n()};s()})}}function An(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Dn{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ae(t),this.ue=t=>e.writeSequenceNumber(t))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Dn.ce=-1;function Nn(t){return null==t}function kn(t){return 0===t&&1/t==-1/0}function Rn(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const e=t.charAt(s);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function xn(t){return t+""}
/**
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
 */function On(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ln(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Mn(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
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
 */class Pn{constructor(t,e){this.comparator=t,this.root=e||Fn.EMPTY}insert(t,e){return new Pn(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Fn.BLACK,null,null))}remove(t){return new Pn(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Fn.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Vn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Vn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Vn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Vn(this.root,t,this.comparator,!0)}}class Vn{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Fn{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:Fn.RED,this.left=null!=r?r:Fn.EMPTY,this.right=null!=s?s:Fn.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new Fn(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Fn.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Fn.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Fn.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Fn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Oe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Oe(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw Oe(27949);return t+(this.isRed()?0:1)}}Fn.EMPTY=null,Fn.RED=!0,Fn.BLACK=!1,Fn.EMPTY=new class{constructor(){this.size=0}get key(){throw Oe(57766)}get value(){throw Oe(16141)}get color(){throw Oe(16727)}get left(){throw Oe(29726)}get right(){throw Oe(36894)}copy(t,e,n,r,s){return this}insert(t,e,n){return new Fn(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class Un{constructor(t){this.comparator=t,this.data=new Pn(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Bn(this.data.getIterator())}getIteratorFrom(t){return new Bn(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Un))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Un(this.comparator);return e.data=t,e}}class Bn{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */class jn{constructor(t){this.fields=t,t.sort(an.comparator)}static empty(){return new jn([])}unionWith(t){let e=new Un(an.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new jn(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return en(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class qn extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */class $n{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new qn("Invalid base64 string: "+e):e}}(t);return new $n(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new $n(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Xe(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}$n.EMPTY_BYTE_STRING=new $n("");const zn=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gn(t){if(Me(!!t,39018),"string"==typeof t){let e=0;const n=zn.exec(t);if(Me(!!n,46558,{timestamp:t}),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Hn(t.seconds),nanos:Hn(t.nanos)}}function Hn(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Kn(t){return"string"==typeof t?$n.fromBase64String(t):$n.fromUint8Array(t)}
/**
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
 */const Qn="server_timestamp",Wn="__type__",Xn="__previous_value__",Yn="__local_write_time__";function Jn(t){var e,n;return(null==(n=((null==(e=null==t?void 0:t.mapValue)?void 0:e.fields)||{})[Wn])?void 0:n.stringValue)===Qn}function Zn(t){const e=t.mapValue.fields[Xn];return Jn(e)?Zn(e):e}function tr(t){const e=Gn(t.mapValue.fields[Yn].timestampValue);return new wn(e.seconds,e.nanos)}
/**
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
 */class er{constructor(t,e,n,r,s,i,o,a,c,u){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c,this.isUsingEmulator=u}}const nr="(default)";class rr{constructor(t,e){this.projectId=t,this.database=e||nr}static empty(){return new rr("","")}get isDefaultDatabase(){return this.database===nr}isEqual(t){return t instanceof rr&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
 */const sr="__type__",ir="__max__",or={},ar="__vector__",cr="value";function ur(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jn(t)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===ir}
/**
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
 */(t)?9007199254740991:function(t){var e,n;const r=null==(n=((null==(e=null==t?void 0:t.mapValue)?void 0:e.fields)||{})[sr])?void 0:n.stringValue;return r===ar}(t)?10:11:Oe(28295,{value:t})}function hr(t,e){if(t===e)return!0;const n=ur(t);if(n!==ur(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return tr(t).isEqual(tr(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Gn(t.timestampValue),r=Gn(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return r=e,Kn(t.bytesValue).isEqual(Kn(r.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Hn(t.geoPointValue.latitude)===Hn(e.geoPointValue.latitude)&&Hn(t.geoPointValue.longitude)===Hn(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Hn(t.integerValue)===Hn(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Hn(t.doubleValue),r=Hn(e.doubleValue);return n===r?kn(n)===kn(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return en(t.arrayValue.values||[],e.arrayValue.values||[],hr);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(On(n)!==On(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!hr(n[s],r[s])))return!1;return!0}(t,e);default:return Oe(52216,{left:t})}var r}function lr(t,e){return void 0!==(t.values||[]).find(t=>hr(t,e))}function dr(t,e){if(t===e)return 0;const n=ur(t),r=ur(e);if(n!==r)return Xe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Xe(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Hn(t.integerValue||t.doubleValue),r=Hn(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return fr(t.timestampValue,e.timestampValue);case 4:return fr(tr(t),tr(e));case 5:return Ye(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Kn(t),r=Kn(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=Xe(n[s],r[s]);if(0!==t)return t}return Xe(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Xe(Hn(t.latitude),Hn(e.latitude));return 0!==n?n:Xe(Hn(t.longitude),Hn(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return pr(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,r,s,i;const o=t.fields||{},a=e.fields||{},c=null==(n=o[cr])?void 0:n.arrayValue,u=null==(r=a[cr])?void 0:r.arrayValue,h=Xe((null==(s=null==c?void 0:c.values)?void 0:s.length)||0,(null==(i=null==u?void 0:u.values)?void 0:i.length)||0);return 0!==h?h:pr(c,u)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===or&&e===or)return 0;if(t===or)return 1;if(e===or)return-1;const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=Ye(r[o],i[o]);if(0!==t)return t;const e=dr(n[r[o]],s[i[o]]);if(0!==e)return e}return Xe(r.length,i.length)}(t.mapValue,e.mapValue);default:throw Oe(23264,{he:n})}}function fr(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Xe(t,e);const n=Gn(t),r=Gn(e),s=Xe(n.seconds,r.seconds);return 0!==s?s:Xe(n.nanos,r.nanos)}function pr(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=dr(n[s],r[s]);if(t)return t}return Xe(n.length,r.length)}function gr(t){return mr(t)}function mr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Gn(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Kn(t.bytesValue).toBase64():"referenceValue"in t?function(t){return cn.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=mr(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${mr(t.fields[s])}`;return n+"}"}(t.mapValue):Oe(61005,{value:t})}function yr(t){switch(ur(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Zn(t);return e?16+yr(e):16;case 5:return 2*t.stringValue.length;case 6:return Kn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,e)=>t+yr(e),0);case 10:case 11:return function(t){let e=0;return Ln(t.fields,(t,n)=>{e+=t.length+yr(n)}),e}(t.mapValue);default:throw Oe(13486,{value:t})}}function vr(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function wr(t){return!!t&&"integerValue"in t}function br(t){return!!t&&"arrayValue"in t}function Er(t){return!!t&&"nullValue"in t}function _r(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Tr(t){return!!t&&"mapValue"in t}function Sr(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Ln(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Sr(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Sr(t.arrayValue.values[n]);return e}return{...t}}class Ir{constructor(t){this.value=t}static empty(){return new Ir({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Tr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Sr(e)}setAll(t){let e=an.emptyPath(),n={},r=[];t.forEach((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=Sr(t):r.push(s.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());Tr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return hr(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Tr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Ln(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new Ir(Sr(this.value))}}function Cr(t){const e=[];return Ln(t.fields,(t,n)=>{const r=new an([t]);if(Tr(n)){const t=Cr(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new jn(e)
/**
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
 */}class Ar{constructor(t,e,n,r,s,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=o}static newInvalidDocument(t){return new Ar(t,0,bn.min(),bn.min(),bn.min(),Ir.empty(),0)}static newFoundDocument(t,e,n,r){return new Ar(t,1,e,bn.min(),n,r,0)}static newNoDocument(t,e){return new Ar(t,2,e,bn.min(),bn.min(),Ir.empty(),0)}static newUnknownDocument(t,e){return new Ar(t,3,e,bn.min(),bn.min(),Ir.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(bn.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ir.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ir.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=bn.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Ar&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ar(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class Dr{constructor(t,e){this.position=t,this.inclusive=e}}function Nr(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?cn.comparator(cn.fromName(o.referenceValue),n.key):dr(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function kr(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hr(t.position[n],e.position[n]))return!1;return!0}
/**
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
 */class Rr{constructor(t,e="asc"){this.field=t,this.dir=e}}function xr(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
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
 */class Or{}class Lr extends Or{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new jr(t,e,n):"array-contains"===e?new Gr(t,n):"in"===e?new Hr(t,n):"not-in"===e?new Kr(t,n):"array-contains-any"===e?new Qr(t,n):new Lr(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new qr(t,n):new $r(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&void 0===e.nullValue&&this.matchesComparison(dr(e,this.value)):null!==e&&ur(this.value)===ur(e)&&this.matchesComparison(dr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Oe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mr extends Or{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Mr(t,e)}matches(t){return Pr(this)?void 0===this.filters.find(e=>!e.matches(t)):void 0!==this.filters.find(e=>e.matches(t))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Pr(t){return"and"===t.op}function Vr(t){return function(t){for(const e of t.filters)if(e instanceof Mr)return!1;return!0}(t)&&Pr(t)}function Fr(t){if(t instanceof Lr)return t.field.canonicalString()+t.op.toString()+gr(t.value);if(Vr(t))return t.filters.map(t=>Fr(t)).join(",");{const e=t.filters.map(t=>Fr(t)).join(",");return`${t.op}(${e})`}}function Ur(t,e){return t instanceof Lr?(n=t,(r=e)instanceof Lr&&n.op===r.op&&n.field.isEqual(r.field)&&hr(n.value,r.value)):t instanceof Mr?function(t,e){return e instanceof Mr&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce((t,n,r)=>t&&Ur(n,e.filters[r]),!0)}(t,e):void Oe(19439);var n,r}function Br(t){return t instanceof Lr?`${(e=t).field.canonicalString()} ${e.op} ${gr(e.value)}`:t instanceof Mr?function(t){return t.op.toString()+" {"+t.getFilters().map(Br).join(" ,")+"}"}(t):"Filter";var e}class jr extends Lr{constructor(t,e,n){super(t,e,n),this.key=cn.fromName(n.referenceValue)}matches(t){const e=cn.comparator(t.key,this.key);return this.matchesComparison(e)}}class qr extends Lr{constructor(t,e){super(t,"in",e),this.keys=zr("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class $r extends Lr{constructor(t,e){super(t,"not-in",e),this.keys=zr("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function zr(t,e){var n;return((null==(n=e.arrayValue)?void 0:n.values)||[]).map(t=>cn.fromName(t.referenceValue))}class Gr extends Lr{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return br(e)&&lr(e.arrayValue,this.value)}}class Hr extends Lr{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&lr(this.value.arrayValue,e)}}class Kr extends Lr{constructor(t,e){super(t,"not-in",e)}matches(t){if(lr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&void 0===e.nullValue&&!lr(this.value.arrayValue,e)}}class Qr extends Lr{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!br(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>lr(this.value.arrayValue,t))}}
/**
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
 */class Wr{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.Te=null}}function Xr(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Wr(t,e,n,r,s,i,o)}function Yr(t){const e=Pe(t);if(null===e.Te){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>Fr(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>{return(e=t).field.canonicalString()+e.dir;var e}).join(","),Nn(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>gr(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>gr(t)).join(",")),e.Te=t}return e.Te}function Jr(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xr(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ur(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!kr(t.startAt,e.startAt)&&kr(t.endAt,e.endAt)}function Zr(t){return cn.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
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
 */class ts{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function es(t){return new ts(t)}function ns(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function rs(t){return null!==t.collectionGroup}function ss(t){const e=Pe(t);if(null===e.Ie){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(t){let e=new Un(an.comparator);return t.filters.forEach(t=>{t.getFlattenedFilters().forEach(t=>{t.isInequality()&&(e=e.add(t.field))})}),e})(e).forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new Rr(r,n))}),t.has(an.keyField().canonicalString())||e.Ie.push(new Rr(an.keyField(),n))}return e.Ie}function is(t){const e=Pe(t);return e.Ee||(e.Ee=function(t,e){if("F"===t.limitType)return Xr(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(t=>{const e="desc"===t.dir?"asc":"desc";return new Rr(t.field,e)});const n=t.endAt?new Dr(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Dr(t.startAt.position,t.startAt.inclusive):null;return Xr(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}(e,ss(t))),e.Ee}function os(t,e){const n=t.filters.concat([e]);return new ts(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function as(t,e,n){return new ts(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function cs(t,e){return Jr(is(t),is(e))&&t.limitType===e.limitType}function us(t){return`${Yr(is(t))}|lt:${t.limitType}`}function hs(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>Br(t)).join(", ")}]`),Nn(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e}).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>gr(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>gr(t)).join(",")),`Target(${e})`}(is(t))}; limitType=${t.limitType})`}function ls(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):cn.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of ss(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(r=e,!((n=t).startAt&&!function(t,e,n){const r=Nr(t,e,n);return t.inclusive?r<=0:r<0}(n.startAt,ss(n),r)||n.endAt&&!function(t,e,n){const r=Nr(t,e,n);return t.inclusive?r>=0:r>0}(n.endAt,ss(n),r)));var n,r}function ds(t){return(e,n)=>{let r=!1;for(const s of ss(t)){const t=fs(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function fs(t,e,n){const r=t.field.isKeyField()?cn.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?dr(r,s):Oe(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Oe(19790,{direction:t.dir})}}
/**
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
 */class ps{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Ln(this.inner,(e,n)=>{for(const[r,s]of n)t(r,s)})}isEmpty(){return Mn(this.inner)}size(){return this.innerSize}}
/**
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
 */const gs=new Pn(cn.comparator);function ms(){return gs}const ys=new Pn(cn.comparator);function vs(...t){let e=ys;for(const n of t)e=e.insert(n.key,n);return e}function ws(t){let e=ys;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function bs(){return _s()}function Es(){return _s()}function _s(){return new ps(t=>t.toString(),(t,e)=>t.isEqual(e))}const Ts=new Pn(cn.comparator),Ss=new Un(cn.comparator);function Is(...t){let e=Ss;for(const n of t)e=e.add(n);return e}const Cs=new Un(Xe);
/**
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
 */
function As(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kn(e)?"-0":e}}function Ds(t){return{integerValue:""+t}}function Ns(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!kn(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
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
 */(e)?Ds(e):As(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ks{constructor(){this._=void 0}}function Rs(t,e,n){return t instanceof Ls?function(t,e){const n={fields:{[Wn]:{stringValue:Qn},[Yn]:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Jn(e)&&(e=Zn(e)),e&&(n.fields[Xn]=e),{mapValue:n}}(n,e):t instanceof Ms?Ps(t,e):t instanceof Vs?Fs(t,e):function(t,e){const n=Os(t,e),r=Bs(n)+Bs(t.Ae);return wr(n)&&wr(t.Ae)?Ds(r):As(t.serializer,r)}(t,e)}function xs(t,e,n){return t instanceof Ms?Ps(t,e):t instanceof Vs?Fs(t,e):n}function Os(t,e){return t instanceof Us?wr(n=e)||(r=n)&&"doubleValue"in r?e:{integerValue:0}:null;var n,r}class Ls extends ks{}class Ms extends ks{constructor(t){super(),this.elements=t}}function Ps(t,e){const n=js(e);for(const r of t.elements)n.some(t=>hr(t,r))||n.push(r);return{arrayValue:{values:n}}}class Vs extends ks{constructor(t){super(),this.elements=t}}function Fs(t,e){let n=js(e);for(const r of t.elements)n=n.filter(t=>!hr(t,r));return{arrayValue:{values:n}}}class Us extends ks{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Bs(t){return Hn(t.integerValue||t.doubleValue)}function js(t){return br(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
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
 */class qs{constructor(t,e){this.field=t,this.transform=e}}class $s{constructor(t,e){this.version=t,this.transformResults=e}}class zs{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new zs}static exists(t){return new zs(void 0,t)}static updateTime(t){return new zs(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Gs(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Hs{}function Ks(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new ri(t.key,zs.none()):new Js(t.key,t.data,zs.none());{const n=t.data,r=Ir.empty();let s=new Un(an.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),s=s.add(t)}return new Zs(t.key,r,new jn(s.toArray()),zs.none())}}function Qs(t,e,n){var r;t instanceof Js?function(t,e,n){const r=t.value.clone(),s=ei(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Zs?function(t,e,n){if(!Gs(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=ei(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(ti(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):(r=n,e.convertToNoDocument(r.version).setHasCommittedMutations())}function Ws(t,e,n,r){return t instanceof Js?function(t,e,n,r){if(!Gs(t.precondition,e))return n;const s=t.value.clone(),i=ni(t.fieldTransforms,r,e);return s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,r):t instanceof Zs?function(t,e,n,r){if(!Gs(t.precondition,e))return n;const s=ni(t.fieldTransforms,r,e),i=e.data;return i.setAll(ti(t)),i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,r):(s=e,i=n,Gs(t.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):i);var s,i}function Xs(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=Os(r.transform,t||null);null!=s&&(null===n&&(n=Ir.empty()),n.set(r.field,s))}return n||null}function Ys(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,r=e.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&en(n,r,(t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,r=e.transform,n instanceof Ms&&r instanceof Ms||n instanceof Vs&&r instanceof Vs?en(n.elements,r.elements,hr):n instanceof Us&&r instanceof Us?hr(n.Ae,r.Ae):n instanceof Ls&&r instanceof Ls);var n,r}(t,e)))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask)));var n,r}class Js extends Hs{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Zs extends Hs{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ti(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ei(t,e,n){const r=new Map;Me(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,xs(o,a,n[s]))}return r}function ni(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,Rs(t,i,e))}return r}class ri extends Hs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class si extends Hs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */class ii{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Qs(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ws(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ws(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Es();return this.mutations.forEach(r=>{const s=t.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=e.has(r.key)?null:o;const a=Ks(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(bn.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Is())}isEqual(t){return this.batchId===t.batchId&&en(this.mutations,t.mutations,(t,e)=>Ys(t,e))&&en(this.baseMutations,t.baseMutations,(t,e)=>Ys(t,e))}}class oi{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Me(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let r=function(){return Ts}();const s=t.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new oi(t,e,n,r)}}
/**
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
 */class ai{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */class ci{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
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
 */var ui,hi;function li(t){if(void 0===t)return ke("GRPC error has no .code"),Ve.UNKNOWN;switch(t){case ui.OK:return Ve.OK;case ui.CANCELLED:return Ve.CANCELLED;case ui.UNKNOWN:return Ve.UNKNOWN;case ui.DEADLINE_EXCEEDED:return Ve.DEADLINE_EXCEEDED;case ui.RESOURCE_EXHAUSTED:return Ve.RESOURCE_EXHAUSTED;case ui.INTERNAL:return Ve.INTERNAL;case ui.UNAVAILABLE:return Ve.UNAVAILABLE;case ui.UNAUTHENTICATED:return Ve.UNAUTHENTICATED;case ui.INVALID_ARGUMENT:return Ve.INVALID_ARGUMENT;case ui.NOT_FOUND:return Ve.NOT_FOUND;case ui.ALREADY_EXISTS:return Ve.ALREADY_EXISTS;case ui.PERMISSION_DENIED:return Ve.PERMISSION_DENIED;case ui.FAILED_PRECONDITION:return Ve.FAILED_PRECONDITION;case ui.ABORTED:return Ve.ABORTED;case ui.OUT_OF_RANGE:return Ve.OUT_OF_RANGE;case ui.UNIMPLEMENTED:return Ve.UNIMPLEMENTED;case ui.DATA_LOSS:return Ve.DATA_LOSS;default:return Oe(39323,{code:t})}}(hi=ui||(ui={}))[hi.OK=0]="OK",hi[hi.CANCELLED=1]="CANCELLED",hi[hi.UNKNOWN=2]="UNKNOWN",hi[hi.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",hi[hi.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",hi[hi.NOT_FOUND=5]="NOT_FOUND",hi[hi.ALREADY_EXISTS=6]="ALREADY_EXISTS",hi[hi.PERMISSION_DENIED=7]="PERMISSION_DENIED",hi[hi.UNAUTHENTICATED=16]="UNAUTHENTICATED",hi[hi.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",hi[hi.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",hi[hi.ABORTED=10]="ABORTED",hi[hi.OUT_OF_RANGE=11]="OUT_OF_RANGE",hi[hi.UNIMPLEMENTED=12]="UNIMPLEMENTED",hi[hi.INTERNAL=13]="INTERNAL",hi[hi.UNAVAILABLE=14]="UNAVAILABLE",hi[hi.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
const di=new le([4294967295,4294967295],0);function fi(t){const e=(new TextEncoder).encode(t),n=new de;return n.update(e),new Uint8Array(n.digest())}function pi(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new le([n,r],0),new le([s,i],0)]}class gi{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new mi(`Invalid padding: ${e}`);if(n<0)throw new mi(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new mi(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new mi(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=le.fromNumber(this.ge)}ye(t,e,n){let r=t.add(e.multiply(le.fromNumber(n)));return 1===r.compare(di)&&(r=new le([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.ge)return!1;const e=fi(t),[n,r]=pi(e);for(let s=0;s<this.hashCount;s++){const t=this.ye(n,r,s);if(!this.we(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),i=new gi(s,r,e);return n.forEach(t=>i.insert(t)),i}insert(t){if(0===this.ge)return;const e=fi(t),[n,r]=pi(e);for(let s=0;s<this.hashCount;s++){const t=this.ye(n,r,s);this.Se(t)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class mi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
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
 */class yi{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,vi.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new yi(bn.min(),r,new Pn(Xe),ms(),Is())}}class vi{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new vi(n,e,Is(),Is(),Is())}}
/**
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
 */class wi{constructor(t,e,n,r){this.be=t,this.removedTargetIds=e,this.key=n,this.De=r}}class bi{constructor(t,e){this.targetId=t,this.Ce=e}}class Ei{constructor(t,e,n=$n.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class _i{constructor(){this.ve=0,this.Fe=Ii(),this.Me=$n.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Is(),e=Is(),n=Is();return this.Fe.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Oe(38017,{changeType:s})}}),new vi(this.Me,this.xe,t,e,n)}qe(){this.Oe=!1,this.Fe=Ii()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Me(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Ti{constructor(t){this.Ge=t,this.ze=new Map,this.je=ms(),this.Je=Si(),this.He=Si(),this.Ye=new Pn(Xe)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(t.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.We(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:Oe(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((t,n)=>{this.rt(n)&&e(n)})}st(t){const e=t.targetId,n=t.Ce.count,r=this.ot(e);if(r){const s=r.target;if(Zr(s))if(0===n){const t=new cn(s.path);this.et(e,t,Ar.newNoDocument(t,bn.min()))}else Me(1===n,20013,{expectedCount:n});else{const r=this._t(e);if(r!==n){const n=this.ut(t),s=n?this.ct(n,t,r):1;if(0!==s){this.it(e);const t=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,t)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=e;let i,o;try{i=Kn(n).toUint8Array()}catch(a){if(a instanceof qn)return Re("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{o=new gi(i,r,s)}catch(a){return Re(a instanceof mi?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return 0===o.ge?null:o}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let r=0;return n.forEach(n=>{const s=this.Ge.ht(),i=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;t.mightContain(i)||(this.et(e,n,null),r++)}),r}Tt(t){const e=new Map;this.ze.forEach((n,r)=>{const s=this.ot(r);if(s){if(n.current&&Zr(s.target)){const e=new cn(s.target.path);this.It(e).has(r)||this.Et(r,e)||this.et(r,e,Ar.newNoDocument(e,t))}n.Be&&(e.set(r,n.ke()),n.qe())}});let n=Is();this.He.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.ot(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))}),this.je.forEach((e,n)=>n.setReadTime(t));const r=new yi(t,e,this.Ye,this.je,n);return this.je=ms(),this.Je=Si(),this.He=Si(),this.Ye=new Pn(Xe),r}Xe(t,e){if(!this.rt(t))return;const n=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,n),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const r=this.nt(t);this.Et(t,e)?r.Qe(e,1):r.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new _i,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new Un(Xe),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new Un(Xe),this.Je=this.Je.insert(t,e)),e}rt(t){const e=null!==this.ot(t);return e||Ne("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new _i),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Si(){return new Pn(cn.comparator)}function Ii(){return new Pn(cn.comparator)}const Ci=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ai=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Di=(()=>({and:"AND",or:"OR"}))();class Ni{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ki(t,e){return t.useProto3Json||Nn(e)?e:{value:e}}function Ri(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xi(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Oi(t,e){return Ri(t,e.toTimestamp())}function Li(t){return Me(!!t,49232),bn.fromTimestamp(function(t){const e=Gn(t);return new wn(e.seconds,e.nanos)}(t))}function Mi(t,e){return Pi(t,e).canonicalString()}function Pi(t,e){const n=(r=t,new sn(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===e?n:n.child(e)}function Vi(t){const e=sn.fromString(t);return Me(eo(e),10190,{key:e.toString()}),e}function Fi(t,e){return Mi(t.databaseId,e.path)}function Ui(t,e){const n=Vi(e);if(n.get(1)!==t.databaseId.projectId)throw new Fe(Ve.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Fe(Ve.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new cn(qi(n))}function Bi(t,e){return Mi(t.databaseId,e)}function ji(t){return new sn(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qi(t){return Me(t.length>4&&"documents"===t.get(4),29091,{key:t.toString()}),t.popFirst(5)}function $i(t,e,n){return{name:Fi(t,e),fields:n.value.mapValue.fields}}function zi(t,e){return{documents:[Bi(t,e.path)]}}function Gi(t,e){const n={structuredQuery:{}},r=e.path;let s;null!==e.collectionGroup?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Bi(t,s);const i=function(t){if(0!==t.length)return Zi(Mr.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(t){if(0!==t.length)return t.map(t=>{return{field:Yi((e=t).field),direction:Qi(e.dir)};var e})}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=ki(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt={before:(c=e.startAt).inclusive,values:c.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{ft:n,parent:s};var c}function Hi(t){let e=function(t){const e=Vi(t);return 4===e.length?sn.emptyPath():qi(e)}(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Me(1===r,65062);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=function(t){const e=Ki(t);return e instanceof Mr&&Vr(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>{return new Rr(Ji((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e}));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Nn(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Dr(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Dr(n,e)}(n.endAt)),function(t,e,n,r,s,i,o,a){return new ts(t,e,n,r,s,i,o,a)}(e,s,o,i,a,"F",c,u)}function Ki(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ji(t.unaryFilter.field);return Lr.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ji(t.unaryFilter.field);return Lr.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ji(t.unaryFilter.field);return Lr.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ji(t.unaryFilter.field);return Lr.create(s,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Oe(61313);default:return Oe(60726)}}(t):void 0!==t.fieldFilter?(e=t,Lr.create(Ji(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Oe(58110);default:return Oe(50506)}}(e.fieldFilter.op),e.fieldFilter.value)):void 0!==t.compositeFilter?function(t){return Mr.create(t.compositeFilter.filters.map(t=>Ki(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Oe(1026)}}(t.compositeFilter.op))}(t):Oe(30097,{filter:t});var e}function Qi(t){return Ci[t]}function Wi(t){return Ai[t]}function Xi(t){return Di[t]}function Yi(t){return{fieldPath:t.canonicalString()}}function Ji(t){return an.fromServerFormat(t.fieldPath)}function Zi(t){return t instanceof Lr?function(t){if("=="===t.op){if(_r(t.value))return{unaryFilter:{field:Yi(t.field),op:"IS_NAN"}};if(Er(t.value))return{unaryFilter:{field:Yi(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(_r(t.value))return{unaryFilter:{field:Yi(t.field),op:"IS_NOT_NAN"}};if(Er(t.value))return{unaryFilter:{field:Yi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yi(t.field),op:Wi(t.op),value:t.value}}}(t):t instanceof Mr?function(t){const e=t.getFilters().map(t=>Zi(t));return 1===e.length?e[0]:{compositeFilter:{op:Xi(t.op),filters:e}}}(t):Oe(54877,{filter:t})}function to(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function eo(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
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
 */class no{constructor(t,e,n,r,s=bn.min(),i=bn.min(),o=$n.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new no(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new no(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new no(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new no(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
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
 */class ro{constructor(t){this.yt=t}}function so(t){const e=Hi({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?as(e,e.limit,"L"):e}
/**
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
 */class io{constructor(){this.Cn=new oo}addToCollectionParentIndex(t,e){return this.Cn.add(e),Cn.resolve()}getCollectionParents(t,e){return Cn.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return Cn.resolve()}deleteFieldIndex(t,e){return Cn.resolve()}deleteAllFieldIndexes(t){return Cn.resolve()}createTargetIndexes(t,e){return Cn.resolve()}getDocumentsMatchingTarget(t,e){return Cn.resolve(null)}getIndexType(t,e){return Cn.resolve(0)}getFieldIndexes(t,e){return Cn.resolve([])}getNextCollectionGroupToUpdate(t){return Cn.resolve(null)}getMinOffset(t,e){return Cn.resolve(_n.min())}getMinOffsetFromCollectionGroup(t,e){return Cn.resolve(_n.min())}updateCollectionGroup(t,e,n){return Cn.resolve()}updateIndexEntries(t,e){return Cn.resolve()}}class oo{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Un(sn.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Un(sn.comparator)).toArray()}}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */const ao={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},co=41943040;class uo{static withCacheSize(t){return new uo(t,uo.DEFAULT_COLLECTION_PERCENTILE,uo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
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
 */uo.DEFAULT_COLLECTION_PERCENTILE=10,uo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,uo.DEFAULT=new uo(co,uo.DEFAULT_COLLECTION_PERCENTILE,uo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),uo.DISABLED=new uo(-1,0,0);
/**
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
 */
class ho{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new ho(0)}static cr(){return new ho(-1)}}
/**
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
 */const lo="LruGarbageCollector";function fo([t,e],[n,r]){const s=Xe(t,n);return 0===s?Xe(e,r):s}class po{constructor(t){this.Ir=t,this.buffer=new Un(fo),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();fo(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class go{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Vr(t){Ne(lo,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){An(t)?Ne(lo,"Ignoring IndexedDB error during garbage collection: ",t):await In(t)}await this.Vr(3e5)})}}class mo{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next(t=>Math.floor(e/100*t))}nthSequenceNumber(t,e){if(0===e)return Cn.resolve(Dn.ce);const n=new po(e);return this.mr.forEachTarget(t,t=>n.Ar(t.sequenceNumber)).next(()=>this.mr.pr(t,t=>n.Ar(t))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.mr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(Ne("LruGarbageCollector","Garbage collection skipped; disabled"),Cn.resolve(ao)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(Ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ao):this.yr(t,e))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let n,r,s,i,o,a,c;const u=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(e=>(e>this.params.maximumSequenceNumbersToCollect?(Ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,i=Date.now(),this.nthSequenceNumber(t,r))).next(r=>(n=r,o=Date.now(),this.removeTargets(t,n,e))).next(e=>(s=e,a=Date.now(),this.removeOrphanedDocuments(t,n))).next(t=>(c=Date.now(),De()<=j.DEBUG&&Ne("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-u}ms\n\tDetermined least recently used ${r} in `+(o-i)+`ms\n\tRemoved ${s} targets in `+(a-o)+`ms\n\tRemoved ${t} documents in `+(c-a)+`ms\nTotal Duration: ${c-u}ms`),Cn.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:t})))}}
/**
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
 */
class yo{constructor(){this.changes=new ps(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ar.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Cn.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
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
 */
/**
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
 */class vo{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
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
 */class wo{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.remoteDocumentCache.getEntry(t,e))).next(t=>(null!==n&&Ws(n.mutation,t,jn.empty(),wn.now()),t))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,Is()).next(()=>e))}getLocalViewOfDocuments(t,e,n=Is()){const r=bs();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(t=>{let e=vs();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}getOverlayedDocuments(t,e){const n=bs();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,Is()))}populateOverlays(t,e,n){const r=[];return n.forEach(t=>{e.has(t)||r.push(t)}),this.documentOverlayCache.getOverlays(t,r).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}computeViews(t,e,n,r){let s=ms();const i=_s(),o=_s();return e.forEach((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Zs)?s=s.insert(e.key,e):void 0!==o?(i.set(e.key,o.mutation.getFieldMask()),Ws(o.mutation,e,o.mutation.getFieldMask(),wn.now())):i.set(e.key,jn.empty())}),this.recalculateAndSaveOverlays(t,s).next(t=>(t.forEach((t,e)=>i.set(t,e)),e.forEach((t,e)=>o.set(t,new vo(e,i.get(t)??null))),o))}recalculateAndSaveOverlays(t,e){const n=_s();let r=new Pn((t,e)=>t-e),s=Is();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(const s of t)s.keys().forEach(t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||jn.empty();o=s.applyToLocalView(i,o),n.set(t,o);const a=(r.get(s.batchId)||Is()).add(t);r=r.insert(s.batchId,a)})}).next(()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Es();c.forEach(t=>{if(!s.has(t)){const r=Ks(e.get(t),n.get(t));null!==r&&u.set(t,r),s=s.add(t)}}),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Cn.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}getDocumentsMatchingQuery(t,e,n,r){return s=e,cn.isDocumentKey(s.path)&&null===s.collectionGroup&&0===s.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):rs(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r);var s}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):Cn.resolve(bs());let o=-1,a=s;return i.next(e=>Cn.forEach(e,(e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?Cn.resolve():this.remoteDocumentCache.getEntry(t,e).next(t=>{a=a.insert(e,t)}))).next(()=>this.populateOverlays(t,e,s)).next(()=>this.computeViews(t,a,e,Is())).next(t=>({batchId:o,changes:ws(t)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new cn(e)).next(t=>{let e=vs();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const s=e.collectionGroup;let i=vs();return this.indexManager.getCollectionParents(t,s).next(o=>Cn.forEach(o,o=>{const a=(c=e,u=o.child(s),new ts(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt));var c,u;return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s,r))).next(t=>{s.forEach((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,Ar.newInvalidDocument(r)))});let n=vs();return t.forEach((t,r)=>{const i=s.get(t);void 0!==i&&Ws(i.mutation,r,jn.empty(),wn.now()),ls(e,r)&&(n=n.insert(t,r))}),n})}}
/**
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
 */class bo{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return Cn.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,{id:(n=e).id,version:n.version,createTime:Li(n.createTime)}),Cn.resolve();var n}getNamedQuery(t,e){return Cn.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,{name:(n=e).name,query:so(n.bundledQuery),readTime:Li(n.readTime)}),Cn.resolve();var n}}
/**
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
 */class Eo{constructor(){this.overlays=new Pn(cn.comparator),this.qr=new Map}getOverlay(t,e){return Cn.resolve(this.overlays.get(e))}getOverlays(t,e){const n=bs();return Cn.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,r)=>{this.St(t,e,r)}),Cn.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.qr.get(n);return void 0!==r&&(r.forEach(t=>this.overlays=this.overlays.remove(t)),this.qr.delete(n)),Cn.resolve()}getOverlaysForCollection(t,e,n){const r=bs(),s=e.length+1,i=new cn(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===s&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Cn.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new Pn((t,e)=>t-e);const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=bs(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=bs(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((t,e)=>o.set(t,e)),!(o.size()>=r)););return Cn.resolve(o)}St(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.qr.get(r.largestBatchId).delete(n.key);this.qr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new ai(e,n));let s=this.qr.get(e);void 0===s&&(s=Is(),this.qr.set(e,s)),this.qr.set(e,s.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
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
 */class _o{constructor(){this.sessionToken=$n.EMPTY_BYTE_STRING}getSessionToken(t){return Cn.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,Cn.resolve()}}
/**
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
 */class To{constructor(){this.Qr=new Un(So.$r),this.Ur=new Un(So.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const n=new So(t,e);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.Gr(new So(t,e))}zr(t,e){t.forEach(t=>this.removeReference(t,e))}jr(t){const e=new cn(new sn([])),n=new So(e,t),r=new So(e,t+1),s=[];return this.Ur.forEachInRange([n,r],t=>{this.Gr(t),s.push(t.key)}),s}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new cn(new sn([])),n=new So(e,t),r=new So(e,t+1);let s=Is();return this.Ur.forEachInRange([n,r],t=>{s=s.add(t.key)}),s}containsKey(t){const e=new So(t,0),n=this.Qr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class So{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return cn.comparator(t.key,e.key)||Xe(t.Yr,e.Yr)}static Kr(t,e){return Xe(t.Yr,e.Yr)||cn.comparator(t.key,e.key)}}
/**
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
 */class Io{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new Un(So.$r)}checkEmpty(t){return Cn.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new ii(s,e,n,r);this.mutationQueue.push(i);for(const o of r)this.Zr=this.Zr.add(new So(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Cn.resolve(i)}lookupMutationBatch(t,e){return Cn.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ei(n),s=r<0?0:r;return Cn.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Cn.resolve(0===this.mutationQueue.length?-1:this.tr-1)}getAllMutationBatches(t){return Cn.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new So(e,0),r=new So(e,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([n,r],t=>{const e=this.Xr(t.Yr);s.push(e)}),Cn.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Un(Xe);return e.forEach(t=>{const e=new So(t,0),r=new So(t,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([e,r],t=>{n=n.add(t.Yr)})}),Cn.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;cn.isDocumentKey(s)||(s=s.child(""));const i=new So(new cn(s),0);let o=new Un(Xe);return this.Zr.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.Yr)),!0)},i),Cn.resolve(this.ti(o))}ti(t){const e=[];return t.forEach(t=>{const n=this.Xr(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){Me(0===this.ni(e.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Zr;return Cn.forEach(e.mutations,r=>{const s=new So(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Zr=n})}ir(t){}containsKey(t,e){const n=new So(e,0),r=this.Zr.firstAfterOrEqual(n);return Cn.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Cn.resolve()}ni(t,e){return this.ei(t)}ei(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
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
 */class Co{constructor(t){this.ri=t,this.docs=new Pn(cn.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,i=this.ri(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Cn.resolve(n?n.document.mutableCopy():Ar.newInvalidDocument(e))}getEntries(t,e){let n=ms();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Ar.newInvalidDocument(t))}),Cn.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let s=ms();const i=e.path,o=new cn(i.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!i.isPrefixOf(t.path))break;t.path.length>i.length+1||Tn(En(o),n)<=0||(r.has(o.key)||ls(e,o))&&(s=s.insert(o.key,o.mutableCopy()))}return Cn.resolve(s)}getAllFromCollectionGroup(t,e,n,r){Oe(9500)}ii(t,e){return Cn.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Ao(this)}getSize(t){return Cn.resolve(this.size)}}class Ao extends yo{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.Nr.addEntry(t,r)):this.Nr.removeEntry(n)}),Cn.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}
/**
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
 */class Do{constructor(t){this.persistence=t,this.si=new ps(t=>Yr(t),Jr),this.lastRemoteSnapshotVersion=bn.min(),this.highestTargetId=0,this.oi=0,this._i=new To,this.targetCount=0,this.ai=ho.ur()}forEachTarget(t,e){return this.si.forEach((t,n)=>e(n)),Cn.resolve()}getLastRemoteSnapshotVersion(t){return Cn.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Cn.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),Cn.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.oi&&(this.oi=e),Cn.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new ho(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,Cn.resolve()}updateTargetData(t,e){return this.Pr(e),Cn.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,Cn.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.si.forEach((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.si.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),Cn.waitFor(s).next(()=>r)}getTargetCount(t){return Cn.resolve(this.targetCount)}getTargetData(t,e){const n=this.si.get(e)||null;return Cn.resolve(n)}addMatchingKeys(t,e,n){return this._i.Wr(e,n),Cn.resolve()}removeMatchingKeys(t,e,n){this._i.zr(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach(e=>{s.push(r.markPotentiallyOrphaned(t,e))}),Cn.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),Cn.resolve()}getMatchingKeysForTargetId(t,e){const n=this._i.Hr(e);return Cn.resolve(n)}containsKey(t,e){return Cn.resolve(this._i.containsKey(e))}}
/**
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
 */class No{constructor(t,e){this.ui={},this.overlays={},this.ci=new Dn(0),this.li=!1,this.li=!0,this.hi=new _o,this.referenceDelegate=t(this),this.Pi=new Do(this),this.indexManager=new io,this.remoteDocumentCache=new Co(t=>this.referenceDelegate.Ti(t)),this.serializer=new ro(e),this.Ii=new bo(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Eo,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ui[t.toKey()];return n||(n=new Io(e,this.referenceDelegate),this.ui[t.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,n){Ne("MemoryPersistence","Starting transaction:",t);const r=new ko(this.ci.next());return this.referenceDelegate.Ei(),n(r).next(t=>this.referenceDelegate.di(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ai(t,e){return Cn.or(Object.values(this.ui).map(n=>()=>n.containsKey(t,e)))}}class ko extends Sn{constructor(t){super(),this.currentSequenceNumber=t}}class Ro{constructor(t){this.persistence=t,this.Ri=new To,this.Vi=null}static mi(t){return new Ro(t)}get fi(){if(this.Vi)return this.Vi;throw Oe(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.fi.delete(n.toString()),Cn.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.fi.add(n.toString()),Cn.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),Cn.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach(t=>this.fi.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.fi.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Cn.forEach(this.fi,n=>{const r=cn.fromPath(n);return this.gi(t,r).next(t=>{t||e.removeEntry(r,bn.min())})}).next(()=>(this.Vi=null,e.apply(t)))}updateLimboDocument(t,e){return this.gi(t,e).next(t=>{t?this.fi.delete(e.toString()):this.fi.add(e.toString())})}Ti(t){return 0}gi(t,e){return Cn.or([()=>Cn.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class xo{constructor(t,e){this.persistence=t,this.pi=new ps(t=>function(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=xn(e)),e=Rn(t.get(n),e);return xn(e)}(t.path),(t,e)=>t.isEqual(e)),this.garbageCollector=function(t,e){return new mo(t,e)}(this,e)}static mi(t,e){return new xo(t,e)}Ei(){}di(t){return Cn.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(t=>e.next(e=>t+e))}wr(t){let e=0;return this.pr(t,t=>{e++}).next(()=>e)}pr(t,e){return Cn.forEach(this.pi,(n,r)=>this.br(t,n,r).next(t=>t?Cn.resolve():e(r)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.ii(t,r=>this.br(t,r,e).next(t=>{t||(n++,s.removeEntry(r,bn.min()))})).next(()=>s.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),Cn.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),Cn.resolve()}removeReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),Cn.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),Cn.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=yr(t.data.value)),e}br(t,e,n){return Cn.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const t=this.pi.get(e);return Cn.resolve(void 0!==t&&t>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}
/**
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
 */class Oo{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Es=n,this.ds=r}static As(t,e){let n=Is(),r=Is();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Oo(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Lo{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
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
 */class Mo{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=T()?8:function(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}(y())>0?6:4}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,r){const s={result:null};return this.ys(t,e).next(t=>{s.result=t}).next(()=>{if(!s.result)return this.ws(t,e,r,n).next(t=>{s.result=t})}).next(()=>{if(s.result)return;const n=new Lo;return this.Ss(t,e,n).next(r=>{if(s.result=r,this.Vs)return this.bs(t,e,n,r.size)})}).next(()=>s.result)}bs(t,e,n,r){return n.documentReadCount<this.fs?(De()<=j.DEBUG&&Ne("QueryEngine","SDK will not create cache indexes for query:",hs(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),Cn.resolve()):(De()<=j.DEBUG&&Ne("QueryEngine","Query:",hs(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.gs*r?(De()<=j.DEBUG&&Ne("QueryEngine","The SDK decides to create cache indexes for query:",hs(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,is(e))):Cn.resolve())}ys(t,e){if(ns(e))return Cn.resolve(null);let n=is(e);return this.indexManager.getIndexType(t,n).next(r=>0===r?null:(null!==e.limit&&1===r&&(e=as(e,null,"F"),n=is(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(r=>{const s=Is(...r);return this.ps.getDocuments(t,s).next(r=>this.indexManager.getMinOffset(t,n).next(n=>{const i=this.Ds(e,r);return this.Cs(e,i,s,n.readTime)?this.ys(t,as(e,null,"F")):this.vs(t,i,e,n)}))})))}ws(t,e,n,r){return ns(e)||r.isEqual(bn.min())?Cn.resolve(null):this.ps.getDocuments(t,n).next(s=>{const i=this.Ds(e,s);return this.Cs(e,i,n,r)?Cn.resolve(null):(De()<=j.DEBUG&&Ne("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),hs(e)),this.vs(t,i,e,function(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=bn.fromTimestamp(1e9===r?new wn(n+1,0):new wn(n,r));return new _n(s,cn.empty(),e)}(r,-1)).next(t=>t))})}Ds(t,e){let n=new Un(ds(t));return e.forEach((e,r)=>{ls(t,r)&&(n=n.add(r))}),n}Cs(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ss(t,e,n){return De()<=j.DEBUG&&Ne("QueryEngine","Using full collection scan to execute query:",hs(e)),this.ps.getDocumentsMatchingQuery(t,e,_n.min(),n)}vs(t,e,n,r){return this.ps.getDocumentsMatchingQuery(t,n,r).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}
/**
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
 */const Po="LocalStore";class Vo{constructor(t,e,n,r){this.persistence=t,this.Fs=e,this.serializer=r,this.Ms=new Pn(Xe),this.xs=new ps(t=>Yr(t),Jr),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(n)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new wo(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}async function Fo(t,e){const n=Pe(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next(s=>(r=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(t))).next(e=>{const s=[],i=[];let o=Is();for(const t of r){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next(t=>({Ls:t,removedBatchIds:s,addedBatchIds:i}))})})}function Uo(t){const e=Pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function Bo(t,e){const n=Pe(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const i=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const o=[];e.targetChanges.forEach((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Pi.removeMatchingKeys(t,i.removedDocuments,a).next(()=>n.Pi.addMatchingKeys(t,i.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken($n.EMPTY_BYTE_STRING,bn.min()).withLastLimboFreeSnapshotVersion(bn.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(t,e,n){if(0===t.resumeToken.approximateByteSize())return!0;if(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8)return!0;return n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,u,i)&&o.push(n.Pi.updateTargetData(t,u))});let a=ms(),c=Is();if(e.documentUpdates.forEach(r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(function(t,e,n){let r=Is(),s=Is();return n.forEach(t=>r=r.add(t)),e.getEntries(t,r).next(t=>{let r=ms();return n.forEach((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(bn.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):Ne(Po,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)}),{ks:r,qs:s}})}(t,i,e.documentUpdates).next(t=>{a=t.ks,c=t.qs})),!r.isEqual(bn.min())){const e=n.Pi.getLastRemoteSnapshotVersion(t).next(e=>n.Pi.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return Cn.waitFor(o).next(()=>i.apply(t)).next(()=>n.localDocuments.getLocalViewOfDocuments(t,a,c)).next(()=>a)}).then(t=>(n.Ms=s,t))}function jo(t,e){const n=Pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e)))}async function qo(t,e,n){const r=Pe(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,t=>r.persistence.referenceDelegate.removeTarget(t,s))}catch(o){if(!An(o))throw o;Ne(Po,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function $o(t,e,n){const r=Pe(t);let s=bn.min(),i=Is();return r.persistence.runTransaction("Execute query","readwrite",t=>function(t,e,n){const r=Pe(t),s=r.xs.get(n);return void 0!==s?Cn.resolve(r.Ms.get(s)):r.Pi.getTargetData(e,n)}(r,t,is(e)).next(e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(t,e.targetId).next(t=>{i=t})}).next(()=>r.Fs.getDocumentsMatchingQuery(t,e,n?s:bn.min(),n?i:Is())).next(t=>(function(t,e,n){let r=t.Os.get(e)||bn.min();n.forEach((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)}),t.Os.set(e,r)}(r,function(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}(e),t),{documents:t,Qs:i})))}class zo{constructor(){this.activeTargetIds=Cs}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Go{constructor(){this.Mo=new zo,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,n){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new zo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
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
 */class Ho{Oo(t){}shutdown(){}}
/**
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
 */const Ko="ConnectivityMonitor";class Qo{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Ne(Ko,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){Ne(Ko,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Wo=null;function Xo(){return null===Wo?Wo=268435456+Math.round(2147483648*Math.random()):Wo++,"0x"+Wo.toString(16)
/**
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
 */}const Yo="RestConnection",Jo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Zo{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${n}/databases/${r}`,this.Wo=this.databaseId.database===nr?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Go(t,e,n,r,s){const i=Xo(),o=this.zo(t,e.toUriEncodedString());Ne(Yo,`Sending RPC '${t}' ${i}:`,o,n);const a={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(a,r,s);const{host:c}=new URL(o),u=d(c);return this.Jo(t,o,a,n,u).then(e=>(Ne(Yo,`Received RPC '${t}' ${i}: `,e),e),e=>{throw Re(Yo,`RPC '${t}' ${i} failed with error: `,e,"url: ",o,"request:",n),e})}Ho(t,e,n,r,s,i){return this.Go(t,e,n,r,s)}jo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ce,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}zo(t,e){const n=Jo[t];return`${this.Uo}/v1/${e}:${n}`}terminate(){}}
/**
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
 */class ta{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}
/**
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
 */const ea="WebChannelConnection";class na extends Zo{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,n,r,s){const i=Xo();return new Promise((s,o)=>{const a=new pe;a.setWithCredentials(!0),a.listenOnce(me.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ye.NO_ERROR:const e=a.getResponseJson();Ne(ea,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case ye.TIMEOUT:Ne(ea,`RPC '${t}' ${i} timed out`),o(new Fe(Ve.DEADLINE_EXCEEDED,"Request time out"));break;case ye.HTTP_ERROR:const n=a.getStatus();if(Ne(ea,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Ve).indexOf(e)>=0?e:Ve.UNKNOWN}(e.status);o(new Fe(t,e.message))}else o(new Fe(Ve.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Fe(Ve.UNAVAILABLE,"Connection failed."));break;default:Oe(9055,{l_:t,streamId:i,h_:a.getLastErrorCode(),P_:a.getLastError()})}}finally{Ne(ea,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(r);Ne(ea,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)})}T_(t,e,n){const r=Xo(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Ee(),o=be(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.jo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=s.join("");Ne(ea,`Creating RPC '${t}' stream ${r}: ${u}`,a);const h=i.createWebChannel(u,a);this.I_(h);let l=!1,d=!1;const f=new ta({Yo:e=>{d?Ne(ea,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(l||(Ne(ea,`Opening RPC '${t}' stream ${r} transport.`),h.open(),l=!0),Ne(ea,`RPC '${t}' stream ${r} sending:`,e),h.send(e))},Zo:()=>h.close()}),p=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(e){setTimeout(()=>{throw e},0)}})};return p(h,ge.EventType.OPEN,()=>{d||(Ne(ea,`RPC '${t}' stream ${r} transport opened.`),f.o_())}),p(h,ge.EventType.CLOSE,()=>{d||(d=!0,Ne(ea,`RPC '${t}' stream ${r} transport closed`),f.a_(),this.E_(h))}),p(h,ge.EventType.ERROR,e=>{d||(d=!0,Re(ea,`RPC '${t}' stream ${r} transport errored. Name:`,e.name,"Message:",e.message),f.a_(new Fe(Ve.UNAVAILABLE,"The operation could not be completed")))}),p(h,ge.EventType.MESSAGE,e=>{var n;if(!d){const s=e.data[0];Me(!!s,16349);const i=s,o=(null==i?void 0:i.error)||(null==(n=i[0])?void 0:n.error);if(o){Ne(ea,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=ui[t];if(void 0!==e)return li(e)}(e),s=o.message;void 0===n&&(n=Ve.INTERNAL,s="Unknown error status: "+e+" with message "+o.message),d=!0,f.a_(new Fe(n,s)),h.close()}else Ne(ea,`RPC '${t}' stream ${r} received:`,s),f.u_(s)}}),p(o,we.STAT_EVENT,e=>{e.stat===ve.PROXY?Ne(ea,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===ve.NOPROXY&&Ne(ea,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{f.__()},0),f}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(e=>e===t)}}function ra(){return"undefined"!=typeof document?document:null}
/**
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
 */function sa(t){return new Ni(t,!0)}
/**
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
 */class ia{constructor(t,e,n=1e3,r=1.5,s=6e4){this.Mi=t,this.timerId=e,this.d_=n,this.A_=r,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,e-n);r>0&&Ne("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}
/**
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
 */const oa="PersistentStream";class aa{constructor(t,e,n,r,s,i,o,a){this.Mi=t,this.S_=n,this.b_=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ia(t,e)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,4!==t?this.M_.reset():e&&e.code===Ve.RESOURCE_EXHAUSTED?(ke(e.toString()),ke("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===Ve.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.D_===e&&this.G_(t,n)},e=>{t(()=>{const t=new Fe(Ve.UNKNOWN,"Fetching auth token failed: "+e.message);return this.z_(t)})})}G_(t,e){const n=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(t=>{n(()=>this.z_(t))}),this.stream.onMessage(t=>{n(()=>1==++this.F_?this.J_(t):this.onNext(t))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return Ne(oa,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget(()=>this.D_===t?e():(Ne(oa,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ca extends aa{constructor(t,e,n,r,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,i),this.serializer=s}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const s="NO_CHANGE"===(r=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Oe(39313,{state:r}),i=e.targetChange.targetIds||[],o=function(t,e){return t.useProto3Json?(Me(void 0===e||"string"==typeof e,58123),$n.fromBase64String(e||"")):(Me(void 0===e||e instanceof Buffer||e instanceof Uint8Array,16193),$n.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(t){const e=void 0===t.code?Ve.UNKNOWN:li(t.code);return new Fe(e,t.message||"")}(a);n=new Ei(s,i,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ui(t,r.document.name),i=Li(r.document.updateTime),o=r.document.createTime?Li(r.document.createTime):bn.min(),a=new Ir({mapValue:{fields:r.document.fields}}),c=Ar.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new wi(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ui(t,r.document),i=r.readTime?Li(r.readTime):bn.min(),o=Ar.newNoDocument(s,i),a=r.removedTargetIds||[];n=new wi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ui(t,r.document),i=r.removedTargetIds||[];n=new wi([],i,s,null)}else{if(!("filter"in e))return Oe(11601,{Rt:e});{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:s}=t,i=new ci(r,s),o=t.targetId;n=new bi(o,i)}}var r;return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return bn.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?bn.min():e.readTime?Li(e.readTime):bn.min()}(t);return this.listener.H_(e,n)}Y_(t){const e={};e.database=ji(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=Zr(r)?{documents:zi(t,r)}:{query:Gi(t,r).ft},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=xi(t,e.resumeToken);const r=ki(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(bn.min())>0){n.readTime=Ri(t,e.snapshotVersion.toTimestamp());const r=ki(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Oe(28987,{purpose:t})}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.q_(e)}Z_(t){const e={};e.database=ji(this.serializer),e.removeTarget=t,this.q_(e)}}class ua extends aa{constructor(t,e,n,r,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,i),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return Me(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Me(!t.writeResults||0===t.writeResults.length,55816),this.listener.ta()}onNext(t){Me(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=function(t,e){return t&&t.length>0?(Me(void 0!==e,14353),t.map(t=>function(t,e){let n=t.updateTime?Li(t.updateTime):Li(e);return n.isEqual(bn.min())&&(n=Li(e)),new $s(n,t.transformResults||[])}(t,e))):[]}(t.writeResults,t.commitTime),n=Li(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=ji(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>function(t,e){let n;if(e instanceof Js)n={update:$i(t,e.key,e.value)};else if(e instanceof ri)n={delete:Fi(t,e.key)};else if(e instanceof Zs)n={update:$i(t,e.key,e.data),updateMask:to(e.fieldMask)};else{if(!(e instanceof si))return Oe(16599,{Vt:e.type});n={verify:Fi(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof Ls)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ms)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Vs)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Us)return{fieldPath:e.field.canonicalString(),increment:n.Ae};throw Oe(20930,{transform:e.transform})}(0,t))),e.precondition.isNone||(n.currentDocument=(r=t,void 0!==(s=e.precondition).updateTime?{updateTime:Oi(r,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:Oe(27497))),n;var r,s}(this.serializer,t))};this.q_(e)}}
/**
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
 */class ha{}class la extends ha{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new Fe(Ve.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Go(t,Pi(e,n),r,s,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===Ve.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Fe(Ve.UNKNOWN,t.toString())})}Ho(t,e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Ho(t,Pi(e,n),r,i,o,s)).catch(t=>{throw"FirebaseError"===t.name?(t.code===Ve.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Fe(Ve.UNKNOWN,t.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class da{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,"Online"===t&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ke(e),this.aa=!1):Ne("OnlineStateTracker",e)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}}
/**
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
 */const fa="RemoteStore";class pa{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(t=>{n.enqueueAndForget(async()=>{Ta(this)&&(Ne(fa,"Restarting streams for network reachability change."),await async function(t){const e=Pe(t);e.Ea.add(4),await ma(e),e.Ra.set("Unknown"),e.Ea.delete(4),await ga(e)}(this))})}),this.Ra=new da(n,r)}}async function ga(t){if(Ta(t))for(const e of t.da)await e(!0)}async function ma(t){for(const e of t.da)await e(!1)}function ya(t,e){const n=Pe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),_a(n)?Ea(n):ja(n).O_()&&wa(n,e))}function va(t,e){const n=Pe(t),r=ja(n);n.Ia.delete(e),r.O_()&&ba(n,e),0===n.Ia.size&&(r.O_()?r.L_():Ta(n)&&n.Ra.set("Unknown"))}function wa(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(bn.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ja(t).Y_(e)}function ba(t,e){t.Va.Ue(e),ja(t).Z_(e)}function Ea(t){t.Va=new Ti({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ja(t).start(),t.Ra.ua()}function _a(t){return Ta(t)&&!ja(t).x_()&&t.Ia.size>0}function Ta(t){return 0===Pe(t).Ea.size}function Sa(t){t.Va=void 0}async function Ia(t){t.Ra.set("Online")}async function Ca(t){t.Ia.forEach((e,n)=>{wa(t,e)})}async function Aa(t,e){Sa(t),_a(t)?(t.Ra.ha(e),Ea(t)):t.Ra.set("Unknown")}async function Da(t,e,n){if(t.Ra.set("Online"),e instanceof Ei&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Ia.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Ia.delete(r),t.Va.removeTarget(r))}(t,e)}catch(r){Ne(fa,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Na(t,r)}else if(e instanceof wi?t.Va.Ze(e):e instanceof bi?t.Va.st(e):t.Va.tt(e),!n.isEqual(bn.min()))try{const e=await Uo(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Va.Tt(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.Ia.get(r);s&&t.Ia.set(r,s.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach((e,n)=>{const r=t.Ia.get(e);if(!r)return;t.Ia.set(e,r.withResumeToken($n.EMPTY_BYTE_STRING,r.snapshotVersion)),ba(t,e);const s=new no(r.target,e,n,r.sequenceNumber);wa(t,s)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(s){Ne(fa,"Failed to raise snapshot:",s),await Na(t,s)}}async function Na(t,e,n){if(!An(e))throw e;t.Ea.add(1),await ma(t),t.Ra.set("Offline"),n||(n=()=>Uo(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Ne(fa,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await ga(t)})}function ka(t,e){return e().catch(n=>Na(t,n,e))}async function Ra(t){const e=Pe(t),n=qa(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:-1;for(;xa(e);)try{const t=await jo(e.localStore,r);if(null===t){0===e.Ta.length&&n.L_();break}r=t.batchId,Oa(e,t)}catch(s){await Na(e,s)}La(e)&&Ma(e)}function xa(t){return Ta(t)&&t.Ta.length<10}function Oa(t,e){t.Ta.push(e);const n=qa(t);n.O_()&&n.X_&&n.ea(e.mutations)}function La(t){return Ta(t)&&!qa(t).x_()&&t.Ta.length>0}function Ma(t){qa(t).start()}async function Pa(t){qa(t).ra()}async function Va(t){const e=qa(t);for(const n of t.Ta)e.ea(n.mutations)}async function Fa(t,e,n){const r=t.Ta.shift(),s=oi.from(r,e,n);await ka(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ra(t)}async function Ua(t,e){e&&qa(t).X_&&await async function(t,e){if(function(t){switch(t){case Ve.OK:return Oe(64938);case Ve.CANCELLED:case Ve.UNKNOWN:case Ve.DEADLINE_EXCEEDED:case Ve.RESOURCE_EXHAUSTED:case Ve.INTERNAL:case Ve.UNAVAILABLE:case Ve.UNAUTHENTICATED:return!1;case Ve.INVALID_ARGUMENT:case Ve.NOT_FOUND:case Ve.ALREADY_EXISTS:case Ve.PERMISSION_DENIED:case Ve.FAILED_PRECONDITION:case Ve.ABORTED:case Ve.OUT_OF_RANGE:case Ve.UNIMPLEMENTED:case Ve.DATA_LOSS:return!0;default:return Oe(15467,{code:t})}}(n=e.code)&&n!==Ve.ABORTED){const n=t.Ta.shift();qa(t).B_(),await ka(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Ra(t)}var n}(t,e),La(t)&&Ma(t)}async function Ba(t,e){const n=Pe(t);n.asyncQueue.verifyOperationInProgress(),Ne(fa,"RemoteStore received new credentials");const r=Ta(n);n.Ea.add(3),await ma(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await ga(n)}function ja(t){return t.ma||(t.ma=function(t,e,n){const r=Pe(t);return r.sa(),new ca(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{Xo:Ia.bind(null,t),t_:Ca.bind(null,t),r_:Aa.bind(null,t),H_:Da.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),_a(t)?Ea(t):t.Ra.set("Unknown")):(await t.ma.stop(),Sa(t))})),t.ma}function qa(t){return t.fa||(t.fa=function(t,e,n){const r=Pe(t);return r.sa(),new ua(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:Pa.bind(null,t),r_:Ua.bind(null,t),ta:Va.bind(null,t),na:Fa.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Ra(t)):(await t.fa.stop(),t.Ta.length>0&&(Ne(fa,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa
/**
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
 */}class $a{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new Ue,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new $a(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Fe(Ve.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function za(t,e){if(ke("AsyncQueue",`${e}: ${t}`),An(t))return new Fe(Ve.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
 */class Ga{static emptySet(t){return new Ga(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||cn.comparator(e.key,n.key):(t,e)=>cn.comparator(t.key,e.key),this.keyedMap=vs(),this.sortedSet=new Pn(this.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ga))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Ga;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
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
 */class Ha{constructor(){this.ga=new Pn(cn.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?0!==t.type&&3===n.type?this.ga=this.ga.insert(e,t):3===t.type&&1!==n.type?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.ga=this.ga.remove(e):1===t.type&&2===n.type?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):Oe(63341,{Rt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,n)=>{t.push(n)}),t}}class Ka{constructor(t,e,n,r,s,i,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,s){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new Ka(t,e,Ga.emptySet(e),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&cs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
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
 */class Qa{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(t=>t.Da())}}class Wa{constructor(){this.queries=Xa(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(t,e){const n=Pe(t),r=n.queries;n.queries=Xa(),r.forEach((t,n)=>{for(const r of n.Sa)r.onError(e)})}(this,new Fe(Ve.ABORTED,"Firestore shutting down"))}}function Xa(){return new ps(t=>us(t),cs)}async function Ya(t,e){const n=Pe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new Qa,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const t=za(o,`Initialization of query '${hs(e.query)}' failed`);return void e.onError(t)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&ec(n)}async function Ja(t,e){const n=Pe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const t=i.Sa.indexOf(e);t>=0&&(i.Sa.splice(t,1),0===i.Sa.length?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Za(t,e){const n=Pe(t);let r=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.Sa)t.Fa(s)&&(r=!0);e.wa=s}}r&&ec(n)}function tc(t,e,n){const r=Pe(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function ec(t){t.Ca.forEach(t=>{t.next()})}var nc,rc;(rc=nc||(nc={})).Ma="default",rc.Cache="cache";class sc{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Ka(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache)return!0;if(!this.Da())return!0;const n="Offline"!==e;return(!this.options.qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}ka(t){t=Ka.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==nc.Cache}}
/**
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
 */class ic{constructor(t){this.key=t}}class oc{constructor(t){this.key=t}}class ac{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Is(),this.mutatedKeys=Is(),this.eu=ds(t),this.tu=new Ga(this.eu)}get nu(){return this.Ya}ru(t,e){const n=e?e.iu:new Ha,r=e?e.tu:this.tu;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),h=ls(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.su(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.eu(h,a)>0||c&&this.eu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(i=i.add(h),s=d?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))}),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{tu:i,iu:n,Cs:o,mutatedKeys:s}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const s=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const i=t.iu.ya();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Oe(20277,{Rt:t})}};return n(t)-n(e)}(t.type,e.type)||this.eu(t.doc,e.doc)),this.ou(n),r=r??!1;const o=e&&!r?this._u():[],a=0===this.Xa.size&&this.current&&!r?1:0,c=a!==this.Za;return this.Za=a,0!==i.length||c?{snapshot:new Ka(this.query,t.tu,s,i,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:o}:{au:o}}va(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ha,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Is(),this.tu.forEach(t=>{this.uu(t.key)&&(this.Xa=this.Xa.add(t.key))});const e=[];return t.forEach(t=>{this.Xa.has(t)||e.push(new oc(t))}),this.Xa.forEach(n=>{t.has(n)||e.push(new ic(n))}),e}cu(t){this.Ya=t.Qs,this.Xa=Is();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Ka.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,0===this.Za,this.hasCachedResults)}}const cc="SyncEngine";class uc{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class hc{constructor(t){this.key=t,this.hu=!1}}class lc{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Pu={},this.Tu=new ps(t=>us(t),cs),this.Iu=new Map,this.Eu=new Set,this.du=new Pn(cn.comparator),this.Au=new Map,this.Ru=new To,this.Vu={},this.mu=new Map,this.fu=ho.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}}async function dc(t,e,n=!0){const r=Oc(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await pc(r,e,n,!0),s}async function fc(t,e){const n=Oc(t);await pc(n,e,!0,!1)}async function pc(t,e,n,r){const s=await function(t,e){const n=Pe(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.Pi.getTargetData(t,e).next(s=>s?(r=s,Cn.resolve(r)):n.Pi.allocateTargetId(t).next(s=>(r=new no(e,s,"TargetPurposeListen",t.currentSequenceNumber),n.Pi.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.Ms.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(t.targetId,t),n.xs.set(e,t.targetId)),t})}(t.localStore,is(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await async function(t,e,n,r,s){t.pu=(e,n,r)=>async function(t,e,n,r){let s=e.view.ru(n);s.Cs&&(s=await $o(t.localStore,e.query,!1).then(({documents:t})=>e.view.ru(t,s)));const i=r&&r.targetChanges.get(e.targetId),o=r&&null!=r.targetMismatches.get(e.targetId),a=e.view.applyChanges(s,t.isPrimaryClient,i,o);return Ac(t,e.targetId,a.au),a.snapshot}(t,e,n,r);const i=await $o(t.localStore,e,!0),o=new ac(e,i.Qs),a=o.ru(i.documents),c=vi.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,s),u=o.applyChanges(a,t.isPrimaryClient,c);Ac(t,n,u.au);const h=new uc(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}(t,e,i,"current"===o,s.resumeToken)),t.isPrimaryClient&&n&&ya(t.remoteStore,s),a}async function gc(t,e,n){const r=Pe(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(t=>!cs(t,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await qo(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&va(r.remoteStore,s.targetId),Ic(r,s.targetId)}).catch(In)):(Ic(r,s.targetId),await qo(r.localStore,s.targetId,!0))}async function mc(t,e){const n=Pe(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&1===s.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),va(n.remoteStore,r.targetId))}async function yc(t,e,n){const r=function(t){const e=Pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ec.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_c.bind(null,e),e}(t);try{const t=await function(t,e){const n=Pe(t),r=wn.now(),s=e.reduce((t,e)=>t.add(e.key),Is());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>{let a=ms(),c=Is();return n.Ns.getEntries(t,s).next(t=>{a=t,a.forEach((t,e)=>{e.isValidDocument()||(c=c.add(t))})}).next(()=>n.localDocuments.getOverlayedDocuments(t,a)).next(s=>{i=s;const o=[];for(const t of e){const e=Xs(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new Zs(t.key,e,Cr(e.value.mapValue),zs.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)}).next(e=>{o=e;const r=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)})}).then(()=>({batchId:o.batchId,changes:ws(i)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Vu[t.currentUser.toKey()];r||(r=new Pn(Xe)),r=r.insert(e,n),t.Vu[t.currentUser.toKey()]=r}(r,t.batchId,n),await kc(r,t.changes),await Ra(r.remoteStore)}catch(s){const t=za(s,"Failed to persist write");n.reject(t)}}async function vc(t,e){const n=Pe(t);try{const t=await Bo(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Au.get(e);r&&(Me(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1,22616),t.addedDocuments.size>0?r.hu=!0:t.modifiedDocuments.size>0?Me(r.hu,14607):t.removedDocuments.size>0&&(Me(r.hu,42227),r.hu=!1))}),await kc(n,t,e)}catch(r){await In(r)}}function wc(t,e,n){const r=Pe(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Tu.forEach((n,r)=>{const s=r.view.va(e);s.snapshot&&t.push(s.snapshot)}),function(t,e){const n=Pe(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const s of n.Sa)s.va(e)&&(r=!0)}),r&&ec(n)}(r.eventManager,e),t.length&&r.Pu.H_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bc(t,e,n){const r=Pe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let t=new Pn(cn.comparator);t=t.insert(i,Ar.newNoDocument(i,bn.min()));const n=Is().add(i),s=new yi(bn.min(),new Map,new Pn(Xe),t,n);await vc(r,s),r.du=r.du.remove(i),r.Au.delete(e),Nc(r)}else await qo(r.localStore,e,!1).then(()=>Ic(r,e,n)).catch(In)}async function Ec(t,e){const n=Pe(t),r=e.batch.batchId;try{const t=await function(t,e){const n=Pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=Cn.resolve();return i.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const i=n.docVersions.get(t);Me(null!==i,48541),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))})}),o.next(()=>t.mutationQueue.removeMutationBatch(e,s))}(n,t,e,s).next(()=>s.apply(t)).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Is();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e))).next(()=>n.localDocuments.getDocuments(t,r))})}(n.localStore,e);Sc(n,r,null),Tc(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await kc(n,t)}catch(s){await In(s)}}async function _c(t,e,n){const r=Pe(t);try{const t=await function(t,e){const n=Pe(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next(e=>(Me(null!==e,37113),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e))).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r)).next(()=>n.localDocuments.getDocuments(t,r))})}(r.localStore,e);Sc(r,e,n),Tc(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await kc(r,t)}catch(s){await In(s)}}function Tc(t,e){(t.mu.get(e)||[]).forEach(t=>{t.resolve()}),t.mu.delete(e)}function Sc(t,e,n){const r=Pe(t);let s=r.Vu[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Ic(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(e=>{t.Ru.containsKey(e)||Cc(t,e)})}function Cc(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);null!==n&&(va(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Nc(t))}function Ac(t,e,n){for(const r of n)r instanceof ic?(t.Ru.addReference(r.key,e),Dc(t,r)):r instanceof oc?(Ne(cc,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Cc(t,r.key)):Oe(19791,{wu:r})}function Dc(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(Ne(cc,"New document in limbo: "+n),t.Eu.add(r),Nc(t))}function Nc(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new cn(sn.fromString(e)),r=t.fu.next();t.Au.set(r,new hc(n)),t.du=t.du.insert(n,r),ya(t.remoteStore,new no(is(es(n.path)),r,"TargetPurposeLimboResolution",Dn.ce))}}async function kc(t,e,n){const r=Pe(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((t,a)=>{o.push(r.pu(a,e,n).then(t=>{var e;if((t||n)&&r.isPrimaryClient){const s=t?!t.fromCache:null==(e=null==n?void 0:n.targetChanges.get(a.targetId))?void 0:e.current;r.sharedClientState.updateQueryState(a.targetId,s?"current":"not-current")}if(t){s.push(t);const e=Oo.As(a.targetId,t);i.push(e)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(t,e){const n=Pe(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>Cn.forEach(e,e=>Cn.forEach(e.Es,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>Cn.forEach(e.ds,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(r){if(!An(r))throw r;Ne(Po,"Failed to update sequence numbers: "+r)}for(const s of e){const t=s.targetId;if(!s.fromCache){const e=n.Ms.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.Ms=n.Ms.insert(t,s)}}}(r.localStore,i))}async function Rc(t,e){const n=Pe(t);if(!n.currentUser.isEqual(e)){Ne(cc,"User change. New user:",e.toKey());const t=await Fo(n.localStore,e);n.currentUser=e,s="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).mu.forEach(t=>{t.forEach(t=>{t.reject(new Fe(Ve.CANCELLED,s))})}),r.mu.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await kc(n,t.Ls)}var r,s}function xc(t,e){const n=Pe(t),r=n.Au.get(e);if(r&&r.hu)return Is().add(r.key);{let t=Is();const r=n.Iu.get(e);if(!r)return t;for(const e of r){const r=n.Tu.get(e);t=t.unionWith(r.view.nu)}return t}}function Oc(t){const e=Pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xc.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bc.bind(null,e),e.Pu.H_=Za.bind(null,e.eventManager),e.Pu.yu=tc.bind(null,e.eventManager),e}class Lc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=sa(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return function(t,e,n,r){return new Vo(t,e,n,r)}(this.persistence,new Mo,t.initialUser,this.serializer)}Cu(t){return new No(Ro.mi,this.serializer)}Du(t){return new Go}async terminate(){var t,e;null==(t=this.gcScheduler)||t.stop(),null==(e=this.indexBackfillerScheduler)||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Lc.provider={build:()=>new Lc};class Mc extends Lc{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){Me(this.persistence.referenceDelegate instanceof xo,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new go(n,t.asyncQueue,e)}Cu(t){const e=void 0!==this.cacheSizeBytes?uo.withCacheSize(this.cacheSizeBytes):uo.DEFAULT;return new No(t=>xo.mi(t,e),this.serializer)}}class Pc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>wc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rc.bind(null,this.syncEngine),await async function(t,e){const n=Pe(t);e?(n.Ea.delete(2),await ga(n)):e||(n.Ea.add(2),await ma(n),n.Ra.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Wa}createDatastore(t){const e=sa(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new na(r));var r;return function(t,e,n,r){return new la(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,s=t=>wc(this.syncEngine,t,0),i=Qo.v()?new Qo:new Ho,new pa(e,n,r,s,i);var e,n,r,s,i}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new lc(t,e,n,r,s,i);return o&&(a.gu=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(t){const e=Pe(t);Ne(fa,"RemoteStore shutting down."),e.Ea.add(5),await ma(e),e.Aa.shutdown(),e.Ra.set("Unknown")}(this.remoteStore),null==(t=this.datastore)||t.terminate(),null==(e=this.eventManager)||e.terminate()}}Pc.provider={build:()=>new Pc};
/**
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
 */
/**
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
 */
class Vc{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):ke("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}
/**
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
 */const Fc="FirestoreClient";class Uc{constructor(t,e,n,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Ie.UNAUTHENTICATED,this.clientId=We.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async t=>{Ne(Fc,"Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(Ne(Fc,"Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ue;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=za(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Bc(t,e){t.asyncQueue.verifyOperationInProgress(),Ne(Fc,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Fo(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function jc(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Ne(Fc,"Using user provided OfflineComponentProvider");try{await Bc(t,t._uninitializedComponentsProvider._offline)}catch(e){const s=e;if(!("FirebaseError"===(n=s).name?n.code===Ve.FAILED_PRECONDITION||n.code===Ve.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&n instanceof DOMException)||22===n.code||20===n.code||11===n.code))throw s;Re("Error using user provided cache. Falling back to memory cache: "+s),await Bc(t,new Lc)}}else Ne(Fc,"Using default OfflineComponentProvider"),await Bc(t,new Mc(void 0));var n;return t._offlineComponents}(t);Ne(Fc,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(t=>Ba(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>Ba(e.remoteStore,n)),t._onlineComponents=e}async function qc(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Ne(Fc,"Using user provided OnlineComponentProvider"),await jc(t,t._uninitializedComponentsProvider._online)):(Ne(Fc,"Using default OnlineComponentProvider"),await jc(t,new Pc))),t._onlineComponents}async function $c(t){const e=await qc(t),n=e.eventManager;return n.onListen=dc.bind(null,e.syncEngine),n.onUnlisten=gc.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=fc.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=mc.bind(null,e.syncEngine),n}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */
function zc(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
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
 */}const Gc=new Map,Hc="firestore.googleapis.com",Kc=!0;
/**
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
 */class Qc{constructor(t){if(void 0===t.host){if(void 0!==t.ssl)throw new Fe(Ve.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Hc,this.ssl=Kc}else this.host=t.host,this.ssl=t.ssl??Kc;if(this.isUsingEmulator=void 0!==t.emulatorOptions,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=co;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Fe(Ve.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,r){if(!0===e&&!0===r)throw new Fe(Ve.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zc(t.experimentalLongPollingOptions??{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new Fe(Ve.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new Fe(Ve.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new Fe(Ve.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,n}}class Wc{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Fe(Ve.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Fe(Ve.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qc(t),this._emulatorOptions=t.emulatorOptions||{},void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new je;switch(t.type){case"firstParty":return new Ge(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Fe(Ve.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Gc.get(t);e&&(Ne("ComponentProvider","Removing Datastore"),Gc.delete(t),e.terminate())}(this),Promise.resolve()}}function Xc(t,e,n,r={}){var i;t=pn(t,Wc);const o=d(e),a=t._getSettings(),c={...a,emulatorOptions:t._getEmulatorOptions()},u=`${e}:${n}`;o&&(f(`https://${u}`),m("Firestore",!0)),a.host!==Hc&&a.host!==u&&Re("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...a,host:u,ssl:o,emulatorOptions:r};if(!D(h,c)&&(t._setSettings(h),r.mockUserToken)){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Ie.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[s(JSON.stringify({alg:"none",type:"JWT"})),s(JSON.stringify(o)),""].join(".")}(r.mockUserToken,null==(i=t._app)?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new Fe(Ve.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ie(o)}t._authCredentials=new qe(new Be(e,n))}}
/**
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
 */class Yc{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Yc(this.firestore,t,this._query)}}class Jc{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Jc(this.firestore,t,this._key)}toJSON(){return{type:Jc._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(mn(e,Jc._jsonSchema))return new Jc(t,n||null,new cn(sn.fromString(e.referencePath)))}}Jc._jsonSchemaVersion="firestore/documentReference/1.0",Jc._jsonSchema={type:gn("string",Jc._jsonSchemaVersion),referencePath:gn("string")};class Zc extends Yc{constructor(t,e,n){super(t,e,es(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Jc(this.firestore,null,new cn(t))}withConverter(t){return new Zc(this.firestore,t,this._path)}}function tu(t,e,...n){if(t=P(t),un("collection","path",e),t instanceof Wc){const r=sn.fromString(e,...n);return ln(r),new Zc(t,null,r)}{if(!(t instanceof Jc||t instanceof Zc))throw new Fe(Ve.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(sn.fromString(e,...n));return ln(r),new Zc(t.firestore,null,r)}}function eu(t,e,...n){if(t=P(t),1===arguments.length&&(e=We.newId()),un("doc","path",e),t instanceof Wc){const r=sn.fromString(e,...n);return hn(r),new Jc(t,null,new cn(r))}{if(!(t instanceof Jc||t instanceof Zc))throw new Fe(Ve.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(sn.fromString(e,...n));return hn(r),new Jc(t.firestore,t instanceof Zc?t.converter:null,new cn(r))}}
/**
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
 */const nu="AsyncQueue";class ru{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ia(this,"async_queue_retry"),this._c=()=>{const t=ra();t&&Ne(nu,"Visibility state changed to "+t.visibilityState),this.M_.w_()},this.ac=t;const e=ra();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=ra();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new Ue;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(0!==this.Xu.length){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!An(t))throw t;Ne(nu,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(t=>{throw this.nc=t,this.rc=!1,ke("INTERNAL UNHANDLED ERROR: ",su(t)),t}).then(t=>(this.rc=!1,t))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const r=$a.createAndSchedule(this,t,e,n,t=>this.hc(t));return this.tc.push(r),r}uc(){this.nc&&Oe(47125,{Pc:su(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do{t=this.ac,await t}while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function su(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e
/**
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
 */}function iu(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}(t,["next","error","complete"])}class ou extends Wc{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new ru,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ru(t),this._firestoreClient=void 0,await t}}}function au(t,e){const n="object"==typeof t?t:Zt(),r="string"==typeof t?t:nr,s=Kt(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const t=(t=>{const e=c(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]})("firestore");t&&Xc(s,...t)}return s}function cu(t){if(t._terminated)throw new Fe(Ve.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||function(t){var e,n,r;const s=t._freezeSettings(),i=(o=t._databaseId,a=(null==(e=t._app)?void 0:e.options.appId)||"",c=t._persistenceKey,u=s,new er(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,zc(u.experimentalLongPollingOptions),u.useFetchStreams,u.isUsingEmulator));var o,a,c,u;t._componentsProvider||(null==(n=s.localCache)?void 0:n._offlineComponentProvider)&&(null==(r=s.localCache)?void 0:r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new Uc(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(t){const e=null==t?void 0:t._online.build();return{_offline:null==t?void 0:t._offline.build(e),_online:e}}(t._componentsProvider))}
/**
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
 */(t),t._firestoreClient}class uu{constructor(t){this._byteString=t}static fromBase64String(t){try{return new uu($n.fromBase64String(t))}catch(e){throw new Fe(Ve.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new uu($n.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:uu._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(mn(t,uu._jsonSchema))return uu.fromBase64String(t.bytes)}}uu._jsonSchemaVersion="firestore/bytes/1.0",uu._jsonSchema={type:gn("string",uu._jsonSchemaVersion),bytes:gn("string")};
/**
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
 */
class hu{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Fe(Ve.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new an(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
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
 */class lu{constructor(t){this._methodName=t}}
/**
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
 */class du{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Fe(Ve.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Fe(Ve.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Xe(this._lat,t._lat)||Xe(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:du._jsonSchemaVersion}}static fromJSON(t){if(mn(t,du._jsonSchema))return new du(t.latitude,t.longitude)}}du._jsonSchemaVersion="firestore/geoPoint/1.0",du._jsonSchema={type:gn("string",du._jsonSchemaVersion),latitude:gn("number"),longitude:gn("number")};
/**
 * @license
 * Copyright 2024 Google LLC
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
 */
class fu{constructor(t){this._values=(t||[]).map(t=>t)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}toJSON(){return{type:fu._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(mn(t,fu._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(t=>"number"==typeof t))return new fu(t.vectorValues);throw new Fe(Ve.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}fu._jsonSchemaVersion="firestore/vectorValue/1.0",fu._jsonSchema={type:gn("string",fu._jsonSchemaVersion),vectorValues:gn("object")};
/**
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
 */
const pu=/^__.*__$/;class gu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Zs(t,this.data,this.fieldMask,e,this.fieldTransforms):new Js(t,this.data,e,this.fieldTransforms)}}class mu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Zs(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function yu(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Oe(40011,{Ac:t})}}class vu{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===s&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new vu({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var e;const n=null==(e=this.path)?void 0:e.child(t),r=this.Vc({path:n,fc:!1});return r.gc(t),r}yc(t){var e;const n=null==(e=this.path)?void 0:e.child(t),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Ru(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(0===t.length)throw this.Sc("Document fields must not be empty");if(yu(this.Ac)&&pu.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class wu{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||sa(t)}Cc(t,e,n,r=!1){return new vu({Ac:t,methodName:e,Dc:n,path:an.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bu(t){const e=t._freezeSettings(),n=sa(t._databaseId);return new wu(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Eu(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);Au("Data must be an object, but it was:",o,r);const a=Iu(r,o);let c,u;if(i.merge)c=new jn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=Du(e,r,n);if(!o.contains(s))throw new Fe(Ve.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);xu(t,s)||t.push(s)}c=new jn(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new gu(new Ir(a),c,u)}class _u extends lu{_toFieldTransform(t){if(2!==t.Ac)throw 1===t.Ac?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof _u}}class Tu extends lu{_toFieldTransform(t){return new qs(t.path,new Ls)}isEqual(t){return t instanceof Tu}}function Su(t,e){if(Cu(t=P(t)))return Au("Unsupported field value:",e,t),Iu(t,e);if(t instanceof lu)return function(t,e){if(!yu(e.Ac))throw e.Sc(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Sc(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&4!==e.Ac)throw e.Sc("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=Su(s,e.wc(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=P(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Ns(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=wn.fromDate(t);return{timestampValue:Ri(e.serializer,n)}}if(t instanceof wn){const n=new wn(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ri(e.serializer,n)}}if(t instanceof du)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof uu)return{bytesValue:xi(e.serializer,t._byteString)};if(t instanceof Jc){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Sc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Mi(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof fu)return n=t,r=e,{mapValue:{fields:{[sr]:{stringValue:ar},[cr]:{arrayValue:{values:n.toArray().map(t=>{if("number"!=typeof t)throw r.Sc("VectorValues must only contain numeric values.");return As(r.serializer,t)})}}}}};var n,r;throw e.Sc(`Unsupported field value: ${fn(t)}`)}(t,e)}function Iu(t,e){const n={};return Mn(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ln(t,(t,r)=>{const s=Su(r,e.mc(t));null!=s&&(n[t]=s)}),{mapValue:{fields:n}}}function Cu(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof wn||t instanceof du||t instanceof uu||t instanceof Jc||t instanceof lu||t instanceof fu)}function Au(t,e,n){if(!Cu(n)||!dn(n)){const r=fn(n);throw"an object"===r?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Du(t,e,n){if((e=P(e))instanceof hu)return e._internalPath;if("string"==typeof e)return ku(t,e);throw Ru("Field path arguments must be of type string or ",t,!1,void 0,n)}const Nu=new RegExp("[~\\*/\\[\\]]");function ku(t,e,n){if(e.search(Nu)>=0)throw Ru(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hu(...e.split("."))._internalPath}catch(r){throw Ru(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ru(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Fe(Ve.INVALID_ARGUMENT,a+t+c)}function xu(t,e){return t.some(t=>t.isEqual(e))}
/**
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
 */class Ou{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Jc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Lu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Mu("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Lu extends Ou{data(){return super.data()}}function Mu(t,e){return"string"==typeof e?ku(t,e):e instanceof hu?e._internalPath:e._delegate._internalPath}
/**
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
 */function Pu(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Fe(Ve.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vu{}class Fu extends Vu{}function Uu(t,e,...n){let r=[];e instanceof Vu&&r.push(e),r=r.concat(n),function(t){const e=t.filter(t=>t instanceof ju).length,n=t.filter(t=>t instanceof Bu).length;if(e>1||e>0&&n>0)throw new Fe(Ve.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Bu extends Fu{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Bu(t,e,n)}_apply(t){const e=this._parse(t);return Hu(t._query,e),new Yc(t.firestore,t.converter,os(t._query,e))}_parse(t){const e=bu(t.firestore),n=function(t,e,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new Fe(Ve.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){Gu(o,i);const e=[];for(const n of o)e.push(zu(r,t,n));a={arrayValue:{values:e}}}else a=zu(r,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||Gu(o,i),a=function(t,e,n,r=!1){return Su(n,t.Cc(r?4:3,e))}(n,e,o,"in"===i||"not-in"===i);return Lr.create(s,i,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}class ju extends Vu{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new ju(t,e)}_parse(t){const e=this._queryConstraints.map(e=>e._parse(t)).filter(t=>t.getFilters().length>0);return 1===e.length?e[0]:Mr.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const r=e.getFlattenedFilters();for(const s of r)Hu(n,s),n=os(n,s)}(t._query,e),new Yc(t.firestore,t.converter,os(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class qu extends Fu{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new qu(t,e)}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new Fe(Ve.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new Fe(Ve.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Rr(e,n)}(t._query,this._field,this._direction);return new Yc(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new ts(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function $u(t,e="asc"){const n=e,r=Mu("orderBy",t);return qu._create(r,n)}function zu(t,e,n){if("string"==typeof(n=P(n))){if(""===n)throw new Fe(Ve.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rs(e)&&-1!==n.indexOf("/"))throw new Fe(Ve.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(sn.fromString(n));if(!cn.isDocumentKey(r))throw new Fe(Ve.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return vr(t,new cn(r))}if(n instanceof Jc)return vr(t,n._key);throw new Fe(Ve.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fn(n)}.`)}function Gu(t,e){if(!Array.isArray(t)||0===t.length)throw new Fe(Ve.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Hu(t,e){const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new Fe(Ve.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Fe(Ve.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Ku{convertValue(t,e="none"){switch(ur(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Hn(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Kn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw Oe(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Ln(t,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertVectorValue(t){var e,n,r;const s=null==(r=null==(n=null==(e=t.fields)?void 0:e[cr].arrayValue)?void 0:n.values)?void 0:r.map(t=>Hn(t.doubleValue));return new fu(s)}convertGeoPoint(t){return new du(Hn(t.latitude),Hn(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Zn(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(tr(t));default:return null}}convertTimestamp(t){const e=Gn(t);return new wn(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=sn.fromString(t);Me(eo(n),9688,{name:t});const r=new rr(n.get(1),n.get(3)),s=new cn(n.popFirst(5));return r.isEqual(e)||ke(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
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
 */function Qu(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Wu{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Xu extends Ou{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Yu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Mu("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Fe(Ve.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Xu._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),t&&t.isValidDocument()&&t.isFoundDocument()?(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e):e}}Xu._jsonSchemaVersion="firestore/documentSnapshot/1.0",Xu._jsonSchema={type:gn("string",Xu._jsonSchemaVersion),bundleSource:gn("string","DocumentSnapshot"),bundleName:gn("string"),bundle:gn("string")};class Yu extends Xu{data(t={}){return super.data(t)}}class Ju{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Wu(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Yu(this._firestore,this._userDataWriter,n.key,n,new Wu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Fe(Ve.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>{const r=new Yu(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Wu(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}})}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new Yu(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Wu(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:Zu(e.type),doc:r,oldIndex:s,newIndex:i}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Fe(Ve.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Ju._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=We.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],r=[];return this.docs.forEach(t=>{null!==t._document&&(e.push(t._document),n.push(this._userDataWriter.convertObjectMap(t._document.data.value.mapValue.fields,"previous")),r.push(t.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Zu(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Oe(61501,{type:t})}}
/**
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
 */function th(t){t=pn(t,Jc);const e=pn(t.firestore,ou);return function(t,e,n={}){const r=new Ue;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,s){const i=new Vc({next:a=>{i.Nu(),e.enqueueAndForget(()=>Ja(t,o));const c=a.docs.has(n);!c&&a.fromCache?s.reject(new Fe(Ve.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&a.fromCache&&r&&"server"===r.source?s.reject(new Fe(Ve.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(a)},error:t=>s.reject(t)}),o=new sc(es(n.path),i,{includeMetadataChanges:!0,qa:!0});return Ya(t,o)}(await $c(t),t.asyncQueue,e,n,r)),r.promise}(cu(e),t._key).then(n=>uh(e,t,n))}Ju._jsonSchemaVersion="firestore/querySnapshot/1.0",Ju._jsonSchema={type:gn("string",Ju._jsonSchemaVersion),bundleSource:gn("string","QuerySnapshot"),bundleName:gn("string"),bundle:gn("string")};class eh extends Ku{constructor(t){super(),this.firestore=t}convertBytes(t){return new uu(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Jc(this.firestore,null,e)}}function nh(t){t=pn(t,Yc);const e=pn(t.firestore,ou),n=cu(e),r=new eh(e);return Pu(t._query),function(t,e,n={}){const r=new Ue;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,s){const i=new Vc({next:n=>{i.Nu(),e.enqueueAndForget(()=>Ja(t,o)),n.fromCache&&"server"===r.source?s.reject(new Fe(Ve.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new sc(n,i,{includeMetadataChanges:!0,qa:!0});return Ya(t,o)}(await $c(t),t.asyncQueue,e,n,r)),r.promise}(n,t._query).then(n=>new Ju(e,r,t,n))}function rh(t,e,n){t=pn(t,Jc);const r=pn(t.firestore,ou),s=Qu(t.converter,e,n);return ch(r,[Eu(bu(r),"setDoc",t._key,s,null!==t.converter,n).toMutation(t._key,zs.none())])}function sh(t,e,n,...r){t=pn(t,Jc);const s=pn(t.firestore,ou),i=bu(s);let o;return o="string"==typeof(e=P(e))||e instanceof hu?function(t,e,n,r,s,i){const o=t.Cc(1,e,n),a=[Du(e,r,n)],c=[s];if(i.length%2!=0)throw new Fe(Ve.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Du(e,i[d])),c.push(i[d+1]);const u=[],h=Ir.empty();for(let d=a.length-1;d>=0;--d)if(!xu(u,a[d])){const t=a[d];let e=c[d];e=P(e);const n=o.yc(t);if(e instanceof _u)u.push(t);else{const r=Su(e,n);null!=r&&(u.push(t),h.set(t,r))}}const l=new jn(u);return new mu(h,l,o.fieldTransforms)}(i,"updateDoc",t._key,e,n,r):function(t,e,n,r){const s=t.Cc(1,e,n);Au("Data must be an object, but it was:",s,r);const i=[],o=Ir.empty();Ln(r,(t,r)=>{const a=ku(e,t,n);r=P(r);const c=s.yc(a);if(r instanceof _u)i.push(a);else{const t=Su(r,c);null!=t&&(i.push(a),o.set(a,t))}});const a=new jn(i);return new mu(o,a,s.fieldTransforms)}(i,"updateDoc",t._key,e),ch(s,[o.toMutation(t._key,zs.exists(!0))])}function ih(t){return ch(pn(t.firestore,ou),[new ri(t._key,zs.none())])}function oh(t,e){const n=pn(t.firestore,ou),r=eu(t),s=Qu(t.converter,e);return ch(n,[Eu(bu(t.firestore),"addDoc",r._key,s,null!==t.converter,{}).toMutation(r._key,zs.exists(!1))]).then(()=>r)}function ah(t,...e){var n,r,s;t=P(t);let i={includeMetadataChanges:!1,source:"default"},o=0;"object"!=typeof e[o]||iu(e[o])||(i=e[o++]);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(iu(e[o])){const t=e[o];e[o]=null==(n=t.next)?void 0:n.bind(t),e[o+1]=null==(r=t.error)?void 0:r.bind(t),e[o+2]=null==(s=t.complete)?void 0:s.bind(t)}let c,u,h;if(t instanceof Jc)u=pn(t.firestore,ou),h=es(t._key.path),c={next:n=>{e[o]&&e[o](uh(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=pn(t,Yc);u=pn(n.firestore,ou),h=n._query;const r=new eh(u);c={next:t=>{e[o]&&e[o](new Ju(u,r,n,t))},error:e[o+1],complete:e[o+2]},Pu(t._query)}return function(t,e,n,r){const s=new Vc(r),i=new sc(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>Ya(await $c(t),i)),()=>{s.Nu(),t.asyncQueue.enqueueAndForget(async()=>Ja(await $c(t),i))}}(cu(u),h,a,c)}function ch(t,e){return function(t,e){const n=new Ue;return t.asyncQueue.enqueueAndForget(async()=>yc(await function(t){return qc(t).then(t=>t.syncEngine)}(t),e,n)),n.promise}(cu(t),e)}function uh(t,e,n){const r=n.docs.get(e._key),s=new eh(t);return new Xu(t,s,e._key,r,new Wu(n.hasPendingWrites,n.fromCache),e.converter)}function hh(){return new Tu("serverTimestamp")}!function(t,e=!0){Ce=Yt,Ht(new V("firestore",(t,{instanceIdentifier:n,options:r})=>{const s=t.getProvider("app").getImmediate(),i=new ou(new $e(t.getProvider("auth-internal")),new Ke(s,t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Fe(Ve.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rr(t.options.projectId,e)}(s,n),s);return r={useFetchStreams:e,...r},i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),te(Te,Se,t),te(Te,Se,"esm2020")}();
/**
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
 */
te("firebase","12.7.0","app");export{eu as A,th as B,V as C,ah as D,I as E,S as F,tu as G,Uu as H,$u as I,nh as J,oh as K,K as L,hh as M,rh as N,ih as O,sh as P,Yt as S,Ht as _,E as a,b,Qt as c,P as d,y as e,O as f,h as g,j as h,v as i,i as j,d as k,Zt as l,Kt as m,c as n,D as o,f as p,k as q,te as r,_ as s,A as t,m as u,R as v,x as w,w as x,Jt as y,au as z};
