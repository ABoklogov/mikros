// import { useSelector } from 'react-redux';
import { useNavigation } from "@react-navigation/native";
// import { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
// import components
import Sort from 'components/Sort';
import FilterButton from 'components/shared/FilterButton';
// import vars
import { mHorizontal } from 'res/vars';

export default SortComponent = ({filter}) => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.sortBox}>
      <FilterButton onPress={() => navigation.navigate(filter)} />
      <Sort />
    </View>
  );
};

const styles = StyleSheet.create({
   sortBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: mHorizontal.listProduct,
    paddingTop: 10,
  },
});

SortComponent.propTypes = {
  filter: PropTypes.string,
};