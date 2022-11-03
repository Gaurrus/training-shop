import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getCountriesSeccess, getCountriesError, getCountriesRequest } from '.';

function* getCountriesWorker() {
  try {
    const { data } = yield call(axios.get, 'https://training.cleverland.by/shop/countries');
    yield put(getCountriesSeccess(data));
  } catch {
    yield put(getCountriesError());
  }
}

export function* getCountriesSaga() {
  yield takeLatest(getCountriesRequest.type, getCountriesWorker);
}
