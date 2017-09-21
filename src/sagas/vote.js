import { takeLatest, put, call} from 'redux-saga/effects'

import * as types from '../constants/actionTypes'
import {ApiVoteDownComment, ApiVoteDownPost, ApiVoteUpComment, ApiVoteUpPost} from '../services/api'

export function* likePostWorker(action) {
  yield call(ApiVoteUpPost, action.post_id);

  yield put({
    type: types.GET_POST_DETAIL,
    post_id: action.post_id
  })
}

export function* dislikePostWorker(action) {
  yield call(ApiVoteDownPost, action.post_id);

  yield put({
    type: types.GET_POST_DETAIL,
    post_id: action.post_id
  })
}

export function* likeCommentWorker(action) {
  yield call(ApiVoteUpComment, action.comment_id);

  yield put({
    type: types.GET_POST_DETAIL,
    post_id: action.post_id
  })
}

export function* dislikeCommentWorker(action) {
  yield call(ApiVoteDownComment, action.comment_id);

  yield put({
    type: types.GET_POST_DETAIL,
    post_id: action.post_id
  })
}


export function* watchLikePost() {
  yield takeLatest(types.LIKE_THE_POST, likePostWorker);
}

export function* watchDisLikePost() {
  yield takeLatest(types.DISLIKE_THE_POST, dislikePostWorker);
}

export function* watchLikeComment() {
  yield takeLatest(types.LIKE_THE_COMMENT, likeCommentWorker);
}

export function* watchDisLikeComment() {
  yield takeLatest(types.DISLIKE_THE_COMMENT, dislikeCommentWorker);
}