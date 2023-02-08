import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
// import vars
import { colors, radius } from 'res/vars';

export default ViewBarcode = ({ width, height }) => {
  return (
    <View style={{
      ...styles.viewBarcode,
      width: width - 40,
      height: height / 3.8
    }}>
      <View style={styles.subView}>
        <View style={[styles.cornerView, styles.topLeft]}></View>
        <View style={[styles.cornerView, styles.topRight]}></View>
      </View>
      <View style={styles.centerLine}></View>
      <View style={{ ...styles.subView, width: width - 40 }}>
        <View style={[styles.cornerView, styles.bottomLeft]}></View>
        <View style={[styles.cornerView, styles.bottomRight]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBarcode: {
    justifyContent: 'space-between',
  },
  subView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cornerView: {
    width: 40,
    height: 40,
  },
  topLeft: {
    borderLeftWidth: 3,
    borderLeftColor: colors.grey,
    borderTopWidth: 3,
    borderTopColor: colors.grey,
    borderTopLeftRadius: radius.block
  },
  topRight: {
    borderRightWidth: 3,
    borderRightColor: colors.grey,
    borderTopWidth: 3,
    borderTopColor: colors.grey,
    borderTopRightRadius: radius.block
  },
  bottomLeft: {
    borderLeftWidth: 3,
    borderLeftColor: colors.grey,
    borderBottomWidth: 3,
    borderBottomColor: colors.grey,
    borderBottomLeftRadius: radius.block
  },
  bottomRight: {
    borderRightWidth: 3,
    borderRightColor: colors.grey,
    borderBottomWidth: 3,
    borderBottomColor: colors.grey,
    borderBottomRightRadius: radius.block
  },
  centerLine: {
    borderColor: colors.grey,
    borderWidth: 1.5,
  }
});

ViewBarcode.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
