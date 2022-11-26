import {  reqCheckCart, reqDeletaCart, reqShopcartList } from "@/api"
import { result } from "lodash"
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
        let {skuId,isChecked} = goodInfo
        let result =  await reqCheckCart(skuId,isChecked)
        if(result.code == 200){
            return 'OK'
        }else{
            throw 'fail'
        }
    },
    async deleteCart({commit},skuId){
        let result = await reqDeletaCart(skuId)
        if(result.code == 200){
            return 'OK'
        }else{
            throw 'fail'
        }
    },
    deleteAllCheckedCart(context){
        let promiseAll = []
        context.getters.cartList.cartInfoList.forEach(item => {
            if(item.isChecked){
                let promise = context.dispatch('deleteCart',item.skuId)
                promiseAll.push(promise)
            }
        });
        return Promise.all(promiseAll)
    },
    makeAllChanged({dispatch,getters},flag){
        let promiseAll = []
        let cartInfoList =  getters.cartList.cartInfoList||[]
        cartInfoList.forEach(item=>{
            if(!(item.isChecked == flag)){
                let result = dispatch('changeChecked',{skuId:item.skuId,isChecked:Number(flag)})
                promiseAll.push(result)
            }
        })
        // if(flag){
        //     getters.cartList.cartInfoList.forEach(item=>{
        //         if(!item.isChecked){
        //             let result =  dispatch('changeChecked',{
        //                 skuId:item.skuId,
        //                 isChecked:1
        //             })
        //             promiseAll.push(result)
        //         }
        //     })
        // }else{
        //     getters.cartList.cartInfoList.forEach(item=>{
        //         if(item.isChecked){
        //             let result =  dispatch('changeChecked',{
        //                 skuId:item.skuId,
        //                 isChecked:0
        //             })
        //             promiseAll.push(result)
        //         }
        //     })
        // }
        return Promise.all(promiseAll)
    }
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