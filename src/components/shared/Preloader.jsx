import {
  StyleSheet,
  View
} from 'react-native';
import PropTypes from 'prop-types';
// import vars
import { colors } from 'res/vars';

export default Preloader = ({ width, height, radius }) => {
  return (
    <View style={{ ...styles.preloader, width, height, borderRadius: radius }}></View>
  )
};

const styles = StyleSheet.create({
  preloader: {
    backgroundColor: colors.transparentGrey,
  },
});

Preloader.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  radius: PropTypes.number,
};