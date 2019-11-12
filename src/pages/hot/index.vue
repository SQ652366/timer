<template>
  <div>
    <Head />
    <div class="body">
      <div class="body-left">
        <img
          src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F11%2F07%2F111315.58628907_1280X720X2.jpg&width=130&height=195&clipType=4"
          alt
        />
      </div>
      <div class="body-right">
        <div class="body-right-hed">
          <b>决战中途岛</b>
          <i>7.6</i>
        </div>
        <div class="body-right-two">
          <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i_dot_01.png" alt />
          <span>震撼再现二战传奇战役</span>
        </div>
        <div class="body-right-img">
          <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/ia_cine_15.png" alt />
        </div>
        <div class="body-right-zi">
          <b>173家影院上映1072场</b>
          <a href>购票</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "@common/head";
export default {
  name: "Hot",
  components: {
    Head
  }
};
</script>

<style>
.body {
  display: flex;
  box-sizing: border-box;
  margin: 0 0.17rem;
  padding-top: 0.16rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: .12rem
}
.body-left img {
  height: 0.94rem;
  width: 0.64rem;
}
.body-right {
  margin-left: 0.17rem;
}
.body-right-hed {
  line-height: 0.18rem;
}
.body-right-hed i {
  background: #659d0e;
  font-size: 0.1rem;
  width: 0.18rem;
  height: 0.12rem;
  display: inline-block;
  color: #fff;
  margin-left: 0.08rem;
}
.body-right-hed b {
  font-size: 0.14rem;
}
.body-right-two {
  line-height: 0.16rem;
  margin: 0.06rem 0 0.06rem 0;
}
.body-right-two span {
  color: #659d0e;
}
.body-right-two img {
  width: 0.1rem;
  height: 0.1rem;
  vertical-align: 0rem;
}
.body-right-img img {
  width: 0.5rem;
  height: 0.16rem;
}
.body-right-zi b {
  color: #555;
  font-size: 0.1rem;
  font-weight: 100;
}
.body-right-zi a {
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