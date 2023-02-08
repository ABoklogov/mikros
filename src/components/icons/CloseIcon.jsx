import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import PropTypes from 'prop-types';
import { colors } from 'res/vars.js';

export default CloseIcon = ({ color, size }) => {
  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 35 35"
    >
      <G clipPath="url(#a)">
        <Path d="M35 0H0v35h35V0Z" fill="#fff" fillOpacity={0.01} />
        <Path
          d="m7 7 21 21M7 28 28 7"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h35v35H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
};

CloseIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

CloseIcon.defaultProps = {
  color: colors.grey,
  size: 30
};