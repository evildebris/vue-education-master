<template>
    <!--注册组件-->
    <div id="register">
        <header id="wx-header">
            <!--<div class="other"><span>添加朋友</span></div>-->
            <div class="center">
                <div class="iconfont icon-return-arrow" v-on:click="$router.back()">
                    <span>返回</span>
                </div>
                <span>注册</span>
            </div>
        </header>
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
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <i class="icon iconfont icon-password" style="color:#10aeff"></i>
                </div>
                <div class="weui-cell__bd">
                    <input class="login_input" type="text" placeholder="请再次输入密码">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <!--<i class="icon iconfont icon-password" style="color:#10aeff"></i>-->
                </div>
                <div class="weui-cell__bd">
                    <input class="login_input" type="text" placeholder="验证码">
                </div>
                <div class="weui-cell__ft">
                    <p class="weui-btn" >获取验证码</p>
                </div>
            </div>
            <p class="weui-btn" href="#" @click.prevent="next()">下一步</p>
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
            next(){
                console.log("login");
            }
        }
    }
</script>
<style>
    @import "../../assets/css/login.css";
</style>