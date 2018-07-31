/**
 * Created by Rodey on 2018/2/28
 */

import Vue from 'vue';
import Vuex from 'vuex';
import DB from './db';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: DB.getTodoList()
  },
  mutations: {
    ADD_TODO: (state, content) => {
      if (!content) return;
      DB.addTodoAsContent(content);
      state.todos = [...DB.getTodoList()];
    },
    DELETE_TODO: (state, index) => {
      if (index < 0) return;
      state.todos.splice(index, 1);
      DB.deleteTodoAsIndex(index);
    },
    SWITCH_TODO: (state, index) => {
      if (index < 0) return;
      DB.switchTodo(index);
      state.todos = [...DB.getTodoList()];
    },
    UPDATE_TODO: (state, peyload) => {
      const { index, content } = peyload;
      DB.updateTodo(index, content);
      state.todos = [...DB.getTodoList()];
    },
    GET_TODO_LIST: (state, type) => {
      let todos = DB.getTodoList();
      if (type === '1') {
        todos = todos.filter(todo => todo.completed);
      }
      if (type === '0') {
        todos = todos.filter(todo => !todo.completed);
      }
      state.todos = [...todos];
    }
  },
  actions: {
    getTodoList({ commit }, type) {
      commit('GET_TODO_LIST', type);
    },
    doSwitchTodo({ commit }, index) {
      commit('SWITCH_TODO', index);
    },
    doRemoveTodo({ commit }, index) {
      commit('DELETE_TODO', index);
    }
  },
  getters: {
    allTodos: state => state.todos,
    allNum: state => state.todos.length,
    completedNum: state => state.todos.filter(todo => todo.completed).length
  }
});

export default store;
