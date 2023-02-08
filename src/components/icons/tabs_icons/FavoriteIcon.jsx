import * as React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';
// import vars
import { colors } from 'res/vars'

export default FavoriteIcon = ({ isFull, color, size }) => {
  return (
    <Svg
      width={size}
      height={size}
      fill={isFull ? color : "none"}
      viewBox="1 0 28 29"
    >
      <Path
        d="M14.307 25.951 4.47 15.708C1.7 12.823 1.874 8.092 4.85 5.437c2.951-2.635 7.426-2.123 9.759 1.115l.392.545.392-.545c2.332-3.238 6.808-3.75 9.759-1.115 2.975 2.655 3.15 7.386.379 10.27l-9.837 10.244a.953.953 0 0 1-1.386 0Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
};

FavoriteIcon.propTypes = {
  isFull: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
};

FavoriteIcon.defaultProps = {
  color: colors.grey,
  size: 23,
};