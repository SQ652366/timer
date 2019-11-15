<template>
  <div>
     <div class="had">
    <router-link tag="div" to="/shouye" class="had-img">
      <img src="https://static1.mtime.cn/html5/20191022151144/images/2014/h_btn_back.png" alt />
    </router-link>
    <div class="had-box">
      <router-link tag="li" v-for="item in head" :key="item.id" :to="item.path">{{item.text}}</router-link>
    </div>
    <div></div>
  </div>
      <div class="bnner">
      <div class="bnner_left">
        <span>{{this.$store.state.city.nm}}</span>
        <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i_city.png" alt />
      </div>
      <div class="bnner_right">
        <input type="text" placeholder="影片/影院/影人，任你搜" v-model="value" />
      </div>
    </div>

     <Bscroll ref="scroll">
       <div v-if="value==''">
    <div class="dy" v-for= "(item,index) in hot" :key="index">
      <div class="dy-left">
        <img :src="item.img"/>
      </div>
      <div class="dy-right">
        <div class="dy-right-hed">
          <b>{{item.t}}</b>
          <i>{{item.r}}</i>
        </div>
        <div class="dy-right-two">
          <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i_dot_01.png" alt />
          <span>{{item.commonSpecial}}</span>
        </div>
        <div class="dy-right-img">
          <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/ia_cine_15.png" alt />
        </div>
        <div class="dy-right-zi">
          <b>{{item.NearestCinemaCount}}家影院上映{{item.NearestShowtimeCount}}场</b>
          <a href>购票</a>
        </div>
      </div>
    </div>
    </div>

      <div>
    <div class="d" v-for= "(item,index) in ho" :key="index">
      <div class="d-left">
        <img :src="item.img | toImg('128.180')"/>
      </div>
      <div class="d-right">
        <div class="d-right-hed">
          <b>{{item.nm}}</b>
          <i> </i>
        </div>
        <div class="d-right-two">
          <span>{{item.star}}</span>
        </div>
        <div class="d-right-img">
          <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/ia_cine_15.png" alt />
        </div>
        <div class="d-right-zi">
          <b>{{item.rt}}上映</b>
          <a href>购票</a>
        </div>
      </div>
    </div>
    </div>
        </Bscroll>
  </div>
</template>

<script>
import Head from "@common/head";
import { hot,sou } from "@api/hot";
import Bscroll from "@common/bscroll";
import {throttle} from "@utils/xiaoya";
export default {
  name: "Hot",
  data(){
    return{
      hot:[],
      ho:[],
       head: [
        {
          id: 0,
          text: "正在热映",
          path: "/hot"
        },
        {
          id: 1,
          text: "即将上映",
          path: "/future"
        }
      ],
      value:""
    }
  },
  components: {
    Head,
    Bscroll
  },
    async created() {
    let data = await hot();
    this.hot=data.ms;
  },
    mounted(){
    this.$refs.scroll.handleScroll()
  },
    watch:{
   value(newVal){
      throttle(async ()=>{
      let data=await sou(this.$store.state.city.cityId,newVal);
      this.ho=data.data.movies?data.data.movies.list:[]
      })
    }
  }
};
</script>

<style>
.dy,.d {
  display: flex;
  box-sizing: border-box;
  margin: 0 0.17rem;
  padding-top: 0.16rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: .12rem
}
.dy-left img,.d-left img {
  height: 0.94rem;
  width: 0.64rem;
}
.dy-right,.d-right {
  margin-left: 0.17rem;
}
.dy-right-hed,.d-right-hed {
  line-height: 0.18rem;
}
.dy-right-hed i,.d-right-hed i {
  background: #659d0e;
  font-size: 0.1rem;
  padding:0 .06rem;
  display: inline-block;
  color: #fff;
  margin-left: 0.08rem;
}
.dy-right-hed b,.d-right-hed b {
  font-size: 0.14rem;
}
.dy-right-two,.d-right-two {
  line-height: 0.16rem;
  margin: 0.06rem 0 0.06rem 0;
}
.dy-right-two span,.d-right-two span {
  color: #659d0e;
}
.dy-right-two img ,.d-right-two img{
  width: 0.1rem;
  height: 0.1rem;
  vertical-align: 0rem;
}
.dy-right-img img,.d-right-img img {
  width: 0.5rem;
  height: 0.16rem;
}
.dy-right-zi b,.d-right-zi b {
  color: #555;
  font-size: 0.1rem;
  font-weight: 100;
}
.dy-right-zi a,.d-right-zi a {
  display: inline-block;
  width: 0.64rem;
  height: 0.28rem;
  background: #ff8600;
  text-align: center;
  line-height: 0.28rem;
  border-radius: 0.17rem;
  color: #fff;
  margin-left: 0.24rem;
}
.had {
  background: #1c2635;
  display: flex;
  height: 0.44rem;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  flex-shrink: 0;
}
.had-img > img {
  width: 0.1rem;
  height: 0.15rem;
}
.had-box {
  color: #999;
  display: flex;
  height: 0.26rem;
  background: #000;
  width: 1.8rem;
  text-align: center;
  border-radius: 0.12rem;
}
.had-box li {
  height: 0.26rem;
  width: 50%;
  line-height: 0.26rem;
  border-radius: 0.12rem;
}
.bnner {
  height: 0.5rem;
  width: 100%;
  background: #f6f6f6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-shrink: 0;
}
.bnner_left span {
  font-size: 0.16rem;
}
.bnner_left img {
  width: 0.1rem;
  height: 0.05rem;
}
.bnner_right input {
  height: 0.33rem;
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
.had-box .router-link-active{
   background:#1c2635;
   color:#fff
}
</style>