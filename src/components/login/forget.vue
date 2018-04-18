<template>
    <!--注册组件-->
    <div id="register">
        <header id="wx-header">
            <!--<div class="other"><span>添加朋友</span></div>-->
            <div class="center">
                <div class="iconfont icon-return-arrow" v-on:click="$router.back()">

                </div>
                <span> 忘记密码 </span>
            </div>
        </header>
        <div class="register_icon"></div>
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <img src="../../assets/images/ShuRu.png" alt="">
                </div>
                <div class="weui-cell__bd">
                    <input class="login_input" type="text" placeholder="请输入手机号">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <img src="../../assets/images/ShuRu.png" alt="">
                </div>
                <div class="weui-cell__bd">
                    <input class="login_input" type="text" placeholder="请输入密码">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <img src="../../assets/images/ShuRu.png" alt="">
                </div>
                <div class="weui-cell__bd">
                    <input class="login_input" type="text" placeholder="请再次输入密码">
                </div>
            </div>
            <div class="weui-cell yan_zheng">
                <div class="weui-cell__bd weui-cell">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/ShuRu.png" alt="">
                    </div>
                    <div class="weui-cell__bd">
                        <input class="login_input" type="text" placeholder="验证码">
                    </div>
                </div>
                <div class="weui-cell__ft">
                    <p class="weui-btn" >验证码</p>
                </div>
            </div>
            <p class="confirm_btn"  @click.prevent="confirm()"></p>
        </div>
    </div>
</template>
<script>
    export default {
        mixins: [window.mixin],
        data() {
            return {
                "pageName": "忘记密码"
            }
        },
        methods:{
            confirm(){
            }
        }
    }
</script>
<style>
    @import "../../assets/css/login.css";
</style>