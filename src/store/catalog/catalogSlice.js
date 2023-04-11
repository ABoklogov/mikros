import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categorys: {
    items: [],
    // parentCategorys: [],
    // currentCategorys: [],
    // category: '',
    // parentCategory: '',
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

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    // -------- список категорий --------
    setCategorys: (state, { payload }) => ({
      ...state,
      categorys: {
        ...state.categorys,
        items: [...payload],
        // currentCategorys: [...payload],
      }
    }),
    // setCurrentCategorys: (state, { payload }) => ({
    //   ...state,
    //   categorys: {
    //     ...state.categorys,
    //     currentCategorys: [...payload.currentCategorys],
    //     parentCategorys: [...payload.parentCategorys],
    //     category: payload.name,
    //     parentCategory: payload.parentCategory,
    //   }
    // }),
    loadingSetCategorys: (state, { payload }) => ({
      ...state,
      categorys: {
        ...state.categorys,
        isLoading: payload,
      }
    }),
    errorSetCategorys: (state, { payload }) => ({
      ...state,
      categorys: {
        ...state.categorys,
        error: payload,
      }
    }),

    // -------- список продуктов --------
    setCatalog: (state, { payload }) => ({
      ...state,
      products: {
        ...state.products,
        items: [...payload.totalArr],
        idSection: payload.id,
        nameSection: payload.name,
        sort: '',
      }
    }),
    // загрузка
    loadingSetCatalog: (state, { payload }) => ({
      ...state,
      products: {
        ...state.products,
        isLoading: payload,
      }
    }),
    // ошибка
    errorSetCatalog: (state, { payload }) => ({
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
    // загрузка
    loadingSetProduct: (state, { payload }) => ({
      ...state,
      cardProduct: {
        ...state.cardProduct,
        isLoading: payload,
      }
    }),
    // ошибка
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
      // switch (payload) {
      //   case 'price_asc':
      //     state.products.items.sort((a, b) => {
      //       return +a.PRICE.PRICE - +b.PRICE.PRICE;
      //     });
      //     break;
      //   case 'price_desc':
      //     state.products.items.sort((a, b) => {
      //       return +b.PRICE.PRICE - +a.PRICE.PRICE;
      //     });
      //     break;
      //   case 'name_asc':
      //     state.products.items.sort((a, b) => {
      //       const nameA = a.NAME.toLowerCase().trim();
      //       const nameB = b.NAME.toLowerCase().trim();
      //       if (nameA < nameB) return -1;
      //       if (nameA > nameB) return 1;
      //       return 0;
      //     });
      //     break;
      //   case 'name_desc':
      //     state.products.items.sort((a, b) => {
      //       const nameA = a.NAME.toLowerCase().trim();
      //       const nameB = b.NAME.toLowerCase().trim();
      //       if (nameA > nameB) return -1;
      //       if (nameA < nameB) return 1;
      //       return 0;
      //     });
      //     break;

      //   default:
      //     state.products.items.sort((a, b) => {
      //       return +a.SORT - +b.SORT;
      //     });
      //     break;
      // };
      // state.products.sort = payload;
    }),
  },
});

export const {
  setCategorys,
  setCurrentCategorys,
  errorSetCategorys,
  loadingSetCategorys,
  setCatalog,
  loadingSetCatalog,
  errorSetCatalog,
  setFirstBootProduct,
  setImageProduct,
  setRestProduct,
  loadingSetProduct,
  errorSetProduct,
  setSortProducts,
} = catalogSlice.actions;