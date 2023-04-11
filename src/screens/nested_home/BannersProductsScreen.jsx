import { useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from 'react-redux';
import { sortsProductsBanners } from 'store/banners/bannersOperations';
import { StyleSheet, View } from 'react-native';
// import components
import ProductsList from 'components/products/ProductsList';
import SortComponent from 'components/SortComponent';
// import vars
import { strings, colors, sortData } from 'res/vars';

export default BannersProductsScreen = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { homeBanners } = useSelector(state => state);

  useEffect(() => {
    navigation.setOptions({
      title: route.params.name
    });
  }, []);

  const sortBanners = (value) => dispatch(sortsProductsBanners(value));

  return (
    <View style={styles.container}>
      <SortComponent
        filter={strings.nameNestedHome.filterBanners}
        sort={homeBanners.products.sort}
        setSort={sortBanners}
        sortData={sortData}
      />
      <ProductsList
        screenName={route.name}
        products={homeBanners.products.items}
        isLoading={homeBanners.products.isLoading}
        nameSection={homeBanners.products.nameSection}
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