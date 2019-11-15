<template>
  
  <div>
      <Head />
      <Bscroll ref="scroll">
       <div>
    <div class="kong">
      <b>最受欢迎</b>
      <b class="ong">(1部)</b>
    </div>


    <div class="na" v-for="(ite,inde) in futur" :key="inde">
      <span class="float">{{ite.rMonth}}月{{ite.rDay}}日</span>
      <div class="na-left">
        <img :src="ite.image" />     
      </div>
      <div class="na-right">
        <div class="na-q">{{ite.title}}</div>
        <div class="na-porper">
          <i>{{ite.wantedCount}}</i>
          <span>人想看 - {{ite.type}}</span>
        </div>
        <div>导演：{{ite.director}}</div>
        <div>演员：{{ite.actor1}},{{ite.actor2}}</div>
        <div class="na-car">预告片</div>
      </div>
    </div>
    <div class="box"></div>



    <div class="kong1">
      <b>即将上映</b>
      <b class="ong1">({{this.future.length}}部)</b>
      <p class="time">9月</p>
    </div>


    <div class="bd" v-for="(it,indx) in future" :key="indx">
      <span class="left-left">{{it.rDay}}日</span>
      <div class="bd-left">
        <img :src="it.image"/>
      </div>
      <div class="bd-right">
        <div class="bd-q">{{it.title}}</div>
        <div class="bd-porper">
          <i>{{it.wantedCount}}</i>
          <span>人想看 - {{it.type}}</span>
        </div>
        <div>导演：{{it.director}}</div>
        <div class="bd-car">预告片</div>
      </div>
    </div>
    </div>
        </Bscroll>
  </div>
</template>

<script>
import Head from "@common/head";
import { future } from "@api/hot";
import Bscroll from "@common/bscroll"
export default {
  name: "Future",
  data(){
    return{
      future:[],
      futur:[]
    }
  },
  components: {
    Head,
    Bscroll
  },
  async created(){
    let data =await future();
    this.futur=data.attention
    this.future=data.moviecomings
  },
      mounted(){
    this.$refs.scroll.handleScrol()
  },
};
</script>

<style>
.kong {
  height: 0.4rem;
  box-sizing: border-box;
  margin-left: 0.17rem;
  line-height: 0.4rem;
  flex-shrink: 0;
  font-size: 0.18rem;
}
.ong {
  margin-left: 0.08rem;
  color: #777;
}
.na {
  display: flex;
  box-sizing: border-box;
  margin: 0.1rem 0.17rem;
  position: relative;
  padding-top: 0.14rem;
  border-right: 1px solid #ccc;
  border-top: 1px solid #ccc;
}
.na div {
  margin: 0.04rem 0;
  font-size: 0.116rem;
}
.na .na-q {
  margin: 0;
  font-size: 0.16rem;
  font-weight: 600;
}
.na-left img {
  width: 0.8rem;
  height: 1.24rem;
}
.na .na-right {
  margin-left: 0.16rem;
}
.na .na-car {
  width: 0.8rem;
  height: 0.28rem;
  border: 1px solid #659c0d;
  color: #659c0d;
  border-radius: 0.17rem;
  text-align: center;
  line-height: 0.28rem;
  margin-top: 0.16rem;
}
.float {
  position: absolute;
  left: 0;
  top: -0.06rem;
  background: #fff;
  padding-right: 0.04rem;
}
.na-porper i {
  margin-right: 0.04rem;
  color: #ff8600;
}
.box {
  height: 0.1rem;
  background: #f6f6f6;
  display: flex;
  flex-shrink: 0;
}
.kong1 {
  height: 0.5rem;
  box-sizing: border-box;
  margin-left: 0.17rem;
  line-height: 0.4rem;
  flex-shrink: 0;
  font-size: 0.18rem;
}
.ong1 {
  margin-left: 0.08rem;
  color: #777;
}
.time {
  font-size: 0.13rem;
  line-height: 0.1rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.08rem;
}
.bd {
  display: flex;
  box-sizing: border-box;
  margin-left: 0.17rem;
  position: relative;
  padding: 0.1rem 0 0.1rem 0.3rem;
  border-bottom: 1px solid #ccc;
  margin-right: 0;
}
.bd div {
  margin: 0.04rem 0;
  font-size: 0.116rem;
}
.bd .bd-q {
  margin: 0;
  font-size: 0.16rem;
  font-weight: 600;
}
.bd-left img {
  width: 0.6rem;
  height: 1rem;
}
.bd .bd-right {
  margin-left: 0.16rem;
}
.bd .bd-car {
  width: 0.8rem;
  height: 0.28rem;
  border: 1px solid #659c0d;
  color: #659c0d;
  border-radius: 0.17rem;
  text-align: center;
  line-height: 0.28rem;
  margin-top: 0.16rem;
}
.left-left {
  position: absolute;
  left: 0rem;
  top: 0.16rem;
}
.bd-porper i {
  margin-right: 0.04rem;
  color: #ff8600;
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