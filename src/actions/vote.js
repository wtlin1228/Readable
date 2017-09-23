import * as types from '../constants/actionTypes'

export const likeThePost = (post_id) => (
  {
    type: types.LIKE_THE_POST,
    post_id: post_id
  }
);

export const dislikeThePost = (post_id) => (
  {
    type: types.DISLIKE_THE_POST,
    post_id: post_id
  }
);

export const likeTheComment = (post_id, comment_id) => (
  {
    type: types.LIKE_THE_COMMENT,
    post_id: post_id,
    comment_id: comment_id
  }
);

export const dislikeTheComment = (post_id, comment_id) => (
  {
    type: types.DISLIKE_THE_COMMENT,
    post_id: post_id,
    comment_id: comment_id
  }
);

export const likeThePostRoot = (post_id) => (
  {
    type: types.LIKE_THE_POST_ROOT,
    post_id: post_id
  }
);

export const dislikeThePostRoot = (post_id) => (
  {
    type: types.DISLIKE_THE_POST_ROOT,
    post_id: post_id
  }
);
