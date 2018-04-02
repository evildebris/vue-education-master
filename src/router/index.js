import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'

Vue.use(Router);
//app整体由店面页和店内页组成 暂时并没有用到嵌套路由
const routes = [{
    path: '/login',
    name: "登陆",
    components: {"subPage":resolve => require(["../components/login/login.vue"], resolve)}
},{
    path: '/register',
    name: "注册",
    components: {"subPage":resolve => require(["../components/login/register.vue"], resolve)}
},{
    path: '/forget',
    name: "忘记密码",
    components: {"subPage":resolve => require(["../components/login/forget.vue"], resolve)}
},{
    path: '/',
    name: "个人中心",
    meta: {
        // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
    },
    component: resolve => require(["../components/home/home.vue"], resolve)
},{
    path: '/classes',
    name: "班级",
    meta: {
        // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
        back:true
    },
    component: resolve => require(["../components/classes/classes.vue"], resolve)
},{
    path: '/money',
    name: "学习币中心",
    meta: {
        // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
        back:true
    },
    component: resolve => require(["../components/money/money.vue"], resolve)
},{
    path: '/money/recharge',
    name: "充钱",
    meta: {
        // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
        back:true
    },
    components:{ "subPage":  resolve => require(["../components/money/recharge.vue"], resolve)}
},{
    path: '/money/stamina',
    name: "体力值",
    meta: {
        // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,
        back:true
    },
    components:{ "subPage":  resolve => require(["../components/money/stamina.vue"], resolve)}
},
    {
        path: '/explore',
        name: "发现",
        component: resolve => require(["../components/explore/explore.vue"], resolve)
    }, {
        path: '/explore/moments',
        name: "朋友圈",
        components: {
            "default": resolve => require(["../components/explore/explore.vue"], resolve),
            "subPage": resolve => require(["../components/explore/moments.vue"], resolve)
        }
    }, {
        path: '/self',
        name: "我",
        component: resolve => require(["../components/self/self.vue"], resolve)
    }, {
        path: '/self/album',
        components: { "default": resolve => require(["../components/self/self.vue"], resolve), "subPage": resolve => require(["../components/common/album.vue"], resolve) }
    },
    {
        path: '/self/settings',
        components: { "default": resolve => require(["../components/self/self.vue"], resolve), "subPage": resolve => require(["../components/self/settings.vue"], resolve) }
    }, {
        path: '/self/settings/security',
        components: { "subPage": resolve => require(["../components/self/settings/security.vue"], resolve) }
    },
    {
        path: '/self/settings/notice',
        components: { "subPage": resolve => require(["../components/self/settings/notice.vue"], resolve) }
    },
    {
        path: '/self/settings/privacy',
        components: { "subPage": resolve => require(["../components/self/settings/privacy.vue"], resolve) }
    }, {
        path: '/self/settings/common',
        components: { "subPage": resolve => require(["../components/self/settings/common.vue"], resolve) }
    },
    {
        path: '/self/profile',
        components: { "default": resolve => require(["../components/self/self.vue"], resolve), "subPage": resolve => require(["../components/common/profile.vue"], resolve) }
    }, {
        path: '/self/profile/my-qrcode',
        components: { "subPage": resolve => require(["../components/self/my-qrcode.vue"], resolve) }
    }, {
        path: '/self/settings',
        components: { "subPage": resolve => require(["../components/settings/settings.vue"], resolve) }
    },
    {
        path: '/self/settings/common',
        components: {
            "subPage": resolve => require(["../components/settings/common/common.vue"], resolve)
        }
    },
    {
        path: '/self/settings/common/language',
        components: {
            "subPage": resolve => require(["../components/settings/common/language.vue"], resolve)
        }
    }

]
const router = new Router({
    base: "/vue-education/",
    routes,
});
router.beforeEach((to, from, next) => {
    // 判断该路由是否需要登录权限
    if (to.meta.requireAuth) {
        store.commit("refreshCookie");
        console.log(`hasLogin is ${store.state.user.hasLogin}`);
        if (store.state.user.hasLogin) {
            next();
        }else{
            next({path: '/login'});
        }
    }else {
        next();
    }
});
export default router