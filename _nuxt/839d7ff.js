(window.webpackJsonp=window.webpackJsonp||[]).push([[11,10],{452:function(t,e,n){"use strict";n.r(e);var l={props:{title:{type:String,default:function(){return""}},tooltip:{type:String,default:function(){return""}},threeLine:{type:Boolean,default:function(){return!1}}}},o=n(101),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("v-list-item",{staticStyle:{"border-bottom":"1px solid #272727"}},[t.tooltip?e("v-list-item-action",[e("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var l=n.on,o=n.attrs;return[e("v-icon",t._g(t._b({},"v-icon",o,!1),l),[t._v("mdi-information-outline")])]}}],null,!1,4218361139)},[t._v(" "),e("span",[t._v("\n        "+t._s(t.tooltip)+"\n      ")])])],1):t._e(),t._v(" "),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(t.title))]),t._v(" "),e("v-list-item-subtitle",[t._t("subtitle")],2),t._v(" "),t.threeLine?e("v-list-item-subtitle",[t._t("subtitle2")],2):t._e()],1),t._v(" "),e("v-list-item-action",[e("v-list-item-action-text",[t._t("action")],2),t._v(" "),e("v-list-item-action-text",[t._t("action2")],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports},458:function(t,e,n){"use strict";n.r(e);n(29),n(123),n(26),n(65);var l=n(172),o=n(306),r=n(479),c=n(480),d=n(481),v=n(452),f=n(53),m={name:"LiveStatsTable",components:{ExtendedListItem:v.default},props:{nodes:{type:Array,required:!0},lastUpdated:{type:Date,required:!0},title:{type:String,default:function(){return""}},breadcrumbs:{type:Array,default:function(){return[]}}},data:function(){return{updateInterval:null,nextUpdateInSeconds:0,expanded:[],nf:new Intl.NumberFormat(this.locale,{}),locales:{en:o.a,es:r.a,ru:c.a,zh:d.a}}},computed:{isMobile:function(){return this.$store.state.mobile},locale:function(){return this.$i18n.locale},loading:function(){return 0===this.nodes.length},chartHeaders:function(){return[{text:this.$t("liveStats.client"),align:"start",sortable:!1,value:"name"},{text:this.$t("liveStats.version"),align:"end",sortable:!0,value:"release"},{text:this.$t("liveStats.status"),align:"center",sortable:!0,value:"syncing"},{text:this.$t("liveStats.blockNumber"),align:"end",sortable:!0,value:"blockNumber"},{text:this.$t("liveStats.blockHash"),sortable:!0,value:"blockHash"},{text:this.$t("liveStats.totalDifficulty"),sortable:!0,align:"end",value:"totalDifficulty"},{text:this.$t("liveStats.lastBlock"),align:"end",sortable:!0,value:"timestamp"}]}},created:function(){var t=this;this.updateInterval=setInterval((function(){t.nextUpdateInSeconds=Math.round(f.apiEndpoints.liveStatsFetchInterval-(Date.now()-t.lastUpdated.getTime())/1e3)}),1e3)},destroyed:function(){clearInterval(this.updateInterval)},methods:{formatHash:function(t,e,n){return t.substr(0,e)+"..."+t.substr(t.length-n)},formatRelease:function(t){return t.split("-")[0].replace("v","")},formatLastSeen:function(t){return Object(l.a)(new Date(1e3*t),Date.now(),{addSuffix:!0,includeSeconds:!0,locale:this.locales[this.locale]})}}},_=n(101),component=Object(_.a)(m,(function(){var t=this,e=t._self._c;return e("v-card",{staticClass:"mx-sm-1 mx-0",attrs:{tile:""}},[e("v-card-title",[e("v-icon",{staticClass:"mr-2"},[t._v("mdi-server-network")]),t._v("\n    "+t._s(t.title)+"\n    "),e("v-spacer"),t._v(" "),e("small",{staticStyle:{"font-size":"10px"}},[t._v("\n      Next update\n      "+t._s(t.nextUpdateInSeconds?"in ".concat(t.nextUpdateInSeconds,"s"):"now")+"\n    ")])],1),t._v(" "),e("v-data-table",{staticClass:"elevation-1",attrs:{loading:t.loading,headers:t.chartHeaders,items:t.nodes,expanded:t.expanded,"item-key":"id","show-expand":!t.isMobile,"hide-default-footer":!0,"items-per-page":-1,"loading-text":t.$t("liveStats.loading"),"no-data-text":t.$t("liveStats.noData"),"no-results-text":t.$t("liveStats.noResults"),"disable-pagination":!0},on:{"update:expanded":function(e){t.expanded=e}},scopedSlots:t._u([{key:"loading",fn:function(){return[e("v-skeleton-loader",{attrs:{type:"table-row@3"}})]},proxy:!0},{key:"expanded-item",fn:function(n){var l=n.headers,o=n.item;return[e("td",{attrs:{colspan:l.length}},[e("v-list",{attrs:{dense:""}},[e("extended-list-item",{attrs:{title:t.$t("liveStats.client")},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v("\n              "+t._s(o.name)+"\n            ")]},proxy:!0}],null,!0)}),t._v(" "),e("extended-list-item",{attrs:{title:t.$t("liveStats.version")},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v("\n              "+t._s(t.formatRelease(o.release))+"\n            ")]},proxy:!0}],null,!0)}),t._v(" "),e("extended-list-item",{attrs:{title:t.$t("liveStats.status")},scopedSlots:t._u([{key:"subtitle",fn:function(){return[o.syncing?e("v-chip",{staticClass:"ma-2",attrs:{color:"red","text-color":"white","x-small":"",outlined:""}},[t._v("\n                Syncing\n              ")]):e("v-chip",{staticClass:"ma-2",attrs:{color:"green","text-color":"white","x-small":"",outlined:""}},[t._v("\n                In sync\n              ")])]},proxy:!0}],null,!0)}),t._v(" "),e("extended-list-item",{attrs:{title:t.$t("liveStats.blockNumber")},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v("\n              "+t._s(o.blockNumber)+"\n            ")]},proxy:!0}],null,!0)}),t._v(" "),e("extended-list-item",{attrs:{title:t.$t("liveStats.blockHash")},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v("\n              "+t._s(t.formatHash(o.blockHash,10,8))+"\n            ")]},proxy:!0}],null,!0)}),t._v(" "),e("extended-list-item",{attrs:{title:t.$t("liveStats.totalDifficulty")},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v("\n              "+t._s(t.nf.format(o.totalDifficulty))+"\n            ")]},proxy:!0}],null,!0)}),t._v(" "),e("extended-list-item",{attrs:{title:t.$t("liveStats.lastBlock")},scopedSlots:t._u([{key:"subtitle",fn:function(){return[t._v("\n              "+t._s(t.formatLastSeen(o.timestamp))+"\n            ")]},proxy:!0}],null,!0)})],1)],1)]}},{key:"item.name",fn:function(e){var n=e.item;return[t._v("\n      "+t._s("-"===n.name?t.$t("nodes.unknown"):n.name)+"\n    ")]}},{key:"item.release",fn:function(e){var n=e.item;return[t._v("\n      "+t._s(t.formatRelease(n.release))+"\n    ")]}},{key:"item.syncing",fn:function(n){return[n.item.syncing?e("v-chip",{staticClass:"ma-2",attrs:{color:"red","text-color":"white","x-small":"",outlined:""}},[t._v("\n        Syncing\n      ")]):e("v-chip",{staticClass:"ma-2",attrs:{color:"green","text-color":"white","x-small":"",outlined:""}},[t._v("\n        In sync\n      ")])]}},{key:"item.blockNumber",fn:function(e){var n=e.item;return[t._v("\n      "+t._s(n.blockNumber)+"\n    ")]}},{key:"item.blockHash",fn:function(e){var n=e.item;return[t._v("\n      "+t._s(t.formatHash(n.blockHash,10,8))+"\n    ")]}},{key:"item.totalDifficulty",fn:function(e){var n=e.item;return[t._v("\n      "+t._s(t.nf.format(n.totalDifficulty))+"\n    ")]}},{key:"item.timestamp",fn:function(e){var n=e.item;return[t._v("\n      "+t._s(t.formatLastSeen(n.timestamp))+"\n    ")]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports}}]);