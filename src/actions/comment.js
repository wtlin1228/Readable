import * as types from '../constants/actionTypes'

export const newComment = (post_id, body, author) => (
  {
    type: types.NEW_COMMENT,
    post_id: post_id,
    body: body,
    author: author
  }
);

export const deleteComment = (comment_id) => (
  {
    type: types.DELETE_COMMENT,
    comment_id: comment_id,
  }
);

export const updateComment = (comment_id, body) => (
  {
    type: types.UPDATE_COMMENT,
    comment_id: comment_id,
    body: body
  }
);

