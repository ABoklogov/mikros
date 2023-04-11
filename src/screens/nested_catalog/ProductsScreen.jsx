// import { useState } from 'react';
// import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { setSortProducts } from 'store/catalog/catalogSlice';
// import components
import ProductsList from 'components/products/ProductsList';
import SortComponent from 'components/SortComponent';
// import vars
import { strings, colors, sortData } from 'res/vars';

export default ProductsScreen = ({ route }) => {
  // const navigation = useNavigation();
  const dispatch = useDispatch();
  const { catalog } = useSelector(state => state);

  return (
    <View style={styles.container}>
      <SortComponent
        filter={strings.nameNestedCatalog.filterCatalog}
        sort={catalog.products.sort}
        setSort={(value) => dispatch(setSortProducts(value))}
        sortData={sortData}
      />
      <ProductsList
        screenName={route.name}
        products={catalog.products.items}
        isLoading={catalog.products.isLoading}
        nameSection={catalog.products.nameSection}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  filterBtn: {
    width: 35,
    height: 35,
    backgroundColor: 'tomato'
  },
});