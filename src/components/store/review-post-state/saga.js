import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { reviewPostRequest, reviewPostSeccess, reviewPostError } from '.';

function* reviewPostWorker({ payload }) {
  try {
    yield call(axios.post, `https://httpbin.org/post`, payload);
    yield put(reviewPostSeccess());
  } catch {
    yield put(reviewPostError());
  }
}

export function* reviewPostSaga() {
  yield takeLatest(reviewPostRequest.type, reviewPostWorker);
}
