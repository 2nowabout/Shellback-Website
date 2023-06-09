import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import LoginPage from "../views/LoginPage.vue";
import HomePage from "../views/HomePage.vue";
import SettingsPage from "../views/SettingsPage.vue";
import NotificationsPage from "../views/NotificationsPage.vue";
import MachinesPage from "../views/MachinesPage.vue";

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
    meta: {
      requireToken: true,
    },
  },
  {
    path: "/settings",
    name: "Settings",
    component: SettingsPage,
    meta: {
      requireToken: true,
    },
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: NotificationsPage,
    meta: {
      requireToken: true,
    },
  },
  {
    path: "/machines",
    name: "Machines",
    component: MachinesPage,
    meta: {
      requireToken: true,
    },
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireToken) {
    if (store.getters.getToken == null) {
      next({ name: "Login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
