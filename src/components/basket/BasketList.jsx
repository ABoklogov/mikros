import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Text,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
// import components
import BasketItem from 'components/basket/BasketItem';
// import vars
import { colors, mHorizontal } from 'res/vars';
import { text } from 'res/palette.js';

const WIDTH = Dimensions.get('window').width;

export default BasketList = ({ products }) => {

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          contentContainerStyle={styles.list}
          data={products}
          keyExtractor={item => item.ID}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          horizontal={false}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <BasketItem
                name={item.NAME}
                price={item.PRICE}
                unit={item.MEASURE_NAME}
              />
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  list: {
    alignItems: 'flex-start',
    paddingTop: 10,
    paddingBottom: 90,
  },
  item: {
    marginHorizontal: mHorizontal.baseBlock,
    marginBottom: 10,
    // width: '100%'
    maxWidth: WIDTH - mHorizontal.baseBlock * 2,
  },
});

BasketList.propTypes = {
  products: PropTypes.array,
};
