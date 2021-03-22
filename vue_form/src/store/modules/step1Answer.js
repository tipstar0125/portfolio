const state = {
  sex: '',
  birthday: {
    year: '',
    month: '',
    day: '',
  },
}
  
const getters = {
  sex: state => state.sex,
  birthday: state => state.birthday,
}
  
const actions = {
  checkSex({ commit }, sex) {
    commit('checkSex', sex)
  },
  inputBirthday({ commit }, birthday) {
    commit('inputBirthday', birthday)
  },
}

const mutations = {
  checkSex (state, sex) {
    state.sex = sex
  },
  inputBirthday (state, birthday) {
    state.birthday.year = birthday.year
    state.birthday.month = birthday.month
    state.birthday.day = birthday.day
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}