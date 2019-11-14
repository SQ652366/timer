import http from "@utils/request"

export const shopRecommandApi = (t = 2019111122502131363) => http({
        method: "get",
        url: "/Service/callback-mall.mi/ECommerce/RecommendProducts.api",
        data: {
            t
        }

    })
    //http://m.mtime.cn/Service/callback-mall.mi/PageSubArea/MarketFirstPageNew.api?
export const shopMoWanApi = (t) => http({
    method: "get",
    url: "/Service/callback-mall.mi/PageSubArea/MarketFirstPageNew.api",
    data: {
        t
    }

})

export const shopListApi = (t = 2019111217395786370) => http({
    method: "get",
    url: "/Service/callback-mall.mi/ECommerce/SearchGoods.api",
    data: {
        t
    }

})

//http: //m.mtime.cn/Service/callback-mall.mi/product/detail.api?goodsId=108789&locationId=290&t=2019111219282144628

export const shopDetailApi = (goodsId) => http({
    method: "get",
    url: "/Service/callback-mall.mi/product/detail.api",
    data: {
        goodsId
    }

})

export const shopChaApi = (keyword) => http({
        method: "post",
        url: "Service/callback.mi/Search/SearchSuggestionNew.api",
        data: {
            t: 2019111321282485508,
            keyword,
            locationId: 290

        }

    })
    // export const shopChaApi = (query) => http({
    //     method: "get",
    //     url: "/search",
    //     data: {
    //         query
    //     }

// })