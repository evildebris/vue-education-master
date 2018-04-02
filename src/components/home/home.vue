<template>
    <!--个人中心组件-->
    <div id="self_manage">
        <div class="manage_info">
            <img class="userImg" :src="$store.state.info.userImg">
            <p class="userName">{{$store.state.info.name}}</p>
            <div class="userAction">
                <router-link to="/forget" tag="p">设置</router-link>
                <router-link to="/forget" tag="p">帮助</router-link>
                <router-link to="/forget" tag="p">反馈</router-link>
            </div>
            <div class="userInfo">
                <div v-for="(val, key) in $store.state.info.data">{{key}}：<span>{{val}}</span></div>
            </div>
        </div>
        <section class="manage_detail">
            <div><router-link to="/money" tag="p">学习币中心</router-link></div>
            <div><router-link to="/classes" tag="p">X年X班</router-link></div>
            <div></div>
            <div></div>
        </section>
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
