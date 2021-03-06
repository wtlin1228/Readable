import { getAllCategory } from "./category";
import { getAllPosts, getPostDetail, deletePost, updatePost } from "./post";
import { navigate_category } from "./navigation";
import { newComment, updateComment, deleteComment } from "./comment";
import { likeThePost, dislikeThePost, likeTheComment, dislikeTheComment, likeThePostRoot, dislikeThePostRoot } from "./vote";

export {
  getAllCategory,
  getAllPosts,
  navigate_category,
  getPostDetail,
  deletePost,
  updatePost,
  newComment,
  updateComment,
  deleteComment,
  likeThePost,
  dislikeThePost,
  likeTheComment,
  dislikeTheComment,
  likeThePostRoot,
  dislikeThePostRoot,
}