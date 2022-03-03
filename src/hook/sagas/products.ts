import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { getListProduct, getDetailProduct } from "../../api/products";
import { getProductListFailAction, getProductListSucessAction, getProductDetailFailAction, getProductDetailSucessAction } from "../actions/products";

function* getListProductSaga() {
  try {
    const data = yield call(getListProduct);
    yield put(
      getProductListSucessAction({
        response: data.data.data,
      })
    );
  } catch (error) {
    yield put(
      getProductListFailAction({
        message: error,
      })
    );
  }
}

function* getDetailProductSaga(action) {
  try {
    const data = yield call(getDetailProduct, action.payload);
    yield put(
      getProductDetailSucessAction({
        response: data.data,
      })
    );
  } catch (error) {
    yield put(
      getProductDetailFailAction({
        message: error,
      })
    );
  }
}

function* productSaga() {
  yield all([takeLatest("GET_LIST_PRODUCT", getListProductSaga)]);
  yield all([takeLatest("GET_DETAIL_PRODUCT", getDetailProductSaga)]);
}

export default productSaga;
