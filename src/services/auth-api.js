import axios from 'axios';
import { baseUrl } from 'res/vars';

axios.defaults.baseURL = baseUrl;

// регистрация
async function registerUser(credentials) {
  const data = await axios.post('/user/register', credentials);
  return data;
};

// вход
async function logInUser(credentials) {
  const { data } = await axios.post('/user/login/', credentials);
  return data;
};

// выход
async function logOutUser() {
  axios.post('/user/logout');
};

// определение текущего юзера
async function fetchCurrentUser() {
  const data = await axios.get('/personal/profile');
  return data;
};

const API = {
  registerUser,
  logInUser,
  logOutUser,
  fetchCurrentUser,
};
export default API;