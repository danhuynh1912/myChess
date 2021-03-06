import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {GET_LIST_RECEIVED_FRIENDS} from "../redux/friend/actionType";
import {FETCH_LIST_RECEIVED_FRIENDS} from "../redux/friend/actionType";

const m = JSON.parse(localStorage.getItem("list"));
const url = `/api/sent-request?playerID=${m.playerID}`;
// const url = '';

function* setData() {
  const res = yield axios.get(url);
  debugger;
  yield put({ type: GET_LIST_RECEIVED_FRIENDS, payload: res.data.data });
}

function* fetchData() {
  yield takeEvery(FETCH_LIST_RECEIVED_FRIENDS, setData);
}

export default fetchData;