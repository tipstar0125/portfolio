import Vue from 'vue'
import Vuex from 'vuex'
import step1Answer from './modules/step1Answer'
import step3Answer from './modules/step3Answer'
import step2Answer from './modules/step2Answer'

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
    step2Answer,
    step3Answer,
  }
})
