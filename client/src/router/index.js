import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '*', redirect: '/' },
    {path:'/layout',name: 'layout',component: () => import('@/components/admin/layout/index.vue')},
    // {path:'/radarmap',name: 'radarmap',component: () => import('@/components/admin/radarmap/index.vue')},
    {path:'/admin',component:() => import('@/components/admin/layout/index.vue'),
        children:[
            {path:'userControl', component:() => import('@/components/admin/userControl/index.vue')},
            {path:'adminControl', component:() => import('@/components/admin/adminControl/index.vue')},
            {path:'radarmap',name: 'radarmap',component: () => import('@/components/admin/statistics/IOStatisics/index.vue')},
            {path:'thread',name: 'thread',component: () => import('@/components/admin/statistics/ThreadStatisics/index.vue')},
          ]},

    { path: '/', name: 'Login', component: () =>
            import ('@/components/io/Login.vue') },
    { path: '/home', name: 'Home', component: () =>
            import ('@/components/io/Home.vue') },
    { path: '/changepwd', name: 'ChangePwd', component: () =>
            import ('@/components/io/ChangePwd.vue') },
    { path: '/gamehome', name: 'GameHome', component: () =>
            import ('@/components/io/GameHome.vue') },
    { path: '/ranklist', name: 'RankList', component: () =>
            import ('@/components/io/RankList.vue') },
    { path: '/myscore', name: 'MyScore', component: () =>
            import ('@/components/io/MyScore.vue') },
    { path: '/result', name: 'Result', component: () =>
            import ('@/components/io/Result.vue') },
    { path: '/answer', name: 'Answer', component: () =>
            import ('@/components/io/Answer.vue') },
    { path: '/thlogin', name: 'Loginth', component: () =>
            import ('@/components/thread/Login.vue') },
    { path: '/thhome', name: 'Hometh', component: () =>
            import ('@/components/thread/Home.vue') },
    { path: '/thchangepwd', name: 'ChangePwd', component: () =>
            import ('@/components/thread/ChangePwd.vue') },
    { path: '/thgamehome', name: 'GameHometh', component: () =>
            import ('@/components/thread/GameHome.vue') },
    { path: '/thranklist', name: 'RankListth', component: () =>
            import ('@/components/thread/RankList.vue') },
    { path: '/thmyscore', name: 'MyScoreth', component: () =>
            import ('@/components/thread/MyScore.vue') },
    { path: '/thresult', name: 'Resultth', component: () =>
            import ('@/components/thread/Result.vue') },
    { path: '/thanswer', name: 'Answerth', component: () =>
            import ('@/components/thread/Answer.vue') },


    // { path: '/layout', name: 'layout', component: () =>
    //         import ('@/components/admin/layout/index.vue') },
    // { path: '/radarmap', name: 'radarmap', component: () =>
    //         import ('@/components/admin/radarmap/index.vue') },
    // {
    //     path: '/admin',
    //     component: () =>
    //         import ('@/components/admin/layout/index.vue'),
    //     children: [
    //         { path: 'userControl', component: () =>
    //                 import ('@/components/admin/register/index.vue') },
    //         { path: 'radarmap', name: 'radarmap', component: () =>
    //                 import ('@/components/admin/radarmap/index.vue') },
    //     ]
    // },
]

const router = new VueRouter({
    routes,
    mode:'hash'
})

export default router