<template>
    <!--个人中心组件-->
    <div id="habit">
        <header id="wx-header" class="home_header2">
            <div class="center">
                <div class="iconfont icon-return-arrow" v-on:click="$router.back()"></div>
                <span> {{$store.state.user.extra.grade}}年级{{$store.state.user.extra.clazz}}班 </span>
            </div>
        </header>
        <div class="header_info">
            <div class="user_bg">
                <img class="userImg" :src="$store.state.info.userImg">
            </div>
            <div class="detail">
                <div>体力：<span>{{$store.state.user.extra.phy}}</span></div>
                <div>经验值：<span>{{$store.state.user.extra.exp}}</span></div>
                <div>等级：<span>{{$store.state.user.extra.level}}</span></div>
                <div>能力值：<span>{{$store.state.user.extra.cap}}</span></div>
            </div>
        </div>
        <div class="classes_btns">
            <div class="leftBtn">身份:<span>{{role}}</span></div>
            <div class="rightBtn">添加 <router-link class="add_job" tag="p" to="/classes/habit/habit2"></router-link></div>
        </div>
        <ul class="job_list">
            <li v-for="item in tasks" class="job">
                <div class="floatBox">
                    <div class="job_text">
                        <div class="job_title">习惯任务:<span>{{item.title}}</span></div>
                        <div class="job_content">{{item.content}}</div>
                    </div>
                    <div class="job_btn"><p :class="[item.isAdd?'over_btn':'add_btn']"></p></div>
                </div>
                <div class="box job_info">
                    <div><p class="tili">{{item.tili}}</p></div>
                    <div><p class="xiMoney">{{item.xiMoney}}</p></div>
                    <div><p class="power">{{item.power}}</p></div>
                    <div><p class="exp">{{item.experience}}</p></div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        mixins: [window.mixin],
        data() {
            return {
                isShadow:false,
                "pageName": "",
                refreshNum:0,
                 tasks:[{title:"早起读英语",content:'每天早上7点准时读英语，半小时， 记单词10个，读课文两篇。',tili:"-15",xiMoney:"+10",power:"+10",experience:"+5",isAdd:true},{title:"早起读英语",content:'每天早上7点准时读英语，半小时， 记单词10个，读课文两篇。',tili:"-15",xiMoney:"+10",power:"+10",experience:"+5",isAdd:true}]
                }
        },
        beforeMount(){
        },
        mounted(){
        },
        activated() {
            if(this.myIdx === 0)
                this.alertText(`我是${this.$store.state.user.extra.grade}年级${this.$store.state.user.extra.clazz}班班主任，欢迎您 加入本班，请先选择你喜欢的座位， 一旦选定座位就不能再改了。`);
            else {
                this.post2('api/list_my_clazz_users',{access_token:this.$store.state.user.extra.access_token},(result)=>{
                    this.$store.commit('setClazz', result.data);
                    this.refreshList();
                })
            }
        },
        methods:{
            charge(){
                this.$router.push({path:"/money/stamina"});
            },
            hideShadow(){
                this.isShadow = false;
            },
            addJob(){}
        },
        computed:{
            myIdx(){
                return this.$store.state.user.extra.idx;
            }
        }
    }
</script>
<style>

</style>
