import * as types from '../constants/actionTypes'

export const getAllPosts = (category) => (
  {
    type: types.GET_ALL_POSTS,
    category
  }
);

export const getPostDetail = (post_id) => (
  {
    type: types.GET_POST_DETAIL,
    post_id
  }
);

export const deletePost = (post_id) => (
  {
    type: types.DELETE_POST,
    post_id
  }
);
