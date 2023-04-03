// import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from "@react-navigation/native";
import { setCurrentCategorys } from 'store/catalog/catalogSlice';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
// import components
import Card from 'components/shared/Card';
// import CategoryItem from 'components/categorys/CategoryItem';
// import vars
import { strings, images, radius, activeOpacity } from 'res/vars';
import { baseText, } from 'res/palette';

export default CategoryItem = ({
  name,
  widthItem,
  subCategorys,
  parentCategorys,
  id,
}) => {
  const { catalog } = useSelector(state => state);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const findCategory = (id, obj) => {
    for (let key in obj) {
      if (key === id) {
        return obj[key];
      }
    }
  };
  // console.log('parentCategory', catalog.categorys.category)
  //   ;
  const openSubCategory = () => {
    dispatch(setCurrentCategorys({
      parentCategorys: parentCategorys,
      currentCategorys: subCategorys,
      name,
      parentCategory: catalog.categorys.category,
    }));
    navigation.navigate(strings.nameNestedCatalog.subCategorys, { categorys: subCategorys });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={openSubCategory}
      >
        <Card>
          <View
            style={{
              ...styles.item,
              width: widthItem,
              height: widthItem / 1.5,
            }}
          >
            <Image
              style={styles.iconCategorys}
              source={findCategory(id, images.categorys)}
            />
            <Text style={styles.text}>{name}</Text>
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    borderRadius: radius.input,
    margin: 5,
  },
  item: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  text: {
    ...baseText,
  }
});

CategoryItem.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  widthItem: PropTypes.number,
  subCategorys: PropTypes.array,
  parentCategorys: PropTypes.array,
};