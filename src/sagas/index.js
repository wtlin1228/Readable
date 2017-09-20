import { fork, all } from 'redux-saga/effects'

import { watchGetCategory } from "./category";
import { watchGetAllPosts } from "./post";
import { watchGetPostDetail } from "./post_detail";
import { watchDeletePost } from "./post_delete";
import { watchPostUpdate } from "./post_update";

export default function* rootSaga() {
  yield all([
    fork(watchGetCategory),
    fork(watchGetAllPosts),
    fork(watchGetPostDetail),
    fork(watchDeletePost),
    fork(watchPostUpdate),
  ])
}