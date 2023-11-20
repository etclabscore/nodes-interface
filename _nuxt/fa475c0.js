(window.webpackJsonp=window.webpackJsonp||[]).push([[17,8,9,10,11,12,13,16],{447:function(t,e,r){"use strict";r.r(e);var n=r(15),o=(r(224),r(64),r(3));r(309),r(448),r(36),r(22),r(28),r(40),r(53),r(45),r(54);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d={name:"TableChartCard",props:{icon:{type:String,default:function(){return"mdi-console"}},title:{type:String,default:function(){return""}},table:{type:Object,required:!0},labels:{type:Array,default:function(){return[]}},series:{type:Array,default:function(){return[]}},total:{type:Number,required:!0},to:{type:String,default:function(){return null}},noLabelText:{type:String,default:function(){return"-"}},colors:{type:Array,default:function(){return["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"]}}},computed:{theme:function(){return this.$vuetify.theme.dark?"dark":"light"},isMobile:function(){return this.$store.state.mobile},locale:function(){return this.$i18n.locale},options:function(){var t=this;return{chart:{id:this.title.toLowerCase()+"-chart",width:"100%",type:"pie"},plotOptions:{pie:{dataLabels:{offset:-5}}},dataLabels:{formatter:function(e,r){var n=r.w.globals.labels[r.seriesIndex];return"-"===n&&(n=t.noLabelText),[n,e.toFixed(1)+"%"]}},legend:{show:!1},colors:this.colors}},inlineColsNumber:function(){var t=Object.values(this.table);return"object"===Object(n.a)(t[0])?Object.values(t[0]).length:1},inlineColNames:function(){var t=Object.values(this.table);return"object"===Object(n.a)(t[0])?Object.keys(t[0]):[]}},methods:{percent:function(t,e){return(t/e*100).toFixed(1)},rowTotal:function(t){return t.reduce((function(a,b){return a+b}),0)},getChartOptions:function(){return c(c({},this.options),{},{labels:this.labels})}}},f=r(101),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("v-card",{attrs:{tile:""}},[e("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[e("div",{class:{"w-100":t.isMobile,"w-auto":!t.isMobile}},[e("v-card-title",[e("v-icon",{staticClass:"mr-1"},[t._v(t._s(t.icon))]),t._v("\n        "+t._s(t.title)+"\n      ")],1),t._v(" "),e("v-simple-table",{staticStyle:{width:"100%"},scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v(t._s(t.$t("home.totalNodes")))]),t._v(" "),e("th",{staticClass:"text-right",attrs:{colspan:t.inlineColsNumber}},[t._v("\n                "+t._s(t.total)+" (100%)\n              ")])]),t._v(" "),t.inlineColNames.length>0?[e("tr",[e("th",{staticClass:"text-left"}),t._v(" "),t._l(t.inlineColNames,(function(r){return e("th",{key:r,staticClass:"text-right"},[t._v("\n                  "+t._s(r)+"\n                ")])}))],2)]:t._e()],2),t._v(" "),e("tbody",t._l(t.table,(function(r,o){return e("tr",{key:o},[t.to?[e("td",{staticClass:"text-left"},[e("nuxt-link",{attrs:{to:"/"+t.to+"/"+o}},[t._v("\n                    "+t._s(o)+"\n                  ")])],1)]:[e("td",{staticClass:"text-left"},[t._v("\n                  "+t._s("-"===o?t.noLabelText:o)+"\n                ")])],t._v(" "),"object"===Object(n.a)(r)?t._l(Object.values(r),(function(n){return e("td",{key:"".concat(o,"/").concat(n),staticClass:"text-right"},[t._v("\n                  "+t._s(n)+" ("+t._s(t.percent(n,t.rowTotal(Object.values(r))))+"%)\n                ")])})):[e("td",{staticClass:"text-right"},[t._v("\n                  "+t._s(r)+" ("+t._s(t.percent(r,t.total))+"%)\n                ")])]],2)})),0)]},proxy:!0}])})],1),t._v(" "),t.isMobile?t._e():e("apexchart",{staticClass:"my-3",attrs:{width:"256",type:"pie",options:t.getChartOptions(),series:t.series}})],1)])}),[],!1,null,null,null);e.default=component.exports},448:function(t,e,r){"use strict";var n=r(12),o=r(18),l=r(102),c=r(311),d=r(310),f=r(16),v=RangeError,m=String,h=Math.floor,_=o(d),k=o("".slice),x=o(1..toFixed),y=function(t,e,r){return 0===e?r:e%2==1?y(t,e-1,r*t):y(t*t,e/2,r)},S=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=h(n/1e7)},C=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=h(r/t),r=r%t*1e7},w=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=m(data[t]);s=""===s?e:s+_("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:f((function(){return"0.000"!==x(8e-5,3)||"1"!==x(.9,0)||"1.25"!==x(1.255,2)||"1000000000000000128"!==x(0xde0b6b3a7640080,0)}))||!f((function(){x({})}))},{toFixed:function(t){var e,r,n,o,d=c(this),f=l(t),data=[0,0,0,0,0,0],h="",x="0";if(f<0||f>20)throw new v("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return m(d);if(d<0&&(h="-",d=-d),d>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(d*y(2,69,1))-69)<0?d*y(2,-e,1):d/y(2,e,1),r*=4503599627370496,(e=52-e)>0){for(S(data,0,r),n=f;n>=7;)S(data,1e7,0),n-=7;for(S(data,y(10,n,1),0),n=e-1;n>=23;)C(data,1<<23),n-=23;C(data,1<<n),S(data,1,1),C(data,2),x=w(data)}else S(data,0,r),S(data,1<<-e,0),x=w(data)+_("0",f);return x=f>0?h+((o=x.length)<=f?"0."+_("0",f-o)+x:k(x,0,o-f)+"."+k(x,o-f)):h+x}})},449:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,default:function(){return""}},tooltip:{type:String,default:function(){return""}},threeLine:{type:Boolean,default:function(){return!1}}}},o=r(101),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("v-list-item",{staticStyle:{"border-bottom":"1px solid #272727"}},[e("v-list-item-action",[e("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[e("v-icon",t._g(t._b({},"v-icon",o,!1),n),[t._v("mdi-information-outline")])]}}])},[t._v(" "),e("span",[t._v("\n        "+t._s(t.tooltip)+"\n      ")])])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(t.title))]),t._v(" "),e("v-list-item-subtitle",[t._t("subtitle")],2),t._v(" "),t.threeLine?e("v-list-item-subtitle",[t._t("subtitle2")],2):t._e()],1),t._v(" "),e("v-list-item-action",[e("v-list-item-action-text",[t._t("action")],2),t._v(" "),e("v-list-item-action-text",[t._t("action2")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports},453:function(t,e,r){"use strict";r.r(e);var n={name:"ForkClientUpgraded",components:{TableChartCard:r(447).default},props:{nodes:{type:Object,required:!0}},computed:{totalNodes:function(){return this.nodes.raw.length}}},o=r(101),component=Object(o.a)(n,(function(){var t=this;return(0,t._self._c)("table-chart-card",{staticClass:"mr-1 mb-1",staticStyle:{"margin-left":"6px"},attrs:{title:t.$t("upcomingForkCard.title"),table:t.nodes.clientsForkAdoption.table,labels:t.nodes.clientsForkAdoption.chart.labels,series:t.nodes.clientsForkAdoption.chart.series,total:t.totalNodes,"no-label-text":t.$t("nodes.none"),colors:["#00E396","#FD6A6A"],icon:"mdi-directions-fork"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TableChartCard:r(447).default})},454:function(t,e,r){"use strict";r.r(e);r(29),r(309);var n={name:"ForkCountdownCard",props:{latestBlockNumber:{type:Number,required:!0}},computed:{nextFork:function(){return this.$store.state.params.hardfork},secondsPerBlock:function(){return this.nextFork.secondsPerBlock},isForked:function(){return this.latestBlockNumber>=this.nextFork.blockNumber},numberOfBlocksTillHardFork:function(){return this.nextFork.blockNumber-this.latestBlockNumber},numberOfBlocksAfterHardFork:function(){return this.latestBlockNumber-this.nextFork.blockNumber},forkAt:function(){var t=(this.nextFork.blockNumber-this.latestBlockNumber)*this.secondsPerBlock;return this.$dateFns.add(new Date,{seconds:t})},forkAtUTC:function(){return this.$dateFns.addMinutes(this.forkAt,this.forkAt.getTimezoneOffset())}}},o=r(101),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("v-sheet",{staticClass:"pa-5 mx-1 mr-1 mb-1"},[e("h1",{staticClass:"mb-3"},[t._v("ETC "+t._s(t.nextFork.name)+" Upgrade Countdown")]),t._v(" "),e("p",[t._v("\n    The "),e("a",{attrs:{href:t.nextFork.ecip}},[t._v(t._s(t.nextFork.name)+" Hardfork")]),t._v("\n    "+t._s(t.isForked?"occurred":"will occur")+" at block\n    "),e("strong",[t._v(t._s(t.nextFork.blockNumber))]),t._v(".\n  ")]),t._v(" "),0===t.latestBlockNumber?e("v-skeleton-loader",{attrs:{type:"list-item-two-line"}}):t.isForked?e("p",[t._v("\n    🎉 🎉 Booyah! "+t._s(t.numberOfBlocksAfterHardFork)+" blocks and counting in the\n    "+t._s(t.nextFork.name)+" era. 🎉 🎉\n  ")]):e("div",[e("p",[t._v("\n      The "),e("strong",[t._v("current block number")]),t._v(" is\n      "),e("strong",[e("a",{attrs:{href:"https://etc.blockscout.com/block/".concat(t.latestBlockNumber,"?tab=txs")}},[t._v(t._s(t.latestBlockNumber))])]),t._v(", leaving "),e("strong",[t._v(t._s(t.numberOfBlocksTillHardFork))]),t._v(" blocks.\n    ")]),t._v(" "),e("p",[t._v("\n      Assuming a "),e("strong",[t._v(t._s(t.secondsPerBlock))]),t._v(" second block interval,\n      the fork is estimated to be\n      "),e("strong",[t._v(t._s(t.$dateFns.formatDistance(t.forkAt,new Date,{addSuffix:!0}))+"\n        from now")]),t._v(", at:\n    ")]),t._v(" "),e("ul",{staticClass:"mb-3"},[e("li",[t._v("\n        Local ("+t._s(t.$dateFns.format(t.forkAt,"XXXXX"))+"):\n        "+t._s(t.$dateFns.format(t.forkAt,"iiii, PPPp"))+"\n      ")]),t._v(" "),e("li",[t._v("Universal (UTC): "+t._s(t.$dateFns.format(t.forkAtUTC,"iiii, PPPp")))])]),t._v(" "),e("v-divider"),t._v(" "),e("p",{staticClass:"mt-3"},[t._v("\n      To prepare for this fork, please upgrade Ethereum Classic client\n      programs to equal to or better than the following versions.\n    ")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/etclabscore/core-geth/releases"}},[t._v("core-geth v1.12.17")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/hyperledger/besu/releases"}},[t._v("besu v21.10.8")])])]),t._v(" "),e("p",[t._v("\n      You can also better monitor the fork transition at the\n      "),e("a",{attrs:{href:"https://fork-monitor.etc-network.info/",target:"_blank"}},[t._v("Fork Monitor")]),t._v(".\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports},455:function(t,e,r){"use strict";r.r(e);r(29),r(121),r(26),r(65);var n=r(171),o=r(306),l=r(476),c=r(477),d=r(478),f=r(449),v=r(60),m={name:"LiveStatsTable",components:{ExtendedListItem:f.default},props:{nodes:{type:Array,required:!0},lastUpdated:{type:Date,required:!0},title:{type:String,default:function(){return""}},breadcrumbs:{type:Array,default:function(){return[]}}},data:function(){return{updateInterval:null,nextUpdateInSeconds:0,expanded:[],nf:new Intl.NumberFormat(this.locale,{}),locales:{en:o.a,es:l.a,ru:c.a,zh:d.a}}},computed:{isMobile:function(){return this.$store.state.mobile},locale:function(){return this.$i18n.locale},chartHeaders:function(){return[{text:this.$t("liveStats.client"),align:"start",sortable:!1,value:"name"},{text:this.$t("liveStats.version"),align:"end",sortable:!0,value:"release"},{text:this.$t("liveStats.status"),align:"center",sortable:!0,value:"syncing"},{text:this.$t("liveStats.blockNumber"),align:"end",sortable:!0,value:"blockNumber"},{text:this.$t("liveStats.blockHash"),sortable:!0,value:"blockHash"},{text:this.$t("liveStats.totalDifficulty"),sortable:!0,align:"end",value:"totalDifficulty"},{text:this.$t("liveStats.lastBlock"),align:"end",sortable:!0,value:"timestamp"}]}},created:function(){var t=this;this.updateInterval=setInterval((function(){t.nextUpdateInSeconds=Math.round(v.apiEndpoints.liveStatsFetchInterval-(Date.now()-t.lastUpdated.getTime())/1e3)}),1e3)},destroyed:function(){clearInterval(this.updateInterval)},methods:{formatHash:function(t,e,r){return t.substr(0,e)+"..."+t.substr(t.length-r)},formatRelease:function(t){return t.split("-")[0].replace("v","")},formatLastSeen:function(t){return Object(n.a)(new Date(1e3*t),Date.now(),{addSuffix:!0,includeSeconds:!0,locale:this.locales[this.locale]})}}},h=r(101),component=Object(h.a)(m,(function(){var t=this,e=t._self._c;return e("v-card",{staticClass:"mx-1",attrs:{tile:""}},[e("v-card-title",[t.isMobile?t._e():[e("v-icon",{staticClass:"mr-2"},[t._v("mdi-server-network")]),t._v("\n      "+t._s(t.title)+"\n    ")],t._v(" "),e("v-spacer"),t._v(" "),e("small",{staticStyle:{"font-size":"10px"}},[t._v("\n      Next update\n      "+t._s(t.nextUpdateInSeconds?"in ".concat(t.nextUpdateInSeconds,"s"):"now")+"\n    ")])],2),t._v(" "),e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.chartHeaders,items:t.nodes,expanded:t.expanded,"item-key":"id","show-expand":!t.isMobile,"hide-default-footer":!0,"items-per-page":-1,"loading-text":t.$t("liveStats.loading"),"no-data-text":t.$t("liveStats.noData"),"no-results-text":t.$t("liveStats.noResults"),"disable-pagination":!0},on:{"update:expanded":function(e){t.expanded=e}},scopedSlots:t._u([{key:"expanded-item",fn:function(r){var n=r.headers,o=r.item;return[e("td",{attrs:{colspan:n.length}},[e("v-list",{attrs:{dense:""}},[e("extended-list-item",{attrs:{title:t.$t("liveStats.client")},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v("\n              "+t._s(o.name)+"\n            ")]},proxy:!0}],null,!0)}),t._v(" "),e("extended-list-item",{attrs:{title:t.$t("liveStats.version")},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v("\n              "+t._s(t.formatRelease(o.release))+"\n            ")]},proxy:!0}],null,!0)}),t._v(" "),e("extended-list-item",{attrs:{title:t.$t("liveStats.status")},scopedSlots:t._u([{key:"subtitle",fn:function(){return[o.syncing?e("v-chip",{staticClass:"ma-2",attrs:{color:"red","text-color":"white","x-small":"",outlined:""}},[t._v("\n                Syncing\n              ")]):e("v-chip",{staticClass:"ma-2",attrs:{color:"green","text-color":"white","x-small":"",outlined:""}},[t._v("\n                In sync\n              ")])]},proxy:!0}],null,!0)}),t._v(" "),e("extended-list-item",{attrs:{title:t.$t("liveStats.blockNumber")},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v("\n              "+t._s(o.blockNumber)+"\n            ")]},proxy:!0}],null,!0)}),t._v(" "),e("extended-list-item",{attrs:{title:t.$t("liveStats.blockHash")},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v("\n              "+t._s(t.formatHash(o.blockHash,10,8))+"\n            ")]},proxy:!0}],null,!0)}),t._v(" "),e("extended-list-item",{attrs:{title:t.$t("liveStats.totalDifficulty")},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v("\n              "+t._s(t.nf.format(o.totalDifficulty))+"\n            ")]},proxy:!0}],null,!0)}),t._v(" "),e("extended-list-item",{attrs:{title:t.$t("liveStats.lastBlock")},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v("\n              "+t._s(t.formatLastSeen(o.timestamp))+"\n            ")]},proxy:!0}],null,!0)})],1)],1)]}},{key:"item.name",fn:function(e){var r=e.item;return[t._v("\n      "+t._s("-"===r.name?t.$t("nodes.unknown"):r.name)+"\n    ")]}},{key:"item.release",fn:function(e){var r=e.item;return[t._v("\n      "+t._s(t.formatRelease(r.release))+"\n    ")]}},{key:"item.syncing",fn:function(r){return[r.item.syncing?e("v-chip",{staticClass:"ma-2",attrs:{color:"red","text-color":"white","x-small":"",outlined:""}},[t._v("\n        Syncing\n      ")]):e("v-chip",{staticClass:"ma-2",attrs:{color:"green","text-color":"white","x-small":"",outlined:""}},[t._v("\n        In sync\n      ")])]}},{key:"item.blockNumber",fn:function(e){var r=e.item;return[t._v("\n      "+t._s(r.blockNumber)+"\n    ")]}},{key:"item.blockHash",fn:function(e){var r=e.item;return[t._v("\n      "+t._s(t.formatHash(r.blockHash,10,8))+"\n    ")]}},{key:"item.totalDifficulty",fn:function(e){var r=e.item;return[t._v("\n      "+t._s(t.nf.format(r.totalDifficulty))+"\n    ")]}},{key:"item.timestamp",fn:function(e){var r=e.item;return[t._v("\n      "+t._s(t.formatLastSeen(r.timestamp))+"\n    ")]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports},456:function(t,e,r){"use strict";r.r(e);r(26),r(185);var n=r(306),o=r(476),l=r(477),c=r(478),d={name:"ServiceList",props:{title:{type:String,required:!0},operators:{type:Array,required:!0}},data:function(){return{search:null,nf:new Intl.NumberFormat(this.locale,{}),locales:{en:n.a,es:o.a,ru:l.a,zh:c.a}}},computed:{isMobile:function(){return this.$store.state.mobile},locale:function(){return this.$i18n.locale},chartHeaders:function(){return[{text:this.$t("operators.service"),align:"start",sortable:!1,value:"service"},{text:this.$t("operators.status"),align:"end",sortable:!0,value:"status"}]}}},f=r(101),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("v-card",{attrs:{tile:""}},[e("v-card-title",[t.isMobile?t._e():[e("v-icon",{staticClass:"mr-2",attrs:{"aria-label":t.title,role:"img","aria-hidden":"false"}},[t._v("mdi-account")]),t._v("\n      "+t._s(t.title)+"\n    ")],t._v(" "),e("v-spacer"),t._v(" "),e("v-text-field",{class:{"pt-0":!0,"w-100":t.isMobile},attrs:{"append-icon":"mdi-magnify",label:t.$t("nodes.search"),"single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],2),t._v(" "),e("v-data-table",{staticClass:"elevation-1",attrs:{search:t.search,headers:t.chartHeaders,items:t.operators,"hide-default-footer":t.isMobile,"items-per-page":8,"loading-text":t.$t("nodes.loading"),"no-data-text":t.$t("nodes.noData"),"no-results-text":t.$t("nodes.noResults"),"disable-pagination":t.isMobile},scopedSlots:t._u([{key:"item.status",fn:function(r){return[1===r.item.status?e("v-chip",{staticClass:"ma-2",attrs:{color:"green","text-color":"white","x-small":"",outlined:""}},[t._v("\n        Ready\n      ")]):e("v-chip",{staticClass:"ma-2",attrs:{color:"indigo","text-color":"white","x-small":"",outlined:""}},[t._v("\n        No information\n      ")])]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports},457:function(t,e,r){"use strict";r.r(e);var n={name:"NodeOperatorsUpgradedCard",components:{TableChartCard:r(447).default},props:{operators:{type:Object,required:!0}}},o=r(101),component=Object(o.a)(n,(function(){var t=this;return(0,t._self._c)("table-chart-card",{staticClass:"mr-1 mb-1",staticStyle:{"margin-left":"6px"},attrs:{title:t.$t("nodeOperatorsUpgradedCard.title"),table:t.operators.upgradedOperators.table,labels:t.operators.upgradedOperators.chart.labels,series:t.operators.upgradedOperators.chart.series,total:t.operators.upgradedOperators.total,"no-label-text":t.$t("nodes.none"),colors:["#00E396","#FD6A6A"],icon:"mdi-directions-fork"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TableChartCard:r(447).default})},480:function(t,e,r){"use strict";r.r(e);var n=r(14),o=(r(41),r(22),r(33),r(34),r(453)),l=r(454),c=r(455),d=r(456),f=r(457),v={name:"SpiralForkStatus",components:{NodeOperatorsTable:d.default,NodeOperatorsUpgradedCard:f.default,LiveStatsTable:c.default,ForkCountdownCard:l.default,ForkClientUpgraded:o.default},data:function(){return{tab:null}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.$store.dispatch("nodes/set_nodes"),t.$store.dispatch("operators/set_operators"),t.$store.dispatch("liveStats/set_live_stats")]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},computed:{nodes:function(){return this.$store.state.nodes},operators:function(){return this.$store.state.operators},liveStats:function(){return this.$store.state.liveStats},isMobile:function(){return this.$store.state.mobile},darkmode:function(){return this.$vuetify.theme.dark},breadcrumbs:function(){return[{text:this.$t("operators.breadcrumb"),disabled:!0,to:"/fork/spiral"}]}},mounted:function(){this.$store.dispatch("liveStats/auto_polling")},destroyed:function(){this.$store.dispatch("liveStats/clear_auto_polling")}},m=r(101),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return t.$fetchState.pending?t._e():e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("ForkCountdownCard",{attrs:{"latest-block-number":t.liveStats.latestBlockNumber}})],1)],1),t._v(" "),e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("LiveStatsTable",{attrs:{nodes:t.liveStats.raw,"last-updated":t.liveStats.now,title:t.$t("liveStats.title")}})],1)],1),t._v(" "),e("v-row",[e("v-col",{attrs:{cols:"12",md:"6"}},[e("ForkClientUpgraded",{attrs:{nodes:t.nodes}})],1),t._v(" "),e("v-col",{attrs:{cols:"12",md:"6"}},[e("NodeOperatorsUpgradedCard",{attrs:{operators:t.operators}})],1)],1),t._v(" "),e("v-row",t._l(t.operators.raw,(function(t,r){return e("v-col",{key:r,attrs:{cols:"12",md:"6"}},[e("NodeOperatorsTable",{attrs:{operators:t,title:r}})],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ForkCountdownCard:r(454).default,LiveStatsTable:r(455).default,ForkClientUpgraded:r(453).default,NodeOperatorsUpgradedCard:r(457).default,NodeOperatorsTable:r(456).default})}}]);