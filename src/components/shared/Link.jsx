import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
// import vars
import { colors, activeOpacity } from 'res/vars';
import { text } from 'res/palette';

export default Link = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onPress}
      style={styles.link}
    >
      <Text style={styles.linkText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    marginHorizontal: 15,
    paddingBottom: 8,
    paddingTop: 8,
    zIndex: -1,
  },
  linkText: {
    ...text,
    color: colors.blue,
    textAlign: 'center',
  },
});

Link.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};