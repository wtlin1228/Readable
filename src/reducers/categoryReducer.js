import * as types from '../constants/actionTypes'

const initState = {
  categories: []
};

export default function categoryReducer(state=initState, action) {
  switch(action.type) {
    case types.GET_CATEGORY:
      console.log('Reducer, GET_CATEGORY, payload: ', action.payload);
      return {
        ...state,
        categories: action.payload
      };

    case types.GET_CATEGORY_DONE:
      console.log('Reducer, GET_CATEGORY_DONE, payload: ', action.payload);
      return {
        ...state,
        categories: action.payload
      };

    default:
      return state
  }
}