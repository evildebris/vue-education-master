webpackJsonp([13],{"+v8L":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"friend"}},[s("header",{staticClass:"home_header2",attrs:{id:"wx-header"}},[s("div",{staticClass:"center"},[s("div",{staticClass:"iconfont icon-return-arrow",on:{click:function(e){t.$router.back()}}}),t._v(" "),s("span",[t._v(" 好友列表 ")])])]),t._v(" "),t._m(0),t._v(" "),s("ul",{staticClass:"list background_com",staticStyle:{height:"calc(100% - 130px)"}},t._l(t.friends,function(e){return s("li",{staticClass:"job"},[s("div",{staticClass:"box job_info"},[s("div",[t._v(t._s(e.nickname))]),t._v(" "),s("div",[t._v(t._s(e.level))]),t._v(" "),s("div",[t._v(t._s(e.cap))]),t._v(" "),s("div",[t._v(t._s(t.$store.state.user.roleMap[e.role]))]),t._v(" "),s("div",[t._v(t._s(e.grade+"年"+e.clazz+"班"))])])])}))])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"header_tab box"},[s("li",[s("p",{staticClass:"NiCheng"})]),t._v(" "),s("li",[s("p",{staticClass:"level"})]),t._v(" "),s("li",[s("p",{staticClass:"NengLi"})]),t._v(" "),s("li",[s("p",{staticClass:"ShenFen"})]),t._v(" "),s("li",[s("p",{staticClass:"BanJi"})])])}],a={render:i,staticRenderFns:n};e.a=a},QLp8:function(t,e,s){"use strict";function i(t){s("pXrp")}Object.defineProperty(e,"__esModule",{value:!0});var n=s("fHjM"),a=s.n(n);for(var r in n)["default","default"].indexOf(r)<0&&function(t){s.d(e,t,function(){return n[t]})}(r);var c=s("+v8L"),o=s("Z0/y"),l=i,u=o(a.a,c.a,!1,l,null,null);e.default=u.exports},fHjM:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mixins:[window.mixin],data:function(){return{isShadow:!1,pageName:"",refreshNum:0,friends:[]}},beforeMount:function(){var t=this;this.post2("api/list_my_friend",{access_token:this.$store.state.user.extra.access_token},function(e){t.friends=e.data})},mounted:function(){},methods:{},computed:{myIdx:function(){return this.$store.state.user.extra.idx}}}},knQt:function(t,e,s){e=t.exports=s("UTlt")(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"friend.vue",sourceRoot:""}])},pXrp:function(t,e,s){var i=s("knQt");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("FIqI")("294f7930",i,!0,{})}});
//# sourceMappingURL=13.9c3d1c9e272391661677.js.map