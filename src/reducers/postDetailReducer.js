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

    case types.DELETE_COMMENT_DONE:
      const comments = state.comments.filter((comment) => {
        return comment.id != action.comment_id
      });

      return {
        ...state,
        comments: comments
      };

    case types.UPDATE_COMMENT:
      return {
        ...state
      };

    case types.UPDATE_COMMENT_DONE:
      const comments = state.comments.map((comment) => {
        if(comment.id == action.comment_id) {
          comment.body = action.body
          return comment
        }
        return comment
      });

      return {
        ...state,
        comments: comments
      };

    default:
      return state
  }
}