import { takeLatest, put, call} from 'redux-saga/effects'

import * as types from '../constants/actionTypes'
import { ApiDeleteComment } from '../services/api'

export function* worker(action) {
  yield call(ApiDeleteComment, action.comment_id);

  yield put({
    type: types.GET_POST_DETAIL,
    post_id: action.post_id
  })
}

export function* watchDeleteComment() {
  yield takeLatest(types.DELETE_COMMENT, worker);
}