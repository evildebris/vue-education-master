<template>
    <!--个人中心组件-->
    <div id="self_manage">
        <header id="wx-header" class="home_header">
            <div class="center">
                <span> 个人中心 </span>
            </div>
        </header>
        <div class="manage_info">
            <div class="user_bg">
                <img class="userImg" :src="$store.state.info.userImg">
            </div>
            <p class="userName">{{$store.state.info.name}}</p>
            <div class="userAction">
                <router-link to="/" tag="p"><div class="manage_icon"></div></router-link>
                <router-link to="/" tag="p"><div class="help_icon"></div></router-link>
                <router-link to="/" tag="p"><div class="response_icon"></div></router-link>
            </div>
            <div class="userInfo">
                <div v-for="(val, key) in $store.state.info.data">{{key}}：<span>{{val}}</span></div>
            </div>
            <ul class="floatBox" style="height: 40px">
                <li class="stamina"><p>{{$store.state.info.data2.stamina}}</p></li>
                <li class="info_money"><p>{{$store.state.info.data2.XiGuanBi}}</p></li>
            </ul>
        </div>
        <section class="manage_detail">
            <router-link class="classes new" to="/classes" tag="div"><p>三年级18班</p></router-link>
            <router-link class="stamina" to="/money" tag="div"><p >学习币中心</p></router-link>
            <div class="kezhuo"><p>课桌</p></div>
            <div class="friend"><p>好友</p></div>
        </section>
        <footer class="app-footer">
            <nav class="home_footer">
                <div>
                    <router-link class="btn DT" to="/classes/student" tag="div"><p>动态</p></router-link>
                </div><div>
                <router-link class="btn JL" to="/money" tag="div"><p>奖励记录</p></router-link>
            </div><div>
                <router-link class="btn RW" to="/money" tag="div"><p>任务记录</p></router-link>
            </div><div>
                <router-link class="btn FX" to="/money" tag="div"><p>分享</p></router-link>
            </div>
            </nav>
        </footer>
    </div>
</template>
<script>
    export default {
        /*components: {
        },*/
        mixins: [window.mixin],
        data() {
            return {
                "pageName": "个人中心"
            }
        },
        computed:{
            infoData(){
                return this.$store.state.info.data;
            },
            infoName(){
                return this.$store.state.info.name;
            }
        }
    }
</script>
<style>
    @import "../../assets/css/manage.css";
</style>
