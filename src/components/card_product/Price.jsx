import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
// import vars
import { fonts } from 'res/vars';
import { title, text } from 'res/palette'

export default Price = ({ price, unit }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.price}>{`${price}`}</Text>
      </View>
      <View>
        <Text style={styles.unit}> {`₽/${unit}.`}</Text>
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
    ...title,
  },
  unit: {
    ...text,
    fontFamily: fonts.bold,
  }
});

Price.propTypes = {
  price: PropTypes.string,
  unit: PropTypes.string,
};

Price.defaultProps = {
  unit: 'шт',
};