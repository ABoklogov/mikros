import { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

import { fetchProducts } from 'store/catalog/catalogOperations';

// import components
import CategorysSubList from 'components/categorys/CategorysSubList';
// import vars
import { text } from 'res/palette';
import { colors, strings, images, activeOpacity } from 'res/vars';
// import icons
import ArrowIcon from 'components/icons/ArrowIcon';


export default CategoryItem = ({
  name,
  subCategorys,
  level,
  id,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [showCategory, setShowCategory] = useState(false);

  const showListCategorys = () => {
    // если нет подкатегорий у данной категории, то отправляем запрос на получение товаров данной категории и переходим на страницу товаров
    if (subCategorys.length === 0) {
      dispatch(fetchProducts(id, name));
      navigation.navigate(strings.nameNestedCatalog.products)
    };

    setShowCategory(!showCategory);
  };

  const findCategory = (id, obj) => {
    for (let key in obj) {
      if (key === id) {
        return obj[key];
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={showListCategorys}
        style={styles.btm}
      >
        <View style={styles.item}>
          {
            level === 1 &&
            <Image
              style={styles.iconCategorys}
              source={findCategory(id, images.categorys)}
            />
          }

          <Text style={styles.name}>{name}</Text>
        </View>

        {subCategorys.length > 0 && (
          <View style={{
            ...styles.icon,
            transform: showCategory ?
              [{ rotate: '90deg' }] :
              [{ rotate: '0deg' }]
          }}>
            <ArrowIcon />
          </View>
        )}
      </TouchableOpacity>

      {
        (subCategorys.length > 0) && (
          <View>
            {showCategory && <CategorysSubList subCategorys={subCategorys} />}
          </View>
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    //   alignItems: 'center',
    //   justifyContent: 'center',
  },
  btm: {
    position: 'relative',
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderColor: colors.borderColor,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    ...text,
  },
  icon: {
    position: 'absolute',
    top: '50%',
    right: 16,
  },
  iconCategorys: {
    width: 22,
    height: 22,
    // backgroundColor: colors.grey,
    marginRight: 7,
  }
});

CategoryItem.propTypes = {
  name: PropTypes.string,
  subCategorys: PropTypes.arrayOf(PropTypes.object),
  level: PropTypes.number,
  id: PropTypes.string,
};
