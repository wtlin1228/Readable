import { takeLatest, put, call} from 'redux-saga/effects'

import * as types from '../constants/actionTypes'
import { ApiUpdatePost } from '../services/api'

export function* worker(action) {
  yield call(ApiUpdatePost, action.post_id, action.title, action.body);

  yield put({
    type: types.UPDATE_POST_DONE,
    title: action.title,
    body: action.body,
  })
}

export function* watchPostUpdate() {
  yield takeLatest(types.UPDATE_POST, worker);
}