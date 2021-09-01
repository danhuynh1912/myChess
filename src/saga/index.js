import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import lessonSaga from "./lessonSaga";
import articlesReducer from "./articlesSaga";
import friendSaga from "./friendSaga";
import listFriendsRequestSaga from "./listFriendsRequestSaga";
import listFriendsReceivedSaga from "./listReceivedFriendsSaga";
import blogSaga from "./blogSaga";
import historySaga from "./historySaga";

function* rootSaga() {
    yield all([
        userSaga(), 
        lessonSaga(), 
        articlesReducer(), 
        listFriendsRequestSaga(), 
        friendSaga(), 
        listFriendsReceivedSaga(), 
        blogSaga(),
        historySaga()
    ]);
}

export default rootSaga;