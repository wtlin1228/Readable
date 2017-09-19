import * as types from '../constants/actionTypes'

const initState = {
  post: {},
  comments: [],
};

export default function postDetailReducer(state=initState, action) {
  switch(action.type) {
    case types.GET_POST_DETAIL:
      return {
        ...state
      };

    case types.GET_POST_DETAIL_DONE:
      return {
        ...state,
        post: action.post,
        comments: action.comments,
      };

    default:
      return state
  }
}