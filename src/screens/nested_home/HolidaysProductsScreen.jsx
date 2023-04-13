import { useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from 'react-redux';
import { sortsProductsHolidays } from 'store/holidays/holidaysOperations';
import { StyleSheet, View } from 'react-native';
// import components
import ProductsList from 'components/products/ProductsList';
import SortComponent from 'components/SortComponent';
// import vars
import { strings, colors, sortData } from 'res/vars';

export default HolidaysProductsScreen = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { homeHolidays } = useSelector(state => state);

  useEffect(() => {
    navigation.setOptions({
      title: route.params.name
    });
  }, []);

  const sortHolidays = (value) => dispatch(sortsProductsHolidays(value));

  return (
    <View style={styles.container}>
      <SortComponent
        filter={strings.nameNestedHome.filterHolidays}
        sort={homeHolidays.products.sort}
        setSort={sortHolidays}
        sortData={sortData}
      />
      <ProductsList
        screenName={route.name}
        products={homeHolidays.products.items}
        isLoading={homeHolidays.products.isLoading}
        nameSection={homeHolidays.products.nameSection}
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