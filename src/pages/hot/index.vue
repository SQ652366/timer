<template>
  <div>
    <Head/>
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
</template>

<script>
import Head from "@common/head";
import { hot } from "@api/hot"
export default {
  name: "Hot",
  data(){
    return{
      hot:[]
    }
  },
  components: {
    Head
  },
    async created() {
    let data = await hot();
    this.hot=data.ms;
  }
};
</script>

<style>
.dy {
  display: flex;
  box-sizing: border-box;
  margin: 0 0.17rem;
  padding-top: 0.16rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: .12rem
}
.dy-left img {
  height: 0.94rem;
  width: 0.64rem;
}
.dy-right {
  margin-left: 0.17rem;
}
.dy-right-hed {
  line-height: 0.18rem;
}
.dy-right-hed i {
  background: #659d0e;
  font-size: 0.1rem;
  padding:0 .06rem;
  display: inline-block;
  color: #fff;
  margin-left: 0.08rem;
}
.dy-right-hed b {
  font-size: 0.14rem;
}
.dy-right-two {
  line-height: 0.16rem;
  margin: 0.06rem 0 0.06rem 0;
}
.dy-right-two span {
  color: #659d0e;
}
.dy-right-two img {
  width: 0.1rem;
  height: 0.1rem;
  vertical-align: 0rem;
}
.dy-right-img img {
  width: 0.5rem;
  height: 0.16rem;
}
.dy-right-zi b {
  color: #555;
  font-size: 0.1rem;
  font-weight: 100;
}
.dy-right-zi a {
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
</style>