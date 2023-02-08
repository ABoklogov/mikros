import API from "services/profile-api";

import {
  setOrdersHistory,
  loadingSetOrdersHistory,
  errorSetOrdersHistory,
} from './ordersSlice';

export const fetchOrdersHistory = () => async (dispatch, getState) => {
  const { orders } = getState();

  try {
    dispatch(loadingSetOrdersHistory(true));
    const { data } = await API.fetchOrdersHistory();

    if (data === undefined) {
      throw new Error('Server Error!');
    } else {
      dispatch(loadingSetOrdersHistory(false));
      dispatch(errorSetOrdersHistory(''));
      console.log("🚀 ~ история заказов", data.data)
      dispatch(setOrdersHistory(data.data));
    };
  } catch (error) {
    dispatch(loadingSetOrdersHistory(false));
    dispatch(errorSetOrdersHistory(error.message));
    console.log(error.message);
  }
};
