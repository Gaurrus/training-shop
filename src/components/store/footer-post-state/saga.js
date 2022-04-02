import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { postFooterError, postFooterRequest, postFooterSeccess } from '.';

function* postFooterWorker({ payload }) {
  try {
    yield call(axios.post, `https://training.cleverland.by/shop/email`, payload.values);
    yield put(postFooterSeccess());
  } catch {
    yield put(postFooterError());
  }
}

export function* postFooterSaga() {
  yield takeLatest(postFooterRequest.type, postFooterWorker);
}
