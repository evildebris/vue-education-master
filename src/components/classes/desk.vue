<template>
    <!--个人中心组件-->
    <div id="desk">
        <header id="wx-header" class="home_header2">
            <div class="center">
                <div class="iconfont icon-return-arrow" v-on:click="$router.back()"></div>
                <span> {{$store.state.user.extra.grade}}年级{{$store.state.user.extra.clazz}}班 </span>
            </div>
        </header>
        <div class="header_info">
            <div class="user_bg">
                <img class="userImg" :src="$store.state.info.userImg">
            </div>
            <div class="detail2">
                <div>体力：<span>{{$store.state.user.extra.phy}}</span></div>
                <div>经验值：<span>{{$store.state.user.extra.exp}}</span></div>
                <div>等级：<span>{{$store.state.user.extra.level}}</span></div>
                <div>能力值：<span>{{$store.state.user.extra.cap}}</span></div>
                <div>身份：<span>{{role}}</span></div>
            </div>
        </div>
        <article>
            <div class="classes_btns">
                <div class="leftBtn" style="float: right">督促</div>
            </div>
            <div class="desk">
                <p class="desk_info">标兵书桌</p>
                <div class="desk_img"></div>
                <div class="classes_btns" style="width: 90%;margin-left: 5%;">
                    <p class="ZB_btn" @click.prevent="changeDesk()"></p>
                    <p class="add_friend"></p>
                </div>
            </div>
        </article>
        <div id="alertShadow" v-show="isShadow" @click.self="hideShadow()">
            <div class="desk_buy">

                <ul class="dialog_bd">
                    <li>
                        <div class="xueBa1">
                            <p class="zhuangBan"></p>
                        </div>
                        <p class="btn_buy"></p>
                    </li>
                    <li>
                        <div class="xueBa2">
                            <p class="zhuangBan"></p>
                        </div>
                        <p class="btn_buy"></p>
                    </li>
                    <li>
                        <div class="xueBa3">
                            <p class="zhuangBan"></p>
                        </div>
                        <p class="btn_buy"></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        mixins: [window.mixin],
        data() {
            return {
                isShadow:false,
                "pageName": "X年X班",
                 tables:[Array.from({length:6}),Array.from({length:6}),Array.from({length:6}),Array.from({length:6}),Array.from({length:6}),Array.from({length:6}),Array.from({length:6}),Array.from({length:6})],
                 tasks:{"XXX":false,"XXXXXXX":false,"www":true}
                }
        },
        activated() {
            this.post2('api/get_my_desk',{access_token:this.$store.state.user.extra.access_token},(result)=>{
                this.$store.commit('updateExtra', result.data);
            })
        },
        methods:{
            charge(){
                this.$router.push({path:"/money/stamina"});
            },
            hideShadow(){
                this.isShadow = false;
            },
            changeDesk(){
                this.isShadow = true;
            }
        },
        computed:{

        }
    }
</script>
