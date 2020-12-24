import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import '@/styles/index.less'

Vue.config.productionTip = false

import *as echarts from 'echarts';
Vue.prototype.$echarts = echarts
Vue.use(echarts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
