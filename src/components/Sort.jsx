import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
// import components

// import vars
import { colors, radius, activeOpacity } from 'res/vars';
import { textButton, rippleBasketBtn } from 'res/palette';

export default Sort = () => {
  return (
    <View style={styles.container}>
      <Text>Сортировка по ...</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'tomato'
  }
});

Sort.propTypes = {

};

Sort.defaultProps = {

};