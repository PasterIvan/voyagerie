import axios from "axios";

const proxy = "http://2.56.213.189:8092";
export const baseURL = "/api";

export const baseApi = axios.create({
  baseURL: `${proxy}${baseURL}`,
});
