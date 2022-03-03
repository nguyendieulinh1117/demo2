import { GET_BANNER, GET_BANNER_FAIL, GET_BANNER_SUCCESS } from "../constants";
import { initial } from "../types";

const initialState: initial = {
    requesting: false,
    success: false,
    message: null,
    response: null,
};

function bannerReducers(state = initialState, action) {
    switch (action.type) {
        case GET_BANNER:
            return { ...state, requesting: true };

        case GET_BANNER_SUCCESS:
            return { ...state, requesting: false, success: true, response: action.payload.response.data };

        case GET_BANNER_FAIL:
            return { ...state, requesting: false, message: action.payload.message };

        default:
            return state;
    }
}

export default bannerReducers;
