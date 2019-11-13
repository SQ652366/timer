<template>
    <div>
<div class="hero" >
            <!-- <span :style="{background:'url('+item.checkedImage+') no-repeat  ' }"> -->
              <div v-for="(item,index) in topicList" :key="index" class="hero_topic">
               <img :src="item.checkedImage">
               </div>
            <!-- </span> -->
            
        </div>
        
    </div>
</template>

<script>
    import {shopMoWanApi} from "@api/shop"
    export default {
        name:"Topic",
         data(){
            return{
                topicList:[]
            }
        },
        async created(){
            let data=await shopMoWanApi()
           // console.log(data)
            this.topicList=data.topic
            
            console.log(this.topicList)

        },
    }
</script>

<style >
.hero {
        height: 1.27rem;
        background: #0f0;
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
    }
    
    .hero img {
        width: 0.47rem;
        height: 0.47rem;
        border-radius: 50%;
        
    }
    
    
    
</style>