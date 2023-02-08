// import { useSelector } from 'react-redux';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
// import components
import OrderItem from 'components/orders/OrderItem';
import Card from 'components/shared/Card';
// import vars
import { mHorizontal } from 'res/vars';
// import { text } from 'res/palette.js';

export default OrdersList = ({ orders }) => {

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          contentContainerStyle={styles.list}
          data={orders}
          keyExtractor={item => item.ID}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          horizontal={false}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Card>
                <View style={styles.cardBox}>
                  <OrderItem
                    id={item.ID}
                    date={item.DATE_STATUS}
                    status={item.STATUS_ID}
                    price={item.PRICE}
                    paymentSystems={item.PAY_SYSTEM_ID}
                  />
                </View>
              </Card>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
  item: {
    marginHorizontal: mHorizontal.baseBlock,
    marginBottom: 15,
  },
  cardBox: {
    margin: 10,
  }
});

OrdersList.propTypes = {
  orders: PropTypes.array,
};
