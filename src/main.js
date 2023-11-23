import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css' // Import Bootstrap CSS
import 'bootstrap-vue/dist/bootstrap-vue.css' // Import Bootstrap-Vue CSS
import 'vue-table-component' 
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import { TableComponent } from 'vue-table-component'




Vue.config.productionTip = false

Vue.use(BootstrapVue) // Register BootstrapVue
Vue.use(IconsPlugin)
// Vue.use(TableComponent)


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
