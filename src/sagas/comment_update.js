import { takeLatest, put, call} from 'redux-saga/effects'

import * as types from '../constants/actionTypes'
import { ApiUpdateComment } from '../services/api'

export function* worker(action) {
  yield call(ApiUpdateComment, action.comment_id, action.body);

  yield put({
    type: types.GET_POST_DETAIL,
    post_id: action.post_id
  })
}

export function* watchCommentUpdate() {
  yield takeLatest(types.UPDATE_COMMENT, worker);
}