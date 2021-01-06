import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const state = () => ({
  token: localStorage.getItem("token") || "",
  username: "",
});

export default {
  state,
  actions,
  mutations,
  getters,
};
