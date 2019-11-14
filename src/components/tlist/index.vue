<template>
  <div>
    <div class="hero_list" v-for="(item,index) in topicList" :key="index" v-show="isShow==index">
      <div class="hero_list-name">
        <p>{{item.titleEn}}</p>
        <h1>{{item.titleCn}}</h1>
      </div>
      <div class="hero_list-item">
        <ul>
          <router-link v-for="(item1,index1) in item.subList" 
          :key="index1"
          tag="li"
          :to="'/detail/'+item1.goodsId">
            <a href="#">
              <img :src="item1.image" />
              <h3>{{item1.title}}</h3>
              <p>
                ￥
                <strong>139</strong>
              </p>
            </a>
          </router-link>
        </ul>
        <i>更多商品&nbsp;&nbsp;&nbsp;&nbsp;></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Tlist",
  computed: {
    ...mapState({
      topicList: state => state.city.topicList,
      isShow: state => state.city.isShow
    })
  }
};
</script>

<style >
.hero_list-name {
  text-align: center;
}

.hero_list-name p {
  font-size: 0.07rem;
}

.hero_list-name h1 {
  font-size: 0.2rem;
  font-weight: normal;
  margin-bottom: 0.17rem;
}

.hero_list .hero_list-item ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%；;
}

.hero_list-item ul li {
  width: 33%;
  list-style: none;
  text-align: center;
}

.hero_list-item ul li img {
  height: 0.85rem;
  width: 0.85rem;
}

.hero_list-item ul li h3 {
  font-size: 0.1rem;
  color: #000;
  font-weight: normal;
}

.hero_list-item ul li p {
  font-size: 0.07rem;
  color: #f15353;
}

.hero_list-item ul li p strong {
  font-size: 0.17rem;
}

.hero_list-item i {
  display: block;
  width: 0.97rem;
  height: 0.28rem;
  background: #f15353;
  color: white;
  font-style: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.17rem;
  font-size: 0.12rem;
  margin: 0.13rem 0 0.13rem 1.17rem;
}
</style>