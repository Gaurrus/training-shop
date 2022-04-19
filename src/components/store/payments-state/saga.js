import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { postPaymentsError, postPaymentsRequest, postPaymentsSeccess } from '.';
import { cleanCart } from '../cart-state';

function* postPaymentsWorker({ payload }) {
  console.log(payload);
  try {
    yield call(axios.post, `https://training.cleverland.by/shop/cart`, payload.postData);
    yield put(postPaymentsSeccess());
    yield put(cleanCart());
  } catch {
    yield put(postPaymentsError());
  }
}

export function* postPaymentsSaga() {
  yield takeLatest(postPaymentsRequest.type, postPaymentsWorker);
}
