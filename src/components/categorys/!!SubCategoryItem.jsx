// import { useSelector } from 'react-redux';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from 'store/catalog/catalogOperations';
import { setCurrentCategorys } from 'store/catalog/catalogSlice';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
// import components

// import vars
import { strings, images, radius, activeOpacity } from 'res/vars';
import { text } from 'res/palette';

export default SubCategoryItem = ({
  id,
  name,
  subCategorys,
  parentCategorys,
}) => {
  const { catalog } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const openSubCategory = () => {
    if (subCategorys.length === 0) {
      dispatch(fetchProducts(id, name));
      navigation.navigate(strings.nameNestedCatalog.products);
    } else {
      const objCategorys = {
        currentCategorys: subCategorys,
        parentCategorys,
        name,
        parentCategory: catalog.categorys.category,
      };
      dispatch(setCurrentCategorys(objCategorys));
      navigation.navigate(strings.nameNestedCatalog.subCategorys, { categorys: subCategorys });
    };
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={openSubCategory}
      >
        <View style={styles.textBox}>
          <Text style={styles.text}>{name}</Text>
        </View>

      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {

  },
  textBox: {
    paddingBottom: 5,
    paddingTop: 5,
  },
  text: {
    ...text,
  }
});

SubCategoryItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  subCategorys: PropTypes.array,
  parentCategorys: PropTypes.array,
};