<template>
    <!--复用性非常高，涉及的动效也比较复杂-->
    <!--search-open 控制搜索框被激活时的动效、样式-->
  <div id="alertShadow" v-show="$store.state.alertStatus">
    <div class="alert">
      <div class="alert_header">{{this.$store.state.alertTitle}} <icon @click="closeHeader()"/> </div>
      <article>
          {{this.$store.state.alertContent}}
      </article>
        <p class="confirm_btn" @click="closeHeader()"></p>
    </div>
  </div>
</template>
<script>
    export default {
        name: "alert",
        data() {
            return {
                title: ""
            }
        },
        methods: {
            // wx-header 隐藏
            closeHeader() {
                if (this.$store.state.headerStatus) {
                    this.$store.commit('toggleAlertStatus', {status:false})
                }
            }
        }
    }
</script>
<style>
    @import "../../assets/css/alert.css";
</style>