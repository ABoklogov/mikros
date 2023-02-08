import {
  StyleSheet,
  View
} from "react-native";
import { Shadow } from 'react-native-shadow-2';
import { colors, radius } from 'res/vars';

export default ProfileBlock = ({ children }) => {
  return (
    <Shadow
      distance={20}
      startColor={'#00000010'}
      offset={[0, 7]}
      style={{ width: '100%' }}
    >
      <View style={styles.wrapper}>
        {children}
      </View>
    </Shadow>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: radius.block,
    backgroundColor: colors.white,
  },
});