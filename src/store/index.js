var Vue = require('vue')
var Vuex = require('vuex')
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const WINDOW_RESIZE = 'WINDOW_RESIZE'
const TOGGLE_SIDE_NAV = 'TOGGLE_SIDE_NAV'

const state = {
  windowSize: {
    width: 0,
    height: 0
  },
  toggleSideNav: false
}

const getters = {
  windowSizeDesc: state => (state.windowSize.width && state.windowSize.width < 960) ? 'small' : 'large'
}

const mutations = {
  [WINDOW_RESIZE](state, size) {
    state.windowSize = size
  },
  [TOGGLE_SIDE_NAV](state) {
    state.toggleSideNav = !state.toggleSideNav
  }
}

const actions = {
  resize: ({commit}, size) => commit(WINDOW_RESIZE, size),
  toggleSideNav: ({commit}) => commit(TOGGLE_SIDE_NAV)
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug
})
