import { useNavigation } from "@react-navigation/native";
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
// import components
import ProductsList from 'components/products/ProductsList';
import Sort from 'components/Sort';
import FilterButton from 'components/shared/FilterButton';
// import vars
import { strings, colors, mHorizontal } from 'res/vars';

export default ProductsScreen = ({ route }) => {
  // console.log("🚀 ~ route:", route)
  const navigation = useNavigation();
  const { catalog } = useSelector(state => state);

  const goToFilter = () => navigation.navigate(strings.nameNestedCatalog.filterCatalog);

  return (
    <View style={styles.container}>
      <View style={styles.sortBox}>
        <FilterButton onPress={goToFilter} />
        <Sort />
      </View>

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
  sortBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: mHorizontal.listProduct,
  },
  filterBtn: {
    width: 35,
    height: 35,
    backgroundColor: 'tomato'
  }
});