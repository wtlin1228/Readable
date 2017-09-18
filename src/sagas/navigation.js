import { takeLatest } from 'redux-saga/effects'

import * as types from '../constants/actionTypes'
import { worker as get_post_worker } from './post'

export function* watchNavigateCategory() {
  yield takeLatest(types.NAVIGATE_CATEGORY, get_post_worker);
}