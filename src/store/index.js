import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import search from './search'
import Detail from './Detail'
import Shopcart from './Shopcart'
import User from './User'
import trade from './trade'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        home,
        search,
        Detail,
        Shopcart,
        User,
        trade
    }
})