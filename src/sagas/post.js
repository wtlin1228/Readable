import { takeLatest, put, call} from 'redux-saga/effects'

import * as types from '../constants/actionTypes'
import { ApiGetPosts } from '../services/api'

// Final Version
export function* worker(action) {
  const response = yield call(ApiGetPosts, action.payload);
  response.map((post, index) => {post['key'] = index+1; return post} );
  yield put({ type: types.GET_ALL_POSTS_DONE, payload: response})
}

export function* watchGetAllPosts() {
  yield takeLatest(types.GET_ALL_POSTS, worker);
}