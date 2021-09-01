import { put, takeEvery, take, fork } from "redux-saga/effects";
import axios from "axios";
import {GET_FRIEND, UNFRIEND} from "../redux/friend/actionType";
import {FETCH_FRIEND} from "../redux/friend/actionType";

const m = JSON.parse(localStorage.getItem("list"));
const url = `/api/get-list-friends?playerID=${m.playerID}`;
// const url = '';
const urlUf = "/api/unfriend";

function* setData() {
  const res = yield axios.get(url);
  yield put({ type: GET_FRIEND, payload: res.data.data });
}

function* fetchData() {
  yield takeEvery(FETCH_FRIEND, setData);
  while(true) {
    const action = yield take(UNFRIEND);
    yield fork(unFr, action);
  } 
}

function* unFr(action) {
  debugger;
  yield axios.delete(urlUf, {data: {requesterID: m.playerID, receiverID: action.id}})
  debugger;
}

export default fetchData;