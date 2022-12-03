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
import Pagination from '@/components/Pagination'
import * as API from '@/api'
import {MessageBox} from 'element-ui'
import VueLazyload from 'vue-lazyload'
import pic from '@/assets/1.jpg'
import  '@/plugins/validate.js'



Vue.use(VueLazyload,{
  loading:pic
})


Vue.component(Carousel.name,Carousel)
Vue.component(TypeNav.name,TypeNav)
Vue.component(Pagination.name,Pagination)

Vue.config.productionTip = false

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$confirm = MessageBox.confirm;

new Vue({
  render: h => h(App),
  // 注册路由
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  }
}).$mount('#app')
