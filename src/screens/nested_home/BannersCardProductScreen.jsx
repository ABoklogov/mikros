import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyleSheet,
} from 'react-native';
import { setFirstBootProduct } from 'store/banners/bannersSlice';
import { fetchBannerProduct } from 'store/banners/bannersOperations';
import PropTypes from 'prop-types';
// import components
import CardProduct from 'components/card_product/CardProduct';
// import vars
// import { colors } from 'res/vars';
// import { text } from 'res/palette.js';

export default BannersCardProductScreen = ({ route }) => {
  const dispatch = useDispatch();
  const { name, price, productImg, idProduct, notImage } = route.params;

  useEffect(() => {
    dispatch(fetchBannerProduct(idProduct)); // получаем остальные данные о товаре
    dispatch(setFirstBootProduct({ name, price, id: idProduct })); // отправляем в стейт первые данные о продукте
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

BannersCardProductScreen.propTypes = {
  route: PropTypes.object,
};