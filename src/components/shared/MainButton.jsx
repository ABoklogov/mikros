import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  Pressable
} from 'react-native';
import PropTypes from 'prop-types';
// import vars
import { colors, radius, activeOpacity } from 'res/vars';
import { textButton, rippleMainBtn } from 'res/palette';

export default MainButton = ({ text, onPress, active }) => {
  const stylesButton = {
    ...styles.button,
    backgroundColor: active ? colors.blue : colors.lightGrey,
    borderColor: active ? colors.blue : colors.lightGrey,
  };

  if (Platform.OS === 'ios') {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={activeOpacity}
        style={stylesButton}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    )
  } else {
    return (
      <Pressable
        onPress={onPress}
        android_ripple={rippleMainBtn}
        style={stylesButton}
      >
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    )
  }
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 40,
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: radius.button,
  },
  text: {
    ...textButton,
  }
});

MainButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  active: PropTypes.bool,
};

MainButton.defaultProps = {
  active: true,
};