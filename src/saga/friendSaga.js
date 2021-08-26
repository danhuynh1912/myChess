import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {ADD_FRIEND} from "../redux/friend/actionType";
import {FETCH_FRIEND} from "../redux/friend/actionType";

const m = JSON.parse(localStorage.getItem("list"));
const url = `/api/get-list-friends?playerID=${m.playerID}`;

function* setData() {
  const res = yield axios.get(url);
  debugger;
  yield put({ type: ADD_FRIEND, payload: res.data.data });
}

function* fetchData() {
  yield takeEvery(FETCH_FRIEND, setData);
}

export default fetchData;