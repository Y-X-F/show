import Vue from 'vue'
import App from './App.vue'
import router from './router'
/* 导入全局样式 */
import './assets/css/global.css'
/* 导入element框架 */
import './plugins/element.js'
/* 导入字体图标 */
import './assets/font/iconfont.css'
import axios from 'axios'
/* 配置请求的根路径 */
axios.defaults.baseURL = 'http://127.0.0.1:7072/show/manage'
// 挂载到vue
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
