
import Svg, { Path } from "react-native-svg"
import PropTypes from 'prop-types';
import { colors } from 'res/vars.js';

export default BarcodeScanIcon = ({ color }) => (
  // <Svg
  //   width={40}
  //   height={40}
  //   viewBox="0 0 23 25"
  //   fill="none"
  // >
  //   <Path
  //     d="M4 5.4A1.4 1.4 0 0 1 5.4 4H7a1 1 0 0 0 0-2H5.4A3.4 3.4 0 0 0 2 5.4V7a1 1 0 0 0 2 0V5.4ZM17 2a1 1 0 1 0 0 2h1.6A1.4 1.4 0 0 1 20 5.4V7a1 1 0 1 0 2 0V5.4A3.4 3.4 0 0 0 18.6 2H17ZM4 17a1 1 0 1 0-2 0v1.6A3.4 3.4 0 0 0 5.4 22H7a1 1 0 1 0 0-2H5.4A1.4 1.4 0 0 1 4 18.6V17Zm18 0a1 1 0 1 0-2 0v1.6a1.4 1.4 0 0 1-1.4 1.4H17a1 1 0 1 0 0 2h1.6a3.4 3.4 0 0 0 3.4-3.4V17ZM1 11a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2H1Z"
  //     fill={color}
  //   />
  // </Svg>

  <Svg
    width={35}
    height={35}
    viewBox="0 0 23 25"
    strokeWidth={2}
    stroke={color}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Path d="M0 0h24v24H0z" stroke="none" />
    <Path d="M4 7V6a2 2 0 0 1 2-2h2M4 17v1a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v1M16 20h2a2 2 0 0 0 2-2v-1M5 11h1v2H5zM10 11v2M14 11h1v2h-1zM19 11v2" />
  </Svg>
)

BarcodeScanIcon.propTypes = {
  color: PropTypes.string,
};

BarcodeScanIcon.defaultProps = {
  color: colors.grey,
};