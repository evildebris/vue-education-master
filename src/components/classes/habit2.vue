<template>
    <!--个人中心组件-->
    <div id="habit">
        <header id="wx-header" class="home_header2">
            <div class="center">
                <div class="iconfont icon-return-arrow" v-on:click="$router.back()"></div>
                <span> {{$store.state.user.extra.grade}}年级{{$store.state.user.extra.clazz}}班 </span>
            </div>
        </header>
        <ul class="header_tab box">
            <li :class="{active:tabList.tab1}" @click.prevent="clickTab('tab1')">学习</li>
            <li :class="{active:tabList.tab2}" @click.prevent="clickTab('tab2')">心里</li>
            <li :class="{active:tabList.tab3}" @click.prevent="clickTab('tab3')">品德</li>
            <li :class="{active:tabList.tab4}" @click.prevent="clickTab('tab4')">品德</li>
            <li :class="{active:tabList.tab5}" @click.prevent="clickTab('tab5')"><p class="gengDuo"></p></li>
        </ul>
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
                "pageName": "",
                refreshNum:0,
                tabList:{tab1:true,tab2:false,tab3:false,tab4:false,tab5:false,},
                isNext:false,
                 tasks:[{title:"早起读英语",content:'每天早上7点准时读英语，半小时， 记单词10个，读课文两篇。',tili:"-15",xiMoney:"+10",power:"+10",experience:"+5",isAdd:false},{title:"早起读英语",content:'每天早上7点准时读英语，半小时， 记单词10个，读课文两篇。',tili:"-15",xiMoney:"+10",power:"+10",experience:"+5",isAdd:false}]
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
            next(){
                this.isNext = false;
            },
            addJob(){},
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
