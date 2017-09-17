import { watchGetCategory } from "./category";

export default function* rootSaga() {
  yield watchGetCategory()
}