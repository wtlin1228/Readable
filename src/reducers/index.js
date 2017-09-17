import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'

const rootReducer = combineReducers({
  categoryReducer: categoryReducer
});

export default rootReducer