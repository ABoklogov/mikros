import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrdersHistory } from 'store/orders/ordersOperations';
import {
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';
// import components
import OrdersList from 'components/orders/OrdersList';
import NotOrdersBlock from 'components/orders/NotOrdersBlock';
// import vars
import { colors } from 'res/vars';
// import { text } from 'res/palette';

export default OrderHistoryScreen = () => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders.ordersHistory.items);
  const isLoading = useSelector(state => state.orders.ordersHistory.isLoading);

  useEffect(() => {
    dispatch(fetchOrdersHistory());
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color={colors.blue}
        />
      </View>
    )
  } else {
    return (
      <View>
        {(orders.length === 0) ? (
          <View style={styles.container}>
            <NotOrdersBlock />
          </View>
        ) : (
          <View style={styles.containerList}>
            <OrdersList
              orders={orders}
              isLoading={isLoading}
            />
          </View>
        )}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  containerList: {
    height: '100%',
    backgroundColor: colors.white,
  }
});