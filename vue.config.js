<<<<<<< HEAD
const path = require("path")
module.exports = {
    devServer: {
        proxy: {
            "/Service": {
                target: "http://m.mtime.cn",
                changeOrigin: true
            }
        }
=======
const path =require("path")
module.exports={
    devServer:{
      proxy:{
        "/Service":{
            target:"http://m.mtime.cn",
            changeOrigin:true
        },
        "/proxy":{
          target:"https://ticket-m.mtime.cn",
          changeOrigin:true
      },
      "/Service":{
        target:" https://m.mtime.cn",
        changeOrigin:true
    },
    "/article":{
        target:"https://content-api-m.mtime.cn",
        changeOrigin:true
    },
    }   
>>>>>>> dd262f28653e23236cdb94b133f77c1681287470
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.join(__dirname, "./src"),
                //接口
                "@api": path.join(__dirname, "./src/api"),
                //静态文件
                "@assets": path.join(__dirname, "./src/assets"),
                //公共的文件样式
                "@common": path.join(__dirname, "./src/common"),
                //创建组件
                "@components": path.join(__dirname, "./src/components"),
                //每一个页面
                "@pages": path.join(__dirname, "./src/pages"),
                //路由
                "@router": path.join(__dirname, "./src/router"),
                //vuex
                "@store": path.join(__dirname, "./src/store"),
                //发布方法的封装
                "@utils": path.join(__dirname, "./src/utils"),
            }
        }
    }
}