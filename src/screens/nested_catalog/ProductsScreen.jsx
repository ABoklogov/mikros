// import { useNavigation } from "@react-navigation/native";
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
// import components
import ProductsList from 'components/products/ProductsList';
import SortComponent from 'components/SortComponent';
// import vars
import { strings, colors } from 'res/vars';

export default ProductsScreen = ({ route }) => {
  // const navigation = useNavigation();
  const { catalog } = useSelector(state => state);

  return (
    <View style={styles.container}>
      <SortComponent filter={strings.nameNestedCatalog.filterCatalog} />
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