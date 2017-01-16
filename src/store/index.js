var Vue = require('vue')
var Vuex = require('vuex')
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const WINDOW_RESIZE = 'WINDOW_RESIZE'

const state = {
  windowSize: {
    width: 0,
    height: 0
  }
}

const getters = {
  windowSize: state => (state.windowSize.width && state.windowSize.width < 960) ? 'small' : 'large'
}

const mutations = {
  [WINDOW_RESIZE](state, {width, height}) {
    state.windowSize = {width, height}
  }
}

const actions = {
  resize: ({commit}, size) => commit(WINDOW_RESIZE, size)
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug
})
