<template>
    <!--登陆组件-->
    <div id="login">
        <div class="login_icon"></div>
        <p class="info_detail">欢迎来到“爱习惯”习惯培养学校</p>
        <p class="info_detail login_detail2">90天帮助孩子养成好习惯</p>
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <i class="icon iconfont icon-denglu" style="color:#10aeff"></i>
                </div>
                <div class="weui-cell__bd">
                    <input class="login_input" type="text" placeholder="请输入手机号">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <i class="icon iconfont icon-password" style="color:#10aeff"></i>
                </div>
                <div class="weui-cell__bd">
                    <input class="login_input" type="text" placeholder="请输入密码">
                </div>
            </div>
            <a class="weui-btn" href="#" @click.prevent="loginClick()">登录</a>
        </div>
        <div class="login_box">
            <router-link to="/forget" tag="p">忘记密码</router-link>
            <router-link to="/register" tag="p">立即注册</router-link>
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