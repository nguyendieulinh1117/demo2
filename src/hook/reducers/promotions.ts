import { GET_DETAIL_PROMOTION, GET_DETAIL_PROMOTION_FAIL, GET_DETAIL_PROMOTION_SUCCESS, GET_PROMOTION_LIST, GET_PROMOTION_LIST_FAIL, GET_PROMOTION_LIST_SUCCESS } from "../constants";
import { initial } from "../types";

const initialState: any = {
    promotionList: <initial>{
        requesting: false,
        success: false,
        message: null,
        response: null,
    },
    promotionDetail: <initial>{
        requesting: false,
        success: false,
        message: null,
        response: null,
    },
};

function promotionReducers(state = initialState, action) {
    switch (action.type) {
        case GET_PROMOTION_LIST:
            return { ...state, promotionList: { ...state.promotionList, requesting: true } };

        case GET_PROMOTION_LIST_SUCCESS:
            return {
                ...state,
                promotionList: {
                    ...state.promotionList,
                    requesting: false,
                    success: true,
                    response: action.payload.response.data,
                },
            };

        case GET_PROMOTION_LIST_FAIL:
            return {
                ...state,
                promotionList: {
                    ...state.promotionList,
                    requesting: false,
                    message: action.payload.message,
                },
            };

        case GET_DETAIL_PROMOTION:
            return { ...state, promotionDetail: { ...state.promotionDetail, requesting: true } };

        case GET_DETAIL_PROMOTION_SUCCESS:
            return {
                ...state,
                promotionDetail: {
                    ...state.promotionDetail,
                    requesting: false,
                    success: true,
                    response: action.payload.response,
                },
            };

        case GET_DETAIL_PROMOTION_FAIL:
            return {
                ...state,
                promotionDetail: {
                    ...state.promotionDetail,
                    requesting: false,
                    message: action.payload.message,
                },
            };

        default:
            return state;
    }
}
export default promotionReducers;
