import api from "@/configs/api";

const getCategories = async () => {
  const response = await api.get("/categories");
  return response;
};

export { getCategories };
