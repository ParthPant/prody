if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return c[e]||(r=new Promise((async r=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},r=(r,c)=>{Promise.all(r.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(r)};self.define=(r,s,i)=>{c[r]||(c[r]=Promise.resolve().then((()=>{let c={};const d={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return c;case"module":return d;default:return e(r)}}))).then((e=>{const r=i(...e);return c.default||(c.default=r),c}))})))}}define("./service-worker.js",["./workbox-e6df2ca1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:".gitignore",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"app.1275fa6494b9a68eb962.bundle.css",revision:null},{url:"app.f55c139d2655e9600950.bundle.js",revision:null},{url:"documents/accomodation-policy.pdf",revision:"ac666b8653f4b831c71a23c991dc57ca"},{url:"documents/compact-condo.pdf",revision:"cfb27c1232b0fa76716f2e8c5617938c"},{url:"documents/crazy-crawler.pdf",revision:"f3c9c5aad94df4cf587d02b74f6a6ae4"},{url:"documents/dev-dash.pdf",revision:"72de32999eb0b5cfec456db574598352"},{url:"documents/lost-lander.pdf",revision:"8a85a3b657709b7b06de2f805d475399"},{url:"documents/molecular-mystery.pdf",revision:"a2c8de30e3f796744403ac01d10c2fda"},{url:"documents/risk-reduction.pdf",revision:"c74202155bf3c30ed619953b9c70ed96"},{url:"documents/ropeway-design.pdf",revision:"f0cc3c2301f1654b8108db5bdbc9fade"},{url:"documents/spaghetti-bridge-challenge.pdf",revision:"b5437e84206fb5750432a9b9976fbee2"},{url:"favicon.ico",revision:"43dada87b5d87d66091573fb7898caf6"},{url:"imgs/CM.svg",revision:"ce76865526ca3190f59cd8bca7a754e8"},{url:"imgs/ccondo.svg",revision:"04e4ece82bae518f6a9b24b98161855c"},{url:"imgs/ckt.svg",revision:"1b2658985804eae73d068f1255520714"},{url:"imgs/cp.svg",revision:"6a27c27c520f4a621c029e6829b089c8"},{url:"imgs/cz.svg",revision:"d314d1b765363c4183b1317f45cdfead"},{url:"imgs/download.svg",revision:"903dd247deec6387c381dfe88c168029"},{url:"imgs/gsoc.png",revision:"0f09818b328c72c19cef764d1c2d8c31"},{url:"imgs/kh.svg",revision:"6586dc4ac5989322b95d3c7f5e987c0e"},{url:"imgs/pg.svg",revision:"6937ebf764a5a2d42b3fea5741b83cac"},{url:"imgs/qc.png",revision:"041da09d11d9d9fd772b40cb471b1a74"},{url:"imgs/rr.svg",revision:"39833ca65aba66aa5a3ae6e719896380"},{url:"imgs/tt.svg",revision:"89dc0a116c46e6d636637b13adddf5ef"},{url:"index.html",revision:"b4a249ccc29743f9d4c5ad3ccd2af7bd"},{url:"manifest.json",revision:"a6f8774b09802401e03189c44ebd93f5"},{url:"pg.png",revision:"d00a25817447e3af2c1d1bbe1c66a77c"},{url:"pg_a2hs.svg",revision:"5f0a455de40f20d457d77457770a89f1"},{url:"server-response.423d32b49e34e8d243b8.bundle.js",revision:null},{url:"server-response.dd123d9fe35a3f76cdef.bundle.css",revision:null},{url:"server-response.html",revision:"f650f3f67e942a6c0aa08ebf3f0e1034"}],{})}));
