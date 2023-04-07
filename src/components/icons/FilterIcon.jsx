import Svg, { Path, Circle } from "react-native-svg";
import PropTypes from 'prop-types';
import { colors } from 'res/vars.js';

export default FilterIcon = ({ color }) => {
  return (
    <Svg
      width={35}
      height={35}
      viewBox="0 0 35 35"
    >
      <Path d="M24.9131 11.0435L6.04352 11.0435" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <Circle cx="28.9566" cy="11.0435" r="3.04348" stroke={color} strokeWidth="2" />
      <Path d="M28.9566 24.3043L10.087 24.3043" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <Circle cx="6.04354" cy="24.3043" r="3.04348" stroke={color} strokeWidth="2" />
    </Svg>
  )
}

FilterIcon.propTypes = {
  color: PropTypes.string,
};

FilterIcon.defaultProps = {
  color: colors.blue,
};