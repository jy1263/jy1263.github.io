(function(t){function e(e){for(var r,o,i=e[0],c=e[1],u=e[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a={app:0},s=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ecaad553"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"40741b3e"}[t]+".css",a=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[t],f.parentNode.removeChild(f),n(s)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"128f":function(t,e,n){},2395:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},a=[],s={name:"App"},i=s,c=(n("7c55"),n("2877")),u=Object(c["a"])(i,o,a,!1,null,null,null),l=u.exports,d=n("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var f=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t._m(0),t._m(1),n("Social",{staticClass:"social"})],1)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topper"},[n("img",{staticClass:"pfp",attrs:{alt:"Vue logo",src:"https://github.com/jy1263.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[t._v("Hi, I'm Amy. A student based in Sydney who likes to mess around with music stuff. "),n("br"),t._v(" Here's a lil page for my accounts.")])}],h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"social"},[n("a",{attrs:{href:"https://github.com/jy1263"}},[n("span",{staticClass:"mdi mdi-github"}),t._v("Github")]),n("a",{attrs:{href:"https://twitter.com/jy126orjy126"}},[n("span",{staticClass:"mdi mdi-twitter"}),t._v("Twitter")]),n("a",{attrs:{href:"https://www.instagram.com/ayanamy.jy1263/"}},[n("span",{staticClass:"mdi mdi-instagram"}),t._v("Instagram")]),n("a",{attrs:{href:"https://github.com/jy1263/jy1263.github.io"}},[n("span",{staticClass:"mdi mdi-github"}),t._v("This Repository")]),n("a",{attrs:{href:"https://app.matter.online/artists/@ayanamy"}},[n("span",{staticClass:"mdi mdi-music-circle"}),t._v("Matter Music")]),n("a",{attrs:{href:"https://open.spotify.com/artist/15HdoPMP89EsIfIvN1coko?si=pyuDsYIpRcu2AHDYVYIn-Q"}},[n("span",{staticClass:"mdi mdi-spotify"}),t._v("Spotify")]),n("a",{attrs:{href:"https://soundcloud.com/owotter"}},[n("span",{staticClass:"mdi mdi-soundcloud"}),t._v("Soundcloud")]),n("a",{attrs:{href:"https://soundcloud.com/owotterwip"}},[n("span",{staticClass:"mdi mdi-soundcloud"}),t._v("WIP Soundcloud")]),n("a",{attrs:{href:"https://www.youtube.com/watch?v=ucbx9we6EHk"}},[n("span",{staticClass:"mdi mdi-youtube"}),t._v("If it isn't clear enough")])])}],b=(n("5363"),{name:"Social",props:{msg:String},data:function(){return{links:[{name:"Github",link:"https://github.com/jy1263/"},{name:"Twitter",link:"https://twitter.com/jy126orjy126/"},{name:"Instagram",link:"https://www.instagram.com/owotter.jy1263/"},{name:"This Repository",link:"https://github.com/jy1263/jy1263.github.io"}]}},mounted:function(){},methods:{}}),g=b,y=(n("a034"),Object(c["a"])(g,h,v,!1,null,"5a295e35",null)),w=y.exports,_={name:"Home",components:{Social:w}},j=_,k=(n("c9e1"),Object(c["a"])(j,p,m,!1,null,"e7991bfc",null)),C=k.exports;r["a"].use(f["a"]);var S=[{path:"/",name:"Home",component:C},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/:catchAll(.*)",name:"NotFound",component:function(){return n.e("about").then(n.bind(null,"8cdb"))}}],E=new f["a"]({mode:"history",base:"/",routes:S}),A=E,O=n("2f62");r["a"].use(O["a"]);var P=new O["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:A,store:P,render:function(t){return t(l)}}).$mount("#app")},"7c55":function(t,e,n){"use strict";var r=n("2395"),o=n.n(r);o.a},a034:function(t,e,n){"use strict";var r=n("d8de"),o=n.n(r);o.a},c9e1:function(t,e,n){"use strict";var r=n("128f"),o=n.n(r);o.a},d8de:function(t,e,n){}});
//# sourceMappingURL=app.63fcc85d.js.map