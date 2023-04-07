import API from "services/profile-api";
import {
  setBasket,
  loadingSetBasket,
  errorSetBasket,
  loadingCalculateBasket,
  errorCalculateBasket,
} from './basketSlice';

export const fetchBasket = () => async (dispatch, getState) => {
  const { auth } = getState();
  try {
    // если пользователь авторизован, делаем запрос на сервер за его корзиной
    if (auth.isLoggedIn) {
      dispatch(loadingSetBasket(true));
      const { data } = await API.fetchBasket();

      if (data === undefined) {
        throw new Error('Server Error!');
      } else {
        dispatch(loadingSetBasket(false));
        dispatch(errorSetBasket(''));
        console.log("🚀 ~ корзина", data.data)
        dispatch(setBasket(data.data));
      };
    } else {
      //  TODO: здесь надо сделать запрос за корзиной не авторизованного пользователя по fuser_id

      // если пользователь не авторизован, достаем его корзину из локального хранилища
      // dispatch(loadingSetBasket(true));
      // const localBasket = await getLocalBasket();
      // console.log("корзина не авторизованного юзера", localBasket)
      // if (localBasket === null) {
      //   dispatch(loadingSetBasket(false));
      //   dispatch(errorSetBasket(''));
      //   setLocalBasket([]);
      // } else if (Object.keys(localBasket).length === 0) {
      //   dispatch(loadingSetBasket(false));
      //   dispatch(errorSetBasket(''));
      //   dispatch(setBasket([]));
      // } else {
      //   dispatch(loadingSetBasket(false));
      //   dispatch(errorSetBasket(''));
      //   // dispatch(setBasket(arr));
      // };
    };
  } catch (error) {
    dispatch(loadingSetBasket(false));
    dispatch(errorSetBasket(error.message));
    console.log(error.message);
  }
};
export const calculateBasket = (product, quantity) => async (dispatch, getState) => {
  const { auth, basket } = getState();
  try {
    if (auth.isLoggedIn) {

    } else {
      // TODO: сделать запрос на сервер для добавления одного товара неавторизованного пользователя, прикрепив при этом fuser_id, после записываем товар в стор

      // dispatch(loadingCalculateBasket(true));
      // const localBasket = await getLocalBasket();
      // // считаем локальную корзину
      // const totalLocalBasket = calcLocalBasket(localBasket, product.ID, quantity);
      // // считаем подробную корзину
      // const totalBasket = calcBasket(basket.items, product, quantity);
      // dispatch(loadingCalculateBasket(false));
      // dispatch(errorCalculateBasket(''));
      // setLocalBasket(totalLocalBasket);
      // dispatch(setBasket(totalBasket));
    };
  } catch (error) {
    dispatch(loadingCalculateBasket(false));
    dispatch(errorCalculateBasket(error.message));
    console.log(error.message);
  }
};