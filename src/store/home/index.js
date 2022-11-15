import {reqCategoryList,reqFloorList,reqGetBannerList} from '@/api'
const state = {
    categoryList:[],
    bannerList:[],
    floorList:[]
}
const mutations = {
    CATEGORYLIST(state,data){
        state.categoryList = data
    },
    GETBANNERLIST(state,data){
        state.bannerList = data
    },
    GETFLOORLIST(state,data){
        state.floorList = data
    }

}
const actions = {
    async categoryList({commit}){
        let result = await reqCategoryList();
        if(result.code == 200){
            commit('CATEGORYLIST',result.data)
        }
    },
    async getBannerList({commit}){
        let result = await reqGetBannerList()
        if(result.code == 200){
            // console.log(result)
            commit('GETBANNERLIST',result.data)
        }else{
            return new Promise(new Error('请求失败'))
        }
    },
    async getFloorList({commit}){
        let result = await reqFloorList()
        if(result.code == 200){
            commit('GETFLOORLIST',result.data)
        }
    }
}
const getters = {}

export default{
    state,
    mutations,
    actions,
    getters
}