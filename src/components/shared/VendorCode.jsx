import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
// import vars
import { baseText } from 'res/palette.js';
import { colors } from 'res/vars';

export default VendorCode = ({ vendorCode }) => {
  return (
    <Text style={styles.vendorCode}>Артикул: {vendorCode}</Text>
  );
};

const styles = StyleSheet.create({
  vendorCode: {
    ...baseText,
    color: colors.grey,
  },
});

VendorCode.propTypes = {
  vendorCode: PropTypes.string,
};
