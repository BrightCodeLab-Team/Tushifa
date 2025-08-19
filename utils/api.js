// utils/api.js
import axios from "axios";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

const API = axios.create({
  baseURL: "/api",
  withCredentials: false,
});

API.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

export default API;