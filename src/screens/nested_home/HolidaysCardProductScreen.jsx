import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyleSheet,
} from 'react-native';
import { setFirstBootProduct } from 'store/holidays/holidaysSlice';
import { fetchHolidaysProduct } from 'store/holidays/holidaysOperations';
import PropTypes from 'prop-types';
// import components
import CardProduct from 'components/card_product/CardProduct';
// import vars
// import { colors } from 'res/vars';
// import { text } from 'res/palette.js';

export default HolidaysCardProductScreen = ({ route }) => {
  const dispatch = useDispatch();
  const { name, price, productImg, idProduct, notImage } = route.params;

  useEffect(() => {
    dispatch(setFirstBootProduct({ name, price, id: idProduct })); // отправляем в стейт первые данные о продукте
    dispatch(fetchHolidaysProduct(idProduct)); // получаем остальные данные о товаре
  }, []);

  return (
    <CardProduct
      nameScreen={route.name}
      name={name}
      price={price}
      productImg={productImg}
      notImage={notImage}
    />
  );
};

const styles = StyleSheet.create({
});

HolidaysCardProductScreen.propTypes = {
  route: PropTypes.object,
};