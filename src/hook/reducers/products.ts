import { 
  GET_LIST_PRODUCT,
  GET_LIST_PRODUCT_SUCCESS,
  GET_LIST_PRODUCT_FAIL,

  GET_DETAIL_PRODUCT,
  GET_DETAIL_PRODUCT_SUCCESS,
  GET_DETAIL_PRODUCT_FAIL,
} from "../constants";

interface initial {
  productList: {
    requesting: boolean,
    success: boolean,
    message: string,
    response: any,
  },
  productDetail: {
    requesting: boolean,
    success: boolean,
    message: string,
    response: any,
  }
};

const initialState: initial = {
  //product list
  productList: {
    requesting: false,
    success: false,
    message: null,
    response: null,
  },
  productDetail: {
    requesting: false,
    success: false,
    message: null,
    response: null,
  }
};

function productReducers(state = initialState, action) {
  switch (action.type) {
    case GET_LIST_PRODUCT:
      return {
        ...state,
        productList: {
          ...state.productList,
          requesting: true,
        }
      };
    case GET_LIST_PRODUCT_SUCCESS: 
      return {
        ...state,
        productList: {
          ...state.productList,
          requesting: false,
          success: true,
          response: action.payload.response,
        }
      };

    case GET_LIST_PRODUCT_FAIL:
      return {
        ...state,
        productList: {
          ...state.productList,
          requesting: false,
          message: action.payload.message,
        }
      };

    case GET_DETAIL_PRODUCT:
      return {
        ...state,
        productDetail: {
          ...state.productDetail,
          requesting: true,
        }
      };
    case GET_DETAIL_PRODUCT_SUCCESS:
      return {
        ...state,
        productDetail: {
          ...state.productDetail,
          requesting: false,
          success: true,
          response: action.payload.response,
        }
      };

    case GET_DETAIL_PRODUCT_FAIL:
      return {
        ...state,
        productDetail: {
          ...state.productDetail,
          requesting: false,
          message: action.payload.message,
        }
      };

    default:
      return state;
  }
}

export default productReducers;
