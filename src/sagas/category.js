import { takeLatest, put, call, fork, select, all} from 'redux-saga/effects'

import * as types from '../constants/actionTypes'
import ApiGetCategory from '../services/api'

export function* worker(action) {
  const categories = yield call(ApiGetCategory, action.payload);
  console.log(categories);
  yield put({ type: types.GET_CATEGORY_DONE, payload: categories})
}

export function* watchGetCategory() {
  yield takeLatest(types.GET_CATEGORY, worker);
}