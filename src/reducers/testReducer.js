import * as types from '../constants/actionTypes'

export default function testReducer(state='123', action) {
  switch(action.type) {
    case types.ADD_TEST: {
      console.log(action.payload);
      console.log('hello add test');
      return 'hello add test'
    }

    default:
      return state
  }
}