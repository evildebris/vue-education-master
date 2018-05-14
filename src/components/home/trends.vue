<template>
    <!--个人中心组件-->
    <div id="trends">
        <header id="wx-header" class="home_header2">
            <div class="center">
                <div class="iconfont icon-return-arrow" v-on:click="$router.back()"></div>
                <span> 动态 </span>
            </div>
        </header>
        <ul class="header_tab box">
            <li :class="{active:tabList.tab1}" @click.prevent="clickTab('tab1')">监督消息</li>
            <li :class="{active:tabList.tab2}" @click.prevent="clickTab('tab2')">好友请求</li>
            <li :class="{active:tabList.tab3}" @click.prevent="clickTab('tab3')">班级消息</li>
        </ul>
        <ul class="list background_com" style="height: calc(100% - 100px);">
            <li v-for="item in tasks" class="job3">
                <div class="floatBox">
                    <div class="job_text">
                        <div class="job_title">{{typeMap[item.type]}}</div>
                    </div>
                </div>
                <div class="job_info">
                    <div v-if="item.type===1">
                        <p>
                            <span>xxx</span>同学申请加好友,是否同意？
                        </p>
                        <div class="ok_btn" @click.prevent="addFriend()"></div>
                        <div class="cancel_btn" @click.prevent="rejectFriend()"></div>
                    </div>
                    <p v-else-if="item.type===2">
                        {{item.content}}
                    </p>
                    <p v-else-if="item.type===3">
                        {{item.content}}
                    </p>
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
                tabList:{tab1:true,tab2:false,tab3:false},
                friends:[],
                typeMap:{1:"好友请求",2:"班干部监督",3:"系统消息"},
                 tasks:[{title:"早起读英语",content:'每天早上7点准时读英语，半小时， 记单词10个，读课文两篇。',tili:"-15",xiMoney:"+10",power:"+10",experience:"+5",isAdd:true,type:1},
                     {title:"早起读英语",content:'每天早上7点准时读英语，半小时， 记单词10个，读课文两篇。',tili:"-15",xiMoney:"+10",power:"+10",experience:"+5",isAdd:true,type:2},
                     {title:"早起读英语",content:'每天早上7点准时读英语，半小时， 记单词10个，读课文两篇。',tili:"-15",xiMoney:"+10",power:"+10",experience:"+5",isAdd:true,type:3}]
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
            },
            addFriend(){},
            rejectFriend(){}
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
