import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  saleProducts: {
    items: [],
    // idSection: '',
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

export const saleSlice = createSlice({
  name: 'sale',
  initialState,
  reducers: {
    // ------ акционные товары ------
    setSaleProducts: (state, { payload }) => ({
      ...state,
      saleProducts: {
        ...state.saleProducts,
        items: [...payload.totalArray],
        nameSection: payload.name,
      }
    }),
    loadingSetSaleProducts: (state, { payload }) => ({
      ...state,
      saleProducts: {
        ...state.saleProducts,
        isLoading: payload,
      }
    }),
    errorSetSaleProducts: (state, { payload }) => ({
      ...state,
      saleProducts: {
        ...state.saleProducts,
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
  setSaleProducts,
  loadingSetSaleProducts,
  errorSetSaleProducts,
  setFirstBootProduct,
  setImageProduct,
  setRestProduct,
  loadingSetProduct,
  errorSetProduct,
} = saleSlice.actions;