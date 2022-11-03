import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { searchStorePostRequest, searchStorePostSeccess, searchStorePostError } from '.';
import { getProductSeccess } from '../product-state';

function* searchStorePostWorker({ payload }) {
  try {
    const response = yield call(axios.post, `https://training.cleverland.by/shop/search/cities`, payload.postData);
    yield put(searchStorePostSeccess(response.data));
  } catch {
    yield put(searchStorePostError());
  }
}

export function* searchStorePostSaga() {
  yield takeLatest(searchStorePostRequest.type, searchStorePostWorker);
}

// https://httpbin.org/post
// https://training.cleverland.by/shop/search/cities
