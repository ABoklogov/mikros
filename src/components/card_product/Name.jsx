import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
} from 'react-native';
// import vars
import { fonts } from 'res/vars';
import { text } from 'res/palette'

export default Name = ({ name }) => {
  return (
    <Text style={styles.name}>{name}</Text>
  );
};

const styles = StyleSheet.create({
  name: {
    ...text,
    fontFamily: fonts.bold,
  }
});

Name.propTypes = {
  name: PropTypes.string,
};
