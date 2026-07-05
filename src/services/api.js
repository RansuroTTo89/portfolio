import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchProducts = ({ limit = 12, skip = 0, sortBy, order }) => {
  const params = { limit, skip };
  if (sortBy) {
    params.sortBy = sortBy;
    params.order = order || "asc";
  }
  return api.get("/products", { params }).then((res) => res.data);
};

export const fetchProductById = (id) => {
  return api.get(`/products/${id}`).then((res) => res.data);
};

export default api;
