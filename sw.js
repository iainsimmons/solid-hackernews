if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,c)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const n={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return n;default:return e(r)}}))).then((e=>{const r=c(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-e1834b40"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"[id]-628edaae.js",revision:"fbb617778e08e4e8e1406bb7baa5de3c"},{url:"[id]-83ecabf5.js",revision:"62ac08470d1aad538a017bd411ca2d1d"},{url:"404.html",revision:"87fff59c760c77ba20dc0be6083cd238"},{url:"index.css",revision:"5c98cb501a8ea95854e2ceac214b1ce0"},{url:"index.html",revision:"077c69dad099f148ec0da7a0e6b4515f"},{url:"index.js",revision:"e759c1a24974c14f7a9afa072aa0098f"},{url:"stories-65d281cd.js",revision:"d60ac58c16d9e14268f732d90573e2eb"}],{})}));
//# sourceMappingURL=sw.js.map