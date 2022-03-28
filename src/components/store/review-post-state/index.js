/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { initialReviewPostState } from './initial-state';

const reviewPostSlice = createSlice({
  name: 'reviewPostReducer',
  initialState: initialReviewPostState,
  reducers: {
    reviewPostRequest: (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.data = action.payload;
    },
    reviewPostSeccess: (state) => {
      state.isLoading = false;
      state.isError = false;
    },
    reviewPostError: (state) => {
      state.isError = true;
    },
  },
});

export const { reviewPostRequest, reviewPostSeccess, reviewPostError } = reviewPostSlice.actions;
export default reviewPostSlice.reducer;
