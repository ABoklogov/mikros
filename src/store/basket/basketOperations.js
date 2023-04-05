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
      } else if (Object.keys(localBasket).length === 0) {
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

export const addToBasket = (idProduct, quantity) => async (dispatch, getState) => {
  const { auth } = getState();
  try {
    if (auth.isLoggedIn) {

    } else {
      const localBasket = await getLocalBasket();
      console.log("🚀 ~ addToBasket ~ localBasket:", localBasket)

      // let cartData = localBasket;
      // if (Object.keys(localBasket).length === 0) {
      //   cartData[idProduct] = quantity;
      //   setLocalBasket(cartData);
      // } else {
      //   for (let key in cartData) {
      //     if (key === idProduct) {
      //       cartData[key] = quantity;
      //     } else {
      //       cartData[idProduct] = quantity;
      //     };
      //   };
      //   setLocalBasket(cartData);

      //   const localBasket1 = await getLocalBasket();
      //   console.log("🚀 ~ addToBasket ~ localBasket1:", localBasket1)
      // };

      // removeLocalBasket()

      let findProduct = localBasket.find(el => el.id === idProduct);
      if (findProduct) {
        let cartData = [...localBasket];

        cartData.forEach(el => {
          if (el.id === idProduct) {
            el.quantity = quantity;
          }
        })
      } else {
        const totalBasket = [...localBasket, { id: idProduct, quantity: quantity }];
        setLocalBasket(totalBasket);
      };

      const localBasket2 = await getLocalBasket();
      console.log("🚀 ~ addToBasket ~ localBasket2", localBasket2)
    };
  } catch (error) {

  }
};