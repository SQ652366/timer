<template>
    <div class="page">
<div class="section">
        <div class="search">
            <img src="../../../public/img/expand.png">
            <input type="text" placeholder="请搜索正版电影周边">
            <span class="iconfont icon-gouwuchekong"></span>

        </div>
        <div class="loop">
            <img src="../../../public/img/loop.png">
        </div>
        <Mowan/>
        <Topic/>
        <Tlist/>

        <div class="toll">
            <div class="title">
                <h3>玩具模型</h3>
                <span>更多&nbsp;&nbsp;></span>
            </div>
            <div class="toll_img">
                <a href="">
                    <img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F10%2F14%2F100954.66520415.jpg&width=590&height=290&clipType=4">
                </a>
            </div>
            <div class="toll_list">
                <ul>
                    <li>
                        <a href="#"><img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2019%2F09%2F24%2F100438.91169434_600X600X1.jpg&width=196&height=196&clipType=4">
                            <h3>雪人奇缘女士T恤</h3>
                            <p>￥<strong>139</strong></p>
                        </a>
                    </li>
                    <li>
                        <a href="#"><img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2019%2F09%2F24%2F100438.91169434_600X600X1.jpg&width=196&height=196&clipType=4">
                            <h3>雪人奇缘女士T恤</h3>
                            <p>￥<strong>139</strong></p>
                        </a>
                    </li>
                    <li>
                        <a href="#"><img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fgoods%2F2019%2F09%2F24%2F100438.91169434_600X600X1.jpg&width=196&height=196&clipType=4">
                            <h3>雪人奇缘女士T恤</h3>
                            <p>￥<strong>139</strong></p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
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
    export default {
        name:"shop",
       
        components:{
            Mowan,
            Topic,
            Tlist,
            Recommand
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
    
   
    
    
    .toll .title {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    
    .toll .title h3 {
        color: #FFB90F
    }
    
    .toll .toll_img {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .toll .toll_img a img {
        width: 2.75rem;
        height: 1.42rem;
        ;
    }
    
    .toll_list ul {
        display: flex;
    }
    
    .toll_list ul li {
        width: 33%;
        list-style: none;
        text-align: center
    }
    
    .toll_list ul li img {
        height: 0.85rem;
        width: 0.85rem;
    }
    
    .toll_list ul li h3 {
        font-size: 0.1rem;
        color: #000;
        font-weight: normal
    }
    
    .toll_list ul li p {
        font-size: 0.07rem;
        color: #f15353;
    }
    
   
    
</style>