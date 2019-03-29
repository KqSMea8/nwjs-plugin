// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import store from './store' // 导入vuex文件
import api from './api' // 导入api接口

Vue.prototype.$api = api; // 将api挂载到vue的原型上
Vue.config.productionTip = false
Vue.use(iView)
// for auto update
import { checkUpdate } from '@/utils/update.js'
checkUpdate()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
