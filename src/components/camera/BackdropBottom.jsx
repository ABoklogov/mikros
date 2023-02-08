import { View } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
// import vars
import { colors } from 'res/vars';

export default BackdropBottom = ({ width, height }) => {
  return (
    <LinearGradient
      colors={[
        'rgba(0, 0, 0, 0)',
        colors.backdrop,
        colors.black,
        colors.black,
        colors.black,
      ]}
    >
      <View style={{
        width: width,
        height: height / 2
      }}></View>
    </LinearGradient>
  );
};

BackdropBottom.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
