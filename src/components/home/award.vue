<template>
    <!--个人中心组件-->
    <div id="award">
        <header id="wx-header" class="home_header2">
            <div class="center">
                <div class="iconfont icon-return-arrow" v-on:click="$router.back()"></div>
                <span> 奖励记录 </span>
            </div>
        </header>
        <ul class="header_tab box">
            <li><p class="NiCheng"></p><!--<p>昵称</p>--></li>
            <li> <p class="level"></p><!--<p>等级</p>--></li>
            <li><p class="NengLi"> </p><!--<p>能力值</p>--></li>
            <li><p class="ShenFen"> </p><!--<p>身份</p>--></li>
            <li><p class="BanJi"></p><!--<p>所在班级</p>--></li>
        </ul>
        <ul class="list background_com">
            <li v-for="item in tasks" class="job">
                <div class="box job_info">
                    <div>{{item.nickname}}</div>
                    <div>{{item.level}}</div>
                    <div>{{item.cap}}</div>
                    <div>{{$store.state.user.roleMap[item.role]}}</div>
                    <div>{{item.grade+"年"+item.clazz+"班"}}</div>
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
                friends:[],
                 tasks:[{title:"早起读英语",content:'每天早上7点准时读英语，半小时， 记单词10个，读课文两篇。',tili:"-15",xiMoney:"+10",power:"+10",experience:"+5",isAdd:true},{title:"早起读英语",content:'每天早上7点准时读英语，半小时， 记单词10个，读课文两篇。',tili:"-15",xiMoney:"+10",power:"+10",experience:"+5",isAdd:true}]
                }
        },
        beforeMount(){
            /*this.post2('api/list_my_friend',{access_token:this.$store.state.user.extra.access_token},(result)=>{
                this.friends = result.data;
            })*/
        },
        mounted(){
        },
        methods:{
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
