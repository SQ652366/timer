<template>
<div>
  <div class="had">
    <v-touch @tap="handleB()" class="had-img">
      <img src="https://static1.mtime.cn/html5/20191022151144/images/2014/h_btn_back.png" alt />
    </v-touch>
    <div class="had-box">
      <router-link tag="li" v-for="item in head" :key="item.id" :to="item.path">{{item.text}}</router-link>
    </div>
    <div></div>
  </div>
      <div class="bnner">
      <div class="bnner_left">
        <span>北京</span>
        <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i_city.png" alt />
      </div>
      <div class="bnner_right">
        <input type="text" placeholder="影片/影院/影人，任你搜" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
  data() {
    return {
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
      ]
    };
  },
  methods:{
    handleB(){
       this.$router.back()
    }
  }
};
</script>

<style>
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