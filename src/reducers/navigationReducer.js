import * as types from '../constants/actionTypes'

const initState = {
  navigate_category: ''
};

export default function navigationReducer(state=initState, action) {
  switch(action.type) {
    case types.NAVIGATE_CATEGORY:
      return {
        ...state,
        navigate_category: action.category
      };
    default:
      return state
  }
}