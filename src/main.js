// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
var VueMaterial = require('vue-material')
Vue.use(VueMaterial)
/* eslint-disable no-new */
console.log(store.store)
new Vue({
  store,
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
