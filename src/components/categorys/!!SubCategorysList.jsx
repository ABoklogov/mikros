import { useSelector } from 'react-redux';
// import { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  useWindowDimensions
} from 'react-native';
// import components
import SubCategoryItem from 'components/categorys/SubCategoryItem';
// import vars
import { mHorizontal } from 'res/vars';
import { text } from 'res/palette';

export default SubCategorysList = ({ subCategorys }) => {

  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={styles.container}
        data={subCategorys}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SubCategoryItem
            name={item.name}
            id={item.id}
            parentCategorys={subCategorys}
            subCategorys={item.sub_category}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: mHorizontal.baseBlock,
    // paddingLeft: 10,
    paddingBottom: 80,
  },
});
