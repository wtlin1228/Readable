import { takeLatest, put, call} from 'redux-saga/effects'

import * as types from '../constants/actionTypes'
import { ApiGetPostDetail, ApiGetPostComments } from '../services/api'

export function* worker(action) {
  const post_detail =  yield call(ApiGetPostDetail, action.post_id);
  const post_comments =  yield call(ApiGetPostComments, action.post_id);

  const d_post = new Date(post_detail['timestamp']);
  post_detail['timestamp'] = d_post.getFullYear() + '/' + (d_post.getMonth()+1) + '/' + d_post.getDate();

  post_comments.map((comment, index) => {
    comment['key'] = index+1;
    const d = new Date(comment['timestamp']);
    comment['timestamp'] = d.getFullYear() + '/' + (d.getMonth()+1) + '/' + d.getDate();
    return comment
  });

  yield put({
    type: types.GET_POST_DETAIL_DONE,
    post: post_detail,
    comments: post_comments,
  })
}

export function* watchGetPostDetail() {
  yield takeLatest(types.GET_POST_DETAIL, worker);
}