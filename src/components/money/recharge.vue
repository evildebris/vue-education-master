<template>
    <!--个人中心组件-->
    <div id="recharge">
        <header id="wx-header">
            <!--<div class="other"><span>添加朋友</span></div>-->
            <div class="center">
                <div class="iconfont icon-return-arrow" v-on:click="$router.back()">
                </div>
                <span>学习币中心</span>
            </div>
        </header>
        <div class="money_info">
            <div><span></span><span>剩余学习币:</span><span class="money_font">0</span></div>
            <div class="right_font">充值</div>
        </div>
        <div class="recharge_btn">立即充值</div>

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
        }
    }
</script>
<style>
    @import "../../assets/css/manage.css";
</style>
