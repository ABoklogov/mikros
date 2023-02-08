import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
// import vars
import { title } from 'res/palette';

export default Title = ({ text }) => {
  return (
    <View>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    ...title,
  },
});

Title.propTypes = {
  text: PropTypes.string,
};