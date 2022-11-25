import { reqAddToCard, reqCheckCart, reqShopcartList } from "@/api"
const state = {
    cartList: [] 
}
const actions = {
    async getCartList({commit}){
        let result = await reqShopcartList()
        if(result.code == 200){
            commit('GETCARTLIST',result.data)
        }
    },
    async changeChecked({commit},goodInfo){
        let {skuID,isChecked} = goodInfo
        await reqCheckCart(skuID,isChecked)
    },
}
const mutations = {
    GETCARTLIST(state,data){
        state.cartList = data
    }
}
const getters = {
    cartList(state){
        return state.cartList[0] || {}
    },
}
export default{
    state,actions,mutations,getters
}