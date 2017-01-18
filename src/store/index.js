var Vue = require('vue')
var Vuex = require('vuex')
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const WINDOW_RESIZE = 'WINDOW_RESIZE'
const TOGGLE_SIDE_NAV = 'TOGGLE_SIDE_NAV'
const AJAXING = 'AJAXING'

const state = {
  windowSize: {
    width: 0,
    height: 0
  },
  toggleSideNav: false,
  ajaxing: false
}

const getters = {
  windowSizeDesc: state => (state.windowSize.width && state.windowSize.width < 960) ? 'small' : 'large',
  ajaxing: state => state.ajaxing
}

const mutations = {
  [WINDOW_RESIZE](state, size) {
    state.windowSize = size
  },
  [TOGGLE_SIDE_NAV](state) {
    state.toggleSideNav = !state.toggleSideNav
  },
  [AJAXING](state, ajaxing) {
    state.ajaxing = ajaxing
  }
}

const actions = {
  resize: ({commit}, size) => commit(WINDOW_RESIZE, size),
  toggleSideNav: ({commit}) => commit(TOGGLE_SIDE_NAV),
  ajaxing: ({commit}, ajaxing) => commit(AJAXING, ajaxing)
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug
})
