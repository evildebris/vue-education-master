<template>
    <!--个人中心组件-->
    <div id="friend">
        <header id="wx-header" class="home_header2">
            <div class="center">
                <div class="iconfont icon-return-arrow" v-on:click="$router.back()"></div>
                <span> 好友列表 </span>
            </div>
        </header>
        <ul class="header_tab box">
            <li><p class="NiCheng"></p><!--<p>昵称</p>--></li>
            <li> <p class="level"></p><!--<p>等级</p>--></li>
            <li><p class="NengLi"> </p><!--<p>能力值</p>--></li>
            <li><p class="ShenFen"> </p><!--<p>身份</p>--></li>
            <li><p class="BanJi"></p><!--<p>所在班级</p>--></li>
        </ul>
        <ul class="list background_com" style="height: calc(100% - 130px);">
            <li v-for="item in friends" class="job">
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
                friends:[]
            }
        },
        beforeMount(){
            this.post2('api/list_my_friend',{access_token:this.$store.state.user.extra.access_token},(result)=>{
                this.friends = result.data;
            })
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
