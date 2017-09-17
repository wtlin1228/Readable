import { combineReducers } from 'redux'
import testReducer from './testReducer'
import categoryReducer from './categoryReducer'

const rootReducer = combineReducers({
  testReducer: testReducer,
  categoryReducer: categoryReducer
});

export default rootReducer