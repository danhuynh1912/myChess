import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import lessonSaga from "./lessonSaga";
import articlesReducer from "./articlesSaga";
import friendSaga from "./friendSaga";
import listFriendsRequestSaga from "./listFriendsRequestSaga";
import listFriendsReceivedSaga from "./listReceivedFriendsSaga";

function* rootSaga() {
    yield all([userSaga(), lessonSaga(), articlesReducer(), listFriendsRequestSaga(), friendSaga(), listFriendsReceivedSaga()]);
}

export default rootSaga;