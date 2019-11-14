import Vue from "vue" //全局过滤器
Vue.filter("toImg", (url, offset) => {
        return url.replace(/w\.h/, offset)
    }) //记得在入口文件那里引用一下