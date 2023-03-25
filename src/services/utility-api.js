import axios from 'axios';
import { keyCity, cityUrl, prodUrl } from 'res/vars';

// поиск города
async function fetchAddress(value) {
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Token " + keyCity
    },
    body: JSON.stringify({
      query: value,
      count: 15,
      from_bound: { value: "city" },
      to_bound: { value: "settlement" },
      locations: {
        country: '*'
      }
    })
  };

  let response = await fetch(cityUrl, options);
  let result = await response.text();
  let data = await JSON.parse(result);
  return data;
};

// сканер штрих-кода
async function fetchBarcode(code) {
  const data = await axios.get(`${prodUrl}/barcode/?code=${code}`);
  return data;
};

const API = {
  fetchAddress,
  fetchBarcode,
};

export default API;