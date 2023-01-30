import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '@/pages/Home/MyIndex.vue'
import Search from '@/pages/Search/MyIndex.vue'
import Login from '@/pages/Login/MyIndex.vue'
import Register from '@/pages/Register/MyIndex.vue'

let originReplace = VueRouter.prototype.replace
let originPush = VueRouter.prototype.push
// 重写push|replace
// 第一个参数：告诉原来push方法，往哪里跳转，传递哪些参数
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    // call与apply 区别
    // 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
    // 不同点：call 传递参数用逗号隔开，apply 传递数组
    originPush.call(this, location.resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { })
  }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    // call与apply 区别
    // 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
    // 不同点：call 传递参数用逗号隔开，apply 传递数组
    originReplace.call(this, location.resolve, reject)
  } else {
    originReplace.call(this, location, () => { }, () => { })
  }
}




export default new VueRouter({
  // 配置路由 
  routes: [
    {
      path: "*",
      redirect: "/home",
      meta: { show: true }
    },
    {
      path: "/home",
      component: Home,
      meta: { show: true }
    },
    {
      path: "/search/:keyword?",
      component: Search,
      meta: { show: true },
      name: "search",
      // 布尔值传递 params 参数
      // props: true,
      // 对象写法
      // props:{a:1,b:2},
      // 函数写法:可以把 params 参数，query参数，通过props传递给路由组件
      props: ($route) => {
        return { keyword: $route.params.keyword, k: $route.query.k }
      }
    },
    {
      path: "/login",
      component: Login,
      meta: { show: false }
    },
    {
      path: "/register",
      component: Register,
      meta: { show: false }
    }
  ],
}
) 
