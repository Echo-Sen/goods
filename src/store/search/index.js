import { reqProductList } from '@/API/index'
const state = {
  productList: {}
}
const mutations = {
  GETPRODUCTLIST(state, searchList) {
    state.productList = searchList
  }
}
const actions = {
  async getProductList({ commit }, SearchParams) {
    // 不改变组件中的 options
    // SearchParams = { ...SearchParams }
    // Object.keys(SearchParams).forEach(key => {
    //   if (SearchParams[key] === '') {
    //     delete SearchParams[key]
    //   }
    // })
    const result = await reqProductList(SearchParams)
    if (result.code === 200) {
      commit('GETPRODUCTLIST', result.data)
    }
  }
}
const getters = {
  goodsList(state) {
    return state.productList.goodsList || {}
  },
  trademarkList(state) {
    return state.productList.trademarkList || {}
  },
  attrsList(state) {
    return state.productList.attrsList || {}
  }

}
export default {
  state, mutations, actions, getters
}