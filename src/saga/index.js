import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import lessonSaga from "./lessonSaga";
import articlesReducer from "./articlesSaga";
import friendSaga from "./friendSaga";
import listFriendsRequestSaga from "./listFriendsRequestSaga";

function* rootSaga() {
  yield all([userSaga(), lessonSaga(), articlesReducer(), listFriendsRequestSaga(), friendSaga()]);
}

export default rootSaga;