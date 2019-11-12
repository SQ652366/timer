<template>
  <div>
      <div class="head">
                <ul>
                  <v-touch @tap="handleBack()">
                    <li class="head-img-one"><img src="http://static1.mtime.cn/html5/20191022151144/images/2014/h_btn_back.png" alt=""></li>
                    </v-touch>
                    <li class="head-li">选择城市</li>
                    <li> </li>
                </ul>
</div> 
    <div class="banner">
            <div class="banner_right"><input type="text" placeholder="影片/影院/影人，任你搜"></div>
    </div> 
<div class="city">
    <div>热门城市:</div>
    <div> </div>
</div>
<div class="bdy">
    <a href="">上海</a>
    <a href="">重庆</a>
    <a href="">北京</a>
    <a href="">深圳</a>
    <a href="">上海</a>
    <a href="">重庆</a>
    <a href="">北京</a>
    <a href="">深圳</a>
    <a href="">上海</a>
    <a href="">重庆</a>
    <a href="">北京</a>
    <a href="">深圳</a>
</div>
<div class="city">
        <div>A</div>
        <div> </div>
    </div>
    <div class="bdy">
            <a href="">上海</a>
            <a href="">重庆</a>
            <a href="">北京</a>
            <a href="">深圳</a>
            <a href="">上海</a>
            <a href="">重庆</a>
            <a href="">北京</a>
            <a href="">深圳</a>
            <a href="">上海</a>
            <a href="">重庆</a>
            <a href="">北京</a>
            <a href="">深圳</a>
    </div>
  </div>
</template>

<script>
export default {
  name:"city",
  methods:{
    handleBack(){
      this.$router.back()
    }
  }
};
</script>

<style>
.head {
  background: #1c2635;
  display: flex;
  height: 0.44rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.12rem;
}
.head ul {
  height: 0.44rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head ul li {
  display: flex;
  justify-content: center;
  align-items: center;
}
.head-img-one img {
  height: 0.15rem;
  width: 0.1rem;
}
.head-li {
  color: #fff;
  font-size: 0.15rem;
}
.banner {
  height: 0.5rem;
  width: 100%;
  background: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
.banner_right input {
  height: 0.3rem;
  width: 2.3rem;
  outline: none;
  border-radius: 0.07rem;
  border: 1px solid #ccc;
  background: #fff
    url("http://static1.mtime.cn/html5/20191022151144/images/2014/search_ico_01.png")
    no-repeat 0.04rem center;
  padding-left: 0.24rem;
  font-size: 0.16rem;
  background-size: 0.18rem;
}
.city {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0.2rem;
  color: #777;
  font-size: 0.13rem;
  background: #ebebeb;
  height: 0.36rem;
  flex-shrink: 0;
}
.bdy {
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.14rem;
  box-sizing: border-box;
  padding-top: 0.1rem;
  flex-wrap: wrap;
}
.bdy a {
  width: 25%;
  display: inline-block;
  text-align: center;
  height: 0.3rem;
  color: #333;
}
</style>