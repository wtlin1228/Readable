import { takeLatest, put, call} from 'redux-saga/effects'

import * as types from '../constants/actionTypes'
import { ApiGetPostDetail, ApiGetPostComments } from '../services/api'

export function* worker(action) {
  const post_detail =  yield call(ApiGetPostDetail, action.post_id);
  const post_comments =  yield call(ApiGetPostComments, action.post_id);

  console.log(post_detail);
  console.log(post_comments);

  yield put({
    type: types.GET_POST_DETAIL_DONE,
    post: post_detail,
    comments: post_comments,
  })
}

export function* watchGetPostDetail() {
  yield takeLatest(types.GET_POST_DETAIL, worker);
}