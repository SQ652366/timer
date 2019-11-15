import LoadingView from "./index.vue";
import Vue from "vue"
class JsLoading {
    constructor() {
        if (!this.loadingVm) {
            console.log(111)
            let LoadingFn = Vue.extend(LoadingView) //LoadingFn相当于Vue
            this.loadingVm = new LoadingFn({ //loadingVm相当于Vue的一个实例
                el: document.createElement("div")
            })
        }



    }
    loadingMount() { //$el:获取Vue实例相关联的DOM元素
        //console.log(this.loadingVm.$el)
        document.body.appendChild(this.loadingVm.$el)
    }
    destroyLoading() {
        // console.log(this.loadingVm.$el)
        // document.body.removeChild(this.loadingVm.$el)

        this.loadingVm.$el.remove();
    }
}
export default new JsLoading() //导出一个实例，节省性能