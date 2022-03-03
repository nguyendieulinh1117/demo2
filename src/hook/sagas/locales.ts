import { all, put, takeLatest } from "redux-saga/effects";
import { switchLANGAction } from "../actions/locales";
import { SWITCH_LANG } from "../constants";

// function* switchLANGUAGESaga(action) {
//     yield put(switchLANGAction(action.payload));
// }

function* localeSaga() {
    // yield all([takeLatest(SWITCH_LANG, switchLANGUAGESaga)]);
}
export default localeSaga;
