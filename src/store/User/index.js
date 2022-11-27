import { reqGetCode, reqGetUserInfo, reqLogin, reqLogout, reqRegister } from "@/api"
import {removeToken, setToken} from '@/utils/token'
const state = {
    code:'',
    token:localStorage.getItem('Token'),
    userInfo:{}
}
const actions = {
    async getCode({commit},phone){
        let result = await reqGetCode(phone)
        if(result.code == 200){
            commit('GETCODE',result.data)
        }
    },
    async userRegister(context,user){
        let result = await reqRegister(user)
        if(result.code == 200){
            return 'OK'
        }else{
            return Promise.reject(result.message)
        }
    },
    async login({commit},user){
        let result = await reqLogin(user)
        if(result.code == 200){
            commit('LOGIN',result.data.token)
            setToken(result.data.token)
            return "OK"
        }else{
            return Promise.reject(result.message)
        }
    },
    async getUserInfo({commit}){
        let result = await reqGetUserInfo()
        if(result.code == 200){
            commit('GETUSERINFO',result.data)
            return 'OK'
        }else{
            return Promise.reject(new Error(result.message))
        }
    },
    async logOut({commit}){
        let result = await reqLogout()
        if(result.code == 200){
            commit('CLEAR')
            return '退出成功'
        }else{
            return Promise.reject(new Error(result.message))
        }
    }
}
const mutations = {
    GETCODE(state,data){
        state.code = data
    },
    LOGIN(state,token){
        state.token = token
    },
    GETUSERINFO(state,data){
        state.userInfo = data
    },
    CLEAR(state){
        state.token = ''
        state.userInfo = {}
        removeToken()
    }
}
const getters = {

}
export default{
    state,actions,mutations,getters
}