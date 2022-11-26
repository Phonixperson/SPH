import { reqGetCode, reqLogin, reqRegister } from "@/api"

const state = {
    code:'',
    token:'',
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
            return "OK"
        }else{
            return Promise.reject(result.message)
        }
    }
}
const mutations = {
    GETCODE(state,data){
        state.code = data
    },
    LOGIN(state,token){
        state.token = token
    }
}
const getters = {

}
export default{
    state,actions,mutations,getters
}