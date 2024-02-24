import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { colors } from 'res/vars.js';

export default ProfileIcon = ({ color, size }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    isLoggedIn ? (
      <Svg
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 36 35"
      >
        <Path
          d="M17.5 16.042a5.833 5.833 0 1 0 0-11.667 5.833 5.833 0 0 0 0 11.667Z"
          fill={color}
          stroke={color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M5.833 30.625v-5.833a2.917 2.917 0 0 1 2.917-2.917h17.5a2.917 2.917 0 0 1 2.917 2.917v5.833"
          fill={color}
        />
        <Path
          d="M5.833 30.625v-5.833a2.917 2.917 0 0 1 2.917-2.917h17.5a2.917 2.917 0 0 1 2.917 2.917v5.833H5.833Z"
          stroke={color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    ) : (
      <Svg
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 35 35"
      >
        <Path
          d="M17.5 16.042a5.833 5.833 0 1 0 0-11.667 5.833 5.833 0 0 0 0 11.667ZM5.833 30.625v-5.833a2.917 2.917 0 0 1 2.917-2.917h17.5a2.917 2.917 0 0 1 2.917 2.917v5.833"
          stroke={color}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    )
  )
};

ProfileIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

ProfileIcon.defaultProps = {
  color: colors.darkGrey,
  size: 25,
};