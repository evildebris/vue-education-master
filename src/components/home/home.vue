<template>
    <!--个人中心组件-->
    <div id="self_manage">
        <div class="manage_info">
            <img class="userImg" :src="info.userImg">
            <p class="userName">{{info.name}}</p>
            <div class="userAction">
                <router-link to="/forget" tag="p">设置</router-link>
                <router-link to="/forget" tag="p">帮助</router-link>
                <router-link to="/forget" tag="p">反馈</router-link>
            </div>
            <div class="userInfo">
                <div v-for="(val, key) in info.data">{{key}}：<span>{{val}}</span></div>
            </div>
        </div>
        <section class="manage_detail">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </section>
    </div>
</template>
<script>
    import search from "../common/search"
    import msgItem from "../wechat/msg-item"
    export default {
        components: {
            search,
            msgItem
        },
        mixins: [window.mixin],
        data() {
            return {
                "pageName": "个人中心",
                info:{
                    userImg: "https://sinacloud.net/vue-wechat/images/headers/header01.png",
                    name:"default",
                    data:{
                        年级:"三年级",
                        等级:"35级",
                        经验:"1230",
                        能力值:"33"
                    }
                }
            }
        }
    }
</script>
<style>
    @import "../../assets/css/manage.css";
</style>
