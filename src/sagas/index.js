import { fork, all } from 'redux-saga/effects'

import { watchGetCategory } from "./category";
import { watchGetAllPosts } from "./post";
import { watchGetPostDetail } from "./post_detail";

export default function* rootSaga() {
  yield all([
    fork(watchGetCategory),
    fork(watchGetAllPosts),
    fork(watchGetPostDetail),
  ])
}