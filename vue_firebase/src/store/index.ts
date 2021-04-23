import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import * as MutationTypes from "./mutationTypes";
import * as ActionTypes from "./actionTypes";

type State = {
  user: string;
};

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    user: ''
  },
  getters: {
    getUser: store => {
      return store.user;
    }
  },
  mutations: {
    [MutationTypes.FETCH_USER]: (state, user: string): void => {
      state.user = user;
    },
  },
  actions: {
    [ActionTypes.FETCH_USER] ({ commit }, user ) {
      commit(ActionTypes.FETCH_USER, user);
    },
  },
});

// eslint-disable-next-line
export const useStore = () => {
  return baseUseStore(key);
}