/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { initialProductCartState } from './initial-state';

const cartProductSlice = createSlice({
  name: 'cartProductReducer',
  initialState: initialProductCartState,
  reducers: {
    changeProduct: (state, action) => {
      const { value } = action.payload;
      state.value = value;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    increment: (state) => {
      state.count += 1;
    },
  },
});

export const { decrement, increment, changeProduct } = cartProductSlice.actions;
export default cartProductSlice.reducer;
