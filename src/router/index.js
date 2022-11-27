// 配置路由的地方
import  Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'
import store from '@/store'
// 使用插件
Vue.use(VueRouter);
// 引入路由组件

// 重写push方法与replace

let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace = function(location,resolve,reject){
    if(reject && resolve){
        originReplace.call(this,location,reject,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}




let router =  new VueRouter({
    // 配置路由
    routes,
    scrollBehavior(to,from,savedPositon){
        return{
            // 代表滚动条在最上方
            y:0
        }
    }
})
router.beforeEach(async(to,from,next)=>{
    let token = store.state.User.token
    // 登录了
    if(token){
        if(to.path == '/login'){
            next(false)
        }
        else{
            if(store.state.User.userInfo.name){
                next()
            }else{
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    alert('获取用户信息失败，请重新登录')
                    await store.dispatch('logOut')
                    next('/login')
                }
                next()
            }
            
        }
    }else{
        next()
    }
})
export default router