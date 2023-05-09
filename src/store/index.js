import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jwtToken: null,
    user: {
      username: null,
      email: null,
    },

    employerWait: true,
  },
  getters: {
    getCode: (state) => state.logincode,
  },
  mutations: {},
  actions: {},
  modules: {},
});
