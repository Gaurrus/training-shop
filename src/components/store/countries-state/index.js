/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { countriesInitialState } from './initial-state';

const countriesSlice = createSlice({
  name: 'countriesReducer',
  initialState: countriesInitialState,
  reducers: {
    getCountriesRequest: (state) => {
      state.isCountriesLoading = true;
      state.isCountriesError = false;
      state.data = countriesInitialState.data;
    },
    getCountriesSeccess: (state, action) => {
      console.log(action.payload);
      state.isCountriesLoading = false;
      state.isCountriesError = false;
      state.data = action.payload;
    },
    getCountriesError: (state) => {
      state.isCountriesLoading = false;
      state.isCountriesError = true;
    },
  },
});

export const { getCountriesSeccess, getCountriesError, getCountriesRequest } = countriesSlice.actions;
export default countriesSlice.reducer;
