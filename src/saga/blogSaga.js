import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {SET_BLOG} from "../redux/blog/actionType";
import {FETCH_BLOG} from "../redux/blog/actionType";

const url = "/api/react-blog/0?playerID=1";

function* setData() {
  const res = yield axios.get(url);
  yield put({ type: SET_BLOG, payload: res.data.data });
}

function* fetchData() {
  yield takeEvery(FETCH_BLOG, setData);
}

export default fetchData;