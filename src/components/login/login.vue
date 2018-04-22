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
            <p class="login_btn" @click.prevent="loginClick()""></p>
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
            this.axios.get(this.$store.state.apiUrl.default+"login",{
                params:{
                    mobile:this.mobile,
                    password:this.password
                }
            }).then((result)=>{
                debugger
                if(result.status === 200&&result.data.code === 0){
                    this.alertText("登录成功！");
                }
            },(e)=>{
                debugger
                this.alertText("登录接口申请失败！");
            });
            /*this.$store.commit("refreshCookie",{userName:"test"});
            this.$router.push({path:"/"});*/
        }
    }
}
</script>
    <style>
        @import "../../assets/css/login.css";
    </style>