<template>
    <!--登陆组件-->
    <div id="login">
        <div class="login_icon"></div>
        <p class="login_detail">欢迎来到“爱习惯”习惯培养学校</p>
    </div>
</template>
<script>
export default {
    mixins: [window.mixin],
    data() {
        return {
            "pageName": "登陆"
        }
    }
}
</script>
    <style>
        @import "../../assets/css/login.css";
    </style>