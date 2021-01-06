import axios from "axios";

const config = {
  baseURL: "http://localhost:3000/api",
};

export const $axios = axios.create(config);

export function setToken(token) {
  $axios.interceptors.request.use((config) => {
    config.headers.Authorization = token;
    return config;
  });
}
