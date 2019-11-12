import http from "@utils/request"

export const shopMoWanApi = () => http({
        method: "get",
        url: "/Service/callback-mall.mi/ECommerce/RecommendProducts.api",
        data: {
            t: 2019111122502131363,
            goodsIds: 108789,
            pageIndex: 1
        }

    })
    // export const shopMoWanApi = (cityId = 10) => http({
    //     method: "get",
    //     url: "/api/movieOnInfoList",
    //     data: {
    //         cityId: cityId
    //     }

// })

// export const shopMoWanApi = () => http({
//     method: "get",
//     url: "/ajax/comingList",
//     data: {
//         ci: 1,
//         token: '',
//         limit: 10
//     }

// })