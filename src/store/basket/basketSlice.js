import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: '',
  isLoadingCalculate: false,
  errorCalculate: '',
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
    loadingCalculateBasket: (state, { payload }) => ({
      ...state,
      isLoadingCalculate: payload,
    }),
    errorCalculateBasket: (state, { payload }) => ({
      ...state,
      errorCalculate: payload,
    }),
  },
});

export const {
  setBasket,
  loadingSetBasket,
  errorSetBasket,
  loadingCalculateBasket,
  errorCalculateBasket,
} = basketSlice.actions;