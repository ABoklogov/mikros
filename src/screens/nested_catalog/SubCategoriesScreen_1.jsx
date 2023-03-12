import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
// import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
// import components
import CategorysList from 'components/categorys/CategorysList';
// import vars
import { colors } from 'res/vars';

export default SubCategoriesScreen_1 = ({ route }) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: route.params.name })
  }, []);

  return (
    <View style={styles.container}>
      <CategorysList categorys={route.params.categorys} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});