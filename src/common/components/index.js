import Vue from "vue" //记得在main.js中引入
import BScroll from "./bsscroll"
let componentMap = [BScroll]


// 全局注册
componentMap.forEach((item) => {

    Vue.component(item.name, item)
})