import { delay } from 'redux-saga'
import { takeLatest, take, put, call, fork, select, all, cancel} from 'redux-saga/effects'

import * as types from '../constants/actionTypes'
import { ApiGetCategory } from '../services/api'

// Final Version
export function* worker() {
  const response = yield call(ApiGetCategory);
  yield put({ type: types.GET_CATEGORY_DONE, payload: response.categories})
}

export function* watchGetCategory() {
  yield takeLatest(types.GET_CATEGORY, worker);
}

// // 1. Replace types.GET_CATEGORY_DONE with types.GET_CATEGORY in worker
// export function* worker(action) {
//   console.log('Saga category, GetApiWorker');
//   const categories = yield call(ApiGetCategory, action.payload);
//   yield put({ type: types.GET_CATEGORY, payload: categories})
// }
//
// export function* watchGetCategory() {
//   yield takeLatest(types.GET_CATEGORY, worker);
// }

// // 2. Add delay to worker
// export function* worker(action) {
//   console.log('Saga category, GetApiWorker');
//   const categories = yield call(ApiGetCategory, action.payload);
//   console.log('1');
//   yield delay(1000);
//   console.log('2');
//   yield delay(1000);
//   console.log('3');
//   yield put({ type: types.GET_CATEGORY_DONE, payload: categories});
//   yield delay(1000);
//   console.log('4');
//   yield delay(1000);
//   console.log('5');
// }
//
// export function* watchGetCategory() {
//   yield takeLatest(types.GET_CATEGORY, worker);
// }

// 3. 使用while(true)搭配take來取代takeLastest
// export function* watchGetCategory() {
//   while (true) {
//     yield take(types.GET_CATEGORY);
//     const categories = yield call(ApiGetCategory, '>.^');
//
//     yield put({type: types.GET_CATEGORY_DONE, payload: categories})
//   }
// }

// // 4. 延續第三種測試並加上delay
// export function* watchGetCategory() {
//   while (true) {
//     yield take(types.GET_CATEGORY);
//     const categories = yield call(ApiGetCategory, '>.^');
//     console.log('1');
//     yield delay(1000);
//     console.log('2');
//     yield delay(1000);
//     console.log('3');
//     yield put({type: types.GET_CATEGORY_DONE, payload: categories})
//     console.log('4');
//     yield delay(1000);
//     console.log('5');
//   }
// }

// // 5. 延續第三種測試但是使用worker以及fork
// export function* worker(action) {
//   console.log('Saga category, GetApiWorker');
//   const categories = yield call(ApiGetCategory, '>.^');
//   console.log('1');
//   yield delay(1000);
//   console.log('2');
//   yield delay(1000);
//   console.log('3');
//   yield put({type: types.GET_CATEGORY_DONE, payload: categories})
//   console.log('4');
//   yield delay(1000);
//   console.log('5');
// }
//
// export function* watchGetCategory() {
//   while (true) {
//     yield take(types.GET_CATEGORY);
//     yield fork(worker, )
//   }
// }
