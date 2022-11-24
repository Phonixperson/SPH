import { reqAddToCard, reqGoodsInfo } from "@/api"
import { reject } from "lodash"
const state ={
    goodsInfo:{}
}
const mutations ={
    GETGOODSINFO(state,data){
        state.goodsInfo = data
    }
}
const actions ={
    async getGoodsInfo({commit},skuId){
        let result = await reqGoodsInfo(skuId)
        if(result.code == 200){
            commit('GETGOODSINFO',result.data)
        }
    },
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        let result = await reqAddToCard(skuId,skuNum)
        // 说明服务器加入购物车成功
        if(result.code == 200){
            return "OK"
        }else{
            return Promise.reject(new Error('fail')) 
       }
    }
}
const getters ={
    skuInfo(state){
        return state.goodsInfo.skuInfo || {}
    },
    categoryView(state){
        return state.goodsInfo.categoryView || {}
    },
    spuSaleAttrList(state){
        return state.goodsInfo.spuSaleAttrList 
    }


}
export default{
    state,mutations,actions,getters
}