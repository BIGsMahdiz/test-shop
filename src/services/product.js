import api from "@/configs/api";

const getProductsSlide = async (limit = 10, offset = 3) => {
  const response = await api.get(`/products?limit=10&offset=3`);
  return response;
};

const getProductBySearch = async (title) => {
  const response = await api.get(`/products/?title=${title}`);
  return response;
};

const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response;
};

export { getProductsSlide, getProductBySearch, getProductById };
