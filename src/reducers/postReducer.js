import * as types from '../constants/actionTypes'

const initState = {
  posts: []
};

export default function postReducer(state=initState, action) {
  switch(action.type) {
    case types.GET_ALL_POSTS:
      console.log('Reducer, GET_ALL_POSTS, payload: ', action.payload);
      return {
        ...state
      };

    case types.GET_ALL_POSTS_DONE:
      console.log('Reducer, GET_ALL_POSTS_DONE, payload: ', action.payload);
      return {
        ...state,
        posts: action.payload
      };

    default:
      return state
  }
}