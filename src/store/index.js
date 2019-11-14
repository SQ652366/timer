import Vue from "vue"
import Vuex from "vuex"
import { shopMoWanApi } from "@api/shop"
Vue.use(Vuex)
let state = {
    topicList: [],
    isShow: 0
}
let actions = {
    async handleAsyncTopic({ commit }) {
        let data = await shopMoWanApi()
        console.log(data)
        commit("handleTopic", data.topic)
    },
}
let mutations = {
    handleTopic(state, params) {
        state.topicList = params
    },
    handleShowMutations(state, index) {
        //console.log(index)
        state.isShow = index

    }
}


export default new Vuex.Store({
    state,
    actions,
    mutations
})