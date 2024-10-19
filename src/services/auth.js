import api from "@/configs/api";

const sendData = async (data) => {
  const response = await api.post("/auth/login", data);
  return response;
};

export { sendData };
