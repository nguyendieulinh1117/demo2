import { get, post, put } from "./axiosClient";

export const getCategories = () => {
  return get("/categories");
};
