import { takeLatest, put, call} from 'redux-saga/effects'

import * as types from '../constants/actionTypes'
import { ApiDeletePost } from '../services/api'

export function* worker(action) {
  yield call(ApiDeletePost, action.post_id);

  yield put({
    type: types.GET_ALL_POSTS,
    category: 'all'
  })
}

export function* watchDeletePost() {
  yield takeLatest(types.DELETE_POST, worker);
}