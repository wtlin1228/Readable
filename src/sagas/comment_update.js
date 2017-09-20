import { takeLatest, put, call} from 'redux-saga/effects'

import * as types from '../constants/actionTypes'
import { ApiUpdateComment } from '../services/api'

export function* worker(action) {
  yield call(ApiUpdateComment, action.comment_id, action.body);

  yield put({
    type: types.UPDATE_COMMENT_DONE,
    comment_id: action.comment_id,
    body: action.body,
  })
}

export function* watchCommentUpdate() {
  yield takeLatest(types.UPDATE_COMMENT, worker);
}