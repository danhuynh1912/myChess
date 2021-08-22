import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {SET_USERS} from "../redux/user/actionType";
import {FETCH_USERS} from "../redux/user/actionType";

const url = "/api/get-all-players";

function* setData() {
  const res = yield axios.get(url);
  yield put({ type: SET_USERS, payload: res.data.data });
  debugger;
}

function* fetchData() {
  yield takeEvery(FETCH_USERS, setData);
}

export default fetchData;