import * as types from '../constants/actionTypes'

export const getAllCategory = (payload) => (
  {
    type: types.GET_CATEGORY,
    payload
  }
);
