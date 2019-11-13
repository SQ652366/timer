import http from "@utils/request"
//http: //m.mtime.cn/Service/callback.mi/News/NewsList.api?t=201911122058119472&pageIndex=1
export const findNewsApi = (t = 201911122058119472, pageIndex = 1) => http({
    method: "get",
    url: "/Service/callback.mi/News/NewsList.api",
    data: {
        t,
        pageIndex
    }

})