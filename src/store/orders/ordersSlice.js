import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ordersHistory: {
    items: [],
    isLoading: false,
    error: '',
  },
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    // ------ история заказов ------
    setOrdersHistory: (state, { payload }) => ({
      ...state,
      ordersHistory: {
        ...state.ordersHistory,
        items: [...payload],
      }
    }),
    loadingSetOrdersHistory: (state, { payload }) => ({
      ...state,
      ordersHistory: {
        ...state.ordersHistory,
        isLoading: payload,
      }
    }),
    errorSetOrdersHistory: (state, { payload }) => ({
      ...state,
      ordersHistory: {
        ...state.ordersHistory,
        error: payload,
      }
    }),
  },
});

export const {
  setOrdersHistory,
  loadingSetOrdersHistory,
  errorSetOrdersHistory,
} = ordersSlice.actions;