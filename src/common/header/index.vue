<template>
         <div class="head">
        <ul>
            <li class="head-one"><img src="http://static1.mtime.cn/html5/20191022151144/images/2014/logo_mtime.png" alt=""></li>
            <router-link tag="li" v-for="item in header" :key="item.id" :to="item.path" >
                <p class="iconfont" v-html="item.text"></p>
            </router-link>
        </ul>
    </div> 
</template>

<script>
    export default {
        name:"Header",
        data(){
            return{
                header:[
                    {
                        id:0,
                        text:"首页",
                        path:"/shouye"
                    },
                     {
                        id:1,
                        text:"购票",
                        path:"/goupiao"
                    },
                     {
                        id:2,
                        text:"商城",
                        path:"/shop"
                    },
                     {
                        id:3,
                        text:"发现",
                        path:"/find"
                    },
                     {
                        id:4,
                        text:"&#xe619;",
                        path:"/mine"
                    },
                ]
            }
        }
       
    }
</script>

<style>
.head{
    background:#1c2635;
    display:flex;
    height:.44rem;
    width:100%;
}
.head ul{
    height:.44rem;
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items: center;
}
.head ul li{
    color:#fff;
     height:.44rem;
    display:flex;
    justify-content:center;
    align-items: center;
    box-sizing: border-box;
}
.head ul li p{
    border:.02rem solid rgba(0,0,0,0);
    height:.4rem;
    line-height: .4rem
}
.head-one img{
    height:.17rem;
    width:.52rem
}
.head .router-link-active p{
    border-bottom:.02rem solid #fff
}
</style>