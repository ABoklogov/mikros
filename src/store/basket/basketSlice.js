import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: '',
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    // ------ список товаров ------
    setBasket: (state, { payload }) => ({
      ...state,
      items: [...payload],
    }),
    loadingSetBasket: (state, { payload }) => ({
      ...state,
      isLoading: payload,
    }),
    errorSetBasket: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
  },
});

export const {
  setBasket,
  loadingSetBasket,
  errorSetBasket,
} = basketSlice.actions;