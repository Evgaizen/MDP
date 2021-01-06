import { $axios } from "../../../plugins/axios";

export default {
  async getAllFiles({ commit }) {
    await $axios
      .get("/files")
      .then((res) => {
        commit("setFiles", res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  async uploadFile({ commit }, payload) {
    const formData = new FormData();
    await formData.append("file", payload);
    await $axios
      .post("/files/upload", formData, {
        onUploadProgress: function(e) {
          commit(
            "setUploadPercent",
            parseInt(Math.round((e.loaded / e.total) * 100))
          );
        },
      })
      .then((res) => {
        commit("addFile", res.data);
        commit("clearUploadPercent");
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async checkFile({ commit }, { file, md5 }) {
    const formData = new FormData();
    await formData.append("file", file);
    await $axios.post(`/files/check?md5=${md5}`, formData).then((res) => {
      commit("setStateCheck", res.data ? "success" : "error");
    });
  },
};
