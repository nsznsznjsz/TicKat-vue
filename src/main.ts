import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import { store } from '@/store'
// axios
import axios from 'axios'
// Font Awesome
import 'font-awesome/css/font-awesome.min.css'
// ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
