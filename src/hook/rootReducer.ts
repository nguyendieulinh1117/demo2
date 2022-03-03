import { combineReducers } from "redux";

// import reducers
import productReducers from "./reducers/products";
import categoryReducers from "./reducers/categories";
import bannerReducers from "./reducers/banners";
import localeReducers from "./reducers/locales";
import promotionReducers from "./reducers/promotions";

const rootReducer = combineReducers({
    products: productReducers,
    categories: categoryReducers,
    banners: bannerReducers,
    locales: localeReducers,
    promotions: promotionReducers,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
