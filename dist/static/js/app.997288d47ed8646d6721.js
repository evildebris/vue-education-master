webpackJsonp([13],{"/8vw":function(e,t,a){"use strict"},"5KRq":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a("Tkb+"),s=n(i),u=a("LqR7"),r=n(u),o=a("sPgX"),c=n(o);window.mixin=c.default,t.default={name:"app",components:{welcome:s.default,alert:r.default},mixins:[window.mixin],beforeMount:function(){var e=this;this.hasLogin&&this.refreshLoginData(),this.$store.commit("setAnimateCallback",function(t,a){e.enterAnimate=t,e.leaveAnimate=a})},data:function(){return{routerAnimate:!1,enterAnimate:"",leaveAnimate:""}},computed:{hasLogin:function(){return this.$store.state.user.hasLogin}},watch:{$route:function(e,t){var a=e.path.split("/").length,n=t.path.split("/").length;2===a&&this.$store.commit("setPageName",e.name),a!==n&&(this.enterAnimate=a>n?"animated fadeInRight":"animated fadeInLeft",this.leaveAnimate=a>n?"animated fadeOutLeft":"animated fadeOutRight",3===a&&(this.leaveAnimate="animated fadeOutRight"))}}}},DXzY:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"welcome",class:{hide:e.hide}},[n("img",{attrs:{src:a("Hu9s"),alt:""}}),e._v(" "),n("div",{staticClass:"login_icon"}),e._v(" "),n("p",[e._v("Loading...")])])},i=[],s={render:n,staticRenderFns:i};t.a=s},Dsho:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[{wxid:"wxid_zhaohd",initial:"z",headerUrl:"https://sinacloud.net/vue-wechat/images/headers/header01.png",nickname:"阿荡",sex:1,remark:"阿荡",signature:"填坑小能手",telphone:18896586152,album:[{imgSrc:""}],area:["中国","北京","海淀"],from:"",tag:"",desc:{}},{wxid:"wxid_baiqian",initial:"b",headerUrl:"https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg",nickname:"白浅",sex:0,remark:"",signature:"青丘女帝，天族天妃",telphone:18896586152,album:[{imgSrc:"https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian01.jpeg",date:182625262},{imgSrc:"https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg",date:182625262}],area:["青丘","狐狸洞"],from:"通过扫一扫",tag:"女帝",desc:{title:"",picUrl:""}},{wxid:"wxid_yehua",initial:"y",headerUrl:"https://sinacloud.net/vue-wechat/images/headers/yehua.jpg",nickname:"夜华",sex:1,remark:"夜华",signature:"浅浅，过来",telphone:18896586152,album:[{imgSrc:"https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu02.jpeg",date:182625262},{imgSrc:"https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg",date:182625262}],area:["九重天","洗梧宫"],from:"通过扫一扫",tag:"太子",desc:{title:"",picUrl:""}},{wxid:"wxid_liubei",initial:"l",headerUrl:"https://sinacloud.net/vue-wechat/images/headers/liubei.jpg",nickname:"刘备",sex:1,remark:"刘备",signature:"惟贤惟德，仁服于人",telphone:18896586152,album:[{imgSrc:"https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu02.jpeg",date:182625262},{imgSrc:"https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian01.jpeg",date:182625262}],area:["蜀国","荆州"],from:"通过扫一扫",tag:"主公",desc:{title:"",picUrl:""}},{wxid:"wxid_guangyu",initial:"g",headerUrl:"https://sinacloud.net/vue-wechat/images/headers/guangyu.jpg",nickname:"关羽",sex:1,remark:"关羽",signature:"观尔乃插标卖首",telphone:18896586152,album:[{imgSrc:"https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg",date:182625262},{imgSrc:"https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu01.jpeg",date:182625262}],area:["蜀国","荆州"],from:"通过扫一扫",tag:"蜀",desc:{title:"",picUrl:""}},{wxid:"wxid_zhugeliang",initial:"z",headerUrl:"https://sinacloud.net/vue-wechat/images/headers/zhugeliang.jpg",nickname:"诸葛亮",sex:1,remark:"诸葛亮",signature:"你可识得此阵？",telphone:18896586152,album:[{imgSrc:"https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian01.jpeg",date:182625262},{imgSrc:"https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu01.jpeg",date:182625262}],area:["蜀国","荆州"],from:"通过扫一扫",tag:"卧龙",desc:{title:"",picUrl:""}},{wxid:"wxid_sunshangxiang",initial:"s",headerUrl:"https://sinacloud.net/vue-wechat/images/headers/sunshangxiang.jpg",nickname:"孙尚香",sex:0,remark:"孙尚香2",signature:"夫君,身体要紧~",telphone:18896586152,album:[{imgSrc:"https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg",date:182625262}],area:["吴国","富春"],from:"通过手机号码添加",tag:"孙夫人",desc:{title:"",picUrl:""}},{wxid:"wxid_sunquan",initial:"s",headerUrl:"https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg",nickname:"孙权",sex:1,remark:"孙权",signature:"容我三思",telphone:18896586152,album:[{imgSrc:"https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu01.jpeg",date:182625262}],area:["吴国","吴郡"],from:"通过手机号码添加",tag:"主公",desc:{title:"",picUrl:""}},{wxid:"wxid_huangyueying",initial:"h",headerUrl:"https://sinacloud.net/vue-wechat/images/headers/huangyueying.jpg",nickname:"黄月英",sex:0,remark:"黄月英",signature:"哼哼~",telphone:18896586152,album:[{imgSrc:"https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu02.jpeg",date:182625262}],area:["蜀","荆州"],from:"通过手机号码添加",tag:"蜀",desc:{title:"",picUrl:""}},{wxid:"wxid_zhenji",initial:"z",headerUrl:"https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg",nickname:"甄姬",sex:0,remark:"甄姬",signature:"仿佛兮若轻云之蔽月",telphone:18896586152,album:[{imgSrc:"https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu01.jpeg",date:182625262}],area:["魏","荆州","中山"],from:"通过手机号码添加",tag:"蜀",desc:{title:"",picUrl:""}}],i={contacts:n};i.getUserInfo=function(e){if(e)for(var t in n)if(n[t].wxid===e)return n[t]},t.default=i},ERDW:function(e,t,a){e.exports=a.p+"static/img/login_logo.bfd5d9b.png"},Hu9s:function(e,t,a){e.exports=a.p+"static/img/login_background.5354b32.jpg"},Jys3:function(e,t){},LqR7:function(e,t,a){"use strict";function n(e){a("PWa1")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("PPjl"),s=a.n(i);for(var u in i)["default","default"].indexOf(u)<0&&function(e){a.d(t,e,function(){return i[e]})}(u);var r=a("cCBc"),o=a("Z0/y"),c=n,l=o(s.a,r.a,!1,c,null,null);t.default=l.exports},M93x:function(e,t,a){"use strict";function n(e){a("Jys3")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("5KRq"),s=a.n(i);for(var u in i)["default","default"].indexOf(u)<0&&function(e){a.d(t,e,function(){return i[e]})}(u);var r=a("ND1Y"),o=a("Z0/y"),c=n,l=o(s.a,r.a,!1,c,null,null);t.default=l.exports},ND1Y:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("welcome"),e._v(" "),a("div",{staticClass:"outter",class:{hideLeft:e.$route.path.split("/").length>2}},[a("section",{staticClass:"app-content"},[a("keep-alive",[a("router-view",{attrs:{name:"default"}})],1)],1)]),e._v(" "),a("transition",{attrs:{name:"custom-classes-transition","enter-active-class":e.enterAnimate,"leave-active-class":e.leaveAnimate}},[a("router-view",{staticClass:"sub-page",attrs:{name:"subPage"}})],1),e._v(" "),a("alert")],1)},i=[],s={render:n,staticRenderFns:i};t.a=s},NHnr:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=a("MVMM"),s=n(i),u=a("BMa3"),r=n(u),o=a("MqOw"),c=n(o),l=a("M93x"),d=n(l),h=a("YaEn"),g=n(h),m=a("YtJ0"),f=n(m),p=a("iDdd"),v=n(p),b=a("Q0Ca"),w=n(b);s.default.use(c.default,r.default,s.default),(0,w.default)(s.default),s.default.config.productionTip=!1,v.default.attach(document.body),new s.default({el:"#app",router:g.default,store:f.default,render:function(e){return e(d.default)}})},PPjl:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"alert",data:function(){return{title:""}},methods:{closeHeader:function(){this.$store.state.headerStatus&&this.$store.commit("toggleAlertStatus",{status:!1}),this.$store.state.alertCallback&&(this.$store.state.alertCallback(),this.$store.commit("cancelAlertCallback"))}}}},PWa1:function(e,t){},Q0Ca:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={fmtDate:function(e,t){var e=new Date(e),a={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in a)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?a[n]:("00"+a[n]).substr((""+a[n]).length)));return t}};t.default=function(e){Object.keys(n).forEach(function(t){e.filter(t,n[t])})}},"Tkb+":function(e,t,a){"use strict";function n(e){a("bgO6")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("ZeeG"),s=a.n(i);for(var u in i)["default","default"].indexOf(u)<0&&function(e){a.d(t,e,function(){return i[e]})}(u);var r=a("DXzY"),o=a("Z0/y"),c=n,l=o(s.a,r.a,!1,c,null,null);t.default=l.exports},"UTg/":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=a("Klf7"),s={switchLang:function(e,t){e.currentLang=t,Vue.config.lang=t,document.cookie="VR_LANG="+t+"; path=/;domain=.snail.com"},setPageName:function(e,t){e.currentPageName=t},setClazz:function(e,t){t instanceof Array&&(t.push(e.user.extra),e.clazz=t)},refreshCookie:function(e,t){if(t&&"object"===(void 0===t?"undefined":n(t))&&t.userName)Object.assign(e.user,{userName:t.userName,hasLogin:!0}),i.set("aixig_userName",t.userName,1);else{var a=i.get("aixig_userName");if(a){var s=window.localStorage.getItem("aixi_extra");e.user.hasLogin=!0,e.user.userName=a,s&&(e.user.extra=JSON.parse(s))}else e.user.hasLogin=!1,e.user.userName=void 0}},loginData:function(e,t){t&&"object"===(void 0===t?"undefined":n(t))&&(window.localStorage.setItem("aixi_extra",JSON.stringify(t)),e.user.extra=t)},updateExtra:function(e,t){t&&"object"===(void 0===t?"undefined":n(t))&&(Object.assign(e.user.extra,t),window.localStorage.setItem("aixi_extra",JSON.stringify(e.user.extra)))},refreshAnimate:function(e,t){e.animateCallback&&e.animateCallback(t.enterAnimate,t.leaveAnimate)},setAnimateCallback:function(e,t){"function"==typeof t&&(e.animateCallback=t)},toggleHeaderStatus:function(e,t){e.headerStatus=t},toggleAlertStatus:function(e,t){e.alertStatus=t.status,t.text&&(e.alertContent=t.text),"function"==typeof t.callback&&(e.alertCallback=t.callback)},cancelAlertCallback:function(e){e.alertCallback=void 0},toggleTipsStatus:function(e,t){-1==t?(ArrayBuffer,e.tipsStatus=!1):e.tipsStatus=!e.tipsStatus},addNewMsg:function(e){e.newMsgCount>99?e.newMsgCount="99+":e.newMsgCount++},minusNewMsg:function(e){e.newMsgCount<1?e.newMsgCount=0:e.newMsgCount--},setMsgStick:function(e,t){},cancelMsgStick:function(e,t){}};t.default=s},V7SI:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[{wxid:"Google_Developers",name:"谷歌开发者",headerUrl:"http://cdn.sinacloud.net/vue-wechat/images/OfficialAccount/google-dev.JPG",desc:"",owner:"谷歌信息技术有限公司",initial:"G"},{wxid:"overwatch163",name:"守望先锋",desc:"",headerUrl:"http://cdn.sinacloud.net/vue-wechat/images/OfficialAccount/overwatch.JPG",owner:"上海网易公司",initial:"O"},{wxid:"FrontDev",name:"前端大全",desc:"",headerUrl:"http://cdn.sinacloud.net/vue-wechat/images/OfficialAccount/frontend.JPG",owner:"",initial:"Q"},{wxid:"xituarea",name:"稀土区",desc:"",headerUrl:"http://cdn.sinacloud.net/vue-wechat/images/OfficialAccount/xitu.JPG",owner:"个人",initial:"X"},{wxid:"LOL-922",name:"英雄联盟",desc:"",headerUrl:"http://cdn.sinacloud.net/vue-wechat/images/OfficialAccount/lol.JPG",owner:"腾讯技术有限公司",initial:"Y"}];t.default=n},WMeU:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={contactsInitialList:function(e){for(var t=[],a=e.allContacts,n=a.length,i=0;i<n;i++)-1==t.indexOf(a[i].initial.toUpperCase())&&t.push(a[i].initial.toUpperCase());return t.sort()},contactsList:function(e,t){for(var a={},n=e.allContacts,i=n.length,s=0;s<t.contactsInitialList.length;s++){var u=t.contactsInitialList[s];a[u]=[];for(var r=0;r<i;r++)n[r].initial.toUpperCase()===u&&a[u].push(n[r])}return a}};t.default=n},YaEn:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a("MVMM"),s=n(i),u=a("cigS"),r=n(u),o=a("YtJ0"),c=n(o);s.default.use(r.default);var l=[{path:"/login",name:"登陆",components:{subPage:function(e){return a.e(4).then(function(){var t=[a("EV1k")];e.apply(null,t)}.bind(this)).catch(a.oe)}}},{path:"/register",name:"注册",components:{subPage:function(e){return a.e(5).then(function(){var t=[a("5zCw")];e.apply(null,t)}.bind(this)).catch(a.oe)}}},{path:"/forget",name:"忘记密码",components:{subPage:function(e){return a.e(6).then(function(){var t=[a("7zkv")];e.apply(null,t)}.bind(this)).catch(a.oe)}}},{path:"/",name:"个人中心",meta:{requireAuth:!0},component:function(e){return a.e(3).then(function(){var t=[a("LqM4")];e.apply(null,t)}.bind(this)).catch(a.oe)}},{path:"/classes/index",name:"班级",meta:{requireAuth:!0,back:!0},components:{subPage:function(e){return a.e(11).then(function(){var t=[a("Ravi")];e.apply(null,t)}.bind(this)).catch(a.oe)}}},{path:"/classes/habit",name:"习惯任务",meta:{requireAuth:!0,back:!0},components:{subPage:function(e){return a.e(8).then(function(){var t=[a("vu4a")];e.apply(null,t)}.bind(this)).catch(a.oe)}}},{path:"/classes/habit2",name:"习惯任务2",meta:{requireAuth:!0,back:!0},components:{subPage:function(e){return a.e(7).then(function(){var t=[a("+Sfw")];e.apply(null,t)}.bind(this)).catch(a.oe)}}},{path:"/classes/student",name:"同学",meta:{requireAuth:!0,back:!0},components:{subPage:function(e){return a.e(9).then(function(){var t=[a("CSdu")];e.apply(null,t)}.bind(this)).catch(a.oe)}}},{path:"/classes/desk",name:"课桌",meta:{requireAuth:!0,back:!0},components:{subPage:function(e){return a.e(10).then(function(){var t=[a("SHRB")];e.apply(null,t)}.bind(this)).catch(a.oe)}}},{path:"/money",name:"学习币中心",meta:{requireAuth:!0,back:!0},component:function(e){return a.e(2).then(function(){var t=[a("2b2g")];e.apply(null,t)}.bind(this)).catch(a.oe)}},{path:"/money/recharge",name:"充钱",meta:{requireAuth:!0,back:!0},components:{subPage:function(e){return a.e(1).then(function(){var t=[a("L+Z4")];e.apply(null,t)}.bind(this)).catch(a.oe)}}},{path:"/money/stamina",name:"体力值",meta:{requireAuth:!0,back:!0},components:{subPage:function(e){return a.e(0).then(function(){var t=[a("hctJ")];e.apply(null,t)}.bind(this)).catch(a.oe)}}}],d=new r.default({base:"/vue-education/",routes:l});d.beforeEach(function(e,t,a){if(e.meta.requireAuth){var n=void 0,i=void 0;c.default.commit("refreshCookie"),c.default.state.user.hasLogin?(t.meta.hasGo?(n="animated fadeInRight",i="animated fadeOutLeft",t.meta.hasGo=!1,c.default.commit("refreshAnimate",{enterAnimate:n,leaveAnimate:i})):e.meta.back&&!e.meta.hasGo&&(n="animated fadeInLeft",i="animated fadeOutRight",e.meta.hasGo=!0,c.default.commit("refreshAnimate",{enterAnimate:n,leaveAnimate:i})),a()):a({path:"/login"})}else a()}),t.default=d},YtJ0:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a("MVMM"),s=n(i),u=a("HVJf"),r=n(u),o=a("V7SI"),c=n(o),l=a("Dsho"),d=n(l),h=a("UTg/"),g=n(h),m=a("/8vw"),f=n(m),p=a("WMeU"),v=n(p);s.default.use(r.default);var b={currentLang:"zh",newMsgCount:0,allContacts:d.default.contacts,OfficialAccounts:c.default,currentPageName:"test",headerStatus:!0,tipsStatus:!1,apiUrl:{default:"http://t.aixiguan.com/"},alertStatus:!1,alertTitle:"提示",alertContent:"",alertCallback:void 0,clazz:[],user:{userName:void 0,hasLogin:!1,extra:{},roleMap:{0:"学生",1:"体育委员",2:"劳动委员",3:"纪律委员",4:"生活委员",5:"文艺委员",6:"学习委员",7:"副班长",8:"班长",undefined:"无"}},info:{userImg:"https://sinacloud.net/vue-wechat/images/headers/header01.png",name:"default",sex:"male",data:{"等级":"35级","经验":"1230","能力值":"33"},data2:{stamina:"100",XiGuanBi:"1000"}},msgList:{stickMsg:[],baseMsg:[{mid:1,type:"friend",group_name:"",group_qrCode:"",read:!0,newMsgCount:1,quiet:!1,msg:[{text:"长按这些白色框消息，唤醒消息操作菜单，长按这些白色框消息，唤醒消息操作菜单",date:1488117964495,name:"阿荡",headerUrl:"https://sinacloud.net/vue-wechat/images/headers/header01.png"},{text:"点击空白处，操作菜单消失",date:1488117964495,name:"阿荡",headerUrl:"https://sinacloud.net/vue-wechat/images/headers/header01.png"},{text:"来呀 快活啊",date:1488117964495,name:"阿荡",headerUrl:"https://sinacloud.net/vue-wechat/images/headers/header01.png"}],user:[d.default.getUserInfo("wxid_zhaohd")]},{mid:2,type:"group",group_name:"收购万达讨论群",group_qrCode:"",read:!1,newMsgCount:1,quiet:!0,msg:[{text:"长按消息，唤醒消息操作菜单",date:1488117964495,name:"夜华",headerUrl:"https://sinacloud.net/vue-wechat/images/headers/yehua.jpg"},{text:"点击空白处，操作菜单消失",date:1488117964495,name:"阿荡",headerUrl:"https://sinacloud.net/vue-wechat/images/headers/header01.png"},{text:"我试一试",date:1488117964495,name:"夜华",headerUrl:"https://sinacloud.net/vue-wechat/images/headers/yehua.jpg"}],user:[d.default.getUserInfo("wxid_zhaohd"),d.default.getUserInfo("wxid_yehua")]},{mid:3,type:"group",group_name:"收购淘宝讨论群",group_qrCode:"",read:!0,newMsgCount:1,quiet:!0,msg:[{text:"冒个泡",date:1488117964495,name:"诸葛亮",headerUrl:"https://sinacloud.net/vue-wechat/images/headers/zhugeliang.jpg"}],user:[d.default.getUserInfo("wxid_zhenji"),d.default.getUserInfo("wxid_zhugeliang"),d.default.getUserInfo("wxid_zhaohd")]},{mid:4,type:"friend",group_name:"",group_qrCode:"",read:!1,newMsgCount:4,quiet:!1,msg:[{text:"长按消息，唤醒消息操作菜单",date:1488117964495,name:"孙权",headerUrl:"https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg"},{text:"点击空白处，操作菜单消失",date:1488117964495,name:"孙权",headerUrl:"https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg"},{text:"容我三思",date:1488117964495,name:"孙权",headerUrl:"https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg"}],user:[d.default.getUserInfo("wxid_sunquan")]},{mid:5,type:"friend",group_name:"",group_qrCode:"",read:!1,newMsgCount:4,quiet:!1,msg:[{text:"夫君,身体要紧~ ",date:1488117964495,name:"孙尚香",headerUrl:"https://sinacloud.net/vue-wechat/images/headers/sunshangxiang.jpg"}],user:[d.default.getUserInfo("wxid_sunshangxiang")]},{mid:6,type:"friend",group_name:"",group_qrCode:"",read:!1,newMsgCount:4,quiet:!0,msg:[{text:"三姓家奴！ ",date:1488117964495,name:"关羽",headerUrl:"https://sinacloud.net/vue-wechat/images/headers/guangyu.jpg"}],user:[d.default.getUserInfo("wxid_guangyu")]}]}};t.default=new r.default.Store({state:b,mutations:g.default,actions:f.default,getters:v.default})},ZeeG:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{hide:!1}},mounted:function(){var e=this;setTimeout(function(){e.hide=!0},1e3)}}},bgO6:function(e,t){},cCBc:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.alertStatus,expression:"$store.state.alertStatus"}],attrs:{id:"alertShadow"}},[a("div",{staticClass:"alert"},[a("div",{staticClass:"alert_header"},[e._v(e._s(this.$store.state.alertTitle)+" "),a("icon",{on:{click:function(t){e.closeHeader()}}})],1),e._v(" "),a("article",[e._v("\n        "+e._s(this.$store.state.alertContent)+"\n    ")]),e._v(" "),a("p",{staticClass:"confirm_btn",on:{click:function(t){e.closeHeader()}}})])])},i=[],s={render:n,staticRenderFns:i};t.a=s},sPgX:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={mounted:function(){this.$store.commit("setPageName",this.pageName)},methods:{alertText:function(e,t){this.$store.state.alertStatus||this.$store.commit("toggleAlertStatus",{status:!0,text:e,callback:t})},refreshLoginData:function(){var e=this;this.access_token&&this.post2("login",{mobile:this.$store.state.user.extra.mobile,password:this.$store.state.user.extra.password},function(t){Object.assign(t.extra,{password:e.$store.state.user.extra.password}),e.$store.commit("loginData",t.extra)})},post1:function(e,t,a,n){var i=this;this.axios({method:"post",url:this.$store.state.apiUrl.default+e,params:t,headers:{"Content-type":"application/x-www-form-urlencoded","X-Requested-With":"XMLHttpRequest"}}).then(function(e){200===e.status&&0===e.data.code?i.alertText(a+"成功！",function(){n(e.data)}):200===e.status&&i.alertText(a+"失败:"+e.data.message+"！")},function(e){i.alertText(a+"失败！")})},post2:function(e,t,a){var n=this;this.axios({method:"post",url:this.$store.state.apiUrl.default+e,params:t,headers:{"Content-type":"application/x-www-form-urlencoded","X-Requested-With":"XMLHttpRequest"}}).then(function(t){200===t.status&&0===t.data.code?a(t.data):200===t.status&&console.error(n.$store.state.apiUrl.default+e+"失败:"+t.data.message+"！")},function(t){console.error(n.$store.state.apiUrl.default+e+"失败!")})}},activated:function(){this.$store.commit("setPageName",this.pageName)},computed:{access_token:function(){return this.$store.state.user.extra.access_token},user:function(){return this.$store.state.user.extra},role:function(){return this.$store.state.user.roleMap[this.$store.state.user.extra.role]}}};t.default=n}},["NHnr"]);
//# sourceMappingURL=app.997288d47ed8646d6721.js.map