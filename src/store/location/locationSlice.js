import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  city: '',
  isLoading: false,
  error: '',
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, { payload }) => ({
      ...state,
      city: payload,
    }),
    loadingSetLocation: (state, { payload }) => ({
      ...state,
      isLoading: payload,
    }),
    errorSetLocation: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
  },
});

export const {
  setLocation,
  loadingSetLocation,
  errorSetLocation
} = locationSlice.actions;