import axios from 'axios'
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://navedex-api.herokuapp.com/v1"
  // baseURL: "https://reqres.in/api"
  //baseURL: "https://navedex-api.herokuapp.com/v1/users"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;