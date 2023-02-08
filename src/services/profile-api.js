import axios from 'axios';
import { baseUrl } from 'res/vars';

axios.defaults.baseURL = baseUrl;

// список заказов
async function fetchOrdersHistory() {
  const data = await axios.get('/personal/order');
  return data;
};
// корзина
async function fetchBasket() {
  const data = await axios.get('/personal/basket');
  return data;
};

const API = {
  fetchOrdersHistory,
  fetchBasket,
};

export default API;