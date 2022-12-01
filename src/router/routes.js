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
    },
    {
        path:'/detail/:skuId',
        component:Detail,
        meta:{
            show:true
        },
        
    },
    {   
        name:'addcartsuccess',
        path:'/addcartsuccess/:skuNum',
        component:AddCartSuccess,
        meta:{
            show:true
        },
    },
    {   
        path:'/shopcart',
        component:ShopCart,
        meta:{
            show:true
        },
    },
    {   
        path:'/trade',
        component:Trade,
        meta:{
            show:true
        },
    },
    {   
        path:'/pay',
        component:Pay,
        meta:{
            show:true
        },
    },
    {   
        path:'/paysuccess',
        component:PaySuccess,
        meta:{
            show:true
        },
    },
    {   
        path:'/center',
        component:Center,
        meta:{
            show:true
        },
        children:[
            {
                path:'myorder',
                component:MyOrder
            },
            {
                path:'grouporder',
                component:GroupOrder
            },
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    }
]