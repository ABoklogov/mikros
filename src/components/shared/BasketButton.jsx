import {
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
  Pressable
} from 'react-native';
import PropTypes from 'prop-types';
// import vars
import { colors, radius, activeOpacity } from 'res/vars';
import { textButton, rippleBasketBtn } from 'res/palette';

export default BasketButton = ({ onPress, active }) => {
  if (Platform.OS === 'ios') {
    return (
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={active ? onPress : null}
        style={{
          ...styles.button,
          backgroundColor: active ? colors.blue : colors.lightGrey,
          borderColor: active ? colors.blue : colors.lightGrey,
        }}
      >
        <Text style={styles.text}>
          {active ? 'в корзину' : 'нет в наличии'}
        </Text>
      </TouchableOpacity>
    )
  } else {
    return (
      <Pressable
        onPress={active ? onPress : null}
        android_ripple={rippleBasketBtn}
        style={{
          ...styles.button,
          backgroundColor: active ? colors.blue : colors.lightGrey,
          borderColor: active ? colors.blue : colors.lightGrey,
        }}
      >
        <Text style={styles.text}>
          {active ? 'в корзину' : 'нет в наличии'}
        </Text>
      </Pressable>
    )
  }
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