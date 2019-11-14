<template>
    <div class="page">
         <div class="ead">
        <ul>
            <li class="ead-img-two"><img src="http://static1.mtime.cn/html5/20191022151144/images/2014/h_btn_back.png" alt=""></li>
            <li class="ead-img-one"><img src="http://static1.mtime.cn/html5/20191022151144/images/2014/logo_mtime.png" alt=""></li>
            <li> </li>
        </ul>
    </div> 
        <div class="ber">
    <ul>
        <li class="imne">
            <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i_user.png" alt="">
            <input type="text" placeholder="登录邮箱/手机密码">
        </li>
        <li class="imwo">
            <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/i_password.png" alt="">
            <input type="password" placeholder="密码">
            <span class="pwd">显示密码</span>
        </li>
    </ul>
</div>
<div class="bd">
    <a class="by">登录</a>
</div>
<div class="bod-bottom">
    <a href="">免费注册</a>
    <a href="">找回密码</a>
    <div class="center">使用第三方登录</div>
</div>
<div class="fo">
    <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/o_sina.png" alt="">
    <img src="http://static1.mtime.cn/html5/20191022151144/images/2014/o_qq.png" alt="">
</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style >
body{
    background:#f6f6f6
}
.ead{
    background:#1c2635;
    display:flex;
    height:.44rem;
    width:100%;
    box-sizing: border-box;
    padding:0 .12rem
}
.ead ul{
    height:.44rem;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items: center;
}
.ead ul li{
    display:flex;
    justify-content:center;
    align-items: center;
}
.ead-img-one img{
    height:.17rem;
    width:.52rem
}
.ead-img-two img{
    height:.15rem;
    width:.1rem
}
.ber{
    height:.82rem;
    box-sizing: border-box;
    margin-left:.17rem;
    align-items: center;
    display: flex;
    position: relative;
    background:#fff
}
.imne img{
    width:.2rem;
    height:.24rem;
}
.imwo img{
    width:.2rem;
    height:.24rem
}
.ber input{
    width:2.5rem;
    height:.4rem;
    outline: none;
    border:0;
    font-size: .14rem;
    padding-left:.1rem;
    background:#fff
}
.ber li{
    border-bottom:1px solid #ccc
}
.pwd{
    position: absolute;
    display: inline-block;
    width:.6rem;
    height:.4rem;
    right:.07rem;
    top:.58rem;
    font-size: .14rem;
    color:#1e7dd7
}
.bd{
    height:.6rem;
    background:#f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top:.1rem
}
.by{
    height:.4rem;
    width:80%;
    background:#1e7dd7;
    text-align: center;
    line-height: .4rem;
    color:#fff;
    font-size: .14rem;
    border-radius: .19rem;
}
.bod-bottom{
    height:.2rem;
    background:#f6f6f6;
    display: flex;
    justify-content:space-between;
    align-items: center;
    box-sizing: border-box;
    padding:0 .2rem;
    font-size:.15rem;
   border-bottom:1px solid #ccc;
   padding-bottom:.5rem;
   flex-shrink: 0;
   position: relative;
}
.bod-bottom a{
    color:#1e7dd7;
    margin-top:.3rem
}
.center{
    position:absolute;
    background:#f6f6f6;
    top:.44rem;
    left:36%;
    font-size: .1rem;
    color:#ccc;
    padding:0 0.1rem
}
.fo{
    display: flex;
    justify-content: center;
    align-items: center;
    height:1rem;
    box-sizing: border-box;
}
.fo img{
    width:.6rem;
    height:.6rem;
    margin:0 .1rem
}
</style>