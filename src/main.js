import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css' // Import Bootstrap CSS
import 'bootstrap-vue/dist/bootstrap-vue.css' // Import Bootstrap-Vue CSS
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'



Vue.use(BootstrapVue) // Register BootstrapVue
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
