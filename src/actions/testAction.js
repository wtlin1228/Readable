import * as types from '../constants/actionTypes'

export const addTest = (payload) => (
  {
    type: types.ADD_TEST,
    payload
  }
);
