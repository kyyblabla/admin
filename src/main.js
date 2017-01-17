import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
var VueMaterial = require('vue-material')
Vue.use(VueMaterial)
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
