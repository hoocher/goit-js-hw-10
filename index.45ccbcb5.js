!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),o.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){var n=c.default(e,t,"get");return u.default(e,n)};var c=s(o("1UHsN")),u=s(o("ffZzF"));function s(e){return e&&e.__esModule?e:{default:e}}var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e,t,n){l.default(e,t),t.set(e,n)};var f,l=(f=o("5k7tO"))&&f.__esModule?f:{default:f};var p={};function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e,t,n){t&&v(e.prototype,t);n&&v(e,n);return e};var h=new WeakMap,b=new WeakMap,y=function(){"use strict";function t(){e(a)(this,t),e(d)(this,h,{writable:!0,value:"https://api.thecatapi.com/v1/breeds"}),e(d)(this,b,{writable:!0,value:"live_rJvH5AfveveioDcvWcCSIHVj6pOtXlqHdQMYWgV9S3LpaQdmNUAeDfB72E0CTxR1"})}return e(p)(t,[{key:"fetchBreeds",value:function(){return fetch("".concat(e(i)(this,h))).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}},{key:"fetchCatByBreed",value:function(t){var n="https://api.thecatapi.com/v1/images/search?breed_ids=".concat(t.target.value,"&api_key=").concat(e(i)(this,b));return fetch("".concat(n)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}}]),t}(),_=document.querySelector(".breed-select"),w=document.querySelector(".cat-info"),g=document.querySelector(".loader"),m=document.querySelector(".error");_.classList.add("is-hidden"),m.classList.add("is-hidden");var M=new y;M.fetchBreeds().then((function(e){var t="";e.forEach((function(e){var n=e.id,r=e.name;t+='<option value="'.concat(n,'">').concat(r,"</option>")})),_.innerHTML="".concat(t),_.classList.remove("is-hidden")})),_.addEventListener("change",(function(e){w.innerHTML="",M.fetchCatByBreed(e).then((function(e){var t,n=e[0];t='<img src="'.concat(e[0].url,'" alt="" height="600">\n      <h2>').concat(n.breeds[0].name,"</h2>\n      <p>").concat(n.breeds[0].description,"</p>\n      <p>").concat(n.breeds[0].temperament,"</p>"),w.insertAdjacentHTML("beforeend",t),g.classList.add("is-hidden")}))}))}();
//# sourceMappingURL=index.45ccbcb5.js.map
