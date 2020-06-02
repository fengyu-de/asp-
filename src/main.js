import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/icon.css' //导入字体图标样式
import '@/element/element.js' //按需导入elementui
import '@/assets/css/window.css' //导入全局样式
import moment from 'moment'
Vue.use(moment)
Vue.config.productionTip = false
Vue.filter('newTime', (value) => {
  return moment(value).format("YYYY-MM-DD HH:mm:ss")
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
