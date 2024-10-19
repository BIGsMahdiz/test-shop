import api from "@/configs/api";
import { getCookie } from "@/utils/cookie";

const getNewToken = async () => {
  const refreshToken = getCookie("refreshToken");

  if (refreshToken) {
    const response = await api.post("/auth/refresh-token", { refreshToken });
    return response;
  }
};

export default getNewToken;
