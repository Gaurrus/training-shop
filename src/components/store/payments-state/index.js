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
      state.isPaymentsLoading = true;
      state.isPaymentsError = false;
      state.data = data;
    },
    postPaymentsSeccess: (state) => {
      state.isPaymentsLoading = false;
      state.isPaymentsError = false;
    },
    postPaymentsError: (state) => {
      state.isPaymentsLoading = false;
      state.isPaymentsError = true;
    },
    paymentsReset: (state) => {
      state.isPaymentsLoading = true;
      state.isPaymentsError = false;
    },
  },
});

export const { paymentsAdd, postPaymentsSeccess, postPaymentsError, postPaymentsRequest, paymentsReset } =
  paymentsSlice.actions;
export default paymentsSlice.reducer;
