import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import CloseIcon from 'components/icons/CloseIcon';

export default CloseButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
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
