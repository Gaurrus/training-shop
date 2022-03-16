/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { initialProductCartState } from './initial-state';

const cartProductSlice = createSlice({
  name: 'cartProductReducer',
  initialState: initialProductCartState,
  reducers: {
    decrement: (state) => {
      state.count -= 1;
    },
    increment: (state) => {
      state.count += 1;
    },
  },
});

export const { decrement, increment } = cartProductSlice.actions;
export default cartProductSlice.reducer;
