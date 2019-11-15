<template>
<div>
   
    <div class="cha">
        <v-touch tag="div" @tap="handleBack()" class="back">&lt;</v-touch>
        <input type="text" v-model="value">
        
    </div>
    <div class="content">
        <div v-for="(item,index) in movieList" :key="index" class="content_list">
        <div>
            <img :src="item.img|toImg('128.180')">
            
        </div>
        <div>
            <p>{{item.nm}}</p>
             <p>{{item.enm}}</p>
              <p>{{item.cat}}</p>
               <p>{{item.nm}}</p>
        </div>
        </div>
    </div>
   
</div>
</template>

<script>
import MessageBox from "../../libs/messageBox/index.js"
import {shopChaApi} from "@api/shop"
import {throttle} from "@utils/xiaoya"
import messageBox from '../../libs/messageBox/index.js'



    export default {
        name:"Cha",
        data(){
            return {
                value:" ",
                movieList:[]
            }
        },
        methods:{
            handleBack(){
                this.$router.back()
            }
        },
        created(){
            messageBox({
                title:"电影信息",
                content:"你猜是是是",
                ok:function(){
                    alert(1)
                }
            })
        },
        watch:{
             value(newVal){
                throttle(async()=>{
                let data=await shopChaApi(this.$store.state.city.cityId,newVal)
                console.log(data)
                this.movieList=data.data.movies.list
            })
            //性能优化，防止搜索框中没有值的时候，列表中还是有内容
            if(newVal.length==0){
                this.movieList=[]
                console.log(1)
                //console.log(this.movieList)
            }
                
            }
        }
    }
</script>

<style >
.cha {
        height: 0.48rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position:fixed;
        background: #1c2635;
        width:100%;
        z-index:10
    }
    .cha .back{
        font-size: 0.2rem;
        color:#fff
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
        width:0.53rem;
        height:0.75rem;
    }
    .content .content_list{
        display:flex;
        margin-top:0.08rem;

    }
   
    
   
</style>