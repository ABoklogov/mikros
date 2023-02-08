import { useNavigation } from "@react-navigation/native";
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
// import components
import ProductsList from 'components/products/ProductsList';
// import vars
import { fonts, colors } from 'res/vars';

export default BannersProductsScreen = ({ route }) => {
  // const navigation = useNavigation();
  const { homeBanners } = useSelector(state => state);

  return (
    <View style={styles.container}>
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