import Vue from "vue";
import VueRouter from "vue-router";

import store from "../store/index";

Vue.use(VueRouter);

Vue.config.productionTip = false;

// Pages
import Home from "../pages/home.vue";
import Scan from "../pages/scan.vue";
import PasswordManager from "../pages/passwordManager.vue";
import IntegrityСontrol from "../pages/integrityСontrol.vue";
import Login from "../pages/login.vue";
import Registration from "../pages/registration.vue";

function ifNotAuthenticated(to, from, next) {
  if (!store.getters.loggedIn) {
    next();
    return;
  }
  next("/");
}

function ifAuthenticated(to, from, next) {
  if (store.getters.loggedIn) {
    next();
    return;
  }
  next("/login");
}

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "scan",
    path: "/scan",
    component: Scan,
    beforeEnter: ifAuthenticated,
  },
  {
    name: "passwordManager",
    path: "/password-manager",
    component: PasswordManager,
    beforeEnter: ifAuthenticated,
  },
  {
    name: "integrityСontrol",
    path: "/integrity-control",
    component: IntegrityСontrol,
  },
  {
    name: "login",
    path: "/login",
    component: Login,
    beforeEnter: ifNotAuthenticated,
  },
  {
    name: "registration",
    path: "/registration",
    component: Registration,
    beforeEnter: ifNotAuthenticated,
  },
];

export const router = new VueRouter({ mode: "history", routes: routes });
