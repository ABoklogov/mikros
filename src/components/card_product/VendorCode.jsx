import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
} from 'react-native';
// import vars
import { colors } from 'res/vars';
import { text } from 'res/palette'

export default VendorCode = ({ code }) => {
  return (
    <Text style={styles.text}>
      Артикул: <Text style={styles.article}>{code}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    ...text,
    color: colors.grey
  },
  article: {
    ...text,
  }
});

VendorCode.propTypes = {
  code: PropTypes.string,
};
