import homeAPI from "services/home-api";
import API from "services/catalog-api";
import {
  setSaleProducts,
  loadingSetSaleProducts,
  errorSetSaleProducts,
  setFirstBootProduct,
  setImageProduct,
  setRestProduct,
  loadingSetProduct,
  errorSetProduct,
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
      console.log("🚀 акционные товары", data)
      dispatch(setSaleProducts({ totalArray, name }));
    };
  } catch (error) {
    dispatch(errorSetSaleProducts(error.message));
    dispatch(loadingSetSaleProducts(false));
    console.log(error.message);
  }
};

// карточка продукта
export const fetchSalerProduct = (id) => async (dispatch, getState) => {
  const { sale } = getState();

  try {
    dispatch(loadingSetProduct(true));
    const data = await API.fetchProduct(id);
    console.log("🚀 ~ карточка акционного товара", data)

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