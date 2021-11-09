/**
 * 项目的入口文件它执行的时候都是从你的 main.js 从上到下的执行的
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUi , { Message }from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VCharts from 'v-charts'
import 'v-charts/lib/pie.common'
import { Http } from './utils/index';
Vue.use(VCharts)
Vue.use(ElementUi)

// Vue.prototype.basePath="http://localhost:3000";

//直接将HTTP函数挂在vue实例上,方便调用
Vue.prototype.$Http = Http


Vue.config.productionTip = false

window.vm  = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
