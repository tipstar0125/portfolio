const state = {
  questions: [
    {item:'現在、生命保険に加入されていますか？', isVisible: true, answer: ''},
    {item:'現在、入院中ですか？または、最近3か月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？', isVisible: false, answer: ''},
    {item:'過去5以内に、病気やけがで、手術をうけたこと、または継続して7日以上の入院をしたことがありますか？', isVisible: false, answer: ''},
  ],
}
  
const getters = {
  questions: state => state.questions,
}
  
const actions = {
  saveStep2({ commit }, answers) {
    commit('saveStep2', answers)
  },
}

const mutations = {
  saveStep2 (state, answers) {
    state.questions = answers
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}