import http from "@utils/request";

export const hot =()=>http({
    method:"get",
    url:"/Service/callback.mi/Showtime/LocationMovies.api",
    data:{
        locationId:290,
        t:2019111120545722035
    }
})