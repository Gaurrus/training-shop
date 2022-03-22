/* eslint-disable import/no-unresolved */
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { rootSaga } from './root-saga';
import productsReducer from './products-state';
import productReducer from './product-state';
import cartReducer from './cart-state';
import cartProductReducer from './product-cart-state';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    productsReducer,
    cartReducer,
    cartProductReducer,
    productReducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
