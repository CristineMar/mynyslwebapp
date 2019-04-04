import Vue from 'vue'


import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import Vuetify from 'vuetify'
import './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

import VueRouter from 'vue-router'


import Router from './router'
import App from './App.vue'


Vue.use(Vuetify, {
  iconfont: 'fa'
 })
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.config.productionTip = false


const router = new VueRouter({
  routes: Router
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
