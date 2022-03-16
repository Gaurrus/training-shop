/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { initialCartState } from './initial-state';

const cartSlice = createSlice({
  name: 'cartReducer',
  initialState: initialCartState,
  reducers: {
    addProductInCart: (state, action) => {
      const { cart } = state;
      const { dressCart, color, size, price, cartId } = action.payload;
      if (!cart?.includes(cart.find((item) => cartId === item.cartId))) {
        cart.push({ dressCart, size, color, cartId });
        state.summ += price;
      }
    },
    removeProduct: (state, action) => {
      const { cart } = state;
      const { dressCart, color, size, price, cartId } = action.payload;
      cart?.filter((item) => cartId === item.cartId);
      state.summ -= price;
    },
  },
});

export const { addProductInCart, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
