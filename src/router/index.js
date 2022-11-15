// 配置路由的地方
import  Vue from 'vue';
import VueRouter from 'vue-router';
// 使用插件
Vue.use(VueRouter);
// 引入路由组件
import Home from '@/views/Home'
import Search from '@/views/Search'
import Login from '@/views/Login' 
import Register from '@/views/Register' 
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




export default new VueRouter({
    // 配置路由
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{
                show:true
            }
        },
        {
            name:'search',
            path:'/search/:keyword?',
            component:Search,
            meta:{
                show:true
            }
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/register',
            component:Register,
            meta:{
                show:false
            }
        },
        {
            path:'*',
            redirect:"/home",
            meta:{
                show:false
            }
        }
    ]
})