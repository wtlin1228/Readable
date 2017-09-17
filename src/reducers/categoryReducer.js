import * as types from '../constants/actionTypes'

const initState = {
  categories: []
};

export default function categoryReducer(state=initState, action) {
  switch(action.type) {
    case types.GET_CATEGORY:
      console.log('Reducer, GET_CATEGORY');
      console.log(action.payload);
      return {
        ...state,
        categories: action.payload
      };

    default:
      return state
  }
}