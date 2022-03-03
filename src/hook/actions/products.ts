import { 
  GET_LIST_PRODUCT,
  GET_LIST_PRODUCT_SUCCESS,
  GET_LIST_PRODUCT_FAIL,

  GET_DETAIL_PRODUCT,
  GET_DETAIL_PRODUCT_SUCCESS,
  GET_DETAIL_PRODUCT_FAIL,
} from "../constants";

export const getProductListAction = () => ({
  type: GET_LIST_PRODUCT,
});
export const getProductListSucessAction = (payload) => ({
  type: GET_LIST_PRODUCT_SUCCESS,
  payload,
});
export const getProductListFailAction = (payload) => ({
  type: GET_LIST_PRODUCT_FAIL,
  payload,
});

export const getProductDetailAction = (payload) => ({
  type: GET_DETAIL_PRODUCT,
  payload
});
export const getProductDetailSucessAction = (payload) => ({
  type: GET_DETAIL_PRODUCT_SUCCESS,
  payload,
});
export const getProductDetailFailAction = (payload) => ({
  type: GET_DETAIL_PRODUCT_FAIL,
  payload,
});
