(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{138:function(t){t.exports=JSON.parse('{"id":{"0xfc64ec04":"Frontier","0x97c2c34c":"Homestead","0xdb06803f":"Gas Reprice","0xaff4bed4":"Die Hard","0xf79a63c0":"Gotham","0x744899d6":"Defuse Difficulty Bomb","0x518b59c6":"Atlantis","0x7ba22882":"Agharta","0x9007bfcc":"Phoenix","0xdb63a1ca":"Thanos","0x0f6bf187":"Magneto","0x7fd1bb25":"Mystique"},"block":{"0":"-","1150000":"Homestead","2500000":"Gas Reprice","3000000":"Die Hard","5000000":"Gotham","5900000":"Defuse Difficulty Bomb","8772000":"Atlantis","9573000":"Agharta","10500839":"Phoenix","11700000":"Thanos","13189133":"Magneto","14525000":"Mystique"}}')},142:function(t,e,r){"use strict";var n=r(3);r(25),r(21),r(49),r(26),r(71),r(48);e.a=function(t){var e=t.app;e.i18n.onLanguageSwitched=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r,n){var o,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.store.dispatch("content/fetch");case 2:o=e.router.history.current.fullPath,s=o.split("/"),e.i18n.locales.filter((function(i){return i.code===s[1]})).length&&e.i18n.locale!==s[1]&&(s[1]=e.i18n.locale,o=s.join("/"),e.router.replace({path:o}));case 6:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()}},143:function(t,e,r){"use strict";var n=r(144),o=r.n(n),c=r(0);c.default.use(o.a),c.default.component("Apexchart",o.a)},178:function(t,e,r){var content=r(240);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(73).default)("6570a8f6",content,!0,{sourceMap:!1})},202:function(t){t.exports=JSON.parse('{"a":"1.0.0"}')},204:function(t){t.exports=JSON.parse('{"favicon":"favicon.png","logo":{"dark":"octano-dark.svg","light":"octano-light.svg"},"url":"https://etcnodes.org","github":"https://github.com/etclabscore/nodes-interface","theme":{"dark":true,"themes":{"dark":{"primary":"#00ccff","secondary":"#ff00cb","accent":"#f30","error":"#FF5252","info":"#2196F3","success":"#4CAF50","warning":"#FFC107","staticborders":"#2E2E2E","zebrastripes":"#1E1E1E"},"light":{"primary":"#00ccff","secondary":"#ff00cb","accent":"#f30","error":"#FF5252","info":"#2196F3","success":"#4CAF50","warning":"#FFC107","staticborders":"#E1E1E1","zebrastripes":"#F1F1F1"}},"options":{"customProperties":true}},"i18n":{"default":"en","locales":[{"code":"en","name":"English"},{"code":"es","name":"Español"},{"code":"ru","name":"Pусский"},{"code":"zh","name":"中文"}]},"router":{"base":"/nodes-interface/"}}')},207:function(t,e,r){"use strict";var n=r(3),o=(r(26),r(25),{name:"DefaultLayout",data:function(){return{fab:!1}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("set_mobile",window.innerWidth<600);case 2:return e.next=4,t.$store.dispatch("content/fetch");case 4:case"end":return e.stop()}}),e)})))()},computed:{darkmode:{get:function(){return this.$vuetify.theme.dark},set:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}},theme:function(){return this.$vuetify.theme.dark?"dark":"light"},params:function(){return this.$store.state.params},avlLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))},locale:function(){return this.$i18n.locale},groups:function(){return this.$store.state.content.groups},items:function(){return this.$store.state.content.items},article:function(){return this.$store.state.content.selected.article},isMobile:function(){return this.$store.state.mobile}},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})},methods:{onScroll:function(t){if("undefined"!=typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}},toTop:function(){this.$vuetify.goTo("header",{duration:300,offset:0,easing:"easeInOutCubic"})},onResize:function(){this.$store.dispatch("set_mobile",window.innerWidth<600)}}}),c=r(59),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-app-bar",{attrs:{fixed:"",app:"",flat:t.isMobile,"clipped-right":""}},[r("v-btn",{staticClass:"mr-1",attrs:{icon:"",nuxt:"",to:"/"}},[r("v-icon",[t._v("mdi-home")])],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.$vuetify.theme.dark=!t.$vuetify.theme.dark}}},[r("v-icon",[t._v("mdi-theme-light-dark")])],1),t._v(" "),r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),n),[r("v-icon",[t._v("mdi-translate")])],1)]}}])},[t._v(" "),r("v-list",[t._l(t.avlLocales,(function(e,n){return r("v-list-item",{key:n,on:{click:function(r){return t.$i18n.setLocale(e.code)}}},[r("v-list-item-title",[t._v(t._s(e.name))])],1)})),t._v(" "),r("v-divider"),t._v(" "),r("v-list-item",{attrs:{href:t.params.github,target:"_blank"}},[r("v-list-item-title",[t._v(t._s(t.$t("helpTranslate")))])],1)],2)],1),t._v(" "),r("v-btn",{attrs:{icon:"",href:t.params.github,target:"_blank"}},[r("v-icon",[t._v("mdi-github")])],1)],1),t._v(" "),r("v-main",[r("v-container",{staticClass:"pb-12",attrs:{fluid:""}},[r("nuxt")],1)],1),t._v(" "),r("v-footer",{staticClass:"px-2",staticStyle:{"background-color":"var(--v-primary-base)","font-size":"12px","font-weight":"600"},attrs:{padless:"",app:"",fixed:"",height:"22px"}},[r("v-spacer"),t._v(" "),r("span",{staticStyle:{color:"#fff"}},[t._v("\n      "+t._s(t.$t("footer.copyright"))+"\n    ")]),t._v(" "),r("v-spacer")],1),t._v(" "),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.fab,expression:"fab"},{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],staticClass:"mb-5",staticStyle:{"z-index":"5"},attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"secondary"},on:{click:t.toTop}},[r("v-icon",[t._v("mdi-chevron-up")])],1)],1)}),[],!1,null,null,null);e.a=component.exports},211:function(t,e,r){r(212),t.exports=r(213)},239:function(t,e,r){"use strict";r(178)},240:function(t,e,r){var n=r(72)(!1);n.push([t.i,"h1[data-v-495dc2cf]{font-size:20px}",""]),t.exports=n},243:function(t,e,r){var content=r(244);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(73).default)("2530bd9f",content,!0,{sourceMap:!1})},244:function(t,e,r){var n=r(72)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap);"]),n.push([t.i,'::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-track{background:var(--v-staticborders-base)!important;z-index:4!important}::-webkit-scrollbar-thumb{background:var(--v-primary-base)!important}.ff-scrollbar-fix{transform:translateZ(0);scrollbar-color:var(--v-primary-base) var(--v-staticborders-base);scrollbar-width:thin}html{overflow-y:hidden!important;scrollbar-color:var(--v-primary-base) #2f2f2f;scrollbar-width:thin}.v-main__wrap{overflow-y:auto!important;max-height:calc(100vh - 86px)!important}a{text-decoration:none!important}.v-application{font-family:"IBM Plex Mono",monospace!important}.nuxt-content>h2{margin-bottom:8px}.nuxt-content>ul{margin-top:20px;margin-bottom:20px}#color_bar{margin-bottom:10px!important}#map-svg{padding:5px!important}.w-100{width:100%}.mw-320{max-width:320px!important}.v-tabs-items{background:transparent!important}.bg-0{background-color:transparent!important}.no-tt{text-transform:none!important}.v-navigation-drawer__border:hover{background-color:var(--v-primary-base)!important}pre{max-width:100%;overflow-x:auto;background-color:transparent;word-wrap:normal;white-space:pre;transform:translateZ(0);scrollbar-color:var(--v-primary-base) #2f2f2f;scrollbar-width:thin}pre>code{background-color:transparent!important;font-family:"IBM Plex Mono",monospace!important}.v-application pre>code{white-space:pre!important;padding:0!important}.nuxt-content-highlight{position:relative}.filename{position:absolute;right:0;top:0;line-height:1;margin-right:1rem;margin-top:.75rem;color:#fff;z-index:2}pre[class*=language-]{font-family:"IBM Plex Mono",monospace!important}.nuxt-content-highlight{margin-top:20px;margin-bottom:20px}.nuxt-content-highlight>div.code-toolbar>div.toolbar>div.toolbar-item>button{padding:4px;border-radius:4px;border:1px solid #fff!important;color:#fff;position:absolute;right:0;bottom:0;margin-right:1rem;margin-bottom:.75rem;font-family:"IBM Plex Mono",monospace!important}.nuxt-content-highlight>.code-toolbar>div.toolbar>div.toolbar-item>button:hover{border:1px solid var(--v-primary-base)!important;color:var(--v-primary-base)}.code-toolbar{position:relative}.code-toolbar>div.toolbar{position:absolute;right:0;bottom:0}.static-toc-active{color:var(--v-primary-base)!important;border-left:6px solid var(--v-primary-base)}.v-list-item--link:before{background-color:transparent!important}table{width:100%;border-collapse:collapse;margin-bottom:10px}.nuxt-content>h2{margin-top:50px}.mw-300{max-width:300px!important}.static-toc{border-left:6px solid var(--v-staticborders-base)!important}.bt-1{border-top:1px solid var(--v-staticborders-base)!important}.bb-1{border-bottom:1px solid var(--v-staticborders-base)!important}.nuxt-content>h1>a>span.header-link,.nuxt-content>h2>a>span.header-link,.nuxt-content>h3>a>span.header-link,.nuxt-content>h4>a>span.header-link,.nuxt-content>h5>a>span.header-link,.nuxt-content>h6>a>span.header-link{color:var(--v-staticborders-base)!important}.nuxt-content>h1>a>span.header-link:hover,.nuxt-content>h2>a>span.header-link:hover,.nuxt-content>h3>a>span.header-link:hover,.nuxt-content>h4>a>span.header-link:hover,.nuxt-content>h5>a>span.header-link:hover,.nuxt-content>h6>a>span.header-link:hover{color:var(--v-primary-base)!important}.nuxt-content>table>tbody>tr>td,.nuxt-content>table>thead>tr>th{border:1px solid var(--v-staticborders-base)!important;padding:6px!important}.nuxt-content>table>tbody>tr:nth-child(odd){background:var(--v-zebrastripes-base)!important}.v-sheet.v-app-bar.v-toolbar{box-shadow:inset 0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)!important}.theme--light.v-toolbar{background-color:#f5f5f5!important}.theme--dark.v-navigation-drawer{background-color:#121212!important}.theme--dark>div.v-card__text>div.nuxt-content-container>.nuxt-content-editor{color:#fff!important}',""]),t.exports=n},249:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"mutations",(function(){return c})),r.d(e,"actions",(function(){return l}));var n=r(202),o=function(){return{static:n.a,mobile:!1}},c={SET_MOBILE:function(t,e){t.mobile=e}},l={set_mobile:function(t,e){var r=t.commit;e!==t.state.mobile&&r("SET_MOBILE",e)}}},250:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return h})),r.d(e,"mutations",(function(){return m})),r.d(e,"actions",(function(){return v}));r(23),r(10),r(17),r(28),r(13),r(12),r(31),r(32),r(18);var n=r(6),o=r(3),c=(r(25),r(21),r(48),r(203)),l=r.n(c);function f(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var h=function(){return{groups:null,items:null,selected:{article:null,prev:null,next:null,fallback:!1}}},m={SET_CONTENT:function(t,content){t.groups=content.groups,t.items=content.items},SET_SELECTED:function(t,e){t.selected=e}},v={fetch:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var n,o,g,c,d,h,i,m,v,x,y,k,w,_;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.prev=1,o=e.$i18n.locale,r.next=5,e.$content(o,{deep:!0}).where({type:"group"}).sortBy("index").fetch();case 5:g=r.sent,c={},d=f(g);try{for(d.s();!(h=d.n()).done;)i=h.value,m=i.dir.substr(1).replace("/","-"),i.items=[],c[m]=i}catch(t){d.e(t)}finally{d.f()}return r.next=11,e.$content(o,{deep:!0}).where({type:{$ne:"group"}}).sortBy("createdAt").fetch();case 11:v=r.sent,x=[],y=f(v);try{for(y.s();!(k=y.n()).done;)(w=k.value).type||(w.dir!=="/"+o?(_=w.dir.substr(1).replace("/","-"),w.group=_,c[_]&&c[_].items.push(w)):x.push(w))}catch(t){y.e(t)}finally{y.f()}n("SET_CONTENT",{groups:c,items:x}),r.next=21;break;case 18:r.prev=18,r.t0=r.catch(1),l.a.log(r.t0);case 21:case"end":return r.stop()}}),r,null,[[1,18]])})))()},select:function(t,e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var c,path,l,f,d,article,h,m,v,x;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return c=t.commit,path=e.path,l=e.fallback,o.next=5,r.$content({deep:!0}).where({path:path}).fetch();case 5:if(f=o.sent,d=Object(n.a)(f,1),!(article=d[0])){o.next=19;break}return o.next=11,r.$content(r.$i18n.locale,{deep:!0}).where({type:{$ne:"group"}}).only(["title","slug","path"]).sortBy("createdAt","asc").surround(article.slug).fetch();case 11:return h=o.sent,m=Object(n.a)(h,2),v=m[0],x=m[1],c("SET_SELECTED",{article:article,prev:v,next:x,fallback:l}),o.abrupt("return",article);case 19:return o.abrupt("return",null);case 20:case"end":return o.stop()}}),o)})))()}}},251:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"mutations",(function(){return o})),r.d(e,"actions",(function(){return c}));var n=function(){return{charts:!0}},o={SET_CHARTS:function(t,e){t.charts=e}},c={toggleCharts:function(t){(0,t.commit)("SET_CHARTS",!t.state.charts)},set_charts:function(t,e){(0,t.commit)("SET_CHARTS",e)}}},252:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return h})),r.d(e,"mutations",(function(){return m})),r.d(e,"actions",(function(){return v}));r(23),r(10),r(28),r(13),r(12),r(31),r(32),r(18);var n=r(3),o=(r(25),r(253),r(27),r(21),r(49),r(17),r(58)),c=r.n(o),l=r(138);function f(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var h=function(){return{raw:[],clients:{},forks:{},countries:{},protocols:{eth:{},snap:{}},updated:!1}},m={SET_NODES:function(t,e){t.raw=e},SET_CLIENTS:function(t,e){t.clients={table:e,chart:{series:Object.values(e),labels:Object.keys(e)}}},SET_FORKIDS:function(t,e){t.forks.current={table:e.current,chart:{series:Object.values(e.current),labels:Object.keys(e.current)}},t.forks.next={table:e.next,chart:{series:Object.values(e.next),labels:Object.keys(e.next)}}},SET_PROTOCOLS:function(t,e){t.protocols={eth:{table:e.eth,chart:{series:Object.values(e.eth),labels:Object.keys(e.eth)}},snap:{table:e.snap,chart:{series:Object.values(e.snap),labels:Object.keys(e.snap)}}},t.updated=!0},SET_COUNTRIES:function(t,e){t.countries=e}},v={set_nodes:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data,o,l,f,d,h,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.commit,t.state.updated){e.next=12;break}return e.next=4,c.a.get("https://peers.etccore.in/v5/nodes.json");case 4:n=e.sent,data=n.data,o=x(data),l=o.nodes,f=o.clients,d=o.forks,h=o.protocols,m=o.countries,r("SET_NODES",l),r("SET_CLIENTS",f),r("SET_FORKIDS",d),r("SET_PROTOCOLS",h),r("SET_COUNTRIES",m);case 12:case"end":return e.stop()}}),e)})))()}},x=function(t){var e,r={},n={current:{},next:{}},o={eth:{},snap:{}},c={},l=[],d=f(t);try{for(d.s();!(e=d.n()).done;){var h=e.value;if("handshake"!==h.protocols.eth&&h.protocols.eth.version>0){var m=h.name.split("/");h.client={name:m[0]?m[0]:"-",release:m[1]?m[1]:"-",platform:m[2]?m[2]:"-",extra:m[3]?m[3]:""},r[h.client.name]=r[h.client.name]?r[h.client.name]+1:1,h.protocols.eth.forkId&&(h.protocols.eth.forkId.tag=y(h.protocols.eth.forkId.hash),h.protocols.eth.forkId.nextTag=k(h.protocols.eth.forkId.next),n.current[h.protocols.eth.forkId.tag]=n.current[h.protocols.eth.forkId.tag]?n.current[h.protocols.eth.forkId.tag]+1:1,n.next[h.protocols.eth.forkId.nextTag]=n.next[h.protocols.eth.forkId.nextTag]?n.next[h.protocols.eth.forkId.nextTag]+1:1);var v="v"+h.protocols.eth.version;if(o.eth[v]=o.eth[v]?o.eth[v]+1:1,h.protocols.snap){var s="v"+h.protocols.snap.version;o.snap[s]=o.snap[s]?o.snap[s]+1:1}else o.snap["-"]=o.snap["-"]?o.snap["-"]+1:1;c[h.ip_info.country]=c[h.ip_info.country]?c[h.ip_info.country]+1:1,l.push(h)}}}catch(t){d.e(t)}finally{d.f()}return{nodes:l,clients:r,forks:n,protocols:o,countries:c}},y=function(t){return l.id[t]||t},k=function(t){return l.block[t]||t}},271:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o}));var n=r(204),o=function(){return n}},55:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(239),r(59)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"495dc2cf",null);e.a=component.exports}},[[211,13,3,14]]]);