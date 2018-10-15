import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
import App from './App'
import router from './router'
import store from './store'
import 'babel-polyfill' // es6补充
import '@/icons' // icon
import '@/permission' // permission control

Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
