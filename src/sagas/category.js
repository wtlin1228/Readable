import { take, takeEvery, put, call, fork, select, all} from 'redux-saga/effects'

import * as actions from '../actions'
import * as types from '../constants/actionTypes'
import ApiGetCategory from '../services/api'

export function* watchGetCategory() {
  while(true) {
    const { payload } = yield take(actions.getAllCategory);
    const categories = yield all([
      call(ApiGetCategory)
    ]);
    console.log('before yield put ', categories[0]);
    yield put({ type: types.GET_CATEGORY, payload: categories[0] })
  }
}