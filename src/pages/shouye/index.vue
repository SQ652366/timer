<template>
<div>
    <div class="banner">
      <div class="banner_left">
       <router-link tag="div" to="/city" class="banner-city">
          <span>{{this.$store.state.city.nm}}</span>
        <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i_city.png"/>
       </router-link>
      </div>
      <div class="banne_right">
        <input type="text" placeholder="影片/影院/影人，任你搜" />
      </div>
    </div>

    
       <div class="he">
    <div class="body_head">
      <div class="body_left">
        <b>正在热映</b>
        <b>({{this.shouye.length}}部)</b>
      </div>
      <router-link tag="div" to="/hot" class="body_right">
        <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i-tmore.png"/>
      </router-link>
    </div>
    <div class="bady">
      <div class="body_img" v-for="(item,index) in shouye.slice(0,8)" :key="index">
        <img :src="item.img"/> 
        <p>{{item.t}}</p>
      </div>
    </div>
    <div class="body_bottom">
      <div class="body_bottom_left">
        <b>即将上映</b>
        <b>({{this.future.length}}部)</b>
      </div>
      <router-link tag="div" to="/future" class="body_bottom_right">
        <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i-tmore.png" alt />
      </router-link>
    </div>


    <div class="body_line"></div>


    <div class="body_box">
      <a href>
        <img
          src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2018%2F07%2F31%2F143906.61810640.jpg&width=640&height=320&clipType=4"
          alt
        />
      </a>
    </div>
    <div class="body_line_two"></div>
    <div class="body_title">
      <a class="body_title_top">
        <h2>今日热点</h2>
      </a>
    </div>


    <div class="bt" v-for="(item,index) in shou" :key="index">
    <div class="bo" v-if="item.styleType==2">
      <div class="img_box">
        <a href>
          <img :src="item.images[0].imgUrl"/> 
          <h3>{{item.title}}</h3>
          <p>27分钟前</p>
        </a>
      </div>
    </div>
   
  
    <div class="img_left" v-if="item.styleType==1">
      <ul class="img_left-ul">
        <div class="img_left_img">
          <a href>
            <img :src="item.images[0].imgUrl"/>
     </a>
        </div>
        <div class="img_left_size">
          <a href>{{item.title}}</a>
          <p>
            <span></span>
          </p>
          <p>
            <span>13小时前</span>
          </p>
        </div>
      </ul>
    </div>


    
    <div class="body_small" v-if="item.styleType==3">
      <div class="body_small-title">
        <p>{{item.title}}}</p>
      </div>
      <div class="body_small-img">
        <img :src="item.images[0].imgUrl"/>
        <img :src="item.images[1].imgUrl"/>
        <img :src="item.images[2].imgUrl"/>
       
      </div>
      <div class="body_small-p">
        <span>17小时前</span>
      </div>
    </div>
   </div>


    <div class="foot">
      <p>查看更多</p>
    </div>
    <div class="footer">
      <div>
        <a href>首页</a>
      </div>
      <div>
        <a href>购票</a>
      </div>
      <div>
        <a href>商城</a>
      </div>
      <div>
        <a href>发现</a>
      </div>
      <div>
        <a href>我的</a>
      </div>
    </div>
    <div class="footer_two">
      <div>
        pc版
        <span>|</span>
      </div>
      <div>
        客户端下载
        <span>|</span>
      </div>
      <div>
        意见反馈
        <span>|</span>
      </div>
      <router-link tag="div" to="/fuwu">建议中心</router-link>
    </div>
    <div class="bottom-one">
      <div class="imgone">
        <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/fot_logo.png" alt />
      </div>
      <div class="imgtwo">
        <img src="http://static1.mtime.cn/html5/20191022151144/images/h_mark.jpg" alt />
      </div>
    </div>
    <div class="bottom">
      <span>Copyright</span>
      <span>2006-2019</span>
      <span>Mtime.com Inc. All rights reserved.</span>
    </div>
      </div>

      </div>
</template>

<script>
import { shouye,shou,future } from "@api/hot";

export default {
  name: "shouye",
  data(){
    return{
      shouye:[],
      shou:[],
      future:[]
    }
  },
  async created(){
    let data=await shouye();
    this.shouye=data.ms;
    let dat=await shou();
    this.shou=dat.data.list;
     let da=await future();
  this.future=da.moviecomings
  },
};
</script>

<style>
.he{
  background:#fff
}
.banner {
  height: 0.5rem;
  width: 100%;
  background: #f6f6f6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-shrink: 0;
}
.banner_left span {
  font-size: 0.16rem;
}
.banner_left img {
  width: 0.1rem;
  height: 0.05rem;
}
.banne_right input {
  height: 0.34rem;
  width: 2rem;
  outline: none;
  border-radius: 0.07rem;
  border: 1px solid #ccc;
  background: url("http://static1.mtime.cn/html5/20191022151144/images/2014/search_ico_01.png")
    no-repeat 0.04rem center;
  padding-left: 0.24rem;
  font-size: 0.16rem;
  background-size: 0.18rem;
}
.body_head {
  height: 0.383333rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
}
.body_head div {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 0.083333rem;
}
.body_left b {
  margin: 0 0.041667rem;
  font-size: 0.18rem;
}
.body_right img {
  transform: rotate(270deg);
  width: 0.16rem;
  height: 0.08rem;
}
.bady {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.083333rem;
  flex-shrink: 0;
}
.body_img {
  width: 22%;
  text-align: center;
}
.bady p {
  font-size: 0.14rem;
  margin-top: 0.025rem;
  margin-bottom: 0.025rem;
}
.body_img img {
  height: 0.93rem;
  width: 0.64rem;
}
.body_bottom {
  height: 0.383333rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
}
.body_bottom div {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 0.083333rem;
}
.body_bottom_left b {
  margin: 0 0.041667rem;
  font-size: 0.18rem;
}
.body_bottom_right img {
  transform: rotate(270deg);
  width: 0.16rem;
  height: 0.08rem;
}
.body_line {
  height: 0.125rem;
  background: #f6f6f6;
  width: 100%;
  flex-shrink: 0;
}
.body_box img {
  width: 100%;
  height: 1.716667rem;
}
.body_line_two {
  height: 0.125rem;
  background: #f6f6f6;
  width: 100%;
  flex-shrink: 0;
}
.body_title {
  height: 0.383333rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
}
.body_title_top {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 0.12rem;
}
.img_box {
  display: flex;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;
}
.img_box img {
  width: 2.9rem;
  margin-bottom:.1rem;
  margin-top:.1rem;
  height:1.6rem
}
.img_box p {
  color: #555;
  padding-bottom: 0.08rem;
  padding-top:.08rem;
  border-bottom: 1px solid #ccc;
}
.img_left {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-shrink: 0;
}
.img_left-ul {
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 3rem;
    padding:.1rem 0;
}
.img_left_img a img {
  width: 1rem;
  height: 0.8rem;
  margin-left: 0.06rem;
}
.img_left_size {
  width: 1.808333rem;
  font-size: 0.14rem;
  font-weight: 600;
}
.img_left_size p span {
  font-size: 0.11rem;
  font-weight: 100;
}
.img_left_size p {
  margin: 0.1rem 0;
}
.body_small {
  display: flex;
  flex-wrap: wrap;

  flex-shrink: 0;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
}
.body_small-img img {
  width: 0.9rem;
  height: 0.68rem;
  margin: 0 0.020833rem;
}
.body_small-img {
  width: 100%;
  text-align: center;
  height:.8rem
}
.body_small-title {
  margin-left: 0.122rem;
  font-size: 0.14rem;
  font-weight: 600;
 height:.4rem;
 line-height: .4rem
}
.body_small-p {
  margin-left: 0.122rem;
  font-size: 0.1rem;
  color: #999;
  height:.2rem;
}
.foot {
  display: flex;
  height: 0.3rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #1e7dd7;
  border-bottom: 1px solid #ccc;
}
.footer {
  height: 0.45rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-shrink: 0;
}
.footer div a {
  color: #1e7dd7;
  font-size: 0.14rem;
}
.footer_two {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-shrink: 0;
  height: 0.3rem;
  box-sizing: border-box;
  color: #333;
  background: #f6f6f6;
}
.footer_two div span {
  margin-left: 0.1rem;
  color: #ccc;
}
.bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.116667rem;
  background: #f6f6f6;
}
.bottom span {
  font-size: 0.08rem;
  color: #ccc;
  margin: 0 0.041667rem;
  background: #f6f6f6;
}
.bottom-one {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f6f6;
}
.imgone img {
  width: 0.633rem;
  height: 0.2rem;
}
.imgtwo img {
  width: 0.66rem;
  height: 0.23rem;
}
</style>