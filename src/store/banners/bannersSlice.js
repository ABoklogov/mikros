import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  banners: {
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
    sort: '',
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

export const bannersSlice = createSlice({
  name: 'homeBanners',
  initialState,
  reducers: {
    // ------ баннеры ------
    setBanners: (state, { payload }) => ({
      ...state,
      banners: {
        ...state.banners,
        items: [...payload],
      }
    }),
    loadingSetBanners: (state, { payload }) => ({
      ...state,
      banners: {
        ...state.banners,
        isLoading: payload,
      }
    }),
    errorSetBanners: (state, { payload }) => ({
      ...state,
      banners: {
        ...state.banners,
        error: payload,
      }
    }),

    // -------- список продуктов --------
    setBannersProducts: (state, { payload }) => ({
      ...state,
      products: {
        ...state.products,
        items: [...payload.totalArr],
        idSection: payload.id,
        nameSection: payload.name,
        sort: '',
      }
    }),
    loadingSetBannersProducts: (state, { payload }) => ({
      ...state,
      products: {
        ...state.products,
        isLoading: payload,
      }
    }),
    errorSetBannersProducts: (state, { payload }) => ({
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
    // сортировка
    setSortProducts: (state, { payload }) => ({
      ...state,
      products: {
        ...state.products,
        items: [...payload.totalArr],
        sort: payload.value,
      }
    }),
  },
});

export const {
  setBanners,
  loadingSetBanners,
  errorSetBanners,
  setBannersProducts,
  loadingSetBannersProducts,
  errorSetBannersProducts,
  setFirstBootProduct,
  setImageProduct,
  setRestProduct,
  loadingSetProduct,
  errorSetProduct,
  setSortProducts,
} = bannersSlice.actions;