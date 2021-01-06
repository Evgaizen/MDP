import { $axios } from "../../../plugins/axios";

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
          $axios.defaults.headers.common["Authorization"] = token;
          resolve(res);
        })
        .catch((err) => {
          reject(err.response.data);
        });
    });
  },
  logout({ commit }) {
    commit("SET_USERNAME", "");
    commit("SET_TOKEN", "");
    localStorage.removeItem("token");
    delete $axios.defaults.headers.common["Authorization"];
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
          $axios.defaults.headers.common["Authorization"] = token;
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  async user({ commit }) {
    await $axios
      .get("/users/me")
      .then((res) => {
        commit("SET_USERNAME", res.data.username);
      })
      .catch((err) => {
        if (err.response.data.statusCode === 401) {
          commit("SET_USERNAME", "");
          commit("SET_TOKEN", "");
          localStorage.removeItem("token");
          delete $axios.defaults.headers.common["Authorization"];
        }
      });
  },
};
