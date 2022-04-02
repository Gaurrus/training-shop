/* eslint-disable import/no-unresolved */
import { all } from 'redux-saga/effects';
import { postFooterSaga } from './footer-post-state/saga';
import { getProductSaga } from './product-state/saga';
import { getProductsSaga } from './products-state/saga';
import { reviewPostSaga } from './review-post-state/saga';
import { postSubscriptionSaga } from './subscription-post-state/saga';

export function* rootSaga() {
  yield all([getProductsSaga(), getProductSaga(), postSubscriptionSaga(), postFooterSaga(), reviewPostSaga()]);
}
