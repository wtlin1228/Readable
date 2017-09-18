import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import postReducer from "./postReducer";
import navigationReducer from "./navigationReducer";

const rootReducer = combineReducers({
  categoryReducer: categoryReducer,
  postReducer: postReducer,
  navigationReducer: navigationReducer
});

export default rootReducer