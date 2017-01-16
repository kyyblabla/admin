var Vue = require('vue')
var Vuex = require('vuex')
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  count: 0,
  size: 0
}

const getters = {
  size: state => state.size
}

const mutations = {}

const actions = {
  add({
    commit
  }, data) {
    commit('ADD', data)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug
})

export default store
