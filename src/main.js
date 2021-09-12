import Vue from 'vue'
import App from './App.vue'
import router from "./router/router"
import store from "./store/index"

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
  router,
  store
}).$mount('#app')