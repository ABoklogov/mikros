import API from 'services/auth-api';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  registerUser,
  logInUser,
  logOutUser,
  setCurrentUser,
  errorUser,
  loadingUser,
  resultLogIn,
} from './authSlice';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
// запись токена в локальное хранилище
const setStoreToken = async (value) => {
  try {
    await AsyncStorage.setItem('token', value);
  } catch (error) {
    console.log(error.message)
  };
};

// удаления токена из локального хранилища
const removeStoreToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (error) {
    console.log(error.message)
  };
};

// получение токена
const getStoreToken = async () => {
  try {
    return await AsyncStorage.getItem('token')
  } catch (error) {
    console.log(error.message)
  };
}

// регистрация
export const registration = (credentials) => async (dispatch, getState) => {
  try {
    dispatch(loadingUser(true));

    const { data } = await API.registerUser(credentials);
    console.log("🚀 ~ registration ~ data", data)

    if (data === undefined) {
      throw new Error('Server Error!');
    } else {
      if (data.registered) {
        dispatch(loadingUser(false));
        dispatch(errorUser(''));
        // сохраняем данные в стейт
        dispatch(registerUser('success'));
      };
    };
  } catch (error) {
    dispatch(errorUser(error.message));
    dispatch(loadingUser(false));
    dispatch(registerUser('rejected'));
    console.log("🚀 ~ registration ~ error", error)
    console.log(error.message);
  };
};

// авторизация
export const logIn = (credentials) => async (dispatch, getState) => {
  try {
    dispatch(loadingUser(true));

    const data = await API.logInUser(credentials);

    if (data === undefined) {
      throw new Error('Server Error!');
    } else {
      dispatch(loadingUser(false));
      dispatch(errorUser(''));

      console.log("🚀 ~ logIn ~ data", data)
      // сохраняем данные в стейт
      dispatch(logInUser({ user: data.user, token: data.token }));
      dispatch(resultLogIn('success'));
      token.set(data.token);
      // сохраняем токен в локальное хранилище
      setStoreToken(data.token);
    };
  } catch (error) {
    dispatch(errorUser(error.message));
    dispatch(loadingUser(false));
    dispatch(resultLogIn('rejected'));
    console.log(error.message);
  };
};

// выход
export const logOut = () => async (dispatch, getState) => {
  try {
    await API.logOutUser();
    dispatch(logOutUser());
    token.unset();
    // удаляем токен из локального хранилища
    removeStoreToken();
  } catch (error) {
    console.log(error.message);
  };
};

// получение текущего юзера
export const fetchCurrentUser = () => async (dispatch, getState) => {
  try {
    const persistedToken = await getStoreToken(); // забираем токен из локального хранилища
    if (!persistedToken) return;

    token.set(persistedToken); // записываем токе в  axios.defaults.headers

    dispatch(loadingUser(true));
    const { data } = await API.fetchCurrentUser();

    if (data === undefined) {
      throw new Error('Server Error!');
    } else {
      dispatch(loadingUser(false));
      dispatch(errorUser(''));
      // сохраняем данные в стейт
      dispatch(setCurrentUser({ user: data.data, token: persistedToken }));
      token.set(persistedToken);
      // сохраняем токен в локальное хранилище
      setStoreToken(persistedToken);
      console.log("🚀 ~ текущию юзер", data.data)
    };
  } catch (error) {
    // удаляем токен отовсюду
    token.unset();
    removeStoreToken();
    dispatch(loadingUser(false));
    dispatch(errorUser(error.message));
    console.log(error.message);
  }
};
