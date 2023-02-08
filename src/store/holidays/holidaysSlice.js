import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  holidays: {
    items: [],
    isLoading: false,
    error: '',
  },
  products: {
    items: [],
    idSection: '',
    nameSection: '',
    isLoading: false,
    error: '',
  },
  cardProduct: {
    id: '',
    name: '',
    price: '',
    image: '',
    vendorCode: '',
    isLoading: false,
    error: '',
  },
};

export const holidaysSlice = createSlice({
  name: 'homeHolidays',
  initialState,
  reducers: {
    // ------ праздники ------
    setHolidays: (state, { payload }) => ({
      ...state,
      holidays: {
        ...state.holidays,
        items: [...payload],
      }
    }),
    loadingSetHolidays: (state, { payload }) => ({
      ...state,
      holidays: {
        ...state.holidays,
        isLoading: payload,
      }
    }),
    errorSetHolidays: (state, { payload }) => ({
      ...state,
      holidays: {
        ...state.holidays,
        error: payload,
      }
    }),

    // -------- список продуктов --------
    setHolidaysProducts: (state, { payload }) => ({
      ...state,
      products: {
        ...state.products,
        items: [...payload.totalArr],
        idSection: payload.id,
        nameSection: payload.name,
      }
    }),
    loadingSetHolidaysProducts: (state, { payload }) => ({
      ...state,
      products: {
        ...state.products,
        isLoading: payload,
      }
    }),
    errorSetHolidaysProducts: (state, { payload }) => ({
      ...state,
      products: {
        ...state.products,
        error: payload,
      }
    }),

    // -------- карточка товара --------
    // получаем предварительные данные товара
    setFirstBootProduct: (state, { payload }) => ({
      ...state,
      cardProduct: {
        ...state.cardProduct,
        id: payload.id,
        name: payload.name,
        price: payload.price,
      }
    }),
    // фото
    setImageProduct: (state, { payload }) => ({
      ...state,
      cardProduct: {
        ...state.cardProduct,
        image: payload,
      }
    }),
    // остальная информация о товаре
    setRestProduct: (state, { payload }) => ({
      ...state,
      cardProduct: {
        ...state.cardProduct,
        vendorCode: payload,
      }
    }),
    loadingSetProduct: (state, { payload }) => ({
      ...state,
      cardProduct: {
        ...state.cardProduct,
        isLoading: payload,
      }
    }),
    errorSetProduct: (state, { payload }) => ({
      ...state,
      cardProduct: {
        ...state.cardProduct,
        error: payload,
      }
    }),
  },
});

export const {
  setHolidays,
  loadingSetHolidays,
  errorSetHolidays,
  setHolidaysProducts,
  loadingSetHolidaysProducts,
  errorSetHolidaysProducts,
  setFirstBootProduct,
  setImageProduct,
  setRestProduct,
  loadingSetProduct,
  errorSetProduct,
} = holidaysSlice.actions;