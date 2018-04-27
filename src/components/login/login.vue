<template>
    <!--登陆组件-->
    <div id="login">
        <div class="login_icon"></div>
        <div class="weui-cells" style="position: absolute;bottom: 86px">
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <img src="../../assets/images/phone_icon.png" alt="">
                </div>
                <div class="weui-cell__bd">
                    <input class="login_input" v-model="mobile" type="text" placeholder="请输入手机号">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <img src="../../assets/images/password_icon.png" alt="">
                </div>
                <div class="weui-cell__bd">
                    <input class="login_input" v-model="password" type="password" placeholder="请输入密码">
                </div>
            </div>
            <p class="login_btn" @touchend.prevent="loginClick()""></p>
        </div>
        <div class="login_box">
            <router-link to="/forget" tag="p" class="forget_btn" ></router-link>
            <router-link to="/register" tag="p" class="register_btn"></router-link>
        </div>
    </div>
</template>
<script>
export default {
    mixins: [window.mixin],
    data() {
        return {
            "pageName": "登陆",
            mobile:"",
            password:""
        }
    },
    mounted() {
    },
    methods:{
        loginClick(){
            let vue = this;
            vue.axios({
                method:"post",
                url: vue.$store.state.apiUrl.default+"login",
                params:{
                    mobile:vue.mobile+"",
                    password:vue.password+""
                },
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                    'X-Requested-With':'XMLHttpRequest'
                }
            }).then((result)=>{
                if(result.status === 200&&result.data.code === 0&&result.data.extra){
                    Object.assign(result.data.extra,{password:vue.password});
                    vue.$store.commit("loginData",result.data.extra);
                    vue.$store.commit("refreshCookie",{userName:result.data.extra.username});
                    vue.alertText("登录成功！",()=>{
                        vue.$router.push({path:"/"});
                    });
                }else if(result.status === 200){
                    vue.alertText(`登录失败:${result.data.message}！`);
                }
            }).catch((e) => {
                vue.alertText(`登录失败:请求错误${e}！`);
                }
            );
            /*this.$store.commit("refreshCookie",{userName:"test"});
            this.$router.push({path:"/"});*/
        }
    }
}
</script>
    <style>
        @import "../../assets/css/login.css";
    </style>