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
  const { sale } = useSelector(state => state);

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
        sort={sale.saleProducts.sort}
        setSort={sortSale}
        sortData={sortData}
      />
      <ProductsList
        screenName={route.name}
        products={sale.saleProducts.items}
        isLoading={sale.saleProducts.isLoading}
        nameSection={sale.saleProducts.nameSection}
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