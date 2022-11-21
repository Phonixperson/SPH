import { reqGoodsInfo } from "@/api"
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