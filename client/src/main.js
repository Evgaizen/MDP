import Vue from "vue";
import App from "./App.vue";
//Plugins
import vuetify from "./plugins/vuetify";
import { router } from "./plugins/router";
import { $axios } from "./plugins/axios";

import store from "./store/index";

const token = localStorage.getItem("token");
if (token) {
  $axios.defaults.headers.common["Authorization"] = token;
}

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
