<template>
    <div class="page">
        <nav class="nav1">
            <ol>
                <li><a href="">新闻</a></li>
                <li><a href="">预告片</a></li>
                <li><a href="">排行榜</a></li>
                <li><a href="">影评</a></li>

            </ol>
        </nav>
        <div class="show">
            <img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F07%2F18%2F102211.29411290.jpg&width=640&height=360&clipType=3" alt="">

            <h2>
                <b>《复仇者联盟4》重要彩蛋全解析</b>
            </h2>

        </div>
        <div class="news">
            <div class="pic_show" v-for="(item ,index) in newslist"
            :key="index">
                <p>{{item.title}}</p>
                <div class="pic_list">
                <div  v-for="(child,src) in item.images" :key="src" v-show="item.type==1">
                    <img :src="child.url1">
                    
                </div>
                </div>
                <div class="pic_list"  v-show="item.type==0">
                    <img :src="item.image">
                    
                </div>
                <div class="pic_list"  v-show="item.type==2">
                    <img :src="item.image">
                    
                </div>
                <div>
                    <span>{{item.publishTime|time()}}小时前</span>
                    <span>评论{{item.commentCount}}</span>
                </div>
            </div>

          
            
           
        </div>
    </div>
</template>

<script>
   import {findNewsApi} from "@api/find"
    export default {
        name:"Find",
        data(){
            return {
                newslist:[]
            }
        },
        async created(){
            let data=await findNewsApi()
            console.log(data)
            this.newslist=data.newsList
            
        },
        filters:{
            price(value,params){
                return params+(value/100)
            },
            time(value){
             
        var date = new Date(value * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
       
       var nowh= new Date().getHours()
       var h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) ;
       
        return nowh- h;
    
                    }
        }
    }
</script>

<style >
    .nav1{
        height:0.4rem
    }
   .nav1 ol {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 0.4rem;
    }
    
    .nav1 ol li {
        list-style: none;
    }
    
    .nav1 ol li a {
        color: #000;
    }
    
    .news {
        padding-left: 0.13rem;
    }
    
    .show {
        position: relative;
    }
    
    .show img {
        height: 1.98rem;
        width: 100%;
    }
    
    .show h2 {
        position: absolute;
        bottom: 0.04rem;
        left: 0;
        color: #fff;
        background: rgba(0, 0, 0, .5);
        width: 100%;
        font-size: 0.13rem;
        height: 0.38rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .pic_show {
        border-bottom: 1px solid #ccc;
    }
    
    .pic_show p {
        font-weight: bold;
        margin: 0.13rem 0;
    }
    
    .pic_show .pic_list {
        display: flex
    }
    
    .pic_show .pic_list img {
        width: 0.95rem;
        height: 0.65rem;
    }
    
    .pic_show span {
        font-size: 0.1rem;
        color: #777;
        margin-right: 0.15rem;
    }
    
    .news2 {
        display: flex;
        border-bottom: 1px solid #ccc;
    }
    
    .news2_img img {
        width: 0.75rem;
        height: 0.75rem;
        margin: 0.17rem;
    }
    
    .news2_list {
        padding-top: 0.17rem;
    }
    
    .news2_list p {
        font-weight: bold;
        margin-bottom: 0.08rem;
    }
    
    .news2_list span {
        font-size: 0.1rem;
        color: #777;
        margin-right: 0.15rem;
    }
    
</style>