import axios from "axios";
import store from "./store";

// const mainDomain = "http://localhost:3000/";
const mainDomain = "https://andyliu.herokuapp.com/";

axios.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("Authorization")) {
      config.headers.Authorization = localStorage.getItem("Authorization");
    }
    config.timeout = 10 * 1000;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    if (response.data.code === 0) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response.data);
    }
  },
  (error) => {
    if (error && error.response) {
      if (error.response.status === 401) {
        localStorage.clear();
        sessionStorage.clear();
      }
      store.dispatch({ type: "SWITCH_LOADING", payload: false });
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default function request(method, address, data) {
  const url = `${mainDomain}${address}`;
  method = method.toLowerCase();
  if (method === "post") {
    return axios.post(url, data);
  } else if (method === "get") {
    return axios.get(url);
  } else if (method === "delete") {
    return axios.delete(url, data);
  } else if (method === "put") {
    return axios.put(url, data);
  }
}
