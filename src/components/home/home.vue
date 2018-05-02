<template>
    <!--个人中心组件-->
    <div id="self_manage">
        <header id="wx-header" class="header home_header">
            <div class="center">
                <span> 个人中心 </span>
            </div>
        </header>
        <div class="manage_info">
            <div class="user_bg">
                <img class="userImg" :src="$store.state.info.userImg">
            </div>
            <p class="userName">{{$store.state.user.extra.nickname}}</p>
            <div class="userAction">
                <router-link to="/" tag="p"><div class="manage_icon"></div></router-link>
                <router-link to="/home/help" tag="p"><div class="help_icon"></div></router-link>
                <router-link to="/" tag="p"><div class="response_icon"></div></router-link>
            </div>
            <div class="userInfo">
                <div>等级：<span>{{$store.state.user.extra.level}}</span></div>
                <div>经验：<span>{{$store.state.user.extra.exp}}</span></div>
                <div>能力：<span>{{$store.state.user.extra.cap}}</span></div>
            </div>
            <ul class="floatBox user_info_list">
                <li class="stamina"><p>{{$store.state.user.extra.phy}}</p></li>
                <li class="info_money"><p>{{$store.state.user.extra.bitxi}}</p></li>
            </ul>
        </div>
        <section class="manage_center">
            <div class="manage_detail">
                <router-link class="classes new" to="/classes/index" tag="div"><p>{{$store.state.user.extra.grade}}年级{{$store.state.user.extra.clazz}}班</p></router-link>
                <router-link class="stamina" to="/money" tag="div"><p>学习币中心</p></router-link>
                <router-link class="kezhuo" to="/classes/desk" tag="div"><p>课桌</p></router-link>
                <router-link class="friend" to="/home/friend" tag="div"><p>好友</p></router-link>
            </div>
        </section>
        <footer class="app-footer">
            <nav class="home_footer">
                <div>
                    <router-link class="btn DT" to="/classes/student" tag="div"><p>动态</p></router-link>
                </div><div>
                <router-link class="btn JL" to="/home/awardRecord" tag="div"><p>奖励记录</p></router-link>
            </div><div>
                <router-link class="btn RW" to="/home/jobRecord" tag="div"><p>任务记录</p></router-link>
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
        mounted(){
            this.post2('api/list_my_clazz_users',{access_token:this.$store.state.user.extra.access_token},(result)=>{
                this.$store.commit('setClazz', result.data)
            })
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
