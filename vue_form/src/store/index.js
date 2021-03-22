import Vue from 'vue'
import Vuex from 'vuex'
import step1Answer from './modules/step1Answer'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    step1Answer,
  }
})
