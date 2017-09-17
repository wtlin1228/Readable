import * as types from '../constants/actionTypes'

export const getAllCategory = (payload) => (
  {
    type: types.GET_CATEGORY,
    payload
  }
);


export const GET_CATEGORY_DONE = (payload) => (
  {
    type: types.GET_CATEGORY_DONE,
    payload
  }
);