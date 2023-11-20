(window.webpackJsonp=window.webpackJsonp||[]).push([[13,16],{447:function(t,e,r){"use strict";r.r(e);var n=r(15),o=(r(224),r(64),r(3));r(309),r(448),r(36),r(22),r(28),r(40),r(53),r(45),r(54);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f={name:"TableChartCard",props:{icon:{type:String,default:function(){return"mdi-console"}},title:{type:String,default:function(){return""}},table:{type:Object,required:!0},labels:{type:Array,default:function(){return[]}},series:{type:Array,default:function(){return[]}},total:{type:Number,required:!0},to:{type:String,default:function(){return null}},noLabelText:{type:String,default:function(){return"-"}},colors:{type:Array,default:function(){return["#008FFB","#00E396","#FEB019","#FF4560","#775DD0"]}}},computed:{theme:function(){return this.$vuetify.theme.dark?"dark":"light"},isMobile:function(){return this.$store.state.mobile},locale:function(){return this.$i18n.locale},options:function(){var t=this;return{chart:{id:this.title.toLowerCase()+"-chart",width:"100%",type:"pie"},plotOptions:{pie:{dataLabels:{offset:-5}}},dataLabels:{formatter:function(e,r){var n=r.w.globals.labels[r.seriesIndex];return"-"===n&&(n=t.noLabelText),[n,e.toFixed(1)+"%"]}},legend:{show:!1},colors:this.colors}},inlineColsNumber:function(){var t=Object.values(this.table);return"object"===Object(n.a)(t[0])?Object.values(t[0]).length:1},inlineColNames:function(){var t=Object.values(this.table);return"object"===Object(n.a)(t[0])?Object.keys(t[0]):[]}},methods:{percent:function(t,e){return(t/e*100).toFixed(1)},rowTotal:function(t){return t.reduce((function(a,b){return a+b}),0)},getChartOptions:function(){return c(c({},this.options),{},{labels:this.labels})}}},d=r(101),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e("v-card",{attrs:{tile:""}},[e("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[e("div",{class:{"w-100":t.isMobile,"w-auto":!t.isMobile}},[e("v-card-title",[e("v-icon",{staticClass:"mr-1"},[t._v(t._s(t.icon))]),t._v("\n        "+t._s(t.title)+"\n      ")],1),t._v(" "),e("v-simple-table",{staticStyle:{width:"100%"},scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v(t._s(t.$t("home.totalNodes")))]),t._v(" "),e("th",{staticClass:"text-right",attrs:{colspan:t.inlineColsNumber}},[t._v("\n                "+t._s(t.total)+" (100%)\n              ")])]),t._v(" "),t.inlineColNames.length>0?[e("tr",[e("th",{staticClass:"text-left"}),t._v(" "),t._l(t.inlineColNames,(function(r){return e("th",{key:r,staticClass:"text-right"},[t._v("\n                  "+t._s(r)+"\n                ")])}))],2)]:t._e()],2),t._v(" "),e("tbody",t._l(t.table,(function(r,o){return e("tr",{key:o},[t.to?[e("td",{staticClass:"text-left"},[e("nuxt-link",{attrs:{to:"/"+t.to+"/"+o}},[t._v("\n                    "+t._s(o)+"\n                  ")])],1)]:[e("td",{staticClass:"text-left"},[t._v("\n                  "+t._s("-"===o?t.noLabelText:o)+"\n                ")])],t._v(" "),"object"===Object(n.a)(r)?t._l(Object.values(r),(function(n){return e("td",{key:"".concat(o,"/").concat(n),staticClass:"text-right"},[t._v("\n                  "+t._s(n)+" ("+t._s(t.percent(n,t.rowTotal(Object.values(r))))+"%)\n                ")])})):[e("td",{staticClass:"text-right"},[t._v("\n                  "+t._s(r)+" ("+t._s(t.percent(r,t.total))+"%)\n                ")])]],2)})),0)]},proxy:!0}])})],1),t._v(" "),t.isMobile?t._e():e("apexchart",{staticClass:"my-3",attrs:{width:"256",type:"pie",options:t.getChartOptions(),series:t.series}})],1)])}),[],!1,null,null,null);e.default=component.exports},448:function(t,e,r){"use strict";var n=r(12),o=r(18),l=r(102),c=r(311),f=r(310),d=r(16),h=RangeError,v=String,O=Math.floor,y=o(f),_=o("".slice),j=o(1..toFixed),m=function(t,e,r){return 0===e?r:e%2==1?m(t,e-1,r*t):m(t*t,e/2,r)},C=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=O(n/1e7)},w=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=O(r/t),r=r%t*1e7},x=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=v(data[t]);s=""===s?e:s+y("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:d((function(){return"0.000"!==j(8e-5,3)||"1"!==j(.9,0)||"1.25"!==j(1.255,2)||"1000000000000000128"!==j(0xde0b6b3a7640080,0)}))||!d((function(){j({})}))},{toFixed:function(t){var e,r,n,o,f=c(this),d=l(t),data=[0,0,0,0,0,0],O="",j="0";if(d<0||d>20)throw new h("Incorrect fraction digits");if(f!=f)return"NaN";if(f<=-1e21||f>=1e21)return v(f);if(f<0&&(O="-",f=-f),f>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(f*m(2,69,1))-69)<0?f*m(2,-e,1):f/m(2,e,1),r*=4503599627370496,(e=52-e)>0){for(C(data,0,r),n=d;n>=7;)C(data,1e7,0),n-=7;for(C(data,m(10,n,1),0),n=e-1;n>=23;)w(data,1<<23),n-=23;w(data,1<<n),C(data,1,1),w(data,2),j=x(data)}else C(data,0,r),C(data,1<<-e,0),j=x(data)+y("0",d);return j=d>0?O+((o=j.length)<=d?"0."+y("0",d-o)+j:_(j,0,o-d)+"."+_(j,o-d)):O+j}})},457:function(t,e,r){"use strict";r.r(e);var n={name:"NodeOperatorsUpgradedCard",components:{TableChartCard:r(447).default},props:{operators:{type:Object,required:!0}}},o=r(101),component=Object(o.a)(n,(function(){var t=this;return(0,t._self._c)("table-chart-card",{staticClass:"mr-1 mb-1",staticStyle:{"margin-left":"6px"},attrs:{title:t.$t("nodeOperatorsUpgradedCard.title"),table:t.operators.upgradedOperators.table,labels:t.operators.upgradedOperators.chart.labels,series:t.operators.upgradedOperators.chart.series,total:t.operators.upgradedOperators.total,"no-label-text":t.$t("nodes.none"),colors:["#00E396","#FD6A6A"],icon:"mdi-directions-fork"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TableChartCard:r(447).default})}}]);