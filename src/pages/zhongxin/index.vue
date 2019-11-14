<template>
  <div>
    <div class="head">
      <ul>
        <v-touch @tap="hand()" class="head-img-one">
          <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/h_btn_back.png" alt />
        </v-touch>
        <li class="head-li">帮助中心</li>
        <li></li>
      </ul>
    </div>

    <div class="body">
      <p>1.查找商品</p>
      <p>2.放入购物车</p>
      <p>3.提交订单</p>
      <p>4.填写收货人信息</p>
      <p>5.结算中心</p>
      <p>6.订单完成确认</p>
    </div>

    <div class="position">
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
        <div>建议中心</div>
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
export default {
  name:"zhongxin",
  methods:{
    hand(){
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

.body {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0.2rem 0.1rem;
  background: #fff;
  align-items: center;
}
.body p {
  height: 0.3rem;
  color: #777;
  width: 100%;
  font-size: 0.14rem;
}

.footer {
  height: 0.45rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-shrink: 0;
  background: #fff;
  width: 100%;
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
.position {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>