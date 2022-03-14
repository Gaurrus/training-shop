/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { initialCartState } from './initial-state';

const cartSlice = createSlice({
  name: 'cartReducer',
  initialState: initialCartState,
  reducers: {
    addProductInCart: (state, action) => {
      const { cart } = state;
      const { dressCart, color, size } = action.payload;
      cart.push({ dressCart, size, color });
    },
    removeProduct: () => initialCartState,
  },
});

export const { addProductInCart, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
