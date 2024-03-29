import API from "services/utility-api";

import {
  getScanerProduct,
  loadingScaner,
  errorScaner,
} from './scanerSlice';

// сканирование штрих-кода
export const fetchBarcode = (code) => async (dispatch, getState) => {
  // console.log("🚀 ~ fetchBarcode ~ barcode", code)
  try {
    dispatch(loadingScaner(true));
    const { data } = await API.fetchBarcode(code);

    if (data && typeof data === 'object') {
      dispatch(loadingScaner(false));
      dispatch(errorScaner(''));
      console.log("🚀 отсканированный товар", data)
      dispatch(getScanerProduct(data));
    } else {
      throw new Error('Server Error!');
    };
  } catch (error) {
    dispatch(errorScaner(error.message));
    dispatch(loadingScaner(false));
    console.log(error.message);
  };
};