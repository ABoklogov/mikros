import {
  StyleSheet,
  View
} from 'react-native';
import PropTypes from 'prop-types';
// import components
import Preloader from 'components/shared/Preloader';
// import vars
import { radius } from 'res/vars';

export default ProductPreloader = ({ width, height }) => {
  return (
    <View style={styles.preloaderBox}>
      <View style={styles.item}>
        <Preloader width={width} height={height} radius={radius.card} />
      </View>
      <View style={styles.item}>
        <Preloader width={width} height={height} radius={radius.card} />
      </View>
      <View style={styles.item}>
        <Preloader width={width} height={height} radius={radius.card} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  preloaderBox: {
    flexDirection: 'row',
  },
  item: {
    margin: 5,
  }
});

ProductPreloader.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};