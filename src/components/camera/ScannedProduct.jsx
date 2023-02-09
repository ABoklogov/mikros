import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
// import icons
// import components
import ScannedProductImg from 'components/camera/ScannedProductImg';
import VendorCode from 'components/card_product/VendorCode';
// import vars
import { fonts } from 'res/vars';
import { text } from 'res/palette'

export default ScannedProduct = ({ product }) => {
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <VendorCode code={product.PROPERTYS.CML2_ARTICLE} />
      </View>

      <View style={styles.block}>
        <ScannedProductImg
          productImg={product.DETAIL_PICTURE}
        />
      </View>
      <View style={styles.block}>
        <Text style={styles.title}>{product.NAME}</Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.title}>{`${product.PRICE} ₽/${product.PROPERTYS.CML2_BASE_UNIT}.`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  block: {
    marginBottom: 5,
    // borderWidth: 1,
    // borderColor: 'tomato'
  },
  title: {
    ...text,
    fontFamily: fonts.bold,
  }
});

ScannedProduct.propTypes = {
  product: PropTypes.object,
};
