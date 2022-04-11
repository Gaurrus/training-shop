/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { paymentsState } from './initial-state';

const paymentsSlice = createSlice({
  name: 'paymentsReducer',
  initialState: paymentsState,
  reducers: {
    paymentsAdd: (state, action) => {
      const { postData } = action.payload;
      state.data = postData;
    },
    postPaymentsRequest: (state, action) => {
      const { data } = action.payload;
      state.isSubscriptionLoading = true;
      state.isSubscriptionError = false;
      state.data = data;
    },
    postPaymentsSeccess: (state) => {
      state.isSubscriptionLoading = false;
      state.isSubscriptionError = false;
    },
    postPaymentsError: (state) => {
      state.isSubscriptionLoading = false;
      state.isSubscriptionError = true;
    },
  },
});

export const { paymentsAdd, postPaymentsSeccess, postPaymentsError, postPaymentsRequest } = paymentsSlice.actions;
export default paymentsSlice.reducer;
