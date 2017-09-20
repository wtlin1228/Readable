import * as types from '../constants/actionTypes'

export const newComment = (post_id, body, author) => (
  {
    type: types.NEW_COMMENT,
    post_id: post_id,
    body: body,
    author: author
  }
);

export const deleteComment = (post_id, comment_id) => (
  {
    type: types.DELETE_COMMENT,
    post_id: post_id,
    comment_id: comment_id,
  }
);

export const updateComment = (post_id, comment_id, body) => (
  {
    type: types.UPDATE_COMMENT,
    post_id: post_id,
    comment_id: comment_id,
    body: body
  }
);

