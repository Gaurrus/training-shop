/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { paymentsState } from './initial-state';

const paymentsSlice = createSlice({
  name: 'paymentsReducer',
  initialState: paymentsState,
  reducers: {
    paymentsAdd: (state, action) => {
      const { cartId, count, price, typeOfDelyvery, summFromArr } = action.payload;
      // state.data.products.name = cartId;
      state.data.quantity = count;
      state.data.totalPrice = summFromArr;
      state.data.paymentMethod = typeOfDelyvery;
    },
    // postSubscriptionRequest: (state, action) => {
    //   const { values } = action.payload;
    //   state.isSubscriptionLoading = true;
    //   state.isSubscriptionError = false;
    //   state.data = values;
    // },
    // postSubscriptionSeccess: (state) => {
    //   state.isSubscriptionLoading = false;
    //   state.isSubscriptionError = false;
    // },
    // postSubscriptionError: (state) => {
    //   state.isSubscriptionLoading = false;
    //   state.isSubscriptionError = true;
    // },
  },
});

export const { paymentsAdd, postSubscriptionSeccess, postSubscriptionError } = paymentsSlice.actions;
export default paymentsSlice.reducer;
