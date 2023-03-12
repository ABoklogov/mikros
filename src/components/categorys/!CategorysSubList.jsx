import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import CategoryItem from 'components/categorys/CategoryItem';
// import { colors } from 'res/vars';

export default CategorysSubList = ({ subCategorys }) => {
  return (
    <View style={styles.container}>
      {subCategorys.map(({
        id,
        name,
        sub_category,
        level,
      }) => (
        <View key={id} style={styles.item}>
          <CategoryItem
            name={name}
            subCategorys={sub_category}
            id={id}
            level={level}
          />
        </View>
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

CategorysSubList.propTypes = {
  subCategorys: PropTypes.arrayOf(PropTypes.object),
};
