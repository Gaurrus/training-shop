/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { initialSubscriptionState } from './initial-state';

const subscriptionSlice = createSlice({
  name: 'subscriptionReducer',
  initialState: initialSubscriptionState,
  reducers: {
    postSubscriptionRequest: (state, action) => {
      const { values } = action.payload;
      state.isLoading = true;
      state.isError = false;
      state.data = values;
    },
    postSubscriptionSeccess: (state, action) => {
      const { indicator } = action.payload;
      state.isLoading = false;
      state.isError = false;
      state.isIndicator = indicator;
    },
    postSubscriptionError: (state, action) => {
      const { indicator } = action.payload;
      state.isLoading = false;
      state.isError = true;
      state.isIndicator = indicator;
    },
  },
});

export const { postSubscriptionRequest, postSubscriptionSeccess, postSubscriptionError } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
