/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { initialSubscriptionState } from './initial-state';

const subscriptionSlice = createSlice({
  name: 'subscriptionReducer',
  initialState: initialSubscriptionState,
  reducers: {
    postSubscriptionRequest: (state, action) => {
      const { values } = action.payload;
      state.isSubscriptionLoading = true;
      state.isSubscriptionError = false;
      state.data = values;
    },
    postSubscriptionSeccess: (state) => {
      state.isSubscriptionLoading = false;
      state.isSubscriptionError = false;
    },
    postSubscriptionError: (state) => {
      state.isSubscriptionLoading = false;
      state.isSubscriptionError = true;
    },
  },
});

export const { postSubscriptionRequest, postSubscriptionSeccess, postSubscriptionError } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
