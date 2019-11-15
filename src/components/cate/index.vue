<template>
    <div>
<div class="toll" v-for="(item ,index) in catelist" :key="index">
            <div class="title">
                <h3 :style="{color:item.colorValue}">{{item.name}}</h3>
                <span>更多&nbsp;&nbsp;></span>
            </div>
            <div class="toll_img">
                <a href="">
                    <img :src="item.image">
                </a>
            </div>
            <div class="toll_list" >
                <ul >
                    <router-link tag="li" :to="'/detail/'+item1.goodsId"
                    v-for="(item1 ,index1) in item.subList" :key="index1">
                        <a href="#"><img :src="item1.image">
                            <h3>{{item1.title}}</h3>
                            <p>￥<strong>139</strong></p>
                        </a>
                    </router-link>
                    
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
   import {shopMoWanApi} from "@api/shop"
    export default {
        name:"Cate",
        data(){
            return {
                catelist:[]
            }
        },
        async created(){
            let data=await shopMoWanApi()
            //console.log(data)
            this.catelist=data.category
            //console.log(this.catelist,"111")
        }
    }
</script>

<style> 
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