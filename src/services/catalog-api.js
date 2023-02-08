import axios from 'axios';
import { baseUrl } from 'res/vars';

axios.defaults.baseURL = baseUrl;

// категории
async function fetchCategorys() {
  const { data } = await axios.get('/sections');
  return data;
};

// список товаров
async function fetchProducts(id) {
  const { data } = await axios.get(`/sections/${id}`);
  return data;
};

// один товар
async function fetchProduct(id) {
  const { data } = await axios.get(`/product/${id}`);
  return data;
};

const API = {
  fetchCategorys,
  fetchProducts,
  fetchProduct,
};
export default API;