import * as types from '../constants/actionTypes'

export const getAllPosts = (category) => (
  {
    type: types.GET_ALL_POSTS,
    category
  }
);

