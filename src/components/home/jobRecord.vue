<template>
    <!--个人中心组件-->
    <div id="jobRecord">
        <header id="wx-header" class="home_header2">
            <div class="center">
                <div class="iconfont icon-return-arrow" v-on:click="$router.back()"></div>
                <span> 任务记录 </span>
            </div>
        </header>
        <div class="line"></div>
        <ul class="list background_com">
            <li v-for="item in records">
                <div class="record_time">2018-02-28 14:20</div>
                <div  class="job3">
                    <div class="floatBox">
                        <div class="job_text">
                            <div class="job_title">习惯任务：<span>{{item.title}}</span></div>
                        </div>
                    </div>
                    <div class="box job_info">
                        <div><p class="tili">{{item.tili}}</p><span>体力</span></div>
                        <div><p class="xiMoney">{{item.xiMoney}}</p><span>能力值</span></div>
                        <div><p class="power">{{item.power}}</p><span>经验值</span></div>
                        <div><p class="exp">{{item.experience}}</p><span>习惯币</span></div>
                    </div>
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
                records:[{title:"早起读英语",content:'每天早上7点准时读英语，半小时， 记单词10个，读课文两篇。',tili:"-15",xiMoney:"+15",power:"+10",experience:"+5",isAdd:true},{title:"早起读英语",content:'每天早上7点准时读英语，半小时， 记单词10个，读课文两篇。',tili:"-15",xiMoney:"+10",power:"+10",experience:"+5",isAdd:true}]
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
