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

export const shopChaApi = (cityId, kw) => http({
    method: "get",
    url: "/api/searchList",
    data: {
        cityId,
        kw

    }

})
export const shopPriceApi = (cityId, kw) => http({
    method: "get",
    url: "/Service/callback-mall.mi/ECommerce/GoodsPrices.api",
    data: {
        t: 201911151202662433,
        goodsIds: "106277%2C106476%2C106469%2C106560%2C106475%2C106577%2C108868%2C108861%2C108836%2C108874%2C108867%2C108824%2C108973%2C108977%2C108998%2C108984%2C108989%2C109110%2C107091%2C107094%2C105242%2C107095%2C101829%2C104706%2C107061%2C107063%2C107179%2C107113%2C107145%2C107157%2C107857%2C107858%2C105808%2C107731%2C106476%2C108170%2C108794%2C108771%2C108141%2C108155%2C108136"

    }

})