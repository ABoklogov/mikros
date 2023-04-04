import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: '',
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    // ------ список товаров ------
    setFavorites: (state, { payload }) => ({
      ...state,
      items: [...payload],
    }),
    loadingSetFavorites: (state, { payload }) => ({
      ...state,
      isLoading: payload,
    }),
    errorSetFavorites: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
  },
});

export const {
  setFavorites,
  loadingSetFavorites,
  errorSetFavorites,
} = favoritesSlice.actions;