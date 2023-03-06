import homeAPI from "services/home-api";
import API from "services/catalog-api";
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