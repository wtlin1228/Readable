import * as types from '../constants/actionTypes'

const initState = {
  posts: [],
};

export default function postReducer(state=initState, action) {
  switch(action.type) {
    case types.GET_ALL_POSTS:
      return {
        ...state
      };

    case types.GET_ALL_POSTS_DONE:
      return {
        ...state,
        posts: action.posts,
      };

    default:
      return state
  }
}