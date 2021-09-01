import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {SET_HISTORY} from "../redux/history/actionType";
import {FETCH_HISTORY} from "../redux/history/actionType";

const m = JSON.parse(localStorage.getItem("list"));
const url = `/api/get-all-aigame?playerID=${m.playerID}`;

function* setData() {
  const res = yield axios.get(url);
  debugger;
  yield put({ type: SET_HISTORY, payload: res.data.data });
}

function* fetchData() {
  yield takeEvery(FETCH_HISTORY, setData);
}

export default fetchData;