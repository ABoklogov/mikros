import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
} from 'react-native';
// import icons
// import components
import ScannedProductImg from 'components/camera/ScannedProductImg';
import VendorCode from 'components/card_product/VendorCode';
import Name from 'components/card_product/Name';
import Warehouse from 'components/card_product/Warehouse';
import Price from 'components/card_product/Price';
// import vars
// import { fonts } from 'res/vars';
// import { text } from 'res/palette'

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

      <View style={styles.nameBlock}>
        <Name name={product.NAME} />
      </View>

      <View style={styles.block}>
        <Warehouse store={product.STORE} />
      </View>

      <View style={styles.block}>
        <Price
          price={product.PRICE}
          unit={product.PROPERTYS.CML2_BASE_UNIT}
        />
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
  nameBlock: {
    marginBottom: 15,
  }
});

ScannedProduct.propTypes = {
  product: PropTypes.object,
};
