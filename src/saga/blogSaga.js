import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {SET_BLOG} from "../redux/blog/actionType";
import {FETCH_BLOG} from "../redux/blog/actionType";

const url = "/api/get-all-blog-by-playerID?playerID=1";

function* setData() {
  const res = yield axios.get(url);
  debugger;
  yield put({ type: SET_BLOG, payload: res.data.data });
}

function* fetchData() {
  debugger;
  yield takeEvery(FETCH_BLOG, setData);
}

export default fetchData;