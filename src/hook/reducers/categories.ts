import { 
  GET_CATEGORY,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAIL,
} from "../constants";

interface initial {
  categoryList: {
    requesting: boolean,
    success: boolean,
    message: string,
    response: any,
  },
  categoryDetail: {
    requesting: boolean,
    success: boolean,
    message: string,
    response: any,
  }
};

const initialState: initial = {
  //product list
  categoryList: {
    requesting: false,
    success: false,
    message: null,
    response: null,
  },
  categoryDetail: {
    requesting: false,
    success: false,
    message: null,
    response: null,
  }
};

function categoryReducers(state = initialState, action) {
  switch (action.type) {
    //CATEGORY LIST
    case GET_CATEGORY:
      return {
        ...state,
        categoryList: {
          ...state.categoryList,
          requesting: true,
        }
      };
    case GET_CATEGORY_SUCCESS: 
      return {
        ...state,
        categoryList: {
          ...state.categoryList,
          requesting: false,
          success: true,
          response: action.payload.response,
        }
      };

    case GET_CATEGORY_FAIL:
      return {
        ...state,
        categoryList: {
          ...state.categoryList,
          requesting: false,
          message: action.payload.message,
        }
      };
    //
    default:
      return state;
  }
}

export default categoryReducers;
