//节流 防止搜索框一变化就请求
export const throttle = (function() {
    var firstTime = 0;
    return function(callback, time = 300) {
        var lastTime = new Date().getTime()
        if (lastTime - firstTime > time) {
            callback();
            firstTime = lastTime
        }
    }
})()