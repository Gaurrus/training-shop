/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { initialFooterState } from './initial-state';

const footerSlice = createSlice({
  name: 'footerReducer',
  initialState: initialFooterState,
  reducers: {
    postFooterRequest: (state, action) => {
      const { values } = action.payload;
      state.isFooterLoading = true;
      state.isFooterError = false;
      state.data = values;
    },
    postFooterSeccess: (state) => {
      state.isFooterLoading = false;
      state.isFooterError = false;
    },
    postFooterError: (state) => {
      state.isFooterLoading = false;
      state.isFooterError = true;
    },
  },
});

export const { postFooterRequest, postFooterSeccess, postFooterError } = footerSlice.actions;
export default footerSlice.reducer;
