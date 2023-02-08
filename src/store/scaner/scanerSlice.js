import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  product: null,
  isLoading: false,
  error: '',
};

export const scanerSlice = createSlice({
  name: 'scaner',
  initialState,
  reducers: {
    // ------ получение товара по сканеру ------
    getScanerProduct: (state, { payload }) => ({
      ...state,
      product: payload,
    }),
    // ------ удаление отсанированного товара ------
    removeProduct: (state) => ({
      ...state,
      product: null,
    }),
    loadingScaner: (state, { payload }) => ({
      ...state,
      isLoading: payload,
    }),
    errorScaner: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
  },
});

export const {
  getScanerProduct,
  loadingScaner,
  errorScaner,
  removeProduct,
} = scanerSlice.actions;