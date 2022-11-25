import Home from '@/views/Home'
import Search from '@/views/Search'
import Login from '@/views/Login' 
import Register from '@/views/Register' 
import Detail from '@/views/Detail'
import AddCartSuccess from '@/views/AddCartSuccess'
import ShopCart from '@/views/ShopCart'

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
    }
]