import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'styles/reset.css'
// 移动端问题
// 1像素边框问题
import 'styles/border.css'
// 300毫秒延迟问题，在某些机型某些浏览器上，click事件有300毫秒延迟
// 之所以有这个问题是因为手机上双击缩放的功能，第一次点击后等300毫秒看是否会有第二次点击
// 设置禁止缩放能解决大部分问题，但是部分苹果手机还是不行
// <meta name="viewport" content="width=device-width user-scalable= 'no'">
// 引入fastclick库解决
import 'styles/iconfont.css'

import fastClick from 'fastclick'

Vue.config.productionTip = false
fastClick.attach(document.body)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
