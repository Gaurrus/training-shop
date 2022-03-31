/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { initialSubscriptionState } from './initial-state';

const subscriptionSlice = createSlice({
  name: 'subscriptionReducer',
  initialState: initialSubscriptionState,
  reducers: {
    postSubscriptionRequest: (state, action) => {
      const { values, indicator } = action.payload;
      switch (indicator) {
        case 'f':
          state.isFooterLoading = true;
          state.isFooterError = false;
          break;
        case 's':
          state.isSubscriptionLoading = true;
          state.isSubscriptionError = false;
          break;
        default:
          break;
      }
      state.data = values;
    },
    postSubscriptionSeccess: (state, action) => {
      const { indicator } = action.payload;
      switch (indicator) {
        case 'f':
          state.isFooterLoading = false;
          state.isFooterError = false;
          break;
        case 's':
          state.isSubscriptionLoading = false;
          state.isSubscriptionError = false;
          break;
        default:
          break;
      }
      state.isIndicator = indicator;
    },
    postSubscriptionError: (state, action) => {
      const { indicator } = action.payload;
      switch (indicator) {
        case 'f':
          state.isFooterLoading = false;
          state.isFooterError = true;
          break;
        case 's':
          state.isSubscriptionLoading = false;
          state.isSubscriptionError = true;
          break;
        default:
          break;
      }
      state.isIndicator = indicator;
    },
  },
});

export const { postSubscriptionRequest, postSubscriptionSeccess, postSubscriptionError } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
