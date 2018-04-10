<template>
    <!--同学组件-->
    <div id="student">
        <header id="wx-header">
            <!--<div class="other"><span>添加朋友</span></div>-->
            <div class="center">
                <div class="iconfont icon-return-arrow" v-on:click="$router.back()">
                </div>
                <span>同学列表</span>
            </div>
        </header>
        <div class="wx-body">
            <article class="time">
                <span>打游戏时间</span>
                <span>x天x小时</span>
            </article>
            <article class="student_list">
                <ul class=" table_title">
                    <li>昵称</li>
                    <li>性别</li>
                    <li>等级</li>
                    <li>经验值</li>
                    <li>能力值</li>
                    <li>身份</li>
                </ul>
                <ul v-for="item in students" class="table_cell">
                    <li v-for="val in item">{{val}}</li>
                </ul>
            </article>
        </div>
    </div>
</template>
<script>
    export default {
        /*components: {
        },*/
        mixins: [window.mixin],
        data() {
            return {
                "pageName": "同学列表",
                 students:[["XXX","男","100","1000","1000","无"],["XXX1","男","100","1000","1000","无"],["XXX2","男","100","1000","1000","无"]]
               }
        }
    }
</script>
<style>
    @import "../../assets/css/classes.css";
</style>
