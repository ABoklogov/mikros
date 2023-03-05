import { View } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
// import vars
import { colors } from 'res/vars';

export default BackdropTop = ({ width, height }) => {
  return (
    <LinearGradient
      colors={[
        colors.black,
        colors.backdrop,
        'rgba(0, 0, 0, 0)',
      ]}
    >
      <View style={{
        width: width,
        height: height / 4
      }}></View>
    </LinearGradient>
  );
};

BackdropTop.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
