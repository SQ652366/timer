<template>
  <div class="page">
    <div class="tou">
      <v-touch tag="span" @tap="handleBack()" class="iconfont icon-fanhuitubiao"></v-touch>
      <div class="search1">
        <img src="../../../public/img/expand.png" />
        <input type="text" placeholder="请搜索正版电影周边" />
      </div>
      <span class="iconfont icon-loudou"></span>
    </div>
    <nav class="sort1">
      <ul>
        <li>
          <a href>综合排序</a>
        </li>
        <span>|</span>
        <li>
          <a href>主题角色</a>
        </li>
        <span>|</span>
        <li>
          <a href>全部分类</a>
        </li>
      </ul>
    </nav>
    <div class="wrap">
      <Ysroll ref="scroll">
        <div class="list">
          <router-link
            v-for="(item,index) in shangpinList"
            :key="index"
            class="lists"
            tag="li"
            :to="'/detail/'+item.goodsId"
          >
            <img :src="item.imageSrc" />
            <P>
              <span v-html="item.goodsTip"></span>
              {{item.name}}
            </P>
            <em>￥{{item.minSalePrice/100}}</em>
          </router-link>
        </div>
      </Ysroll>
    </div>
  </div>
</template>

<script>
import { shopListApi } from "@api/shop";
export default {
  name: "List",
  data() {
    return {
      shangpinList: []
    };
  },
  mounted() {
    this.$refs.scroll.handleScroll();
    this.$refs.scroll.handlePullingDown(() => {
      this.handlegoodsList(2019111422475786370);
    });
  },
  watch: {
    shangpinList() {
      //console.log("更新了")
      this.$refs.scroll.handleRefreshDown();
    }
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
    async handlegoodsList(t) {
      t = t ? t : 2019111217395786370;
      let data = await shopListApi();
      
      this.shangpinList = data.content.goods.goodsList;
    }
  },
  created() {
    this.handlegoodsList();
    //console.log(this.shangpinList)
  }
};
</script>

<style>
.tou {
  height: 0.47rem;
  background: #1c2635;
  display: flex;
  justify-content: space-around;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  align-items: center;
  color: white;
  padding: 0 0.13rem;
}
.tou span {
  font-size: 0.2rem;
}

.search1 input {
  height: 0.36rem;
  width: 2.08rem;
  background: #fff;
  font-size: 0.12rem;
  color: #ccc;
  border: none;
  padding-left: 0.2rem;
  border-radius: 0.13rem;
}

.search1 img {
  position: absolute;
  top: 0.13rem;
  left: 0.45rem;
}
.sort1 {
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  background: #fff;
}
.sort1 ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 0.6rem;
  color: #ccc;
  border-bottom: 1px solid #ccc;
}

.sort1 ul li {
  list-style: none;
  padding: 0 0.08rem;
}

.sort1 ul li a {
  color: #000;
}
.wrap {
  height: 4.17rem;
}
.list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}

.list .lists {
  width: 50%;
}

.lists img {
  width: 1.48rem;
  height: 1.48rem;
}

.lists p {
  font-size: 0.1rem;
  color: #777;
  margin: 0.08rem;
  text-overflow: ellipsis;
  display: box;
  line-height: 0.17rem;
  min-height: 0.33rem;
}

.lists p span {
  color: orange;
  display: inline-block;
  border: 1px solid orange;
}

.lists em {
  color: orange;
  font-style: normal;
  font-size: 0.08rem；;
}
</style>