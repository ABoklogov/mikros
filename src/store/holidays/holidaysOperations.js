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
  setSortProducts,
} from './holidaysSlice';

// функия сортировки
const sortArr = (arr) => {
  return arr.sort((a, b) => {
    if (a.sort > b.sort) return 1;
    if (a.sort < b.sort) return -1;
    return 0;
  });
};

// праздники
export const fetchHolidays = () => async (dispatch, getState) => {
  try {
    dispatch(loadingSetHolidays(true));

    const { data } = await homeAPI.fetchHolidays();
    if (data) {
      dispatch(loadingSetHolidays(false));
      dispatch(errorSetHolidays(''));
      // сортируем массив
      const totalArray = sortArr(data);
      //console.log("🚀 ~ праздники", totalArray)
      dispatch(setHolidays(totalArray));
    };
  } catch (error) {
    dispatch(errorSetHolidays(error.message));
    dispatch(loadingSetHolidays(false));
    console.log(error.message);
  };
};

// список продуктов
export const fetchHolidaysProducts = (id, name) => async (dispatch, getState) => {
  const { homeHolidays } = getState();
  try {
    // если список продуктов загружен, то пропускаем эту часть
    if (homeHolidays.products.idSection === id) {
      return
    } else {
      dispatch(loadingSetHolidaysProducts(true));

      const { data } = await API.fetchProducts(id);
      if (data === undefined) {
        throw new Error('Server Error!');
      } else {
        dispatch(loadingSetHolidaysProducts(false));
        dispatch(errorSetHolidaysProducts(''));

        // формируем приходящий массив в нужный формат
        let totalArr = data.reduce((prev, item) => {
          return prev.concat(item);
        }, []);
        // если массив не пустой то сортируем его
        if (totalArr.length > 0) {
          totalArr = sortArr(totalArr);
        };

        console.log("🚀 ~ список товаров от праздников", totalArr)
        dispatch(setHolidaysProducts({ totalArr, id, name }))
      };
    };
  } catch (error) {
    dispatch(errorSetHolidaysProducts(error.message));
    dispatch(loadingSetHolidaysProducts(false));
    console.log(error.message);
  };
};

// карточка продукта
export const fetchHolidaysProduct = (id) => async (dispatch, getState) => {
  const { homeHolidays } = getState();

  try {
    dispatch(loadingSetProduct(true));
    const data = await API.fetchProduct(id);
    console.log("🚀 ~ карточка продукта с праздников", data)

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
export const sortsProductsHolidays = (value) => async (dispatch, getState) => {
  const { homeHolidays } = getState();
  let products = [...homeHolidays.products.items];

  try {
    dispatch(loadingSetHolidaysProducts(true));
    switch (value) {
      case 'price_asc':
        const instancePriceAsc = new SortedArray(products, sortPriceAsc);
        instancePriceAsc.getArray().then(totalArr => {
          dispatch(loadingSetHolidaysProducts(false));
          dispatch(errorSetHolidaysProducts(''));
          dispatch(setSortProducts({ totalArr, value }));
        });
        break;
      case 'price_desc':
        const instancePriceDesc = new SortedArray(products, sortPriceDesc);
        instancePriceDesc.getArray().then(totalArr => {
          dispatch(loadingSetHolidaysProducts(false));
          dispatch(errorSetHolidaysProducts(''));
          dispatch(setSortProducts({ totalArr, value }));
        });
        break;
      case 'name_asc':
        const instanceNameAsc = new SortedArray(products, sortNameAsc);
        instanceNameAsc.getArray().then(totalArr => {
          dispatch(loadingSetHolidaysProducts(false));
          dispatch(errorSetHolidaysProducts(''));
          dispatch(setSortProducts({ totalArr, value }));
        });
        break;
      case 'name_desc':
        const instanceNameDesc = new SortedArray(products, sortNameDesc);
        instanceNameDesc.getArray().then(totalArr => {
          dispatch(loadingSetHolidaysProducts(false));
          dispatch(errorSetHolidaysProducts(''));
          dispatch(setSortProducts({ totalArr, value }));
        });
        break;

      default:
        const instanceDefault = new SortedArray(products, sortDefault);
        instanceDefault.getArray().then(totalArr => {
          dispatch(loadingSetHolidaysProducts(false));
          dispatch(errorSetHolidaysProducts(''));
          dispatch(setSortProducts({ totalArr, value }));
        });
        break;
    };
  } catch (error) {
    dispatch(loadingSetHolidaysProducts(false));
    dispatch(errorSetHolidaysProducts(error.message));
    console.log(error.message);
  };
};