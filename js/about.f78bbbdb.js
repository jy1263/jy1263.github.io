(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"805e":function(t,n,o){"use strict";var a=o("ac73"),r=o.n(a);r.a},a15b:function(t,n,o){"use strict";var a=o("23e7"),r=o("44ad"),e=o("fc6a"),c=o("a640"),i=[].join,s=r!=Object,u=c("join",",");a({target:"Array",proto:!0,forced:s||!u},{join:function(t){return i.call(e(this),void 0===t?",":t)}})},a640:function(t,n,o){"use strict";var a=o("d039");t.exports=function(t,n){var o=[][t];return!!o&&a((function(){o.call(null,n||function(){throw 1},1)}))}},ac73:function(t,n,o){},f820:function(t,n,o){"use strict";o.r(n);var a=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"about"},[o("h1",[t._v("Portfolio coming soon...")]),o("pre",{staticStyle:{"background-color":"#000",color:"#ccc","font-size":"10pt"},attrs:{id:"d"}}),t._v(" Spinning Donut Code is by "),o("a",{attrs:{href:"https://www.a1k0n.net/2011/07/20/donut-math.html"}},[t._v("a1k0n")])])}],e=(o("a15b"),{name:"About",components:{},mounted:function(){console.log("start");var t=document.getElementById("d"),n=void 0,o=1,a=1,r=function(){var n=[],r=[];o+=.07,a+=.03;for(var e=Math.cos(o),c=Math.sin(o),i=Math.cos(a),s=Math.sin(a),u=0;u<1760;u++)n[u]=u%80==79?"\n":" ",r[u]=0;for(var f=0;f<6.28;f+=.07)for(var l=Math.cos(f),d=Math.sin(f),v=0;v<6.28;v+=.02){var h=Math.sin(v),m=Math.cos(v),b=l+2,p=1/(h*b*c+d*e+5),w=h*b*e-d*c,M=0|40+30*p*(m*b*i-w*s),_=0|12+15*p*(m*b*s+w*i),g=M+80*_,j=0|8*((d*c-h*l*e)*i-h*l*c-d*e-m*l*s);_<22&&_>=0&&M>=0&&M<79&&p>r[g]&&(r[g]=p,n[g]=".,-~:;=!*#$@"[j>0?j:0])}t.innerHTML=n.join("")};window.anim1=function(){void 0===n?n=setInterval(r,50):(clearInterval(n),n=void 0)},r(),anim1()},methods:{}}),c=e,i=(o("805e"),o("2877")),s=Object(i["a"])(c,a,r,!1,null,"bf0fdb86",null);n["default"]=s.exports}}]);
//# sourceMappingURL=about.f78bbbdb.js.map