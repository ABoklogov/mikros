import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyleSheet
} from 'react-native';
import { setFirstBootProduct } from 'store/catalog/catalogSlice';
import { fetchProduct } from 'store/catalog/catalogOperations';
import PropTypes from 'prop-types';
// import components
import CardProduct from 'components/card_product/CardProduct';
// import vars
// import { colors } from 'res/vars';
// import { text } from 'res/palette.js';

export default ProductCardScreen = ({ route }) => {
  const dispatch = useDispatch();
  const { name, price, productImg, idProduct, notImage } = route.params;

  useEffect(() => {
    dispatch(setFirstBootProduct({ name, price, id: idProduct })); // отправляем в стейт первые данные о продукте
    dispatch(fetchProduct(idProduct)); // получаем остальные данные о товаре
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

ProductCardScreen.propTypes = {
  route: PropTypes.object,
};