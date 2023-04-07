// import { useSelector } from 'react-redux';
// import { useState, useEffect } from 'react';
import {
  StyleSheet,
  // View,
  // Text,
  SafeAreaView,
  FlatList
} from 'react-native';
// import components
import CategoryItem from 'components/categorys/CategoryItem';
// import vars
// import { colors } from 'res/vars';
// import { text } from 'res/palette';

export default CategorysList = ({ categorys }) => {
  // const { catalog } = useSelector(state => state);

  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={styles.container}
        data={categorys}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CategoryItem
            name={item.name}
            categorys={item.sub_category}
            level={item.level}
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
    paddingTop: 10,
  },
});
