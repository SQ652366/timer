import http from "@utils/request";

//正在热映
export const hot =()=>http({
    method:"get",
    url:"/Service/callback.mi/Showtime/LocationMovies.api",
    data:{
        locationId:290,
        t:2019111120545722035
    }
})
//即将上映
export const future =()=>http({
    method:"get",
    url:"/Service/callback.mi/Movie/MovieComingNew.api",
    data:{
        locationId:290,
        t:2019111216482195761
    }
})

//购票
export const goupiao =()=>http({
    method:"get",
    url:" /api/proxy/ticket/onlineCinemasByCity.api",
    data:{
        locationId:290,
        _:1573551435125
    }
})

//首页
export const shouye =()=>http({
    method:"get",
    url:"/Service/callback.mi/Showtime/LocationMovies.api",
    data:{
        locationId:290,
        t:2019111220582490520
    }
})
export const shou =()=>http({
    method:"post",
    url:"/article/originalInfoList.api",
    data:{
     
    }
})

//城市
export const city = ()=>http({
    method:"get",
    url:"/api/cityList",
    data:{
    
    }
})

//搜索
export const sou=(cityId,kw)=>http({
    method:"get",
    url:"/api/searchList",
    data:{
        cityId,
        kw
    }
})
