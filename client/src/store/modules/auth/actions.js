import { $axios, setToken } from "../../../plugins/axios";

export default {
  login({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      $axios
        .post("users/login", credentials)
        .then((res) => {
          commit("SET_USERNAME", res.data.user.username);
          commit("SET_TOKEN", res.data.user.token);
          const token = `Token ${res.data.user.token}`;
          localStorage.setItem("token", token);
          setToken(token);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  logout({ commit }) {
    commit("SET_USERNAME", "");
    commit("SET_TOKEN", "");
    localStorage.removeItem("token");
    setToken("");
  },
  registration({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      $axios
        .post("/users", credentials)
        .then((res) => {
          commit("SET_USERNAME", res.data.user.username);
          commit("SET_TOKEN", res.data.user.token);
          const token = `Token ${res.data.user.token}`;
          localStorage.setItem("token", token);
          setToken(token);
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
