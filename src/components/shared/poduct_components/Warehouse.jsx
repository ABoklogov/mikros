import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
// import vars
import { colors } from 'res/vars';
import { miniText } from 'res/palette'

export default Warehouse = ({ store }) => {
  const quantityBase = () => {
    if (store[475] > '0' && store[475] < 100) {
      return store[475];
    } else if (store[475] >= 100) {
      return 'Достаточно';
    } else if (store[475] === '0') {
      return 'Нет в наличии';
    };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Наличие на складах:</Text>
      <Text style={styles.warehouse}>{`Основной - ${quantityBase()}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  text: {
    ...miniText,
    fontSize: 13,
    color: colors.grey,
  },
  warehouse: {
    ...miniText,
    fontSize: 13,
  },
});

Warehouse.propTypes = {
  name: PropTypes.string,
};
