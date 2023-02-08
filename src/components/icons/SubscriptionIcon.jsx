import * as React from "react";
import Svg, { Path, Ellipse } from "react-native-svg";
import PropTypes from 'prop-types';
import { colors } from 'res/vars.js';

export default SubscriptionIcon = ({ color, size }) => {
  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 -1 29 32"
    >
      <Path d="M27.603 14.571v-10H1v20h26.603" fill={color} />
      <Path
        d="M27.603 14.571v-10H1v20h26.603v-10Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="m1 4.571 13.302 10 13.301-10" fill={color} />
      <Path
        d="m1 4.571 13.302 10 13.301-10"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Ellipse cx={25.703} cy={20.514} rx={7.297} ry={7.314} fill="#fff" />
      <Path
        d="m22.943 21.394 2.11 1.463 3.375-3.657"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
};

SubscriptionIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

SubscriptionIcon.defaultProps = {
  color: colors.blue,
  size: 30,
};