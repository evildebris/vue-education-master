webpackJsonp([17],{"6xWM":function(e,t,i){t=e.exports=i("yKCJ")(!0),t.push([e.i,'.chat-dialogue-entry-collect{background-color:#fff;position:relative;padding:15px 10px 5px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;width:100%;color:#464646;font-size:14px}.chat-dialogue-entry-collect:before{content:"";position:absolute;width:200%;left:0;bottom:0;transform:scale(.5);transform-origin:0 0;-webkit-transform:scale(.5);-webkit-transform-origin:0 0;background-color:#b7b7b7;height:1px;z-index:2}.chat-dialogue-entry-collect li{float:left;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%;padding:5px 10px;text-align:center}.chat-dialogue-entry-collect li>div{position:relative;border-radius:6px;overflow:hidden;width:55px;height:55px;margin:0 auto;background-size:cover;border:1px solid #eee}.chat-dialogue-entry-collect li>div img{width:100%}.chat-dialogue-entry-collect li p{margin-top:5px}.chat-dialogue-entry-collect li .iconfont{font-size:23px;color:#bbb;line-height:55px}',"",{version:3,sources:["/Users/liaocai/Documents/vue-WeChat-master/src/components/wechat/dialogue-detail.vue"],names:[],mappings:"AACA,6BACI,sBAAuB,AACvB,kBAAmB,AACnB,sBAAuB,AACvB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,mBAAoB,AAChB,eAAgB,AACpB,uBAAwB,AACpB,oBAAqB,AACjB,2BAA4B,AACpC,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,WAAY,AACZ,cAAe,AACf,cAAgB,CACnB,AACD,oCACI,WAAY,AACZ,kBAAmB,AACnB,WAAY,AACZ,OAAQ,AACR,SAAU,AACV,oBAAqB,AACrB,qBAAsB,AACtB,4BAA6B,AAC7B,6BAA8B,AAC9B,yBAA0B,AAC1B,WAAY,AACZ,SAAW,CACd,AACD,gCACI,WAAY,AACZ,mBAAoB,AAChB,oBAAqB,AACjB,YAAa,AACrB,4BAA6B,AACzB,eAAgB,AACpB,cAAe,AACf,iBAAkB,AAClB,iBAAmB,CACtB,AACD,oCACI,kBAAmB,AACnB,kBAAmB,AACnB,gBAAiB,AACjB,WAAY,AACZ,YAAa,AACb,cAAe,AACf,sBAAuB,AACvB,qBAAuB,CAC1B,AACD,wCACI,UAAY,CACf,AACD,kCACI,cAAgB,CACnB,AACD,0CACI,eAAgB,AAChB,WAAY,AACZ,gBAAiB,CACpB",file:"dialogue-detail.vue",sourcesContent:['\n.chat-dialogue-entry-collect {\n    background-color: #fff;\n    position: relative;\n    padding: 15px 10px 5px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    width: 100%;\n    color: #464646;\n    font-size: 14px;\n}\n.chat-dialogue-entry-collect:before {\n    content: "";\n    position: absolute;\n    width: 200%;\n    left: 0;\n    bottom: 0;\n    transform: scale(.5);\n    transform-origin: 0 0;\n    -webkit-transform: scale(.5);\n    -webkit-transform-origin: 0 0;\n    background-color: #b7b7b7;\n    height: 1px;\n    z-index: 2;\n}\n.chat-dialogue-entry-collect li {\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-preferred-size: 25%;\n        flex-basis: 25%;\n    max-width: 25%;\n    padding: 5px 10px;\n    text-align: center;\n}\n.chat-dialogue-entry-collect li>div {\n    position: relative;\n    border-radius: 6px;\n    overflow: hidden;\n    width: 55px;\n    height: 55px;\n    margin: 0 auto;\n    background-size: cover;\n    border: 1px solid #eee;\n}\n.chat-dialogue-entry-collect li>div img {\n    width: 100%;\n}\n.chat-dialogue-entry-collect li p {\n    margin-top: 5px;\n}\n.chat-dialogue-entry-collect li .iconfont {\n    font-size: 23px;\n    color: #bbb;\n    line-height: 55px\n}\n'],sourceRoot:""}])},cal1:function(e,t,i){var l=i("6xWM");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);i("bUva")("5b5201dd",l,!0,{})},jiUw:function(e,t,i){"use strict";function l(e){i("cal1")}Object.defineProperty(t,"__esModule",{value:!0});var s=i("lVia"),a=i("kyP6"),n=i("Aizv"),c=l,A=n(s.a,a.a,!1,c,null,null);t.default=A.exports},kyP6:function(e,t,i){"use strict";var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("header",{attrs:{id:"wx-header"}},[i("div",{staticClass:"center"},[i("div",{staticClass:"iconfont icon-return-arrow",on:{click:function(t){e.$router.back()}}},[i("span",[e._v("返回")])]),e._v(" "),i("span",[e._v("聊天详情")])])]),e._v(" "),i("div",{staticClass:"member"},[i("ul",{staticClass:"chat-dialogue-entry-collect"},[e._l(e.$route.query.msgInfo.user,function(t){return i("li",[i("div",[i("img",{attrs:{src:t.headerUrl}})]),e._v(" "),i("p",[e._v(e._s(t.remark||t.nickname))])])}),e._v(" "),e._m(0)],2)]),e._v(" "),i("div",{staticClass:"weui-cells"},[e._m(1),e._v(" "),i("div",{staticClass:"weui-cell weui-cell_switch"},[i("div",{staticClass:"weui-cell__bd"},[e._v("消息免打扰")]),e._v(" "),i("div",{staticClass:"weui-cell__ft"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.$route.query.msgInfo.quiet,expression:"$route.query.msgInfo.quiet"}],staticClass:"weui-switch",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.$route.query.msgInfo.quiet)?e._i(e.$route.query.msgInfo.quiet,null)>-1:e.$route.query.msgInfo.quiet},on:{change:function(t){var i=e.$route.query.msgInfo.quiet,l=t.target,s=!!l.checked;if(Array.isArray(i)){var a=e._i(i,null);l.checked?a<0&&e.$set(e.$route.query.msgInfo,"quiet",i.concat([null])):a>-1&&e.$set(e.$route.query.msgInfo,"quiet",i.slice(0,a).concat(i.slice(a+1)))}else e.$set(e.$route.query.msgInfo,"quiet",s)}}})])])]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5)])},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",[i("div",[i("span",{staticClass:"iconfont icon-chat-detail-add"})])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-cell weui-cell_switch"},[i("div",{staticClass:"weui-cell__bd"},[e._v("置顶聊天")]),e._v(" "),i("div",{staticClass:"weui-cell__ft"},[i("input",{staticClass:"weui-switch",attrs:{type:"checkbox"}})])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-cells"},[i("div",{staticClass:"weui-cell weui-cell_access"},[i("div",{staticClass:"weui-cell__bd"},[e._v("聊天文件")]),e._v(" "),i("div",{staticClass:"weui-cell__ft"})])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-cells"},[i("div",{staticClass:"weui-cell weui-cell_access"},[i("div",{staticClass:"weui-cell__bd"},[e._v("设置当前聊天背景")]),e._v(" "),i("div",{staticClass:"weui-cell__ft"})]),e._v(" "),i("div",{staticClass:"weui-cell weui-cell_access"},[i("div",{staticClass:"weui-cell__bd"},[e._v("查找聊天内容")]),e._v(" "),i("div",{staticClass:"weui-cell__ft"})])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-cells"},[i("div",{staticClass:"weui-cell"},[i("div",{staticClass:"weui-cell__bd"},[e._v("清空聊天记录")]),e._v(" "),i("div",{staticClass:"weui-cell__ft"})])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-cells"},[i("div",{staticClass:"weui-cell weui-cell_access"},[i("div",{staticClass:"weui-cell__bd"},[e._v("投诉")]),e._v(" "),i("div",{staticClass:"weui-cell__ft"})])])}],a={render:l,staticRenderFns:s};t.a=a},lVia:function(e,t,i){"use strict";t.a={mounted:function(){console.log(this.$route.query.msgInfo)}}}});
//# sourceMappingURL=17.2920058d79f47d9bf6a4.js.map