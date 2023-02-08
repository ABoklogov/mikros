import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import PropTypes from 'prop-types';
import { colors } from 'res/vars.js';

export default ShowPassIcon = ({ color }) => {
  return (
    <Svg
      width={40}
      height={26}
      fill="none"
      viewBox="0 0 40 26"
    >
      <Path
        d="M38.19 12a37.388 37.388 0 0 1-4.725 3.616c-3.522 2.27-8.282 4.467-13.465 4.467s-9.943-2.197-13.465-4.467A37.382 37.382 0 0 1 1.81 12a37.378 37.378 0 0 1 4.725-3.616C10.057 6.114 14.817 3.917 20 3.917s9.943 2.197 13.465 4.467A37.384 37.384 0 0 1 38.19 12Z"
        stroke={color}
        strokeWidth={2.5}
      />
      <Circle cx={20} cy={12} r={4.083} stroke={color} strokeWidth={2.5} />
      <Path stroke={color} strokeWidth={2.5} d="M30.267.83 8.934 24.831" />
    </Svg>
  )
};

ShowPassIcon.propTypes = {
  color: PropTypes.string,
};

ShowPassIcon.defaultProps = {
  color: colors.white,
};