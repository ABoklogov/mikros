import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';
import { fetchBasket } from 'store/basket/basketOperations';
// import components
import BasketList from 'components/basket/BasketList';
import ViewEmptyBasket from 'components/basket/ViewEmptyBasket';
// import vars
import { colors } from 'res/vars';
// import { text } from 'res/palette.js';

export default DefaultBasketScreen = () => {
  const dispatch = useDispatch();
  const { basket, auth } = useSelector(state => state);

  // загружаем корзину
  // useEffect(() => {
  //   dispatch(fetchBasket());
  // }, [auth.isLoggedIn]);

  if (basket.isLoading) {
    return (
      <View style={styles.preloader}>
        <ActivityIndicator
          size="large"
          color={colors.blue}
        />
      </View>
    )
  } else if (basket.items.length === 0) {
    return (
      <View style={styles.container}>
        <ViewEmptyBasket />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <BasketList
          products={basket.items}
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.white,
  },
  preloader: {
    height: '100%',
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});