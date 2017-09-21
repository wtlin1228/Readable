import { fork, all } from 'redux-saga/effects'

import { watchGetCategory } from "./category";
import { watchGetAllPosts } from "./post";
import { watchGetPostDetail } from "./post_detail";
import { watchDeletePost } from "./post_delete";
import { watchPostUpdate } from "./post_update";
import { watchDeleteComment } from "./comment_delete";
import { watchCommentUpdate } from "./comment_update";
import { watchNewComment } from "./comment_new";
import { watchLikePost ,watchDisLikePost ,watchLikeComment ,watchDisLikeComment } from "./vote";

export default function* rootSaga() {
  yield all([
    fork(watchGetCategory),
    fork(watchGetAllPosts),
    fork(watchGetPostDetail),
    fork(watchDeletePost),
    fork(watchPostUpdate),
    fork(watchDeleteComment),
    fork(watchCommentUpdate),
    fork(watchNewComment),
    fork(watchLikePost),
    fork(watchDisLikePost),
    fork(watchLikeComment),
    fork(watchDisLikeComment),
  ])
}