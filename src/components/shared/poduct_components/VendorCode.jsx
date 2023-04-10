import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
} from 'react-native';
// import vars
import { colors } from 'res/vars';
import { baseText, text } from 'res/palette'

export default VendorCode = ({ code, big }) => {
  return (
    <Text style={big ? styles.bigText : styles.text}>
      Артикул: <Text style={big ? styles.bigArticle : styles.article}>{code}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  bigText: {
    ...text,
    color: colors.grey
  },
  text: {
    ...baseText,
    color: colors.grey
  },
  bigArticle: {
    ...text,
  },
  article: {
    ...baseText,
  },
});

VendorCode.propTypes = {
  code: PropTypes.string,
};
