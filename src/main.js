import Vue from 'vue'
import App from './App'
import store from './store'
import { router } from './router'
var VueMaterial = require('vue-material')
Vue.use(VueMaterial)
Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'red',
  warn: 'red'
})
/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
