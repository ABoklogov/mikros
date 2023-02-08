import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native';
// import vars
import { colors } from 'res/vars';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default FilterCamera = ({ width, height }) => {
  // const
  return (
    <View style={styles.container}>
      <View style={{ ...styles.viewBackdropTop, width, height: height / 2 }}></View>
      <View>
        <View style={styles.viewBackdrop}></View>
        <View style={{ ...styles.viewBarcode, width: width - 40, height: height }}></View>
        <View style={styles.viewBackdrop}></View>
      </View>
      <View style={{ ...styles.viewBackdropTop, width, height: height / 2 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  viewBackdropTop: {
    backgroundColor: colors.backdrop,
    // width: WIDTH,
    borderWidth: 1,
    borderColor: 'blue',
  },
  viewBarcode: {
    // width: WIDTH - 40,
    // height: HEIGHT / 4,
    borderWidth: 1,
    borderColor: colors.red,
    // borderRadius: radius.card,
  }
});