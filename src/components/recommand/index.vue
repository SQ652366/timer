<template>
    <div class="more">
            <i>--你可能感兴趣的--</i>
            <div class="more_list">
                <router-link v-for="(item,index) in goodslist" 
                :key="index"
                tag="div"
                :to="'/detail/'+item.goodsId"
                >
                    <img :src="item.image">
                    <div class="more_list_info">
                    <span v-html="item.goodsTip"></span>
                    <p>{{item.name}}</p>
                    <b>{{item.minSalePrice|price("￥")}}</b>
                    </div>
                </router-link>
                
            </div>
            </div>
</template>

<script>
import {shopRecommandApi} from "@api/shop"
    export default {
        name:"Recommand",
        data(){
            return {
                goodslist:[]
            }
        },
        async created(){
            let data=await shopRecommandApi()
            //console.log(data)
            this.goodslist=data.goodsList
            //console.log(this.goodslist)
        },
        filters:{
            price(value,params){
                return params+(value/100)
            }
        }
    }
</script>

<style >
 .more {
        text-align: center;
    }
    
    .more i {
        font-size: 0.1rem;
        color: #ccc;
        margin: 0.17rem 0 0.08rem 0;
        font-style: normal;
        display: block
    }
    
    .more .more_list {
        display: flex;
        flex-wrap: wrap;
    }
    
    .more .more_list div {
        width: 50%;
        text-align: left;
        overflow:hidden;
    }
    
    .more .more_list div img {
        width: 1.48rem;
        height: 1.48rem;
    }
    
    .more .more_list div p {
        font-size: 0.1rem;
        margin-bottom: 0.17rem;
        display: inline-block;
    }
     .more .more_list div span{
           color: orange;
        display: inline-block;
        border: 1px solid orange;
        font-size:0.1rem;
        margin-right:0.08rem;
     }
     .more .more_list div .more_list_info{
         padding-left:0.08rem;
         width:100%;
        
     }
    .more .more_list div b {
        font-size: 0.12rem;
        color: #ff8600;
        display: block;
    }
</style>