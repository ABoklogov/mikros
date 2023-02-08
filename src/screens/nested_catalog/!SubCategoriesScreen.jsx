import { useNavigation } from "@react-navigation/native";
import { useSelector } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';
// import components
import SubCategorysList from 'components/categorys/SubCategorysList';
// import vars
import { fonts, colors } from 'res/vars';

export default SubCategoriesScreen = ({ route }) => {
  // const navigation = useNavigation();
  // const { catalog } = useSelector(state => state);

  return (
    <View style={styles.container}>
      <SubCategorysList subCategorys={route.params.categorys} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});