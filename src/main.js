import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
// 三级联动组件---全局组件
import TypeNav from '@/components/TypeNav'
// 引入 mock
import '@/mock/mockServe'
// 引入 swiper 样式
import 'swiper/swiper-bundle.min.css';
import Carousel from '@/components/carousel/index'
// 第一个参数 全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)

Vue.config.productionTip = false
new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  // 注册路由
  router,
  // 注册仓库：组件实例的身上会多一个属性$store
  store
}).$mount('#app')
