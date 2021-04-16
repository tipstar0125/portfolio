import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { Todo } from '@/types/todo.interface';

export const store = createStore({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    todos: [] as Todo[]
  },
  getters: {
    getTodos: (state) => {
      return state.todos;
    }
  },
  mutations: {
    addTask: (state, newTask: string): void => {
      const todo = {
        id: state.todos.length,
        task: newTask,
        isDone: false
      };
      state.todos.push(todo);
    },
    deleteTask: (state, index: number): void => {
      state.todos.splice(index, 1);
      state.todos.forEach((todo, index): void => {
        todo.id = index;
      })
    },
    changeStatus: (state, index: number): void => {
      state.todos[index].isDone = !(state.todos[index].isDone);
    },
  },
  actions: {
    addTask: (context, newTask: string): void => {
      context.commit('addTask', newTask);
    },
    deleteTask: (context, index: number): void => {
      context.commit('deleteTask', index);
    },
    changeStatus: (context, index: number): void => {
      context.commit('changeStatus', index);
    },
  },
  modules: {
  },
  plugins: [
    createPersistedState(),
  ],
})
