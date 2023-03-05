import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
// import vars
import { colors, radius } from 'res/vars';

export default ViewBarcode = ({ width, height, barcode }) => {
  const colorBorder = barcode ? colors.blue : colors.grey;
  return (
    <View style={{
      ...styles.viewBarcode,
      width: width,
      height: height
    }}>
      <View style={styles.subView}>
        <View style={{
          ...styles.cornerView,
          ...styles.topLeft,
          borderLeftColor: colorBorder,
          borderTopColor: colorBorder,
        }}></View>
        <View style={{
          ...styles.cornerView,
          ...styles.topRight,
          borderRightColor: colorBorder,
          borderTopColor: colorBorder,
        }}></View>
      </View>
      <View style={{
        ...styles.centerLine,
        borderColor: colorBorder
      }}></View>
      <View style={{ ...styles.subView, width: width }}>
        <View style={{
          ...styles.cornerView,
          ...styles.bottomLeft,
          borderLeftColor: colorBorder,
          borderBottomColor: colorBorder,
        }}></View>
        <View style={{
          ...styles.cornerView,
          ...styles.bottomRight,
          borderRightColor: colorBorder,
          borderBottomColor: colorBorder,
        }}></View>
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
    borderTopWidth: 3,
    borderTopLeftRadius: radius.block
  },
  topRight: {
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderTopRightRadius: radius.block
  },
  bottomLeft: {
    borderLeftWidth: 3,
    borderBottomWidth: 3,
    borderBottomLeftRadius: radius.block
  },
  bottomRight: {
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderBottomRightRadius: radius.block
  },
  centerLine: {
    borderWidth: 1,
  }
});

ViewBarcode.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  barcode: PropTypes.bool,
};
