/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { searchStorePostState } from './initial-state';

const searchStorePostSlice = createSlice({
  name: 'searchStorePostReducer',
  initialState: searchStorePostState,
  reducers: {
    searchStorePostRequest: (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.data = action.payload.postData;
    },
    searchStorePostSeccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.response = action.payload;
      console.log(action.payload);
    },
    searchStorePostError: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { searchStorePostRequest, searchStorePostSeccess, searchStorePostError } = searchStorePostSlice.actions;
export default searchStorePostSlice.reducer;
