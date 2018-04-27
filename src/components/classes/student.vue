<template>
    <!--同学组件-->
    <div id="student">
        <header id="wx-header" class="home_header">
            <!--<div class="other"><span>添加朋友</span></div>-->
            <div class="center">
                <div class="iconfont icon-return-arrow" v-on:click="$router.back()">
                </div>
                <span>同学列表</span>
            </div>
        </header>
        <div class="header_info">
            <div class="student_time box">
                <span class="time_bg">{{time.dd[0]}}</span><span class="time_bg">{{time.dd[1]}}</span><span class="time_font">天</span>
                <span class="time_bg">{{time.hh[0]}}</span><span class="time_bg">{{time.hh[1]}}</span><span class="time_font">时</span>
                <span class="time_bg">{{time.mm[0]}}</span><span class="time_bg">{{time.mm[1]}}</span><span class="time_font">分</span>
            </div>
            <p class="time_title">班委评选倒计时</p>
        </div>
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
                    <li class="num3"></li>
                </ul>
                <ul v-for="item in students" class="table_cell">
                    <li v-for="val in item">{{val}}</li>
                    <li class="num3"><p class="add_friend" @click.prevent="addFriend()"></p></li>
                </ul>
            </article>
        </div>
    </div>
</template>
<script>
    Date.prototype.format = function (format) {
        var args = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter
            "S": this.getMilliseconds()
        };
        if (/(y+)/.test(format))
            format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var i in args) {
            var n = args[i];
            if (new RegExp("(" + i + ")").test(format))
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? n : ("00" + n).substr(("" + n).length));
        }
        return format;
    };
    export default {
        /*components: {
        },*/
        mixins: [window.mixin],
        data() {
            return {
                "pageName": "同学列表",
                 time:{dd:"00",hh:"00",mm:"00"},
                 students:[["XXX","男","100","1000","1000","无"],["XXX1","男","100","1000","1000","无"],["XXX2","男","100","1000","1000","无"]]
               }
        },
        methods: {
            ShowCountDown(endDate, divname) {
                let now = new Date();
                let leftTime = endDate.getTime() - now.getTime();
                let dd = parseInt(leftTime / 1000 / 60 / 60 / 24, 10);//计算剩余的天数
                let hh = parseInt(leftTime / 1000 / 60 / 60 % 24, 10);//计算剩余的小时数
                let mm = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟数
                let ss = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数
                this.time.dd = this.checkTime(dd);
                this.time.hh = this.checkTime(hh);
                this.time.mm = this.checkTime(mm);
                this.time.ss = this.checkTime(ss);//小于10的话加0
            },
            checkTime(i) {
                if (i < 10) {
                    i = "0" + i;
                }
                return i;
            },
            addFriend(){

            }
        }
    }
</script>
