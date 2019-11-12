<template>
    <div class="page">
        <nav>
            <ol>
                <li><a href="">新闻</a></li>
                <li><a href="">预告片</a></li>
                <li><a href="">排行榜</a></li>
                <li><a href="">影评</a></li>

            </ol>
        </nav>
        <div class="show">
            <img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F07%2F18%2F102211.29411290.jpg&width=640&height=360&clipType=3" alt="">

            <h2>
                <b>《复仇者联盟4》重要彩蛋全解析</b>
            </h2>

        </div>
        <div class="news">
            <div class="pic_show">
                <p>变瘦的“海后”艾梅柏又美回来了</p>
                <div class="pic_list">
                    <img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2FCMS%2FGallery%2F2019%2F11%2F08%2F123304.26243040.jpg&width=190&height=130&clipType=4" alt="">
                    <img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2FCMS%2FGallery%2F2019%2F11%2F08%2F123311.58019398.jpg&width=190&height=130&clipType=4" alt="">
                    <img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2FCMS%2FGallery%2F2019%2F11%2F08%2F123321.17839772.jpg&width=190&height=130&clipType=4" alt="">
                </div>
                <div>
                    <span>9小时前</span>
                    <span>评论4</span>
                </div>
            </div>

            <div class="news2">
                <div class="news2_img">
                    <img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F11%2F08%2F110915.54692145.jpg&width=150&height=150&clipType=" alt="">
                </div>
                <div class="news2_list">
                    <p>海伦米伦：基努很可爱但我不是他..</p>
                    <div>
                        <span>9小时前</span>
                        <span>评论4</span>
                    </div>
                </div>
            </div>
            <div class="pic_show">
                <p>变瘦的“海后”艾梅柏又美回来了</p>
                <div class="pic_list">
                    <img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2FCMS%2FGallery%2F2019%2F11%2F08%2F123304.26243040.jpg&width=190&height=130&clipType=4" alt="">
                    <img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2FCMS%2FGallery%2F2019%2F11%2F08%2F123311.58019398.jpg&width=190&height=130&clipType=4" alt="">
                    <img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2FCMS%2FGallery%2F2019%2F11%2F08%2F123321.17839772.jpg&width=190&height=130&clipType=4" alt="">
                </div>
                <div>
                    <span>9小时前</span>
                    <span>评论4</span>
                </div>
            </div>

            <div class="news2">
                <div class="news2_img">
                    <img src="http://imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F11%2F08%2F110915.54692145.jpg&width=150&height=150&clipType=" alt="">
                </div>
                <div class="news2_list">
                    <p>海伦米伦：基努很可爱但我不是他..</p>
                    <div>
                        <span>9小时前</span>
                        <span>评论4</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"find"
        

    }
</script>

<style >
    nav{
        height:0.4rem
    }
    nav ol {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 0.4rem;
    }
    
    nav ol li {
        list-style: none;
    }
    
    nav ol li a {
        color: #000;
    }
    
    .news {
        padding-left: 0.13rem;
    }
    
    .show {
        position: relative;
    }
    
    .show img {
        height: 1.98rem;
        width: 100%;
    }
    
    .show h2 {
        position: absolute;
        bottom: 0.04rem;
        left: 0;
        color: #fff;
        background: rgba(0, 0, 0, .5);
        width: 100%;
        font-size: 0.13rem;
        height: 0.38rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .pic_show {
        border-bottom: 1px solid #ccc;
    }
    
    .pic_show p {
        font-weight: bold;
        margin: 0.13rem 0;
    }
    
    .pic_show .pic_list {
        display: flex
    }
    
    .pic_show .pic_list img {
        width: 0.95rem;
        height: 0.65rem;
    }
    
    .pic_show span {
        font-size: 0.1rem;
        color: #777;
        margin-right: 0.15rem;
    }
    
    .news2 {
        display: flex;
        border-bottom: 1px solid #ccc;
    }
    
    .news2_img img {
        width: 0.75rem;
        height: 0.75rem;
        margin: 0.17rem;
    }
    
    .news2_list {
        padding-top: 0.17rem;
    }
    
    .news2_list p {
        font-weight: bold;
        margin-bottom: 0.08rem;
    }
    
    .news2_list span {
        font-size: 0.1rem;
        color: #777;
        margin-right: 0.15rem;
    }
    
</style>