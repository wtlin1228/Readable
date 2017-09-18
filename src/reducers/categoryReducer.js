import * as types from '../constants/actionTypes'

const initState = {
  categories: []
};

export default function categoryReducer(state=initState, action) {
  switch(action.type) {
    case types.GET_CATEGORY:
      return {
        ...state
      };

    case types.GET_CATEGORY_DONE:
      return {
        ...state,
        categories: action.payload
      };

    default:
      return state
  }
}