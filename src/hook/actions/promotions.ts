import { GET_DETAIL_PROMOTION, GET_DETAIL_PROMOTION_FAIL, GET_DETAIL_PROMOTION_SUCCESS, GET_PROMOTION_LIST, GET_PROMOTION_LIST_FAIL, GET_PROMOTION_LIST_SUCCESS } from "../constants";

export const getPromotionListAction = (payload) => ({
    type: GET_PROMOTION_LIST,
    payload,
});

export const getPromotionListSuccessAction = (payload) => ({
    type: GET_PROMOTION_LIST_SUCCESS,
    payload,
});

export const getPromotionListFailAction = (payload) => ({
    type: GET_PROMOTION_LIST_FAIL,
    payload,
});

export const getPromotionDetailAction = (payload) => ({
    type: GET_DETAIL_PROMOTION,
    payload,
});

export const getPromotionDetailSuccessAction = (payload) => ({
    type: GET_DETAIL_PROMOTION_SUCCESS,
    payload,
});

export const getPromotionDetailFailAction = (payload) => ({
    type: GET_DETAIL_PROMOTION_FAIL,
    payload,
});
