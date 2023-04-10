import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';
// import vars
import { colors } from 'res/vars.js';

export default ArrowBackIcon = ({ color }) => {
  return (
    <Svg
      width={25}
      height={25}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        d="M16 20L8 12L16 4"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
};

ArrowBackIcon.propTypes = {
  color: PropTypes.string,
};

ArrowBackIcon.defaultProps = {
  color: colors.darkGrey,
};