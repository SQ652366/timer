<template>
    <div class="page">
<div class="section">
        <div class="search">
            <img src="../../../public/img/expand.png" >
            <v-touch tag="div" @tap="handlePush()">
            <input type="text" placeholder="请搜索正版电影周边">
            </v-touch>
            <span class="iconfont icon-gouwuchekong"></span>

        </div>
        <div class="loop">
            <img src="../../../public/img/loop.png">
        </div>
        <Mowan/>
        <Topic/>
        <Tlist/>
        <Cate/>
        
        <Recommand/>
        
    </div> 
    </div>
</template>

<script>
import {shopMoWanApi} from "@api/shop"
import Recommand from "@components/recommand"
import Mowan from "@components/mowan"
import Topic from "@components/topic"
import Tlist from "@components/tlist"
import Cate from "@components/cate"
    export default {
        name:"shop",
       
        components:{
            Mowan,
            Topic,
            Tlist,
            Cate,
            Recommand
        },
        methods:{
            handlePush(){
                this.$router.push("/cha")
            }
        }
        
    }
</script>

<style >
.search {
        height: 0.48rem;
        background: #f6f6f6;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }
    
    .search input {
        height: 0.36rem;
        width: 2.62rem;
        background: #fff;
        font-size: 0.12rem;
        color: #ccc;
        border: none;
        padding-left: 0.2rem
    }
    
    .search img {
        position: relative;
        top: 0;
        left: 0.16rem;
    }
    
    .search span {
        font-size: 0.25rem;
        color: #0075c4;
        margin: 0 0.07rem
    }
    
    .loop {
        height: 1.67rem;
        background: #0cf;
        width: 100%;
    }
    
    .loop img {
        height: 100%;
        width: 100%;
    }
    
   
    
    
    
   
    
</style>