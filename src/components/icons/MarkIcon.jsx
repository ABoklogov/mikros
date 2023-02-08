import * as React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';
import { colors } from 'res/vars.js';

export default MarkIcon = ({ color, size }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 35 35"
      fill="none"
    >
      <Path
        d="M17.5 32.083s10.938-8.75 10.938-18.229c0-6.04-4.897-10.937-10.938-10.937-6.04 0-10.938 4.897-10.938 10.937 0 9.48 10.938 18.23 10.938 18.23Z"
        stroke={color}
        strokeWidth={2.5}
        strokeLinejoin="round"
      />
      <Path
        d="M17.5 18.23a4.375 4.375 0 1 0 0-8.75 4.375 4.375 0 0 0 0 8.75Z"
        stroke={color}
        strokeWidth={2.5}
        strokeLinejoin="round"
      />
    </Svg>
  )
}

MarkIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

MarkIcon.defaultProps = {
  color: colors.grey,
  size: 25,
};