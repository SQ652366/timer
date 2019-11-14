<template>
    <div class="messageBox">
        <div class="message_title">
            <div>{{title}}</div>
            <v-touch tag="div" @tap="handleClose()">x</v-touch>
        </div>
        <div class="message_content">
            {{content}}
        </div>
        <div class="message_btn">
            <v-touch tag="div" @tap="handleOk()">确认</v-touch>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style >
.messageBox{
    height:1.32rem;
    width:2.13rem ;
    border-radius: 0.02rem;
    box-shadow: 1px 1px 0.42rem rgba(0,0,0,.3);
    position:absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    margin:auto;
    z-index:20;
    background:#fff


}
.message_title{
    height:0.36rem;
    width:100%;
    background: #f8f8f8;
   
    line-height:0.36rem;
    display:flex;
    justify-content: space-around;
    align-items: center;
}
.message_content{
    padding:0.17rem 0.83rem;
    text-align:center;
}
.message_btn{
    height:0.37rem;
    width:100%;

    display:flex;
    justify-content: center;
    align-items: center;
}
</style>