import { take, put, call, fork, select, all} from 'redux-saga/effects'

import { watchAddTest } from './testSaga'

export default function* rootSaga() {
  yield watchAddTest()
}