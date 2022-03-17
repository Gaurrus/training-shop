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
        cart.push({ dressCart, size, color, cartId, count: 1, price });
        console.log(cart);
      }
    },
    removeProduct: (state, action) => {
      const { cart } = state;
      const { productCartId } = action.payload;
      const index = cart?.findIndex((item) => productCartId === item.cartId);
      cart?.splice(index, 1);
    },
    changeCountPlus: (state, action) => {
      const { cart } = state;
      const { productCartId } = action.payload;
      const index = cart?.findIndex((item) => productCartId === item.cartId);
      console.log(index);
      cart[index].count += 1;
    },
    changeCountMinus: (state, action) => {
      const { cart } = state;
      const { productCartId } = action.payload;
      const index = cart?.findIndex((item) => productCartId === item.cartId);
      console.log(index);
      cart[index].count -= 1;
    },
    // setSumm: (state, action) => {
    //   const { cart } = state;
    //   const totalSumm = cart.reduce((summ, item) => {
    //     return summ + item.count * item.price;
    //   }, 0);
    //   console.log(totalSumm);
    // },
  },
});

export const { addProductInCart, removeProduct, setSumm, changeCountPlus, changeCountMinus } = cartSlice.actions;
export default cartSlice.reducer;
