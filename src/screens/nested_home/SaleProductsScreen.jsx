import { useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from 'react-redux';
import { sortsProductsSale } from 'store/sale/saleOperations';
import { StyleSheet, View } from 'react-native';
// import components
import ProductsList from 'components/products/ProductsList';
import SortComponent from 'components/SortComponent';
// import vars
import { strings, colors, sortData } from 'res/vars';

export default SaleProductsScreen = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const saleProducts = useSelector(state => state.sale.saleProducts);

  useEffect(() => {
    navigation.setOptions({
      title: route.params.name
    });
  }, []);

  const sortSale = (value) => dispatch(sortsProductsSale(value));

  return (
    <View style={styles.container}>
      <SortComponent
        filter={strings.nameNestedHome.filterSale}
        sort={saleProducts.sort}
        setSort={sortSale}
        sortData={sortData}
      />
      <ProductsList
        screenName={route.name}
        products={saleProducts.items}
        isLoading={saleProducts.isLoading}
        nameSection={saleProducts.nameSection}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});