<template>
    <!--帮助-->
    <div id="help">
        <header id="wx-header" class="home_header2">
            <div class="center">
                <div class="iconfont icon-return-arrow" v-on:click="$router.back()"></div>
                <span> 帮助 </span>
            </div>
        </header>
        <article class="help_block background_com">
            {{this.helpContent}}
        </article>
    </div>
</template>
<script>
    export default {
        mixins: [window.mixin],
        data() {
            return {
                    helpContent:"帮助信息：无"
                }
        },
        beforeMount(){
            this.post2('help',{access_token:this.$store.state.user.extra.access_token},(result)=>{
                if(result.data&&result.data.length){
                    debugger
                }
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
