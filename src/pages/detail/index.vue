<template>
    <div>
<div class="tou1">
        <v-touch tag="span" @tap="handleBack()" class="iconfont icon-fanhuitubiao"></v-touch>
        <div>
            <span class="iconfont icon-shouye"></span>
            <span class="iconfont icon-gouwuchekong"></span>
            <span class="iconfont icon-fenxiang"></span>
        </div>
    </div>
    <div id="section">
        <div class="detail">
            <img :src="goodsDetail.image">

        </div>
        <div class="name">
            <ul>
                <li style="font-size: 0.13rem">
                    <P><span v-html="goodsDetail.goodsTip"></span>{{goodsDetail.name}} <i >新品</i></P>
                </li>
                <li style="color:orange"><b>￥{{goodsDetail.minSalePrice/100}}</b>登录享会员价</li>
                <li style="color:#f97a3e">
                    <em>免</em>{{goodsDetail.postAgeText}}
                </li>
            </ul>

        </div>
        
        
    </div>
     <div class="feet">
        <ol>
            <li><a href="">咨询</a></li>
            <li><a href="">收藏</a></li>

        </ol>
        <div style="background:#ff8600;"><a href="">加入购物车</a></div>
        <div style="background:#f23030"><a href="">立即购买</a></div>
    </div>
    </div>
</template>

<script>
    import { shopDetailApi} from "@api/shop"
    export default {
        name:"Detail",
        props:["id"],
         data(){
            return{
                goodsDetail:[]
            }
        },
        async created(){
            let data=await  shopDetailApi(this.id)
            //console.log(data)
            this.goodsDetail=data.data.productDetail.goods
            //console.log(this.goodsDetail)

        },
        methods:{
            handleBack(){
                this.$router.back(this.goodsDetail.minSalePrice)
            }
        }
    }
</script>

<style>
 .tou1 {
        height: 0.47rem;
        background: #1c2635;
        display: flex;
        justify-content: space-between;
        position: relative;
        top: 0;
        left: 0;
        z-index: 1;
        align-items: center;
        color: white;
        padding: 0 0.13rem;
    }
    
    .tou1 span {
        font-size: 0.2rem;
    }
    
    .tou1 div span {
        margin: 0 0.12rem;
        font-size: 0.2rem;
    }
    
    .section {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding-bottom: 0.42rem;
        padding-top: 0.47rem;
    }
    
    .detail {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .detail img {
        width: 2.6rem;
        height: 2.6rem;
    }
    
    .name {
        padding-left: 0.13rem;
        border-bottom: 1px solid #ccc;
    }
    
    .name li {
        margin: 0.13rem 0;
        list-style: none;
        font-size: 0.1rem;
    }
    
    .name li span {
        color: orange;
        display: inline-block;
        border: 1px solid orange;
    }
    
    .name li i {
        font-style: normal;
        display: inline-block;
        background: #0cf;
        color: white;
    }
    
    .name li b {
        margin-right: 0.13rem;
        font-size: 0.17rem;
    }
    
    .name li em {
        background: #f97a3e;
        color: white;
        font-style: normal;
        margin-right: 0.07rem;
    }
    
    
    .feet {
        display: flex;
        height: 0.42rem;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #ccc;
        background: #fff;
    }
    
    .feet ol {
        width: 33%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.17rem;
    }
    
    .feet ol li {
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .feet ol li a {
        color: #777;
    }
    
    .feet div {
        width: 33%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .feet div a {
        color: white;
    }
</style>