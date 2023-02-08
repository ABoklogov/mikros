import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
// import vars
import { colors, radius } from 'res/vars';
import { textButton } from 'res/palette';

export default MainButton = ({ text, onPress, active }) => {
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
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
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