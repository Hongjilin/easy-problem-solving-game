import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {path:'*',redirect:'/'},
    {path:'/',name: 'Login',component: () => import('@/components/Login.vue')},
    {path:'/layout',name: 'layout',component: () => import('@/components/admin/layout/index.vue')},
    {path:'/radarmap',name: 'radarmap',component: () => import('@/components/admin/radarmap/index.vue')},
    {path:'/admin',component:() => import('@/components/admin/layout/index.vue'),
        children:[
            {path:'userControl', component:() => import('@/components/admin/register/teacherAdmin.vue')},
            {path:'radarmap',name: 'radarmap',component: () => import('@/components/admin/radarmap/index.vue')},
          ]},
]

const router = new VueRouter({
  routes
})

export default router
