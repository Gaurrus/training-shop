/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { initialProductState } from './initial-state';

const productSlice = createSlice({
  name: 'productReducer',
  initialState: initialProductState,
  reducers: {
    getProductRequest: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.data = initialProductState.data;
    },
    getProductSeccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    },
    getProductError: (state) => {
      state.isError = true;
    },
  },
});

export const { getProductRequest, getProductSeccess, getProductError } = productSlice.actions;
export default productSlice.reducer;
