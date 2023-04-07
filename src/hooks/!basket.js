import AsyncStorage from '@react-native-async-storage/async-storage';

// запись корзины в локальное хранилище
export const setLocalBasket = async (value) => {
  try {
    const strBasket = JSON.stringify(value);
    await AsyncStorage.setItem('basket', strBasket);
  } catch (error) {
    console.log(error.message)
  };
};

// удаления корзины из локального хранилища
export const removeLocalBasket = async () => {
  try {
    await AsyncStorage.removeItem('basket');
  } catch (error) {
    console.log(error.message)
  };
};

// получение корзины из локального хранилища
export const getLocalBasket = async () => {
  try {
    const jsonBasket = await AsyncStorage.getItem('basket');
    return JSON.parse(jsonBasket);
  } catch (error) {
    console.log(error.message)
  };
};

// вычисляет массив локальной корзины
export const calcLocalBasket = (arrBasket, idProduct, quantity) => {
  let idx = null;
  let totalBasket = [...arrBasket];

  let findProduct = totalBasket.find((el, i) => {
    const proviso = el.id === idProduct;
    if (proviso) {
      el.quantity = quantity;
      idx = i;
    };
    return proviso;
  });
  if (findProduct) {
    if (findProduct.quantity === 0) totalBasket.splice(idx, 1);
  } else {
    totalBasket = [...totalBasket, { id: idProduct, quantity: quantity }]
  };
  return totalBasket;
};

// вычисляет массив подробной корзины 
export const calcBasket = (arrBasket, product, quantity) => {
  let totalBasket = [...arrBasket];
  let updatedProduct = { ...product };

  const idx = totalBasket.findIndex(item => item.ID === product.ID)

  if (idx === -1) {
    updatedProduct.QUANTITY = quantity;
    totalBasket.push(updatedProduct);
  } else {
    updatedProduct = { ...totalBasket[idx] };
    updatedProduct.QUANTITY = quantity;

    if (updatedProduct.QUANTITY === 0) {
      totalBasket.splice(idx, 1);
    } else {
      totalBasket = [
        ...totalBasket.slice(0, idx),
        updatedProduct,
        ...totalBasket.slice(idx + 1)
      ];
    };
  };
  return totalBasket;
};
