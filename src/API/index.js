import requests from './ajax'
import mockRequests from "./mock";
export const reqCategoryList = () => {
  return requests.get('/product/getBaseCategoryList')
}

// 获取banner（home 首页轮播图接口）
export const reqBannerList = () => {
  return mockRequests.get('/banner')
}

// 获取floor数据

export const reqFloorList = () => {
  return mockRequests.get('/floor')
}

export const reqProductList = (SearchParams) => {
  return requests.post('/list', SearchParams)
}