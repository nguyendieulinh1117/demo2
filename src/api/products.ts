import { get, post, put } from "./axiosClient";

export const getListProduct = () => {
  return get("/products");
};

export const getDetailProduct = (id) => {
  return get(`/products/${id}`);
}
