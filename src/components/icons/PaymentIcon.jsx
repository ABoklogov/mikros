import * as React from "react"
import Svg, { Path } from "react-native-svg"
import PropTypes from 'prop-types';
import { colors } from 'res/vars.js';

export default PaymentIcon = ({ size, color }) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 32 32"
  >
    <Path
      d="M6.667 4c0-.736.597-1.333 1.333-1.333h16c.736 0 1.333.597 1.333 1.333v25.333L20.667 26 16 29.333 11.333 26l-4.666 3.333V4Z"
      fill={color}
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 14.667h8M12 20h8M12 9.333h8"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

PaymentIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

PaymentIcon.defaultProps = {
  color: colors.blue,
  size: 30,
};