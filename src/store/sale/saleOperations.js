import homeAPI from "services/home-api";
import API from "services/catalog-api";
const SortedArray = require('sorted-array-async');
import {
  sortPriceAsc,
  sortPriceDesc,
  sortNameAsc,
  sortNameDesc,
  sortDefault,
} from 'hooks/sort';
import {
  setSaleProducts,
  loadingSetSaleProducts,
  errorSetSaleProducts,
  setFirstBootProduct,
  setImageProduct,
  setRestProduct,
  loadingSetProduct,
  errorSetProduct,
  setSortProducts
} from './saleSlice';

// функия сортировки
const sortArr = (arr) => {
  return arr.sort((a, b) => {
    if (a.sort > b.sort) return 1;
    if (a.sort < b.sort) return -1;
    return 0;
  });
};

// акционные товары
export const fetchSaleProducts = (name) => async (dispatch, getState) => {
  try {
    dispatch(loadingSetSaleProducts(true));

    const { data } = await homeAPI.fetchSaleProducts();
    if (data) {
      dispatch(loadingSetSaleProducts(false));
      dispatch(errorSetSaleProducts(''));
      // сортируем массив
      const totalArray = sortArr(data);
      //console.log("🚀 акционные товары", data)
      dispatch(setSaleProducts({ totalArray, name }));
    };
  } catch (error) {
    dispatch(errorSetSaleProducts(error.message));
    dispatch(loadingSetSaleProducts(false));
    console.log(error.message);
  }
};

// карточка продукта
export const fetchSaleProduct = (id) => async (dispatch, getState) => {
  const { sale } = getState();

  try {
    dispatch(loadingSetProduct(true));
    const data = await API.fetchProduct(id);
    //console.log("🚀 ~ карточка акционного товара", data)

    if (data) {
      dispatch(loadingSetProduct(false));
      dispatch(errorSetProduct(''));
    };

    // dispatch(setRestProduct())
  } catch (error) {
    dispatch(errorSetProduct(error.message));
    dispatch(loadingSetProduct(false));
    console.log(error.message);
  };
};

// сортировка товаров
export const sortsProductsSale = (value) => async (dispatch, getState) => {
  const { sale } = getState();
  let products = [...sale.saleProducts.items];

  try {
    dispatch(loadingSetSaleProducts(true));
    switch (value) {
      case 'price_asc':
        const instancePriceAsc = new SortedArray(products, sortPriceAsc);
        instancePriceAsc.getArray().then(totalArr => {
          dispatch(loadingSetSaleProducts(false));
          dispatch(errorSetSaleProducts(''));
          dispatch(setSortProducts({ totalArr, value }));
        });
        break;
      case 'price_desc':
        const instancePriceDesc = new SortedArray(products, sortPriceDesc);
        instancePriceDesc.getArray().then(totalArr => {
          dispatch(loadingSetSaleProducts(false));
          dispatch(errorSetSaleProducts(''));
          dispatch(setSortProducts({ totalArr, value }));
        });
        break;
      case 'name_asc':
        const instanceNameAsc = new SortedArray(products, sortNameAsc);
        instanceNameAsc.getArray().then(totalArr => {
          dispatch(loadingSetSaleProducts(false));
          dispatch(errorSetSaleProducts(''));
          dispatch(setSortProducts({ totalArr, value }));
        });
        break;
      case 'name_desc':
        const instanceNameDesc = new SortedArray(products, sortNameDesc);
        instanceNameDesc.getArray().then(totalArr => {
          dispatch(loadingSetSaleProducts(false));
          dispatch(errorSetSaleProducts(''));
          dispatch(setSortProducts({ totalArr, value }));
        });
        break;

      default:
        const instanceDefault = new SortedArray(products, sortDefault);
        instanceDefault.getArray().then(totalArr => {
          dispatch(loadingSetSaleProducts(false));
          dispatch(errorSetSaleProducts(''));
          dispatch(setSortProducts({ totalArr, value }));
        });
        break;
    };
  } catch (error) {
    dispatch(loadingSetSaleProducts(false));
    dispatch(errorSetSaleProducts(error.message));
    console.log(error.message);
  };
};