import * as types from '../constants/actionTypes'

export const getAllPosts = (payload) => (
  {
    type: types.GET_ALL_POSTS,
    payload
  }
);

