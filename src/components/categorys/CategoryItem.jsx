import { useDispatch } from 'react-redux';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import PropTypes from 'prop-types';
import { fetchProducts } from 'store/catalog/catalogOperations';
// import components
import Item from 'components/shared/Item';
// import vars
import { colors, strings, images, mHorizontal } from 'res/vars';

export default CategoryItem = ({
  name,
  categorys,
  level,
  id,
}) => {
  const dispatch = useDispatch();

  const findCategory = (id, obj) => {
    for (let key in obj) {
      if (key === id) {
        return obj[key];
      };
    };
  };

  const subCategorysName = () => {
    let nameScreen = '';

    // если нет подкатегорий у данной категории, то переходим на страницу товаров
    if (categorys.length === 0) {
      nameScreen = strings.nameNestedCatalog.products;
    } else {
      switch (level) {
        case 1:
          nameScreen = strings.nameNestedCatalog.subCategorys_1;
          break;
        case 2:
          nameScreen = strings.nameNestedCatalog.subCategorys_2;
          break;
        case 3:
          nameScreen = strings.nameNestedCatalog.subCategorys_3;
          break;
        case 4:
          nameScreen = strings.nameNestedCatalog.subCategorys_4;
          break;
        case 5:
          nameScreen = strings.nameNestedCatalog.subCategorys_5;
          break;
        case 6:
          nameScreen = strings.nameNestedCatalog.subCategorys_6;
          break;
        case 7:
          nameScreen = strings.nameNestedCatalog.subCategorys_7;
          break;
        default:
          break;
      };
    };

    return nameScreen;
  };

  return (
    <View style={styles.container}>
      <Item
        text={name}
        link={subCategorysName()}
        data={{ categorys, name, id }}
        // если нет подкатегорий у данной категории, то отправляем запрос на получение товаров данной категории
        callback={categorys.length === 0 ? () => dispatch(fetchProducts(id, name)) : null}
      >
        {
          (level === 1) &&
          <Image
            style={styles.iconCategorys}
            source={findCategory(id, images.categorys)}
          />
        }
      </Item>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: mHorizontal.baseBlock,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },
  iconCategorys: {
    width: 22,
    height: 22,
    marginRight: 7,
  }
});

CategoryItem.propTypes = {
  name: PropTypes.string,
  subCategorys: PropTypes.arrayOf(PropTypes.object),
  level: PropTypes.number,
  id: PropTypes.string,
};
