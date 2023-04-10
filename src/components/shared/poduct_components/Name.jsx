import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
} from 'react-native';
// import vars
import { fonts } from 'res/vars';
import { text, miniText } from 'res/palette'

export default Name = ({ name, big }) => {
  return (
    <Text style={big ? styles.bigName : styles.name}>
      {name}
    </Text>
  );
};

const styles = StyleSheet.create({
  bigName: {
    ...text,
    fontFamily: fonts.bold,
  },
  name: {
    ...miniText,
  },
});

Name.propTypes = {
  name: PropTypes.string,
};
