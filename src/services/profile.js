import api from "@/configs/api";

const getProfile = async () => {
  const response = await api.get("/auth/profile").then((res) => res || false);
  return response;
};

const isAvailable = async (email) => {
  const response = await api.post("/users/is-available", { email });
  return response;
};

export { getProfile, isAvailable };
