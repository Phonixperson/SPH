import Home from '@/views/Home'
import Search from '@/views/Search'
import Login from '@/views/Login' 
import Register from '@/views/Register' 
import Detail from '@/views/Detail'
import AddCartSuccess from '@/views/AddCartSuccess'
import ShopCart from '@/views/ShopCart'
import Trade from '@/views/Trade'
import Pay from '@/views/Pay'
import PaySuccess from '@/views/PaySuccess'
import Center from '@/views/Center'
import MyOrder from '@/views/Center/MyOrder'
import GroupOrder from '@/views/Center/GroupOrder'

export default  [
    {
        path:'/home',
        component:()=>import('@/views/Home'),
        meta:{
            show:true
        }
    },
    {
        name:'search',
        path:'/search/:keyword?',
        component:()=>import('@/views/Search'),
        meta:{
            show:true
        }
    },
    {
        path:'/login',
        component:()=>import('@/views/Login' )
    },
    {
        path:'/register',
        component:()=>import('@/views/Register' ),
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
    },
    {
        path:'/detail/:skuId',
        component:()=>import('@/views/Detail'),
        meta:{
            show:true
        },
        
    },
    {   
        name:'addcartsuccess',
        path:'/addcartsuccess/:skuNum',
        component:()=>import('@/views/AddCartSuccess'),
        meta:{
            show:true
        },
    },
    {   
        path:'/shopcart',
        component:()=>import('@/views/ShopCart'),
        meta:{
            show:true
        },
    },
    {   
        path:'/trade',
        component:()=>import('@/views/Trade'),
        beforeEnter(to,from,next){
            if(from.path == '/shopcart'){
                next()
            }else{
                next(false)
            }
        },
        meta:{
            show:true
        },
        
    },
    {   
        path:'/pay',
        component:()=>import('@/views/Pay'),
        meta:{
            show:true
        },
        beforeEnter(to,from,next){
            if(from.path == '/trade'){
                next()
            }else{
                next(false)
            }
        }
    },
    {   
        path:'/paysuccess',
        component:()=>import('@/views/PaySuccess'),
        meta:{
            show:true
        },
    },
    {   
        path:'/center',
        component:()=>import('@/views/Center'),
        meta:{
            show:true
        },
        children:[
            {
                path:'myorder',
                component:()=>import('@/views/Center/MyOrder')
            },
            {
                path:'grouporder',
                component:()=>import('@/views/Center/GroupOrder')
            },
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    }
]