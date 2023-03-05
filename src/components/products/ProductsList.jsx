// import { useSelector } from 'react-redux';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Text,
  useWindowDimensions,
  ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';
// import components
import ProductsItem from 'components/products/ProductsItem';
import Title from "components/shared/Title";
// import vars
import { mHorizontal, colors } from 'res/vars';
import { text } from 'res/palette.js';

export default ProductsList = ({
  screenName,
  products,
  isLoading,
  nameSection,
}) => {
  // const { catalog } = useSelector(state => state);
  const window = useWindowDimensions();

  // высчитываем ширину одного элемента
  const numColumn = 2;
  const widthItem = ((window.width - 10) - 4 * 5) / numColumn;

  if (isLoading) {
    return (
      <View style={styles.containerMsg}>
        <ActivityIndicator
          size="large"
          color={colors.blue}
        />
      </View>
    )
  } else if (products.length === 0) {
    return (
      <View style={styles.containerMsg}>
        <Text style={{ ...text }}>
          Нет товаров категории {nameSection}
        </Text>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.titleSection}>
          <Title text={nameSection} />
        </View>

        <SafeAreaView>
          <FlatList
            contentContainerStyle={styles.list}
            data={products}
            keyExtractor={item => item.ID}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            horizontal={false}
            numColumns={numColumn}
            renderItem={({ item }) => (
              <ProductsItem
                screenName={screenName}
                widthItem={widthItem}
                name={item.NAME}
                price={item.PRICE?.PRICE}
                productImg={item.PICTURE}
                idProduct={item.ID}
              // product={item}
              />
            )}
          />
        </SafeAreaView>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  containerMsg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    marginHorizontal: 5,
  },
  titleSection: {
    paddingTop: 10,
    paddingBottom: 10,
    marginHorizontal: mHorizontal.baseBlock,
  },
  list: {
    alignItems: 'flex-start',
    paddingTop: 10,
    paddingBottom: 90,
  }
});

ProductsList.propTypes = {
  screenName: PropTypes.string,
  products: PropTypes.array,
  isLoading: PropTypes.bool,
  nameSection: PropTypes.string,
};
