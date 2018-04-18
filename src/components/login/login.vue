<template>
    <!--登陆组件-->
    <div id="login">
        <div class="login_icon"></div>
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <img src="../../assets/images/phone_icon.png" alt="">
                </div>
                <div class="weui-cell__bd">
                    <input class="login_input" type="text" placeholder="请输入手机号">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <img src="../../assets/images/password_icon.png" alt="">
                </div>
                <div class="weui-cell__bd">
                    <input class="login_input" type="password" placeholder="请输入密码">
                </div>
            </div>
            <a class="login_btn" href="#" @click.prevent="loginClick()"></a>
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
            "pageName": "登陆"
        }
    },
    mounted() {
    },
    methods:{
        loginClick(){
            console.log("login");
            this.$store.commit("refreshCookie",{userName:"test"});
            this.$router.push({path:"/"});
        }
    }
}
</script>
    <style>
        @import "../../assets/css/login.css";
    </style>