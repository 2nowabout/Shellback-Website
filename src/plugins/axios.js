import Vue from "vue";
import axios, { Axios } from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default new Axios();
