// 对API接口进行统一管理
import requests from "./request";
import mockRequest from './mockRequest'

export  const reqCategoryList = ()=> requests({
        url:'/product/getBaseCategoryList',
        method:'get'
    })
export const reqGetBannerList = () => mockRequest({
    url:'/banner',
    method:'get'
})
// 获取floor组件的数据
export const reqFloorList = () => mockRequest({
    url:'/floor',
    method:'get'
})
export const reqGetSearchInfo  = (params) => requests({
    method:'post',
    url:'/list',
    data:params
})
export const reqGoodsInfo = (skuId)=> requests({
    method:'get',
    url:`/item/${skuId}`
})
// 将产品添加到购物车中或更新购物车的产品
export const reqAddToCard = (skuId,skuNum) => requests({
    method:'post',
    url:`/cart/addToCart/${skuId}/${skuNum}`
})
