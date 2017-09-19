import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import postReducer from "./postReducer";
import navigationReducer from "./navigationReducer";
import postDetailReducer from "./postDetailReducer";

const rootReducer = combineReducers({
  categoryReducer: categoryReducer,
  postReducer: postReducer,
  navigationReducer: navigationReducer,
  postDetailReducer: postDetailReducer,
});

export default rootReducer