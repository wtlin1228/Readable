import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import postReducer from "./postReducer";


const rootReducer = combineReducers({
  categoryReducer: categoryReducer,
  postReducer: postReducer
});

export default rootReducer