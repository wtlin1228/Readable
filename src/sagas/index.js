import { fork, all } from 'redux-saga/effects'

import { watchGetCategory } from "./category";
import { watchGetAllPosts } from "./post";
import { watchNavigateCategory } from "./navigation";

export default function* rootSaga() {
  yield all([
    fork(watchGetCategory),
    fork(watchGetAllPosts),
    fork(watchNavigateCategory)
  ])
}