import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import FilterIcon from 'components/icons/FilterIcon';
// import vars
import { activeOpacity } from 'res/vars';

export default FilterButton = ({ onPress, active }) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={active ? onPress : null}
      style={styles.button}
    >
      <FilterIcon />
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    padding: 5,
  },
});

FilterButton.propTypes = {
  onPress: PropTypes.func,
  active: PropTypes.bool,
};

FilterButton.defaultProps = {
  active: true,
};