import * as React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';
import { colors } from 'res/vars.js';

export default InfoIcon = ({ color, size }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
    >
      <Path
        d="M2.93 17.07A9.973 9.973 0 0 1-.123 9.877c0-5.523 4.477-10 10-10a9.97 9.97 0 0 1 7.19 3.05l.003.003a9.964 9.964 0 0 1 2.807 6.947c0 5.523-4.477 10-10 10-2.7 0-5.15-1.07-6.95-2.81l.003.003zm12.73-1.41A8.004 8.004 0 1 0 4.34 4.34a8.004 8.004 0 1 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
        fill={color}
      />
    </Svg>
  )
}

InfoIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

InfoIcon.defaultProps = {
  color: colors.grey,
  size: 20,
};