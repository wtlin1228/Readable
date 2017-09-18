import * as types from '../constants/actionTypes'

export const navigate_category = (category) => (
  {
    type: types.NAVIGATE_CATEGORY,
    category
  }
);

