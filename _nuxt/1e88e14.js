(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{177:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(26),r(212),r(29);var n=function(){var t,e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split("/");e&&e[1]&&!/v\d+\.\d+\.\d+/.test(e[1])&&(t=e[1],e.splice(1,1));var data={name:e[0]?e[0]:"-",identity:t||"-",release:e[1]?e[1]:"-",platform:e[2]?e[2]:"-",extra:e[3]?e[3]:""};return data.nameWithIdentity=data.name,t&&(data.nameWithIdentity+="/".concat(t)),data}},183:function(t){t.exports=JSON.parse('{"id":{"0xfc64ec04":"Frontier","0x97c2c34c":"Homestead","0xdb06803f":"Gas Reprice","0xaff4bed4":"Die Hard","0xf79a63c0":"Gotham","0x744899d6":"Defuse Difficulty Bomb","0x518b59c6":"Atlantis","0x7ba22882":"Agharta","0x9007bfcc":"Phoenix","0xdb63a1ca":"Thanos","0x0f6bf187":"Magneto","0x7fd1bb25":"Mystique","0x0121eac0":"Spiral"},"block":{"0":"-","1150000":"Homestead","2500000":"Gas Reprice","3000000":"Die Hard","5000000":"Gotham","5900000":"Defuse Difficulty Bomb","8772000":"Atlantis","9573000":"Agharta","10500839":"Phoenix","11700000":"Thanos","13189133":"Magneto","14525000":"Mystique","19000000":"Spiral"}}')},221:function(t,e,r){"use strict";var n=r(14);r(41),r(40),r(22),r(103),r(26),r(65);e.a=function(t){var e=t.app;e.i18n.onLanguageSwitched=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r,n){var o,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.store.dispatch("content/fetch");case 2:o=e.router.history.current.fullPath,s=o.split("/"),e.i18n.locales.filter((function(i){return i.code===s[1]})).length&&e.i18n.locale!==s[1]&&(s[1]=e.i18n.locale,o=s.join("/"),e.router.replace({path:o}));case 6:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()}},222:function(t,e,r){"use strict";var n=r(9),o=r(223),c=r.n(o);n.default.use(c.a),n.default.component("Apexchart",c.a)},272:function(t,e,r){var content=r(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(124).default)("7628914a",content,!0,{sourceMap:!1})},302:function(t){t.exports=JSON.parse('{"a":"1.0.0"}')},307:function(t,e,r){"use strict";r(29);var n=r(14),o=(r(40),r(22),r(41),{name:"DefaultLayout",data:function(){return{fab:!1}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("set_mobile",window.innerWidth<600);case 2:return e.next=4,t.$store.dispatch("content/fetch");case 4:case"end":return e.stop()}}),e)})))()},computed:{darkmode:{get:function(){return this.$vuetify.theme.dark},set:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}},theme:function(){return this.$vuetify.theme.dark?"dark":"light"},params:function(){return this.$store.state.params},avlLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))},locale:function(){return this.$i18n.locale},groups:function(){return this.$store.state.content.groups},items:function(){return this.$store.state.content.items},article:function(){return this.$store.state.content.selected.article},isMobile:function(){return this.$store.state.mobile}},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})},methods:{onScroll:function(t){if("undefined"!=typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}},toTop:function(){this.$vuetify.goTo("header",{duration:300,offset:0,easing:"easeInOutCubic"})},onResize:function(){this.$store.dispatch("set_mobile",window.innerWidth<600)}}}),c=r(101),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("v-app",{attrs:{dark:""}},[e("v-app-bar",{attrs:{fixed:"",app:"",flat:t.isMobile,"clipped-right":""}},[e("v-btn",{staticClass:"mr-1",attrs:{icon:"",nuxt:"",to:"/"}},[e("v-icon",[t._v("mdi-home")])],1),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.$vuetify.theme.dark=!t.$vuetify.theme.dark}}},[e("v-icon",[t._v("mdi-theme-light-dark")])],1),t._v(" "),e("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[e("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),n),[e("v-icon",[t._v("mdi-translate")])],1)]}}])},[t._v(" "),e("v-list",[t._l(t.avlLocales,(function(r,n){return e("v-list-item",{key:n,on:{click:function(e){return t.$i18n.setLocale(r.code)}}},[e("v-list-item-title",[t._v(t._s(r.name))])],1)})),t._v(" "),e("v-divider"),t._v(" "),e("v-list-item",{attrs:{href:t.params.github,target:"_blank"}},[e("v-list-item-title",[t._v(t._s(t.$t("helpTranslate")))])],1)],2)],1),t._v(" "),e("v-btn",{attrs:{icon:"",href:t.params.github,target:"_blank"}},[e("v-icon",[t._v("mdi-github")])],1)],1),t._v(" "),e("v-main",[e("v-container",{staticClass:"pb-12",attrs:{fluid:""}},[e("nuxt")],1)],1),t._v(" "),e("v-footer",{staticClass:"px-2",staticStyle:{"background-color":"var(--v-primary-base)","font-size":"12px","font-weight":"600"},attrs:{padless:"",app:"",fixed:"",height:"22px"}},[e("v-spacer"),t._v(" "),e("span",{staticStyle:{color:"#fff"}},[t._v("\n      "+t._s(t.$t("footer.copyright"))+"\n    ")]),t._v(" "),e("v-spacer")],1),t._v(" "),e("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.fab,expression:"fab"},{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],staticClass:"mb-5",staticStyle:{"z-index":"5"},attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"secondary"},on:{click:t.toTop}},[e("v-icon",[t._v("mdi-chevron-up")])],1)],1)}),[],!1,null,null,null);e.a=component.exports},315:function(t,e,r){r(316),t.exports=r(317)},354:function(t,e,r){"use strict";r.r(e);r(29);var n=r(63);e.default=function(t){var e=t.route,r=t.redirect;"fork-name"!==e.name||n.hardfork.enabled&&e.params.name===n.hardfork.name.toLowerCase()||r("/")}},364:function(t,e,r){"use strict";r(272)},365:function(t,e,r){var n=r(123)((function(i){return i[1]}));n.push([t.i,"h1[data-v-495dc2cf]{font-size:20px}",""]),n.locals={},t.exports=n},368:function(t,e,r){var content=r(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(124).default)("2a7347de",content,!0,{sourceMap:!1})},369:function(t,e,r){var n=r(123)((function(i){return i[1]}));n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap);"]),n.push([t.i,'::-webkit-scrollbar{height:6px;width:6px}::-webkit-scrollbar-track{background:var(--v-staticborders-base)!important;z-index:4!important}::-webkit-scrollbar-thumb{background:var(--v-primary-base)!important}.ff-scrollbar-fix{scrollbar-color:var(--v-primary-base) var(--v-staticborders-base);scrollbar-width:thin;transform:translateZ(0)}html{overflow-y:hidden!important;scrollbar-color:var(--v-primary-base) #2f2f2f;scrollbar-width:thin}.v-main__wrap{max-height:calc(100vh - 86px)!important;overflow-y:auto!important}a{-webkit-text-decoration:none!important;text-decoration:none!important}.v-application{font-family:"IBM Plex Mono",monospace!important}.nuxt-content>h2{margin-bottom:8px}.nuxt-content>ul{margin-bottom:20px;margin-top:20px}#color_bar{margin-bottom:10px!important}#map-svg{padding:5px!important}.w-100{width:100%}.mw-320{max-width:320px!important}.v-tabs-items{background:transparent!important}.bg-0{background-color:transparent!important}.no-tt{text-transform:none!important}.v-navigation-drawer__border:hover{background-color:var(--v-primary-base)!important}pre{word-wrap:normal;background-color:transparent;max-width:100%;overflow-x:auto;scrollbar-color:var(--v-primary-base) #2f2f2f;scrollbar-width:thin;transform:translateZ(0);white-space:pre}pre>code{background-color:transparent!important;font-family:"IBM Plex Mono",monospace!important}.v-application pre>code{padding:0!important;white-space:pre!important}.nuxt-content-highlight{position:relative}.filename{color:#fff;line-height:1;margin-right:1rem;margin-top:.75rem;position:absolute;right:0;top:0;z-index:2}pre[class*=language-]{font-family:"IBM Plex Mono",monospace!important}.nuxt-content-highlight{margin-bottom:20px;margin-top:20px}.nuxt-content-highlight>div.code-toolbar>div.toolbar>div.toolbar-item>button{border:1px solid #fff!important;border-radius:4px;bottom:0;color:#fff;font-family:"IBM Plex Mono",monospace!important;margin-bottom:.75rem;margin-right:1rem;padding:4px;position:absolute;right:0}.nuxt-content-highlight>.code-toolbar>div.toolbar>div.toolbar-item>button:hover{border:1px solid var(--v-primary-base)!important;color:var(--v-primary-base)}.code-toolbar{position:relative}.code-toolbar>div.toolbar{bottom:0;position:absolute;right:0}.static-toc-active{border-left:6px solid var(--v-primary-base);color:var(--v-primary-base)!important}.v-list-item--link:before{background-color:transparent!important}table{border-collapse:collapse;margin-bottom:10px;width:100%}.nuxt-content>h2{margin-top:50px}.mw-300{max-width:300px!important}.v-navigation-drawer__content .v-data-table__wrapper{overflow:inherit}.static-toc{border-left:6px solid var(--v-staticborders-base)!important}.bt-1{border-top:1px solid var(--v-staticborders-base)!important}.bb-1{border-bottom:1px solid var(--v-staticborders-base)!important}.nuxt-content>h1>a>span.header-link,.nuxt-content>h2>a>span.header-link,.nuxt-content>h3>a>span.header-link,.nuxt-content>h4>a>span.header-link,.nuxt-content>h5>a>span.header-link,.nuxt-content>h6>a>span.header-link{color:var(--v-staticborders-base)!important}.nuxt-content>h1>a>span.header-link:hover,.nuxt-content>h2>a>span.header-link:hover,.nuxt-content>h3>a>span.header-link:hover,.nuxt-content>h4>a>span.header-link:hover,.nuxt-content>h5>a>span.header-link:hover,.nuxt-content>h6>a>span.header-link:hover{color:var(--v-primary-base)!important}.nuxt-content>table>tbody>tr>td,.nuxt-content>table>thead>tr>th{border:1px solid var(--v-staticborders-base)!important;padding:6px!important}.nuxt-content>table>tbody>tr:nth-child(odd){background:var(--v-zebrastripes-base)!important}.v-sheet.v-app-bar.v-toolbar{box-shadow:inset 0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)!important}.node-overview .theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr>td{word-wrap:anywhere}.theme--light.v-toolbar{background-color:#f5f5f5!important}.theme--dark.v-navigation-drawer{background-color:#121212!important}.theme--dark>div.v-card__text>div.nuxt-content-container>.nuxt-content-editor{color:#fff!important}',""]),n.locals={},t.exports=n},374:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"mutations",(function(){return c})),r.d(e,"actions",(function(){return l}));var n=r(302),o=function(){return{static:n.a,mobile:!1}},c={SET_MOBILE:function(t,e){t.mobile=e}},l={set_mobile:function(t,e){var r=t.commit;e!==t.state.mobile&&r("SET_MOBILE",e)}}},375:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return h})),r.d(e,"mutations",(function(){return m})),r.d(e,"actions",(function(){return v}));r(43),r(22),r(37),r(29),r(46),r(33),r(28),r(42),r(44),r(34);var n=r(19),o=r(14),c=(r(41),r(26),r(65),r(303)),l=r.n(c);function f(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var h=function(){return{groups:null,items:null,selected:{article:null,prev:null,next:null,fallback:!1}}},m={SET_CONTENT:function(t,content){t.groups=content.groups,t.items=content.items},SET_SELECTED:function(t,e){t.selected=e}},v={fetch:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var n,o,g,c,d,h,i,m,v,y,x,k,_,w;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.prev=1,o=e.$i18n.locale,r.next=5,e.$content(o,{deep:!0}).where({type:"group"}).sortBy("index").fetch();case 5:g=r.sent,c={},d=f(g);try{for(d.s();!(h=d.n()).done;)i=h.value,m=i.dir.substr(1).replace("/","-"),i.items=[],c[m]=i}catch(t){d.e(t)}finally{d.f()}return r.next=11,e.$content(o,{deep:!0}).where({type:{$ne:"group"}}).sortBy("createdAt").fetch();case 11:v=r.sent,y=[],x=f(v);try{for(x.s();!(k=x.n()).done;)(_=k.value).type||(_.dir!=="/"+o?(w=_.dir.substr(1).replace("/","-"),_.group=w,c[w]&&c[w].items.push(_)):y.push(_))}catch(t){x.e(t)}finally{x.f()}n("SET_CONTENT",{groups:c,items:y}),r.next=21;break;case 18:r.prev=18,r.t0=r.catch(1),l.a.log(r.t0);case 21:case"end":return r.stop()}}),r,null,[[1,18]])})))()},select:function(t,e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var c,path,l,f,d,article,h,m,v,y;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return c=t.commit,path=e.path,l=e.fallback,o.next=5,r.$content({deep:!0}).where({path:path}).fetch();case 5:if(f=o.sent,d=Object(n.a)(f,1),!(article=d[0])){o.next=19;break}return o.next=11,r.$content(r.$i18n.locale,{deep:!0}).where({type:{$ne:"group"}}).only(["title","slug","path"]).sortBy("createdAt","asc").surround(article.slug).fetch();case 11:return h=o.sent,m=Object(n.a)(h,2),v=m[0],y=m[1],c("SET_SELECTED",{article:article,prev:v,next:y,fallback:l}),o.abrupt("return",article);case 19:return o.abrupt("return",null);case 20:case"end":return o.stop()}}),o)})))()}}},376:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"mutations",(function(){return o})),r.d(e,"actions",(function(){return c}));var n=function(){return{charts:!0}},o={SET_CHARTS:function(t,e){t.charts=e}},c={toggleCharts:function(t){(0,t.commit)("SET_CHARTS",!t.state.charts)},set_charts:function(t,e){(0,t.commit)("SET_CHARTS",e)}}},377:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return v})),r.d(e,"mutations",(function(){return y})),r.d(e,"actions",(function(){return x}));r(36),r(28),r(40),r(53),r(45),r(54);var n=r(3),o=r(14),c=(r(41),r(121),r(56),r(22),r(70)),l=r.n(c),f=r(63),d=r(177);function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v=function(){return{raw:{},latestBlockNumber:0,now:new Date,intervalTimer:null}},y={SET_LIVE_STATS:function(t,e){t.raw=e},SET_LATEST_BLOCK_NUMBER:function(t,e){t.latestBlockNumber=e},NOW:function(t){t.now=new Date},SET_INTERVAL_TIMER:function(t,e){var r=this;t.intervalTimer=setInterval((function(){e&&e(),r.dispatch("liveStats/set_live_stats")}),1e3*f.hardfork.secondsPerBlock)},CLEAR_INTERVAL_TIMER:function(t){t.intervalTimer&&(clearInterval(t.intervalTimer),t.intervalTimer=null)}},x={set_live_stats:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,data,o,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,l.a.get(f.apiEndpoints.liveStats);case 3:n=e.sent,data=n.data,o=k(data),c=o.liveStats,d=o.latestBlockNumber,r("SET_LATEST_BLOCK_NUMBER",d),r("SET_LIVE_STATS",c);case 8:case"end":return e.stop()}}),e)})))()},auto_polling:function(t){var e=t.commit;t.state.intervalTimer||e("SET_INTERVAL_TIMER",(function(){return e("NOW")}))},clear_auto_polling:function(t){(0,t.commit)("CLEAR_INTERVAL_TIMER")}},k=function(t){var e=(t=t.map((function(t){return m(m({},t),{},{blockNumber:parseInt(t.blockNumber,16)},Object(d.a)(t.clientVersion))}))).reduce((function(t,e){return e.blockNumber>t&&(t=e.blockNumber),t}),0);return{liveStats:t,latestBlockNumber:e}}},396:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return y})),r.d(e,"mutations",(function(){return x})),r.d(e,"actions",(function(){return k}));r(43),r(22),r(37),r(46),r(33),r(26),r(28),r(42),r(44),r(34);var n=r(19),o=r(14),c=(r(41),r(224),r(36),r(397),r(282),r(138),r(29),r(70)),l=r.n(c),f=r(183),d=r(63),h=r(177);function m(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var y=function(){return{raw:[],clients:{},clientsForkAdoption:{},forks:{},countries:{},protocols:{eth:{},snap:{}},updated:!1}},x={SET_NODES:function(t,e){t.raw=e},SET_CLIENTS:function(t,e){t.clients={table:e,chart:{series:Object.values(e),labels:Object.keys(e)}}},SET_CLIENTS_FORK_ADOPTION:function(t,e){t.clientsForkAdoption={table:e,chart:{series:Object.values(e.Total),labels:Object.keys(e.Total)}}},SET_FORKIDS:function(t,e){t.forks.current={table:e.current,chart:{series:Object.values(e.current),labels:Object.keys(e.current)}},t.forks.next={table:e.next,chart:{series:Object.values(e.next),labels:Object.keys(e.next)}}},SET_PROTOCOLS:function(t,e){t.protocols={eth:{table:e.eth,chart:{series:Object.values(e.eth),labels:Object.keys(e.eth)}},snap:{table:e.snap,chart:{series:Object.values(e.snap),labels:Object.keys(e.snap)}}},t.updated=!0},SET_COUNTRIES:function(t,e){t.countries=e}},k={set_nodes:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,data,c,f,d,h,m,v,y,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.commit,t.state.updated){e.next=14;break}return e.next=4,l.a.get("https://peers.etccore.in/v5/nodes.json");case 4:o=e.sent,data=o.data,c=_(data),f=c.nodes,d=c.clients,h=c.clientsForkAdoption,m=c.forks,v=c.protocols,y=c.countries,x=Object.fromEntries(Object.entries(d).sort((function(t,e){var a=Object(n.a)(t,2)[1];return Object(n.a)(e,2)[1]-a}))),r("SET_NODES",f),r("SET_CLIENTS",x),r("SET_CLIENTS_FORK_ADOPTION",h),r("SET_FORKIDS",m),r("SET_PROTOCOLS",v),r("SET_COUNTRIES",y);case 14:case"end":return e.stop()}}),e)})))()}},_=function(t){var e,r=E(),o=Object(n.a)(r,2),c=o[0],l=o[1],f={},v={Total:{Ready:0,"Not Ready":0}},y={current:{},next:{}},x={eth:{},snap:{}},k={},_=[],T=m(t);try{for(T.s();!(e=T.n()).done;){var S=e.value;if("handshake"!==S.protocols.eth&&S.protocols.eth.version>0){var R=Object(h.a)(S.name);if(S.client=R,f[S.client.nameWithIdentity]=f[S.client.nameWithIdentity]?f[S.client.nameWithIdentity]+1:1,S.protocols.eth.forkId){S.protocols.eth.forkId.tag=w(S.protocols.eth.forkId.hash),S.protocols.eth.forkId.nextTag=O(S.protocols.eth.forkId.next),y.current[S.protocols.eth.forkId.tag]=y.current[S.protocols.eth.forkId.tag]?y.current[S.protocols.eth.forkId.tag]+1:1,y.next[S.protocols.eth.forkId.nextTag]=y.next[S.protocols.eth.forkId.nextTag]?y.next[S.protocols.eth.forkId.nextTag]+1:1;var j=!1,I="Not Ready";(S.protocols.eth.forkId.next===c||S.protocols.eth.forkId.tag===l&&0===S.protocols.eth.forkId.next)&&(j=!0,I="Ready"),v.Total[I]+=1,d.hardfork.enabled&&(v[S.client.name]||(v[S.client.name]={Ready:0,"Not Ready":0}),v[S.client.name][j?"Ready":"Not Ready"]+=1)}var A="v"+S.protocols.eth.version;if(x.eth[A]=x.eth[A]?x.eth[A]+1:1,S.protocols.snap){var s="v"+S.protocols.snap.version;x.snap[s]=x.snap[s]?x.snap[s]+1:1}else x.snap["-"]=x.snap["-"]?x.snap["-"]+1:1;k[S.ip_info.country]=k[S.ip_info.country]?k[S.ip_info.country]+1:1,_.push(S)}}}catch(t){T.e(t)}finally{T.f()}var N=v.Total;return delete v.Total,v.Total=N,{nodes:_,clients:f,clientsForkAdoption:v,forks:y,protocols:x,countries:k}},w=function(t){return f.id[t]||t},O=function(t){return f.block[t]||t},E=function(){return Object.entries(f.block).pop()}},401:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return m})),r.d(e,"mutations",(function(){return v})),r.d(e,"actions",(function(){return y}));var n=r(19),o=r(14),c=(r(41),r(224),r(36),r(22),r(138),r(43),r(37),r(29),r(46),r(33),r(26),r(28),r(42),r(44),r(34),r(70)),l=r.n(c),f=r(63);function d(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var m=function(){return{raw:{},upgradedOperators:{},updated:!1}},v={SET_OPERATORS:function(t,e){t.raw=e},SET_UPGRADED_OPERATORS:function(t,e){t.upgradedOperators={table:e,chart:{series:Object.values(e),labels:Object.keys(e)},total:Object.values(e).reduce((function(a,b){return a+b}),0)}}},y={set_operators:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,data,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.commit,t.state.updated){e.next=9;break}return e.next=4,l.a.get(f.apiEndpoints.operators);case 4:n=e.sent,data=n.data,o=x(data),c=o.upgradedOperators,r("SET_OPERATORS",data),r("SET_UPGRADED_OPERATORS",c);case 9:case"end":return e.stop()}}),e)})))()}},x=function(t){for(var e={Ready:0,"Not Ready":0},r=0,o=Object.entries(t);r<o.length;r++){var c,l=d(Object(n.a)(o[r],2)[1]);try{for(l.s();!(c=l.n()).done;){1===c.value.status?e.Ready++:e["Not Ready"]++}}catch(t){l.e(t)}finally{l.f()}}return{upgradedOperators:e}}},402:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o}));var n=r(63),o=function(){return n}},444:function(t,e){function r(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}r.keys=function(){return[]},r.resolve=r,t.exports=r,r.id=444},63:function(t){t.exports=JSON.parse('{"favicon":"favicon.png","logo":{"dark":"octano-dark.svg","light":"octano-light.svg"},"url":"https://etcnodes.org","github":"https://github.com/etclabscore/nodes-interface","theme":{"dark":true,"themes":{"dark":{"primary":"#00ccff","secondary":"#ff00cb","accent":"#f30","error":"#FF5252","info":"#2196F3","success":"#4CAF50","warning":"#FFC107","staticborders":"#2E2E2E","zebrastripes":"#1E1E1E"},"light":{"primary":"#00ccff","secondary":"#ff00cb","accent":"#f30","error":"#FF5252","info":"#2196F3","success":"#4CAF50","warning":"#FFC107","staticborders":"#E1E1E1","zebrastripes":"#F1F1F1"}},"options":{"customProperties":true}},"i18n":{"default":"en","locales":[{"code":"en","name":"English"},{"code":"es","name":"Español"},{"code":"ru","name":"Pусский"},{"code":"zh","name":"中文"}]},"router":{"base":"/","middleware":"forkPageActivation"},"hardfork":{"enabled":true,"blockNumber":19000000,"name":"Spiral","ecip":"https: //ecips.ethereumclassic.org/ECIPs/ecip-1109","secondsPerBlock":13.5},"apiEndpoints":{"operators":"https://api.etcnodes.org/operators","liveStats":"https://api.etcnodes.org/stats"}}')},94:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(364),r(101)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("v-app",{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"495dc2cf",null);e.a=component.exports}},[[315,19,3,20]]]);