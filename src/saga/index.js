import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import lessonSaga from "./lessonSaga";
import articlesReducer from "./articlesSaga";

function* rootSaga() {
  yield all([userSaga(), lessonSaga(), articlesReducer()]);
}

export default rootSaga;