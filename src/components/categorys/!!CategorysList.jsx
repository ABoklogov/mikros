// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  useWindowDimensions
} from 'react-native';
// import components
import CategoryItem from 'components/categorys/CategoryItem';
// import vars
// import { colors } from 'res/vars';
import { text } from 'res/palette';

export default CategorysList = ({ categorys }) => {
  // const dispatch = useDispatch();
  const window = useWindowDimensions();
  // высчитываем ширину одного элемента
  const numColumn = 2;
  const widthItem = ((window.width - 20) - 4 * 5) / numColumn;

  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={styles.container}
        data={categorys}
        numColumns={numColumn}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CategoryItem
            widthItem={widthItem}
            name={item.name}
            subCategorys={item.sub_category}
            parentCategorys={categorys}
            id={item.id}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingBottom: 80,

  },
});
