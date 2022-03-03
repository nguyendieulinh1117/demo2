import { GET_BANNER, GET_BANNER_FAIL, GET_BANNER_SUCCESS } from "../constants";

export const getBannerAction = (payload) => ({
  type: GET_BANNER,
  payload,
});

export const getBannerSuccessAction = (payload) => ({
  type: GET_BANNER_SUCCESS,
  payload,
});

export const getBannerFailAction = (payload) => ({
  type: GET_BANNER_FAIL,
  payload,
});
