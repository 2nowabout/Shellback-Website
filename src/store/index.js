import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jwtToken: null,
    employerWait: true,
  },
  getters: {
    getCode: (state) => state.logincode,
    getToken: (state) => state.jwtToken,
  },
  mutations: {
    setToken(state, token) {
      state.jwtToken = token;
    },
    logOut(state) {
      state.jwtToken = null;
    },
  },
  actions: {},
  modules: {},
});
