<template>
  <div>
       <div class="ad">
        <ul>
            <v-touch @tap="handle()" class="ad-img-one"><img src="http://static1.mtime.cn/html5/20191022151144/images/2014/h_btn_back.png" alt=""></v-touch >
            <li class="ad-li">帮助中心</li>
            <li> </li>
        </ul>
</div> 
<div class="ner">
    <div>购物指南</div>
    <div> </div>
</div>
<div class="b">
    <div>1.购物流程</div>
    <router-link tag="div" to="/zhongxin" class="b-img"><img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i-tmore.png" alt=""></router-link>
</div>
<div class="b">
    <div>2.常见内容</div>
    <div class="b-img"><img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i-tmore.png" alt=""></div>
</div>
<div class="b">
    <div>3.发票制度</div>
    <div class="b-img"><img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i-tmore.png" alt=""></div>
</div>
<div class="b" style="border:0">
    <div>4.联系我们</div>
    <div class="b-img"><img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i-tmore.png" alt=""></div>
</div>
<div class="line"></div>


<div class="ner">
    <div>支付方式</div>
    <div> </div>
</div>
<div class="b">
    <div>1.在线付款</div>
    <div class="b-img"><img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i-tmore.png" alt=""></div>
</div>
<div class="b">
    <div>2.余额付款</div>
    <div class="b-img"><img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i-tmore.png" alt=""></div>
</div>
<div class="b">
    <div>3.优惠卷使用说明</div>
    <div class="b-img"><img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i-tmore.png" alt=""></div>
</div>
<div class="line"></div>

<div class="ner">
    <div>配送方式</div>
    <div> </div>
</div>
<div class="b">
    <div>1.邮费说明</div>
    <div class="b-img"><img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i-tmore.png" alt=""></div>
</div>
<div class="b">
    <div>2.配送服务范围</div>
    <div class="b-img"><img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i-tmore.png" alt=""></div>
</div>
<div class="b">
    <div>3.配送速度查询</div>
    <div class="b-img"><img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i-tmore.png" alt=""></div>
</div>
<div class="b" style="border:0">
    <div>4.验货与签收</div>
    <div class="b-img"><img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i-tmore.png" alt=""></div>
</div>
<div class="line"></div>

<div class="fooer">
    <div><a href="">首页</a></div>
    <div><a href="">购票</a></div>
    <div><a href="">商城</a></div>
    <div><a href="">发现</a></div>
    <div><a href="">我的</a></div>
</div>
<div class="fooer_two">
    <div>pc版<span>|</span></div>
    <div>客户端下载<span>|</span></div>
    <div>意见反馈<span>|</span></div>
    <div>建议中心</div>
</div>
<div class="bottom-one">
    <div class="imgone"><img src="http://static1.mtime.cn/html5/20191022151144/images/2014/fot_logo.png" alt=""></div>
    <div class="imgtwo"><img src="http://static1.mtime.cn/html5/20191022151144/images/h_mark.jpg" alt=""></div>
</div>
<div class="bottom">
    <span>Copyright </span>
    <span>2006-2019</span>
    <span> Mtime.com Inc. All rights reserved.</span>
</div>
  </div>
</template>

<script>
export default {
  name: "fuwu",
  methods:{
    handle(){
      this.$router.back()
    }
  }
};
</script>

<style>
.ad {
  background: #1c2635;
  display: flex;
  height: 0.44rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.12rem;
}
.ad ul {
  height: 0.44rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ad ul li {
  display: flex;
  justify-content: center;
  align-items: center;
}
.ad-img-one img {
  height: 0.15rem;
  width: 0.1rem;
}
.ad-li {
  color: #fff;
  font-size: 0.15rem;
}
.ner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-left: 0.2rem;
  flex-shrink: 0;
  height: 0.46rem;
  border-bottom: 1px solid #ccc;
  font-size: 0.14rem;
}
.b {
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-left: 0.2rem;
  padding-right: 0.2rem;
  height: 0.44rem;
  font-size: 0.14rem;
  color: #777;
  border-bottom: 1px solid #ccc;
}
.b-img img {
  transform: rotate(-90deg);
  height: 0.1rem;
  width: 0.14rem;
}
.line {
  height: 0.14rem;
  background: #f6f6f6;
  display: flex;
  flex-shrink: 0;
}
.line-footer {
  height: 0.36rem;
  background: #f6f6f6;
  display: flex;
  flex-shrink: 0;
}
.fooer {
  height: 0.45rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-shrink: 0;
}
.fooer div a {
  color: #1e7dd7;
  font-size: 0.14rem;
}
.fooer_two {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-shrink: 0;
  height: 0.3rem;
  box-sizing: border-box;
  color: #333;
  background: #f6f6f6;
}
.fooer_two div span {
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