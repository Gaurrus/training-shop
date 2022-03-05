import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getProductsRequest, getProductsSeccess, getProductsError } from '.';

function* getStorageWorker() {
  try {
    const { data } = yield call(axios.get, 'https://training.cleverland.by/shop/products');
    yield put(getProductsSeccess(data));
  } catch {
    yield put(getProductsError());
  }
}

export function* getProductsSaga() {
  yield takeLatest(getProductsRequest.type, getStorageWorker);
}
