// import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  // TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
// import components
import ProductsItem from 'components/products/ProductsItem';
import ProductPreloader from 'components/preloaders/ProductPreloader';
// import vars
// import { radius, colors } from 'res/vars';

const WIDTH = Dimensions.get('window').width;

export default SaleProductsBlock = ({
  products,
  isLoading,
  screenName,
  title,
}) => {
  // const navigation = useNavigation();
  // const dispatch = useDispatch();

  // высчитываем ширину одного элемента
  const numColumn = 2;
  const widthItem = ((WIDTH - 25) - 4 * 5) / numColumn;

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Item text={title} link={screenName} />
      </View>

      {
        (products.length === 0 || isLoading) ? (
          <ProductPreloader width={widthItem} height={widthItem * 1.6} />
        ) : (
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
          >
            {
              products.map(item => (
                <View key={item.ID}>
                  <ProductsItem
                    screenName={screenName}
                    widthItem={widthItem}
                    name={item.NAME}
                    price={item.PRICE?.PRICE}
                    productImg={item.PICTURE}
                    idProduct={item.ID}
                  // product={item}
                  />
                </View>
              ))
            }
          </ScrollView>
        )
      }
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
  title: {
    marginBottom: 5,
  }
});

SaleProductsBlock.propTypes = {
  products: PropTypes.array,
  isLoading: PropTypes.bool,
  screenName: PropTypes.string,
  title: PropTypes.string,
};
