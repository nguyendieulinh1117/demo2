import { all, call, put, takeLatest } from "redux-saga/effects";
import { getBanner } from "../../api/banners";
import { getBannerFailAction, getBannerSuccessAction } from "../actions/banners";
import { GET_BANNER } from "../constants";

function* getBannerSaga(action) {
  try {
    const data = yield call(getBanner, action.payload);
    yield put(
      getBannerSuccessAction({
        response: data.data,
      })
    );
  } catch (error) {
    yield put(getBannerFailAction({ message: error }));
  }
}
function* bannerSaga() {
  yield all([takeLatest(GET_BANNER, getBannerSaga)]);
}

export default bannerSaga;
