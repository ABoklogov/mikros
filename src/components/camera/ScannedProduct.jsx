// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

// import icons
// import components
// import vars
// import { colors } from 'res/vars';

export default ScannedProduct = ({ product }) => {

  return (
    <View style={styles.container}>
      <Text>{product.NAME}</Text>
    </View>
  );
};

const styles = StyleSheet.create({

});

ScannedProduct.propTypes = {
  product: PropTypes.object,
};
