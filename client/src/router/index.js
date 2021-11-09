import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {path:'*',redirect:'/'},
    {path:'/',name: 'Login',component: () => import('@/components/Login.vue')},
    {path:'/upload',name: 'upload',component: () => import('@/components/uploadXlsx.vue')},
    // {path:'/admin',component:() => import('@/components/menu/Admin.vue'),
    //     children:[
    //         {path:'student', component:() => import('@/components/main/studentAdmin.vue')},
    //       ]},
]

const router = new VueRouter({
  routes
})

export default router
