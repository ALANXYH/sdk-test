import Vue from 'vue'
import App from './App.vue'
import COM from 'sdk-test/lib/main.js'

Vue.config.productionTip = false
Vue.use(COM)


new Vue({
  render: h => h(App),
}).$mount('#app')
