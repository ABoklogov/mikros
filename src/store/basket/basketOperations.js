import API from "services/profile-api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  setBasket,
  loadingSetBasket,
  errorSetBasket,
} from './basketSlice';

// запись корзины в локальное хранилище
const setLocalBasket = async (value) => {
  try {
    const strBasket = JSON.stringify(value);
    await AsyncStorage.setItem('basket', strBasket);
  } catch (error) {
    console.log(error.message)
  };
};

// удаления корзины из локального хранилища
const removeLocalBasket = async () => {
  try {
    await AsyncStorage.removeItem('basket');
  } catch (error) {
    console.log(error.message)
  };
};

// получение корзины из локального хранилища
const getLocalBasket = async () => {
  try {
    const jsonBasket = await AsyncStorage.getItem('basket');
    return JSON.parse(jsonBasket);
  } catch (error) {
    console.log(error.message)
  };
}

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
      // если пользователь не авторизован, достаем его корзину из локального хранилища
      dispatch(loadingSetBasket(true));
      const localBasket = await getLocalBasket();
      console.log("🚀 корзина не авторизованного юзера", localBasket)

      if (localBasket === null) {
        dispatch(loadingSetBasket(false));
        dispatch(errorSetBasket(''));
        setLocalBasket([]);
      } else if (localBasket.length === 0) {
        dispatch(loadingSetBasket(false));
        dispatch(errorSetBasket(''));
        dispatch(setBasket([]));
      } else {
        dispatch(loadingSetBasket(false));
        dispatch(errorSetBasket(''));
        // здесь надо сделать запрос за корзиной не авторизованного пользователя
        // dispatch(setBasket(localBasket));
      };
    };
  } catch (error) {
    dispatch(loadingSetBasket(false));
    dispatch(errorSetBasket(error.message));
    console.log(error.message);
  }
};

export const addToBasket = (id) => async (dispatch, getState) => {
  // console.log("🚀 ~ addToBasket ~ product", product)
  const { auth } = getState();

  try {
    if (auth.isLoggedIn) {

    } else {
      // removeLocalBasket()
      const localBasket = await getLocalBasket();
      const findProduct = localBasket.find(el => el === id);

      if (findProduct) {
        return
      } else {
        const totalBasket = [...localBasket, id];
        setLocalBasket(totalBasket);
      };

      const localBasket2 = await getLocalBasket();
      console.log("🚀 ~ addToBasket ~ localBasket2", localBasket2)
    };
  } catch (error) {

  }
};