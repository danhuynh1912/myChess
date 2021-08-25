import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {SET_ARTICLES} from "../redux/articles/actionType";
import {FETCH_ARTICLES} from "../redux/articles/actionType";

const url = "/api/get-articles";

function* setData() {
  const res = yield axios.get(url);
  yield put({ type: SET_ARTICLES, payload: res.data.data });
}

function* fetchData() {
  yield takeEvery(FETCH_ARTICLES, setData);
}

export default fetchData;