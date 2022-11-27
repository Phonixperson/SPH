import { reqGetAddressInfo,reqTradeInfo } from "@/api"

const state = {
    addressInfo:[],
    tradeInfo:{}
}
const actions = {
    async getAddressInfo({commit}){
        let result = await reqGetAddressInfo()
        if(result.code == 200){
            commit('GETADDRESSINFO',result.data)
        }
    },
    // 获取商品清单数据
    async getTradeInfo({commit}){
        let result = await reqTradeInfo()
        if(result.code == 200){
            commit('GETTRADEINFO',result.data)
        }
    }
}
const mutations = {
    GETADDRESSINFO(state,data){
        state.addressInfo = data
    },
    GETTRADEINFO(state,data){
        state.tradeInfo = data
    }
}
const getters = {
    detailArrayList(state){
        return state.tradeInfo.detailArrayList || []
    }
}
export default{
    state,actions,mutations,getters
}