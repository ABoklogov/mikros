import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import CloseIcon from 'components/icons/CloseIcon';
// import vars
import { activeOpacity } from 'res/vars';

export default CloseButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onPress}
    >
      <CloseIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
});

CloseButton.propTypes = {
  onPress: PropTypes.func,
};
