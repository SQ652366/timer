<template>
    
        <nav class="mowan">
            <ol>
                <router-link 
                v-for="(item,index) in signList" 
                :key="index" 
                tag="li"
                to="/list"
                >
                    <a href=""><img :src="item.image">
                        <p>{{item.iconTitle}}</p>
                    </a>
                </router-link>
            </ol>
        </nav>
    
</template>

<script>
import {shopMoWanApi} from "@api/shop"
    export default {
        name:"MoWan",
         data(){
            return{
                signList:[]
            }
        },
        async created(){
            let data=await shopMoWanApi()
            //console.log(data)
            this.signList=data.navigatorIcon
            
            //console.log(this.signList)

        },
    }
</script>

<style >
 .mowan {
        height: 2.08rem;
        background: #fff;
        display: flex;
        border: 1px solid #ccc
    }
    
    .mowan ol {
        width: 100%;
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
        align-items: center;
        height:100%
    }
    
    .mowan ol li {
        list-style: none;
        width: 25%;
        text-align: center;
    }
    
    .mowan ol li p {
        color: #777;
    }
    .mowan ol li img{
        width:0.42rem;
        height:0.42rem;
    }
    
</style>