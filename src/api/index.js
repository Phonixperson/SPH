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
export const reqShopcartList = () => requests({
    url:'/cart/cartList',
    method:'get'
})
export const reqCheckCart = (skuId,isChecked) => requests({
    url:`/cart/checkCart/${skuId}/${isChecked}`,
    method:'get'
})
export const reqDeletaCart = skuId => requests({
    url:`/cart/deleteCart/${skuId}`,
    method:'delete'
})
export const reqGetCode = (phone) => requests({
    url:`/user/passport/sendCode/${phone}`,
    method:'get'
})
// 注册的接口
export const reqRegister = data => requests({
    url:'/user/passport/register',
    data,
    method:'post'
})
// 登录
export const reqLogin = user => requests({
    url:'/user/passport/login',
    method:'post',
    data:user
})
// 获取用户信息
export const reqGetUserInfo = () => requests({
    url:'/user/passport/auth/getUserInfo',
    method:'get'
})
// 推出登录
export const reqLogout = () => requests({
    url:'/user/passport/logout',
    method:'get'
})
// 地址信息
export const reqGetAddressInfo = () => requests({
    url:'/user/userAddress/auth/findUserAddressList',
    method:'get'
})
// 获取交易也信息
export const reqTradeInfo = () => requests({
    url:'/order/auth/trade',
    method:'get'
})
// 提交订单
export const reqSubmitOrder = (tradeNo,data) => requests({
    url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
    data,
    method:'post'
})
export const reqPayInfo = (orderId) => requests({
    url:`/payment/weixin/createNative/${orderId}`,
    method:'get'
})
export const reqPayState = (orderId) => requests({
    url:`/payment/weixin/queryPayStatus/${orderId}`,
    method:'get'
})
// 获取我的订单信息
export const reqMyOrder = (page,limit) => requests({
    url:`/order/auth/${page}/${limit}`,
    method:'get'
})

