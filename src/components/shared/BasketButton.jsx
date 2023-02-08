import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
// import vars
import { colors, radius } from 'res/vars';
import { textButton } from 'res/palette';

export default BasketButton = ({ onPress, active }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        ...styles.button,
        backgroundColor: active ? colors.blue : colors.lightGrey,
        borderColor: active ? colors.blue : colors.lightGrey,
      }}
    >
      {
        active ? (
          <Text style={styles.text}>в корзину</Text>
        ) : (
          <Text style={styles.text}>нет в наличии</Text>
        )
      }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 25,
    paddingBottom: 5,
    paddingTop: 5,
    borderWidth: 1,
    borderRadius: radius.card,
  },
  text: {
    ...textButton,
  }
});

BasketButton.propTypes = {
  onPress: PropTypes.func,
  active: PropTypes.bool,
};

BasketButton.defaultProps = {
  active: true,
};