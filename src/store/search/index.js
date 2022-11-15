import { reqGetSearchInfo } from "@/api"
const state = {
    searchList : {}
}
const mutations = {
    GETSEARCHINFO(state,data){
        state.searchList = data
    }
}
const actions = {
    async getSearchInfo({commit},params={}){
        let result = await reqGetSearchInfo(params)
        if(result.code  == 200){
            commit('GETSEARCHINFO',result.data)
        }
    }
}
const getters = {
    goodsList(state){
        return state.searchList.goodsList  || undefined
    },
    trademarkList(state){
        return  state.searchList.trademarkList
    },
    attrList(state){
        return state.searchList.attrList
    }
}
export default{
    state,
    mutations,
    actions,
    getters
}