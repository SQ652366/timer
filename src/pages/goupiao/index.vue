<template>
  <div>
    <div class="ban">
      <div class="ban_left">
        <span>北京</span>
        <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i_city.png" alt />
      </div>
      <div class="ban_right">
        <input type="text" placeholder="筛选影院" />
      </div>
      <div class="ban-p">
        <p>搜索</p>
      </div>
    </div>
    <div class="nav">
      <div>
        <a href>离我最近</a>
        <span>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAASCAYAAAAzI3woAAAAAXNSR0IArs4c6QAAAJ5JREFUSA3N1ksOgCAMBFAbzkXisdiJO47lgnuhNTHxw6ctKE4y28lbDhhjbAhhGn4QAJiV937RWsPmGXuaEOOcswoRvVEHBi07qCfqjLmAeqDumAfoS1QMEwV9gUphkqA3UTlMFvQGqoQpglqiKBgSqAWKiiGDalAcDAskQXExbBAHJcGIQBSUFCMG5VA1mCpQDFWLwc0mwZOHbTG2AsaPc+rNNOCIAAAAAElFTkSuQmCC"
            alt
          />
        </span>
        <span class="line">|</span>
      </div>
      <div>
        <a href>全城</a>
        <span>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAASCAYAAAAzI3woAAAAAXNSR0IArs4c6QAAAJ5JREFUSA3N1ksOgCAMBFAbzkXisdiJO47lgnuhNTHxw6ctKE4y28lbDhhjbAhhGn4QAJiV937RWsPmGXuaEOOcswoRvVEHBi07qCfqjLmAeqDumAfoS1QMEwV9gUphkqA3UTlMFvQGqoQpglqiKBgSqAWKiiGDalAcDAskQXExbBAHJcGIQBSUFCMG5VA1mCpQDFWLwc0mwZOHbTG2AsaPc+rNNOCIAAAAAElFTkSuQmCC"
            alt
          />
        </span>
        <span class="line">|</span>
      </div>
      <div>
        <a href>影厅特效</a>
        <span>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAASCAYAAAAzI3woAAAAAXNSR0IArs4c6QAAAJ5JREFUSA3N1ksOgCAMBFAbzkXisdiJO47lgnuhNTHxw6ctKE4y28lbDhhjbAhhGn4QAJiV937RWsPmGXuaEOOcswoRvVEHBi07qCfqjLmAeqDumAfoS1QMEwV9gUphkqA3UTlMFvQGqoQpglqiKBgSqAWKiiGDalAcDAskQXExbBAHJcGIQBSUFCMG5VA1mCpQDFWLwc0mwZOHbTG2AsaPc+rNNOCIAAAAAElFTkSuQmCC"
            alt
          />
        </span>
      </div>
    </div>


    <div class="bo" v-for="(item,index) in goupiao" :key="index">
      <div class="pice">
        <span>{{item.cinameName}}</span>
       <div class="pice-two">
          <b>{{item.minPrice/100}}</b>
        <i>元起</i>
       </div>
      </div>
      <div class="adress">
        <p>{{item.address}}</p>
      </div>
      <div class="bx">
        <em v-if="item.feature.has3D==1">{{item.feature.has3D==1?'3D':''}}</em>
        <em v-if="item.feature.hasIMAX==1">{{item.feature.hasIMAX==1?'IMAX':''}}</em>
        <em v-if="item.feature.hasVIP==1">{{item.feature.hasVIP==1?'VIP':''}}</em>
      </div>
    </div>



    <div class="ft">
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
import { goupiao } from "@api/hot"
export default {
  name: "goupiao",
  data(){
    return{
      goupiao:[]
    }
  },
  async created(){
    let data = await goupiao();
   this.goupiao=data.data.cinemaList
  }
};
</script>

<style>
.ban {
  height: 0.5rem;
  width: 100%;
  background: #f6f6f6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-shrink: 0;
}
.ban_left span {
  font-size: 0.16rem;
}
.ban_left img {
  width: 0.1rem;
  height: 0.05rem;
}
.ban_right input {
  height: 0.34rem;
  width: 1rem;
  outline: none;
  border-radius: 0.07rem;
  border: 1px solid #ccc;
  background: url("http://static1.mtime.cn/html5/20191022151144/images/2014/search_ico_01.png")
    no-repeat 0.04rem center;
  padding-left: 0.24rem;
  font-size: 0.16rem;
  background-size: 0.18rem;
}
.ban-p p {
  width: 0.6rem;
  height: 0.3rem;
  text-align: center;
  line-height: 0.3rem;
  border: 1px solid #fff;
  border-radius: 0.05rem;
}
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 0.4rem;
  flex-shrink: 0;
  box-sizing: border-box;
  color: #777;
  font-size: 0.1rem;
  border-bottom: 1px solid #ccc;
}
.nav div span img {
  height: 0.04rem;
  width: 0.04rem;
  margin-left: 0.03rem;
}
.line {
  margin-left: 0.17rem;
  color: #ccc;
}
.bo {
  box-sizing: border-box;
  margin-left: 0.1rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.08rem;
  height:auto;
}
.bx {
  display: flex;
}

.bx em {
  margin: 0.05rem 0.02rem;
  border: 1px solid #6d8297;
  font-size: 0.08rem;
  color: #6d8297;
}
.pice {
  font-size: 0.13rem;
  line-height: 0.2rem;
  margin-top: 0.1rem;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding:0 .1rem 0 0
}
.pice b {
  color: #ff8600;
}
.pice i {
  color: #ff8600;
  font-size: 0.1rem;
}
.adress {
  font-size: 0.1rem;
  color: #555;
  line-height: 0.2rem;
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