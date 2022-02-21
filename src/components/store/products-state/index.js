/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialProductsState = {
  isLoading: false,
  isError: false,
  products: {
    men: [],
    women: [],
  },
};

const productsSlice = createSlice({
  name: 'productsReducer',
  initialState: initialProductsState,
  redusers: {
    getProducts: (state) => {
      state.isLoading = true;
    },
  },
});

export default productsSlice.reducer;
export const { getProducts } = productsSlice.actions;
