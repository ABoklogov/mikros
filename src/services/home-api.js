import axios from 'axios';
import { baseUrl } from 'res/vars';

axios.defaults.baseURL = baseUrl;

// баннеры
async function fetchBanners() {
  const { data } = await axios.get('/main/banners');
  return data;
};
// праздники
async function fetchHolidays() {
  const { data } = await axios.get('/main/holidays');
  return data;
};
// акционные товары
async function fetchSaleProducts() {
  const { data } = await axios.get('/main/stock');
  return data;
};
const API = {
  fetchBanners,
  fetchHolidays,
  fetchSaleProducts,
};
export default API;