(function(e){function n(n){for(var a,r,u=n[0],c=n[1],s=n[2],l=0,d=[];l<u.length;l++)r=u[l],i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(n);while(d.length)d.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,r=1;r<t.length;r++){var u=t[r];0!==i[u]&&(a=!1)}a&&(o.splice(n--,1),e=c(c.s=t[0]))}return e}var a={},r={app:0},i={app:0},o=[];function u(e){return c.p+"js/"+({"404-vue":"404-vue","Contact-vue":"Contact-vue","Design-vue":"Design-vue","Games-vue":"Games-vue","Home-vue":"Home-vue","Sites-vue":"Sites-vue","lang-en-json":"lang-en-json"}[e]||e)+"."+{"404-vue":"8f08d538","Contact-vue":"17b90c98","Design-vue":"e9853b03","Games-vue":"1c259326","Home-vue":"f6038a95","Sites-vue":"b02fca20","chunk-5a262096":"b0b9ae14","lang-en-json":"2333a18c"}[e]+".js"}function c(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={"404-vue":1,"Contact-vue":1,"Design-vue":1,"Games-vue":1,"Home-vue":1,"Sites-vue":1,"chunk-5a262096":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise(function(n,t){for(var a="css/"+({"404-vue":"404-vue","Contact-vue":"Contact-vue","Design-vue":"Design-vue","Games-vue":"Games-vue","Home-vue":"Home-vue","Sites-vue":"Sites-vue","lang-en-json":"lang-en-json"}[e]||e)+"."+{"404-vue":"e13854d0","Contact-vue":"35d10e38","Design-vue":"690386a3","Games-vue":"254c6023","Home-vue":"433547df","Sites-vue":"269caea0","chunk-5a262096":"744ce6a2","lang-en-json":"31d6cfe0"}[e]+".css",i=c.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===i))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===a||l===i)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var a=n&&n.target&&n.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],f.parentNode.removeChild(f),t(o)},f.href=i;var g=document.getElementsByTagName("head")[0];g.appendChild(f)}).then(function(){r[e]=0}));var a=i[e];if(0!==a)if(a)n.push(a[2]);else{var o=new Promise(function(n,t){a=i[e]=[n,t]});n.push(a[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e),s=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=i[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");o.type=a,o.request=r,t[1](o)}i[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},c.m=e,c.c=a,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)c.d(t,a,function(n){return e[n]}.bind(null,a));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var f=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"02a6":function(e,n,t){"use strict";t.d(n,"a",function(){return c});var a=t("cebc"),r=(t("6762"),t("2fdb"),t("28a5"),t("bc3a")),i=t.n(r),o=t("fc96"),u=t("d3a4"),c={get defaultLanguage(){return o["a"]},get supportedLanguages(){return o["c"]},get currentLanguage(){return u["a"].locale},set currentLanguage(e){u["a"].locale=e},getUserSupportedLang:function(){var e=c.getUserLang();return c.isLangSupported(e.lang)?e.lang:c.isLangSupported(e.langNoISO)?e.langNoISO:c.defaultLanguage},getUserLang:function(){var e=window.navigator.language||window.navigator.userLanguage||c.defaultLanguage;return{lang:e,langNoISO:e.split("-")[0]}},setI18nLanguageInServices:function(e){return c.currentLanguage=e,i.a.defaults.headers.common["Accept-Language"]=e,document.querySelector("html").setAttribute("lang",e),e},changeLanguage:function(e){return c.isLangSupported(e)?u["a"].locale===e?Promise.resolve(e):c.loadLanguageFile(e).then(function(n){return u["a"].setLocaleMessage(e,n.default||n),c.setI18nLanguageInServices(e)}):Promise.reject(new Error("Language not supported"))},loadLanguageFile:function(e){return t("8825")("./".concat(e,".json"))},isLangSupported:function(e){return c.supportedLanguages.includes(e)},routeMiddleware:function(e,n,t){var a=e.params.lang;return c.isLangSupported(a)?c.changeLanguage(a).then(function(){return t()}):t(c.getUserSupportedLang())},i18nRoute:function(e){return Object(a["a"])({},e,{params:Object(a["a"])({lang:this.currentLanguage},e.params)})}}},"16c8":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var a=t("a026"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",{attrs:{id:"app",dark:""}},[t("router-view"),t("Footer"),t("ScrollUpFabComp")],1)},i=[],o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-footer",{attrs:{height:"auto"}},[t("v-card",{staticClass:"flex footer",attrs:{flat:"",tile:""}},[t("v-card-title",[t("strong",{staticClass:"dg-text subheading font-weight-light"},[e._v(e._s(e.$t("footer")))]),t("v-spacer"),e._l(e.social,function(n){return t("v-btn",{key:n.id,staticClass:"mx-3",attrs:{href:n.link,icon:""}},[t("v-icon",{staticClass:"dg-text dg-icon footer-icon",attrs:{size:"24px"}},[e._v(e._s(n.icon))])],1)})],2),t("v-card-actions",{staticClass:"justify-center footer-year"},[e._v("\n      ©2019 — "),t("strong",[e._v("Tanis Webb")])])],1)],1)},u=[],c={name:"Footer",data:function(){return{social:[{id:0,link:"https://doctororbit.itch.io/",icon:"fab fa-itch-io"},{id:1,link:"https://twitter.com/DoctorORBiT",icon:"fab fa-twitter"},{id:2,link:"https://www.instagram.com/doctororbitdev/",icon:"fab fa-instagram"},{id:3,link:"https://github.com/stockbrot",icon:"fab fa-github"}]}}},s=c,l=(t("ee86"),t("2877")),d=Object(l["a"])(s,o,u,!1,null,null,null),f=d.exports,g=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-btn",{staticClass:"scrollup-fab fab-hidden",attrs:{color:"rgba(17,94,199,1)",dark:"",fixed:"",fab:""},on:{click:function(n){return n.stopPropagation(),e.scrollUp(n)}},model:{value:e.fab,callback:function(n){e.fab=n},expression:"fab"}},[t("v-icon",[e._v("fas fa-arrow-up")])],1)},p=[],h={name:"ScrollUpFabComp",data:function(){return{fab:!1}},methods:{handleScroll:function(){var e=document.querySelector(".scrollup-fab");window.scrollY<100?e.classList.add("fab-hidden"):window.scrollY>100&&e.classList.remove("fab-hidden")},scrollUp:function(){this.$vuetify.goTo(0,this.options)}},created:function(){window.addEventListener("scroll",this.handleScroll)}},v=h,m=(t("664f"),Object(l["a"])(v,g,p,!1,null,null,null)),b=m.exports,w={name:"App",components:{Footer:f,ScrollUpFabComp:b}},k=w,S=Object(l["a"])(k,r,i,!1,null,null,null),y=S.exports,L=t("a18c"),j=t("d3a4"),x=t("02a6"),D=t("ce5b"),C=t.n(D);t("bf40"),t("0aa7"),t("b5bf"),t("752f");a["default"].prototype.$i18nRoute=x["a"].i18nRoute.bind(x["a"]),a["default"].use(C.a,{iconfont:"fa4"}),a["default"].config.productionTip=!1,new a["default"]({el:"#app",components:{App:y},template:"<App/>",router:L["a"],i18n:j["a"]})},"5b75":function(e,n,t){},"664f":function(e,n,t){"use strict";var a=t("5b75"),r=t.n(a);r.a},"752f":function(e,n,t){},8825:function(e,n,t){var a={"./de.json":["bac1"],"./en.json":["e312","lang-en-json"]};function r(e){var n=a[e];return n?Promise.all(n.slice(1).map(t.e)).then(function(){var e=n[0];return t.t(e,3)}):Promise.resolve().then(function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n})}r.keys=function(){return Object.keys(a)},r.id="8825",e.exports=r},a18c:function(e,n,t){"use strict";(function(e){var a=t("a026"),r=t("8c4f"),i=t("d046");a["default"].use(r["a"]),n["a"]=new r["a"]({routes:i["a"],mode:"history",base:e,scrollBehavior:function(e,n,t){return t||{x:0,y:0}}})}).call(this,"/")},a2f9:function(e,n,t){var a={"./404.vue":["ee5d","404-vue"],"./Contact.vue":["c3df","Contact-vue"],"./Design.vue":["ec28","Design-vue"],"./Games.vue":["2d81","Games-vue"],"./Home.vue":["bc13","Home-vue"],"./Sites.vue":["6e10","Sites-vue"]};function r(e){var n=a[e];return n?t.e(n[1]).then(function(){var e=n[0];return t(e)}):Promise.resolve().then(function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n})}r.keys=function(){return Object.keys(a)},r.id="a2f9",e.exports=r},bac1:function(e){e.exports={404:'This page does not exist, go back to home <v-btn color="info" class="d-flex" width="150" :to="$i18nRoute({name: \'home\'})">{{ $t(\'contactMe\') }}</v-btn>',contactMe:"Kontaktiere Mich",preview:"Vorschau",more:"Weiter Lesen",visit:"Website besuchen",close:"Schließen",footer:"Verbinde dich mit uns auf unseren Sozialen Netzwerken!",contactText:"Schreibe mir eine kurze E-Mail oder finde mich auf den gängigen Social Media Seiten.",websiteText:'Diese Platzhalter wurden von <a href="https://colorlib.com/">Colorlib©</a> bereitgestellt.',pages:{home:"Home",contact:"Kontakt"},portfolio:{sites:"Webseiten",games:"Spiele",design:"Design"},skills:{title:"Meine Projekte",btn:"Projekte"},games:{packageman:{dialogText1:"Du hast limitierte Zeit deinen Van mit Paketen zu füllen, und deine Schicht endet sobald dein Van das Ende der Straße erreicht hat. Du arbeitest 5 Tage in der Woche, von Montag - Freitag. Jeder Tag ist auf einer anderen zufälligen map, zu unterschiedlichen Tageszeiten. Beweise deine Fähigkeiten in dem du so viele Türen, Fenster und Garagen wie möglich zerstörst.",cardText:"Pakete nehmen. Pakete werfen. Geld kriegen. Fertig."},sunday:{dialogText1:"In dieser Geschichte entdenkst du einen unbekannten Ort, mit unbekannten Einwohnern. Die Sonne will dich umbringen, die Schatten sind dein einziger zufluchtsort. Die Einwohner dieser Welt verstecken sich ebenfalls in den Schatten, aber sie sind wesentlich kleiner als du.",cardText:"Ziemlich blendend. Tötliche Umwelt. Kleine Freunde."},trapped:{dialogText1:"Die geistige Gesundheit wird oft überbewertet. Wer braucht das, habe ich recht? Wenn Sie dieses Spiel spielen, erleben Sie auf unangenehme Weise völlige Isolation. Wenn Sie es schaffen, in Ihrem Zimmer zu bleiben, können Sie einige Geheimnisse aufdecken",cardText:"Wahnsinn in der Membran, Wahnsinn im Gehirn."}},paragraph:{titel:"Über Mich",textBlock:"Ich bin ein Web Designer, Spieleentwickler und Künstler, mit Erfahrungen im Management von kleinen und großen Projekten. Mein Hintergrund in UI, UX und Design unterstützen mein durchdachten aber kompetetiven anlauf."},paragraph2:{titel:"Dienstleistungen",textBlock:"Ich bin ein Web Designer, Spieleentwickler und Künstler, mit Erfahrungen im Management von kleinen und großen Projekten. Mein Hintergrund in UI, UX und Design unterstützen mein durchdachten aber kompetetiven anlauf."}}},d046:function(e,n,t){"use strict";var a=t("02a6");function r(e){return function(){return t("a2f9")("./".concat(e,".vue"))}}n["a"]=[{beforeEnter:a["a"].routeMiddleware,path:"/:lang",component:function(){return t.e("chunk-5a262096").then(t.bind(null,"713b"))},children:[{path:"",name:"home2",component:r("Home")},{path:"home",name:"home",component:r("Home")},{path:"contact",name:"contact",component:r("Contact")},{path:"games",name:"games",component:r("Games")},{path:"sites",name:"sites",component:r("Sites")},{path:"design",name:"design",component:r("Design")},{path:"*",name:"404",component:r("404")}]},{path:"*",redirect:function(){return a["a"].getUserSupportedLang()+"/"}}]},d3a4:function(e,n,t){"use strict";t.d(n,"a",function(){return u});var a=t("a925"),r=t("a026"),i=t("fc96"),o=t("bac1");r["default"].use(a["a"]);var u=new a["a"]({locale:i["a"],fallbackLocale:i["b"],messages:{de:o}})},ee86:function(e,n,t){"use strict";var a=t("16c8"),r=t.n(a);r.a},fc96:function(e,n,t){"use strict";t.d(n,"a",function(){return a}),t.d(n,"b",function(){return r}),t.d(n,"c",function(){return i});var a="de",r="de",i=["en","de"]}});
//# sourceMappingURL=app.4132fc5f.js.map