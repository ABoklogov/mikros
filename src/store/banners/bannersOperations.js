import homeAPI from "services/home-api";
import API from "services/catalog-api";
const SortedArray = require('sorted-array-async');
import {
  sortPriceAsc,
  sortPriceDesc,
  sortNameAsc,
  sortNameDesc,
  sortDefault,
  sortCategotys,
} from 'hooks/sort';
import {
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
} from './bannersSlice';

// функия сортировки
const sortArr = (arr) => {
  return arr.sort((a, b) => {
    if (a.sort > b.sort) return 1;
    if (a.sort < b.sort) return -1;
    return 0;
  });
};

// баннеры
export const fetchBanners = () => async (dispatch, getState) => {
  try {
    dispatch(loadingSetBanners(true));

    const { data } = await homeAPI.fetchBanners();

    if (data) {
      dispatch(loadingSetBanners(false));
      dispatch(errorSetBanners(''));
      // сортируем массив
      const totalArray = sortArr(data);
      //console.log("🚀 ~ список баннеров", totalArray)
      dispatch(setBanners(totalArray))
    };
  } catch (error) {
    dispatch(errorSetBanners(error.message));
    dispatch(loadingSetBanners(false));
    console.log(error.message);
  };
};

// список продуктов
export const fetchBannersProducts = (id, name) => async (dispatch, getState) => {
  const { homeBanners } = getState();
  try {
    // если список продуктов загружен, то пропускаем эту часть
    if (homeBanners.products.idSection === id) {
      return
    } else {
      dispatch(loadingSetBannersProducts(true));

      const { data } = await API.fetchProducts(id);

      if (data === undefined) {
        throw new Error('Server Error!');
      } else {
        dispatch(loadingSetBannersProducts(false));
        dispatch(errorSetBannersProducts(''));

        // формируем приходящий массив в нужный формат
        let totalArr = data.reduce((prev, item) => {
          return prev.concat(item);
        }, []);
        // если массив не пустой то сортируем его
        if (totalArr.length > 0) {
          totalArr = sortArr(totalArr);
        };

        console.log("🚀 ~ список товаров от баннера", totalArr)
        dispatch(setBannersProducts({ totalArr, id, name }))
      };
    };
  } catch (error) {
    dispatch(errorSetBannersProducts(error.message));
    dispatch(loadingSetBannersProducts(false));
    console.log(error.message);
  };
};

// карточка продукта
export const fetchBannerProduct = (id) => async (dispatch, getState) => {
  const { homeBanners } = getState();

  try {
    dispatch(loadingSetProduct(true));
    const data = await API.fetchProduct(id);
    console.log("🚀 ~ карточка продукта с баннера", data)

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
export const sortsProductsBanners = (value) => async (dispatch, getState) => {
  const { homeBanners } = getState();
  let products = [...homeBanners.products.items];

  try {
    dispatch(loadingSetBannersProducts(true));
    switch (value) {
      case 'price_asc':
        const instancePriceAsc = new SortedArray(products, sortPriceAsc);
        instancePriceAsc.getArray().then(totalArr => {
          dispatch(loadingSetBannersProducts(false));
          dispatch(errorSetBannersProducts(''));
          dispatch(setSortProducts({ totalArr, value }));
        });
        break;
      case 'price_desc':
        const instancePriceDesc = new SortedArray(products, sortPriceDesc);
        instancePriceDesc.getArray().then(totalArr => {
          dispatch(loadingSetBannersProducts(false));
          dispatch(errorSetBannersProducts(''));
          dispatch(setSortProducts({ totalArr, value }));
        });
        break;
      case 'name_asc':
        const instanceNameAsc = new SortedArray(products, sortNameAsc);
        instanceNameAsc.getArray().then(totalArr => {
          dispatch(loadingSetBannersProducts(false));
          dispatch(errorSetBannersProducts(''));
          dispatch(setSortProducts({ totalArr, value }));
        });
        break;
      case 'name_desc':
        const instanceNameDesc = new SortedArray(products, sortNameDesc);
        instanceNameDesc.getArray().then(totalArr => {
          dispatch(loadingSetBannersProducts(false));
          dispatch(errorSetBannersProducts(''));
          dispatch(setSortProducts({ totalArr, value }));
        });
        break;

      default:
        const instanceDefault = new SortedArray(products, sortDefault);
        instanceDefault.getArray().then(totalArr => {
          dispatch(loadingSetBannersProducts(false));
          dispatch(errorSetBannersProducts(''));
          dispatch(setSortProducts({ totalArr, value }));
        });
        break;
    };
  } catch (error) {
    dispatch(errorSetBannersProducts(error.message));
    dispatch(loadingSetBannersProducts(false));
    console.log(error.message);
  };
};