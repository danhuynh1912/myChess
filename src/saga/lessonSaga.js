import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {SET_LESSONS} from "../redux/lesson/actionType";
import {FETCH_LESSONS} from "../redux/lesson/actionType";

const url = "/api/get-all-lessons";

function* setData() {
  const res = yield axios.get(url);
  yield put({ type: SET_LESSONS, payload: res.data.data });
}

function* fetchData() {
  yield takeEvery(FETCH_LESSONS, setData);
}

export default fetchData;