/* eslint-disable import/no-unresolved */
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { rootSaga } from './root-saga';
import productsReducer from './products-state';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    productsReducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);