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
        <!--第一步-->
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
                        <input class="login_input" v-model="msg.password" type="password" placeholder="请输入密码">
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/ShuRu.png" alt="">
                    </div>
                    <div class="weui-cell__bd">
                        <input class="login_input" v-model="msg.password2" type="password" placeholder="请再次输入密码">
                    </div>
                </div>
                <div class="weui-cell yan_zheng">
                    <div class="weui-cell__bd weui-cell">
                        <div class="weui-cell__hd">
                            <img src="../../assets/images/ShuRu.png" alt="">
                        </div>
                        <div class="weui-cell__bd">
                            <input class="login_input" style="width: 100%" v-model="msg.checkNum" type="text" placeholder="验证码">
                        </div>
                    </div>
                    <div class="weui-cell__ft">
                        <p class="weui-btn" >验证码</p>
                    </div>
                </div>
                <p class="next_btn"  @click.prevent="next()"></p>
            </div>
        </section>
        <!--第二步-->
        <section v-show="hasNext" id="second_part">

            <div class="register_icon2"></div>

            <!--头像-->
            <input id="fileUpload" type="file" accept="image/*" @change="onFileChange($event)" style="display: none">
            <label class="head_icon" for="fileUpload">
                <img :src="msg.userImg" alt="" >
            </label>
            <p class="head_icon_detail">点击图标，上传头像</p>
            <div class="box sex_select">
                <div @click="sexSelect(1)" :class="{male:true,active:msg.sex===1,floatBox:true}"><div/><p>男孩</p></div>
                <div @click="sexSelect(2)" :class="{female:true,active:msg.sex===2,floatBox:true}"><div/><p>女孩</p></div>
            </div>


            <div class="weui-cells" style="margin-top: 5px;">
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/ShuRu.png" alt="">
                    </div>
                    <div class="weui-cell__bd">
                        <input class="login_input" v-model="msg.nickname" type="text" placeholder="孩子昵称">
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/ShuRu.png" alt="">
                    </div>
                    <div class="weui-cell__bd">
                        <input class="login_input" v-model="msg.birth" type="text" placeholder="出生日期">
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <img src="../../assets/images/ShuRu.png" alt="">
                    </div>
                    <div class="weui-cell__bd">
                        <input class="login_input" v-model="msg.name" type="text" placeholder="真实姓名">
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
                hasNext:false,
                msg:{
                    phone:"",
                    password:"",
                    password2:"",
                    checkNum:"",
                    userImg:"",
                    sex:1,
                    name:"",
                    nickname:"",
                    birth:""
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
                    this.alertText(content);
                    return;
                }
                isRight =isRight && this.msg.password === this.msg.password&& this.msg.password!="";
                if(!isRight){
                    content = "密码错误！";
                    this.alertText(content);
                    return;
                }
                this.hasNext = true;
            },
            confirm(e){
                if(this.msg.name==""){
                    this.alertText("姓名不能为空！");
                    return;
                }else if(this.msg.nickname==""){
                    this.alertText("昵称不能为空！");
                    return;
                }
                let result ={
                    mobile:this.msg.phone,
                    code:this.msg.checkNum,
                    password:this.msg.password,
                    sex:this.msg.sex,
                    birth:this.msg.checkNum,
                    name:this.msg.name,
                    nickname:this.msg.nickname,
                }
                this.axios({
                    method:"post",
                    url: this.$store.state.apiUrl.default+"register",
                    params:result
                    ,headers: {
                        'Content-type': 'application/x-www-form-urlencoded',
                        'X-Requested-With':'XMLHttpRequest'
                    }
                }).then((result)=>{
                    if(result.status === 200&&result.data.code === 0){
                        this.alertText("注册成功！",()=>{
                            this.$router.push({path:"/login"});
                        });
                    }else if(result.status === 200){
                        this.alertText(`注册失败:${result.data.message}！`);
                    }
                },(e)=>{
                    this.alertText("注册失败！");
                });
            },
            sexSelect(sex){
                if(this.msg.sex !==sex)this.msg.sex =sex;
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