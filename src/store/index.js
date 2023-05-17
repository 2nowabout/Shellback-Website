import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jwtToken: null,
    employerWait: true,
    chosenCompany: {
      companyname: null,
      ipadress: null,
    },
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
    setCompany(state, companyname, ipadress) {
      state.chosenCompany.companyname = companyname;
      state.chosenCompany.ipadress = ipadress;
    },
  },
  actions: {},
  modules: {},
});
