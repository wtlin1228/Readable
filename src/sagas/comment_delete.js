import { takeLatest, put, call} from 'redux-saga/effects'

import * as types from '../constants/actionTypes'
import { ApiDeleteComment } from '../services/api'

export function* worker(action) {
  yield call(ApiDeleteComment, action.comment_id);

  yield put({
    type: types.DELETE_COMMENT_DONE,
    comment_id: action.comment_id
  })
}

export function* watchDeleteComment() {
  yield takeLatest(types.DELETE_COMMENT, worker);
}