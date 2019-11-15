<template>
<!-- 是一个组件 -->
<div class="scroll_container">
    <div class="scroll_loading" v-if="flag">
         <i class="fa fa-spinner fa-pulse"></i>
    </div>
    <div class="wrapper" ref="wrapper">
<slot></slot>
    </div>
    </div>
</template>

<script>
import Bscroll from "Better-scroll"
    export default {
        name:"Ysroll",
        data(){
            return{
                flag:false
            }
        },
        mounted(){
         this.scroll= new Bscroll(this.$refs.wrapper,{
                probeType:1,//非实时触发，节流（sroll事件配置项）
                pullDownRefresh:true,//下拉刷新功能配置项
                tap:true,
                click:true
            })
        },
        methods:{
            handleScroll(){
                this.scroll.on("scroll",(pro)=>{//pro是一个对象(x,y)
                    if(pro.y>30){
                        this.flag=true
                    }
                })
            },
            //下拉刷新动作
            handlePullingDown(callback){
                this.scroll.on("pullingDown",()=>{
                    console.log(callback)//ƒ () {
                        // _this.handlegoodsList();
                        //}
                   callback()//必须是获取数据的函数
                })
            },
            //当数据请求成功的时候执行的方法
            handleRefreshDown(){
                //重新计算better-scroll的高度；
                this.scroll.refresh()
                //防止用户多次频繁下拉做的防抖
                this.scroll.finishPullDown()
                setTimeout(()=>{
                    this.flag=false
                },1500)
                

            }
        }
    }
</script>

<style >
.wrapper,.scroll_container{
    /* 遵循上一级的高度 */
    height:100%;
}
.scroll_loading{
    text-align:center;
}
</style>