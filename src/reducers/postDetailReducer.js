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

    case types.UPDATE_POST:
      return {
        ...state
      };

    case types.UPDATE_POST_DONE:
      return {
        ...state,
        post: {
          ...state.post,
          title: action.title,
          body: action.body,
        }
      };

    case types.DELETE_COMMENT:
      return {
        ...state
      };

    case types.UPDATE_COMMENT:
      return {
        ...state
      };

    case types.NEW_COMMENT:
      return {
        ...state
      };

    default:
      return state
  }
}