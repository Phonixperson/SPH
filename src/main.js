import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
// 三级联动组件注册为全局组件
import TypeNav from '@/components/TypeNav'
// 引入接口函数
import {reqCategoryList} from './api'
import store from './store'
import './mock/mockServe'
import 'swiper/swiper-bundle.min.css'
import Carousel from '@/components/Carousel'




Vue.component(Carousel.name,Carousel)
Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由
  router,
  store
}).$mount('#app')
