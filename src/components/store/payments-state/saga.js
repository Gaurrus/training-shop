import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { postSubscriptionError, postSubscriptionRequest, postSubscriptionSeccess } from '.';

function* postSubscriptionWorker({ payload }) {
  try {
    yield call(axios.post, `https://training.cleverland.by/shop/email`, payload.values);
    yield put(postSubscriptionSeccess());
  } catch {
    yield put(postSubscriptionError());
  }
}

export function* postSubscriptionSaga() {
  yield takeLatest(postSubscriptionRequest.type, postSubscriptionWorker);
}
