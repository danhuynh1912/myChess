import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {SET_REACT_BLOG} from "../redux/blog/actionType";
import {FETCH_REACT_BLOG} from "../redux/blog/actionType";

const url = "/api/get-all-lessons";

function* setData() {
  const res = yield axios.get(url);
  debugger;
  yield put({ type: SET_REACT_BLOG, payload: res.data.data });
}

function* fetchData() {
  yield takeEvery(FETCH_REACT_BLOG, setData);
}

export default fetchData;