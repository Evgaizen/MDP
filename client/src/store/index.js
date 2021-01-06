import Vue from "vue";
import Vuex from "vuex";

// Modules
import file from "./modules/file/index";
import auth from "./modules/auth/index";
import credentials from "./modules/credentials/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    file,
    auth,
    credentials,
  },
});
