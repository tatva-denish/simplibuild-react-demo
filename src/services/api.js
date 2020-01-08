import axios from "axios";

// Created Axios instance
const instance = axios.create({
  baseURL: "https://randomuser.me/api/",
  responseType: "json"
});

// Add a request interceptor
instance.interceptors.request.use(
  config => {
    return config;
  },
  error => Promise.reject(error)
);

// Add a response interceptor for global notifications and response log
instance.interceptors.response.use(
  response => {
    return {
      status: "success",
      message: "",
      data: response.data
    };
  },
  error => {
    return {
      status: "failed",
      message: error.error,
      data: []
    };
  }
);

export default instance;
