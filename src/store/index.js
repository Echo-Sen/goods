import Vue from 'vue'
import Vuex from 'vuex'
// 引入小仓库
import home from './home'
import search from './search'
Vue.use(Vuex)
// state:存储数据的地方

// mutations:修改state 的唯一手段

// actions:处理action，书写自己的业务逻辑，也可以处理异步
// 可以书写业务逻辑，但不能修改state

// getters：理解为计算属性，用于简化仓库数据

export default new Vuex.Store({
  modules: {
    home, search
  }
})