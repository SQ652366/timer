<template>
<div>
  <div class="head">
    <div class="head-img">
      <img src="https://static1.mtime.cn/html5/20191022151144/images/2014/h_btn_back.png" alt />
    </div>
    <div class="head-box">
      <router-link tag="li" v-for="item in head" :key="item.id" :to="item.path">{{item.text}}</router-link>
    </div>
    <div></div>
  </div>
      <div class="banner">
      <div class="banner_left">
        <span>北京</span>
        <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i_city.png" alt />
      </div>
      <div class="banner_right">
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
  }
};
</script>

<style>
.head {
  background: #1c2635;
  display: flex;
  height: 0.44rem;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  flex-shrink: 0;
}
.head-img > img {
  width: 0.1rem;
  height: 0.15rem;
}
.head-box {
  color: #fff;
  display: flex;
  height: 0.26rem;
  background: #000;
  width: 1.8rem;
  text-align: center;
  border-radius: 0.12rem;
}
.head-box li {
  height: 0.26rem;
  width: 50%;
  line-height: 0.26rem;
  border-radius: 0.12rem;
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
.banner_right input {
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
</style>