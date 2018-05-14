<template>
    <!--个人中心组件-->
    <div id="award">
        <header id="wx-header" class="home_header2">
            <div class="center">
                <div class="iconfont icon-return-arrow" v-on:click="$router.back()"></div>
                <span> 奖励 </span>
            </div>
        </header>
        <ul class="header_tab box">
            <li :class="{active:tabList.tab1}" @click.prevent="clickTab('tab1')">学习</li>
            <li :class="{active:tabList.tab2}" @click.prevent="clickTab('tab2')">心里</li>
            <li :class="{active:tabList.tab3}" @click.prevent="clickTab('tab3')">品德</li>
            <li :class="{active:tabList.tab4}" @click.prevent="clickTab('tab4')">品德</li>
            <li :class="{active:tabList.tab5}" @click.prevent="clickTab('tab5')"><p class="gengDuo"></p></li>
        </ul>
        <ul class="list background_com" style="height: calc(100% - 100px);">
            <li v-for="item in tasks" class="job4">
                <div class="floatBox">
                    <div class="job_text">
                        <div class="job_title">奖励名称：<span>{{item.title}}</span></div>
                    </div>
                </div>
                <div class="job_info">
                    <p>消耗习惯币<span>{{item.xiMoney}}</span></p>
                </div>
                <div class="rightBox">
                    <div></div>
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
                tabList:{tab1:true,tab2:false,tab3:false,tab4:false,tab5:false,},
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
            clickTab(tab){
                for(let t in this.tabList){
                    this.tabList[t] = false;
                }
                this.tabList[tab]!==true&&(this.tabList[tab] = true)
            }
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
