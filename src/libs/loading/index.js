import LoadingView from "./index.vue";
import Vue from "vue"
class JsLoading {
    constructor() {
        let LoadingFn = Vue.extend(LoadingView) //LoadingFn相当于Vue
        this.loadingVm = new LoadingFn({ //loadingVm相当于Vue的一个实例
            el: document.createElement("div")
        })

    }
    loadingMount() { //$el:获取Vue实例相关联的DOM元素
        document.body.appendChild(this.loadingVm.$mount().$el)
    }
    destroyLoading() {
        document.body.removeChild(this.loadingVm.$mount().$el)
    }
}
export default new JsLoading() //导出一个实例，节省性能