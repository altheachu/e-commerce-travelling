import axios from "axios";

const config = {
  baseURL: "http://localhost:8081",
  timeout: 10000,
  withCredentials: false,
};

const instance = axios.create(config);

export default instance;
