<template>
    <!--注册组件-->
    <div id="info">
        <p class="info_detail" style="margin-top: 100px">著名教育家叶圣陶说：教育就是培养习惯</p>
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
    </div>
</template>
<script>
    export default {
        mixins: [window.mixin],
        data() {
            return {
                "pageName": "注册"
            }
        },
        mounted() {

        },
        methods:{
            loginClick(){
                console.log("login");
            }
        }
    }
</script>
<style>
    @import "../../assets/css/login.css";
</style>