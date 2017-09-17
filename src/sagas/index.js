import { take, put, call, fork, select, all} from 'redux-saga/effects'

import { watchAddTest } from './testSaga'
import { watchGetCategory } from "./category";

export default function* rootSaga() {
  yield watchGetCategory()
}