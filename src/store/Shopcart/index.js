import { reqShopcartList } from "@/api"
const state = {
    cartList: []
}
const actions = {
    async getCartList({commit}){
        let result = await reqShopcartList()
        if(result.code == 200){
            commit('GETCARTLIST',result.data)
        }
    }
}
const mutations = {
    GETCARTLIST(state,data){
        state.cartList = data
    }
}
const getters = {

}
export default{
    state,actions,mutations,getters
}