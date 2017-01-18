import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Test from './components/Test.vue'
import NotFound from './components/NotFound.vue'
Vue.use(VueRouter)

const routes = [
  {path: '/home', name: '首页', component: Home, showMenu: true},
  {path: '/test', name: '测试', component: Test, showMenu: true},
  {path: '/', redirect: '/home'},
  {path: '*', name: '404', component: NotFound}
]

var router = new VueRouter({
  mode: 'history',
  routes,
  //翻页滚动到上一个位置
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})

module.exports = {
  routes,
  router
}
