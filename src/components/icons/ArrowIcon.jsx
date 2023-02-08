import * as React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';
import { colors } from 'res/vars.js';

export default ArrowIcon = ({ color }) => {
  return (
    <Svg
      width={25}
      height={25}
      fill="none"
      viewBox="0 0 15 27"
    >
      <Path
        d="m8 4 8 8-8 8"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
};

ArrowIcon.propTypes = {
  color: PropTypes.string,
};

ArrowIcon.defaultProps = {
  color: colors.grey,
};