import PropTypes from 'prop-types';
import { Text } from "react-native";
// import vars
import { textError } from 'res/palette.js';

export default ErrorMessage = ({ message }) => {
  return (
    <Text style={{ ...textError }}>
      {message}
    </Text>
  )
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};