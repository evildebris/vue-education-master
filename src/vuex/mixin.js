    //起初利用混合 mixin+vuex 动态设置页面标题+动态设置前一页页面名字
    const mixin = {
        mounted() {
            this.$store.commit("setPageName", this.pageName)
                // console.log('全局混合mounted')
        },
        methods:{
            alertText(text){
                if(!this.$store.state.alertStatus) {
                    this.$store.commit('toggleAlertStatus', {status: true, text})
                }
            }
        },
        activated() {
            this.$store.commit("setPageName", this.pageName)
                // console.log('全局混合activated')
        }
    }
    export default mixin