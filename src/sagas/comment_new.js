import { takeLatest, put, call} from 'redux-saga/effects'

import * as types from '../constants/actionTypes'
import { ApiNewComment } from '../services/api'

export function* worker(action) {
  yield call(ApiNewComment, action.post_id, action.body, action.author);

  yield put({
    type: types.GET_POST_DETAIL,
    post_id: action.post_id
  })
}

export function* watchNewComment() {
  yield takeLatest(types.NEW_COMMENT, worker);
}