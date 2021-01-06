import { $axios } from "../../../plugins/axios";

export default {
  async getAllCredentials({ commit }) {
    await $axios.get("/credentials").then((res) => {
      commit("SET_CREDENTIALS", res.data);
    });
  },
  async addCredential({ commit }, credential) {
    await $axios.post("/credentials", credential).then((res) => {
      commit("ADD_CREDENTIAL", res.data);
    });
  },
  removeCredential({ commit }, id) {
    return new Promise((resolve, reject) => {
      $axios
        .delete(`/credentials/${id}`)
        .then((res) => {
          commit("REMOVE_CREDENTIAL", res.data._id);
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  async updateCredential({ commit }, { id, credential }) {
    await $axios.put(`/credentials/${id}`, credential).then((res) => {
      commit("UPDATE_CREDENTIAL", res.data);
    });
  },
};
