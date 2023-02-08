import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import PropTypes from 'prop-types';
// import vars
import { colors } from 'res/vars'

export default OrderHistoryIcon = ({ color, size }) => {
  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 32 32"
    >
      <G clipPath="url(#a)">
        <Path d="M32 0H0v32h32V0Z" fill="#fff" fillOpacity={0.01} />
        <Path
          d="M26.667 8H5.333C4.597 8 4 8.597 4 9.333v17.334C4 27.403 4.597 28 5.333 28h21.334c.736 0 1.333-.597 1.333-1.333V9.333C28 8.597 27.403 8 26.667 8Z"
          fill={color}
          stroke={color}
          strokeWidth={2}
          strokeLinejoin="round"
        />
        <Path
          d="M11.966 16.006h8"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="m4 8.667 4.667-5.334h14.666L28 8.667" fill={color} />
        <Path
          d="m4 8.667 4.667-5.334h14.666L28 8.667"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h32v32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
};

OrderHistoryIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

OrderHistoryIcon.defaultProps = {
  color: colors.blue,
  size: 30,
};