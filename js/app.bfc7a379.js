(function(t){function e(e){for(var r,o,s=e[0],u=e[1],c=e[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a={app:0},i=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f78bbbdb"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"58a69f50"}[t]+".css",a=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],l=c.getAttribute("data-href");if(l===r||l===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[t],p.parentNode.removeChild(p),n(i)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t);var f=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2395:function(t,e,n){},2403:function(t,e,n){"use strict";var r=n("f51f"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},a=[],i={name:"App"},s=i,u=(n("7c55"),n("2877")),c=Object(u["a"])(s,o,a,!1,null,null,null),l=c.exports,f=n("9483");Object(f["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var p=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t._m(0),t._m(1),n("Social",{staticClass:"social"})],1)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topper"},[n("img",{staticClass:"pfp",attrs:{alt:"Vue logo",src:"https://github.com/jy1263.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[t._v("Hi, I'm Amy. A student based in Sydney who likes to mess around with music stuff. "),n("br"),t._v(" Here's a lil page for my accounts.")])}],m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"social"},[n("a",{attrs:{href:"https://github.com/jy1263"}},[t._v("Github")]),n("a",{attrs:{href:"https://twitter.com/jy126orjy126"}},[t._v("Twitter")]),n("a",{attrs:{href:"https://www.instagram.com/owotter.jy1263/"}},[t._v("Instagram")]),n("a",{attrs:{href:"https://github.com/jy1263/jy1263.github.io"}},[t._v("This Repository")]),n("a",{attrs:{href:"https://app.matter.online/artists/@owotter"}},[t._v("Matter Music")]),n("a",{attrs:{href:"https://open.spotify.com/artist/15HdoPMP89EsIfIvN1coko?si=pCaGNeQBQDagLPsoQaD41A"}},[t._v("Spotify")]),n("a",{attrs:{href:"https://soundcloud.com/owotter"}},[t._v("Soundcloud")]),n("a",{attrs:{href:"https://soundcloud.com/owotterwip"}},[t._v("WIP Soundcloud")]),n("a",{attrs:{href:"https://www.youtube.com/watch?v=ucbx9we6EHk"}},[t._v("If it isn't clear enough")])])}],g={name:"Social",props:{msg:String},data:function(){return{links:[{name:"Github",link:"https://github.com/jy1263/"},{name:"Twitter",link:"https://twitter.com/jy126orjy126/"},{name:"Instagram",link:"https://www.instagram.com/owotter.jy1263/"},{name:"This Repository",link:"https://github.com/jy1263/jy1263.github.io"}]}},mounted:function(){},methods:{}},b=g,y=(n("5d10"),Object(u["a"])(b,m,v,!1,null,"4d473730",null)),w=y.exports,_={name:"Home",components:{Social:w}},j=_,k=(n("2403"),Object(u["a"])(j,d,h,!1,null,"4da93e85",null)),S=k.exports;r["a"].use(p["a"]);var E=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],O=new p["a"]({mode:"hash",base:"",routes:E}),A=O,C=n("2f62");r["a"].use(C["a"]);var P=new C["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:A,store:P,render:function(t){return t(l)}}).$mount("#app")},"5d10":function(t,e,n){"use strict";var r=n("e671"),o=n.n(r);o.a},"7c55":function(t,e,n){"use strict";var r=n("2395"),o=n.n(r);o.a},e671:function(t,e,n){},f51f:function(t,e,n){}});
//# sourceMappingURL=app.bfc7a379.js.map