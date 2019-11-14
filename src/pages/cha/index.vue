<template>
<div>
    <div class="cha">
        <input type="text" v-model="value">
        
    </div>
    <div class="content">
        <div v-for="(item,index) in movieList" :key="index">
            <img :src="item.cover">
            <p>{{item.titlecn}}</p>
        </div>
        </div>
    </div>
</template>

<script>
import {shopChaApi} from "@api/shop"
import {throttle} from "@utils/xiaoya"
    export default {
        name:"Cha",
        data(){
            return {
                value:" ",
                movieList:[]
            }
        },
        watch:{
             value(newVal){
                throttle(async()=>{
                let data=await shopChaApi(newVal)
                console.log(data)
                this.movieList=data.suggestions
            })
            //性能优化，防止搜索框中没有值的时候，列表中还是有内容
            if(newVal.length==0){
                this.movieList=[]
                console.log(this.movieList)
            }
                
            }
        }
    }
</script>

<style >
.cha {
        height: 0.48rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position:fixed;
        background: #1c2635;
        width:100%;
        z-index:10
    }
    
    .cha input {
        height: 0.36rem;
        width: 2.62rem;
        background: #fff;
        font-size: 0.12rem;
        color: #ccc;
        border: none;
        padding-left: 0.2rem
    }

    .content{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        padding-top:0.48rem;

    }
     .content div img{
        width: 0.42rem;
        height: 0.42rem;
    }
    
   
    
   
</style>