import getNewToken from "@/services/token";
import { getCookie, setCookie } from "@/utils/cookie";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (request) => {
    const cookie = getCookie("accessToken");

    if (cookie) {
      request.headers.Authorization = `bearer ${cookie}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const res = await getNewToken();
      if (!res) return;
      setCookie(res.data);

      return api(originalRequest);
    }
  }
);

export default api;
