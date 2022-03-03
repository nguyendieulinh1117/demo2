import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import { all, fork } from "redux-saga/effects";

//import sagas
import productSaga from "./sagas/products";
import categorySaga from "./sagas/categories";
import bannerSaga from "./sagas/banners";
import localeSaga from "./sagas/locales";
import promotionSaga from "./sagas/promotions";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

function* rootSaga() {
    yield all([
        // all saga in here
        fork(productSaga),
        fork(categorySaga),
        fork(bannerSaga),
        fork(localeSaga),
        fork(promotionSaga),
    ]);
}

sagaMiddleware.run(rootSaga);
