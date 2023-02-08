import * as React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';
import { colors } from 'res/vars.js';

export default HomeIcon = ({ active, color, size }) => {
  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 30 30"
    >
      <Path
        d="M3.75 12.813V25c0 .69.56 1.25 1.25 1.25h5.536c.69 0 1.25-.56 1.25-1.25v-8.393h6.428V25c0 .69.56 1.25 1.25 1.25H25c.69 0 1.25-.56 1.25-1.25V12.812a1.25 1.25 0 0 0-.5-1L15 3.75 4.25 11.813a1.25 1.25 0 0 0-.5 1Z"
        fill={active ? color : 'none'}
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
};

HomeIcon.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
};

HomeIcon.defaultProps = {
  color: colors.darkGrey,
  size: 25,
};