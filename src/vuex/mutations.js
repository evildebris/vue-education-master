const vueCookie = require('vue-cookie');
const mutations = {
    //切换语言 后期需要
    switchLang(state, lang) {
        state.currentLang = lang
        Vue.config.lang = lang
        document.cookie = "VR_LANG=" + lang + "; path=/;domain=.snail.com"
            // location.reload()
    },
    //设置当前页面名字
    setPageName(state, name) {
        state.currentPageName = name
    },
    //更新cookie中登录信息
    refreshCookie(state,user){
        if(user && typeof user === 'object'&&user.userName){
            Object.assign(state.user,{
                userName:user.userName,
                hasLogin:true
            });
            vueCookie.set('userName',user.userName,1);
        }else {
            let userName =vueCookie.get('userName');
            if(userName){
                state.user.hasLogin = true;
                state.user.userName = userName;
            }else {
                state.user.hasLogin = false;
                state.user.userName = undefined;
            }
        }
    },
    //设置前一页名字 已遗弃
    // setBackPageName(state, name) {
    //     state.backPageName = name
    // },
    //当 search 组件全屏/非全屏时 切换公共头部状态
    toggleHeaderStatus(state, status) {
        state.headerStatus = status
    },
    toggleAlertStatus(state, options) {
        state.alertStatus = options.status;
        if(options.text){
            state.alertContent = options.text;
        }
    },
    //切换“微信”页中右上角菜单
    toggleTipsStatus(state, status) {
        if (status == -1) {ArrayBuffer
            state.tipsStatus = false
        } else {
            state.tipsStatus = !state.tipsStatus
        }
    },
    //增加未读消息数
    addNewMsg(state) {
        state.newMsgCount > 99 ? state.newMsgCount = "99+" : state.newMsgCount++
    },
    //减少未读消息数
    minusNewMsg(state) {
        state.newMsgCount < 1 ? state.newMsgCount = 0 : state.newMsgCount--
    },
    //将消息置顶 待完成
    setMsgStick(state, mid) {

    },
    //取消置顶消息 待完成
    cancelMsgStick(state, mid) {

    }
}
export default mutations