import { city } from "@api/hot";
import { shopMoWanApi } from "@api/shop"
let state = {
    hotCity: JSON.parse(sessionStorage.getItem("hotCity")) || [],
    cityList: JSON.parse(sessionStorage.getItem("cityList")) || [],
    nm: sessionStorage.getItem("nm") || "北京",
    cityId: sessionStorage.getItem("cityId") || 1,
    topicList: [],
    isShow: 0
}

let actions = {
    async handleGetCityList({ commit }) {
        let data = await city();
        commit("handleCityList", data.data.cities)
    },
    async handleAsyncTopic({ commit }) {
        let data = await shopMoWanApi()
            //console.log(data)
        commit("handleTopic", data.topic)
    },
}

let mutations = {
    handleTopic(state, params) {
        console.log(params, "123")
        state.topicList = params
    },
    handleShowMutations(state, index) {
        //console.log(index)
        state.isShow = index



    },
    handleUpdateCityInfo(state, params) {
        state.cityId = params.id;
        state.nm = params.nm;
        sessionStorage.setItem("cityId", params.id)
        sessionStorage.setItem("nm", params.nm)
    },
    handleCityList(state, cities) {
        console.log(cities)
        let hotCity = [],
            cityList = [];
        for (var i = 0; i < cities.length; i++) {
            if (cities[i].isHot) {
                hotCity.push({ id: cities[i].id, nm: cities[i].nm })
            }
        }

        for (var i = 0; i < cities.length; i++) {
            let letterFirst = cities[i].py.slice(0, 1).toUpperCase();
            if (isCityList(letterFirst)) {
                cityList.push({ index: letterFirst, list: [{ id: cities[i].id, nm: cities[i].nm }] })
            } else {
                for (var j = 0; j < cityList.length; j++) {
                    if (cityList[j].index == letterFirst) {
                        cityList[j].list.push({ id: cities[i].id, nm: cities[i].nm })
                    }
                }
            }
        }

        //判断城市标识是否在cityList中存在
        function isCityList(letterFirst) {
            var bStop = true;
            for (var i = 0; i < cityList.length; i++) {
                if (cityList[i].index == letterFirst) {
                    bStop = false;
                    break;
                }
            }

            return bStop;
        }

        cityList.sort((a, b) => {
            if (a.index > b.index) {
                return 1;
            } else {
                return -1;
            }
        })

        state.hotCity = hotCity;
        state.cityList = cityList;

        sessionStorage.setItem("hotCity", JSON.stringify(hotCity));
        sessionStorage.setItem("cityList", JSON.stringify(cityList));

    }
}

export default {
    state,
    actions,
    mutations,
    namespaced: true
}