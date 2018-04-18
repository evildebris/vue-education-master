<template>
    <!--注册组件-->
    <div id="register">
        <header id="wx-header">
            <!--<div class="other"><span>添加朋友</span></div>-->
            <div class="center">
                <div class="iconfont icon-return-arrow" v-on:click="$router.back()">
                </div>
                <span> 注册 </span>
            </div>
        </header>
        <section v-show="!hasNext" id="first_part">
            <div class="register_icon"></div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/ShuRu.png" alt="">
                    </div>
                    <div class="weui-cell__bd">
                        <input class="login_input" v-model="msg.phone" type="text" placeholder="请输入手机号">
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/ShuRu.png" alt="">
                    </div>
                    <div class="weui-cell__bd">
                        <input class="login_input" v-model="msg.password" type="text" placeholder="请输入密码">
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/ShuRu.png" alt="">
                    </div>
                    <div class="weui-cell__bd">
                        <input class="login_input" v-model="msg.password2" type="text" placeholder="请再次输入密码">
                    </div>
                </div>
                <div class="weui-cell yan_zheng">
                    <div class="weui-cell__bd weui-cell">
                        <div class="weui-cell__hd">
                            <img src="../../assets/images/ShuRu.png" alt="">
                        </div>
                        <div class="weui-cell__bd">
                            <input class="login_input" v-model="msg.checkNum" type="text" placeholder="验证码">
                        </div>
                    </div>
                    <div class="weui-cell__ft">
                        <p class="weui-btn" >验证码</p>
                    </div>
                </div>
                <p class="next_btn"  @click.prevent="next()"></p>
            </div>
        </section>
        <section v-show="hasNext" id="second_part">
            <div class="register_icon2"></div>
            <input id="fileUpload" type="file" accept="image/*" @change="onFileChange($event)" style="display: none">
            <div class="head_icon">
                <label for="fileUpload">
                    <img :src="msg.userImg" alt="" >
                </label>
            </div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/ShuRu.png" alt="">
                    </div>
                    <div class="weui-cell__bd">
                        <input class="login_input" type="text" placeholder="孩子昵称">
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/ShuRu.png" alt="">
                    </div>
                    <div class="weui-cell__bd">
                        <input class="login_input" type="text" placeholder="出生日期">
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/ShuRu.png" alt="">
                    </div>
                    <div class="weui-cell__bd">
                        <input class="login_input" type="text" placeholder="真实姓名">
                    </div>
                </div>
                <p class="confirm_btn"  @click.prevent="confirm()"></p>
            </div>
        </section>
    </div>

</template>
<script>
    export default {
        mixins: [window.mixin],
        data() {
            return {
                "pageName": "注册",
                hasNext:true,
                msg:{
                    phone:"",
                    password:"",
                    password2:"",
                    checkNum:"",
                    userImg:""
                }
            }
        },
        mounted() {

        },
        methods:{
            next(){
                let phoneReg = /^1[3|4|5|7|8|9][0-9]{9}$/;
                let isRight = this.msg.phone&&phoneReg.test(this.msg.phone),content="";
                if(!isRight){
                    content = "输入手机号码错误！";
                }
                isRight =isRight && this.msg.password === this.msg.password&& this.msg.password!="";
                if(!isRight){
                    content = "密码错误！";
                }
                //this.hasNext = true;
            },
            confirm(e){

            },
            onFileChange(e){
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length) return;
                let reader = new window.FileReader(),vm=this;
                reader.readAsDataURL(files[0]);
                reader.onload = function (e) {
                    vm.msg.userImg=e.target.result;
                }
            }
        }
    }
</script>
<style>
    @import "../../assets/css/login.css";
</style>