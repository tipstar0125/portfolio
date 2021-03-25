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
  saveStep2({ commit }, answer) {
    commit('saveStep2', answer)
  },
}

const mutations = {
  saveStep2 (state, answer) {

    const index = Number(Object.keys(answer)[0])
    const yesno = answer[index]

    state.questions[index].answer = yesno

    if (index < state.questions.length-1) {
      state.questions[index+1].isVisible = true
    }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}