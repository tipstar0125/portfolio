import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { Todo } from '@/types/todo.interface';
import * as MutationTypes from "./mutationTypes";
import * as ActionTypes from "./actionTypes";

type State = {
  todos: Todo[];
};

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    todos: [] as Todo[]
  },
  getters: {
    getTodos: store => {
      return store.todos;
    }
  },
  mutations: {
    [MutationTypes.ADD_TODO_ITEM]: (state, newTask: string): void => {
      const todo = {
        id: state.todos.length,
        task: newTask,
        isDone: false
      };
      state.todos.push(todo);
    },
    [MutationTypes.DELETE_TODO_ITEM]: (state, index: number): void => {
      state.todos.splice(index, 1);
      state.todos.forEach((todo, index): void => {
        todo.id = index;
      })
    },
    [MutationTypes.CHANGE_STATUS]: (state, index: number): void => {
      state.todos[index].isDone = !(state.todos[index].isDone);
    },
  },
  actions: {
    [ActionTypes.ADD_TODO_ITEM] ({ commit }, newTask ) {
      commit(ActionTypes.ADD_TODO_ITEM, newTask);
    },
    [ActionTypes.DELETE_TODO_ITEM] ({ commit }, index ) {
      commit(ActionTypes.DELETE_TODO_ITEM, index);
    },
    [ActionTypes.CHANGE_STATUS] ({ commit }, index ) {
      commit(ActionTypes.CHANGE_STATUS, index);
    },
  },
  modules: {
  },
  plugins: [
    createPersistedState(),
  ],
});

export const useStore = () => {
  return baseUseStore(key);
}