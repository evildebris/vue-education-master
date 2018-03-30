<template>
    <!--个人中心组件-->
    <div id="money_manage">
        <div class="money_info">
            <div><span></span><span>剩余学习币:</span><span class="money_font">0</span></div>
            <div class="right_font" @click.prevent="charge()">充值</div>
        </div>
        <div class="money_title">交易记录</div>
        <ul class="money_list">
            <li v-for="val in records">
                <span class="left_font">{{val.operate}}</span>
                <span class="middle_font">{{val.date}}</span>
                <span class="right_font">{{val.money}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        /*components: {
        },*/
        mixins: [window.mixin],
        data() {
            return {
                "pageName": "学习币中心",
                records:[{operate:"充值",date:"2018-2-13",money:"+100"},{operate:"体力兑换",date:"2018-2-13",money:"+100"},{operate:"购买书桌",date:"2018-2-13",money:"+100"}]
            }
        },
        methods:{
            charge(){
                this.$router.push({path:"/money/stamina"});
            }
        }
    }
</script>
<style>
    @import "../../assets/css/manage.css";
</style>
