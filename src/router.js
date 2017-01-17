import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Test from './components/Test.vue'
import NotFound from './components/NotFound.vue'
Vue.use(VueRouter)

const routes = [
  {path: '/home', component: Home},
  {path: '/test', component: Test},
  {path: '/', redirect: '/home'},
  {path: '*', component: NotFound}
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
module.exports = router
