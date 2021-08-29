import { put, takeEvery, take, fork } from "redux-saga/effects";
import axios from "axios";
import {SET_USERS} from "../redux/user/actionType";
import {FETCH_USERS} from "../redux/user/actionType";
import {SEND_FRIENDS} from "../redux/user/actionType";

const m = JSON.parse(localStorage.getItem("list"));
const url = "/api/get-all-players";
const urlFr = "/api/friend-request-sent";

function* setData() {
  const res = yield axios.get(url);
  yield put({ type: SET_USERS, payload: res.data.data });
}

function* fetchData() {
  yield takeEvery(FETCH_USERS, setData);
  while(true) {
    const action = yield take(SEND_FRIENDS);
    yield fork(sendFr, action);
  }
}

function* sendFr(action) {
  yield axios.post(urlFr, {requesterID: m.playerID, receiverID: action.payload})
}



export default fetchData;