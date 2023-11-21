// store.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authToken: localStorage.getItem('authToken') || null,
  },
  mutations: {
    setAuthToken(state, token) {
      state.authToken = token;
    },
  },
});
