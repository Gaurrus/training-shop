/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { initialSubscriptionState } from './initial-state';

const subscriptionSlice = createSlice({
  name: 'subscriptionReducer',
  initialState: initialSubscriptionState,
  reducers: {
    postSubscriptionRequest: (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.data = action.payload;
    },
    postSubscriptionSeccess: (state) => {
      state.isLoading = false;
      state.isError = false;
      console.log('успешно');
    },
    postSubscriptionError: (state) => {
      state.isError = true;
    },
  },
});

export const { postSubscriptionRequest, postSubscriptionSeccess, postSubscriptionError } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
