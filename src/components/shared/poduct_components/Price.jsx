import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
// import vars
import { fonts } from 'res/vars';
import { title, text, miniTitle } from 'res/palette'

export default Price = ({ price, unit, big }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={big ? styles.priceBig : styles.price}>
          {`${price}`}
        </Text>
      </View>
      <View>
        <Text style={big ? styles.unitBig : styles.price}>
          {` ₽/${unit}.`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  price: {
    ...miniTitle,
  },
  priceBig: {
    ...title,
  },
  unitBig: {
    ...text,
    fontFamily: fonts.bold,
  }
});

Price.propTypes = {
  price: PropTypes.string,
  unit: PropTypes.string,
  big: PropTypes.bool,
};

Price.defaultProps = {
  unit: 'шт',
  big: false,
};