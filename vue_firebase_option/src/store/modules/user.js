const state = {
    user: '',
    email: '',
    password: '',
    uid: '',
}
    
const getters = {
    user: state => state.user,
    email: state => state.email,
    password: state => state.password,
    uid: state => state.uid,
}

const mutations = {
    sign (state, authInfo) {
        state.user = authInfo.user
        state.email = authInfo.email
        state.password = authInfo.password
        state.uid = authInfo.uid
    },
}

const actions = {
    sign ({ commit }, authInfo) {
        commit('sign', authInfo)
    },
}
  
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}