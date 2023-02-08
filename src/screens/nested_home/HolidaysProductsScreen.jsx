import { useNavigation } from "@react-navigation/native";
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
// import components
import ProductsList from 'components/products/ProductsList';
// import vars
import { fonts, colors } from 'res/vars';

export default HolidaysProductsScreen = ({ route }) => {
  // const navigation = useNavigation();
  const { homeHolidays } = useSelector(state => state);

  return (
    <View style={styles.container}>
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