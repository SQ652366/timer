import MessageBoxView from "./index.vue"
import Vue from "vue"
export default (() => {
    let defaultVal = {
        title: "信息",
        content: "内容",
        ok: function() {}
    }

    let MessageBoxFn = Vue.extend(MessageBoxView)
    return (options) => {
        for (var key in options) {
            defaultVal[key] = options[key]
        }
        let MessageBoxVm = new MessageBoxFn({
            el: document.createElement("div"),
            data: {
                title: defaultVal.title,
                content: defaultVal.content,
                ok: defaultVal.ok
            },
            methods: {
                handleOk() {
                    document.body.removeChild(MessageBoxVm.$mount().$el)
                    defaultVal.ok && defaultVal.ok()
                },
                handleClose() {
                    document.body.removeChild(MessageBoxVm.$mount().$el)
                }
            }
        })

        document.body.appendChild(MessageBoxVm.$mount().$el)
    }



})()