import { takeLatest, put, call} from 'redux-saga/effects'

import * as types from '../constants/actionTypes'
import { ApiGetPosts } from '../services/api'

export function* worker(action) {
  const response = yield call(ApiGetPosts, action.category);
  response.map((post, index) => {post['key'] = index+1; return post} );

  // sort the posts by voteScore
  response.sort(function(a, b){return b['voteScore'] - a['voteScore'] });

  yield put({
    type: types.GET_ALL_POSTS_DONE,
    posts: response,
  })
}

export function* watchGetAllPosts() {
  yield takeLatest(types.GET_ALL_POSTS, worker);
}