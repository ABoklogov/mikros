import * as React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';
import { colors } from 'res/vars.js';

export default SearchIcon = ({ color }) => {
  return (
    <Svg
      width={21}
      height={21}
      fill="none"
      viewBox="1 1 21 24"
    >
      <Path
        d="m16.964 17.72 4.465 4.465-4.465-4.465Zm2.233-5.58a7.812 7.812 0 1 1-15.625 0 7.812 7.812 0 0 1 15.625 0Z"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
};

SearchIcon.propTypes = {
  color: PropTypes.string,
};

SearchIcon.defaultProps = {
  color: colors.grey,
};