    //起初利用混合 mixin+vuex 动态设置页面标题+动态设置前一页页面名字
    const mixin = {
        mounted() {
            this.$store.commit("setPageName", this.pageName)
            // console.log('全局混合mounted')
        },
        methods: {
            alertText(text, callback) {
                if (!this.$store.state.alertStatus) {
                    this.$store.commit('toggleAlertStatus', {status: true, text, callback})
                }
            },
            refreshLoginData(){
                if(this.access_token) {
                    this.post2("login", {mobile:this.$store.state.user.extra.mobile,password:this.$store.state.user.extra.password},(result)=>{
                        Object.assign(result.extra,{password:this.$store.state.user.extra.password});
                        this.$store.commit("loginData",result.extra);
                        //this.$store.commit("refreshCookie",{userName:result.extra.username});
                    })
                }
            },
            post1(url, params, title, callBack) {
                this.axios({
                    method: "post",
                    url: this.$store.state.apiUrl.default + url,
                    params: params
                    , headers: {
                        'Content-type': 'application/x-www-form-urlencoded',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }).then((result) => {
                    if (result.status === 200 && result.data.code === 0) {
                        this.alertText(`${title}成功！`, () => {
                            callBack(result.data);
                        });
                    } else if (result.status === 200) {
                        this.alertText(`${title}失败:${result.data.message}！`);
                    }
                }, (e) => {
                    this.alertText(`${title}失败！`);
                });
            },
            post2(url, params, callBack) {
                this.axios({
                    method: "post",
                    url: this.$store.state.apiUrl.default + url,
                    params: params
                    , headers: {
                        'Content-type': 'application/x-www-form-urlencoded',
                        'X-Requested-With': 'XMLHttpRequest'
                    }
                }).then((result) => {
                    if (result.status === 200 && result.data.code === 0) {
                        callBack(result.data);
                    } else if (result.status === 200) {
                        console.error(`${this.$store.state.apiUrl.default + url}失败:${result.data.message}！`);
                    }
                }, (e) => {
                    console.error(`${this.$store.state.apiUrl.default + url}失败!`);
                });
            }
        },
        activated() {
            this.$store.commit("setPageName", this.pageName)
            // console.log('全局混合activated')
        },
        computed: {
            access_token() {
                return this.$store.state.user.extra.access_token;
            },
            user(){
                return this.$store.state.user.extra;
            },
            role(){
                return this.$store.state.user.roleMap[this.$store.state.user.extra.role]
            }
        }
    }
    export default mixin