import { all, call, put, takeLatest } from "redux-saga/effects";
import { getPromotionDetail, getPromtionList } from "../../api/promotions";
import { getPromotionDetailFailAction, getPromotionDetailSuccessAction, getPromotionListFailAction, getPromotionListSuccessAction } from "../actions/promotions";
import { GET_DETAIL_PROMOTION, GET_PROMOTION_LIST } from "../constants";

function* getPromotionListSaga(action) {
    try {
        const data = yield call(getPromtionList, action.payload);
        yield put(
            getPromotionListSuccessAction({
                response: data.data,
            })
        );
    } catch (error) {
        yield put(getPromotionListFailAction({ message: error }));
    }
}

function* getPromotionDetailSaga(action) {
    try {
        const data = yield call(getPromotionDetail, action.payload);
        yield put(
            getPromotionDetailSuccessAction({
                response: data.data,
            })
        );
    } catch (error) {
        yield put(getPromotionDetailFailAction({ message: error }));
    }
}

function* promotionSaga() {
    yield all([takeLatest(GET_PROMOTION_LIST, getPromotionListSaga), takeLatest(GET_DETAIL_PROMOTION, getPromotionDetailSaga)]);
}

export default promotionSaga;
