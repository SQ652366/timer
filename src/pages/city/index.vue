<template>
  <div>
    <div class="head">
      <ul>
          <li class="head-img-one">
            
          </li>
        <li class="head-li">选择城市</li>
        <li></li>
      </ul>
    </div>
    <div class="banner">
      <div class="banner_right">
        <input type="text" placeholder="请输入关键字" />
      </div>
    </div>

   
    <div class="bdy">
       <div class="city">
      <div>热门城市:</div>
      <div></div>
    </div>
      <div v-for="(item,index) in hotCity" :key="index">
        <a href="#">{{item.nm}}</a>
      </div>
    </div>

    <div class="bdy" v-for="(item) in cityList" :key="item.id">
      <div class="city">
        <div>{{item.index}}</div>
        <div></div>
      </div>
      <v-touch tag="div" @tap="handleCityTo(child)" v-for="child in item.list" :key="child.id">
        <a href="#">{{child.nm}}</a>
      </v-touch>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "City",
  created() {
      if(!(sessionStorage.getItem("cityList") && sessionStorage.getItem("hotCity"))){
        this.$store.dispatch("city/handleGetCityList");
      }
  },
  computed: {
    ...mapState({
      hotCity: state => state.city.hotCity,
      cityList: state => state.city.cityList
    })
  },
  methods:{
    handleCityTo(city){
      this.$router.push("/shouye");
      this.$store.commit("city/handleUpdateCityInfo",city)
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
.bdy div {
  height: 0.3rem;
  width: 24%;
}
.bdy a {
  width: 100%;
  height: 0.3rem;
  display: inline-block;
  text-align: center;
  color: #333;
  line-height: 0.3rem;
}
.bdy .city {
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
  width:100%
}
.bdy .city div{
  height:.36rem;
  line-height: .36rem
}
</style>