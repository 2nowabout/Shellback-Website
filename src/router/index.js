import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import LoginPage from "../views/LoginPage.vue";
import HomePage from "../views/HomePage.vue";
import SettingsPage from "../views/SettingsPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/settings",
    name: "Settings",
    component: SettingsPage,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireRole) {
    if (!store.getters.getSuccesfullLogin) {
      next({ name: "Login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
