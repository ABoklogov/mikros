import { useNavigation } from "@react-navigation/native";
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
// import components
import ProductsList from 'components/products/ProductsList';
// import vars
import { colors } from 'res/vars';

export default SaleProductsScreen = ({ route }) => {
  // const navigation = useNavigation();
  const { sale } = useSelector(state => state);

  return (
    <View style={styles.container}>
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