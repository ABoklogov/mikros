import {
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
// import components
import Preloader from 'components/shared/Preloader';
// import vars
import { radius } from 'res/vars';

export default HolidaysPreloader = ({ width, height }) => {
  const sizeImg = width - 5 - 15;
  const widthItem = width - 5;
  return (
    <View style={styles.preloaderBox}>
      <View style={{ ...styles.item, width: widthItem, height: height }}>
        <Preloader width={sizeImg} height={sizeImg} radius={100} />
        <Preloader width={widthItem} height={15} radius={radius.button} />
      </View>
      <View style={{ ...styles.item, width: widthItem, height: height }}>
        <Preloader width={sizeImg} height={sizeImg} radius={100} />
        <Preloader width={widthItem} height={15} radius={radius.button} />
      </View>
      <View style={{ ...styles.item, width: widthItem, height: height }}>
        <Preloader width={sizeImg} height={sizeImg} radius={100} />
        <Preloader width={widthItem} height={15} radius={radius.button} />
      </View>
      <View style={{ ...styles.item, width: widthItem, height: height }}>
        <Preloader width={sizeImg} height={sizeImg} radius={100} />
        <Preloader width={widthItem} height={15} radius={radius.button} />
      </View>
      <View style={{ ...styles.item, width: widthItem, height: height }}>
        <Preloader width={sizeImg} height={sizeImg} radius={100} />
        <Preloader width={widthItem} height={15} radius={radius.button} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  preloaderBox: {
    flexDirection: 'row',
  },
  item: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 5,
  }
});

HolidaysPreloader.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};