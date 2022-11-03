import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { reviewPostRequest, reviewPostSeccess, reviewPostError } from '.';
import { getProductSeccess } from '../product-state';

function* reviewPostWorker({ payload }) {
  try {
    const response = yield call(axios.post, `https://training.cleverland.by/shop/product/review`, payload);
    yield put(reviewPostSeccess(response.data));
    yield put(getProductSeccess(response.data));
  } catch {
    yield put(reviewPostError());
  }
}

export function* reviewPostSaga() {
  yield takeLatest(reviewPostRequest.type, reviewPostWorker);
}

// https://httpbin.org/post
// https://training.cleverland.by/shop/product/review
