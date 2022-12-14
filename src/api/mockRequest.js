import axios from "axios";
import nProgress from "nprogress";
// 引入nprogress的样式
import 'nprogress/nprogress.css'
const requests = axios.create({
    baseURL:'/mock',
    // 超时时间
    timeout:5000,
})
// 请求拦截器
requests.interceptors.request.use(
    // config配置对象中有个属性很重要，是请求头
    config=>{
        nProgress.start()
        return config
    }
)
// 响应拦截器
requests.interceptors.response.use(res=>{
    // 服务器相应成功的拦截器
    nProgress.done()
    return res.data
},err=>{
    // 响应失败的回调
    return Promise.reject(new console.error("fail"))
})

export default requests