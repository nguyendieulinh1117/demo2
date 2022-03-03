import { 
  GET_CATEGORY,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAIL,
} from "../constants";

export const getCategoryListAction = () => ({
  type: GET_CATEGORY,
});
export const getCategoryListSucessAction = (payload) => ({
  type: GET_CATEGORY_SUCCESS,
  payload,
});
export const getCategoryListFailAction = (payload) => ({
  type: GET_CATEGORY_FAIL,
  payload,
});
