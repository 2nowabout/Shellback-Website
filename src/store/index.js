import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jwtToken: null,
    employerWait: true,
    chosenCompany: null,
  },
  getters: {
    getCode: (state) => state.logincode,
    getToken: (state) => state.jwtToken,
    getCompany: (state) => state.chosenCompany,
  },
  mutations: {
    setToken(state, token) {
      state.jwtToken = token;
    },
    logOut(state) {
      state.jwtToken = null;
    },
    setCompany(state, value) {
      console.log("STORE IS STORING: " + value.ipadress);
      state.chosenCompany = value;
    },
  },
  actions: {},
  modules: {},
});
