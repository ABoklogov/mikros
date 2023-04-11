import API from "services/catalog-api";
const SortedArray = require('sorted-array-async');
import {
  setCategorys,
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
} from './catalogSlice';

// функия сортировки
const sort = (arr) => {
  return arr.sort((a, b) => {
    if (a.SORT > b.SORT) return 1;
    if (a.SORT < b.SORT) return -1;
    return 0;
  });
};

// функия сортировки категорий
const sortArr = (arr) => {
  return arr.sort((a, b) => {
    if (a.sort > b.sort) return 1;
    if (a.sort < b.sort) return -1;
    return 0;
  });
};

// категории
export const fetchCategorys = () => async (dispatch, getState) => {
  const { catalog } = getState();
  try {
    // если категории загружены, то пропускаем эту часть
    if (catalog.categorys.items.length > 0) {
      return
    } else {
      dispatch(loadingSetCategorys(true));

      const { data } = await API.fetchCategorys();
      if (data) {
        dispatch(loadingSetCategorys(false));
        dispatch(errorSetCategorys(''));
      };

      // формируем массив категорий в нужный формат
      const totalArr = data.reduce((newArr, el) => {
        if (!el.sub_category) el.sub_category = []; // сщздаем массив подкатегорий

        if (!el.parent_id) newArr.push(el); // отбираем категории верхнего уровня

        // отбираем остальные подкатегории
        data.forEach(subEl => {
          if (subEl.parent_id === el.id) {
            el.sub_category = [...el.sub_category, subEl]
          };
        });
        // сортируем все категории и подкатегории
        sortArr(el.sub_category);
        return sortArr(newArr);
      }, []);

      // console.log("🚀 ~ список категорий", totalArr);
      dispatch(setCategorys(totalArr));
    };
  } catch (error) {
    dispatch(errorSetCategorys(error.message));
    dispatch(loadingSetCategorys(false));
    console.log(error.message);
  };
};

// список продуктов
export const fetchProducts = (id, name) => async (dispatch, getState) => {
  const { catalog } = getState();
  try {
    // если каталог загружен, то пропускаем эту часть
    if (catalog.products.idSection === id) {
      return
    } else {
      dispatch(loadingSetCatalog(true));

      const { data } = await API.fetchProducts(id);
      if (data) {
        dispatch(loadingSetCatalog(false));
        dispatch(errorSetCatalog(''));
      };

      // формируем приходящий массив в нужный формат
      let totalArr = data.reduce((prev, item) => {
        return prev.concat(item);
      }, []);
      // если массив не пустой то сортируем его
      if (totalArr.length > 0) {
        totalArr = sort(totalArr);
      };

      // console.log("🚀 ~ список товаров ", totalArr)
      dispatch(setCatalog({ totalArr, id, name }))
    };
  } catch (error) {
    dispatch(errorSetCatalog(error.message));
    dispatch(loadingSetCatalog(false));
    console.log(error.message);
  };
};

// карточка продукта
export const fetchProduct = (id) => async (dispatch, getState) => {
  const { catalog } = getState();

  try {
    dispatch(loadingSetProduct(true));
    const data = await API.fetchProduct(id);
    // console.log("🚀 ~ карточка продукта", data)

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
export const sortsProducts = (value) => async (dispatch, getState) => {
  const { catalog } = getState();
  let products = [...catalog.products.items];
  // колбеки сортировки
  const sortPriceAsc = (a, b) => {
    return +a.PRICE.PRICE - +b.PRICE.PRICE;
  };
  const sortPriceDesc = (a, b) => {
    return +b.PRICE.PRICE - +a.PRICE.PRICE;
  };
  const sortNameAsc = (a, b) => {
    const nameA = a.NAME.toLowerCase().trim();
    const nameB = b.NAME.toLowerCase().trim();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  };
  const sortNameDesc = (a, b) => {
    const nameA = a.NAME.toLowerCase().trim();
    const nameB = b.NAME.toLowerCase().trim();
    if (nameA > nameB) return -1;
    if (nameA < nameB) return 1;
    return 0;
  };
  const sortDefault = (a, b) => {
    return +a.SORT - +b.SORT;
  };

  try {
    dispatch(loadingSetCatalog(true));
    switch (value) {
      case 'price_asc':
        const instancePriceAsc = new SortedArray(products, sortPriceAsc);
        instancePriceAsc.getArray().then(totalArr => {
          dispatch(loadingSetCatalog(false));
          dispatch(errorSetCatalog(''));
          dispatch(setSortProducts({ totalArr, value }));
        });
        break;
      case 'price_desc':
        const instancePriceDesc = new SortedArray(products, sortPriceDesc);
        instancePriceDesc.getArray().then(totalArr => {
          dispatch(loadingSetCatalog(false));
          dispatch(errorSetCatalog(''));
          dispatch(setSortProducts({ totalArr, value }));
        });
        break;
      case 'name_asc':
        const instanceNameAsc = new SortedArray(products, sortNameAsc);
        instanceNameAsc.getArray().then(totalArr => {
          dispatch(loadingSetCatalog(false));
          dispatch(errorSetCatalog(''));
          dispatch(setSortProducts({ totalArr, value }));
        });
        break;
      case 'name_desc':
        const instanceNameDesc = new SortedArray(products, sortNameDesc);
        instanceNameDesc.getArray().then(totalArr => {
          dispatch(loadingSetCatalog(false));
          dispatch(errorSetCatalog(''));
          dispatch(setSortProducts({ totalArr, value }));
        });
        break;

      default:
        const instanceDefault = new SortedArray(products, sortDefault);
        instanceDefault.getArray().then(totalArr => {
          dispatch(loadingSetCatalog(false));
          dispatch(errorSetCatalog(''));
          dispatch(setSortProducts({ totalArr, value }));
        });
        break;
    };
  } catch (error) {
    dispatch(loadingSetCatalog(false));
    dispatch(errorSetCatalog(error.message));
    console.log(error.message);
  };
};