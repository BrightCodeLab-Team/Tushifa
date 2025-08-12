import axios from "axios";

export const baseUrl = "";
const API = axios.create({
  baseURL: `${baseUrl}/api`,
});

export default API;
