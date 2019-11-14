import Vue from "vue"
import Vuex from "vuex"
import shop from "./shop"
import city from "./city"
Vue.use(Vuex);

const store = new Vuex.Store({
   modules:{
    city,
    shop
   }
})
export default store

