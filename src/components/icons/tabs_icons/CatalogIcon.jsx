import * as React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from 'prop-types';
import { colors } from 'res/vars.js';

export default CatalogIcon = ({ color, size }) => {
  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 30 30"
    >
      <Path
        d="M4.286 7.714h21.428M4.286 15.429h21.428M4.286 22.286h21.428"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
};

CatalogIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

CatalogIcon.defaultProps = {
  color: colors.darkGrey,
  size: 25,
};