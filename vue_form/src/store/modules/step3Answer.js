const state = {
  consult: '',
}
  
const getters = {
  consult: state => state.consult,
}
  
const actions = {
  inputConsult({ commit }, consult) {
    commit('inputConsult', consult)
  },
}

const mutations = {
  inputConsult (state, consult) {
    state.consult = consult
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}