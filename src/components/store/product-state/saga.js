import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getProductRequest, getProductSeccess, getProductError } from '.';

function* getStorageWorker(action) {
  console.log(action.payload.id);
  try {
    const { data } = yield call(axios.get, `https://training.cleverland.by/shop/product/${action.payload.id}`);
    yield put(getProductSeccess(data));
  } catch {
    yield put(getProductError());
  }
}

export function* getProductSaga() {
  yield takeLatest(getProductRequest.type, getStorageWorker);
}
