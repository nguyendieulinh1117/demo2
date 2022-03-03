import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { getCategories } from "../../api/categories";
import { 
  getCategoryListFailAction,
  getCategoryListSucessAction,
} from "../actions/categories";

function* getListCategorySaga() {
  try {
    const data = yield call(getCategories);
    yield put(
      getCategoryListSucessAction({
        response: data.data,
      })
    );
  } catch (error) {
    yield put(
      getCategoryListFailAction({
        message: error,
      })
    );
  }
}

function* categorySaga() {
  yield all([takeLatest("GET_CATEGORY", getListCategorySaga)]);
}

export default categorySaga;
