import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    id: "",
    name: "",
    lastName: "",
    city: "",
    phone: "",
    email: ""
  },
  token: null,
  isLoggedIn: false, // вошел в систему
  registered: '', // статус регистрации
  authorization: '', // статус входа
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // регистрация
    registerUser: (state, { payload }) => ({
      ...state,
      registered: payload,
    }),

    // вход
    logInUser: (state, { payload }) => ({
      ...state,
      user: payload.user,
      token: payload.token,
      isLoggedIn: true,
    }),
    // статус входа, для модалки
    resultLogIn: (state, { payload }) => ({
      ...state,
      authorization: payload,
    }),
    // выход
    logOutUser: (state, { payload }) => ({
      ...state,
      user: {
        id: "",
        name: "",
        lastName: "",
        city: "",
        phone: "",
        email: ""
      },
      token: null,
      isLoggedIn: false,
    }),

    // сохранение текущего юзера
    setCurrentUser: (state, { payload }) => ({
      ...state,
      user: payload.user,
      token: payload.token,
      isLoggedIn: true,
    }),

    // Загрузка
    loadingUser: (state, { payload }) => ({
      ...state,
      isLoading: payload,
    }),
    // ошибка
    errorUser: (state, { payload }) => ({
      ...state,
      error: payload,
    }),

    // // обновляет юзера
    // updateUserProfile: (state, { payload }) => ({
    //   ...state,
    //   idUser: payload.idUser,
    //   email: payload.email,
    // }),
    // // обновляет состояние юзера
    // userStateChange: (state, { payload }) => ({
    //   ...state,
    //   stateChange: payload.stateChange,
    // }),
  },
});

export const {
  registerUser,
  logInUser,
  logOutUser,
  setCurrentUser,
  errorUser,
  loadingUser,
  resultLogIn,
} = authSlice.actions;