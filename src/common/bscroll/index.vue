<template>
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
import Bscroll from "better-scroll";
export default {
  name: "Bscroll",
  data(){
    return{
      flag:false
    }
  },
  mounted() {
   this.scroll=new Bscroll(this.$refs.wrapper,{
     probeType:1,
     click:true,
     tap:true
   })
  },
  methods:{
    handleScroll(){
      this.scroll.on("scroll",pro=>{
        if(pro.y>20){
          this.flag=true
          setTimeout(()=>{
      this.flag=false;
    },1000)
        }
 
      })
    },
        handleScrol(){
      this.scroll.on("scroll",pro=>{
        if(pro.y>20){
          this.flag=true
          setTimeout(()=>{
      this.flag=false;
    },1000)
        }
 
      })
    },
  }
};
</script>

<style>
.wrapper,
.scroll_container {
  height: 5rem;
}
.scroll_loading{
    display: flex;
    justify-content: center;
    align-items: center;
    height: .4rem;
}

.scroll_loading i{
    font-size: .4rem;
}
</style>