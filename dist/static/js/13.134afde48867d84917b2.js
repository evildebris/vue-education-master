webpackJsonp([13],{"5pV+":function(t,i,a){"use strict";var c=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"official-account",class:{"search-open-contact":!t.$store.state.headerStatus}},[a("header",{attrs:{id:"wx-header"}},[a("div",{staticClass:"center"},[a("router-link",{staticClass:"iconfont icon-return-arrow",attrs:{to:"/contact",tag:"div"}},[a("span",[t._v("通讯录")])]),t._v(" "),a("span",[t._v("公众号")])],1)]),t._v(" "),a("search"),t._v(" "),t._l(t.OfficialAccountsList,function(i,c){return[a("div",{staticClass:"weui-cells__title"},[t._v(t._s(c))]),t._v(" "),a("div",{staticClass:"weui-cells"},t._l(i,function(i){return a("div",{staticClass:"weui-cell weui-cell_access"},[a("div",{staticClass:"weui-cell__hd"},[a("img",{staticClass:"home__mini-avatar___1nSrW",attrs:{src:i.headerUrl}})]),t._v(" "),a("div",{staticClass:"weui-cell__bd"},[t._v("\n                        "+t._s(i.name)+"\n                    ")])])}))]})],2)},s=[],e={render:c,staticRenderFns:s};i.a=e},"9yrZ":function(t,i,a){"use strict";var c=a("A2Dw");i.a={components:{search:c.a},data:function(){return{pageName:""}},computed:{initialList:function(){for(var t=[],i=this.$store.state.OfficialAccounts,a=i.length,c=0;c<a;c++)-1==t.indexOf(i[c].initial)&&t.push(i[c].initial);return t.sort()},OfficialAccountsList:function(){for(var t={},i=this.$store.state.OfficialAccounts,a=i.length,c=0;c<this.initialList.length;c++){var s=this.initialList[c];t[s]=[];for(var e=0;e<a;e++)i[e].initial===s&&t[s].push(i[e])}return t}}}},IL2e:function(t,i,a){var c=a("iAJb");"string"==typeof c&&(c=[[t.i,c,""]]),c.locals&&(t.exports=c.locals);a("bUva")("48cdcb68",c,!0,{})},WF0d:function(t,i,a){"use strict";function c(t){a("IL2e")}Object.defineProperty(i,"__esModule",{value:!0});var s=a("9yrZ"),e=a("5pV+"),n=a("Aizv"),o=c,r=n(s.a,e.a,!1,o,null,null);i.default=r.exports},iAJb:function(t,i,a){i=t.exports=a("yKCJ")(!0),i.push([t.i,".official-account{padding-bottom:20px}.official-account .weui-cell_access:active{background-color:hsla(0,0%,69%,.53)}","",{version:3,sources:["/Users/liaocai/Documents/vue-WeChat-master/src/components/contact/official-accounts.vue"],names:[],mappings:"AACA,kBACI,mBAAqB,CACxB,AACD,2CACI,mCAA2C,CAC9C",file:"official-accounts.vue",sourcesContent:["\n.official-account {\n    padding-bottom: 20px;\n}\n.official-account .weui-cell_access:active {\n    background-color: rgba(177, 177, 177, 0.53)\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=13.134afde48867d84917b2.js.map