import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrdersHistory } from 'store/orders/ordersOperations';
import { StyleSheet, View, Text } from 'react-native';
// import components
import OrdersList from 'components/orders/OrdersList';
import NotOrdersBlock from 'components/orders/NotOrdersBlock';
// import vars
import { colors } from 'res/vars';
import { text } from 'res/palette';

export default OrderHistoryScreen = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchOrdersHistory());
  }, []);

  if (orders.ordersHistory.isLoading) {
    return (
      <View style={styles.container}>
        <Text style={{ ...text }}>Загрузка</Text>
      </View>
    )
  } else {
    return (
      <View>
        {(orders.ordersHistory.items.length === 0) ? (
          <View style={styles.container}>
            <NotOrdersBlock />
          </View>
        ) : (
          <View style={styles.containerList}>
            <OrdersList
              orders={orders.ordersHistory.items}
              isLoading={orders.ordersHistory.isLoading}
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