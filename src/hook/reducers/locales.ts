import { SWITCH_LANG } from "../constants";
const item = typeof window !== "undefined" ? localStorage.getItem("LANGUAGE") : null;
const initialState: object = {
    locales: item ? item : "vi",
};

function localeReducers(state = initialState, action) {
    switch (action.type) {
        case SWITCH_LANG:
            localStorage.setItem("LANGUAGE", action.payload);
            return { ...state, locales: action.payload };

        default:
            return state;
    }
}
export default localeReducers;
