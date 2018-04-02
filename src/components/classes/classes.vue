<template>
    <!--个人中心组件-->
    <div id="classes">
        <div class="header_info">
            <i class="icon iconfont icon-denglu" style="color:#10aeff"></i>
            <div class="detail">
                <div v-for="(val, key) in $store.state.info.data">{{key}}：<span>{{val}}</span></div>
            </div>
        </div>
        <div class="classes_btns">
            <div class="leftBtn"><i class="icon iconfont icon-denglu" style="color:#FAEFD0"></i>督促</div>
            <div class="rightBtn">动态</div>
        </div>
        <div class="tables">
            <div class="row" v-for="rows in tables">
                <div v-for="(val,index) in rows" :class="[(Math.ceil(index/2)-parseInt(index/2))>0?'table end':'table']">
                    <div></div>
                </div>
            </div>
        </div>
        <div class="table_teacher">

        </div>
        <footer class="app-footer">
            <nav class="classes_footer">
                <div>
                    <router-link class="btn" to="/money" tag="div">同学</router-link>
                </div><div>
                    <router-link class="btn" to="/money" tag="div">习惯任力</router-link>
                </div><div>
                    <router-link class="btn" to="/money" tag="div">简历</router-link>
                </div><div>
                    <router-link class="btn" to="/money" tag="div">留言脚</router-link>
                </div>
            </nav>
        </footer>
    </div>
</template>
<script>
    export default {
        mixins: [window.mixin],
        data() {
            return {
                "pageName": "X年X班",
                 tables:[Array.from({length:6}),Array.from({length:6}),Array.from({length:6}),Array.from({length:6}),Array.from({length:6}),Array.from({length:6}),Array.from({length:6}),Array.from({length:6})]
                }
        },
        methods:{
            charge(){
                this.$router.push({path:"/money/stamina"});
            }
        },
        computed:{

        }
    }
</script>
<style>
    @import "../../assets/css/classes.css";
</style>
