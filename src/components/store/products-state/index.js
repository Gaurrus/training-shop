/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { initialProductsState } from './initial-state';

const productsSlice = createSlice({
  name: 'productsReducer',
  initialState: initialProductsState,
  reducers: {
    getProductsRequest: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.data = initialProductsState.data;
    },
    getProductsSeccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    },
    getProductsError: (state) => {
      state.isError = true;
    },
  },
});

export const { getProductsRequest, getProductsSeccess, getProductsError } = productsSlice.actions;
export default productsSlice.reducer;
